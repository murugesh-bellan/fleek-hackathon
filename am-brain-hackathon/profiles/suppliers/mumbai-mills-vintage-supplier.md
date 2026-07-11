---
entity_id: mumbai-mills-vintage
shop_name: mumbai-mills-vintage
origin: IN
zone: null
country: India
joined: 2022-03-09
status: ACTIVE
supply_am: Tom Aldridge   # kam_email on demand_hub_quote through 2026-03; no AM touch logged since
seller_archetype: B   # volume handpick house — big weekly container flow, small bundle side-channel
strategic_position: fading_anchor   # top-5 lifetime GMV vendor whose engagement has collapsed; book at risk of silent unwind
as_of: 2026-06-20

# Commercial snapshot
lifetime_gmv_usd: 412600        # header_truth 2026-06-20 cross-check ✓
lifetime_orders: 705            # BQ=705, gap=0 → no re-baseline
lifetime_buyers: 310
aov_usd: 585.25                 # 412,600 / 705
days_since_last_order: 19       # last order 2026-06-01
recent_90d_gmv_usd: 6200        # header_truth 2026-06-20 — vs $19.8k prior 90d and a 2024 peak run-rate of ~$13k/mo
recent_90d_orders: 9
recent_12mo_gmv_usd: 48700      # handpick 41,200 + bundle 7,500 — an anchor vendor running at 30% of peak
recent_brand_skew: "mixed vintage menswear + Harley-Davidson/band tees (90d)"
upload_cadence_30d: "collapsed (6 products in Jun; ~70/mo at 2024 peak, ~30/mo through 2025)"

gmv_split_by_kind: "handpick 78% / bundle 22% / fleeksort 0%"
catalog_make_split: "vintage-secondhand 94% / rework-upcycled 6% / vintage-inspired 0%"
visual_signature: "High-volume IN handpick house — racks of mixed vintage menswear, Harley-Davidson/band tees, Lacoste/RL polos, mixed outerwear; B-grade heavy, £3-14/pc; batch photography that got visibly sloppier through 2026."

# Quality
raw_cancel_rate_pct: 5.8            # header_truth 2026-06-20 (was 4.1 twelve months ago — rising with the disengagement)
delivered_orders_lifetime: 745
median_dispatch_days: 6             # was 3 through 2024; slipping
avg_delivery_days: 16.8
qc_hold_rate_pct: 11.2           # LIFETIME ever-incidence (86 holds / ~770 lines) — always mediocre, never fatal
qc_hold_count: 86
qc_hold_recent_pct: 15.9            # last 180d — 7 holds / 44 lines; over the 15% flag line
qc_hold_recent_count: 7
qc_hold_recent_lines: 44
qc_hold_signal: current-risk        # current-risk | improved | low-recent-volume | clean — secondary to the ghosting story
ai_approval_rate: null          # no FleekSort
counterfeit_pct_branded: 2.1    # 6 flags of 288 branded checked — band tees and Harley-Davidson, spread across 2024-26; chronic-low, not spiking
unverifiable_pct: 4.4
final_vendor_rating: null
quality_score: null

# Chat
vendor_channels_12m: 118
ghosting_rate: 71
chat_state: GHOSTING_COLLAPSE   # 640 vendor msgs / 118 channels 12mo, but only 14 msgs since 2026-04-28; 22 threads BUYER_WAITING >7d
# last vendor message 2026-04-28 (53 days); vendor still logs in — 3 listing edits in June — so this is disengagement, not disappearance

# WhatsApp
whatsapp_state: WHATSAPP_NONE   # not searched this pass; treat as unknown — an off-platform channel would explain some silence, verify before assuming leakage
whatsapp_chats: none found

# Demand hub
demands_matched: 2105           # 1,600 OPTIMATCH + 380 VENDOR + 125 HISTORICAL
real_vendor_quotes: 380
quote_approval_rate: "3 KAM_APPROVED (0.8%)"
quote_price_coverage_pct: 64
demand_hub_state: WENT_DARK     # last VENDOR quote 2026-03-14; OPTIMATCH still auto-matches them to ~40 demands/mo with zero response

risk_flags: [chat_ghosting_collapse_current_risk, pemberton_dormant_thread_8k, run_rate_collapse_to_30pct_of_peak, dispatch_slowing_3d_to_6d, qc_hold_over_flag_recent, counterfeit_chronic_low_band_tees]

# Patch metadata
patched_at: 2026-06-20
  generator_skill_blob: "7c31f0a2e8b4"
orders_through: 2026-06-20
chat_through: 2026-06-20
quotes_through: 2026-06-20
---

# mumbai-mills-vintage — supplier profile

## Headline
**mumbai-mills-vintage** is an India-based (`IN`) **volume handpick house** (Archetype B) that joined Fleek in Mar 2022 and has done **$412.6k lifetime GMV across 705 orders to 310 buyers** (AOV $585) — a top-5 lifetime vendor and, through 2024, a genuine anchor of the mixed-vintage menswear supply. **The story now is ghosting.** The last vendor chat message was **2026-04-28 (53 days ago)**; **22 threads sit BUYER_WAITING more than 7 days**; the 12-month ghosting rate is **71%**; the last real demand-hub quote was **2026-03-14**; uploads have collapsed from ~70/month at peak to **6 in June**. The commercial line follows: 90-day GMV is **$6.2k against a 2024 peak run-rate of ~$13k/month**, dispatch has slipped from 3 to 6 days median, and the recent QC-hold rate (15.9%) has crossed the flag line. Crucially, **they have not left** — three listing edits in June prove someone still logs in. This is disengagement, not disappearance, and it is strangling live money: **a dormant thread with Sam Pemberton (Pemberton Pickers) holds a scoped, priced £8,000 handpick container that the vendor simply stopped answering in November 2025.** ⭐ **The single biggest lever is a direct AM re-engagement intervention — Tom Aldridge getting the principal on a call, diagnosing whether this is capacity, margin, or platform-drift, and using the Pemberton £8k container as the concrete re-entry order — because a top-5 vendor at 30% of peak with live unanswered demand is the most expensive kind of silence on the book.**

## §1 · What they sell
**GMV index (lifetime, ex-cancellations):** HANDPICK **$321,828 (78%)** · BUNDLE **$90,772 (22%)** · FleekSort **0%**. A container-scale handpick operation: buyers scope a mix in chat, the vendor picks against it, containers ship. That model is precisely why chat collapse equals revenue collapse — **for this vendor, chat *is* the order pipeline.**

**Catalog (lifetime, listed) — top groups by product count:**
| Category | Brand | Gender | Grade | Products | Avg £/pc | Avg lot £ | Lots sold |
|---|---|---|---|--:|--:|--:|--:|
| top | Harley-Davidson / band tees | menswear | B | 260 | 9.80 | 240 | 96 |
| top | Lacoste / Ralph Lauren polos | menswear | A/B | 185 | 6.40 | 172 | 71 |
| outerwear | mixed (The North Face, unbranded) | menswear | B | 140 | 12.60 | 290 | 48 |
| sweat | Champion / Fila / Kappa | unisex | B | 122 | 4.90 | 128 | 44 |
| bottom | mixed denim | menswear | B/C | 98 | 3.80 | 102 | 37 |
| top | football club jerseys | menswear | B | 66 | 11.20 | 251 | 21 |
| rework | flannel/tee rework line | unisex | A | 41 | 7.50 | 168 | 12 |

**Price band:** £3-14/pc (median ~£7/pc). **Make split:** 94% true vintage, 6% rework. **Upload cadence: the collapse in one line** — ~70/mo (2024 peak) → ~30/mo (2025) → 11 (May 2026) → **6 (June 2026)**. Photography quality degraded in parallel; the June uploads are visibly rushed.

**Seller archetype: B** — volume handpick with bundle side-channel; at peak, one of the few IN sellers who could reliably fill a mixed 500-piece container in a week.

## §2 · Sales & buyers
**Lifetime:** $412.6k / 705 orders / 310 buyers, first order 2022-03-24, last order 2026-06-01 (19 days ago — one small repeat bundle order; the container business is what stopped). Destinations: **UK-heavy**, then DE/NL/FR.

**Top buyers (lifetime):**
| entity_id | Buyer | Country | Orders | GMV USD | first→last |
|---|---|---|--:|--:|---|
| 9900000000112 | Sam Pemberton · Pemberton Pickers | UK | 22 | $31,900 | 2022-06→**2025-11** |
| 9900000000101 | Oliver Ashworth · Ashworth Archive | UK | 12 | $14,700 | 2022-09→2025-08 |
| 9900000000110 | Gabriel Fonseca · Fonseca Trading Co | US | 9 | $12,300 | 2023-05→2026-01 |
| 9900000000118 | Jordan Winterbourne · Winterbourne Vintage | UK | 10 | $8,400 | 2022-04→2023-09 |

**Sam Pemberton is the buried treasure and the indictment in one row.** 7.7% of lifetime GMV, 22 orders across three years — and his thread died in Nov 2025 *mid-negotiation*: a scoped £8,000 mixed-menswear handpick container, itemized and priced in-thread, to which the vendor never replied. Pemberton (himself now a 200-day-silent dormant whale) sent two follow-ups into the void before going quiet platform-wide. It is unknowable from here whether the vendor's ghosting caused Pemberton's dormancy or merely coincided with it — but the £8k container is real, scoped, and re-openable. **Gabriel Fonseca's** grading complaints and refund disputes trace substantially to this vendor's B-heavy 2025 containers — mumbai-mills is a named contributor to the CX friction on that whale account. **Jordan Winterbourne** is the fossil record: his entire 2022-23 era ran through vendors like this one, and both sides of that relationship are now dormant. Ashworth quietly stopped ordering here in Aug 2025 and moved his mixed-menswear spend to retro-harbor — the sophisticated buyers left first.

## §3 · Quality & reliability
**Always mediocre, now slipping in the same direction as everything else.**
- **Cancel rate 5.8%, up from 4.1** a year ago — the increment is seller non-response cancellations (buyer cancels after dispatch-window silence), the ops signature of ghosting.
- **Median dispatch 6 days (was 3 through 2024)**; avg delivery 16.8 days.
- **QC hold 11.2% lifetime — never great; 15.9% recent (7 of 44 lines)** — over the 15% flag, `current-risk`, though the denominator is modest and the primary risk on this account is engagement, not grading.
- **Counterfeit 2.1% of branded checked** (6 flags: band tees, Harley-Davidson) — chronic-low across 2024-26, not a spike; priced-in for B-grade volume stock but worth a standing check on any re-engagement container.
- **745 delivered lifetime** — the operational muscle exists; it is idling, not broken.

## §4 · Pricing behavior
£3-14/pc, B-grade-heavy value pricing — historically their edge: cheapest reliable mixed-menswear containers on the platform. Quote price coverage was only ever 64% and the last priced quote is from March. No current pricing read is possible; the last known container quote (the Pemberton £8k scope) was competitive at ~£6.90/pc blended.

## §5 · Chat behavior & responsiveness — the story
**GHOSTING_COLLAPSE.** The 12-month totals (640 msgs / 118 channels) flatter them; the distribution is the point:
- **Only 14 vendor messages since 2026-04-28** — effectively silent for 53 days.
- **22 threads BUYER_WAITING >7 days**, including two live buyer asks from June with itemized container requests.
- **Ghosting rate 71%** of threads where the buyer holds the last message.
- **But: 3 listing edits in June** — someone logs in and chooses not to answer chat. This distinguishes disengagement (recoverable, diagnosable) from disappearance (write-off). Candidate explanations, unverified: off-platform channel leakage (WhatsApp unsearched this pass), a capacity/staffing loss, or margin dissatisfaction — Tom Aldridge's call should discriminate between them.

## §6 · Demand hub performance
**WENT_DARK.** 2,105 lifetime matches (1,600 OPTIMATCH / 380 VENDOR / 125 HISTORICAL), 3 KAM_APPROVED lifetime — but the live signal is that **the last real VENDOR quote is 2026-03-14**, while OPTIMATCH continues to auto-match them to ~40 demands/month that go nowhere. Every auto-match against a dark vendor is a demand the hub *thinks* is being worked and isn't — **their OPTIMATCH eligibility should be suppressed until they re-engage**, or mixed-menswear demand keeps silently dying in their queue.

## Open opportunities & risks
**Opportunities**
1. ⭐ **AM re-engagement call (Tom Aldridge, this week)** — diagnose capacity vs margin vs drift; the vendor still logs in, so the door is open. Use the **Pemberton £8k scoped container** as the concrete, pre-negotiated re-entry order — it simultaneously restarts the vendor and gives the Pemberton dormant-whale winback its hook.
2. **Suppress OPTIMATCH eligibility pending re-engagement** — stop routing live demand into a dark queue; restore on first answered thread.
3. **The book remembers them** — 310 lifetime buyers and a still-standing price edge on B-grade mixed menswear; if they come back, reactivation is distribution-ready in a way no new vendor's is.

**Risks**
1. **Ghosting collapse is current and compounding** — every BUYER_WAITING week converts more of the 310-buyer base into Ashworth-style quiet defections to retro-harbor and kavya-exports.
2. **Pemberton linkage** — the £8k dead thread sits inside a £60k-lifetime dormant whale; further vendor silence forecloses that winback path too.
3. **Fonseca contamination** — named contributor to the platform's most friction-heavy whale account; any re-engagement container for a US buyer needs a QC pre-check.
4. **Recent QC over flag (15.9%)** + dispatch slipping — if they do re-engage, the first containers must be supervised, not assumed healthy.
5. **Run-rate at ~30% of peak** — at the current slope this is a sub-$20k/yr vendor by Q4 and a silent churn by 2027.

## §Sources
- `<bq-project>.fleek_hub.vendor_details` — identity (IN origin, ACTIVE, joined 2022-03-09; login/listing-edit recency)
- `<bq-project>.fleek_raw.order_line_status_details` — GMV/orders/buyers, GMV-by-kind, cancel/dispatch trends, QC-hold windows, top buyers (all `vendor='mumbai-mills-vintage'`)
- `<bq-project>.fleek_analytics.product_details_v2` — catalog, upload-cadence collapse curve
- `<bq-project>.fleek_hub.demand_hub_quote` / `demand_request` — VENDOR-quote dropoff, OPTIMATCH dead-queue volume (kam_email → Tom Aldridge, last touch 2026-03)
- `<bq-project>.fleek_node_rudder.send_message` — ghosting decomposition (14 msgs since 2026-04-28; 22 BUYER_WAITING threads; Pemberton thread history incl. £8k container scope, Nov 2025)
- `<bq-project>.fleek_analytics.handpick_qc_items_mat` — counterfeit checks (6/288 branded)
- `<bq-project>.header_truth` — 2026-06-20 aggregate cross-check
- Not pulled this pass: official quality score, platform funnel, Zendesk seller-experience, WhatsApp/qmd (leakage hypothesis unverified).
