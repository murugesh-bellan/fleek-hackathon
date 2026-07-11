import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { generateJSON, type JSONSchema } from '../llm.js';
import { config } from '../config.js';
import { embed, baleSearchText } from '../embeddings.js';
import { allSuppliers, insertBale } from '../db/index.js';
import { closeDb } from '../db/client.js';
import type { Bale, Grade } from '../types.js';

/**
 * Ingest the storefront catalogue (`website/src/data/*.json`) as searchable,
 * negotiable inventory.
 *
 * Those records carry only a name and prices — no grade, brands, era or count —
 * so we enrich them into bales:
 *   quantity  <- price / price_per_piece  (they're lots, not single garments)
 *   askPrice  <- price_per_piece, converted to USD
 *   the rest  <- inferred from the product name by an LLM pass
 *
 * Additive: run *after* `npm run seed`, which creates the suppliers these bales
 * hang off. Bale ids are deterministic, so re-running just updates in place.
 */

const HERE = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = resolve(HERE, '../../website/src/data');
const CATALOGUES = ['womens.json', 'mens-unisex.json'];

/** Demo-grade fixed rate — the catalogue is priced in GBP, the mandates in USD. */
const GBP_TO_USD = 1.27;

const ENRICH_BATCH = 25;

interface Product {
  id: number;
  name: string;
  price: number;
  price_per_piece: number;
  currency: string;
  collection: string;
}

interface Enriched {
  ref: string;
  category: string;
  era: string;
  brands: string[];
  grade: Grade;
  description: string;
}

const ENRICH_SCHEMA: JSONSchema = {
  type: 'object',
  properties: {
    items: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          ref: { type: 'string', description: 'Echo back the product ref you were given.' },
          category: {
            type: 'string',
            description: 'e.g. "sportswear", "denim", "streetwear", "tees", "outerwear", "mixed vintage".',
          },
          era: { type: 'string', description: 'e.g. "90s", "y2k", "80s-00s", "mixed".' },
          brands: {
            type: 'array',
            items: { type: 'string' },
            description: 'Brands named or clearly implied. Use ["assorted"] if none.',
          },
          grade: {
            type: 'string',
            enum: ['A', 'B', 'C', 'D'],
            description:
              'Condition grade implied by the listing. Curated/branded/premium wording -> A or B; bulk/unsorted/mixed wording -> C or D. Default B when genuinely unclear.',
          },
          description: {
            type: 'string',
            description:
              'One-sentence wholesale bale description in the trade voice a rag house would use, mentioning the count and what is in the lot.',
          },
        },
        required: ['ref', 'category', 'era', 'brands', 'grade', 'description'],
        additionalProperties: false,
      },
    },
  },
  required: ['items'],
  additionalProperties: false,
};

const ENRICH_SYSTEM = `You convert secondhand-fashion wholesale listings into structured bale records for a B2B sourcing marketplace.

Each listing gives a product name, a lot size, and a per-piece price. Infer the category, era, brands and condition grade from the name. Be faithful — infer only what the name genuinely supports, and do not invent brands that are not named or strongly implied. Return one item per listing, echoing the given ref.`;

async function enrichBatch(batch: { ref: string; name: string; quantity: number; collection: string }[]): Promise<Enriched[]> {
  const listing = batch
    .map((p) => `- ref: ${p.ref} | "${p.name}" | lot of ~${p.quantity} pieces | collection: ${p.collection}`)
    .join('\n');

  const { items } = await generateJSON<{ items: Enriched[] }>({
    system: ENRICH_SYSTEM,
    messages: [{ role: 'user', content: `LISTINGS\n${listing}` }],
    schema: ENRICH_SCHEMA,
    toolName: 'emit_bales',
    toolDescription: 'Emit one structured bale record per listing.',
    model: config.models.fast,
  });
  return items;
}

function loadCatalogue(): Product[] {
  const products: Product[] = [];
  for (const file of CATALOGUES) {
    const raw = JSON.parse(readFileSync(resolve(DATA_DIR, file), 'utf8')) as Product[];
    products.push(...raw);
  }
  return products;
}

async function main(): Promise<void> {
  const suppliers = await allSuppliers();
  if (suppliers.length === 0) {
    console.error('No suppliers in the database. Run `npm run seed` first.');
    process.exit(1);
  }

  const products = loadCatalogue().filter((p) => p.price > 0 && p.price_per_piece > 0);
  console.log(`Loaded ${products.length} catalogue products.`);

  // Lot size is implied by the two prices; the listings never state it outright.
  const staged = products.map((p) => ({
    ref: `${p.collection}-${p.id}`,
    name: p.name,
    collection: p.collection,
    quantity: Math.max(1, Math.round(p.price / p.price_per_piece)),
    askPrice: +(p.price_per_piece * GBP_TO_USD).toFixed(2),
  }));

  const batches: (typeof staged)[] = [];
  for (let i = 0; i < staged.length; i += ENRICH_BATCH) {
    batches.push(staged.slice(i, i + ENRICH_BATCH));
  }

  console.log(`Enriching in ${batches.length} batches with ${config.models.fast}...`);
  const results = await Promise.all(batches.map((b) => enrichBatch(b)));
  const enrichedByRef = new Map<string, Enriched>();
  for (const item of results.flat()) enrichedByRef.set(item.ref, item);

  // Spread the catalogue across the seeded suppliers so every bale has a real
  // negotiating counterparty. Deterministic, so a re-run keeps the same owner.
  const bales: Bale[] = [];
  for (const [i, p] of staged.entries()) {
    const e = enrichedByRef.get(p.ref);
    if (!e) {
      console.warn(`  skipped ${p.ref} ("${p.name}") — no enrichment returned`);
      continue;
    }
    const supplier = suppliers[i % suppliers.length]!;
    bales.push({
      id: `bale_cat_${p.ref}`,
      supplierId: supplier.id,
      description: e.description,
      category: e.category,
      era: e.era,
      brands: e.brands.length ? e.brands : ['assorted'],
      grade: e.grade,
      quantity: p.quantity,
      askPrice: p.askPrice,
    });
  }

  console.log(`Embedding ${bales.length} bales with ${config.models.embedding}...`);
  const vectors = await embed(bales.map(baleSearchText));

  for (const [i, bale] of bales.entries()) {
    await insertBale(bale, vectors[i]!);
  }

  console.log(`\nIngested ${bales.length} catalogue bales across ${suppliers.length} suppliers.`);
  console.log('Sample:');
  for (const b of bales.slice(0, 3)) {
    console.log(`  ${b.id} | ${b.category}/${b.era} | ${b.brands.join(', ')} | grade ${b.grade} | ~${b.quantity} units | $${b.askPrice}/unit`);
  }
  await closeDb();
}

main().catch(async (e) => {
  console.error(e);
  await closeDb().catch(() => {});
  process.exit(1);
});
