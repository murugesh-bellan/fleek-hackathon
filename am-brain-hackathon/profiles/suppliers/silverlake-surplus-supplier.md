---
entity_id: silverlake-surplus
shop_name: silverlake-surplus
origin: US
zone: null
country: United States
joined: 2021-10-08
status: ACTIVE
supply_am: null   # coverage lapsed in the 2024-11 supply-AM reorg and was never reassigned; kam_email absent from all quotes since
seller_archetype: B   # bulk surplus/lot seller — LA rag-house sourcing, bundle-dominant
strategic_position: dormant_former_anchor   # top-3 fleet vendor 2022-24 by GMV; now near-zero uploads and 2 orders in 90d
as_of: 2026-06-20

# Commercial snapshot
lifetime_gmv_usd: 612918        # header_truth 2026-06-20 cross-check $612,917.60 ✓ — still #4 all-time in the fleet
lifetime_orders: 1020           # BQ=1020, no delta this pass
lifetime_buyers: 301            # header_truth 2026-06-20
aov_usd: 600.90                 # header_truth 2026-06-20
days_since_last_order: 68       # last order 2026-04-13 (Kowalski Kilo Store)
recent_90d_gmv_usd: 1140        # header_truth 2026-06-20 — 0.19% of lifetime
recent_90d_orders: 2            # header_truth 2026-06-20
recent_12mo_gmv_usd: 14230      # vs ~$187k in calendar 2023 — a 92% collapse from peak run-rate
recent_brand_skew: "mixed unbranded kilo bundles + Champion/Fila sweats remnants (90d, n=2)"
upload_cadence_30d: "near-zero (0 in last 30d; 3 products since 2026-03-01)"

gmv_split_by_kind: "bundle 81% / handpick 17% / fleeksort 2%"
catalog_make_split: "vintage-secondhand 98% / rework-upcycled 2% / vintage-inspired 0%"
visual_signature: "LA rag-house bulk — mixed-era kilo bundles, Champion/Fila/Adidas sweats lots, unbranded tees by the hundredweight, faded-wash denim bales, B/C grade, £2-9/pc; warehouse-floor pallet shots, era of photography visibly 2022-23."

# Quality
raw_cancel_rate_pct: 3.5            # header_truth 2026-06-20 — LIFETIME figure; effectively frozen since activity stopped
delivered_orders_lifetime: 1044
median_dispatch_days: 4
avg_delivery_days: 8.1
qc_hold_rate_pct: 7.8            # fleet sweep 2026-06-19: canonical = COUNTIF(went_to_qc_hold) (LIFETIME ever-incidence — history)
qc_hold_count: 133            # on ~1,705 lifetime lines
qc_hold_recent_pct: 25.0            # last 180d — 1 hold on 4 lines; denominator far below 30
qc_hold_recent_count: 1            # holds in last 180d
qc_hold_recent_lines: 4            # order lines in last 180d (<30 = low-confidence; do NOT read as current-risk)
qc_hold_signal: low-recent-volume            # current-risk | improved | low-recent-volume | clean
ai_approval_rate: 88.3          # FleekSort channel dormant since 2025-02; figure is historical
counterfeit_pct_branded: 0.6    # 5 flagged / 840 branded QC'd lifetime — historical, clean
unverifiable_pct: 3.1
final_vendor_rating: 4.2        # frozen — last rating event 2025-08
quality_score: null             # official score not pulled (1 GB view); leading with raw metrics

# Chat
vendor_channels_12m: 11
ghosting_rate: 0.64
chat_state: GONE_QUIET   # 31 vendor msgs / 11 channels in 12mo; last vendor msg 2026-03-02; 7 of last 11 threads ended BUYER_WAITING

# WhatsApp
whatsapp_state: WHATSAPP_NONE   # not searched this pass; no confirmed footprint
whatsapp_chats: none found

# Demand hub
demands_matched: 1447           # 1,289 OPTIMATCH + 96 VENDOR + 62 HISTORICAL — VENDOR quotes: only 4 in last 12mo
real_vendor_quotes: 96
quote_approval_rate: "9.4% KAM_APPROVED lifetime (9 of 96) — all 9 approvals dated 2023-2024"
quote_price_coverage_pct: 72
demand_hub_state: MATCHED_NOT_QUOTING   # OPTIMATCH keeps matching their stale catalog; the vendor has stopped answering

risk_flags: [dormant_near_zero_uploads, former_anchor_unmanaged_no_am, chat_gone_quiet_buyer_waiting, stale_catalog_polluting_optimatch, winback_window_closing]

# Patch metadata
patched_at: 2026-06-20
orders_through: 2026-06-20
chat_through: 2026-06-20
quotes_through: 2026-06-20
---

# silverlake-surplus — supplier profile

## Headline
**silverlake-surplus** is a US-based (`US`) **bulk surplus seller** (Archetype B) and the fleet's most consequential dormancy: **$612.9k lifetime GMV across 1,020 orders to 301 buyers** (AOV $601) — **still the #4 vendor all-time** — reduced to **2 orders and $1.1k in the last 90 days** with **zero uploads in 30 days** and three products listed since March. This was a top-3 fleet vendor through 2022-24, moving LA rag-house kilo bundles, Champion/Fila sweats lots and unbranded tee bales at £2-9/pc to 301 buyers with a clean operational file (3.5% cancels, 4-day dispatch, 8.1-day delivery, 88.3% AI approval). The decline is **not a quality story — it is a coverage story**: their supply AM assignment lapsed in the 2024-11 reorg and was never reassigned, chat went from active to **GONE_QUIET** (last vendor message 2026-03-02, 7 of the last 11 threads ended buyer-waiting), and uploads followed. Meanwhile their stale catalog still pollutes OPTIMATCH with matches nobody will honour. **⭐ Biggest lever: a direct winback call before Q4 — the last live thread is Mia Kowalski's (Kowalski Kilo Store), their perfect-fit kilo buyer, who placed the most recent order (2026-04-13) and is still asking.** If that thread dies, the realistic winback window dies with it.

## §1 · What they sell (sold)
**GMV index (lifetime, ex-cancellations):** BUNDLE **$496,460 (81.0%)** · HANDPICK **$104,200 (17.0%)** · FLEEKSORT **$12,260 (2.0%)**. A pure bulk operation: pallet-scale kilo bundles first, occasional handpick containers, a FleekSort channel that was always marginal and has been dormant since Feb 2025.

**Catalog (lifetime, bundle + listed):** mixed-era LA rag-house volume, B/C grade, priced by weight more than by piece:
| Category | Brand | Gender | Grade | Products | Avg £/pc | Note |
|---|---|---|---|--:|--:|---|
| mixed | unbranded kilo | mixed | B/C | 611 | 3.40 | the core line — mixed-era kilo bundles |
| top | Champion | mixed | B | 187 | 7.20 | reverse-weave sweats lots |
| top | Fila / Kappa | mixed | B | 122 | 6.10 | 90s sportswear lots |
| top | Adidas | mixed | B/C | 104 | 5.80 | three-stripe sweats + tees |
| bottom | mixed denim | menswear | B/C | 98 | 8.60 | faded-wash bales |
| top | unbranded tees | mixed | C | 340 | 2.20 | hundredweight tee bales |

**Price band:** £2-9/pc, bundle tickets £120-880 — the cheapest per-piece surface the fleet has ever had, which is exactly why kilo-store buyers anchored here. **Upload cadence: near-zero** — 0 in the last 30 days, 3 since March; the photography on the live listings is visibly 2022-23 era. **Everything in this section is past-tense capability until uploads resume.**

**Seller archetype: B** — bulk/lot seller, AOV $601, weight-priced volume, US-domestic freight advantage (8.1-day avg delivery, best in the bundle segment).

## §2 · Sales & commercials
**Lifetime:** $612.9k / 1,020 orders / 301 buyers, first order 2021-11-02, **last order 2026-04-13 (68 days ago)**. The shape of the decline:

| Period | GMV | Note |
|---|--:|---|
| 2022 | $148k | scale-up year |
| 2023 | $187k | peak — top-3 fleet vendor |
| 2024 | $162k | softening H2; AM coverage lapses 2024-11 |
| 2025 | $101k | uploads halve; chat decays |
| 2026 YTD | $9.1k | 2 orders in the last 90 days |

**Top buyers (lifetime) — a broad base with two names that still matter:**
| buyer | shop | country | orders | GMV USD | first→last |
|---|---|---|--:|--:|---|
| 9900000000117 | Kowalski Kilo Store (Mia Kowalski) | US | 54 | $31,200 | 2022-06→2026-04 |
| 9900000000118 | Winterbourne Vintage (Jordan Winterbourne) | UK | 19 | $22,400 (£16.8k) | 2022-03→2023-11 |
| 9900000000108 | Nordic Rewear (Hannah Lindqvist) | SE | 11 | $9,700 | 2022-09→2024-08 |

**Kowalski is the live wire**: 54 orders, high-frequency small-AOV kilo buying — her model *is* their model — and she placed the most recent order on the book (2026-04-13, $570). Her thread is also one of the 7 currently ended buyer-waiting. Winterbourne (ONE_ERA_DORMANT, gone since 2023) and Lindqvist (churned 300+ days, historical Champion/Fila sweats buyer) are both buyers whose own dormancy correlates with this vendor's — silverlake's collapse removed the cheap-sweats surface both of them bought. **Concentration origin: `dormant_former_anchor`** — the base was broad (top buyer just 5.1%); what died was the supply, not the demand.

## §3 · Quality & reliability
**The historical file is clean — dormancy is not a quality exit:**
- **Raw cancel rate 3.5% lifetime**, 1,044 delivered — solid across four years and 1,700+ lines.
- **Median dispatch 4 days, avg delivery 8.1 days** — US origin made them the fastest bundle seller into US buyers by a wide margin.
- **QC hold 7.8% lifetime (133 / ~1,705 lines)** — moderate, under the 15% flag. Recent-window 25.0% is **1 hold on 4 lines** — denominator far below 30. **Signal: `low-recent-volume`** — do not read as current-risk; there is simply no recent volume to measure.
- **AI approval 88.3% (historical)**, counterfeit 0.6% lifetime — both frozen since the FleekSort channel went quiet Feb 2025.

**Derived state:** `DORMANT_CLEAN_HISTORY` — nothing in the quality file blocks a winback; everything in the activity file demands one.

## §5 · Chat behavior & responsiveness
**Gone quiet — and this is the decline's leading indicator, not its symptom.** `send_message`: only **31 vendor messages across 11 channels in 12 months**, last vendor message **2026-03-02**, ghosting ~64%, **7 of the last 11 threads ended BUYER_WAITING** — including Kowalski's (her 2026-05-28 ask for "another mixed kilo pallet like April's" is unanswered at 23 days), a Lindqvist winback feeler routed by Jack Marlowe in Feb (unanswered), and a Champion-sweats inquiry from a new buyer (unanswered). Compare 2023, when this vendor averaged ~90 messages/month. **State: `GONE_QUIET`.**

## §6 · Demand hub performance
Matched to **1,447 demand quotes**: OPTIMATCH 1,289 · VENDOR 96 · HISTORICAL 62 — but only **4 VENDOR quotes in the last 12 months** and all 9 lifetime KAM approvals date to 2023-24. The problem is now actively negative: **OPTIMATCH keeps matching their stale 2022-23 catalog against live kilo/sweats demands**, generating matches that go nowhere and slowing those demands' routing to live vendors. **State: `MATCHED_NOT_QUOTING`.** **Action:** suppress or de-prioritise their catalog in OPTIMATCH until uploads resume; every stale match is a delayed demand.

## Open opportunities & risks
**Opportunities**
1. **⭐ Direct winback call, this quarter** — the trifecta is unusual: clean quality history, intact demand (Kowalski asking *now*, Lindqvist/Winterbourne winbacks blocked partly by this vendor's absence), and an identifiable non-quality cause (coverage lapse). Assign an AM, answer Kowalski's pallet ask, and ask one question: is the rag-house pipeline still alive? A 2023-level recovery is unlikely; a $60-80k/yr kilo lane is not.
2. **Kowalski bridge order** — her open 2026-05-28 ask is a ready-made re-entry order; closing it re-opens the thread and tests dispatch capability in one move.
3. **Champion/Fila sweats restart unlocks two buyer winbacks** — Lindqvist's only winback signal is her old sweats demand, and Winterbourne's dormant-era vendors include this one; a single sweats-lot upload run gives both winback plays something concrete to offer.

**Risks**
1. **Winback window closing** — Kowalski has begun splitting her kilo volume elsewhere (her profile shows new-vendor exploration); once she re-anchors, the last live thread here dies.
2. **Unmanaged former anchor** — 20 months without an AM; no one owns the relationship, so every signal above is currently nobody's job.
3. **Stale catalog pollution** — 1,289 OPTIMATCH matches against a dead catalog is active drag on demand routing, not neutral dormancy.
4. **Unknown supply-side cause** — if the rag-house pipeline is gone (sold, priced out, redirected to domestic bulk channels), no amount of account management brings this back; the winback call's first job is diagnosis.

## §Sources
- `<bq-project>.fleek_hub.vendor_details` — identity (US origin, ACTIVE, joined 2021-10-08, supply_account_manager_id NULL since 2024-11)
- `<bq-project>.fleek_raw.order_line_status_details` — GMV/orders/buyers, GMV-by-kind, yearly decline shape, reliability core, top buyers, last-order date (all `vendor='silverlake-surplus'`)
- `<bq-project>.fleek_analytics.product_details_v2` — catalog, upload-cadence collapse, listing staleness
- `<bq-project>.fleek_hub.demand_hub_quote` — quote-source decomposition, OPTIMATCH stale-match volume, approval-date distribution
- `<bq-project>.fleek_node_rudder.send_message` — chat decay (31 msgs / 11 channels 12mo), BUYER_WAITING thread states
- `<bq-project>.header_truth` — 2026-06-20 aggregate cross-check
- Not pulled this pass: official quality score (1 GB view), platform funnel, Zendesk seller-experience, WhatsApp/qmd.
