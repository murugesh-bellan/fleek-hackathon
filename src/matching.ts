import { generateJSON, type JSONSchema } from './llm.js';
import { config } from './config.js';
import {
  allBales,
  allBalesWithEmbeddings,
  allSuppliers,
  insertBale,
  saveMatches,
} from './db/index.js';
import { cosine, embed, embedOne, baleSearchText, mandateQueryText } from './embeddings.js';
import { gradeRank } from './types.js';
import type { Mandate, Match, Bale } from './types.js';

/** A match enriched with its bale + supplier, for presentation & negotiation. */
export interface RankedMatch extends Match {
  bale: Bale;
  supplierName: string;
  supplierStock: string;
}

interface RawMatch {
  baleId: string;
  score: number;
  rationale: string;
}

const SCHEMA: JSONSchema = {
  type: 'object',
  properties: {
    matches: {
      type: 'array',
      description: 'Best-fitting bales, best first. Include only genuinely plausible options (score >= 30).',
      items: {
        type: 'object',
        properties: {
          baleId: { type: 'string' },
          score: { type: 'integer', description: 'Overall fit, 0-100.' },
          rationale: {
            type: 'string',
            description:
              'One sentence: why it fits (style/era/brand/grade/qty/price), and any caveat (e.g. ask over ceiling, count short, grade mixed).',
          },
        },
        required: ['baleId', 'score', 'rationale'],
        additionalProperties: false,
      },
    },
  },
  required: ['matches'],
  additionalProperties: false,
};

const SYSTEM = `You match a B2B secondhand-fashion buyer's mandate against messy wholesale bulk bales (not clean SKUs — inference over fuzzy descriptions).

Score each candidate 0-100 on overall fit, weighing:
- Style / era / brand alignment with the mandate (most important).
- Grade vs the buyer's grade floor (below floor is a serious penalty, but a bale can still be worth negotiating if close).
- Quantity vs needed (short counts are a caveat, not always a dealbreaker — suppliers can add units).
- Ask price vs the buyer's ceiling (over ceiling lowers score but is negotiable — flag it as a caveat, don't discard).

Return the plausible options ranked best-first, each with a crisp fit rationale that a buyer would find useful. Do not invent bales; only use the provided candidates.`;

function candidateBlock(bales: Bale[], supplierName: (id: string) => string): string {
  return bales
    .map(
      (b) =>
        `- ${b.id} | supplier: ${supplierName(b.supplierId)} | ${b.category}/${b.era} | brands: ${b.brands.join(', ')} | grade ${b.grade} | qty ~${b.quantity} | ask $${b.askPrice}/unit\n  "${b.description}"`,
    )
    .join('\n');
}

/**
 * Stage 2 — LLM rerank. Scores a candidate set against the mandate and writes the
 * buyer-facing rationale. Shared by both matchers; they differ only in how many
 * candidates get this far.
 */
async function rerank(mandate: Mandate, candidates: Bale[]): Promise<RankedMatch[]> {
  if (candidates.length === 0) return [];

  const suppliers = new Map((await allSuppliers()).map((s) => [s.id, s]));
  const bySupplier = (id: string) => suppliers.get(id)?.name ?? id;

  const prompt = `MANDATE
category: ${mandate.category}
style: ${mandate.style}
quantity needed: ${mandate.quantity}
grade floor: ${mandate.gradeFloor}
price ceiling: $${mandate.priceCeiling}/unit

CANDIDATE BALES
${candidateBlock(candidates, bySupplier)}`;

  const { matches } = await generateJSON<{ matches: RawMatch[] }>({
    system: SYSTEM,
    messages: [{ role: 'user', content: prompt }],
    schema: SCHEMA,
    toolName: 'emit_matches',
    toolDescription: 'Emit the ranked matches.',
  });

  const baleById = new Map(candidates.map((b) => [b.id, b]));
  const ranked: RankedMatch[] = [];
  let rank = 1;
  for (const m of matches) {
    const bale = baleById.get(m.baleId);
    if (!bale) continue; // guard against hallucinated ids
    const supplier = suppliers.get(bale.supplierId);
    ranked.push({
      mandateId: mandate.id,
      baleId: bale.id,
      supplierId: bale.supplierId,
      score: m.score,
      rationale: m.rationale,
      rank: rank++,
      bale,
      supplierName: supplier?.name ?? bale.supplierId,
      supplierStock: supplier?.profile.stockCharacter ?? '',
    });
  }

  await saveMatches(
    ranked.map(({ mandateId, baleId, supplierId, score, rationale, rank }) => ({
      mandateId,
      baleId,
      supplierId,
      score,
      rationale,
      rank,
    })),
  );

  return ranked;
}

/**
 * How well a bale satisfies the mandate's numeric constraints, 0..1.
 *
 * Deliberately soft, never a filter: an over-ceiling ask or a short count is
 * precisely what Jill is dispatched to negotiate away, so a bale that misses on
 * price or quantity is demoted during recall rather than discarded.
 */
function feasibility(bale: Bale, mandate: Mandate): number {
  const price =
    mandate.priceCeiling <= 0 || bale.askPrice <= mandate.priceCeiling
      ? 1
      : Math.max(0, mandate.priceCeiling / bale.askPrice);

  const quantity =
    mandate.quantity <= 0 || bale.quantity >= mandate.quantity
      ? 1
      : bale.quantity / mandate.quantity;

  const gradeGap = gradeRank(bale.grade) - gradeRank(mandate.gradeFloor);
  const grade = gradeGap >= 0 ? 1 : Math.max(0, 1 + gradeGap * 0.35);

  return (price + quantity + grade) / 3;
}

/** Weight of semantic similarity against numeric feasibility in the recall score. */
const SEMANTIC_WEIGHT = 0.75;

/**
 * Backfill vectors for any bale lacking one, so inventory added outside the
 * seed/ingest path is still searchable. One-off cost per bale.
 */
async function ensureEmbeddings(): Promise<void> {
  const rows = await allBalesWithEmbeddings();
  const missing = rows.filter((r) => !r.embedding?.length).map((r) => r.bale);
  if (missing.length === 0) return;

  console.log(`[matching] embedding ${missing.length} bale(s) with no vector...`);
  const vectors = await embed(missing.map(baleSearchText));
  await Promise.all(missing.map((bale, i) => insertBale(bale, vectors[i]!)));
}

export interface Matcher {
  rank(mandate: Mandate): Promise<RankedMatch[]>;
}

/**
 * Scores every bale in a single prompt. Exact, but the prompt grows with the
 * catalogue — fine for a handful of bales, impossible at Fleek's real scale.
 * Kept as a baseline to compare the semantic matcher against (MATCHER=llm).
 */
export const llmMatcher: Matcher = {
  async rank(mandate: Mandate): Promise<RankedMatch[]> {
    return rerank(mandate, await allBales());
  },
};

/**
 * Two-stage semantic matcher.
 *
 *   1. Recall — embed the semantic half of the mandate (style + category), score
 *      every bale by cosine similarity blended with how well it satisfies the
 *      numeric constraints, and keep the top K.
 *   2. Rerank — hand only those K to the LLM for the final score and rationale.
 *
 * Constraints like "under $5/unit" are never embedded: a price ceiling has no
 * position in semantic space. Meaning goes in the vector; numbers stay numbers.
 */
export const vectorMatcher: Matcher = {
  async rank(mandate: Mandate): Promise<RankedMatch[]> {
    await ensureEmbeddings();

    const corpus = await allBalesWithEmbeddings();
    if (corpus.length === 0) return [];

    const query = mandateQueryText(mandate);
    const queryVector = await embedOne(query);

    const scored = corpus.map(({ bale, embedding }) => ({
      bale,
      recall:
        SEMANTIC_WEIGHT * (embedding?.length ? cosine(queryVector, embedding) : 0) +
        (1 - SEMANTIC_WEIGHT) * feasibility(bale, mandate),
    }));

    scored.sort((a, b) => b.recall - a.recall);
    const candidates = scored.slice(0, config.matching.topK).map((s) => s.bale);

    console.log(
      `[matching] "${query}" — recalled ${candidates.length} of ${corpus.length} bales for rerank`,
    );

    return rerank(mandate, candidates);
  },
};

/** The matcher selected by config (MATCHER=vector|llm). */
export function activeMatcher(): Matcher {
  return config.matching.strategy === 'llm' ? llmMatcher : vectorMatcher;
}
