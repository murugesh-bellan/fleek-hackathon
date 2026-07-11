---
type: supplier
entity_id: retro-harbor               # vendor_handle (the canonical key)
shop_name: Retro Harbor
emails: [[email-redacted]]
aliases: [Retro Harbor, retro-harbor, "RH"]
origin: PK
zone: Karachi Export Processing Zone
status: ACTIVE
joined_at: 2022-08-03
supply_account_owner: "[[People/Tom Aldridge]]"
seller_archetype: fleeksort_plus_handpick_anchor   # archetype A — AI-graded piece flow + bespoke handpick bundles
first_seen: 2026-03-10
last_updated: 2026-06-19
# ── rolling commercial snapshot (refreshed daily: order_line_status_details) ──
gmv_90d_gbp: 148320
units_90d: 1640
distinct_buyers_90d: 412
repeat_buyers_90d: 157
repeat_buyer_rate: 0.38
active_listings: 5240
pct_fleek_sort: 0.91                  # 9% is the handpick/bundle line — his differentiator
avg_vendor_base_price_gbp: 21.40
median_vendor_base_price_gbp: 6.50
uploads_30d: 18750
last_upload: 2026-06-19
# ── quality block ──
quality_score: 4.7
pq_rate: 0.012
qc_hold_rate_90d: 0.021               # share of order LINES flagged at QC before dispatch; of holds, 86% RELEASED ≤48h, 14% → partial cancel. Low + fast-clearing = healthy (contrast denim-dynasty: rising + slow)
cancellation_rate: 0.038
dispatch_time_days: 2
avg_delivery_days: 12.8
agent_approval_rate: 0.994            # AI grading approval across 212k graded pieces
top_brands: [Carhartt, Ralph Lauren, unbranded, Dickies]
top_categories: [Outerwear, Top, Bottom]
top_destinations: [UK, CA, US, DE]
# ── chat snapshot (Sendbird: send_message) ──
active_buyer_threads_30d: 61
median_first_response_hours: 3.1
threads_awaiting_vendor_reply: 2      # both <24h old — responsive
anchor_buyer_threads: ["9900000000101 Ashworth (July handpick)", "9900000000107 Basra (container #2 scoping)"]
# ── demand hub (demand_request*_quote) ──
quotes_90d: 14
quotes_approved_90d: 9
match_tier: PRIMARY
match_confidence: HIGH
avg_match_rank: 1.7
# ── patch metadata (profile maintenance) ──
profile_version: 3
generated_by: patch-supplier-profile v1.2
checkpoint_date: 2026-06-19
patch_notes: "v3: added qc_hold semantics + Basra reactivation block; v2: chat snapshot"
tags: [supplier/pk-zone, supplier/fleeksort, supplier/handpick, supplier/anchor, supplier/grade-a]
risk_flags: []
---

# Retro Harbor — Supplier Profile  *(canonical blueprint)*

*(synthetic example — all data mock)*

> **The anchor supplier of the synthetic cohort — a Karachi-zone FleekSort + handpick house doing £148,320 GMV in 90 days across 412 buyers (38% repeat), with 99.4% AI-grading approval and 2-day dispatch.** What makes Retro Harbor different from a pure piece-seller is the **9% handpick line**: recurring, buyer-specced bundles (e.g. the monthly *"ASHWORTH CARHARTT 12PC"*) with an established **video-QC ritual** buyers trust. Quality is excellent (score 4.7, PQ 1.2%, QC-hold 2.1% and fast-clearing), chat is responsive (median first reply 3.1h), and demand-match ranks him **PRIMARY / HIGH confidence**. He carries two whales: **Oliver Ashworth** (£31.8k lifetime, live July handpick) and **Dev Basra**, whose 14-month churn was broken by a single Retro Harbor comeback container in April — **the Basra relationship is the fragile one to protect.**

## Snapshot
- **Commercials (90d):** £148,320 GMV · 1,640 units · 412 buyers / 157 repeat (38%) · UK-dominant, then CA (Basra container) / US / DE.
- **Catalog:** 5,240 active listings · **91% FleekSort** · avg base £21.40 / median £6.50 · grade mix A (3,190) / A-B (1,480) / B-C (570).
- **Assortment:** Carhartt workwear-led menswear outerwear (1,120 Carhartt pieces live), Ralph Lauren Harrington/quilted (640), Dickies (410), unbranded M65/chore; plus the made-to-order handpick line.
- **Quality & reliability:** quality_score 4.7 · PQ 1.2% · cancellation **3.8%** · QC-hold 2.1% (86% released ≤48h) · dispatch 2d · delivery 12.8d · AI approval 99.4%.
- **Cadence:** uploaded today; **18,750 uploads in last 30d** — top-decile velocity for the zone.

## Matching Intelligence  *(why an agent would pick them)*
- **Demand-match engine:** tier **PRIMARY**, confidence **HIGH**, avg rank 1.7 across 96 matches in 90d — the default route for Carhartt/workwear outerwear demand.
- **Best-fit demands:** Carhartt Detroit/Active handpicks, RL Harrington (incl. quilted) lots, Dickies workwear, M65/military. NOT a fit for: denim-specialist asks (thin Levi's stock), premium designer authentication (route to the-thread-archive), Y2K womenswear (route to golden-era-goods).
- **Quote behavior (90d):** 14 quotes, **9 approved** — e.g. *"RL quilted Harrington"* 20 @ £26 (approved Jan'26 → Ashworth order #83920 ✅); *"Carhartt Detroit A-grade"* 15 @ £47 (approved); *"Dickies Eisenhower dark"* 30 @ £13 (approved, shipping incl.). Quotes within ~24h when intro'd in chat.
- **Handpick capability is the differentiator:** accepts buyer spec (brand/colour/size floor), sorts on video before link — the ritual that keeps whales like Ashworth on a monthly cycle.

## Recent Activity
**2026-06-19** — Chat (Ashworth thread): sorting 12 Detroits against July handpick spec; QC video due 06-20. — [[Buyer/9900000000101]]
**2026-06-19** — Upload: ~640 new FleekSort pieces (grade A Carhartt/Dickies menswear).
**2026-06-15** — Order #88121: "ASHWORTH CARHARTT 12PC" £1,040 passed QC, awaiting Friday freight consol (Karachi consol ships Fridays).
**2026-06-13** — Chat (Basra thread): scoping **container #2** — Basra asked for a mixed Carhartt/RL 400-pc build for August; vendor drafting manifest. — [[Buyer/9900000000107]]
**2026-06-08** — Quote approved: *"Carhartt Detroit A-grade"* 15 @ £47 for a DE bulk_order demand.
**2026-04-22** — **Basra comeback container delivered**: 380 pcs mixed workwear, £14,210 ($18,900) — the order that broke Basra's 14-month churn; 0 PQ tickets on the container.

## Buyer concentration (90d)  *(source: `order_line_status_details` grouped by buyer)*

| Buyer | Country | 90d GMV | % of 90d | Relationship |
|---|---|---:|---:|---|
| [[Buyer/9900000000107]] Dev Basra | CA | £14,210 | 9.6% | 🔶 FRAGILE — reactivated whale, single comeback container Apr'26; container #2 in scoping |
| [[Buyer/9900000000101]] Oliver Ashworth | UK | £3,380 | 2.3% | 🟢 ANCHOR — monthly handpick cycle (£31.8k lifetime), live July spec |
| *(long tail: 410 buyers)* | mixed | £130,730 | 88% | healthy spread — no other buyer >2% |

→ Concentration is acceptable (top-2 ≈ 12%) but **asymmetric in risk**: Ashworth is a routine, Basra is a bet. If container #2 lands, Basra alone could be ~15% of run-rate — worth a dedicated QC pass on that build.

## Conversation Summary — Supply chat
Responsive and commercially fluent: median first reply 3.1h, quotes in-thread, accepts AM-brokered intros quickly. Runs the video-QC ritual unprompted for repeat buyers. Two threads currently awaiting his reply, both <24h old. No disputes on record; tone consistent (*"will send the sorting video tomorrow inshallah"*).

## Conversation Summary — WhatsApp
_No WhatsApp/Slack channel mapped._ ⚠️ (platform gap — supplier comms linkage)

## Seller Experience (Zendesk)
3 tickets lifetime (last 2025-10-02, closed, FRT 0.4h, median resolution 5.2h) — two payout-timing queries, one freight-label reprint. Effectively zero seller-support friction.

## Demand Hub
9 of 14 quotes approved in 90d; the Jan'26 RL-quilted quote is the template win: hub demand → quote → chat intro → order #83920 → the buyer's quilted-RL lane then migrated to a UK vendor for speed while Retro Harbor kept the Carhartt core. Open now: shortlisted on 2 live demands (Ashworth's Arc'teryx/Patagonia shell ask — **no shell stock currently; do not force-match**, and a FR Carhartt bulk ask).

## Risks / Flags
- **None material.** Cancellation 3.8% and QC-hold 2.1% are in the healthy band and fast-clearing.
- Monitor: **whale asymmetry** — Basra alone is 9.6% of 90d GMV on a single-container history (churn-reactivated); a relapse dents the run-rate. Protect the container #2 build.
- Monitor: shell/gorpcore demand (Arc'teryx/Patagonia) is arriving from his own anchor buyers and he has no supply line — flag to supply AM as a sourcing brief, not a match.

## Related
- [[Concepts/FleekSort]] · [[Concepts/Supply Matching]] · Zone peers: [[Supplier/patchwork-traders]]
- Frequently serves: [[Buyer/9900000000101]] (Oliver Ashworth — Carhartt anchor, 58 orders / $42,236 lifetime) · [[Buyer/9900000000107]] (Dev Basra — reactivated CA whale, comeback container Apr'26, container #2 in scoping)

## Sources
- `<bq-project>.fleek_raw.order_line_status_details` (GMV/units/cancellation/QC-hold, vendor = retro-harbor) · `<bq-project>.fleek_analytics.product_details_v2` (catalog/grading)
- `<bq-project>.fleek_node_rudder.send_message` (Sendbird buyer threads, response times)
- `<bq-project>.postgres_rds_public.demand_request` + `_item_quote` (quote/approval history)
- `<bq-project>.zendesk_new.ticket` (seller-side tickets) · `<bq-project>.fleek_analytics.header_truth` (order joins)
