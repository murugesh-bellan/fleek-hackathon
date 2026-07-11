import OpenAI from 'openai';
import { config, requireOpenAIKey } from './config.js';
import type { Bale, Mandate } from './types.js';

let _client: OpenAI | null = null;

function client(): OpenAI {
  if (!_client) _client = new OpenAI({ apiKey: requireOpenAIKey() });
  return _client;
}

/** OpenAI caps a single embeddings request; batch below it. */
const BATCH_SIZE = 96;

/** Embed a list of texts, preserving order. Batched to stay inside request limits. */
export async function embed(texts: string[]): Promise<number[][]> {
  if (texts.length === 0) return [];
  const out: number[][] = [];
  for (let i = 0; i < texts.length; i += BATCH_SIZE) {
    const batch = texts.slice(i, i + BATCH_SIZE);
    const res = await client().embeddings.create({
      model: config.models.embedding,
      input: batch,
    });
    // The API may return data out of order; `index` is authoritative.
    const ordered = [...res.data].sort((a, b) => a.index - b.index);
    for (const d of ordered) out.push(d.embedding);
  }
  return out;
}

export async function embedOne(text: string): Promise<number[]> {
  const [v] = await embed([text]);
  if (!v) throw new Error('Embedding failed: empty response');
  return v;
}

/**
 * Cosine similarity. OpenAI embeddings are L2-normalised, so this is really a
 * dot product — but we normalise anyway so the function is correct for any input.
 */
export function cosine(a: number[], b: number[]): number {
  if (a.length !== b.length) return 0;
  let dot = 0;
  let na = 0;
  let nb = 0;
  for (let i = 0; i < a.length; i++) {
    const x = a[i]!;
    const y = b[i]!;
    dot += x * y;
    na += x * x;
    nb += y * y;
  }
  if (na === 0 || nb === 0) return 0;
  return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

/**
 * The text we embed for a bale. Only the *semantic* attributes — what the stock
 * actually is. Grade, quantity and price are numeric constraints, not meaning:
 * they're applied as structured signals at rank time, never embedded.
 */
export function baleSearchText(b: Bale): string {
  return [b.description, b.category, b.era, b.brands.join(', ')]
    .filter(Boolean)
    .join(' | ');
}

/** The query side of the same space: the semantic half of a buyer's mandate. */
export function mandateQueryText(m: Mandate): string {
  return [m.style, m.category].filter(Boolean).join(' | ');
}
