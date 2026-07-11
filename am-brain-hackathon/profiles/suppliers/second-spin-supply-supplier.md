---
entity_id: second-spin-supply
shop_name: second-spin-supply
origin: UK
zone: null
country: United Kingdom
joined: 2026-01-15
status: ACTIVE
supply_am: Nina Kovac   # assigned at onboarding — domestic supply program
seller_archetype: A   # domestic rag-sorter — handpick + small graded bundles, FleekSort pilot live
strategic_position: emerging_strategic   # UK-domestic freight advantage; small catalog is the only ceiling
as_of: 2026-06-17

# Commercial snapshot
lifetime_gmv_usd: 28900         # header_truth 2026-06-17 cross-check ✓ (GBP-native seller; USD x1.33 per pipeline)
lifetime_orders: 74             # BQ=74, gap=0 → no re-baseline
lifetime_buyers: 41
aov_usd: 390.54                 # 28,900 / 74
days_since_last_order: 1        # last order 2026-06-16
recent_90d_gmv_usd: 16400       # header_truth 2026-06-17 — 57% of lifetime GMV in the last 90 days: steep ramp
recent_90d_orders: 39
recent_12mo_gmv_usd: 28900      # = lifetime; joined Jan 2026
recent_brand_skew: "Nike/Adidas sportswear + Carhartt workwear + Y2K womenswear (90d)"
upload_cadence_30d: "high for size (110 pieces + 9 bundles in Jun; growing month-on-month since Feb)"

gmv_split_by_kind: "handpick 52% / bundle 33% / fleeksort 15%"
catalog_make_split: "vintage-secondhand 99% / rework-upcycled 1% / vintage-inspired 0%"
visual_signature: "Clean UK rag-sorter output — Nike/Adidas track tops, Carhartt/Dickies workwear, Y2K womenswear picks; A/B grade, £4-16/pc; daylight warehouse photography, papertag visible in every shot."

# Quality
raw_cancel_rate_pct: 1.3            # header_truth 2026-06-17 — 1 line of 78; best-in-cohort
delivered_orders_lifetime: 69
median_dispatch_days: 1
avg_delivery_days: 2.9              # UK-domestic courier — structural advantage, no freight leg
qc_hold_rate_pct: 2.6            # LIFETIME ever-incidence (2 holds / 78 lines) — entire history is <180d old
qc_hold_count: 2
qc_hold_recent_pct: 2.6             # identical to lifetime by construction (all lines within 180d)
qc_hold_recent_count: 2
qc_hold_recent_lines: 78
qc_hold_signal: clean               # current-risk | improved | low-recent-volume | clean
ai_approval_rate: 92.4          # FleekSort pilot — 244 of 264 pieces AI-approved since Apr 2026
counterfeit_pct_branded: 0.0    # 0 flags of 118 branded pieces checked — small sample, but confirmed-zero not data-absent
unverifiable_pct: 1.7
final_vendor_rating: null
quality_score: null

# Chat
vendor_channels_12m: 44
ghosting_rate: 0
chat_state: PROACTIVE_RESPONSIVE   # 310 vendor msgs / 44 channels, last msg 2026-06-17; median reply <3h in UK hours

# WhatsApp
whatsapp_state: WHATSAPP_NONE   # not searched this pass; treat as unknown
whatsapp_chats: none found

# Demand hub
demands_matched: 96             # 61 OPTIMATCH + 35 VENDOR + 0 HISTORICAL (too new for replays)
real_vendor_quotes: 35
quote_approval_rate: "6 KAM_APPROVED (17.1%)"
quote_price_coverage_pct: 94
demand_hub_state: ACTIVE_HIGH_CONVERSION   # small base, exceptional hit rate — Nina Kovac curates their matches

risk_flags: [small_catalog_capacity_ceiling, short_history_low_confidence, single_am_dependency]

# Patch metadata
patched_at: 2026-06-17
  generator_skill_blob: "7c31f0a2e8b4"
orders_through: 2026-06-17
chat_through: 2026-06-17
quotes_through: 2026-06-17
---

# second-spin-supply — supplier profile

## Headline
**second-spin-supply** is a UK-based (`UK`) **domestic rag-sorter** (Archetype A) that joined Fleek in Jan 2026 and has already done **$28.9k lifetime GMV across 74 orders to 41 buyers** — with **$16.4k of it (57%) in the last 90 days**, the steepest clean ramp in the current onboarding cohort. The structural pitch is unanswerable: **1-day median dispatch, 2.9-day average delivery** (domestic courier, no freight leg, no customs), a **1.3% cancel rate**, a **2.6% QC-hold rate**, and a FleekSort pilot running at **92.4% AI approval**. Every operational number is best-in-cohort. The only real constraint is **size** — a small catalog (~110 pieces + 9 bundles live) that sells through fast, capping how much demand can be routed at them before they stock out. ⭐ **The single biggest lever is capacity, not demand: Nina Kovac securing a larger weekly sort allocation from their rag supplier would let Fleek route UK/IE buyers at 2-3x current volume into a vendor that has so far converted everything thrown at it.**

## §1 · What they sell
**GMV index (lifetime, ex-cancellations):** HANDPICK **$15,028 (52%)** · BUNDLE **$9,537 (33%)** · FLEEKSORT **$4,335 (15%)**. A genuine Archetype A mix — individually-picked pieces first, graded bundles second, and a growing FleekSort channel since the April pilot.

**Catalog (lifetime, listed) — top groups by product count:**
| Category | Brand | Gender | Grade | Products | Avg £/pc | Avg bundle £ | Bundles sold |
|---|---|---|---|--:|--:|--:|--:|
| sportswear | Nike / Adidas | unisex | A/B | 88 | 9.40 | 168 | 14 |
| workwear | Carhartt / Dickies | menswear | A/B | 54 | 14.80 | 236 | 9 |
| top | Y2K womenswear | womenswear | A | 47 | 7.20 | 131 | 8 |
| sweat | Champion / Umbro | unisex | B | 33 | 5.60 | 104 | 6 |
| bottom | mixed denim | unisex | B | 26 | 4.30 | 92 | 5 |

**Price band:** £4-16/pc (median ~£8/pc). **Make split:** 99% true vintage secondhand — this is sorted UK rag, not import stock. **Upload cadence: growing every month since Feb** (Jun: 110 pieces + 9 bundles), but absolute volume is small: the whole live catalog would fit in one of mumbai-mills-vintage's weekly uploads. Sell-through is fast enough that the shelf is often half-empty by Friday.

**Seller archetype: A** — handpick-led domestic sorter with FleekSort adoption; the model Fleek's UK-domestic supply program was designed to find.

## §2 · Sales & buyers
**Lifetime:** $28.9k / 74 orders / 41 buyers, first order 2026-01-28, last order 2026-06-16 (yesterday). Destinations: **UK + IE almost exclusively** — the delivery-speed advantage only fully lands domestically, and Nina Kovac has routed accordingly.

**Top buyers (lifetime):**
| entity_id | Buyer | Country | Orders | GMV USD | first→last |
|---|---|---|--:|--:|---|
| 9900000000106 | Rosie Beaumont · Beaumont's Closet | IE | 4 | $2,610 | 2026-04→2026-06 |
| 9900000000102 | Jasmine Okafor · Okafor & Co Vintage | UK | 5 | $2,340 | 2026-03→2026-06 |
| 9900000000113 | Freya Dunmore · Y2K Forever | UK | 2 | $1,180 | 2026-05→2026-06 |
| 9900000000101 | Oliver Ashworth · Ashworth Archive | UK | 1 | $940 | 2026-05→2026-05 |

The buyer fit is the encouraging part. **Rosie Beaumont** — a new IE buyer ramping fast who explicitly needs vendor introductions — has made second-spin her first repeat vendor: all 4 of her orders here arrived in under 4 days, which for a small new shop is the difference between restocking weekly and restocking monthly. **Jasmine Okafor** works them hard in chat for Nike/Stüssy-adjacent sportswear drops and gets first-look photos. **Freya Dunmore** (Y2K Forever — chatting weekly platform-wide, 0 orders in 90 days elsewhere) has actually *converted twice here*, which says the Y2K womenswear line is landing where the rest of the platform's supply hasn't. Ashworth's single Carhartt trial order cleared clean; he is a whale-scale expansion candidate if capacity grows.

## §3 · Quality & reliability
**Clean sheet — with a short-history caveat.**
- **Cancel rate 1.3%** (1 buyer-requested line of 78). **69 delivered.**
- **Median dispatch 1 day; avg delivery 2.9 days** — structural, not heroic: domestic courier, no freight, no customs broker.
- **QC hold 2.6%** (2 holds, both minor grade queries, both released). Recent = lifetime by construction since the whole history is under 180 days — read the `clean` signal with that in mind.
- **FleekSort AI approval 92.4%** (244/264 pieces since Apr) — top-quartile for the pilot; their pre-sort grading matches Fleek's model.
- **Counterfeit 0.0% of 118 branded checked** — confirmed-zero on a small sample, not data-absent.
- Honest caveat: **74 orders is a short book.** Every number here is real but low-confidence; the profile earns "strategic" designation at roughly the 200-order mark on this trajectory (~Oct 2026).

## §4 · Pricing behavior
£4-16/pc — priced *above* IN/PK equivalents per piece, but the landed-cost math wins anyway: no freight, no duty, no 3-week wait, near-zero QC risk. For UK/IE buyers the effective comparison isn't per-piece price, it's cost-per-sellable-piece-per-week, and second-spin wins that walking away. They price 94% of demand-hub quotes and haven't discounted once; they don't need to.

## §5 · Chat behavior & responsiveness
**Model citizen.** 310 vendor messages / 44 channels, ghosting rate 0%, median reply under 3 hours in UK business hours, last message 2026-06-17. They proactively post weekly stock-drop photos into their active buyer threads (Okafor gets hers Thursday mornings) and flag low stock before buyers hit it. **State: `PROACTIVE_RESPONSIVE`.** The chat operation is one person (the founder) — excellent now, a scaling question later.

## §6 · Demand hub performance
Small base, exceptional rate: **96 matches → 35 real VENDOR quotes → 6 KAM_APPROVED (17.1%)**, 94% price coverage. Nina Kovac hand-curates their matches to UK/IE sportswear and workwear demands, which flatters the rate — but a 17% approval rate against a platform norm near zero is signal, not noise. **State: `ACTIVE_HIGH_CONVERSION`.** The constraint on scaling this number is stock, not willingness.

## Open opportunities & risks
**Opportunities**
1. ⭐ **Underwrite capacity growth** — a larger weekly sort allocation (or a second rag source) is the single unlock; demand routing is already saturating the catalog. Nina Kovac to scope with the vendor in the Jun-26 supply review.
2. **Make them the default Beaumont/new-UK-buyer introduction** — fast delivery + clean QC is exactly what ramping small buyers need to build ordering habits; Rosie Beaumont is the proof case.
3. **Feed the Dunmore signal** — Freya Dunmore converts here and nowhere else; routing her open Y2K womenswear demands to second-spin first is a free win for an ACTIVE_SOURCING_UNCONVERTED buyer.
4. **Expand the FleekSort pilot** — 92.4% AI approval justifies a bigger piece allocation.

**Risks**
1. **Capacity ceiling** — small catalog, fast sell-through; over-routing demand before supply grows produces stockouts and disappointed buyers.
2. **Short history** — 74 orders / 5 months; all metrics are low-confidence and the first bad container would move every rate materially.
3. **Key-person dependency** — one founder runs sourcing, sorting, and chat.
4. **Single-AM dependency** — the high demand-hub conversion is partly Nina Kovac's curation; the vendor hasn't proven it converts unassisted matches.

## §Sources
- `<bq-project>.fleek_hub.vendor_details` — identity (UK origin, ACTIVE, joined 2026-01-15, supply_am Nina Kovac)
- `<bq-project>.fleek_raw.order_line_status_details` — GMV/orders/buyers, GMV-by-kind, reliability core, top buyers (all `vendor='second-spin-supply'`)
- `<bq-project>.fleek_analytics.product_details_v2` — catalog, make-type split, upload cadence
- `<bq-project>.fleek_hub.demand_request` / `demand_hub_quote` — match/quote/approval decomposition
- `<bq-project>.fleek_node_rudder.send_message` — chat activity (310 msgs / 44 channels, 0% ghosting)
- `<bq-project>.fleek_analytics.handpick_qc_items_mat` — counterfeit check (0/118 branded)
- `<bq-project>.header_truth` — 2026-06-17 aggregate cross-check
- Not pulled this pass: official quality score, platform funnel, Zendesk, WhatsApp/qmd.
