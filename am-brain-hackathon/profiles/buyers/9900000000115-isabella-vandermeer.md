---
entity_type: buyer
entity_id: 9900000000115
name: Isabella Vandermeer
country: Netherlands
buyer_type: Retailer
account_status: Active
account_owner: Jack Marlowe
archetype: A   # chat-native premium curator — every order is preceded by an authentication interrogation; trades as "Amsterdam Archive Club" (appointment-only archive store, Jordaan district + online drops)
email_resolvable: true

# Commercial snapshot
lifetime_gmv_usd: 36900
lifetime_orders: 22
lifetime_cancelled_usd: 2300       # 2 orders (1 authenticity — Stone Island badges — 1 pricing)
lifetime_cancelled_orders: 2
aov_usd: 1677
first_order: 2023-03-19
last_order: 2026-05-31
days_since_last_order: 20
recent_90d_gmv_usd: 5400
recent_90d_orders: 3
momentum_direction: steady         # 3 orders/90d, on-cadence — but conversion runs at maybe a THIRD of her stated demand; the gap is authentication throughput, not intent
recent_brand_skew: "Stone Island (badge-verified), Burberry, Arc'teryx, Schott leather — premium/designer handpicks 10-25pc, condition A only"

# Chat snapshot
active_threads_12m: 9
his_msgs_12m: 58
last_chat: 2026-06-18
chat_state: HIGH_TOUCH_DILIGENCE   # long photo-heavy threads: badge art-numbers, label eras, stitch checks — a free authentication workflow running through Sendbird

# Demand hub
demand_open_items: 4
demand_last_request: 2026-06-12
demand_signature: "Stone Island badge-verified knits/jackets 10-20pc @$45-60; Burberry nova-check pieces"
demand_state: PARTIALLY_MET        # converts ~1 in 3 asks — when photo-verification is fast, she buys; when it drags, the ask dies

# CX
lifetime_tickets: 5
cx_span: 2023-11-02 → 2026-03-15
dominant_issue: authenticity / PQ (item-not-as-photographed)
largest_refund: 310                # tokyo-drip-vintage Burberry shirt, label era mismatch (2025-04)

# Derived persona
category_focus: ["stone_island", "burberry", "arcteryx_gorpcore", "schott_leather"]
concentration_origin: trust_concentration   # the-thread-archive = 44% of lifetime — not habit but a TRUST anchor: the only vendor whose photos she no longer re-verifies
contactability:
  chat: highly_responsive          # 58 msgs/9 threads; sends annotated photo requests within minutes
  email: responsive                # replied to 2 drop-preview emails with buy intent
  push: unknown
  preferred: chat

risk_flags:
  - authentication_throughput_cap  # her diligence loop (badge photos, label eras, stitch macros) adds 3-9 days per deal; slow vendor photo turnaround is where most of her unconverted demand dies
  - authenticity_cancel            # $1,450 Stone Island jacket lot (mumbai-mills-vintage) cancelled 2025-09 — badge art-numbers failed her check; she now refuses that vendor outright
  - single_anchor_trust            # 44% concentrated in the-thread-archive because verification is pre-paid trust; if that vendor's curation slips ONCE, the whole premium relationship reprices
  - premium_supply_scarcity        # her bar (condition A + verified) matches a thin slice of catalog; asks die UNQUOTED more often than they die rejected
as_of: 2026-06-18

# ── checkpoint manifest (pipeline-written; do not hand-edit) ──
checkpoint:
  built_at: "2026-06-18"
  orders_through: "2026-06-19"
  chat_through: "2026-06-18"
  demand_hub_through: "2026-06-18"
  browse_through: "2026-06-17"
  cx_through: "2026-06-18"
  generator_skill_blob: "7c2e91d0aa44"
---

# Isabella Vandermeer (`9900000000115`) — Buyer Profile

**Headline.** An **Amsterdam appointment-only archive retailer** ("Amsterdam Archive Club") — **$36.9k lifetime / 22 orders / AOV $1,677** — who buys **small, expensive, verified**: Stone Island knits and jackets (badge art-numbers checked, every time), Burberry nova-check, Arc'teryx shells, Schott leathers, 10-25 pieces per order, condition A only. She is **active and on-cadence (3 orders / $5.4k in 90d, last chat yesterday)** — but the account's defining economics are in what *doesn't* close: her chat is a **free authentication workflow** (58 messages of badge macros, label-era questions, stitch photos), and **deals die in direct proportion to vendor photo-turnaround time.** Her one anchor, `the-thread-archive` (**44% of lifetime**), earns that share for a single reason: she no longer re-verifies their photos — trust is the discount. The single biggest lever: **make verification a product, not a chat thread** — pre-shot badge/label macro sets on premium listings routed to her before drop. Every day shaved off her diligence loop converts directly to order count, and her cancelled/refunded history shows the inverse: the only two vendors who failed her checks (`mumbai-mills-vintage`, a Burberry label-era miss at `tokyo-drip-vintage`) are the only dents in an otherwise pristine premium book.

---

## §1 · What she buys — overall + recent

**Premium/designer handpicks, narrow and deep.** No bales, no bundles, no grade-B — she retails single pieces at €120-450 in an appointment-only store, so one fake or one condition miss is reputational damage, not margin noise. That's the economics behind the diligence.

| Brand / item | Category | Spend (USD) | Orders | First→Last |
|---|---|--:|--:|---|
| Stone Island | knits, badge jackets | $11.9k | 7 | 2023-05 → 2026-05 |
| Burberry | nova-check shirts, trenches | $7.4k | 5 | 2023-08 → 2026-04 |
| Arc'teryx | shells, gorpcore | $4.8k | 3 | 2024-09 → 2026-02 |
| Schott | leather jackets | $3.2k | 2 | 2024-03 → 2025-10 |
| Lacoste / Diesel / mixed | premium designer handpick | $9.6k | 5 | 2023-03 → 2026-01 |

**Shift to watch:** Arc'teryx entered the mix Sep-2024 and is her fastest-growing line — gorpcore pulls a younger customer into the store, and her chat asks about it have doubled. Stone Island remains the identity purchase (her store's Instagram is effectively a badge-photo feed), but **the incremental dollar is moving to technical outerwear.**

---

## §1b · Cancellations & stuck pipeline — why-not-buying

- **Authenticity cancel ⭐:** `mumbai-mills-vintage` — *"Stone Island jacket lot 12pc"* **$1,450 cancelled on Authenticity Issue** (2025-09). Her chat verdict: *"art numbers don't match the era of the badge, two look reprinted — cancelling all 12."* She has refused the vendor since. Note the shape: she didn't ask for a discount on the good pieces — **one failed check voids the whole lot.** Binary trust.
- **Pricing cancel:** `heritage-hangers` Burberry trench 4pc, $850 — Pricing Issue (2024-06); vendor repriced upward after her authentication questions ("verification tax", she called it — worth remembering: making her do diligence and *then* raising price is the single worst move with this buyer).
- **Stuck:** nothing in order pipeline. Her stuck inventory is **pre-order**: 2 of 4 open hub asks have sat 40+ days awaiting vendor photo sets (§3) — deals dying in the verification queue, invisible to order-stage reports.

Net: why-not-buying = **verification latency + thin verified supply.** Price is a distant third — she pays $45-60/pc for knits without blinking when the badge photos are right.

---

## §1c · Supplier relationships — the ledger

**6 transacted vendors, $36.9k — a trust hierarchy, not a price list.**

| Vendor | Orders | GMV USD | First→Last | days_since | Label |
|---|--:|--:|---|--:|---|
| **the-thread-archive** | 9 | **$16.4k** | 2023-05→**2026-05** | **20** | **TRUST_ANCHOR** ⭐ (44% of lifetime; zero verification disputes in 9 orders; she buys from their drops sight-mostly-unseen — the only vendor with that status) |
| tokyo-drip-vintage | 4 | $7.2k | 2024-02→2026-04 | 65 | HEALTHY_WATCHED (strong Japan-sourced SI/Burberry; one label-era miss → $310 refund 2025-04; she still buys but re-verifies everything now) |
| heritage-hangers | 3 | $5.1k | 2023-09→2025-11 | 215 | COOLING (the "verification tax" repricing incident; no order since) |
| retro-harbor | 2 | $3.4k | 2024-07→2025-02 | 490 | ONE_ERA (two clean Schott/leather buys; catalog rarely hits her bar) |
| golden-era-goods | 2 | $2.6k | 2025-06→2026-01 | 160 | PROMISING (Y2K-adjacent designer; passed her checks twice; candidate for the Arc'teryx growth line) |
| the-sorting-house | 2 | $2.2k | 2023-03→2023-12 | 917 | ONE_ERA_DORMANT (early experiments; graded-bulk model never fit her) |

**`concentration_origin: trust_concentration`** — the 44% anchor share is *earned* economics: the-thread-archive amortised her verification cost to zero, so their effective price is lower even when nominal price is higher. This cuts both ways — **one curation slip and the trust premium unwinds instantly** (see tokyo-drip: a single $310 label miss demoted them to re-verify-everything status, adding days to every subsequent deal). Vendor coaching, not buyer management, protects this account.

---

## §2 / §2b · What she wants — chat & demand mining

**Chat (58 msgs / 9 threads, last 2026-06-18):** the most sophisticated authentication dialogue in the NL book. Recurring patterns:

- *"send me the badge front and back, and the art number under the collar"* — her standard Stone Island opener, sent within minutes of any SI listing appearing.
- *"this nova check repeat is off at the seam — is it a 90s licence piece? then price it like one"* — she authenticates *eras*, not just realness, and prices accordingly.
- *"condition A means no pilling on the collar. Photos in daylight please"* — condition spec, stated repeatedly.
- *"if you can shoot the labels before you list I'll take first pick every drop"* (to the-thread-archive, 2026-05-14) — **she has proposed the pre-verification workflow herself and attached first-look buying to it.** The product ask is sitting in a chat thread.
- *"the Arc'teryx moved in a weekend. What else do you have in shells?"* (2026-06-02) — the growth line, in her own words.

**Intent buckets:**
1. **Explicit asks:** SI badge-verified knits 10-20pc @$45-60; Burberry nova-check shirts/trenches; Arc'teryx shells 5-10pc; Schott perfectos when condition A.
2. **Workflow ask:** pre-shot label/badge macro sets before listing, in exchange for first-look commitment — the highest-leverage sentence in the account.
3. **Price logic:** era-correct pricing (licence pieces ≠ mainline); no re-pricing after diligence. She is price-*rational*, not price-sensitive.

---

## §3 · Demand Hub — PARTIALLY_MET, dying in the photo queue

4 open items. Her lifetime hub conversion is ~1 in 3 — and the split is clean: **asks that got photo sets within a week closed; asks that waited died.**

| Created | Item | Qty | $/pc | Status | Idle | Quotes |
|---|---|--:|--:|---|--:|--:|
| 2026-06-12 | Stone Island knits, badge-verified, AW pieces | 15 | 55 | FINDING_SUPPLY | 6 | 2 (1 awaiting badge photos) |
| 2026-05-20 | Arc'teryx shells, condition A | 8 | 70 | QUOTED_VERIFYING | 29 | 3 (photo set received 06-16 — LIVE, close it) |
| 2026-05-04 | Burberry nova-check shirts 90s | 12 | 38 | STALLED_NO_PHOTOS | 45 | 2 (both ignored her macro request) |
| 2026-04-28 | Schott perfecto, 38-42 | 6 | 85 | STALE | 51 | 1 |

**State `PARTIALLY_MET`:** the Arc'teryx ask is **hot right now** — photos landed two days ago and passed her first screen. The Burberry ask is the systemic failure in miniature: two quotes, **both vendors ignored the label-photo request**, 45 days idle, ~$456 of demand suffocating on a 10-minute photography task. Multiply that pattern across her history and the platform has left roughly **an order per month** on the table with this buyer.

---

## §Dx · Demand by category — spend capacity

| category | evidence | priced ask | tier |
|---|---|---|---|
| stone_island | $11.9k history + 15pc @$55 live ask + first-look offer | 15pc @$55 ($825) | current_open (verification-gated) |
| arcteryx_gorpcore | $4.8k history, fastest-growing, 8pc @$70 quoted+verified | 8pc @$70 ($560) | current_open_hot ⭐ |
| burberry | $7.4k history + 12pc @$38 ask stalled 45d | 12pc @$38 ($456) | current_open_unmet (photo-stalled) |
| schott_leather | $3.2k history + 6pc @$85 stale ask | 6pc @$85 ($510) | open (thin supply) |

```json
[
  {"category": "stone_island", "brand": "Stone Island", "asks": [
    {"source": "demand_hub", "ask_type": "buy", "vendor": null, "qty": 15, "price": 55, "currency": "USD", "line_value": 825, "date": "2026-06-12", "raw_text": "SI knits badge-verified AW 15pc @$55 — 1 quote awaiting badge photos"},
    {"source": "chat", "ask_type": "workflow", "vendor": "the-thread-archive", "qty": null, "price": null, "currency": null, "line_value": null, "date": "2026-05-14", "raw_text": "'shoot the labels before you list, I'll take first pick every drop' — standing first-look offer"}
  ]},
  {"category": "arcteryx_gorpcore", "brand": "Arc'teryx", "asks": [
    {"source": "demand_hub", "ask_type": "buy", "vendor": null, "qty": 8, "price": 70, "currency": "USD", "line_value": 560, "date": "2026-05-20", "raw_text": "Shells condition A 8pc @$70 — photo set passed screen 06-16, LIVE"},
    {"source": "chat", "ask_type": "restock", "vendor": "golden-era-goods", "qty": null, "price": null, "currency": null, "line_value": null, "date": "2026-06-02", "raw_text": "'the Arc'teryx moved in a weekend. What else in shells?' — pull signal, growth line"}
  ]},
  {"category": "burberry", "brand": "Burberry", "asks": [
    {"source": "demand_hub", "ask_type": "buy", "vendor": null, "qty": 12, "price": 38, "currency": "USD", "line_value": 456, "date": "2026-05-04", "raw_text": "Nova-check shirts 90s 12pc @$38 — 2 quotes, both ignored label-photo request, 45d idle"}
  ]},
  {"category": "schott_leather", "brand": "Schott", "asks": [
    {"source": "demand_hub", "ask_type": "buy", "vendor": null, "qty": 6, "price": 85, "currency": "USD", "line_value": 510, "date": "2026-04-28", "raw_text": "Perfecto 38-42 6pc @$85 — 1 quote, STALE, thin verified supply"}
  ]}
]
```

**Validation:** all four categories fully priced; **$2.35k of open asks against a $1.8k/90d realised run-rate** — demand exceeds conversion by ~30%, and the delta maps one-to-one onto verification latency. Unmapped: none, though her era-pricing distinction (licence vs mainline Burberry) has no taxonomy expression — candidate metadata flag `era_verified` on premium listings.

---

## §4 · Chats — HIGH_TOUCH_DILIGENCE

9 threads, 58 messages, last 2026-06-18 (yesterday at checkpoint). Long, photo-dense, expert threads — she teaches vendors her checks as she runs them, which means **her chat history is literally a training corpus for premium authentication.** State: healthy and engaged, but every deal carries a 3-9 day diligence overhead that only the-thread-archive has engineered away. She is simultaneously the book's most demanding buyer and its clearest spec for what a "verified premium" product tier should be.

---

## §5 · Issues & CX

**5 tickets (2023-11 → 2026-03), all closed; dominant theme authenticity / item-not-as-photographed.** Largest: **$310 refund** on a tokyo-drip-vintage Burberry shirt whose label dated it a decade later than listed (2025-04) — handled fast, relationship survived but was demoted to full re-verification. Two condition disputes (pilling on an SI knit, scuffed Schott hardware — partial credits), one shipping-insurance query, one VAT invoice request. The pattern: **she never disputes price and never invents problems — every PQ ticket she has filed was substantiated.** Her complaints are free QC signal with a 100% hit rate; route them to vendor coaching.

---

## Open threads to action

**Sell-more (ranked by value × probability):**
1. 🔥 **Close the Arc'teryx shells ask NOW** (8pc @$70, photos passed her screen 06-16) — verified, priced, in her growth category. This should convert this week; it is the easiest $560 in the NL book.
2. ⭐ **Productise her first-look offer** — she has proposed pre-shot label/badge macros in exchange for first-pick commitment (2026-05-14 thread). Formalise it with the-thread-archive + golden-era-goods: premium listings ship with a standard photo set, she gets a 24h first-look window. **Structurally converts her ~1-in-3 hub rate toward 2-in-3 and deepens the moat around the anchor.**
3. **Unstick the Burberry ask** (12pc @$38, 45d idle) — the blocker is a 10-minute photography task two vendors ignored; an AM nudge with her macro checklist attached likely revives it.
4. **Feed the gorpcore line** — Arc'teryx asks doubling; brief golden-era-goods and the-thread-archive to flag technical outerwear intake to her before listing.

**Why-not-buying:**
- **Verification latency** — the dominant leak; deals die waiting for photos, not on price or intent.
- **Thin verified supply** at her bar (condition A + era-correct) — asks die unquoted; premium intake needs routing to her before general listing.
- **Trust is binary and singular** — one anchor holds 44% on zero-dispute history; protect the-thread-archive curation quality as if it were the account itself.

---

## Sources legend
- Identity/snapshot: `<bq-project>.fleek_analytics.order_details`, `<bq-project>.google_sheets.account_ownership_data`, `<bq-project>.fleek_raw.order_line_status_details`
- Buys / ledger / cancellations: `<bq-project>.fleek_raw.order_line_status_details` ⋈ `<bq-project>.fleek_raw.product_details_v2`
- Cancelled-GMV backfill: `<bq-project>.fleek_raw.header_truth` (latest_status='CANCELLED')
- Demand hub: `<bq-project>.fleek_raw.demand_hub` (`demand_request*`)
- Chat: `<bq-project>.fleek_node_rudder.send_message` (full-email match)
- CX: `<bq-project>.fleek_hub.customer_experience_details` ⋈ `<bq-project>.zendesk_new.ticket`
- as_of 2026-06-18.
