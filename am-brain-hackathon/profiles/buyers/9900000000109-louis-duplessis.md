---
entity_type: buyer
entity_id: 9900000000109
name: Louis Duplessis
country: France
buyer_type: Retailer
account_status: Active
account_owner: Sofia Reyes
archetype: A   # chat-native, demand-hub power user — sources weekly through live vendor threads, negotiates every quote; the platform IS his buying desk
email_resolvable: true

# Commercial snapshot
lifetime_gmv_usd: 54290
lifetime_orders: 61
lifetime_cancelled_usd: 3880
lifetime_cancelled_orders: 6
aov_usd: 890
first_order: 2023-05-19
last_order: 2026-06-17
days_since_last_order: 3
recent_90d_gmv_usd: 10340
recent_90d_orders: 11
momentum_direction: accelerating   # 11 orders / $10.3k in 90d vs $54.3k lifetime — running ~18% of lifetime GMV per quarter; weekly cadence, two anchors compounding
recent_brand_skew: "90s-00s football club jerseys (Serie A / PL / Ligue 1), Adidas track tops, Umbro/Kappa drill — Lyon vintage sportswear boutique + online drops"

# Chat snapshot
active_threads_12m: 22
his_msgs_12m: 148
last_chat: 2026-06-19
chat_state: ACTIVE_NEGOTIATOR   # opens with a counter, closes ~half his asks; 4 of 6 lifetime cancels are Pricing Issue — negotiation is a feature AND a leak

# Demand hub
demand_open_items: 6
demand_last_request: 2026-06-18
demand_signature: "90s-00s club jerseys 80pc @ $14 (live, 11 quotes) + Adidas track tops 100pc @ $9 (QUOTED, stalled on his counter)"
demand_state: HIGH_VELOCITY_CONVERTING

# CX
lifetime_tickets: 7
cx_span: 2023-09-04 → 2026-04-22
dominant_issue: order_tracking (freight to FR)
largest_refund: 260

# Derived persona
category_focus: ["football_club_jerseys", "adidas_track_tops", "umbro_kappa_drill", "nike_windbreakers"]
concentration_origin: organic_preference   # two anchors (tokyo-drip-vintage, golden-era-goods) at ~26/25% by choice, plus a healthy mid-tail — concentrated by product fit, not dependence
contactability:
  chat: highly_responsive        # 148 msgs / 22 threads; replies same-day, often within the hour
  email: responsive
  push: unknown
  preferred: chat
risk_flags:
  - pricing_cancel_pattern       # 4 of 6 cancels are Pricing Issue ($2,880) — deals die when vendors won't move ~10-15%; a slow, silent GMV leak
  - live_qc_hold_jersey_lot      # golden-era-goods 60pc PSG/Marseille handpick $1,140 in QC hold 6d — his hottest category, needs a nudge
  - margin_compression_habit     # every quote gets countered; vendors may start avoiding his demand posts if win-rate economics sour
as_of: 2026-06-16

# ── checkpoint manifest (pipeline-written; do not hand-edit) ──
checkpoint:
  built_at: "2026-06-16"
  orders_through: "2026-06-18"
  chat_through: "2026-06-19"
  demand_hub_through: "2026-06-18"
  browse_through: "2026-06-16"
  cx_through: "2026-06-16"
  generator_skill_blob: "c39f81ba6d20"
---

# Louis Duplessis (`9900000000109`) — Buyer Profile

**Headline.** A **Lyon vintage-sportswear dealer** ("Maison Duplessis") — **$54.3k lifetime / 61 orders since May 2023 / AOV $890** — and the most **chat-native, highest-velocity** buyer on Sofia's book: **11 orders / $10.3k in the last 90 days, last order 3 days ago, last chat yesterday**. He buys **90s-00s football club jerseys plus Adidas/Umbro/Kappa sportswear**, sourced live through 22 active threads with two compounding anchors (`tokyo-drip-vintage`, `golden-era-goods`), and he **negotiates every single quote** — usually landing 8-12% under ask, and walking when vendors won't move (4 of his 6 lifetime cancels are Pricing Issue, $2,880 of leaked GMV). The single biggest lever ⭐ is converting his thread-by-thread haggling into a **standing weekly jersey allocation with pre-agreed price bands** — he already buys weekly; formalising it removes the negotiation tax on both sides and unlocks the asks that currently stall mid-counter (a 100pc Adidas track-top demand has been sitting QUOTED for 15 days over a $0.75/pc gap). The main risk is small but live: his hottest lot — **60pc PSG/Marseille jerseys, $1,140 — has been in QC hold for 6 days** while he pings the thread daily.

---

## §1 · What he buys — overall + recent

**Football-first, sportswear-adjacent, era-disciplined (90s-00s only).** The jersey line is both his biggest and fastest-growing category:

| Brand / item | Category | Spend (USD) | Orders | First→Last |
|---|---|--:|--:|---|
| (club jerseys, mixed) | football jerseys 90s-00s | $19.8k | 21 | 2023-06 → 2026-06 |
| Adidas | track tops / football | $11.2k | 13 | 2023-05 → 2026-06 |
| Umbro | drill tops / jerseys | $7.4k | 9 | 2023-09 → 2026-05 |
| Nike | vintage sportswear / windbreakers | $6.1k | 7 | 2024-01 → 2026-04 |
| Kappa | track jackets | $5.9k | 7 | 2023-11 → 2026-05 |
| (mixed) | sportswear handpick | $3.89k | 4 | 2023-07 → 2025-10 |

**Shift to watch:** jerseys were ~25% of his 2023-24 spend and are ~45% of the last 90 days — the boutique's drop model is consolidating around match-worn-era club shirts (Serie A and PL command his top per-piece prices, $14-18). The Adidas/Umbro/Kappa lines are the reliable filler between jersey drops. Recent activity concentrates on `tokyo-drip-vintage` (Japan-sourced Serie A stock) and `golden-era-goods` (Thai Y2K sportswear) — both accelerating.

---

## §1b · Cancellations & stuck pipeline — the negotiation tax

- **Pricing-cancel cluster (the pattern ⭐):** 4 cancels, $2,880 — `golden-era-goods` Kappa lot $920 (2025-11), `tokyo-drip-vintage` jersey handpick $780 (2026-02), `retro-harbor` Adidas mix $640 (2025-06), `mumbai-mills-vintage` windbreakers $540 (2025-03). Same shape every time: he counters ~12% under quote, the vendor holds, the order dies. This is not churn risk — he keeps buying — it is **leaked GMV at a knowable price gap**.
- **Seller rejection:** `heritage-hangers` Umbro drill lot $600 (2024-10) — supply-side failure, relationship went quiet after.
- **Freight cancel:** $400 mixed lot (2024-04) — freight-to-Lyon quote arrived after his margin window closed.
- **Stuck (LIVE):** `golden-era-goods` — *"PSG/Marseille jersey handpick 60pc"* **$1,140, QC hold, 6 days** — his highest-heat category with daily chat pings. Needs an ops nudge today, not this week.

---

## §1c · Supplier relationships — the ledger

**7 transacted vendors, $54.3k — twin anchors plus a healthy mid-tail.** Unusually for this book, almost nothing is damaged; his relationships survive his negotiating because he pays fast and repeats.

| Vendor | Orders | GMV USD | First→Last | days_since | Label |
|---|--:|--:|---|--:|---|
| **golden-era-goods** | 16 | $13,600 | 2024-02→**2026-06** | **8** | **ANCHOR_ACCELERATING** (Y2K sportswear; 1 pricing cancel; live QC-hold lot) |
| **tokyo-drip-vintage** | 14 | $14,200 | 2024-08→**2026-06-17** | **3** | **ANCHOR_HEALTHY** (Serie A jersey source; his best $/pc lots) |
| retro-harbor | 9 | $8,900 | 2023-05→2026-03 | 104 | HEALTHY (Adidas mixes; 1 pricing cancel) |
| mumbai-mills-vintage | 8 | $7,100 | 2023-08→2025-10 | 251 | COOLING (vendor responsiveness collapsed mid-negotiation — their pattern, not his) |
| the-sorting-house | 6 | $5,200 | 2023-11→2025-12 | 187 | HEALTHY_DORMANT |
| second-spin-supply | 4 | $3,100 | 2025-09→2026-05 | 36 | NEW_PROMISING (UK-domestic dispatch speed suits his drop calendar) |
| heritage-hangers | 4 | $2,190 | 2024-03→2025-04 | 435 | DAMAGED_DORMANT (seller rejection 2024-10) |

**`concentration_origin: organic_preference`** — the two anchors are 51% combined but chosen on product fit (Japan-sourced jerseys, Thai Y2K), with retro-harbor and second-spin-supply as live alternates. No fragility here; the ledger's only action item is the mumbai-mills lane, which died from **vendor** ghosting and held $7.1k of demonstrated windbreaker/sportswear demand that should be re-routed.

---

## §2 · Demand Hub — HIGH_VELOCITY_CONVERTING

Six live items, two closed sales in the last 8 weeks — he converts roughly **half** of what he posts, which is top-decile; the other half stalls specifically at the **price-counter step**.

| Created | Item | Qty | $/pc | Status | Idle | Quotes |
|---|---|--:|--:|---|--:|--:|
| 2026-06-18 | 90s-00s club jerseys (Serie A / PL) | 80 | 14 | FINDING_SUPPLY | 2 | 11 |
| 2026-06-05 | Adidas track tops 90s | 100 | 9 | QUOTED ⚠ | 15 | 23 |
| 2026-05-22 | Kappa track jackets | 60 | 8 | SALE_COMPLETE ✅ | — | — |
| 2026-05-02 | Umbro drill tops | 80 | 7 | SALE_COMPLETE ✅ | — | — |
| 2026-04-14 | France-98-era replica jerseys | 40 | 18 | FINDING_SUPPLY | 67 | 6 |
| 2026-03-30 | Nike windbreakers 90s | 70 | 8 | EXPIRED | — | 9 |

The ⚠ row is the tell: **100pc Adidas track tops, 23 quotes, best offer $9.75 vs his $9 ask — stalled 15 days over $75 total**. This is the negotiation tax in one line. The France-98 ask (40pc @ $18 = $720) is genuinely hard supply — a `tokyo-drip-vintage` sourcing request, not a matching failure.

```json
[
  {"category": "football_club_jerseys", "brand": null, "asks": [
    {"source": "demand_hub", "ask_type": "buy", "vendor": null, "qty": 80, "price": 14, "currency": "USD", "line_value": 1120, "date": "2026-06-18", "raw_text": "90s-00s club jerseys Serie A/PL 80pc @ $14 — FINDING_SUPPLY, 11 quotes in 48h"},
    {"source": "demand_hub", "ask_type": "buy", "vendor": null, "qty": 40, "price": 18, "currency": "USD", "line_value": 720, "date": "2026-04-14", "raw_text": "France-98-era replica jerseys 40pc @ $18 — FINDING_SUPPLY 67d; hard-supply, route to tokyo-drip-vintage"},
    {"source": "order_history", "ask_type": "restock", "vendor": "tokyo-drip-vintage", "qty": null, "price": null, "currency": null, "line_value": null, "date": "2026-06-17", "raw_text": "$19.8k lifetime jersey spend, weekly cadence — standing demand"}
  ]},
  {"category": "adidas_track_tops", "brand": "Adidas", "asks": [
    {"source": "demand_hub", "ask_type": "buy", "vendor": null, "qty": 100, "price": 9, "currency": "USD", "line_value": 900, "date": "2026-06-05", "raw_text": "Adidas track tops 90s 100pc @ $9 — QUOTED, best $9.75, stalled 15d on a $75 gap"},
    {"source": "chat", "ask_type": "price_anchor", "vendor": "golden-era-goods", "qty": null, "price": 9, "currency": "USD", "line_value": null, "date": "2026-06-12", "raw_text": "\"I take all 100 if you do 9 flat, freight to Lyon included\""}
  ]},
  {"category": "nike_windbreakers", "brand": "Nike", "asks": [
    {"source": "demand_hub", "ask_type": "buy", "vendor": null, "qty": 70, "price": 8, "currency": "USD", "line_value": 560, "date": "2026-03-30", "raw_text": "Nike windbreakers 90s 70pc @ $8 — EXPIRED with 9 quotes; orphaned when mumbai-mills lane went quiet"}
  ]}
]
```

**Validation:** all three categories carry priced qty×$ asks (grounded); jerseys are the standing, currently-open core. **Unmapped:** "France-98-era replicas" has no taxonomy key (candidate: `retro_national_jerseys`). Converging read: **demand is not the constraint — the counter-offer step is.**

---

## §3 · Chats — ACTIVE_NEGOTIATOR

22 threads, 148 messages, last 2026-06-19 (handle `maisonduplessis`). He runs chat like a trading desk — fast, numerate, always anchored:
- *"Send me the size curve first, then we talk price."*
- *"I take all 80 if you do 12."* / *"Best I do is $9.50 all-in or I pass."*
- *"Freight to Lyon included or no deal — I'm not doing the 2024 surprise again."*
- On the live QC hold (daily since 2026-06-14): *"Any movement on the PSG lot? My drop is Saturday."*

**State:** a power user whose behaviour is fully legible — he tells vendors his walk-away price in the second message and honours it. The AM opportunity is to **pre-clear price bands** with his anchors so half his threads don't re-litigate the same 10%.

---

## §4 · Issues & CX

**7 tickets (2023-09 → 2026-04), all closed; dominant theme order_tracking** — five freight/tracking queries into France (two around EU customs), one product-quality ticket (2025-02, mislabeled sizes on a Kappa lot, $260 refund — his largest), one invoice correction. For 61 orders this is a **low-friction CX surface**; his disputes happen *pre-order in chat* (where they're cheap) rather than post-delivery in Zendesk (where they're expensive). The one systemic irritant is **freight predictability to Lyon**, which shows up in tickets, chat, and one cancel — worth fixing structurally with a standing freight quote.

---

## Open threads to action

**Sell-more (ranked by value × probability):**
1. ⭐ **Formalise a weekly jersey allocation with tokyo-drip-vintage + golden-era-goods** — pre-agreed price bands ($12-14 club jerseys, $9 Adidas, freight-to-Lyon included). He already buys weekly at ~$900/order; a standing lane plausibly lifts him to $1.3-1.5k/wk (~$70k/yr run-rate) and eliminates the pricing-cancel leak at its source.
2. 🔥 **Unstick the PSG/Marseille QC hold ($1,140, 6 days) before Saturday** — his drop date is stated in chat. This is today's task; a missed drop is how healthy accounts learn to hedge elsewhere.
3. 🔥 **Close the Adidas track-top gap** — $75 apart on a $900 order with 23 quotes. Split the difference AM-side or credit it; 15 days of stall over this is pure process failure.
4. **Re-route the orphaned windbreaker demand** ($560 expired ask + $7.1k mumbai-mills history) to second-spin-supply or retro-harbor.
5. **Source the France-98 replica ask** (40pc @ $18) via tokyo-drip-vintage's Japan network — small dollars, outsized relationship value with a jersey specialist.

**Why-not-buying (leaks, not stalls):**
- **Pricing-counter deaths** — $2,880 cancelled + at least one live stall; the gap is consistently 8-12%.
- **Freight-quote timing** — quotes that arrive after his margin math closes the window.
- **One dead vendor lane** (mumbai-mills ghosting) orphaned a whole category's demand.

---

## Sources legend
- Identity/snapshot: `fleek_analytics.order_details`, `google_sheets.account_ownership_data`, `fleek_raw.order_line_status_details` (`<bq-project>`)
- Buys / ledger / cancellations / stuck: `fleek_raw.order_line_status_details` ⋈ `product_details_v2` (`<bq-project>`)
- Demand hub: `fleek_raw.demand_hub` + `demand_request*` (`<bq-project>`)
- Chat: `fleek_node_rudder.send_message` (full-email match; handle `maisonduplessis`) (`<bq-project>`)
- CX: `fleek_hub.customer_experience_details` ⋈ `zendesk_new.ticket` (`<bq-project>`)
- as_of 2026-06-16.
