---
entity_type: buyer
entity_id: 9900000000108
name: Hannah Lindqvist
country: Sweden
buyer_type: Retailer
account_status: Churned
account_owner: Nina Kovac
archetype: C   # self-serve, low-touch — ordered without chatting for three years, then vanished; classic silent-churn profile where the exit reason must be reconstructed from tickets and cancels
email_resolvable: true

# Commercial snapshot
lifetime_gmv_usd: 16720
lifetime_orders: 19
lifetime_cancelled_usd: 640
lifetime_cancelled_orders: 1
aov_usd: 880
first_order: 2022-09-14
last_order: 2025-08-02
days_since_last_order: 322
recent_90d_gmv_usd: 0
recent_90d_orders: 0
momentum_direction: churned   # 322d silent, 0 in 90d, no live chat, no new demand — a cold account. The ONLY live-ish signal is a stale demand-hub ask from Jul 2025.
recent_brand_skew: "Champion reverse-weave crews/hoods, Fila track tops — Stockholm secondhand shop, sportswear-sweats core"

# Chat snapshot
active_threads_12m: 1
his_msgs_12m: 2
last_chat: 2025-09-10
chat_state: DORMANT   # her last two messages chased a delivery-delay refund on her final order, then silence

# Demand hub
demand_open_items: 1
demand_last_request: 2025-07-20
demand_signature: "Champion reverse-weave crews 150pc @ $6 — STALE 335d, 6 quotes never actioned; the only winback hook that exists"
demand_state: STALE_ONLY_SIGNAL

# CX
lifetime_tickets: 3
cx_span: 2023-05-11 → 2025-09-10
dominant_issue: order_tracking (delivery delay — final ticket sits right on top of her churn date)
largest_refund: 180

# Derived persona
category_focus: ["champion_sweats", "fila_track_tops", "kappa_track_jackets"]
concentration_origin: organic_preference   # dispersed across 5 vendors, none above 36%; shopped catalog-first, never built a relationship
contactability:
  chat: unresponsive             # 2 msgs in 12m, both refund-chasing; no reply to the last vendor follow-up
  email: unknown
  push: unknown
  preferred: email               # C-archetype self-serve; chat was never her channel even when active
risk_flags:
  - churned_322d_no_order          # hard churn; 0 in 90d, 0 in 180d
  - stale_demand_only_signal       # single Jul-2025 Champion ask is the entire winback thesis
  - late_delivery_churn_trigger    # final order arrived ~3 weeks late (Sep-2025 ticket) — most probable proximate cause
  - price_sensitivity_cancel       # $640 kavya-exports cancel on Pricing Issue (2025-06), two months before exit
as_of: 2026-06-14

# ── checkpoint manifest (pipeline-written; do not hand-edit) ──
checkpoint:
  built_at: "2026-06-14"
  orders_through: "2026-06-16"
  chat_through: "2026-06-14"
  demand_hub_through: "2026-06-14"
  browse_through: "2026-06-14"
  cx_through: "2026-06-14"
  generator_skill_blob: "b7e02d581c4a"
---

# Hannah Lindqvist (`9900000000108`) — Buyer Profile

**Headline.** A **churned Stockholm secondhand retailer** ("Nordic Rewear") — **$16.7k lifetime / 19 orders, Sep 2022 → Aug 2025 / AOV $880** — who built a tight, coherent book around **Champion reverse-weave sweats and Fila track tops** and then went silent: **322 days since her last order, 0 in 90d, 2 chat messages in 12 months** (both chasing a refund). This is a **winback case, not a save**: the account is cold, the archetype is self-serve C (she never chatted even when healthy), and the exit reads as a quiet friction stack — a **$640 pricing cancel in Jun 2025**, then a **~3-week delivery delay on her final order** (Sep 2025 ticket, $180 refund), then nothing. The **only live signal is a stale demand-hub ask: 150pc Champion reverse-weave crews @ $6, posted Jul 2025, 6 quotes, never actioned, idle 335 days** ⭐ — which is simultaneously thin and perfect: it is a priced, sized, in-category order she wrote herself. The winback test is cheap and singular: fill that exact ask with reliable stock and a delivery promise, once, by email. If she doesn't bite, deprioritise — nothing else on this account justifies AM time.

---

## §1 · What she bought — overall + recent

Her book is the most **category-coherent** on Nina's list: sweats and track tops, 90s sportswear, nothing else. No experiments, no drift across three years — a retailer who knew her rack and bought to it:

| Brand / item | Category | Spend (USD) | Orders | First→Last |
|---|---|--:|--:|---|
| Champion | reverse-weave crews / hoods | $7.4k | 8 | 2022-09 → 2025-08 |
| Fila | track tops / sweats | $4.1k | 5 | 2022-11 → 2025-03 |
| Kappa / Umbro | track jackets | $2.3k | 3 | 2023-06 → 2024-11 |
| (unbranded) | scandi knit / fleece lots | $2.92k | 3 | 2023-02 → 2025-06 |

**Recent skew: none.** Her final order (2025-08-02, kavya-exports, Champion mix) was exactly her historical center of gravity. She did not trail off across categories or downsize AOV before churning — the demand didn't fade, **the relationship snapped**. That matters for winback framing: this is a supply/service failure to repair, not a taste change to chase.

---

## §1b · Cancellations & stuck pipeline — the exit sequence

- **Pricing cancel:** `kavya-exports` — *"Champion crew mix 100pc"* **$640 cancelled on Pricing Issue** (2025-06). Two months before her exit; she wanted the product at a price the vendor wouldn't hold.
- **Delivery-delay finale:** her final order (2025-08-02) arrived **~3 weeks late**; she opened her last-ever ticket 2025-09-10, took a **$180 refund**, sent her last two chat messages chasing it, and never transacted again.
- **Stuck pipeline: none.** Everything is reconciled; there is no frozen order to unblock. The pipeline is clean and empty — which is exactly the problem.

Net: a **two-beat friction exit** (price, then delivery) on an otherwise frictionless three-year account. Neither beat was individually fatal; the absence of any AM catch between them was.

---

## §1c · Supplier relationships — the ledger

**5 transacted vendors, $16.7k — dispersed, shallow, all dormant.** No anchor ever formed; she shopped listings, not relationships, and every lane is now 320-1,000 days cold.

| Vendor | Orders | GMV USD | First→Last | days_since | Label |
|---|--:|--:|---|--:|---|
| kavya-exports | 7 | $5,900 | 2022-09→2025-08 | 322 | DAMAGED_DORMANT (pricing cancel + late final delivery — both exit wounds are here) |
| heritage-hangers | 5 | $4,400 | 2023-01→2025-03 | 474 | HEALTHY_DORMANT (zero friction on record) |
| the-sorting-house | 4 | $3,700 | 2023-04→2024-11 | 588 | HEALTHY_DORMANT |
| golden-era-goods | 2 | $1,800 | 2024-09→2025-06 | 384 | HEALTHY_DORMANT (most recent *new* vendor she tried — and they carry reverse-weave stock today) |
| calico-crate | 1 | $920 | 2023-09 | 1015 | ONE_OFF |

**`concentration_origin: organic_preference`** — top vendor only 35% of lifetime. The useful asymmetry: her **damaged** lane (kavya-exports) and her **healthy-but-dormant** lanes (heritage-hangers, golden-era-goods) are cleanly separated. Any winback attempt should route around kavya-exports entirely — golden-era-goods is the natural carrier: recent, friction-free, and currently strong on 90s sportswear.

---

## §2 · Demand Hub — one stale ask is the whole thesis ⭐

| Created | Item | Qty | $/pc | Status | Idle | Quotes |
|---|---|--:|--:|---|--:|--:|
| 2025-07-20 | Champion reverse-weave crews (M-XL) | 150 | 6 | STALE_DEMAND | 335 | 6 |
| 2025-03-02 | Fila track tops 90s | 80 | 7 | EXPIRED | — | 3 |

**State `STALE_ONLY_SIGNAL`:** the Champion ask ($900 line value) was posted **while she was still active** — two weeks before her final order — and drew 6 quotes she never opened. Read correctly, it is a **pre-churn buy order left on the table**: category-exact, priced at her demonstrated level, in her sizes. It is also 335 days old, so it must be treated as a hypothesis to re-confirm, not an order to fill. The Fila ask is expired reinforcement: same story, same era.

```json
[
  {"category": "champion_sweats", "brand": "Champion", "asks": [
    {"source": "demand_hub", "ask_type": "buy", "vendor": null, "qty": 150, "price": 6, "currency": "USD", "line_value": 900, "date": "2025-07-20", "raw_text": "Champion reverse-weave crews M-XL 150pc @ $6 — STALE_DEMAND, 6 quotes never actioned, idle 335d"},
    {"source": "order_history", "ask_type": "restock", "vendor": "kavya-exports", "qty": null, "price": null, "currency": null, "line_value": null, "date": "2025-08-02", "raw_text": "$7.4k lifetime Champion across 3 vendors — her signature product, bought to the very end"}
  ]},
  {"category": "fila_track_tops", "brand": "Fila", "asks": [
    {"source": "demand_hub", "ask_type": "buy", "vendor": null, "qty": 80, "price": 7, "currency": "USD", "line_value": 560, "date": "2025-03-02", "raw_text": "Fila track tops 90s 80pc @ $7 — EXPIRED, 3 quotes; secondary category, same era"}
  ]}
]
```

**Validation:** both asks are priced and grounded, but both are **pre-churn artifacts** — there is no post-Aug-2025 demand of any kind. Converging read: the winback offer writes itself (150pc reverse-weave @ ~$6), and its response is the entire account decision.

---

## §3 · Chats — DORMANT

1 thread, 2 messages in 12 months, last 2025-09-10 — both messages chasing the delivery-delay refund on her final order: *"Order arrived almost three weeks late — half the drop went to my competitor's rack. What is the refund status?"* and, after resolution, *"Received, thanks."* Nothing since; a vendor follow-up in Oct 2025 went unanswered. Historically she was the same: **9 threads over three years, transactional, terse, initiated only around live orders**. Chat was never her channel — this is a buyer who self-served off the catalog. **State:** dormant, and any winback via Sendbird chat will likely land in a void; **email is the only realistic re-entry channel.**

---

## §4 · Issues & CX

**3 tickets (2023-05 → 2025-09), all closed; dominant theme order_tracking** — one customs-tracking query (2023-05), one courier misroute (2024-02, $95 refund), and the decisive one: **the 2025-09 delivery-delay ticket on her final order ($180 refund)**. Zero product-quality tickets in three years — grading was never her problem; **predictability was**. A Stockholm shop running seasonal drops cannot absorb a three-week slip, and the ticket text says exactly that. Any winback message that doesn't lead with a **delivery commitment** is ignoring the stated cause of death.

---

## Open threads to action

**Winback (ranked by value × probability — all modest, price accordingly):**
1. ⭐ **One-shot winback email against the stale Champion ask** — 150pc reverse-weave crews @ ~$6, carried by `golden-era-goods` (friction-free history, live reverse-weave stock), with an explicit dispatch-window promise and a small make-good nod to the 2025 delay. This is the entire play: category-exact, price-exact, channel-correct.
2. **If she engages:** immediately propose a small standing monthly sweats lot (~$800-900/mo — her demonstrated AOV) rather than another one-off; her three-year history shows she repeats when nothing breaks.
3. **If no response in 14 days: close and deprioritise.** C-archetype, $16.7k lifetime, cold for 322 days — one well-built attempt is the correct total investment. Do not route to kavya-exports under any circumstances; both exit wounds live there.

**Why-not-buying:**
- **Proximate:** 3-week delivery slip on her final order, refund-and-done (Sep 2025).
- **Contributing:** $640 pricing cancel (Jun 2025) — her price bar is real and modest ($6-7/pc).
- **Structural:** no anchor vendor and no AM relationship ever formed — nothing existed to catch her when two frictions stacked.

---

## Sources legend
- Identity/snapshot: `fleek_analytics.order_details`, `google_sheets.account_ownership_data`, `fleek_raw.order_line_status_details` (`<bq-project>`)
- Buys / ledger / cancellations: `fleek_raw.order_line_status_details` ⋈ `product_details_v2` (`<bq-project>`)
- Demand hub: `fleek_raw.demand_hub` (`<bq-project>`)
- Chat: `fleek_node_rudder.send_message` (full-email match; handle `nordicrewear`) (`<bq-project>`)
- CX: `fleek_hub.customer_experience_details` ⋈ `zendesk_new.ticket` (`<bq-project>`)
- as_of 2026-06-14.
