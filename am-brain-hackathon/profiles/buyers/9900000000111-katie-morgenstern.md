---
entity_type: buyer
entity_id: 9900000000111
name: Katie Morgenstern
country: United States
buyer_type: Retailer
account_status: Active
account_owner: Nina Kovac
archetype: A   # chat-native but low-drama — sources through a warm standing relationship with one anchor vendor, posts clean priced demand, converts steadily; the book's model citizen
email_resolvable: true

# Commercial snapshot
lifetime_gmv_usd: 34800
lifetime_orders: 40
lifetime_cancelled_usd: 1190
lifetime_cancelled_orders: 2
aov_usd: 870
first_order: 2023-02-10
last_order: 2026-06-11
days_since_last_order: 9
recent_90d_gmv_usd: 2850
recent_90d_orders: 3
momentum_direction: steady   # ~1 order/month for 40 straight months, order-gap variance the lowest on Nina's book; not growing, not slipping — a metronome
recent_brand_skew: "Dickies 874s, Carhartt detroit/chore jackets, Wrangler denim — Pittsburgh workwear-vintage shop, size-curve-disciplined restocks"

# Chat snapshot
active_threads_12m: 6
his_msgs_12m: 33
last_chat: 2026-06-16
chat_state: STEADY_TRANSACTIONAL   # short, warm, specific — reorders by reference to the last lot, flags size-curve tweaks, zero drama

# Demand hub
demand_open_items: 3
demand_last_request: 2026-06-14
demand_signature: "Dickies 874 (30-34 waist) 120pc @ $9 — QUOTED with 8 quotes; the standing-order upsell sitting in plain sight"
demand_state: STEADY_CONVERTING

# CX
lifetime_tickets: 5
cx_span: 2023-08-19 → 2026-01-27
dominant_issue: order_tracking (minor; one PQ ticket ever, on denim-dynasty)
largest_refund: 140

# Derived persona
category_focus: ["dickies_874", "carhartt_jackets", "wrangler_denim", "champion_sweats"]
concentration_origin: earned_anchor   # northside-pickers is 50% of lifetime by merit — 19 orders, zero tickets; concentration is the product of reliability, not lack of options
contactability:
  chat: responsive               # replies within hours; initiates monthly
  email: responsive
  push: unknown
  preferred: chat
risk_flags:
  - anchor_concentration_50pct   # northside-pickers carries half of lifetime GMV; healthy today, but a single vendor wobble = half her supply
  - denim_dynasty_qc_cancel      # $740 Wrangler bale cancelled out of QC hold (2025-12) — her only bad platform experience; don't re-expose her to that lane
  - size_curve_specificity       # buys 30-34 waist, M-L tops only; generic lots miss her spec and stall — matching must respect the curve
as_of: 2026-06-18

# ── checkpoint manifest (pipeline-written; do not hand-edit) ──
checkpoint:
  built_at: "2026-06-18"
  orders_through: "2026-06-19"
  chat_through: "2026-06-18"
  demand_hub_through: "2026-06-18"
  browse_through: "2026-06-18"
  cx_through: "2026-06-18"
  generator_skill_blob: "e2a7c0d94f16"
---

# Katie Morgenstern (`9900000000111`) — Buyer Profile

**Headline.** A **Pittsburgh workwear-vintage retailer** ("Rust Belt Retro") — **$34.8k lifetime / 40 orders since Feb 2023 / AOV $870** — and the steadiest account on Nina's book: **one order roughly every month for 40 straight months**, last order 9 days ago, last chat 5 days ago, essentially zero friction (5 tickets in three years, largest refund $140). She buys a disciplined **Dickies/Carhartt/Wrangler** mix on a strict size curve (30-34 waist, M-L tops), anchored on `northside-pickers` — **19 orders, $17.4k, half her lifetime GMV, zero tickets** — a concentration she has *earned into*, not fallen into. This is not a rescue or a winback; it is a **compounding case**, and the compounding lever is already posted ⭐: a **120pc Dickies 874 ask @ $9 sitting QUOTED with 8 quotes (2026-06-14)** that maps exactly onto her chat request for *"same again for July, bump the 32-waist count"* — i.e., she is asking for a **standing order** without using the words. Convert her monthly manual reorder into a fortnightly standing allocation via northside-pickers and this quietly becomes a $55-60k/yr account. The only real risks are structural, not behavioral: 50% single-anchor exposure, and one bad QC experience (`denim-dynasty`, Dec 2025) that should never be repeated.

---

## §1 · What she buys — overall + recent

The tightest brand discipline on the book — workwear staples, restocked on rotation, no experiments outside the lane:

| Brand / item | Category | Spend (USD) | Orders | First→Last |
|---|---|--:|--:|---|
| Dickies | 874 work pants / coveralls | $12.6k | 15 | 2023-02 → 2026-06 |
| Carhartt | detroit / chore jackets | $10.9k | 12 | 2023-03 → 2026-05 |
| Wrangler | denim (bootcut, cowboy cut) | $4.3k | 5 | 2023-09 → 2026-04 |
| (mixed) | workwear handpick | $4.1k | 4 | 2023-06 → 2025-10 |
| Champion | sweats (shop filler) | $2.9k | 4 | 2024-01 → 2026-02 |

**Shift to watch:** almost none — which is itself the signal. Her category mix in the last 12 months is within a few points of her lifetime mix; the only drift is a slow tilt toward Dickies 874s specifically (her best sell-through, per her own chat comments). Recent 90d ($2.85k / 3 orders) is exactly on her lifetime cadence. **Forecast her like an annuity, then upsell the cadence — not the basket.**

---

## §1b · Cancellations & stuck pipeline — one scar, no wounds

- **QC-hold cancel:** `denim-dynasty` — *"Wrangler denim bale 100pc"* **$740 cancelled out of QC hold** (2025-12). Her only quality-shaped event in three years; she took it calmly (*"no worries, refund and I'll re-source"*) but has not touched that vendor since. Given denim-dynasty's rising platform-wide QC-hold rate, the right move is to keep her off the lane permanently rather than test her patience twice.
- **Seller rejection:** `silverlake-surplus` — Dickies lot **$450, Seller Rejection** (2023-11), from her early era before the anchor formed. Historic, no residue.
- **Stuck: none.** Pipeline is completely clean — 0 live holds, 0 aging accepted lines. For a 40-order account this is remarkable and worth protecting as a feature of the relationship.

Net: **$1,190 cancelled on $34.8k lifetime (3.4%) — a third of book average.** There is no why-not-buying story here; there is a why-she-keeps-buying story: nothing has ever been allowed to break twice.

---

## §1c · Supplier relationships — the ledger

**6 transacted vendors, $34.8k — one earned anchor, a functioning bench, one quarantined lane.**

| Vendor | Orders | GMV USD | First→Last | days_since | Label |
|---|--:|--:|---|--:|---|
| **northside-pickers** | 19 | $17,400 | 2023-02→**2026-06-11** | **9** | **ANCHOR_HEALTHY** (workwear specialist; zero tickets across 19 orders; her stated reason for not shopping around) |
| retro-harbor | 7 | $6,200 | 2024-03→2026-04 | 62 | HEALTHY (overflow lane when northside's curve runs thin) |
| silverlake-surplus | 5 | $4,100 | 2023-03→2024-02 | 869 | ONE_ERA_DORMANT (her original #2; went quiet when their uploads collapsed — displaced, not damaged) |
| second-spin-supply | 4 | $3,300 | 2025-10→2026-05 | 33 | NEW_PROMISING (fast dispatch; took over the Champion-sweats filler line) |
| denim-dynasty | 3 | $2,300 | 2024-09→2025-12 | 200 | QUARANTINED (QC-hold cancel; do not re-match) |
| calico-crate | 2 | $1,500 | 2024-05→2024-08 | 682 | ONE_OFF_DORMANT |

**`concentration_origin: earned_anchor`** — the healthy version of concentration: northside-pickers won 50% share by being flawless for three years, and her two live alternates (retro-harbor, second-spin-supply) mean the account isn't actually single-threaded. The one ledger action: her Wrangler denim demand lost its home when denim-dynasty was quarantined — **that category is currently unhoused** and is the obvious brief for second-spin-supply or retro-harbor.

---

## §2 · Demand Hub — STEADY_CONVERTING

| Created | Item | Qty | $/pc | Status | Idle | Quotes |
|---|---|--:|--:|---|--:|--:|
| 2026-06-14 | Dickies 874, 30-34 waist | 120 | 9 | QUOTED ⭐ | 6 | 8 |
| 2026-05-28 | Carhartt detroit jackets, M-L | 60 | 15 | FINDING_SUPPLY | 23 | 5 |
| 2026-04-20 | Wrangler bootcut, 30-34 | 80 | 7 | SALE_COMPLETE ✅ | — | — |

Three asks in the last 60 days, one already converted — a **~50% trailing close rate** with short idle times. Note the quantities: the live Dickies ask (120pc, $1,080 line value) is **~40% above her usual monthly lot size**, and it landed two days *before* her chat message asking to "bump the 32-waist count" for July. She is scaling up on her own initiative; the platform just has to not fumble it.

```json
[
  {"category": "dickies_874", "brand": "Dickies", "asks": [
    {"source": "demand_hub", "ask_type": "restock", "vendor": null, "qty": 120, "price": 9, "currency": "USD", "line_value": 1080, "date": "2026-06-14", "raw_text": "Dickies 874 30-34 waist 120pc @ $9 — QUOTED, 8 quotes, 6d idle; 40% above her usual lot size"},
    {"source": "chat", "ask_type": "restock", "vendor": "northside-pickers", "qty": null, "price": null, "currency": null, "line_value": null, "date": "2026-06-16", "raw_text": "\"Same again for July, bump the 32-waist count\" — a standing order in everything but name"}
  ]},
  {"category": "carhartt_jackets", "brand": "Carhartt", "asks": [
    {"source": "demand_hub", "ask_type": "buy", "vendor": null, "qty": 60, "price": 15, "currency": "USD", "line_value": 900, "date": "2026-05-28", "raw_text": "Carhartt detroit M-L 60pc @ $15 — FINDING_SUPPLY 23d; pre-autumn stock-up, natural northside-pickers match"}
  ]},
  {"category": "wrangler_denim", "brand": "Wrangler", "asks": [
    {"source": "demand_hub", "ask_type": "buy", "vendor": null, "qty": 80, "price": 7, "currency": "USD", "line_value": 560, "date": "2026-04-20", "raw_text": "Wrangler bootcut 30-34 80pc @ $7 — SALE_COMPLETE via retro-harbor; category needs a permanent home post-denim-dynasty"}
  ]}
]
```

**Validation:** all three categories carry priced, sized, recent asks — the most *grounded* demand block on the book, no projection required. Converging read: **demand, price bar, and size curve are all explicit; the only open design question is cadence.**

---

## §3 · Chats — STEADY_TRANSACTIONAL

6 threads, 33 messages, last 2026-06-16 (handle `rustbeltretro`). The tone is what every AM wants and rarely gets:
- *"Same again for July, bump the 32-waist count."* (2026-06-16, northside-pickers thread)
- *"Northside's grading is why I don't shop around — don't make me start."* (2026-03, gently, after a slow quote)
- *"Detroit jackets move first week of September here. Getting ahead of it."* (2026-05-28, alongside the Carhartt ask)
- On the Dec 2025 cancel: *"No worries, refund and I'll re-source."* — zero escalation, but note she never went back.

**State:** warm, planful, quietly demanding — she telegraphs her calendar (autumn jacket season), her spec (size curve), and her loyalty condition (grading consistency) in plain language. Reads monthly like clockwork; **the thread itself is a forward order book if anyone treats it as one.**

---

## §4 · Issues & CX

**5 tickets (2023-08 → 2026-01), all closed; dominant theme order_tracking** — three courier/tracking queries, one invoice correction, and exactly one product-quality ticket ever (the denim-dynasty Wrangler lot that ended in the QC-hold cancel; $140 refund on a re-graded remainder — her largest). **Ticket rate: one per eight orders, a third of book average.** The CX story is a negative-space signal: she is cheap to serve *because* her supply lanes are reliable — which is the strongest argument for protecting the anchor relationship rather than diversifying her for diversification's sake.

---

## Open threads to action

**Sell-more (ranked by value × probability):**
1. ⭐ **Convert the monthly reorder into a fortnightly standing allocation via northside-pickers** — the live 120pc Dickies ask (QUOTED, 8 quotes, $1,080) plus her "same again for July" message *is* the request. Close the ask, then formalise: fixed size curve, fixed grade, fortnightly dispatch. Realistic path from $34.8k lifetime pace (~$10.5k/yr) to $55-60k/yr with zero acquisition cost.
2. 🔥 **Fill the Carhartt detroit ask (60pc @ $15) before September** — she told Nina the sell-through date herself. northside-pickers is the natural source; 23 days idle on a pre-season ask is the only thing on this account currently at risk of disappointing her.
3. **Give Wrangler a permanent home** — the category converted via retro-harbor in April but has no standing lane since denim-dynasty was quarantined. Brief second-spin-supply (fast dispatch, right price point) for a quarterly 80pc bootcut lot.
4. **Anchor-hedge quietly:** keep retro-harbor and second-spin-supply each at ~1 order/quarter so the 50% concentration never becomes a crisis — but do NOT redistribute share away from a flawless anchor; that solves a risk she doesn't have by creating a friction she's never had.

**Why-not-buying:** nothing material. The account has no live blockers, no disputes, no stale demand. The only failure mode available here is **platform-inflicted**: a slow quote, a re-exposure to a QC-risky lane, or treating a model account with rescue-account energy.

---

## Sources legend
- Identity/snapshot: `fleek_analytics.order_details`, `google_sheets.account_ownership_data`, `fleek_raw.order_line_status_details` (`<bq-project>`)
- Buys / ledger / cancellations / stuck: `fleek_raw.order_line_status_details` ⋈ `product_details_v2` (`<bq-project>`)
- Demand hub: `fleek_raw.demand_hub` (`<bq-project>`)
- Chat: `fleek_node_rudder.send_message` (full-email match; handle `rustbeltretro`) (`<bq-project>`)
- CX: `fleek_hub.customer_experience_details` ⋈ `zendesk_new.ticket` (`<bq-project>`)
- as_of 2026-06-18.
