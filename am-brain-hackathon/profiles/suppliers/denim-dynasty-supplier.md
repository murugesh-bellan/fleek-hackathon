---
entity_id: denim-dynasty
shop_name: denim-dynasty
origin: IN
zone: null
country: India
joined: 2022-08-04
status: ACTIVE
supply_am: Sofia Reyes   # kam_email present on demand_hub_quote since 2025-11
seller_archetype: B   # denim specialist — bundle + handpick container seller, no FleekSort
strategic_position: category_leader_at_risk   # top-3 denim source on platform, but current QC spike is burning buyer trust
as_of: 2026-06-19

# Commercial snapshot
lifetime_gmv_usd: 325400        # header_truth 2026-06-19 cross-check ✓
lifetime_orders: 540            # BQ=540, gap=0 → no re-baseline
lifetime_buyers: 260            # header_truth 2026-06-19
aov_usd: 602.59                 # 325,400 / 540
days_since_last_order: 4        # last order 2026-06-15
recent_90d_gmv_usd: 9800        # header_truth 2026-06-19 — down from $21.4k in the prior 90d window
recent_90d_orders: 15
recent_12mo_gmv_usd: 71200      # bundle 44,600 + handpick 26,600 — still a real business, but H1-2026 is the weak half
recent_brand_skew: "Levi's/Wrangler jeans + Evisu/True Religion Y2K denim (90d)"
upload_cadence_30d: "high (34 products in Jun; ~40/mo Jan-May 2026)"

gmv_split_by_kind: "bundle 61% / handpick 39% / fleeksort 0%"
catalog_make_split: "vintage-secondhand 91% / rework-upcycled 9% / vintage-inspired 0%"
visual_signature: "Denim wall-to-wall — Levi's/Wrangler/Diesel/G-Star jeans, Evisu/True Religion Y2K statement pieces, denim jackets; A/B grade, £5-24/pc; consistent hanger-shot photography, best-in-class for an IN seller."

# Quality
raw_cancel_rate_pct: 4.6            # header_truth 2026-06-19 (was 3.9 — drifting up with the QC spike)
delivered_orders_lifetime: 588
median_dispatch_days: 4
avg_delivery_days: 14.9
qc_hold_rate_pct: 9.8            # LIFETIME ever-incidence (62 holds / ~630 lines) — history, and it masks the current picture
qc_hold_count: 62
qc_hold_recent_pct: 31.5            # last 180d — 28 holds / 89 lines — CURRENT-RISK, denominator is solid
qc_hold_recent_count: 28
qc_hold_recent_lines: 89
qc_hold_signal: current-risk        # current-risk | improved | low-recent-volume | clean — THE story on this vendor
ai_approval_rate: null          # no FleekSort
counterfeit_pct_branded: 1.2    # handpick QC pieces: 4 flagged of 341 branded checked — Evisu/True Religion, all Dec 2025-Feb 2026
unverifiable_pct: 2.9
final_vendor_rating: null
quality_score: null

# Chat
vendor_channels_12m: 142
ghosting_rate: 9
chat_state: RESPONSIVE_DEFENSIVE   # 1,340 vendor msgs / 142 channels, last msg 2026-06-18; fast replies but disputes grading findings

# WhatsApp
whatsapp_state: WHATSAPP_NONE   # not searched this pass; treat as unknown
whatsapp_chats: none found

# Demand hub
demands_matched: 1685           # 1,010 OPTIMATCH + 520 VENDOR + 155 HISTORICAL
real_vendor_quotes: 520
quote_approval_rate: "14 KAM_APPROVED (2.7%)"
quote_price_coverage_pct: 88
demand_hub_state: ACTIVE_CONVERTING   # best quote discipline of any IN denim seller; approvals slowed since the QC spike

risk_flags: [qc_hold_spike_current_risk, delaney_anchor_stalled_120d, cancel_rate_drifting_up, counterfeit_signal_y2k_lines]

# Patch metadata
patched_at: 2026-06-19
  generator_skill_blob: "7c31f0a2e8b4"
orders_through: 2026-06-19
chat_through: 2026-06-19
quotes_through: 2026-06-19
---

# denim-dynasty — supplier profile

## Headline
**denim-dynasty** is an India-based (`IN`) **denim specialist** (Archetype B) that joined Fleek in Aug 2022 and has built **$325.4k lifetime GMV across 540 orders to 260 buyers** (AOV $603) — a top-3 denim source on the platform, with the best product photography and quote discipline of any IN denim seller. **And right now they are on fire in the bad way: the 180-day QC-hold rate is 31.5% on 89 lines (vs 9.8% lifetime)** — a genuine current-risk spike, not a small-denominator artifact — driven by grade inflation (B stock shipped against A listings) and four counterfeit flags on Evisu/True Religion Y2K pieces. The commercial damage is already visible: 90-day GMV has halved ($21.4k → $9.8k), the cancel rate is drifting up (3.9 → 4.6%), and **Marcus Delaney (Delaney Denim Exchange), their most important US buyer, has not ordered in 120 days** after two consecutive held-and-regraded containers. ⭐ **The single biggest lever is a supervised QC-reset container for Delaney — pre-shipment photo audit, Sofia Reyes co-signing the grade sheet — because if the spike is fixed and proven on one order, both the anchor and the run-rate come back; if it isn't, this vendor decays from category leader to cautionary tale within two quarters.**

## §1 · What they sell
**GMV index (lifetime, ex-cancellations):** BUNDLE **$198,494 (61%)** · HANDPICK **$126,906 (39%)** · FleekSort **0%**. The handpick share is unusually high for an IN seller — buyers pay up for their curated Y2K and premium denim picks, which is exactly why the grading spike hurts so much.

**Catalog (lifetime, bundle + listed) — top groups by product count:**
| Category | Brand | Gender | Grade | Products | Avg £/pc | Avg bundle £ | Bundles sold |
|---|---|---|---|--:|--:|--:|--:|
| bottom | Levi's | menswear | A/B | 210 | 7.80 | 187 | 88 |
| bottom | Wrangler | menswear | A/B | 96 | 5.90 | 148 | 41 |
| bottom | Evisu / True Religion | menswear | A | 74 | 23.50 | 470 | 29 |
| bottom | Diesel / G-Star | menswear | A/B | 68 | 8.40 | 176 | 30 |
| outerwear | mixed denim jackets | unisex | A/B | 52 | 12.10 | 254 | 18 |
| bottom | unbranded / mixed | menswear | B | 49 | 5.20 | 130 | 26 |
| bottom | rework (patch/flare) | womenswear | A | 31 | 10.60 | 222 | 11 |

**Price band:** £5-24/pc (median ~£8/pc), with the Evisu/True Religion Y2K line as the premium tier at £20-24/pc. **Make split:** 91% true vintage, 9% rework (a real womenswear patch/flare line, growing). **Upload cadence: high and steady** — ~40 products/month all of H1-2026, 34 in June. Supply capacity is not the problem; trust is.

**Seller archetype: B** — denim specialist, wholesale bundles plus a substantial handpick container channel.

## §2 · Sales & buyers
**Lifetime:** $325.4k / 540 orders / 260 buyers, first order 2022-08-19, last order 2026-06-15 (4 days ago). Destinations: **US-heavy for a IN seller** (the Y2K line travels), plus UK/DE/FR.

**Top buyers (lifetime):**
| entity_id | Buyer | Country | Orders | GMV USD | first→last |
|---|---|---|--:|--:|---|
| 9900000000103 | Marcus Delaney · Delaney Denim Exchange | US | 14 | $21,300 | 2023-04→**2026-02-20** |
| 9900000000101 | Oliver Ashworth · Ashworth Archive | UK | 8 | $9,150 | 2023-10→2026-05 |
| 9900000000120 | Ben Sattler · Sattler Secondhand | DE | 9 | $6,870 | 2023-07→2026-04 |
| 9900000000117 | Mia Kowalski · Kowalski Kilo Store | US | 11 | $5,240 | 2024-01→2026-03 |

**Marcus Delaney is the read.** 6.5% of lifetime GMV, a decelerating US denim retailer whose own momentum was built on denim-dynasty containers — and whose last two orders (Dec 2025, Feb 2026) both hit QC holds and shipped late after regrading. He hasn't ordered since 2026-02-20 (**120 days**), and his own buyer profile now lists denim-dynasty QC friction as the primary churn driver. This vendor's spike didn't just cost them a buyer; it stalled a buyer Fleek cares about. Ben Sattler (cancellation-prone price negotiator) has also cancelled one order over a regrade-triggered price dispute — the QC spike compounds his existing friction. Ashworth and Kowalski remain healthy but are watching: Ashworth's May order cleared QC clean.

## §3 · Quality & reliability — the story
**Lifetime numbers look fine; the 180-day window does not.**
- **QC hold 31.5% recent (28 of 89 lines) vs 9.8% lifetime** — `current-risk`, solid denominator. Hold reasons cluster on **grade mismatch (A-listed, B-received: 19 of 28)** and **authenticity review (Evisu/True Religion: 5 of 28)**.
- **Counterfeit signal:** 4 of 341 branded handpick pieces flagged (1.2%), all Y2K statement denim, all Dec 2025-Feb 2026 — coincides exactly with the spike window. Vendor claims a new sourcing partner in that period; plausible, unverified.
- **Cancel rate 4.6% and drifting up** (was 3.9) — the increment is regrade-triggered buyer cancellations, not ops failure.
- **Dispatch and delivery remain good:** 4-day median dispatch, 14.9-day delivery, 588 delivered lifetime. This is not an ops collapse; it is a **stock-quality/grading integrity problem** with a specific start date (~Dec 2025).
- The trajectory question — one bad sourcing batch vs a permanent standards slip — is unresolved. June holds (3 of 14 lines) are better than the Q1 peak but not clean.

## §4 · Pricing behavior
Mid-market denim pricing with a premium Y2K tier: Levi's £7.80/pc, Wrangler £5.90/pc, Evisu/TR £23.50/pc. Historically they priced *at* market and won on photography and curation. **Post-spike they have started discounting** — June chat shows 10-15% "make-good" offers on held orders — which protects relationships short-term but trains buyers to expect compensation. Price 88% of demand-hub quotes, best coverage in the IN denim cohort.

## §5 · Chat behavior & responsiveness
**Fast, engaged, and defensive.** 1,340 vendor messages / 142 channels, last message 2026-06-18, ghosting rate 9% — they show up. But the tone in QC-related threads has turned adversarial: they dispute hold findings, ask for piece-by-piece photo evidence, and in two Delaney threads (Mar 2026) implied Fleek's regraders were wrong before eventually conceding. **State: `RESPONSIVE_DEFENSIVE`.** Responsiveness is an asset; the defensiveness is delaying resolution on exactly the orders that decide their trajectory.

## §6 · Demand hub performance
Matched to **1,685 demand quotes**: OPTIMATCH 1,010 · **VENDOR 520** · HISTORICAL 155. **14 KAM_APPROVED lifetime (2.7%)** — genuinely the best conversion of the IN denim cohort, with 88% price coverage. But 11 of the 14 approvals predate Dec 2025; only 3 since, and Sofia Reyes has (correctly) slowed routing curated denim demands their way pending the QC reset. **State: `ACTIVE_CONVERTING`** — the machinery works; it is throttled on purpose.

## Open opportunities & risks
**Opportunities**
1. ⭐ **Supervised QC-reset container for Delaney** — pre-shipment photo audit against the grade sheet, Sofia Reyes co-sign, ship one clean container. This is simultaneously the Delaney winback play and the vendor rehabilitation proof-point.
2. **Quarantine the Y2K sourcing line** — the counterfeit and grade-mismatch flags concentrate in the Evisu/TR line from the new Dec-2025 sourcing partner. Splitting that line out (or pausing it) protects the healthy Levi's/Wrangler core.
3. **Re-open demand routing on proof** — 520 real quotes and a 2.7% approval history are waiting; the moment two consecutive containers clear QC clean, this is the platform's best denim demand-hub asset again.

**Risks**
1. **QC-hold spike is current and material** — 31.5% on 89 lines; every held order burns a buyer relationship and adds regrade cost.
2. **Delaney anchor stalled 120d** — 6.5% of lifetime GMV and a strategically-watched US buyer; past ~180d this converts from "stalled" to "churned."
3. **Counterfeit exposure on premium lines** — 1.2% branded flag rate is low in absolute terms but sits on their highest-AOV, highest-visibility stock.
4. **Cancel rate drifting up** (3.9→4.6%) — still under flag, direction is wrong.
5. **Discount-as-apology habit forming** — make-good offers are becoming the default close in QC threads.

## §Sources
- `<bq-project>.fleek_hub.vendor_details` — identity (IN origin, ACTIVE, joined 2022-08-04)
- `<bq-project>.fleek_raw.order_line_status_details` — GMV/orders/buyers, GMV-by-kind, QC-hold windows, cancellations, top buyers (all `vendor='denim-dynasty'`)
- `<bq-project>.fleek_analytics.product_details_v2` — catalog, make-type split, upload cadence
- `<bq-project>.fleek_hub.demand_hub_quote` — quote decomposition, KAM approvals (kam_email → Sofia Reyes)
- `<bq-project>.fleek_node_rudder.send_message` — chat activity (1,340 msgs / 142 channels), QC-thread tone read
- `<bq-project>.fleek_analytics.handpick_qc_items_mat` — counterfeit/unverifiable piece flags (341 branded checked)
- `<bq-project>.header_truth` — 2026-06-19 aggregate cross-check
- Not pulled this pass: official quality score, platform funnel, Zendesk seller-experience, WhatsApp/qmd.
