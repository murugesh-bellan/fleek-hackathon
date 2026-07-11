---
entity_type: buyer
entity_id: 9900000000118
name: Jordan Winterbourne
country: United Kingdom
buyer_type: Retailer
account_status: Churned
account_owner: Jack Marlowe
archetype: C   # silent self-serve — bought heavily off-catalog 2022-23 with minimal chat, then vanished; trades as "Winterbourne Vintage" (chat handle winterbournevtg)
email_resolvable: true

# Commercial snapshot
lifetime_gmv_usd: 38700             # ≈ £29,100 native (x1.33 GBP→USD like the real pipeline)
lifetime_orders: 31
lifetime_cancelled_usd: 1750        # 2 cancelled orders, both 2023 — 1 seller rejection, 1 pricing
lifetime_cancelled_orders: 2
aov_usd: 1248
first_order: 2022-02-08
last_order: 2023-09-26
days_since_last_order: 998
recent_90d_gmv_usd: 0
recent_90d_orders: 0
momentum_direction: churned         # 998d silent — no order, no chat, no demand, no browse since Oct 2023. This is a cold file, not a cooling one.
recent_brand_skew: "(historic) Levi's denim lots, Champion sweats, band tees, mixed US workwear — 2022-23 era UK vintage retailer"

# Chat snapshot
active_threads_12m: 0
his_msgs_12m: 0
last_chat: 2023-10-14               # 18 days after his last order — a courier query, then nothing
chat_state: SILENT_CHURNED

# Demand hub
demand_open_items: 1                # a single fossil: band tees ask from 2023-08, auto-stale
demand_last_request: 2023-08-02
demand_signature: "(historic) Band tees 80s-90s 100pc @£6 — never fulfilled, auto-staled"
demand_state: STALE_HISTORIC

# CX
lifetime_tickets: 3
cx_span: 2022-08-11 → 2023-07-30
dominant_issue: order_tracking (freight ETA chasing)
largest_refund: 0                   # no refunds ever issued — clean CX file

# Derived persona
category_focus: ["levis_denim", "band_tees", "champion_sweats", "us_workwear"]
concentration_origin: era_bound     # spend tracked one 2022-23 sourcing era across 5-6 vendors; when the era ended (his side AND theirs), everything ended together
contactability:
  chat: unresponsive                # 0 msgs in 12m; last inbound reply Oct 2023
  email: unknown                    # no bounce, no open signal either way
  push: unknown
  preferred: none_established

risk_flags:
  - one_era_dormant_998d            # entire relationship lived inside Feb 2022 → Sep 2023; nothing since on any surface
  - vendor_graph_dead               # all 6 lifetime vendors dormant to him 998-1,222d; 2 (silverlake-surplus, mumbai-mills-vintage) are themselves degraded platform-side — nothing to "resume"
  - no_live_winback_signal          # only hook is a 2023 band-tee demand fossil; no browse, no chat, no email engagement on record
  - low_winback_odds                # score this LOW priority — spend winback effort on cooling actives first
as_of: 2026-06-14

# ── checkpoint manifest (pipeline-written; do not hand-edit) ──
checkpoint:
  built_at: "2026-06-14"
  orders_through: "2026-06-14"
  chat_through: "2026-06-14"
  demand_hub_through: "2026-06-14"
  browse_through: "2026-06-14"
  cx_through: "2026-06-14"
  generator_skill_blob: "a41c09d2e7f3"
---

# Jordan Winterbourne (`9900000000118`) — Buyer Profile

**Headline.** A **one-era buyer, fully cold**: **$38.7k (≈£29.1k) lifetime / 31 orders / AOV $1,248 — every penny of it between Feb 2022 and Sep 2023**, then **998 days of total silence** across orders, chat, demand hub and browse. He was a serious mid-size UK vintage retailer in the platform's early era — Levi's denim lots, Champion sweats, band tees, mixed US workwear at ~£940/order — and archetype-C to the core: **31 orders produced just 3 CX tickets and almost no chat**; he sourced silently off catalog and left the same way. The honest read is that **this file's biggest value is knowing NOT to spend on it** ⭐: his entire vendor graph is dead on both sides (his two largest suppliers, `silverlake-surplus` and `mumbai-mills-vintage`, have themselves degraded since), the only demand signal is a 2023 fossil, and there is no contactability channel with any proven pulse. Low-odds winback — one cheap, well-aimed touch maximum, then park it.

---

## §1 · What he bought — a 2022-23 time capsule

His spend was **catalog self-serve, mid-to-large lots**, and unusually brand-legible for the era — he filtered hard and bought named product:

| Brand / item | Category | Spend (USD) | Orders | First→Last |
|---|---|--:|--:|---|
| Levi's | denim lots (jeans/jackets) | $12,900 | 10 | 2022-03 → 2023-09 |
| Champion | sweats/hoodies lots | $6,800 | 6 | 2022-05 → 2023-06 |
| (band tees) | 80s-90s rock/metal tees | $5,100 | 4 | 2022-08 → 2023-04 |
| Wrangler | denim | $2,700 | 2 | 2022-11 → 2023-02 |
| Dickies | workwear | $2,400 | 2 | 2023-01 → 2023-05 |
| (mixed / unbranded) | assorted lots | $8,800 | 7 | 2022-02 → 2023-08 |

**Shift to watch: none — that's the finding.** There is no late-period drift, no downsizing taper, no quality spiral before exit. The order series runs at a steady ~1.6 orders/month for 19 months and then **stops mid-stride**: his final order (2023-09-26, a $1,340 Levi's lot from `mumbai-mills-vintage`) delivered clean, his last chat message (2023-10-14) was a routine courier-ETA query, answered, thanked, closed. Whatever ended this relationship, **it did not happen on-platform** — shop closure, pivot, or a direct-supply deal are all likelier than any grievance we can see.

---

## §1b · Cancellations & stuck pipeline — nothing diagnostic

- **Seller rejection:** `kavya-exports` mixed workwear lot **$1,050 cancelled** (2023-03) — vendor couldn't fulfil; he reordered similar from `heritage-hangers` three weeks later without complaint. Absorbed, not churn-causing.
- **Pricing cancel:** `bombay-bale-co` sweats lot **$700 cancelled** (2022-12) — quiet walk-away, no negotiation thread (consistent with archetype C: he doesn't haggle, he just doesn't buy).
- **Stuck:** zero. No frozen orders, no QC-hold scars, no delivered-ghosts. The pipeline record is clean end to end.

Net: **no why-not-buying signal exists in the transactional record.** The 2 cancels are 6+ months before exit and were both followed by continued buying. This is exit-without-cause — the hardest kind to reverse.

---

## §1c · Supplier relationships — the ledger

**6 transacted vendors, $38.7k — a completely dormant graph, dead on BOTH sides.** No relationship survived past Sep 2023, and his top two sources have since degraded platform-wide, so even a perfect winback couldn't simply "resume".

| Vendor | Orders | GMV USD | First→Last | days_since | Label |
|---|--:|--:|---|--:|---|
| mumbai-mills-vintage | 9 | $11,200 | 2022-04→2023-09-26 | 998 | ONE_ERA_DORMANT ⚠ (vendor's own chat responsiveness has since collapsed — dead pipe even if he returned) |
| silverlake-surplus | 7 | $9,800 | 2022-02→2023-06-11 | 1105 | ONE_ERA_DORMANT ⚠ (vendor near-zero uploads since; his cheapest US-workwear source no longer exists in practice) |
| kavya-exports | 6 | $7,100 | 2022-05→2023-08-19 | 1036 | ONE_ERA_DORMANT (1 seller rejection, absorbed) |
| heritage-hangers | 5 | $5,400 | 2022-09→2023-07-08 | 1078 | ONE_ERA_DORMANT (UK-domestic; his fastest-turn source) |
| bombay-bale-co | 3 | $3,000 | 2022-11→2023-04-02 | 1175 | ONE_ERA_DORMANT (1 pricing cancel) |
| the-thread-archive | 1 | $2,200 | 2023-02-14 | 1222 | ONE_OFF (single premium-denim experiment; never repeated) |

**`concentration_origin: era_bound`** — a balanced 5-vendor spread that lived and died as one cohort. The diagnostic detail: **his two biggest vendors are the two that have since decayed platform-side** (`silverlake-surplus` uploads near zero; `mumbai-mills-vintage` ghosting). If he ever *did* browse back, he'd find his old supply graph gone — which means any winback touch must lead with **new-era supply** (`second-spin-supply` is the obvious card: UK-domestic like `heritage-hangers` was, fast dispatch, and didn't exist in his era).

---

## §2 · What he wanted — chat & demand mining (historic)

**Chat (lifetime ~22 msgs, none since 2023-10-14):** minimal and purely logistical — ETA queries, one invoice question, one "received, all good, cheers". No product negotiation, no price anchoring, no vendor relationships in-thread. He expressed demand exclusively through **checkout behaviour and one demand-hub ask**:
- The single demand-hub request: *"Band tees 80s-90s, 100pc @£6, grade A/B mix"* (2023-08-02) — 4 quotes arrived, none actioned, auto-staled. Notably this is **the one category his order history shows he couldn't get enough of** (4 lots, $5.1k, all sold through fast per reorder speed).

**Intent buckets (all historic):**
1. **Explicit ask:** 80s-90s band tees 100pc @£6 — his only ever articulated demand, unfulfilled.
2. **Revealed preference:** Levi's denim lots ~£900-1,100, Champion sweats, Dickies workwear — steady 2022-23 diet.
3. **Price posture:** no negotiation on record; accepted list pricing or silently declined (archetype-C price behaviour).

---

## §3 · Demand Hub — one fossil

| Created | Item | Qty | £/pc | Status | Idle | Quotes |
|---|---|--:|--:|---|--:|--:|
| 2023-08-02 | Band tees 80s-90s, grade A/B | 100 | 6 | STALE_DEMAND | 1053 | 4 (never opened) |

**State `STALE_HISTORIC`:** this is not a live signal — it's an artifact. Its only operational value is as **winback copy**: if a single reactivation touch is ever sent, "we can now actually fill your 100pc band-tee ask" (via `golden-era-goods` or `the-thread-archive`) is the one message with any personal hook in it. Do not build a sequence on this; it is one email's worth of relevance.

---

## §4 · Chats — SILENT_CHURNED

0 threads, 0 messages in 12m — and near-silence even when active (22 lifetime messages across 31 orders). There is no chat relationship to revive because there never was one. **Implication for winback:** chat outreach will read as noise to this buyer; if anything is sent, it should be **email, once**, product-led (band tees / Levi's lots from a live vendor), with a working catalog link — the medium he actually used.

---

## §5 · Issues & CX

**3 tickets (2022-08 → 2023-07), all closed, zero refunds** — two freight-ETA chases and one invoice copy request. Sentiment neutral-positive throughout; final ticket closed 2 months before his last order with a "thanks, sorted". **CX is exonerated** in this churn: no quality scar, no refund fight, no unresolved anything. Which is precisely what makes the winback odds low — there is nothing to fix, apologise for, or make right. He didn't leave angry; he just left.

---

## Open threads to action

**Winback (single cheap touch, then park):**
1. ⭐ **One product-led email, not a sequence** — "your 2023 band-tee ask (100pc @£6) is now fillable" + a live Levi's/Champion lot from `second-spin-supply` (UK-domestic, fast dispatch — the successor to his old `heritage-hangers` lane). If no open/click in 14 days, **close the loop and deprioritise permanently.**
2. **Do NOT route AM time here** — 998d silent, dead vendor graph, no channel with a pulse. Every hour on this file is an hour not spent on cooling actives with live intent.

**Why-not-buying:**
- **Era ended off-platform** — no on-platform cause visible; likely shop pivot/closure or direct supply.
- **His supply graph no longer exists** — both anchor vendors degraded; "come back to what you had" is not a true offer.
- **No engagement surface** — zero chat/browse/demand signal to time or personalise a touch against.

**Watch-list trigger (automate, don't staff):** if this entity_id ever fires a browse, chat, or demand-hub event, escalate to Jack Marlowe same-day — a spontaneous return signal on a clean-exit account converts far better than outbound ever will.

---

## §Sources
- Identity/snapshot: `<bq-project>.fleek_analytics.order_details`, `<bq-project>.google_sheets.account_ownership_data`, `<bq-project>.fleek_raw.order_line_status_details`
- Buys / ledger / cancellations: `<bq-project>.fleek_raw.order_line_status_details` ⋈ `<bq-project>.fleek_raw.product_details_v2`
- Cancellation truth: `<bq-project>.fleek_raw.header_truth` (latest_status='CANCELLED', x1.33 GBP→USD)
- Demand hub: `<bq-project>.fleek_raw.demand_request`
- Chat: `<bq-project>.fleek_node_rudder.send_message` (handle `winterbournevtg` — 0 rows in trailing 12m)
- CX: `<bq-project>.fleek_hub.customer_experience_details`, `<bq-project>.zendesk_new.ticket`
- as_of 2026-06-14.
