---
entity_id: kavya-exports
shop_name: kavya-exports
origin: IN
zone: null
country: India
joined: 2023-05-11
status: ACTIVE
supply_am: null   # no kam_email in demand_hub_quote; supply_account_manager_id NULL on vendor_details
seller_archetype: B   # bundle/lot bale seller, no FleekSort, small handpick side-channel
strategic_position: commodity_interchangeable   # mixed vintage bales, low buyer concentration, easily substituted
as_of: 2026-06-18

# Commercial snapshot
lifetime_gmv_usd: 148300        # header_truth 2026-06-18 cross-check ✓
lifetime_orders: 310            # BQ=310, gap=0 → no re-baseline
lifetime_buyers: 190            # header_truth 2026-06-18
aov_usd: 478.39                 # 148,300 / 310
days_since_last_order: 8        # last order 2026-06-10
recent_90d_gmv_usd: 5100        # header_truth 2026-06-18
recent_90d_orders: 11
recent_12mo_gmv_usd: 26400      # bundle 22,900 + handpick 3,500 — run-rate well below lifetime pace
recent_brand_skew: "mixed unbranded bales + Champion/Fila sweats (90d)"
upload_cadence_30d: "moderate (12 lots in Jun; ~18/mo Mar-May 2026)"

gmv_split_by_kind: "bundle 84% / handpick 16% / fleeksort 0%"
catalog_make_split: "vintage-secondhand 97% / rework-upcycled 3% / vintage-inspired 0%"
visual_signature: "Graded mixed-vintage bales — unbranded tees, Champion/Fila/Kappa sweats, Wrangler/mixed denim, A/B/C grade, £2-9/pc; classic commodity bale catalog shot flat on warehouse floor."

# Quality
raw_cancel_rate_pct: 3.4            # header_truth 2026-06-18 — under the 10% flag
delivered_orders_lifetime: 330
median_dispatch_days: 4
avg_delivery_days: 15.2
qc_hold_rate_pct: 6.9            # LIFETIME ever-incidence (24 holds / ~350 lines) — history
qc_hold_count: 24
qc_hold_recent_pct: 11.5            # last 180d — 3 holds / 26 lines
qc_hold_recent_count: 3
qc_hold_recent_lines: 26            # <30 = low-confidence denominator
qc_hold_signal: low-recent-volume   # current-risk | improved | low-recent-volume | clean
ai_approval_rate: null          # no FleekSort
counterfeit_pct_branded: null   # bale channel; no piece-level QC records exist — data-absent, not zero-confirmed
unverifiable_pct: null
final_vendor_rating: null
quality_score: null

# Chat
vendor_channels_12m: 96
ghosting_rate: null
chat_state: RESPONSIVE_REACTIVE   # 480 vendor msgs / 96 channels, last msg 2026-06-16; answers when asked, rarely initiates

# WhatsApp
whatsapp_state: WHATSAPP_NONE   # not searched this pass; treat as unknown
whatsapp_chats: none found

# Demand hub
demands_matched: 1240           # 890 OPTIMATCH + 260 VENDOR + 90 HISTORICAL
real_vendor_quotes: 260
quote_approval_rate: "1 KAM_APPROVED (0.4%)"
quote_price_coverage_pct: 71
demand_hub_state: ACTIVE_LOW_CONVERSION   # quotes genuinely (260 VENDOR) but almost nothing closes through the hub

risk_flags: [run_rate_decelerating, low_buyer_concentration_commodity, thin_active_listing_surface]

# Patch metadata
patched_at: 2026-06-18
  generator_skill_blob: "7c31f0a2e8b4"
orders_through: 2026-06-18
chat_through: 2026-06-18
quotes_through: 2026-06-18
---

# kavya-exports — supplier profile

## Headline
**kavya-exports** is an India-based (`IN`) **commodity mixed-vintage bale seller** (Archetype B) that joined Fleek in May 2023 and has done **$148.3k lifetime GMV across 310 orders to 190 buyers** (AOV $478). The catalog is interchangeable graded bales — unbranded tees, Champion/Fila/Kappa sweats, Wrangler and mixed denim at £2-9/pc — the kind of stock a buyer can source from five other vendors on any given Tuesday. Operationally they are **fine, not exceptional** (3.4% cancel rate, 4-day median dispatch, ~15-day delivery, 6.9% lifetime QC hold), and their chat posture is **reactive**: they answer within a day but almost never initiate. **The problem is trajectory:** only **~$26.4k of the $148.3k lifetime came in the last 12 months**, the 90-day window is down to $5.1k / 11 orders, and the buyer base is broad and shallow — the top buyer (Nathan Okoye) is just ~7% of lifetime GMV and nobody else clears 3%. ⭐ **The single biggest lever is demand-hub conversion: they already submit real quotes (260 VENDOR, 71% priced) and lose almost all of them — a KAM curating two or three bulk-bale demands per month toward them would re-anchor the run-rate at near-zero acquisition cost.**

## §1 · What they sell
**GMV index (lifetime, ex-cancellations):** BUNDLE **$124,572 (84%)** · HANDPICK **$23,728 (16%)** · FleekSort **0%**. Pure wholesale/lot with a small handpick side-channel; no individually-graded pieces.

**Catalog (lifetime, bundle + listed) — top groups by product count:**
| Category | Brand | Gender | Grade | Products | Avg £/pc | Avg bundle £ | Bundles sold |
|---|---|---|---|--:|--:|--:|--:|
| top | unbranded | unisex | B/C | 94 | 2.40 | 118 | 51 |
| sweat | Champion | unisex | A/B | 62 | 6.80 | 205 | 33 |
| sweat | Fila / Kappa | unisex | A/B | 41 | 5.10 | 162 | 19 |
| bottom | mixed denim | menswear | B/C | 38 | 4.90 | 141 | 22 |
| bottom | Wrangler | menswear | A/B | 24 | 6.20 | 155 | 12 |
| top | band/graphic tees | unisex | B | 18 | 8.70 | 196 | 7 |
| outerwear | mixed | menswear | B/C | 15 | 9.00 | 233 | 6 |

**Price band:** £2-9/pc (median ~£5/pc), bale tickets £90-280. **Make split:** 97% true vintage secondhand, ~3% rework (a small patched-denim line, not a specialism). **Upload cadence:** ~18 lots/month Mar-May 2026, 12 in June — steadier than most bale sellers, but the `is_active` surface stays thin because bales sell through or expire fast.

**Seller archetype: B** — bale/lot seller, AOV $478, no FleekSort, brand-light graded mixed vintage.

## §2 · Sales & buyers
**Lifetime:** $148.3k / 310 orders / 190 buyers, first order 2023-05-24, **last order 2026-06-10 (8 days ago)** — alive, but cooling. Destinations skew **UK + DE**, with a long tail into FR/NL.

**Top buyers (lifetime) — flat, low-concentration, mostly commodity relationships:**
| entity_id | Buyer | Country | Orders | GMV USD | first→last |
|---|---|---|--:|--:|---|
| 9900000000114 | Nathan Okoye · Okoye Wholesale | UK | 16 | $10,340 | 2023-09→2026-06 |
| 9900000000108 | Hannah Lindqvist · Nordic Rewear | SE | 7 | $4,120 | 2023-11→2025-07 |
| 9900000000120 | Ben Sattler · Sattler Secondhand | DE | 6 | $3,480 | 2024-02→2026-01 |
| 9900000000105 | Theo Vermeulen · Vermeulen Vintage | NL | 5 | $2,910 | 2024-06→2026-03 |

**Nathan Okoye is the only relationship that matters** — a container-scale bale buyer who splits his book between kavya-exports and patchwork-traders on landed-cost math, and whose June order is the vendor's most recent. He is margin-driven, not loyal: if patchwork-traders undercuts on a comparable bale, the order moves. Hannah Lindqvist was a real Champion/Fila sweats lane in 2023-25 but has been churned 300+ days — her old demand profile is the only winback signal, and kavya's sweat catalog is the natural stock to rebuild that bridge with. Ben Sattler orders occasionally and haggles hard (one pricing-dispute cancellation on record, consistent with his pattern elsewhere). **Concentration origin: `commodity_interchangeable`** — top buyer ~7%, top 4 together ~14% of lifetime. Nothing anchors this vendor.

## §3 · Quality & reliability
**Adequate and stable — no current-risk signal.**
- **Raw cancel rate 3.4%** — under the 10% flag; $-weighted reasons split between buyer-requested and two out-of-stock seller rejections (bale sold elsewhere before dispatch — a known commodity-seller failure mode, worth one warning if it recurs).
- **Median dispatch 4 days, avg delivery 15.2 days** — ordinary for an India bale seller.
- **QC hold 6.9% lifetime (24 holds)**; recent 180d window is 11.5% on only **26 lines** — **`low-recent-volume`**, not a current-risk read. Watch it if the denominator crosses 30.
- `counterfeit_pct_branded` is **null — data-absent, not zero-confirmed**: the bale channel produces no piece-level QC records. Do not read it as clean.

## §4 · Pricing behavior
£2-9/pc across the catalog with unbranded tees at £2.40/pc — **bottom-of-market bale pricing**, which is exactly the pitch: cheap, graded, dispatches in 4 days. They price 71% of their demand-hub quotes (good discipline for a bale seller) and their quoted £/pc consistently lands at or below the demand ask. Price is not why they lose.

## §5 · Chat behavior & responsiveness
**Reactive but reliable.** `send_message`: **480 vendor messages across 96 channels**, last 2026-06-16. Median response gap ~1 day; they answer stock/weight/grade questions competently but **initiate almost nothing** — no proactive stock blasts, no follow-ups on gone-quiet threads. In a commodity category where golden-era-goods and patchwork-traders both work chat aggressively, passivity is a share-loss mechanism. **State: `RESPONSIVE_REACTIVE`.**

## §6 · Demand hub performance
Matched to **1,240 demand quotes**: OPTIMATCH 890 (auto) · **VENDOR 260 (real engagement)** · HISTORICAL 90. Real engagement is genuine and priced (71% coverage), but conversion is dismal — **1 KAM_APPROVED lifetime (0.4%)**. Most VENDOR quotes die in CREATED/FINDING_SUPPLY. **State: `ACTIVE_LOW_CONVERSION`.** They are a willing, cheap, adequately-fast bale source that the hub systematically fails to close; this is a routing/curation gap more than a vendor gap.

## Open opportunities & risks
**Opportunities**
1. ⭐ **Close the demand-hub loop** — 260 real quotes, 1 approval. Curate bulk mixed-bale and Champion/Fila-sweat demands to them and actually adjudicate the quotes; even a 5% approval rate roughly doubles their current run-rate.
2. **Lindqvist winback stock** — Hannah Lindqvist's (Nordic Rewear) historical Champion/Fila sweats profile maps directly onto kavya's second-biggest catalog line; if a winback play is run on her, this is the vendor to route it through.
3. **Protect the Okoye lane cheaply** — a standing monthly bale reservation for Okoye Wholesale would defend the only meaningful relationship against patchwork-traders undercutting.

**Risks**
1. **Decelerating run-rate** — $26.4k of $148.3k lifetime in the last 12 months; 90d at $5.1k. Trajectory is down and there is no anchor to arrest it.
2. **Commodity substitutability** — top buyer ~7%, price-led relationships; every order is contestable.
3. **Out-of-stock seller rejections** (2 on record) — bales sold off-platform before dispatch; a repeat pattern would push cancels toward the flag.
4. **Thin active-listing surface** between upload cycles caps discoverability.

## §Sources
- `<bq-project>.fleek_hub.vendor_details` — identity (IN origin, ACTIVE, joined 2023-05-11)
- `<bq-project>.fleek_raw.order_line_status_details` — GMV/orders/buyers, GMV-by-kind, reliability core, cancellations, top buyers (all `vendor='kavya-exports'`)
- `<bq-project>.fleek_analytics.product_details_v2` — catalog, make-type split, upload cadence, brand×GMV capacity
- `<bq-project>.fleek_hub.demand_hub_quote` — quote-source decomposition (no kam_email → supply_am null)
- `<bq-project>.fleek_node_rudder.send_message` — chat activity (480 msgs / 96 channels)
- `<bq-project>.header_truth` — 2026-06-18 aggregate cross-check
- Not pulled this pass: FleekSort grading (none), handpick QC pieces, official quality score, platform funnel, Zendesk, WhatsApp/qmd.
