import { StringEnum } from '@earendil-works/pi-ai';
import { type AgentToolResult, defineTool } from '@earendil-works/pi-coding-agent';
import { Type } from 'typebox';
import { escalationNote, insideContract } from '../../contract.js';
import { saveDeal, saveNegotiation } from '../../db/index.js';
import { id } from '../../ids.js';
import type { NegotiationRuntime } from '../../negotiation.js';
import type { DealTerms, Grade } from '../../types.js';

/**
 * accept_deal: accept the supplier's current terms and close. Enforces the
 * contract in code: only closes when the terms are inside the mandate; refuses
 * (returns an error) otherwise, so Sanket must escalate or keep negotiating.
 */
export function acceptDealTool(state: NegotiationRuntime) {
  return defineTool({
    name: 'accept_deal',
    label: 'Accept Deal',
    description:
      'Accept the supplier current terms and close the deal. The tool checks the terms against the contract in code: it closes only when price <= ceiling, grade >= floor, and quantity >= needed. If the terms are outside the contract it refuses and tells you the gap — do not accept outside terms; escalate or keep negotiating instead.',
    promptSnippet: 'Closes the deal if the terms are inside the mandate; refuses otherwise.',
    parameters: Type.Object({
      message: Type.String({ description: 'Your closing confirmation line to the supplier.' }),
      pricePerUnit: Type.Number({ description: 'The price per unit in USD you are accepting.' }),
      grade: StringEnum(['A', 'B', 'C', 'D'] as const satisfies readonly Grade[], {
        description: 'The grade being accepted.',
      }),
      quantity: Type.Integer({ description: 'The number of units being accepted.' }),
    }),
    execute: async (_toolCallId, params): Promise<AgentToolResult<Record<string, unknown>>> => {
      if (state.done) {
        return {
          content: [{ type: 'text' as const, text: 'Negotiation already concluded.' }],
          details: { concluded: true },
        };
      }
      const terms: DealTerms = {
        pricePerUnit: params.pricePerUnit,
        grade: params.grade,
        quantity: params.quantity,
      };
      state.neg.transcript.push({ speaker: 'sanket', message: params.message, offer: terms });
      state.neg.currentOffer = terms;

      if (!insideContract(terms, state.contract)) {
        // Refuse — do not mark done. Sanket must keep negotiating or escalate.
        const note = escalationNote(terms, state.contract);
        return {
          content: [
            {
              type: 'text' as const,
              text: `Refused — those terms are outside the contract: ${note}. Do not accept outside terms. Keep negotiating, or call escalate if this is the supplier's best-and-final.`,
            },
          ],
          details: { refused: true, terms, gap: note },
        };
      }

      state.neg.state = 'CLOSED';
      state.neg.outcome = `Closed at $${terms.pricePerUnit}/unit, grade ${terms.grade}, ${terms.quantity} units.`;
      state.done = true;
      await saveNegotiation(state.neg);
      await saveDeal({ id: id('deal'), negotiationId: state.neg.id, terms, status: 'closed' });

      return {
        content: [
          {
            type: 'text' as const,
            text: `Deal closed at $${terms.pricePerUnit}/unit, grade ${terms.grade}, ${terms.quantity} units.`,
          },
        ],
        details: { closed: true, terms },
      };
    },
  });
}
