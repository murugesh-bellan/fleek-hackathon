import { buildAgent, lastAssistantText, type ToolExec } from '../agent/factory.js';
import { learnFromInteraction } from '../memory.js';
import { getBuyer } from '../db/index.js';
import { closeDb } from '../db/client.js';
import type { AgentSession } from '@earendil-works/pi-coding-agent';

/**
 * Scripted end-to-end demo: buyer -> Jack -> ranked matches -> buyer picks ->
 * Jack dispatches Jill to negotiate -> closed deal / escalation, all in-thread.
 * The money-shot without WhatsApp — run repeatedly to rehearse.
 */
const BUYER_PHONE = process.env.BUYER_PHONE ?? '+14155550101';

const SCRIPT = [
  'Hey Jack — I need around 300 units of 90s branded sportswear, Grade B or better, and I want to stay under $5 a unit. What can you find?',
  'Nice. Go ahead and pursue option 1. Also try the mixed 90s bale from Nord for me.',
];

async function main(): Promise<void> {
  const buyer = await getBuyer(BUYER_PHONE);
  if (!buyer) {
    console.error(`No buyer ${BUYER_PHONE}. Run: npm run seed`);
    process.exit(1);
  }

  console.log(`\n=== Jack & Jill demo — buyer: ${buyer.name} ===\n`);
  let history: AgentSession['messages'] = [];

  for (const line of SCRIPT) {
    console.log(`\x1b[36myou  ›\x1b[0m ${line}\n`);

    const toolExecs: ToolExec[] = [];
    const session = await buildAgent({
      persona: 'jack',
      buyerPhone: BUYER_PHONE,
      history,
      onToolResult: (exec) => toolExecs.push(exec),
    });
    try {
      await session.prompt(line);
      const reply = lastAssistantText(session);
      history = session.messages;
      await learnFromInteraction(BUYER_PHONE, toolExecs);
      console.log(`\x1b[32mjack ›\x1b[0m ${reply}\n`);
    } finally {
      session.dispose();
    }
    console.log('─'.repeat(72));
  }
  console.log('\n=== demo complete ===\n');
  await closeDb();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
