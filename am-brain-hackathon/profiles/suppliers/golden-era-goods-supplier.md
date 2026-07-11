---
entity_id: golden-era-goods
shop_name: golden-era-goods
origin: TH
zone: null
country: Thailand
joined: 2024-11-12
status: ACTIVE
supply_am: Sofia Reyes   # kam_email on demand_hub_quote; assigned at 90d review 2025-03 after early traction
seller_archetype: A   # Y2K/Japan-adjacent handpick curator + growing FleekSort channel
strategic_position: rising_strategic   # fastest 90d growth in the streetwear segment; not yet anchor-locked to any buyer
as_of: 2026-06-18

# Commercial snapshot
lifetime_gmv_usd: 128400        # header_truth 2026-06-18 cross-check $128,401.20 ✓
lifetime_orders: 214            # BQ=214, baseline 211 + 3 new → no re-baseline
lifetime_buyers: 87             # header_truth 2026-06-18
aov_usd: 600.00                 # header_truth 2026-06-18
days_since_last_order: 1        # last order 2026-06-17
recent_90d_gmv_usd: 47892       # header_truth 2026-06-18 — 37% of LIFETIME GMV in the last 90 days
recent_90d_orders: 78           # header_truth 2026-06-18
recent_12mo_gmv_usd: 118300     # nearly all of lifetime; joined 19 months ago, accelerating each quarter
recent_brand_skew: "Nike/Stüssy tees + Evisu/True Religion Y2K denim + football jerseys (90d)"
upload_cadence_30d: "high and rising (~95 pieces/wk; 380 in last 30d, up from ~60/wk in Q1)"

gmv_split_by_kind: "handpick 58% / fleeksort 30% / bundle 12%"
catalog_make_split: "vintage-secondhand 97% / rework-upcycled 2% / vintage-inspired 1%"
visual_signature: "Bangkok-sourced Y2K and Japan-adjacent streetwear — Nike/Stüssy/Champion tees, Evisu and True Religion denim, Kappa/Umbro track tops, 90s football jerseys, A/B grade, £6-45/pc; saturated studio shots, strong single-rail curation."

# Quality
raw_cancel_rate_pct: 2.4            # header_truth 2026-06-18 — under the 10% flag
delivered_orders_lifetime: 224
median_dispatch_days: 3
avg_delivery_days: 11.2
qc_hold_rate_pct: 6.1            # fleet sweep 2026-06-17: canonical = COUNTIF(went_to_qc_hold) (LIFETIME ever-incidence)
qc_hold_count: 21            # on ~344 lifetime lines
qc_hold_recent_pct: 4.8            # last 180d — improving as volume scales (rare and good)
qc_hold_recent_count: 9            # holds in last 180d
qc_hold_recent_lines: 188            # order lines in last 180d (healthy denominator)
qc_hold_signal: improved            # current-risk | improved | low-recent-volume | clean
ai_approval_rate: 91.2          # FleekSort grading acceptance — strong for a 7-month-old FleekSort channel
counterfeit_pct_branded: 1.1    # 4 flagged / 361 branded QC'd — 3 Nike tees + 1 Evisu, all pre-2026; none in last 120d
unverifiable_pct: 2.6
final_vendor_rating: 4.5
quality_score: null             # official score not pulled (1 GB view); leading with raw metrics

# Chat
vendor_channels_12m: 121
ghosting_rate: 0.03
chat_state: PROACTIVE_RESPONSIVE   # 1,480 vendor msgs / 121 channels, last msg 2026-06-18, median reply <3h despite ICT+7

# WhatsApp
whatsapp_state: WHATSAPP_NONE   # not searched this pass; no confirmed footprint
whatsapp_chats: none found

# Demand hub
demands_matched: 483            # 214 OPTIMATCH + 196 VENDOR + 73 HISTORICAL
real_vendor_quotes: 196
quote_approval_rate: "18.4% KAM_APPROVED (36 of 196) — best in the streetwear segment"
quote_price_coverage_pct: 94
demand_hub_state: ACTIVE_CONVERTING   # quotes fast (median 9h demand→quote), prices attached, converts

risk_flags: [capacity_ceiling_at_current_growth, counterfeit_watch_streetwear_brands, freight_lane_single_forwarder]

# Patch metadata
patched_at: 2026-06-18
orders_through: 2026-06-18
chat_through: 2026-06-18
quotes_through: 2026-06-18
---

# golden-era-goods — supplier profile

## Headline
**golden-era-goods** is a Thailand-based (`TH`) **Y2K/Japan-adjacent streetwear curator** (Archetype A) that joined Fleek in Nov 2024 and is the **fastest riser in the supply fleet**: **$128.4k lifetime GMV across 214 orders to 87 buyers** (AOV $600), of which **$47.9k — 37% of lifetime — landed in the last 90 days**. Quarterly GMV has roughly doubled each quarter since Q3 2025. The catalog is Bangkok-sourced Nike/Stüssy tees, Evisu and True Religion Y2K denim, Kappa/Umbro track tops and 90s football jerseys at £6-45/pc, and the quality signals are scaling *with* the volume, not against it — QC holds fell from 6.1% lifetime to **4.8% recent**, FleekSort AI approval is 91.2%, cancels 2.4%, replies inside 3 hours. They also post the **best demand-hub conversion in the streetwear segment (18.4% KAM_APPROVED)**. **⭐ Biggest lever: formalize them as the named streetwear source for Jasmine Okafor and Louis Duplessis** — both accelerating buyers already skewing spend here — before growth outruns their capacity. **Biggest risk:** exactly that capacity — one forwarder, one source city, and a growth curve that will test both by Q4.

## §1 · What they sell
**GMV index (lifetime, ex-cancellations):** HANDPICK **$74,470 (58.0%)** · FLEEKSORT **$38,520 (30.0%)** · BUNDLE **$15,410 (12.0%)**. A true Archetype A curator: handpick-led with a FleekSort channel opened Nov 2025 that already carries 30% of GMV.

**Catalog (lifetime, listed + FleekSort):** Y2K streetwear and Japan-adjacent vintage, mixed gender skewing menswear:
| Category | Brand | Gender | Grade | Products | Avg £/pc | Note |
|---|---|---|---|--:|--:|---|
| top | Nike | menswear | A/B | 296 | 11.80 | 90s-00s tees, swoosh-era graphics |
| top | Stüssy | unisex | A/B | 178 | 18.40 | the fastest-selling line — sells through in <2 wks |
| bottom | Evisu | menswear | A | 84 | 42.30 | painted-seagull denim, the premium anchor |
| bottom | True Religion | menswear | A/B | 91 | 28.60 | Y2K stitch denim |
| top | football jerseys | menswear | A/B | 143 | 24.10 | 90s club shirts, mixed leagues |
| top | Kappa / Umbro | menswear | A/B | 112 | 13.20 | track tops + drill tops |
| top | Champion | unisex | A/B | 87 | 9.60 | reverse-weave, volume filler |

**Price band:** £6-45/pc (median ~£15/pc); Evisu tops out the range. **Make split:** 97% true vintage; the 2% rework is a small patched-denim experiment — immaterial.

**Upload cadence:** ~95 pieces/week and **rising** (Q1 2026 averaged ~60/wk) — the cadence curve mirrors the GMV curve, which is what genuine supply growth looks like as opposed to a one-off container.

**Seller archetype: A** — handpick curator + young FleekSort channel, AOV $600, category-deep in Y2K streetwear.

## §2 · Sales & commercials
**Lifetime:** $128.4k / 214 orders / 87 buyers, first order 2024-11-28, **last order 2026-06-17 (1 day ago)**. Destinations skew **UK + FR** with growing DE/IE.

**Growth shape (quarterly GMV):** Q1'25 $6.2k → Q2'25 $11.8k → Q3'25 $17.4k → Q4'25 $24.9k → Q1'26 $31.3k → **Q2'26 QTD $36.8k**. No other active vendor shows this curve.

**Top buyers (lifetime) — two accelerating names, not yet anchor-locked:**
| buyer | shop | country | orders | GMV USD | first→last |
|---|---|---|--:|--:|---|
| 9900000000102 | Okafor & Co Vintage (Jasmine Okafor) | UK | 22 | $18,890 (£14.2k) | 2025-06→2026-06 |
| 9900000000109 | Maison Duplessis (Louis Duplessis) | FR | 14 | $16,800 | 2025-04→2026-06 |
| 9900000000106 | Beaumont's Closet (Rosie Beaumont) | IE | 3 | $2,150 (£1.6k) | 2026-04→2026-06 |
| 9900000000113 | Y2K Forever (Freya Dunmore) | UK | 2 | $1,940 (£1.5k) | 2025-09→2025-11 |

Okafor (14.7%) and Duplessis (13.1%) are both *increasing* share here — Okafor's own profile names golden-era-goods as her rising vendor, and Duplessis sources his football-jersey demand between here and tokyo-drip-vintage. **Concentration origin: `rising_strategic`** — concentration is forming by buyer choice, not vendor dependence. Note two warm expansion signals: Beaumont (new ramping buyer needing vendor intros) has already found them organically, and Dunmore (Y2K, ACTIVE_SOURCING_UNCONVERTED — chatting weekly, zero orders in 90d) bought here twice in 2025; this is the obvious catalog to convert her with.

## §3 · Quality & reliability
**Scaling cleanly — the rare vendor whose quality improves under load:**
- **Raw cancel rate 2.4%**; 224 delivered lifetime.
- **Median dispatch 3 days, avg delivery 11.2 days** — strong for TH origin; they consolidate weekly air freight via a single Bangkok forwarder.
- **QC hold 6.1% lifetime (21 holds) → 4.8% recent 180d (9 / 188 lines)** — improving on a healthy denominator. **Signal: `improved`.**
- **FleekSort AI approval 91.2%** after only 7 months of FleekSort — grading discipline learned fast.
- **Counterfeit 1.1% of branded pieces** — 3 Nike tees + 1 Evisu flagged pre-2026, none in the last 120 days. For a Nike/Stüssy/Evisu catalog this is the number to keep watching; current trend is the right direction but the brand mix keeps the exposure structurally live.

**Derived state:** `RELIABLE_IMPROVING`.

## §5 · Chat behavior & responsiveness
**Exceptional.** `send_message`: **1,480 vendor messages across 121 channels (12mo)**, last message 2026-06-18, **median reply under 3 hours despite ICT+7**, ghosting ~3%. They run chat like a storefront: weekly drop previews to their top ~15 threads, sizing runs on request, video walk-throughs of jersey lots. Okafor's 20+ live threads include a standing weekly drop-preview thread here. **State: `PROACTIVE_RESPONSIVE`.**

**Chat delta (2026-06-16/18):** Duplessis negotiating a 40-jersey 90s club lot (vendor at £22/pc, buyer countering £19 — expect close near £20.50); Okafor confirmed a £2.1k Stüssy/Nike handpick for dispatch 2026-06-22; vendor asked Sofia Reyes about raising their weekly FleekSort quota — capacity signal, in the right direction.

## §6 · Demand hub performance
Matched to **483 demand quotes**: OPTIMATCH 214 · **VENDOR 196 (real engagement)** · HISTORICAL 73. **36 KAM_APPROVED (18.4%) — the best conversion in the streetwear segment**, 94% price coverage, median demand→quote time ~9 hours. They treat the hub as a sales channel, not an inbox. **State: `ACTIVE_CONVERTING`.** **Action:** they have earned first-look routing on Y2K/streetwear/jersey demands — including Elena Baranova's CHRONIC_UNMET 90s graphic-tee demand, which overlaps their Nike/Champion tee depth and has 6+ unclosed asks on record.

## Open opportunities & risks
**Opportunities**
1. **⭐ Anchor-lock Okafor + Duplessis now** — both are accelerating and both skew here already; standing monthly handpick slots would convert organic preference into structural share before a competitor vendor emerges.
2. **Convert Freya Dunmore** — ACTIVE_SOURCING_UNCONVERTED Y2K buyer with purchase history here; a curated Y2K womenswear handpick offer is the highest-probability unlock on her profile.
3. **Route Baranova's chronic tee demand** — 90s band/graphic tees overlap their tee depth; 6+ repeated unmet asks make any credible quote high-value.
4. **Raise the FleekSort quota** — vendor-requested, 91.2% AI approval supports it; graded discoverable stock is how their growth compounds beyond their chat threads.

**Risks**
1. **Capacity ceiling** — GMV doubling quarterly against one source city and a hand-curation model; Q4 2026 is where the curve meets the constraint.
2. **Counterfeit exposure (structural)** — Nike/Stüssy/Evisu is the highest-fake-risk brand mix on the platform; 1.1% and falling today, but one bad lot at their new volume is a big absolute number.
3. **Single-forwarder freight lane** — all consolidation through one Bangkok forwarder; a lane disruption stalls the whole book, and their two key buyers are cadence-sensitive.

## §Sources
- `<bq-project>.fleek_hub.vendor_details` — identity (TH origin, ACTIVE, joined 2024-11-12, supply AM Sofia Reyes)
- `<bq-project>.fleek_raw.order_line_status_details` — GMV/orders/buyers, GMV-by-kind, quarterly growth shape, reliability core, top buyers (all `vendor='golden-era-goods'`)
- `<bq-project>.fleek_analytics.product_details_v2` — catalog, make-type split, upload cadence trend
- `<bq-project>.fleek_hub.demand_hub_quote` — quote-source decomposition, KAM approval rate, price coverage
- `<bq-project>.fleek_node_rudder.send_message` — chat activity (1,480 msgs / 121 channels, reply-time distribution)
- `<bq-project>.header_truth` — 2026-06-18 aggregate cross-check
- Not pulled this pass: official quality score (1 GB view), platform funnel, Zendesk seller-experience, WhatsApp/qmd.
