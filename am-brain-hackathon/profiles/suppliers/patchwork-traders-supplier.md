---
entity_id: patchwork-traders
shop_name: patchwork-traders
origin: PK
zone: null
country: Pakistan
joined: 2023-04-20
status: ACTIVE
supply_am: Tom Aldridge   # assigned 2025-11 after the QC-hold escalation; previously unmanaged
seller_archetype: B   # rework/upcycled bale-and-bundle seller, small handpick + token FleekSort
strategic_position: conditional_useful   # unique rework catalog nobody else carries, but quality signals gate how hard we can push volume
as_of: 2026-06-17

# Commercial snapshot
lifetime_gmv_usd: 96750         # header_truth 2026-06-17 cross-check $96,748.80 ✓
lifetime_orders: 129            # BQ=129, baseline 128 + 1 new → no re-baseline
lifetime_buyers: 64             # header_truth 2026-06-17
aov_usd: 750.00                 # header_truth 2026-06-17
days_since_last_order: 9        # last order 2026-06-08
recent_90d_gmv_usd: 9841        # header_truth 2026-06-17
recent_90d_orders: 13           # header_truth 2026-06-17
recent_12mo_gmv_usd: 38200      # bundle 24.9k + handpick 11.6k + fleeksort 1.7k — flat-to-soft vs prior 12mo
recent_brand_skew: "rework Carhartt/Levi's + unbranded patchwork denim + flannel rework (90d)"
upload_cadence_30d: "bursty (0 in first half of Jun; 74 products in one drop 2026-05-19)"

gmv_split_by_kind: "bundle 62% / handpick 34% / fleeksort 4%"
catalog_make_split: "rework-upcycled 68% / vintage-secondhand 32% / vintage-inspired 0%"
visual_signature: "Sialkot-cut rework — patchwork denim from Levi's/Wrangler donor pairs, cropped-and-boxy Carhartt jacket rebuilds, flannel-panel shirts, distressed-and-restitched bundles, B/C donor grade, £5-14/pc; busy multi-item bale shots, inconsistent measurement cards."

# Quality
raw_cancel_rate_pct: 7.6            # header_truth 2026-06-17 — under the 10% flag but 3x segment median; seller rejections are the driver
delivered_orders_lifetime: 131
median_dispatch_days: 6
avg_delivery_days: 16.8
qc_hold_rate_pct: 13.4            # fleet sweep 2026-06-16: canonical = COUNTIF(went_to_qc_hold) (LIFETIME ever-incidence)
qc_hold_count: 27            # on ~201 lifetime lines
qc_hold_recent_pct: 19.2            # last 180d — WORSE than lifetime; CURRENT-risk signal
qc_hold_recent_count: 10            # holds in last 180d
qc_hold_recent_lines: 52            # order lines in last 180d (denominator ≥30 → signal is real, not noise)
qc_hold_signal: current-risk            # current-risk | improved | low-recent-volume | clean
ai_approval_rate: 74.8          # FleekSort tiny (4% of GMV) and low-approval — rework grades poorly against donor-wear rubric
counterfeit_pct_branded: 0.0    # 0 flagged / 118 branded QC'd — rework from genuine donors; fake risk is not the issue here
unverifiable_pct: 8.9           # high — rework obscures donor labels; drives QC friction
final_vendor_rating: 3.6
quality_score: null             # official score not pulled (1 GB view); leading with raw metrics

# Chat
vendor_channels_12m: 46
ghosting_rate: 0.22
chat_state: REACTIVE_SLOW   # 210 vendor msgs / 46 channels, last msg 2026-06-14; replies in 1-3 days, quotes fast but follow-through lags

# WhatsApp
whatsapp_state: WHATSAPP_NONE   # not searched this pass; no confirmed footprint
whatsapp_chats: none found

# Demand hub
demands_matched: 718            # 546 OPTIMATCH + 88 VENDOR + 84 HISTORICAL
real_vendor_quotes: 88
quote_approval_rate: "3.4% KAM_APPROVED (3 of 88)"
quote_price_coverage_pct: 61
demand_hub_state: ACTIVE_LOW_CONVERSION   # quotes rework onto non-rework demands; mismatch, not disengagement

risk_flags: [qc_hold_recent_rising, seller_rejection_history, grading_dispute_pattern_rework, bursty_upload_cadence]

# Patch metadata
patched_at: 2026-06-17
orders_through: 2026-06-17
chat_through: 2026-06-17
quotes_through: 2026-06-17
---

# patchwork-traders — supplier profile

## Headline
**patchwork-traders** is a Pakistan-based (`PK`) **rework/upcycled specialist** (Archetype B) that joined Fleek in Apr 2023 and has done **$96.8k lifetime GMV across 129 orders to 64 buyers** (AOV $750). They are the only meaningful **rework catalog** in the active fleet — patchwork denim cut from Levi's/Wrangler donors, boxy Carhartt jacket rebuilds, flannel-panel shirts at £5-14/pc — which makes them genuinely useful and genuinely hard to manage in the same breath. The quality file is **mixed and currently deteriorating**: QC holds are **13.4% lifetime but 19.2% in the last 180 days** (10 holds on 52 lines — a real denominator, so this is a `current-risk` signal, not noise), cancel rate is 7.6% with a documented **seller-rejection history** (5 of the last 12 cancellations were vendor-side rejections after order placement), and 8.9% of QC'd pieces are unverifiable because rework obscures donor labels. Their one dependable revenue line is **Nathan Okoye (Okoye Wholesale)**, a margin-driven container buyer who takes their B/C-donor bales precisely *because* he prices for the grade. **⭐ Biggest lever: split the account in two — protect the Okoye bale lane (which works) while gating handpick/FleekSort volume behind a QC improvement plan (which doesn't).**

## §1 · What they sell
**GMV index (lifetime, ex-cancellations):** BUNDLE **$59,985 (62.0%)** · HANDPICK **$32,895 (34.0%)** · FLEEKSORT **$3,870 (4.0%)**. A bale-and-bundle seller whose handpick channel is where the disputes live; FleekSort is a token, low-approval experiment.

**Catalog (lifetime, bundle + listed):** rework-dominant — **68% rework/upcycled, 32% true vintage** — the inverse of every other PK/IN vendor on the book. Describe their stock as rework first; calling it vintage causes exactly the buyer-expectation gap that drives their disputes:
| Category | Line | Donor brands | Grade (donor) | Products | Avg £/pc | Note |
|---|---|---|---|--:|--:|---|
| bottom | patchwork denim | Levi's / Wrangler | B/C | 204 | 9.80 | the signature line, multi-panel rebuilds |
| outerwear | jacket rebuilds | Carhartt / Dickies | B/C | 88 | 13.60 | cropped/boxy recuts of damaged donors |
| top | flannel-panel shirts | unbranded | B/C | 121 | 6.40 | volume filler |
| bottom | distressed-restitch | mixed | C | 96 | 5.20 | lowest grade, bale-only |
| mixed | true-vintage bales | mixed | B | 74 | 7.10 | the 32% non-rework side |

**Price band:** £5-14/pc, bundle tickets £180-620. **Upload cadence:** bursty in the extreme — 74 products in a single drop 2026-05-19, then zero through mid-June. Their live surface between drops is near-empty.

**Seller archetype: B** — wholesale/lot rework seller, AOV $750, unique catalog, uneven execution.

## §2 · Sales & commercials
**Lifetime:** $96.8k / 129 orders / 64 buyers, first order 2023-05-11, **last order 2026-06-08 (9 days ago)**. Run-rate is flat-to-soft: $38.2k in the last 12 months against a $44k prior-12mo comp. Destinations skew **UK** with some DE/NL.

**Top buyers (lifetime):**
| buyer | shop | country | orders | GMV USD | first→last |
|---|---|---|--:|--:|---|
| 9900000000114 | Okoye Wholesale (Nathan Okoye) | UK | 16 | $17,960 (£13.5k) | 2024-02→2026-06 |
| 9900000000120 | Sattler Secondhand (Ben Sattler) | DE | 7 | $6,340 | 2024-08→2026-01 |
| 9900000000105 | Vermeulen Vintage (Theo Vermeulen) | NL | 4 | $3,890 | 2023-09→2025-04 |

Okoye is **18.6% of lifetime GMV** and the entirety of the healthy story: a container-scale, margin-driven bale buyer (he splits his supply between kavya-exports and here) who knows exactly what B/C donor grade means and prices accordingly — **zero disputes across 16 orders**. Sattler, by contrast, is the case study in what goes wrong: a price-sensitive negotiator who cancelled twice over grading-vs-price mismatch (his profile flags him cancellation-prone; this vendor is one of the venues). **Concentration origin: `conditional_useful`** — the bale lane to grade-literate buyers works; expansion beyond it keeps failing on expectations.

## §3 · Quality & reliability
**The gating section of this profile.**
- **Raw cancel rate 7.6%** — under the 10% flag but 3x the segment median, and the composition matters: of the last 12 cancellations, **5 were seller rejections** (vendor accepted, then rejected after placement — twice citing donor-stock shortfall after the bale had been listed), 4 buyer-requested, 3 ops. Seller rejection is the worst cancellation type for buyer trust and it is a pattern here, not an incident.
- **QC hold 13.4% lifetime (27 holds) → 19.2% recent 180d (10 / 52 lines)** — rising, on a ≥30-line denominator. **Signal: `current-risk`.** Hold reasons cluster on measurement-vs-card mismatch and donor-grade disputes — rework sizing is inherently nonstandard and their measurement cards are inconsistent.
- **Median dispatch 6 days, avg delivery 16.8 days** — slowest quartile; the 2026-05 drop shipped 4-9 days after order.
- **FleekSort AI approval 74.8%** on a tiny channel — the grading model reads donor wear on rework as damage; FleekSort is structurally the wrong channel for this catalog and should not be grown as-is.
- **Counterfeit 0.0%** — genuinely clean; donors are real. The authenticity problem is `unverifiable_pct` **8.9%** (labels cut/covered in rework), which is friction, not fraud.

**Derived state:** `MIXED_CURRENT_RISK` — reliable enough for grade-literate bale buyers, not reliable enough to introduce to premium or expectation-sensitive accounts.

## §5 · Chat behavior & responsiveness
**Reactive and slow.** `send_message`: **210 vendor messages across 46 channels (12mo)**, last message 2026-06-14, typical reply lag 1-3 days, ghosting ~22%. The pattern: they respond fast to a new order inquiry, then go quiet on post-order follow-through (measurement confirmations, dispatch dates) — which is exactly where their QC disputes incubate. **State: `REACTIVE_SLOW`.**

**Chat delta (2026-06-13/14):** Okoye asked for a July patchwork-denim bale (£640, ~90pc) — vendor confirmed donor stock "arriving end of June", unconfirmed since; Tom Aldridge chased the two open QC-hold disputes from the 2026-05 drop — vendor supplied donor-grade photos for one, silent on the second.

## §6 · Demand hub performance
Matched to **718 demand quotes**: OPTIMATCH 546 · **VENDOR 88** · HISTORICAL 84. Only **3 KAM_APPROVED (3.4%)** and 61% price coverage. Root cause is mismatch, not laziness: they quote rework onto true-vintage demands (e.g. quoting patchwork denim against straight Levi's 501 asks), which KAMs correctly reject. **State: `ACTIVE_LOW_CONVERSION`.** **Action:** tag their quotes rework-only and route only explicitly-rework or grade-flexible bale demands here — their approval rate on correctly-matched demands (2 of 9) is actually fine.

## Open opportunities & risks
**Opportunities**
1. **⭐ Protect and grow the Okoye bale lane** — 16 orders, zero disputes, an explicit July bale ask on the table; confirm the donor stock and this is the cleanest $ on the account. His margin-driven model absorbs their grade variance better than any other buyer on the book.
2. **QC improvement plan as the volume gate** — standardized measurement cards + pre-dispatch photo sets (the northside-pickers playbook) would attack both the hold rate and the dispute pattern; make handpick growth conditional on it.
3. **Rework-demand routing** — they are the only rework catalog live; upcycled-denim demands currently die unquoted. Correctly-tagged routing turns their uniqueness into conversion instead of noise.

**Risks**
1. **QC hold trajectory** — 19.2% recent and rising on a real denominator; unmanaged, this account is 2-3 bad drops from a suspension review.
2. **Seller-rejection pattern** — 5 recent vendor-side rejections; one more against a container-scale buyer like Okoye would damage the only anchor lane they have.
3. **Grading disputes on rework** — nonstandard sizing + inconsistent cards + expectation-sensitive buyers (Sattler) is a repeating triangle; keep them away from premium accounts (never route Vandermeer-type authenticity-checkers here).
4. **Bursty surface** — one drop per 4-6 weeks with an empty shop between; caps discoverability and makes their run-rate lumpy.

## §Sources
- `<bq-project>.fleek_hub.vendor_details` — identity (PK origin, ACTIVE, joined 2023-04-20, supply AM Tom Aldridge since 2025-11)
- `<bq-project>.fleek_raw.order_line_status_details` — GMV/orders/buyers, GMV-by-kind, cancellation-reason decomposition (seller rejections), QC-hold trend, top buyers (all `vendor='patchwork-traders'`)
- `<bq-project>.fleek_analytics.product_details_v2` — catalog, make-type split (rework 68%), upload burst pattern
- `<bq-project>.fleek_hub.demand_hub_quote` — quote-source decomposition, KAM approval rate, rework-mismatch read
- `<bq-project>.fleek_node_rudder.send_message` — chat activity (210 msgs / 46 channels, ghosting decomposition)
- `<bq-project>.header_truth` — 2026-06-17 aggregate cross-check
- Not pulled this pass: official quality score (1 GB view), platform funnel, Zendesk seller-experience, WhatsApp/qmd.
