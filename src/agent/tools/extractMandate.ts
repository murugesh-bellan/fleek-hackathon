import { type AgentToolResult, defineTool } from '@earendil-works/pi-coding-agent';
import { Type } from 'typebox';
import { extractMandate as extractMandateDomain } from '../../mandate.js';

/**
 * extract_mandate: turn the buyer's natural-language demand into a structured
 * sourcing mandate and persist it. Returns the mandate id, parsed fields, and
 * any critical fields still missing.
 */
export function makeExtractMandateTool(buyerPhone: string) {
  return defineTool({
    name: 'extract_mandate',
    label: 'Extract Mandate',
    description:
      "Turn the buyer's natural-language demand into a structured sourcing mandate. Call this once you have (or have asked for) the key details. Returns the mandate id, the parsed fields, and any critical fields the buyer still hasn't specified.",
    promptSnippet: 'Parses a buyer demand into a structured sourcing mandate.',
    parameters: Type.Object({
      demand: Type.String({
        description:
          "The buyer's full demand in their own words, combining everything they've said so far (category/style, quantity, grade, budget).",
      }),
    }),
    execute: async (_toolCallId, params): Promise<AgentToolResult<Record<string, unknown>>> => {
      const { mandate, missing } = await extractMandateDomain(buyerPhone, params.demand);
      const details = {
        mandateId: mandate.id,
        category: mandate.category,
        style: mandate.style,
        quantity: mandate.quantity,
        gradeFloor: mandate.gradeFloor,
        priceCeiling: mandate.priceCeiling,
        missing,
      };
      const text = `Mandate ${mandate.id} saved.\nCategory: ${mandate.category}\nStyle: ${mandate.style}\nQuantity: ${mandate.quantity}\nGrade floor: ${mandate.gradeFloor}\nPrice ceiling: $${mandate.priceCeiling}/unit${missing.length ? `\nMissing: ${missing.join(', ')}` : ''}`;
      return {
        content: [{ type: 'text' as const, text }],
        details,
      };
    },
  });
}
