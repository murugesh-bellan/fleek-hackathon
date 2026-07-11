---
entity_id: northside-pickers
shop_name: northside-pickers
origin: CA
zone: null
country: Canada
joined: 2022-09-05
status: ACTIVE
supply_am: Nina Kovac   # kam_email present on demand_hub_quote; supply_account_manager_id set on vendor_details
seller_archetype: A   # FleekSort + handpick workwear specialist, small bundle side-channel
strategic_position: key_account_anchor   # two named anchor buyers (Ashworth, Morgenstern) = ~21% of GMV; hard to substitute on Carhartt/Dickies depth
as_of: 2026-06-19

# Commercial snapshot
lifetime_gmv_usd: 487272        # header_truth 2026-06-19 cross-check $487,271.50 ✓
lifetime_orders: 611            # BQ=611, profile baseline 609 + 2 new → no re-baseline
lifetime_buyers: 148            # header_truth 2026-06-19
aov_usd: 797.50                 # header_truth 2026-06-19
days_since_last_order: 2        # last order 2026-06-17
recent_90d_gmv_usd: 41280       # header_truth 2026-06-19
recent_90d_orders: 52           # header_truth 2026-06-19
recent_12mo_gmv_usd: 168400     # fleeksort 64k + handpick 74k + bundle 30k — run-rate stable vs lifetime pace
recent_brand_skew: "Carhartt jackets + Dickies work pants + Wrangler denim (90d)"
upload_cadence_30d: "steady (~110 FleekSort pieces/wk; 430 in last 30d)"

gmv_split_by_kind: "handpick 44% / fleeksort 38% / bundle 18%"
catalog_make_split: "vintage-secondhand 99% / rework-upcycled 1% / vintage-inspired 0%"
visual_signature: "Graded North-American workwear — Carhartt detroit/chore jackets and double-knees, Dickies 874s, Wrangler/Levi's denim, Harley-Davidson tees, A/B grade, £9-38/pc; clean flat-lay photography, consistent papertag grading."

# Quality
raw_cancel_rate_pct: 1.9            # header_truth 2026-06-19 — well under the 10% flag
delivered_orders_lifetime: 638
median_dispatch_days: 2
avg_delivery_days: 9.4
qc_hold_rate_pct: 4.2            # fleet sweep 2026-06-18: canonical = COUNTIF(went_to_qc_hold) (LIFETIME ever-incidence)
qc_hold_count: 58            # on ~1,380 lifetime lines
qc_hold_recent_pct: 3.1            # last 180d — trending BETTER than lifetime
qc_hold_recent_count: 8            # holds in last 180d
qc_hold_recent_lines: 260            # order lines in last 180d (healthy denominator)
qc_hold_signal: clean            # current-risk | improved | low-recent-volume | clean
ai_approval_rate: 93.5          # FleekSort grading acceptance — top-decile
counterfeit_pct_branded: 0.4    # 3 flagged pieces / 812 branded QC'd — Harley tees, resolved
unverifiable_pct: 1.2
final_vendor_rating: 4.7
quality_score: null             # official score not pulled (1 GB view); leading with raw metrics
# Chat
vendor_channels_12m: 84
ghosting_rate: 0.05
chat_state: PROACTIVE_RESPONSIVE   # 412 vendor msgs / 84 channels, last msg 2026-06-18, median reply <6h

# WhatsApp
whatsapp_state: WHATSAPP_NONE   # not searched this pass; no confirmed footprint
whatsapp_chats: none found

# Demand hub
demands_matched: 940            # 610 OPTIMATCH + 246 VENDOR + 84 HISTORICAL
real_vendor_quotes: 246
quote_approval_rate: "12.2% KAM_APPROVED (30 of 246)"
quote_price_coverage_pct: 88
demand_hub_state: ACTIVE_CONVERTING   # quotes selectively, prices attached, converts through the formal flow

risk_flags: [anchor_buyer_concentration, q3_seasonal_supply_dip, single_am_dependency]

# Patch metadata
patched_at: 2026-06-19
orders_through: 2026-06-19
chat_through: 2026-06-19
quotes_through: 2026-06-19
---

# northside-pickers — supplier profile

## Headline
**northside-pickers** is a Canada-based (`CA`) **workwear specialist** (Archetype A) that joined Fleek in Sep 2022 and has done **$487.3k lifetime GMV across 611 orders to 148 buyers** (AOV $798). The catalog is disciplined and deep: **Carhartt detroit/chore jackets and double-knees, Dickies 874s, Wrangler and Levi's denim**, A/B grade, £9-38/pc, with clean papertag grading and a **93.5% FleekSort AI approval rate**. Operationally they are the best profile in the fleet segment — **1.9% cancel rate, 2-day median dispatch, 9.4-day average delivery**, QC holds *falling* (4.2% lifetime → 3.1% recent 180d). Run-rate is stable at ~$168k/12mo with no deceleration. **⭐ Biggest lever: they are the supply side of two named key accounts** — Oliver Ashworth (Ashworth Archive, UK whale) and Katie Morgenstern (Rust Belt Retro, US) together take ~21% of their GMV — so protecting northside-pickers' capacity and Q3 stock depth is directly protecting two of the healthiest buyer relationships on the book. **Biggest risk:** the same concentration cuts both ways, and their supply intake dips every Jul-Aug when Ontario estate/rag volumes thin out.

## §1 · What they sell
**GMV index (lifetime, ex-cancellations):** HANDPICK **$214,400 (44.0%)** · FLEEKSORT **$185,200 (38.0%)** · BUNDLE **$87,700 (18.0%)**. This is a curator-grade Archetype A seller: individually graded FleekSort pieces plus buyer-directed handpick containers, with bundles as a clearance channel only.

**Catalog (lifetime, listed + FleekSort):** workwear-dominant, almost entirely menswear. Top listed groups by product count:
| Category | Brand | Gender | Grade | Products | Avg £/pc | Note |
|---|---|---|---|--:|--:|---|
| outerwear | Carhartt | menswear | A/B | 342 | 34.10 | detroit/chore/active jackets — the signature line |
| bottom | Carhartt | menswear | A/B | 288 | 21.40 | double-knee + carpenter pants |
| bottom | Dickies | menswear | A/B | 231 | 13.80 | 874s + duck pants |
| bottom | Wrangler | menswear | A/B | 144 | 11.20 | cowboy-cut denim |
| bottom | Levi's | menswear | A/B | 121 | 12.60 | 501/505, mid-wash |
| top | Harley-Davidson | menswear | A/B | 96 | 16.90 | dealer tees + long sleeves |
| top | Champion | menswear | A/B | 74 | 9.40 | reverse-weave sweats |

**Price band:** ~£9-38/pc (median ~£15/pc). **Vintage vs rework:** 99% true vintage secondhand — do not describe anything here as rework.

**Upload cadence:** the steadiest in the workwear segment — ~110 FleekSort pieces/week, 430 in the last 30 days, no gap longer than 9 days since Jan 2026. The one seasonal pattern that matters: intake thins **every Jul-Aug** (2023, 2024 and 2025 all show a ~35% upload dip) as Ontario rag-house volumes drop.

**Seller archetype: A** — FleekSort + handpick specialist, AOV $798, single-category depth rather than breadth.

## §2 · Sales & commercials
**Lifetime:** $487.3k / 611 orders / 148 buyers, first order 2022-09-14, **last order 2026-06-17 (2 days ago)**. Destinations skew **UK + US** with some DE/NL.

**Top buyers (lifetime) — a genuine anchor structure, NOT a commodity base:**
| buyer | shop | country | orders | GMV USD | first→last |
|---|---|---|--:|--:|---|
| 9900000000101 | Ashworth Archive (Oliver Ashworth) | UK | 41 | $50,540 (£38.0k) | 2023-02→2026-06 |
| 9900000000111 | Rust Belt Retro (Katie Morgenstern) | US | 38 | $52,100 | 2023-08→2026-06 |
| 9900000000107 | Basra Bulk Goods (Dev Basra) | CA | 6 | $11,900 | 2024-01→2026-05 |
| 9900000000116 | Southern Cross Vintage (Callum Rhodes) | AU | 9 | $14,300 | 2023-11→2026-03 |

Ashworth (10.4%) + Morgenstern (10.7%) = **~21% of lifetime GMV**, both ordered within the last 30 days, both on monthly-or-better cadence. **Concentration origin: `key_account_anchor`** — this vendor is the named Carhartt/RL outerwear source in Ashworth's own profile and the Dickies/Carhartt anchor in Morgenstern's. The play is **capacity protection**, not demand routing: keep their Q3 pipeline stocked and pre-book handpick slots for the two anchors before the Jul-Aug supply dip.

## §3 · Quality & reliability
**Best-in-segment operational profile.** From the order-line core (~1,380 lines):
- **Raw cancel rate 1.9%** — a third of the segment median.
- **638 delivered lifetime; median dispatch 2 days, avg delivery 9.4 days** — CA origin gives them a structural freight edge into the US and a competitive one into the UK.
- **QC hold rate 4.2% lifetime (58 holds) → 3.1% recent 180d (8 holds / 260 lines)** — a real improvement on a healthy denominator. **Signal: `clean`.**
- **FleekSort AI approval 93.5%** — grading discipline is real; their A/B papertags survive QC.
- **Counterfeit 0.4% of branded pieces** (3 Harley-Davidson tees flagged Oct 2025, replaced without dispute) — resolved, not systemic.

**Derived state:** `RELIABLE_IMPROVING` — no reliability risk flags; this is the vendor you introduce to a nervous buyer.

## §5 · Chat behavior & responsiveness
**Proactive and fast.** `send_message`: **412 vendor messages across 84 channels (12mo)**, last message 2026-06-18, median reply under 6 hours, ghosting rate ~5%. They send pre-dispatch photo sets unprompted — Ashworth's and Morgenstern's threads both show vendor-initiated grading photos before every container. **State: `PROACTIVE_RESPONSIVE`.**

**Chat delta (2026-06-16/18):** confirmed 60-pc Carhartt jacket handpick for Ashworth Archive (£1,450, dispatching w/c 2026-06-23); quoted Morgenstern 200×Dickies 874 @ £12.50/pc; flagged to Nina Kovac that July intake "will be lighter than usual" — the seasonal dip, called early by the vendor themselves.

## §6 · Demand hub performance
Matched to **940 demand quotes**: OPTIMATCH 610 · **VENDOR 246 (real engagement)** · HISTORICAL 84. Unlike the segment norm, they convert: **30 KAM_APPROVED (12.2%)**, 88% of quotes carry prices. They quote selectively — almost exclusively workwear/denim demands — and ignore off-category matches rather than spraying. **State: `ACTIVE_CONVERTING`.** **Action:** route every Carhartt/Dickies/workwear demand here first; their approval rate earns the priority.

## Open opportunities & risks
**Opportunities**
1. **⭐ Pre-book Q3 anchor supply** — get Ashworth's and Morgenstern's Jul-Sep handpick slots committed before the seasonal intake dip; this single move protects ~$100k of annual buyer GMV.
2. **Second-anchor expansion** — Basra (reactivated CA whale, same country, fragile) and Rhodes (AU counter-seasonal — his winter IS their supply dip's demand offset) are natural next accounts; both have history here already.
3. **FleekSort depth** — 93.5% AI approval supports raising their weekly FleekSort quota; discoverable graded stock is their best net-new-buyer channel.

**Risks**
1. **Anchor concentration** — two buyers ≈ 21% of GMV; an Ashworth or Morgenstern wobble transmits straight to this vendor's run-rate.
2. **Q3 seasonal supply dip** — three consecutive years of ~35% Jul-Aug upload decline; known and self-reported, but unmanaged it starves the anchors.
3. **Single-AM dependency** — Nina Kovac holds the relationship; no documented backup context.

## §Sources
- `<bq-project>.fleek_hub.vendor_details` — identity (CA origin, ACTIVE, joined 2022-09-05, supply AM Nina Kovac)
- `<bq-project>.fleek_raw.order_line_status_details` — GMV/orders/buyers, GMV-by-kind, reliability core, top buyers (all `vendor='northside-pickers'`)
- `<bq-project>.fleek_analytics.product_details_v2` — catalog, make-type split, upload cadence, seasonal intake pattern
- `<bq-project>.fleek_hub.demand_hub_quote` — quote-source decomposition, KAM approval rate
- `<bq-project>.fleek_node_rudder.send_message` — chat activity (412 msgs / 84 channels)
- `<bq-project>.header_truth` — 2026-06-19 aggregate cross-check
- Not pulled this pass: official quality score (1 GB view), platform funnel, Zendesk seller-experience, WhatsApp/qmd.
