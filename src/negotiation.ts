import { buildAgent } from './agent/factory.js';
import { contractOf, escalationNote } from './contract.js';
import { getBale, getMandate, getSupplier, saveNegotiation } from './db/index.js';
import { id } from './ids.js';
import type { Bale, DealTerms, Mandate, MandateContract, Negotiation, Supplier } from './types.js';

/**
 * Mutable state shared between Sanket's tools for one bale negotiation. The tools
 * (make_offer / accept_deal / escalate) close over this and mutate it as they
 * run; `negotiateBale` reads the final state after the agent loop settles.
 */
export interface NegotiationRuntime {
  neg: Negotiation;
  contract: MandateContract;
  bale: Bale;
  supplier: Supplier;
  /** Number of offers made so far (incremented by make_offer). */
  rounds: number;
  /** True once accept_deal or escalate has fired. */
  done: boolean;
}

/** Negotiate a single bale for a mandate. Autonomous within the contract. */
export async function negotiateBale(
  mandate: Mandate,
  bale: Bale,
  supplier: Supplier,
): Promise<Negotiation> {
  const contract = contractOf(mandate);

  const neg: Negotiation = {
    id: id('neg'),
    mandateId: mandate.id,
    baleId: bale.id,
    supplierId: supplier.id,
    state: 'OPEN',
    currentOffer: null,
    transcript: [],
    outcome: null,
  };

  const runtime: NegotiationRuntime = { neg, contract, bale, supplier, rounds: 0, done: false };

  const session = await buildAgent({ persona: 'sanket', sanketRuntime: runtime });
  try {
    await session.prompt(
      'Begin negotiating the bale above for the buyer. Make your opening offer to the supplier using make_offer, then converge. The moment the supplier terms are inside the contract, call accept_deal. If their best-and-final is outside the contract, call escalate.',
    );
  } finally {
    session.dispose();
  }

  // If the agent loop ended without Sanket explicitly closing or escalating
  // (e.g. it ran out of internal steps), force an escalation with the last
  // terms on the table so the buyer always gets a clear outcome.
  if (!runtime.done) {
    neg.state = 'ESCALATED';
    neg.outcome = `${
      neg.currentOffer
        ? `No agreement inside the contract. ${escalationNote(neg.currentOffer, contract)}`
        : 'No agreement reached.'
    } (Sanket did not explicitly conclude.)`;
    await saveNegotiation(neg);
  }

  return neg;
}

export interface NegotiationOutcome {
  supplier: string;
  baleId: string;
  state: Negotiation['state'];
  terms: DealTerms | null;
  outcome: string | null;
}

/** Negotiate one or more selected bales for a mandate (used by Abhi). */
export async function negotiateSelections(
  mandateId: string,
  baleIds: string[],
): Promise<NegotiationOutcome[]> {
  const mandate = await getMandate(mandateId);
  if (!mandate) throw new Error('Unknown mandateId');

  const outcomes: NegotiationOutcome[] = [];
  for (const baleId of baleIds) {
    const bale = await getBale(baleId);
    if (!bale) {
      outcomes.push({
        supplier: '?',
        baleId,
        state: 'ESCALATED',
        terms: null,
        outcome: 'Unknown bale.',
      });
      continue;
    }
    const supplier = await getSupplier(bale.supplierId);
    if (!supplier) {
      outcomes.push({
        supplier: '?',
        baleId,
        state: 'ESCALATED',
        terms: null,
        outcome: 'Unknown supplier.',
      });
      continue;
    }
    const neg = await negotiateBale(mandate, bale, supplier);
    outcomes.push({
      supplier: supplier.name,
      baleId,
      state: neg.state,
      terms: neg.currentOffer,
      outcome: neg.outcome,
    });
  }
  return outcomes;
}
