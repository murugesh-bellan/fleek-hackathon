import { stdin, stdout } from 'node:process';
import { createInterface } from 'node:readline/promises';
import type { AgentSession } from '@earendil-works/pi-coding-agent';
import { buildAgent, lastAssistantText, type ToolExec } from '../agent/factory.js';
import { getBuyer } from '../db/index.js';
import { learnFromInteraction } from '../memory.js';

/**
 * Interactive CLI to chat with Abhi as a buyer — the demo money-shot without
 * WhatsApp. Uses the seeded buyer by default.
 */
const BUYER_PHONE = process.env.BUYER_PHONE ?? '+14155550101';

async function main(): Promise<void> {
  const buyer = await getBuyer(BUYER_PHONE);
  if (!buyer) {
    console.error(`No buyer ${BUYER_PHONE}. Run: npm run seed`);
    process.exit(1);
  }
  console.log(`\n💬  Chatting with Abhi as ${buyer.name} (${BUYER_PHONE}).`);
  console.log('    Type your sourcing request. Ctrl+C to quit.\n');

  const rl = createInterface({ input: stdin, output: stdout });
  let history: AgentSession['messages'] = [];

  while (true) {
    const line = (await rl.question('you › ')).trim();
    if (!line) continue;
    process.stdout.write('\nabhi › ');

    const toolExecs: ToolExec[] = [];
    const session = await buildAgent({
      persona: 'abhi',
      buyerPhone: BUYER_PHONE,
      history,
      onToolResult: (exec) => toolExecs.push(exec),
    });
    try {
      await session.prompt(line);
      const reply = lastAssistantText(session);
      history = session.messages;
      await learnFromInteraction(BUYER_PHONE, toolExecs);
      console.log(reply || '(…)');
    } finally {
      session.dispose();
    }
    console.log();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
