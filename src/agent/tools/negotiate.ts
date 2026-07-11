import { Type } from 'typebox';
import { defineTool, type AgentToolResult } from '@earendil-works/pi-coding-agent';
import { negotiateSelections } from '../../negotiation.js';
import { getMandate } from '../../db/index.js';

/**
 * negotiate: dispatch Jill to negotiate the buyer's chosen bale(s) with the
 * supplier(s), autonomously within the mandate. Returns, per option, whether
 * it CLOSED (with final terms) or ESCALATED (terms fell outside the mandate).
 */
export const negotiateTool = defineTool({
  name: 'negotiate',
  label: 'Negotiate',
  description:
    "Dispatch Jill to negotiate the buyer's chosen option(s) with the supplier, autonomously within the mandate (<= price ceiling, >= grade floor, >= quantity). Call this once the buyer picks which match(es) to pursue. Returns, per option, whether it CLOSED (with final terms) or ESCALATED (terms fell outside the mandate — needs the buyer's call).",
  promptSnippet: 'Autonomously negotiates chosen bales within the mandate via Jill.',
  parameters: Type.Object({
    mandateId: Type.String({ description: 'The mandate id.' }),
    baleIds: Type.Array(Type.String(), {
      description: 'The bale id(s) of the option(s) the buyer chose to pursue.',
    }),
  }),
  execute: async (_toolCallId, params): Promise<AgentToolResult<Record<string, unknown>>> => {
    const mandate = await getMandate(params.mandateId);
    if (!mandate) {
      return {
        content: [{ type: 'text' as const, text: 'Unknown mandateId.' }],
        details: { error: 'Unknown mandateId' },
      };
    }
    if (params.baleIds.length === 0) {
      return {
        content: [{ type: 'text' as const, text: 'No baleIds provided.' }],
        details: { error: 'No baleIds' },
      };
    }
    const outcomes = await negotiateSelections(params.mandateId, params.baleIds);
    const text = outcomes
      .map((o) => {
        if (o.state === 'CLOSED' && o.terms) {
          return `${o.supplier} (${o.baleId}): CLOSED at $${o.terms.pricePerUnit}/unit, grade ${o.terms.grade}, ${o.terms.quantity} units.`;
        }
        return `${o.supplier} (${o.baleId}): ESCALATED — ${o.outcome ?? 'no agreement inside the mandate.'}`;
      })
      .join('\n\n');
    return {
      content: [{ type: 'text' as const, text }],
      details: { mandateId: params.mandateId, outcomes },
    };
  },
});
