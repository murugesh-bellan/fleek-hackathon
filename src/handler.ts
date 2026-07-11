import { config } from './config.js';
import { buildAgent, lastAssistantText, type ToolExec } from './agent/factory.js';
import { sendMessage, type InboundMessage } from './wassist.js';
import { getBuyer, getSupplierByPhone, upsertBuyer, getThread, saveThread } from './db/index.js';
import { learnFromInteraction } from './memory.js';
import type { AgentSession } from '@earendil-works/pi-coding-agent';

/**
 * Resolve persona by counterparty and process one inbound WhatsApp message.
 * Buyer -> Jack. Supplier -> Jill (real-supplier relay; the demo uses in-process
 * Jill, so this path is the optional hybrid). Unknown -> new buyer (Jack).
 */
export async function processInbound(inbound: InboundMessage): Promise<string> {
  const { from, conversationId, body } = inbound;

  const supplier = await getSupplierByPhone(from);
  const isSupplier = !!supplier;
  if (!isSupplier && !(await getBuyer(from))) {
    // First contact — onboard as a buyer.
    await upsertBuyer({ phone: from, name: 'WhatsApp buyer', profile: { brandsPursued: [], notes: [] } });
  }

  const role: 'buyer' | 'supplier' = isSupplier ? 'supplier' : 'buyer';
  const thread = (await getThread(from)) ?? { phone: from, role, conversationId, history: [] };
  const history = (thread.history ?? []) as AgentSession['messages'];

  let reply: string;
  if (role === 'buyer') {
    const { reply: jackReply, history: nextHistory } = await runJackTurn(from, history, body);
    reply = jackReply;
    await saveThread({ phone: from, role, conversationId, history: nextHistory });
  } else {
    // Real-supplier inbound (optional hybrid mode). In the core demo, Jill runs
    // in-process during Jack's negotiate tool, so suppliers never text in.
    reply =
      "Thanks — this line is handled by Fleek's sourcing agent. A live negotiation will reach you here when a buyer's mandate matches your stock.";
    await saveThread({ phone: from, role, conversationId, history });
  }

  await deliver(conversationId, reply);
  return reply;
}

/** Run one Jack turn: build the session, prompt, capture tool execs for memory. */
async function runJackTurn(
  buyerPhone: string,
  history: AgentSession['messages'],
  userMessage: string,
): Promise<{ reply: string; history: AgentSession['messages'] }> {
  const toolExecs: ToolExec[] = [];
  const session = await buildAgent({
    persona: 'jack',
    buyerPhone,
    history,
    onToolResult: (exec) => toolExecs.push(exec),
  });
  try {
    await session.prompt(userMessage);
    const reply = lastAssistantText(session);
    // Memory brain: distil revealed preferences into the buyer's profile.
    await learnFromInteraction(buyerPhone, toolExecs);
    return { reply, history: session.messages };
  } finally {
    session.dispose();
  }
}

/** Send the reply over WhatsApp, or log it if Wassist isn't configured (local dev). */
async function deliver(conversationId: string, reply: string): Promise<void> {
  if (!reply) return;
  if (!config.wassist.apiKey) {
    console.log(`\n[no WASSIST_API_KEY — would send to ${conversationId}]\n${reply}\n`);
    return;
  }
  await sendMessage(conversationId, reply);
}
