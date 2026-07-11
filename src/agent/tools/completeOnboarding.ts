import { type AgentToolResult, defineTool } from '@earendil-works/pi-coding-agent';
import { Type } from 'typebox';
import { getBuyer, upsertBuyer } from '../../db/index.js';

/** Capture the identity fields required before Abhi starts sourcing. */
export function makeCompleteOnboardingTool(buyerPhone: string) {
  return defineTool({
    name: 'complete_onboarding',
    label: 'Complete Onboarding',
    description:
      "Record a new buyer's name and store/company name. Call this once, as soon as you have both, before doing anything else.",
    promptSnippet: 'Completes buyer onboarding once name and company are known.',
    parameters: Type.Object({
      name: Type.String({ description: "The buyer's name." }),
      company: Type.String({ description: 'Their store or company name.' }),
    }),
    execute: async (_toolCallId, params): Promise<AgentToolResult<Record<string, unknown>>> => {
      const name = params.name.trim();
      const company = params.company.trim();
      if (!name || !company) {
        return {
          content: [{ type: 'text' as const, text: 'Both name and company are required.' }],
          details: { error: 'Both name and company are required.' },
        };
      }
      const existing = await getBuyer(buyerPhone);
      await upsertBuyer({
        phone: buyerPhone,
        name,
        company,
        onboardedAt: new Date().toISOString(),
        profile: existing?.profile ?? { brandsPursued: [], notes: [] },
      });
      return {
        content: [
          { type: 'text' as const, text: `Onboarding complete for ${name} at ${company}.` },
        ],
        details: { onboarded: true, name, company },
      };
    },
  });
}
