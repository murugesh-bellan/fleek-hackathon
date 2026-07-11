# profiles/ — the knowledge layer

One markdown profile per buyer/supplier. In production this is the **immutable source of truth** the
retrieval engine reads from; profiles are regenerated daily by generator skills. Here, everything is
synthetic mock data mirroring the production schema.

## Files
- **`buyer-profile-example.md`** — the canonical buyer blueprint every generated profile follows.
- **`supplier-profile-example.md`** — the supplier-side blueprint.
- **`buyers/`** — synthetic buyer profiles, named `<customer_id>-<slug>.md`.
- **`suppliers/`** — synthetic supplier profiles, named `<vendor-handle>-supplier.md` — the supply-side
  mirror: what a vendor sells, fill-rate/grading reliability, the buyers they serve — so the engine can
  answer relational questions (e.g. "who's stuck on vendor X?").

## Buyer profile structure (8 sections)
Every buyer profile carries, per section, an **overall** view + a **recent/dated** view + a derived
**state**, all vendor-linked:

1. **Buys** — what they purchase (overall + recent), GMV/AOV/cadence.
2. **Cancellations & stuck pipeline** (§1b) — orders that died before fulfilment, and why.
3. **Supplier relationships** (§1c) — the vendor ledger with per-relationship state labels.
4. **Demand hub** — AM-logged demand requests + their `item_status` (FULLY_MATCHED, FINDING_SUPPLY…).
5. **Chats** — vendor threads with a timeline + thread state (OPEN_AWAIT_BUYER/VENDOR, CONVERTED…).
6. **Issues & CX** — support tickets with a dated timeline + issue state.
7. **Open threads to action** — the live levers an AM should pull.
8. **Sources** — every table/query the profile was built from (provenance).

## Archetypes
- **A** — chat-native marketplace buyer (high message volume, self-directed handpicks).
- **B** — AM-brokered wholesale/handpick whale (container-scale, low chat).
- **C** — silent self-serve (orders without chatting; mostly cold/dormant signals).

## Data provenance (production)
Built from Fleek BigQuery (`<bq-project>`) — order/GMV tables, `send_message` (chats), `demand_request*`
(demand hub), `customer_experience_details` + `zendesk_new.ticket` (CX). GMV USD = order amount × 1.33.
Each profile's §Sources lists the exact queries. In this repo the §Sources sections are illustrative.
