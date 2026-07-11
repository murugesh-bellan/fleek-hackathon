import { getBuyer, getMandate, upsertBuyer } from '../db/index.js';
import type { Msg } from '../llm.js';
import { extractMandate } from '../mandate.js';
import { llmMatcher } from '../matching.js';
import { learnFromInteraction } from '../memory.js';
import { negotiateSelections } from '../negotiation.js';
import { loadPersona } from '../personas.js';
import type { Buyer } from '../types.js';
import { runAgent, type Tool } from './harness.js';

/** Build Abhi's dynamic system prompt: persona + buyer context. */
function abhiSystem(buyer: Buyer | null): string {
  const persona = loadPersona('abhi');
  if (!buyer || !buyer.onboardedAt) {
    return (
      persona +
      '\n\n---\nBUYER CONTEXT\nNew, unonboarded buyer. You have exactly one tool right now: complete_onboarding. ' +
      "Do not discuss sourcing yet. Greet them, briefly say who you are, and ask for their name and their store/company name — one short message, both in one ask. Once they've given you both, call complete_onboarding. If they open with a sourcing request before you have their details, acknowledge it briefly but still get their name and company first."
    );
  }
  const ctx = `\n\n---\nBUYER CONTEXT\nName: ${buyer.name}${buyer.company ? ` (${buyer.company})` : ''}\nKnown preferences: ${
    buyer.profile.brandsPursued.length
      ? buyer.profile.brandsPursued.join(', ')
      : '(none yet)'
  }${buyer.profile.notes.length ? `\nNotes: ${buyer.profile.notes.join('; ')}` : ''}`;
  return persona + ctx;
}

/** complete_onboarding tool: captures name + company for a first-time buyer. */
function completeOnboardingTool(buyerPhone: string): Tool {
  return {
    def: {
      name: 'complete_onboarding',
      description:
        "Record a new buyer's name and store/company name. Call this once, as soon as you have both, before doing anything else.",
      parameters: {
        type: 'object',
        properties: {
          name: { type: 'string', description: "The buyer's name." },
          company: { type: 'string', description: 'Their store or company name.' },
        },
        required: ['name', 'company'],
        additionalProperties: false,
      },
    },
    handler: async (input) => {
      const name = String(input.name ?? '').trim();
      const company = String(input.company ?? '').trim();
      if (!name || !company) return { error: 'Both name and company are required.' };
      const existing = await getBuyer(buyerPhone);
      await upsertBuyer({
        phone: buyerPhone,
        name,
        company,
        onboardedAt: new Date().toISOString(),
        profile: existing?.profile ?? { brandsPursued: [], notes: [] },
      });
      return { onboarded: true, name, company };
    },
  };
}

/** extract_mandate tool: NL demand -> structured mandate (+ missing fields). */
function extractMandateTool(buyerPhone: string): Tool {
  return {
    def: {
      name: 'extract_mandate',
      description:
        "Turn the buyer's natural-language demand into a structured sourcing mandate. Call this once you have (or have asked for) the key details. Returns the mandate id, the parsed fields, and any critical fields the buyer still hasn't specified.",
      parameters: {
        type: 'object',
        properties: {
          demand: {
            type: 'string',
            description:
              "The buyer's full demand in their own words, combining everything they've said so far (category/style, quantity, grade, budget).",
          },
        },
        required: ['demand'],
        additionalProperties: false,
      },
    },
    handler: async (input) => {
      const { mandate, missing } = await extractMandate(buyerPhone, String(input.demand ?? ''));
      return {
        mandateId: mandate.id,
        category: mandate.category,
        style: mandate.style,
        quantity: mandate.quantity,
        gradeFloor: mandate.gradeFloor,
        priceCeiling: mandate.priceCeiling,
        missing,
      };
    },
  };
}

/** find_matches tool: rank supplier bales against a mandate. */
const findMatchesTool: Tool = {
  def: {
    name: 'find_matches',
    description:
      'Score and rank supplier inventory (messy bulk bales) against a mandate. Call after extract_mandate returns a complete mandate. Returns ranked options across suppliers, each with a fit rationale.',
    parameters: {
      type: 'object',
      properties: {
        mandateId: { type: 'string', description: 'The mandate id from extract_mandate.' },
      },
      required: ['mandateId'],
      additionalProperties: false,
    },
  },
  handler: async (input) => {
    const mandate = await getMandate(String(input.mandateId ?? ''));
    if (!mandate) return { error: 'Unknown mandateId. Call extract_mandate first.' };
    const ranked = await llmMatcher.rank(mandate);
    return {
      mandateId: mandate.id,
      matches: ranked.map((m) => ({
        rank: m.rank,
        baleId: m.baleId,
        supplier: m.supplierName,
        summary: m.bale.description,
        category: m.bale.category,
        era: m.bale.era,
        brands: m.bale.brands,
        grade: m.bale.grade,
        quantity: m.bale.quantity,
        askPricePerUnit: m.bale.askPrice,
        fitScore: m.score,
        rationale: m.rationale,
      })),
    };
  },
};

/** negotiate tool: dispatch Sanket to negotiate the buyer's chosen bale(s). */
const negotiateTool: Tool = {
  def: {
    name: 'negotiate',
    description:
      "Dispatch Sanket behind the scenes to negotiate the buyer's chosen option(s) with the supplier, autonomously within the mandate (<= price ceiling, >= grade floor, >= quantity). The buyer stays in this WhatsApp thread with you — Sanket does not message them. Call once the buyer picks which match(es) to pursue. Returns, per option, CLOSED (final terms) or ESCALATED (outside mandate — needs the buyer's call).",
    parameters: {
      type: 'object',
      properties: {
        mandateId: { type: 'string', description: 'The mandate id.' },
        baleIds: {
          type: 'array',
          items: { type: 'string' },
          description: 'The bale id(s) of the option(s) the buyer chose to pursue.',
        },
      },
      required: ['mandateId', 'baleIds'],
      additionalProperties: false,
    },
  },
  handler: async (input) => {
    const mandateId = String(input.mandateId ?? '');
    const baleIds = Array.isArray(input.baleIds) ? input.baleIds.map(String) : [];
    if (!(await getMandate(mandateId))) return { error: 'Unknown mandateId.' };
    if (baleIds.length === 0) return { error: 'No baleIds provided.' };
    const outcomes = await negotiateSelections(mandateId, baleIds);
    return { outcomes };
  },
};

/** Abhi's tool set for a given buyer — sourcing tools unlock only once onboarded. */
export function abhiTools(buyerPhone: string, onboarded: boolean): Tool[] {
  if (!onboarded) return [completeOnboardingTool(buyerPhone)];
  return [extractMandateTool(buyerPhone), findMatchesTool, negotiateTool];
}

/**
 * Run Abhi for one inbound buyer WhatsApp message. Returns his reply and the
 * updated history to persist for the next turn.
 */
export async function runAbhi(
  buyerPhone: string,
  history: Msg[],
  userMessage: string,
): Promise<{ reply: string; history: Msg[] }> {
  const buyer = await getBuyer(buyerPhone);
  const withUser: Msg[] = [...history, { role: 'user', content: userMessage }];
  const result = await runAgent({
    system: abhiSystem(buyer),
    history: withUser,
    tools: abhiTools(buyerPhone, !!buyer?.onboardedAt),
  });
  // Memory brain: distil revealed preferences into the buyer's profile.
  await learnFromInteraction(buyerPhone, result.toolCalls);
  return { reply: result.reply, history: result.history };
}
