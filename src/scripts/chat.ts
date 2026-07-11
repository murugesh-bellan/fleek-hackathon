import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import { buildAgent, lastAssistantText, type ToolExec } from '../agent/factory.js';
import { learnFromInteraction } from '../memory.js';
import { getBuyer } from '../db/index.js';
import type { AgentSession } from '@earendil-works/pi-coding-agent';

/**
 * Interactive CLI to chat with Jack as a buyer — the demo money-shot without
 * WhatsApp. Uses the seeded buyer by default.
 */
const BUYER_PHONE = process.env.BUYER_PHONE ?? '+14155550101';

async function main(): Promise<void> {
  const buyer = await getBuyer(BUYER_PHONE);
  if (!buyer) {
    console.error(`No buyer ${BUYER_PHONE}. Run: npm run seed`);
    process.exit(1);
  }
  console.log(`\n💬  Chatting with Jack as ${buyer.name} (${BUYER_PHONE}).`);
  console.log('    Type your sourcing request. Ctrl+C to quit.\n');

  const rl = createInterface({ input: stdin, output: stdout });
  let history: AgentSession['messages'] = [];

  while (true) {
    const line = (await rl.question('you › ')).trim();
    if (!line) continue;
    process.stdout.write('\njack › ');

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
