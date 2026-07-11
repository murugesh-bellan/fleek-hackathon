---
entity_type: buyer
entity_id: 9900000000110
name: Gabriel Fonseca
country: United States
buyer_type: Wholesaler
account_status: Active
account_owner: Jack Marlowe
archetype: B   # AM-brokered container/bale whale — biggest lifetime GMV on this book, but the relationship now runs through Zendesk more than through orders; a spend-rich, trust-poor account
email_resolvable: true

# Commercial snapshot
lifetime_gmv_usd: 128760
lifetime_orders: 74
lifetime_cancelled_usd: 14300
lifetime_cancelled_orders: 9
aov_usd: 1740
first_order: 2021-11-08
last_order: 2026-05-30
days_since_last_order: 21
recent_90d_gmv_usd: 11900
recent_90d_orders: 6
momentum_direction: decelerating   # still ordering (6 in 90d) but run-rate is ~60% of his 2024 peak, cancels are climbing, and 4 of his last 6 orders generated a refund dispute — the spend is decoupling from the trust
recent_brand_skew: "Levi's denim (bales + handpick), Carhartt, Ralph Lauren knit, Nike vintage — Austin TX wholesaler redistributing to ~30 boutiques across the Southwest"

# Chat snapshot
active_threads_12m: 9
his_msgs_12m: 64
last_chat: 2026-06-12
chat_state: DISPUTE_DOMINATED   # ~70% of 12m messages are grading disputes, refund chasing, or escalation threats; sourcing talk survives only on the retro-harbor thread

# Demand hub
demand_open_items: 4
demand_last_request: 2026-05-25
demand_signature: "Carhartt detroit jackets 200pc @ $16 (14 quotes, unactioned) — real demand he won't release to vendors he no longer trusts"
demand_state: OPEN_BUT_TRUST_GATED

# CX
lifetime_tickets: 31
cx_span: 2022-03-15 → 2026-06-10
dominant_issue: product_quality (grading disputes → refund demands)
largest_refund: 2140

# Derived persona
category_focus: ["levis_denim", "carhartt_workwear", "ralph_lauren_knit", "nike_vintage", "mixed_bales"]
concentration_origin: forced_migration   # top-2 historical lanes (mumbai-mills-vintage, denim-dynasty) are grading-damaged; volume is being squeezed toward the only two vendors he still trusts
contactability:
  chat: responsive_but_adversarial   # replies fast; opens with the dispute, not the order
  email: responsive
  push: unknown
  preferred: chat
risk_flags:
  - whale_at_risk_cx_saturation      # 31 lifetime tickets, 9 in the last 12m; 4 of last 6 orders disputed — CX load now shapes his buying decisions
  - grading_trust_broken_top2_lanes  # mumbai-mills-vintage (5 grading tickets) + denim-dynasty (QC-hold cancel $3.9k, $2,140 refund) = 44% of lifetime GMV now trust-damaged
  - live_qc_hold_dispute_4200        # 500pc Levi's container (mumbai-mills) in QC hold 12d with an open grading dispute attached
  - cancel_rate_11pct_gmv            # $14.3k cancelled / $128.8k lifetime — triple the book average
  - demand_release_frozen            # 4 open asks incl. 200pc Carhartt with 14 quotes he refuses to action — demand exists, trust doesn't
as_of: 2026-06-17

# ── checkpoint manifest (pipeline-written; do not hand-edit) ──
checkpoint:
  built_at: "2026-06-17"
  orders_through: "2026-06-19"
  chat_through: "2026-06-17"
  demand_hub_through: "2026-06-17"
  browse_through: "2026-06-17"
  cx_through: "2026-06-17"
  generator_skill_blob: "d81c5fe4092b"
---

# Gabriel Fonseca (`9900000000110`) — Buyer Profile

**Headline.** The **largest account on Jack's book** — an Austin TX wholesaler ("Fonseca Trading Co") at **$128.8k lifetime / 74 orders since Nov 2021 / AOV $1,740**, redistributing Levi's denim, Carhartt, RL knit and Nike vintage to ~30 Southwest boutiques — and simultaneously the **most CX-saturated relationship on the platform**: **31 lifetime tickets, refund disputes on 4 of his last 6 orders, $14.3k cancelled (11% of lifetime GMV), a $2,140 refund in Feb 2026**, and a **live $4.2k Levi's container sitting in QC hold for 12 days with an open grading dispute**. He is still spending ($11.9k in 90d, last order 21 days ago) — but the spend is running on momentum while the trust runs out: his two biggest historical lanes (`mumbai-mills-vintage`, `denim-dynasty` — 44% of lifetime GMV) are both grading-damaged, and he now refuses to release real demand into the marketplace, including a **200pc Carhartt detroit ask with 14 untouched quotes**. The single biggest lever ⭐ is a structural save, not a sale: **consolidate his volume onto the only two friction-free lanes he has left (retro-harbor, northside-pickers) and put KAM pre-shipment QC on every container** — he has stated the terms himself: *"Get me retro-harbor's mix again and we're fine."* Handled, this is a $130k/yr anchor account; unhandled, it is next quarter's biggest churn headline.

---

## §1 · What he buys — overall + recent

Volume workwear-Americana at container scale, with a premium RL/Nike handpick layer on top:

| Brand / item | Category | Spend (USD) | Orders | First→Last |
|---|---|--:|--:|---|
| Levi's | denim bales + handpick | $34.6k | 19 | 2021-11 → 2026-05 |
| (mixed bales) | unbranded volume | $28.3k | 18 | 2021-12 → 2026-04 |
| Carhartt | jackets / pants | $22.4k | 12 | 2022-04 → 2026-03 |
| Nike | vintage sportswear | $17.2k | 10 | 2022-09 → 2026-01 |
| Ralph Lauren | knit / polos | $14.9k | 9 | 2023-02 → 2025-11 |
| Harley-Davidson | graphic tees | $11.36k | 6 | 2022-06 → 2025-07 |

**Shift to watch:** the premium layers (RL, Nike, Harley) have gone quiet — nothing since Jan 2026 — while the recent 90d is denim/bale-only through the two vendors he still trusts. That is not taste drift; it is **risk management**. Grading disputes hurt most on premium handpick (where per-piece grade = per-piece margin), so he has retreated to commodity bales where a bad grade costs less. The premium demand hasn't died — it's parked in the demand hub, trust-gated.

---

## §1b · Cancellations & stuck pipeline — the friction ledger

- **QC-hold cancel ⭐:** `denim-dynasty` — *"Levi's 501 handpick container 280pc"* **$3,900 cancelled after 19 days in QC hold** (2026-02), followed by the **$2,140 refund** on the partial that did ship. This is the event his current posture dates from; the denim-dynasty lane has been dead since.
- **Grading-dispute cancel:** `mumbai-mills-vintage` — mixed Levi's/Carhartt container **$2,800 cancelled** (2025-12) after B-grade arrived tagged as A. His chat quote from that week: *"Third container in a row where B shows up as A."*
- **Seller-rejection cluster:** `patchwork-traders` — 3 cancels, **$4,100** (2024-08 → 2025-05), rework lots repeatedly accepted-then-rejected. Lane dead.
- **Pricing / freight:** $2,100 pricing (2023-24, various) + $1,400 freight (2022).
- **Stuck (LIVE ⭐):** `mumbai-mills-vintage` — *"Levi's mixed-grade container 500pc"* **$4,200, QC hold 12 days, open grading dispute attached** (his 2026-05-30 order). Every day this sits unresolved re-proves his thesis that the platform can't grade. This is the account's single most urgent object.

Net: **$10.8k of his $14.3k cancels are quality/QC-shaped.** The why-not-buying signal could not be cleaner — he isn't price-sensitive, isn't demand-constrained, and isn't shopping competitors yet. He is **grading-betrayed**.

---

## §1c · Supplier relationships — the ledger

**8 transacted vendors, $128.8k — a whale's ledger where the two biggest lanes are the two broken ones.**

| Vendor | Orders | GMV USD | First→Last | days_since | Label |
|---|--:|--:|---|--:|---|
| mumbai-mills-vintage | 18 | $34,200 | 2022-02→**2026-05** | **21** | **AT_RISK** (5 grading tickets, $2.8k cancel, live $4.2k QC-hold dispute — his #1 lane, actively souring) |
| denim-dynasty | 12 | $22,800 | 2022-08→2026-02 | 133 | DAMAGED (QC-hold cancel $3.9k + $2,140 refund; lane dead since Feb) |
| **retro-harbor** | 11 | $19,900 | 2022-05→**2026-05-30** | **21** | **HEALTHY** (zero tickets ever; the mix he keeps asking to repeat) |
| kavya-exports | 10 | $16,400 | 2022-01→2025-11 | 211 | COOLING (no friction; displaced, not damaged) |
| patchwork-traders | 8 | $13,100 | 2023-03→2025-08 | 316 | DAMAGED (3 seller rejections $4.1k; rework quality) |
| silverlake-surplus | 7 | $12,560 | 2021-11→2024-01 | 881 | ONE_ERA_DORMANT (his founding lane; vendor's uploads collapsed) |
| **northside-pickers** | 5 | $6,300 | 2024-11→**2026-04** | **65** | **HEALTHY_GROWING** (Carhartt specialist; zero tickets; the natural home for the frozen 200pc ask) |
| bombay-bale-co | 3 | $3,500 | 2022-10→2023-09 | 1015 | ONE_OFF_DORMANT |

**`concentration_origin: forced_migration`** — the label matters. His concentration isn't preference; it's elimination. Of $57k in his top-2 lanes, both are grading-damaged, and his healthy capacity (retro-harbor + northside-pickers, $26.2k combined) is too thin to carry a $130k/yr account. **The save is a supply-side rebuild:** scale the two trusted lanes and add exactly one vetted denim source — not a broadcast of his demand to the open marketplace, which he will read as more grading roulette.

---

## §2 · Demand Hub — OPEN_BUT_TRUST_GATED

| Created | Item | Qty | $/pc | Status | Idle | Quotes |
|---|---|--:|--:|---|--:|--:|
| 2026-05-25 | Carhartt detroit jackets | 200 | 16 | FINDING_SUPPLY ⚠ | 26 | 14 |
| 2026-05-02 | Ralph Lauren knit / polos | 150 | 11 | QUOTED (stalled) | 49 | 8 |
| 2026-03-18 | Levi's 501 handpick, A-grade only | 300 | 12 | FINDING_SUPPLY | 94 | 17 |
| 2026-02-27 | Nike vintage mix 90s | 250 | 7 | FINDING_SUPPLY | 113 | 11 |

Four open asks, **$10.7k of stated line value, 50 quotes across them, zero actioned.** The pattern is unmistakable when read against the ledger: every one of these was posted *after* the Feb denim-dynasty blowup, and every one sits frozen because he won't hand premium demand to unvetted vendors. Note the tell in the Levi's ask: **"A-grade only"** — he has started writing his grading trauma into his demand specs.

```json
[
  {"category": "carhartt_workwear", "brand": "Carhartt", "asks": [
    {"source": "demand_hub", "ask_type": "buy", "vendor": null, "qty": 200, "price": 16, "currency": "USD", "line_value": 3200, "date": "2026-05-25", "raw_text": "Carhartt detroit jackets 200pc @ $16 — 14 quotes unactioned; route to northside-pickers to unfreeze"}
  ]},
  {"category": "levis_denim", "brand": "Levi's", "asks": [
    {"source": "demand_hub", "ask_type": "buy", "vendor": null, "qty": 300, "price": 12, "currency": "USD", "line_value": 3600, "date": "2026-03-18", "raw_text": "Levi's 501 handpick A-GRADE ONLY 300pc @ $12 — grading trauma written into the spec; 17 quotes, frozen"},
    {"source": "cancellation", "ask_type": "buy", "vendor": "denim-dynasty", "qty": 280, "price": null, "currency": "USD", "line_value": 3900, "date": "2026-02-11", "raw_text": "501 handpick container $3.9k CANCELLED after 19d QC hold — the trust-break event"}
  ]},
  {"category": "ralph_lauren_knit", "brand": "Ralph Lauren", "asks": [
    {"source": "demand_hub", "ask_type": "buy", "vendor": null, "qty": 150, "price": 11, "currency": "USD", "line_value": 1650, "date": "2026-05-02", "raw_text": "RL knit/polos 150pc @ $11 — QUOTED, stalled 49d; premium layer parked since Jan"}
  ]},
  {"category": "nike_vintage", "brand": "Nike", "asks": [
    {"source": "demand_hub", "ask_type": "buy", "vendor": null, "qty": 250, "price": 7, "currency": "USD", "line_value": 1750, "date": "2026-02-27", "raw_text": "Nike vintage mix 90s 250pc @ $7 — FINDING_SUPPLY 113d, 11 quotes untouched"}
  ]}
]
```

**Validation:** all four asks priced and grounded — this is **$10.7k of live, spec'd, frozen demand**, the inverse of a demand problem. Converging read: unfreezing is a *trust* operation (named vendor + QC guarantee), not a matching operation (he has 50 quotes).

---

## §3 · Chats — DISPUTE_DOMINATED

9 threads, 64 messages, last 2026-06-12 (handle `fonsecatrading`). Roughly 70% of 12-month volume is dispute traffic:
- *"Third container in a row where B-grade shows up as A. I photograph every bale now."* (2025-12)
- *"I'm not paying for another mystery bale. Grade sheet before it ships or no order."* (2026-02, post-refund)
- *"Twelve days on this QC hold. My boutiques reorder on the 1st — you're about to cost me a cycle."* (2026-06-12, the live container)
- And the save-play, in his own words: *"Get me retro-harbor's mix again and we're fine."* (2026-04)

**State:** adversarial but **fully engaged** — a whale still arguing is a whale still here. The sourcing conversation survives intact on exactly one thread (retro-harbor). When the disputes stop being answered is when this account goes quiet, and quiet is the actual danger sign.

---

## §4 · Issues & CX

**31 tickets (2022-03 → 2026-06-10), 2 still open; dominant theme product_quality / grading→refund** — 19 PQ-grading tickets (5 on mumbai-mills-vintage, 4 on denim-dynasty, 3 on patchwork-traders), 6 order-tracking, 4 refund-processing follow-ups, 2 invoice. **Largest refund $2,140** (denim-dynasty, Feb 2026); est. $5.9k refunded lifetime. Trajectory is the alarm: **9 tickets in the last 12 months vs 4 the year before**, and both open tickets attach to the live QC-hold container. He now opens tickets with photo evidence pre-attached — a buyer who has professionalised his distrust. CX cost per order on this account is running ~4x book average; the fix is upstream (pre-shipment QC), not faster ticket handling.

---

## Open threads to action

**Save-then-sell (ranked — sequence matters, do not skip to selling):**
1. 🔥 **Resolve the live $4.2k QC hold + grading dispute within 48h** — 12 days is already past his stated tolerance and his boutiques' reorder cycle is the 1st. Whatever the grade verdict, he gets the photo evidence and the decision *before* he asks again.
2. ⭐ **Consolidate onto trusted lanes with a KAM QC guarantee** — move his container cadence to retro-harbor (his own stated fix) + northside-pickers, with pre-shipment grade sheets and photos on every order. This is the structural save; everything else is downstream of it.
3. **Unfreeze the 200pc Carhartt ask ($3.2k) via northside-pickers by name** — a Carhartt specialist with zero tickets against his account. First post-blowup premium order should be the easiest possible win.
4. **Then the RL knit (QUOTED, $1.65k) and A-grade Levi's ($3.6k) asks** — release only against named, vetted vendors; broadcasting them re-triggers the roulette perception.
5. **Make-good gesture on the Feb episode** — a credit or freight waiver referencing the $2,140 refund explicitly. Cheap relative to $130k/yr at stake.

**Why-not-buying (more):**
- **Grading trust broken on 44% of his historical supply base** — the binding constraint on every dollar of frozen demand.
- **Live dispute re-confirming the pattern daily** (12-day QC hold).
- **Premium layer parked** — RL/Nike/Harley spend stopped precisely when per-piece grading risk stopped being acceptable.

---

## Sources legend
- Identity/snapshot: `fleek_analytics.order_details`, `google_sheets.account_ownership_data`, `fleek_raw.order_line_status_details` (`<bq-project>`)
- Buys / ledger / cancellations / stuck: `fleek_raw.order_line_status_details` ⋈ `product_details_v2` (`<bq-project>`)
- Demand hub: `fleek_raw.demand_hub` + `demand_request*` (`<bq-project>`)
- Chat: `fleek_node_rudder.send_message` (full-email match; handle `fonsecatrading`) (`<bq-project>`)
- CX: `fleek_hub.customer_experience_details` ⋈ `zendesk_new.ticket` (refund $ verified via `header_truth`) (`<bq-project>`)
- as_of 2026-06-17.
