---
type: buyer
entity_id: "9900000000101"            # Shopify customer_id — the canonical key
display_name: Oliver Ashworth
shop_name: Ashworth Archive
email_resolvable: true
aliases: [Oliver, Ollie, "Oliver Ashworth", "Ashworth Archive"]
country: United Kingdom
buyer_type: Retailer
account_status: Active
account_owner: "[[People/Sofia Reyes]]"        # AM / KAM
first_order_date: 2022-09-14
last_order_date: 2026-06-17
last_chat_event: 2026-06-19
first_seen: 2026-03-10
last_updated: 2026-06-19
# ── commercial snapshot (all order-derived: order_line_status_details) ──
lifetime_gmv_gbp: 95230
lifetime_orders: 178
aov_gbp: 535
order_frequency_days: 7.7
days_since_last_order: 3
recent_90d_gmv_usd: 10826              # £8,140 × 1.33
recent_90d_orders: 15
recent_brand_skew: [carhartt_detroit, rl_quilted_harrington]   # lifetime is Carhartt-led — recent adds an RL quilted line
emerging_interest: gorpcore_shells     # Arc'teryx / Patagonia — new in last ~7 weeks, chat + demand-hub only, near-zero supply found
# ── chat snapshot (Sendbird: send_message) ──
active_chat_threads_12m: 14
threads_active_7d: 3
threads_recency_split: "3 active(<=7d) / 3 open-cooling(8-30d) / 4 dormant(31-90d) / 4 dead(>90d)"
open_threads_awaiting_buyer: 1         # second-spin-supply checkout link, 3d unactioned
open_threads_awaiting_vendor: 2        # golden-era-goods (measurements), mumbai-mills-vintage (ghosted 96d)
dormant_whale_threads: ["mumbai-mills-vintage $12.5k"]
# ── demand hub (demand_request*, dated) ──
open_demand_items: 2
demand_quotes_unconverted: 7
last_demand_request: 2026-04-02        # 79 days ago
demand_hub_idle_days: 79
demand_hub_recent_90d_activity: low    # 2 items created Apr'26, quotes never actioned
demand_hub_state: supplements_chat     # anchors serve him in chat; hub is his overflow channel for hard-to-source asks
# ── CX (zendesk_new.ticket — dated) ──
lifetime_cx_tickets: 21
cx_history_span: "2023-03-21 .. 2026-06-09"    # 3.2 years
last_cx_ticket: 2026-06-09
days_since_last_cx: 11
cx_open_now: 1                         # denim-dynasty QC-hold escalation (#87903)
dominant_issue: qc_hold_and_grading    # clustered on denim-dynasty since Jan'26
negative_sentiment_tickets: ["calico-crate/84212", "patchwork-traders/77340"]
largest_refund_dispute: "£840 Schott rework bundle (patchwork-traders, 2024)"
# ── derived persona ──
category_focus: [outerwear_jackets]
brand_focus: [Carhartt, Ralph Lauren, Dickies, Schott]
grade_preference: [A, A/B]
behaviour: [anchored_multi_vendor, video_first_diligence, forward_planner, bundle_price_negotiator]
tags: [buyer/large, buyer/retailer, buyer/uk, buyer/outerwear, fleek/account-managed]
risk_flags: [denim_dynasty_qc_holds_blocking_orders, dormant_whale_mumbai_mills_thread, anchor_concentration_retro_harbor_33pct, cancel_before_dispatch_calico_crate, gorpcore_demand_unmet_by_supply]
---

# Oliver Ashworth — Buyer Profile  *(canonical blueprint)*

*(synthetic example — all data mock)*

> **The anchored whale of the cohort — £95,230 lifetime / 178 orders, ordering ~every 8 days for nearly four years.** A Manchester vintage **retailer** (Ashworth Archive) whose business is **graded outerwear**: Carhartt Detroit/Active workwear plus Ralph Lauren Harringtons are ~60% of lifetime spend, topped up with Schott leather, Dickies workwear and a premium tail. Unlike a sprayed marketplace buyer, Oliver runs on **two anchor vendors — `retro-harbor` (33% of lifetime) and `northside-pickers` (26%)** — and negotiates recurring handpick bundles in chat with **video-first diligence** (inner tags, zip pulls, pit-to-pit before he pays). The book is healthy but the levers are clear: a **checkout link sitting unactioned 3 days**, a **`denim-dynasty` QC-hold cluster souring his only denim lane**, an **emerging gorpcore (Arc'teryx/Patagonia) hunt no vendor has answered**, and ⭐ **a $12.5k dormant-whale thread with `mumbai-mills-vintage` ghosted 96 days — the single biggest reactivation lever.**

---

## 1 · What he buys  *(source: `order_line_status_details` × `product_details_v2`)*

| Brand | Category | Orders | Spend (USD) | Vendors |
|---|---|---:|---:|---:|
| **Carhartt** | Outerwear · Detroit / Active jacket | 62 | **$48,900** | 5 |
| **Ralph Lauren** | Outerwear · Harrington / quilted | 38 | **$24,300** | 6 |
| *(Custom Handpicks — untagged, Carhartt-led)* | mixed outerwear | 30 | **$21,700** | 4 |
| Unbranded | Outerwear · M65 / chore coat | 14 | $9,800 | 5 |
| Schott · The North Face · Patagonia | Outerwear (premium / leather) | 10 | $9,200 | 3 |
| Dickies · Levi's · Wrangler | workwear jackets / denim | 14 | $7,600 | 4 |
| Stone Island · Lacoste · misc tail | knits / track tops | 10 | $5,156 | 5 |

**Overall read:** ~39% Carhartt, ~19% Ralph Lauren, almost entirely **grade A/A-B outerwear**, with a standing monthly handpick habit (recurring *"ASHWORTH CARHARTT 12PC"* bundles from retro-harbor at ~£950–£1,100 each). Lifetime ledger: 178 orders / $126,656 (£95,230).

**Recent — last 90 days (≈ $10.8k, 15 orders):**

| Brand / category | Orders | Spend (USD) | Vendors | Last |
|---|---:|---:|---|---|
| **Carhartt Detroit / Active jackets** | 5 | $3,980 | retro-harbor, northside-pickers | **06-15** |
| Ralph Lauren quilted Harrington | 4 | $2,730 | second-spin-supply, retro-harbor | **06-17** |
| Custom handpick ("Ashworth Carhartt 12pc") | 2 | $2,150 | retro-harbor | 05-29 |
| Wrangler / Dickies workwear | 2 | $1,020 | northside-pickers | 05-20 |
| The North Face fleece | 1 | $560 | the-thread-archive | 05-08 |
| Levi's denim jackets | 1 | $386 | northside-pickers | 04-26 |

→ **Shift to watch:** lifetime he's **Carhartt-led**, but the last 90 days add a fast-compounding **RL quilted-Harrington line via `second-spin-supply`** (UK-domestic, 3-day door-to-door — he's noticed the freight advantage), and his chats now carry a **gorpcore ask (Arc'teryx shells, Patagonia fleece)** that hasn't converted anywhere. An agent should protect the Carhartt anchor flow and chase the shell supply.

---

## 1b · Cancellations & stuck pipeline  *(source: `order_line_status_details` status codes, refreshed 2026-06-19)*

**Lifetime cancellation picture: 9 cancelled lines / ~$3,050 lost value — low for a whale (≈2.4% of gross), but the recent ones cluster badly.**

| Date | Vendor | Order | Value | What happened | State |
|---|---|---|---:|---|---|
| 2026-03-28 | calico-crate | 84212 | £610 | **cancel-before-dispatch** — vendor "couldn't locate the pieces" after payment | ❌ refunded; relationship dead (§5) |
| 2026-02-14 | denim-dynasty | 82706 | £96 (partial) | QC hold → 3 of 14 pcs failed grading → partial cancel | 🧪 refunded; friction repeat |
| 2025-11-19 | patchwork-traders | 77340 | £430 | **seller rejection** — rework bundle rejected at papertag stage | ❌ refunded; vendor down-weighted |
| 2023–2024 | *(various, onboarding era)* | — | ~£1,150 | 6 scattered cancels, mostly stock-outs | historical |

**Stuck pipeline right now (3 open orders, 1 needs action):**

| Order | Vendor | Value | Stage | Age | Read |
|---|---|---:|---|---|---|
| **87903** | **denim-dynasty** | £480 | **QC HOLD — 9 days** ⚠️ | 2026-06-10 | grading dispute (vendor graded A, QC says B) — open ticket §5; buyer aware and irritated |
| 88121 | retro-harbor | £1,040 | QC passed → awaiting freight | 2026-06-14 | normal; Karachi consol ships Fridays |
| 88347 | northside-pickers | £515 | in transit (courier) | 2026-06-17 | normal; ETA 06-24 |

→ **The QC-hold on #87903 is the live fire**: it is his third denim-dynasty friction event in five months and the reason his denim lane (Levi's/Wrangler via denim-dynasty) has stalled. Route future denim demand to northside-pickers or second-spin-supply until denim-dynasty's hold rate normalises.

---

## 1c · Supplier relationships — the FULL ledger  *(source: `order_line_status_details`, all vendors with ≥1 order)*

**He has transacted with 15 vendors for $126,656 lifetime — an anchored buyer, the opposite of a sprayed one.** Two anchors carry 59% of lifetime spend; everything else is satellite or historical. "Net-new" for Oliver means a vendor NOT in this list — and given his anchor loyalty, net-new only lands when it answers demand the anchors can't (see gorpcore, §2).

| Vendor | Orders | GMV USD | % life | first → last | idle | Dominant brand/cat | Relationship |
|---|---|---|---|---|---|---|---|
| **retro-harbor** | 58 | **$42,236** | 33% | 2023-02 → 2026-06 | 5d | carhartt / outerwear / detroit | **HEALTHY_ACTIVE — primary anchor**; recurring monthly handpick; video-QC routine established |
| **northside-pickers** | 47 | **$33,180** | 26% | 2023-07 → 2026-06 | 3d | carhartt+dickies / workwear | **HEALTHY_ACTIVE — second anchor**; CA workwear specialist, cleanest record in the book |
| mumbai-mills-vintage | 16 | $12,470 | 10% | 2023-05 → 2025-08 | 310d | ralph lauren / handpick | 💰 **DORMANT WHALE — vendor ghosted**; buyer asked "any RL handpick this month?" Mar'26, no reply 96d (§4) ⭐ |
| heritage-hangers | 12 | $8,020 | 6% | 2023-09 → 2026-01 | 154d | unbranded / M65 / chore | HEALTHY_DORMANT — clean history, gone quiet |
| second-spin-supply | 8 | $6,940 | 5% | 2025-11 → 2026-06 | 3d | ralph lauren / quilted harrington | **HEALTHY_ACTIVE — rising fast**; UK-domestic freight edge; checkout link live (§4) |
| the-thread-archive | 5 | $5,310 | 4% | 2024-06 → 2026-05 | 42d | schott+stone island / premium | HEALTHY_ACTIVE (low frequency) — his premium/leather tier, zero friction |
| kavya-exports | 9 | $4,480 | 4% | 2023-04 → 2026-05 | 37d | mixed / bundle lots | HEALTHY_DORMANT-ish — commodity bundles, cadence slowing with vendor's own run-rate |
| bombay-bale-co | 7 | $3,890 | 3% | 2023-06 → 2025-04 | 431d | unbranded / bale | HEALTHY_DORMANT — clean, long quiet |
| silverlake-surplus | 5 | $2,750 | 2% | 2023-03 → 2024-09 | 648d | mixed / surplus | HEALTHY_DORMANT — vendor itself near-zero uploads now; do not route |
| denim-dynasty | 4 | $2,610 | 2% | 2025-06 → 2026-06 | 3d (order) | levi's+wrangler / denim | **AT_RISK — QC-hold cluster** (Feb partial cancel, Jun hold open 9d, §1b/§5); down-weight until hold rate normalises |
| golden-era-goods | 2 | $1,890 | 1% | 2026-04 → 2026-05 | 26d | nike+kappa / track tops | TRIAL — two clean orders, thread awaiting vendor on measurements (§4) |
| patchwork-traders | 2 (1c) | $1,140 | 1% | 2024-08 → 2025-11 | 213d | rework | **DAMAGED** — £840 refund saga 2024 + Nov'25 seller rejection (§1b/§5); do NOT route |
| the-sorting-house | 1 | $980 | 1% | 2025-02 → 2025-02 | 493d | mixed / graded lots | ONE_OFF — single clean order |
| tokyo-drip-vintage | 1 | $760 | 1% | 2026-01 → 2026-01 | 156d | nike+kappa / japan-sourced | ONE_OFF — priced himself out ("bit steep for me brother") |
| calico-crate | 1 (1c) | $0 | <1% | 2026-03 → 2026-03 | 84d | — | **DAMAGED** — only order cancelled before dispatch after payment (Mar'26, §5); negative-sentiment ticket |

→ **Re-buy map:** anchors `retro-harbor` + `northside-pickers` = protect and feed (both live this week). `second-spin-supply` = the growth vendor — push the open checkout link and introduce the RL quilted restock cycle. `the-thread-archive` = premium lane, reliable but slow — right home for the Schott/Stone Island tail. **The reactivation lever is `mumbai-mills-vintage`**: 16 orders / $12,470 of RL handpick history and a buyer-initiated ask sitting unanswered — either wake the vendor or re-route that demand to second-spin-supply. **Down-weight block:** `denim-dynasty` (until QC normalises), `patchwork-traders`, `calico-crate`, `silverlake-surplus` (dead supply).

---

## 2 · What he wants / latent intent  *(source: chat PDP-shares (`send_message`) + demand hub)*

**Overall pattern:** graded outerwear on a planning cycle — he buys ~6 weeks ahead of his shop-floor season and asks for **video before link, every time** (*"spin each jacket front and back"*, *"show me the zip pull and inner tag"*, *"none under pit-to-pit 22 please"*).

**Recent explicit wants — pasted into vendor chats (dated; the live demand signal):**

| Date | Wants | Vendor |
|---|---|---|
| 06-19 | Carhartt Detroit handpick ×12 for July (*"same spec as last month's dozen"*) | retro-harbor |
| 06-16 | RL quilted Harrington restock, 15–20 pcs A-grade | second-spin-supply |
| 06-11 | **Arc'teryx / Patagonia shells** *(emerging — measurements asked, no reply)* | golden-era-goods |
| 06-02 | Dickies Eisenhower jackets, dark colourways | northside-pickers |
| 05-26 | Patagonia retro-pile fleece *(gorpcore theme again)* | the-thread-archive |
| 03-15 | *"any RL handpick this month?"* — **unanswered 96d** | mumbai-mills-vintage |
| 04-02 | Arc'teryx/Patagonia shells 12 × £55 + Carhartt Detroit 15 × £48 | *(demand hub, §3)* |

→ Every ask carries the same diligence ritual (video → measurements → bundle price → link). **Feed the Detroit + RL quilted lanes first; the gorpcore shell hunt is 7 weeks old, asked through three channels, and still unmet — the clearest net-new sourcing gap in the profile.**

---

## 2b · In-app intent + chat intent mining  *(source: in-app cart/favourite events keyed on the customer id; `send_message` free-text)*

**In-app behavioral intent (last 90d): 68 searches · 11 add-to-carts · 5 favorites.** He browses less than a marketplace-native buyer — his volume runs through anchor chats — but his carts *lead* his chat asks: he carted a second-spin-supply quilted RL on **06-14, two days before asking the vendor for the 16-piece bundle** that became the live checkout link.

| Date | Action | Item | £ | Vendor |
|---|---|---|---|---|
| 06-14 | ❤️+🛒 | RL quilted Harrington | 26 | second-spin-supply *(→ 16-pc bundle ask 06-16)* |
| 06-09 | 🛒 | **Arc'teryx shell** | 62 | golden-era-goods *(→ measurements ask 06-11, vendor silent)* |
| 06-02 | 🛒 ×2 | Dickies Eisenhower jackets | 15 / 18 | northside-pickers |
| 05-26 | ❤️ | Patagonia retro-pile fleece | 34 | the-thread-archive |
| 05-18 | 🛒 | Carhartt Active jacket | 44 | retro-harbor |
| 05-06 | ❤️+🛒 | Stone Island knit | 58 | the-thread-archive *(browsed, never asked — latent premium signal)* |

→ **Cart/favorite behavior = Carhartt/RL core + the gorpcore hunt**, matching §1 buys and §2 chat-wants — double-confirmed intent, with one **cart-only latent signal** (Stone Island knit) no chat ever captured.

**Chat intent mining (last 90d free-text, PDP-shares & ack-noise stripped) — 4 buckets:**

1. **Explicit item asks (net-new wants):** *"any of you getting arcteryx or patagonia shells in? proper ones not the knockoff fleece"* (06-11) · *"could do with more dark-colour eisenhowers"* (06-02). **→ The shell ask is a want only the demand hub partially captured — source it.**
2. **Quality / grading diligence (his QC bar):** *"show me the zip pull and inner tag on each"* · *"none under pit-to-pit 22 please"* · *"last lot had two with paint flecks, keep those out"* — and the live grading challenge to denim-dynasty: *"you graded these A but two came through B at best."*
3. **Hot conversion signals:** *"go on then, send it over"* (06-15) · *"hold the 8 detroits for me"* (06-18) · *"same spec as last month's dozen"* (06-17).
4. **Off/refusal:** *"bit steep for me brother"* (tokyo-drip-vintage, 05-02) — he has a hard price ceiling on Japan-sourced stock; don't push that lane.

---

## §Dx · Demand by Category — spend capacity

**Oliver is a two-anchor outerwear specialist with one loud unmet signal.** 12mo GMV ≈ £26,400 (~$35,100); the handpick line alone is ~£12k of that. The gorpcore ask (Arc'teryx/Patagonia shells) sits above the past-spend floor — asked via chat, cart AND demand hub, zero conversions to date.

| category | want_state | value (Σ ask line-values) | channel_pref | note |
|---|---|---:|---|---|
| carhartt_workwear | active | $9,310 | made-to-order / handpick | Detroit/Active core — monthly 12-pc handpick + Detroit demand-hub item; retro-harbor + northside anchors |
| rl_harrington | active | $4,160 | either | Quilted line compounding via second-spin-supply; open checkout link £384; CLOSED_WON hub item Feb'26 |
| gorpcore_shells | **active-unmet** | $878 | either | Arc'teryx/Patagonia — chat 06-11 + cart 06-09 + hub 04-02 (4 quotes unactioned); **clearest sourcing gap** |
| dickies_workwear | active | $1,360 | in-stock | Eisenhower jackets, dark colourways — carted + asked 06-02; northside lane |
| premium_leather_knit | latent | $2,590 | in-stock | Schott converted May'26 ($1,940 lifetime lane); Stone Island knit cart-only latent signal |
| levis_denim | stalled | $640 | in-stock | Lane frozen by denim-dynasty QC friction — demand exists, routing is the blocker |

---

## 3 · Demand Hub requests — timeline + state  *(source: `demand_request` + `_item` + `_item_quote`, dated)*

**Overall:** 4 lifetime requests / 6 items since 2025-09. Unlike a hub-abandoner, Oliver uses the hub as an **overflow channel**: when his anchors can't source something, he posts it. One item **converted cleanly** (RL quilted → retro-harbor quote → order #83920, Feb'26) — proof the loop works for him when quotes are pushed.
**Recent (last 90d): 2 items created 2026-04-02, 7 quotes received, 0 actioned — idle 79 days.**

| Created (age) | Item | Qty × £/pc | Status | Quotes (window) | Accepted | Idle |
|---|---|---|---|---|---:|---|
| 2026-04-02 (79d) | **Arc'teryx / Patagonia shell jackets (A/B)** | 12 × £55 | FINDING_SUPPLY | 4 *(3–11 Apr'26)* | 0 | 79d |
| 2026-04-02 (79d) | Carhartt Detroit jackets (A) | 15 × £48 | FINDING_SUPPLY | 3 *(4–9 Apr'26)* | 0 | 79d |
| 2026-01-20 | RL quilted Harrington (A/B) | 20 × £26 | **CLOSED_WON** | 5 | **1 — retro-harbor** | → order #83920 £520 (Feb'26) ✅ |
| 2025-09-08 | Dickies workwear jackets | 25 × £14 | CLOSED_WON | 3 | 1 — northside-pickers | ✅ |

→ **State: 2 live items going stale.** The Detroit item is redundant — that demand is already flowing through the retro-harbor chat (§2, 06-19 ask) — close it or convert it into the July handpick. The **shell item is the one that matters**: 4 quotes landed in April (responders incl. `golden-era-goods`, `the-thread-archive`) and were never pushed to him. **The systemic gap: his hub quotes aren't being reconciled with his chat, so the only channel that answered his gorpcore hunt died silently.**

---

## 4 · Chat threads — timeline + state  *(the centerpiece — source: `send_message` = Sendbird)*

**How state is derived:** for each thread we take the message timeline (first/last msg, who spoke last, link/offer shared) and **cross-reference his orders with that vendor** (`order_line_status_details`): did an order follow the chat? is a checkout link sitting unactioned? is it old and dead? This is the buyer's real-time opportunity map.

### Thread-state taxonomy

| State | Definition (derivation) | Action |
|---|---|---|
| 🟢 **ACTIVE-ANCHOR** | Recent orders **and** live chat (order placed during/after thread) | Protect; feed supply |
| 🔥 **OPEN — AWAIT BUYER** | Vendor sent a **checkout link / accepted offer**, no order yet | **Push to checkout (hottest)** |
| ⚠️ **OPEN — AWAIT VENDOR** | Buyer asked for video/pics/price, **vendor silent** | Nudge vendor / re-route |
| 💰 **DORMANT PAST BUYER** | High lifetime spend, no recent order, thread cold >90d | **Reactivate** |
| ⚫ **DEAD / NO PURCHASE** | Old, never converted, low engagement | Prune |
| ❌ **FAILED CONVERSION** | Ordered then **cancelled** | Resolve friction |

### Overall vs recent

**Overall:** 14 threads in the last 12 months (~1,100 messages). Value is concentrated exactly where the ledger says — `retro-harbor` $42,236 · `northside-pickers` $33,180 · `mumbai-mills-vintage` $12,470 — and one of those three is dormant.
**Recent (last 7 days):** 2 anchor threads converting + 1 checkout link awaiting him. **Recency split:** 3 active (≤7d) · 3 open/cooling (8–30d) · 4 dormant (31–90d) · 4 dead (>90d). *(62 new messages in last 7 days — queried 2026-06-19)*

### Dated thread ledger *(most recent first — `last_msg (idle)` is what flags live vs cold)*

| Last msg (idle) | Vendor | State | Msgs | Orders · GMV | Last message |
|---|---|---|---:|---|---|
| 06-19 (0d) | retro-harbor | 🟢 ANCHOR *(July handpick spec)* | 44 | 58 · $42,236 | "will send the sorting video tomorrow inshallah" |
| 06-18 (1d) | northside-pickers | 🟢 ANCHOR *(Detroit hold)* | 31 | 47 · $33,180 | "ok great, hold the 8 detroits for me" |
| 06-16 (3d) | second-spin-supply | 🔥 **AWAIT BUYER** *(link live, unactioned)* | 18 | 8 · $6,940 | "your link is live now mate, 16 quilted RLs" |
| 06-11 (8d) | golden-era-goods | ⚠️ AWAIT VENDOR *(shell measurements)* | 6 | 2 · $1,890 | "can you measure pit to pit on the arcteryx ones?" |
| 06-05 (14d) | the-thread-archive | 🟢 converted *(Schott)* | 22 | 5 · $5,310 | "appreciate you — the schott sold in two days" |
| 05-28 (22d) | denim-dynasty | ❌ FAILED CONVERSION *(QC-hold friction)* | 15 | 4 · $2,610 | "what's happening with the QC hold? third time now" |
| 05-14 (36d) | kavya-exports | 💤 DORMANT | 9 | 9 · $4,480 | "not this month thanks" |
| 05-02 (48d) | tokyo-drip-vintage | ⚫ COOLING *(price refusal)* | 7 | 1 · $760 | "bit steep for me brother" |
| 04-19 (61d) | heritage-hangers | 💤 DORMANT *(past $8k buyer)* | 12 | 12 · $8,020 | "👍" |
| 04-06 (74d) | calico-crate | ❌ FAILED CONVERSION | 8 | 1c · $0 | "why cancel after i've paid? i don't get it" |
| 03-15 (96d) | **mumbai-mills-vintage** 🐳 | 💰 **DORMANT WHALE** *(vendor ghosted)* ⭐ | 19 | **16 · $12,470** | "any RL handpick this month?" *(no reply — 96 days)* |
| 02-21 (118d) | silverlake-surplus | ⚫ DEAD | 5 | 5 · $2,750 | "ok" |
| 02-08 (131d) | patchwork-traders | ⚫ DEAD *(refund chase, damaged)* | 11 | 2 · $1,140 | "still waiting on the rest of that refund" |
| 01-27 (143d) | the-sorting-house | ⚫ DEAD | 4 | 1 · $980 | "thanks" |

### Example timelines (mock messages)

**`retro-harbor` — 🟢 the anchor routine (spec → video → bundle price → link, monthly):**
```
06-17 BUYER : same spec as last month's dozen — detroits, dark browns, no busted zips
06-17 VENDOR: noted brother. i have 14 that match, want me to sort 12 best
06-18 BUYER : yes. show me zip pulls and inner tags on the video please
06-19 VENDOR: will send the sorting video tomorrow inshallah      → July handpick in motion 🟢
```

**`second-spin-supply` — 🔥 link live, buyer hasn't actioned (3 days):**
```
06-14 BUYER : how many quilted RLs can you do for end of month? A grade only
06-15 VENDOR: 16 solid ones. doing you £24 each if you take all
06-15 BUYER : go on then, send it over
06-16 VENDOR: your link is live now mate, 16 quilted RLs
        … (no order yet — 3 days) → PUSH TO CHECKOUT 🔥
```

**`mumbai-mills-vintage` — 💰 the ghosted whale (the lost-sale pattern):**
```
03-15 BUYER : any RL handpick this month?
        … (no vendor reply — 96 days) → $12,470 relationship cold, demand re-routed nowhere ❌
```

### Opportunity readout (what this scopes — refreshed 2026-06-19)
1. 🔥 **Push the second-spin-supply link** — £384 sitting one tap away for 3 days; he already agreed the price.
2. 🟢 **Protect the retro-harbor July handpick** — confirm the sorting video lands; this is his single largest recurring order (~£1,000/mo).
3. ⚠️ **Chase golden-era-goods for the Arc'teryx measurements** (8d silent) — the only vendor currently holding shell supply against his 7-week gorpcore hunt; if no reply in 48h, surface the April demand-hub quotes instead (§3).
4. ⭐ **Reactivate mumbai-mills-vintage** — 16 orders / $12,470, buyer-initiated ask unanswered 96d. Single biggest reactivation lever; if the vendor is truly gone (see supplier brain: responsiveness collapsed), migrate the RL handpick demand to second-spin-supply.
5. ❌ **Resolve the denim-dynasty QC hold** (#87903, 9 days) before the thread hardens into churn — pair with §5 open ticket.

---

## 5 · Issues & CX — timeline + state  *(sources: `zendesk_new.ticket` + hub layer `customer_experience_details` × Sendbird `send_message` Order-Issue/QC channels)*

**How state is derived:** each issue = a Zendesk ticket (issue codes, status, resolution) **+** its message thread **+** the matching in-app **Order-Issue / QC-HOLD Sendbird channel** — all joined to the **order** and **vendor**. 21 lifetime tickets; **1 open now** (denim-dynasty QC hold).

**Issue mix:** **QC-hold / grading disputes are the current cluster** (denim-dynasty, 3 events since Feb'26) → then cancel-before-dispatch (calico-crate) → seller rejection / refund friction (patchwork-traders) → a quiet tail of 2023–24 tracking tickets from his onboarding era. Fleek's ticket AI tags him **`cx_agent_detected_big_buyer`**; **negative sentiment** lands on exactly the two trust-eroding tickets (calico-crate #84212, patchwork-traders #77340).

### Issue ledger — dated *(most recent first)*

**Span: 2023-03-21 → 2026-06-09 · 21 tickets · 3.2 years · 1 open now.**

| Created (days ago) | Resolved | Vendor | Order | Issue | Sentiment | Refund |
|---|---|---|---|---|---|---|
| **2026-06-09 (11d)** | **OPEN** | **denim-dynasty** | **87903** | **QC hold 9d — grading dispute (vendor A vs QC B)** | ⚪ neut | — |
| 2026-05-30 (21d) | 2d | denim-dynasty | 87415 | PQ grading (2 pcs B/C in an A lot) | ⚪ neut | £34 |
| 2026-03-28 (84d) | 1d | calico-crate | 84212 | **cancel-before-dispatch** *("couldn't locate the pieces")* | 🔴 **neg** | full |
| 2026-02-14 (126d) | 3d | denim-dynasty | 82706 | QC hold → partial cancel (3 of 14 pcs) | ⚪ neut | £96 |
| 2025-11-19 (213d) | 2d | patchwork-traders | 77340 | seller rejection → cancel (rework bundle) | 🔴 **neg** | full |
| 2025-08-06 (318d) | 5d | mumbai-mills-vintage | 71128 | tracking / order-status | ⚪ neut | — |
| 2024-10→11 (~600d) | ≤35d | **patchwork-traders** | 58204 | **3 tickets/5wk**: £840 Schott rework refund-not-received saga | 🔴 neg | **£840** |
| *(+ ~12 earlier 2023–24 tickets: tracking, order-status, one freight-damage claim — all resolved ≤4d)* | | | | | | |

### Recurrence & trend *(what to focus on)*
- 🔴 **QC-hold/grading is the live pattern — three denim-dynasty events in five months** (Feb partial cancel → May PQ → Jun hold, still open). Not random: it tracks the vendor's own rising hold rate (see supplier brain). **This is the agent's focus.**
- 📉 **Volume is low and falling** (~2 tickets/quarter vs ~6/quarter in 2023) — his anchors almost never generate tickets; friction is entirely in the satellite lanes.
- 🧨 **Vendor clusters to act on:** `denim-dynasty` (down-weight until holds normalise), `patchwork-traders` (£840 saga + rejection — already pruned), `calico-crate` (single order, cancelled after payment — never route).
- ⚡ **Support is fast** (median resolution ≤2 days) — the problem is upstream supply reliability, not CX.
- ✅ **Template that works:** the northside-pickers QC-HOLD flow (Oct'25) — looped Oliver into the QC channel, he approved a B-grade swap in 40 minutes, dispatched same day, no ticket ever opened.

### The trust signal to watch — `calico-crate` #84212 (Mar'26, cancelled after payment)
```
BUYER: why cancel after i've paid? i don't get it
BUYER: i'd already promised these to a customer for easter weekend
BUYER: refund is fine but it doesn't fill the rail, does it
CX   : the seller could not locate the pieces at dispatch … we are checking if they were relisted
```
→ **State: RESOLVED-REFUND, buyer dissatisfied.** A £95k buyer telling us a cancelled order costs him retail commitments, not just cash. Keep hard-to-source demand away from thin, unproven vendors — his anchors exist for a reason.

### Risk / opportunity readout
1. 🔴 **Close the open denim-dynasty QC hold fast** — it's the third strike; the fix is routing (move denim demand to northside-pickers/second-spin-supply), not apologising.
2. 🧪 **Handpick QC**: his video-first ritual means he catches grading drift instantly — pre-empt with the anchor QC-channel template that already works.
3. 🩹 **Refund hygiene**: the patchwork £840 saga is why he now says "refund doesn't fill the rail" — speed and accuracy matter double with him.
4. The same vendors appear as ❌ FAILED_CONVERSION in §4 — **chat ↔ order ↔ issue are one graph**, keyed by `order_number` + `vendor`.

---

## 6 · Recent Activity
**2026-06-19** — `retro-harbor` (July handpick thread): vendor sorting 12 Detroits, video due tomorrow — 44 msgs, buyer set spec. ⏳ Monitor video lands.
**2026-06-17** — Order #88347: RL quilted Harrington ×2 (`second-spin-supply` retail lines) + Wrangler jacket (`northside-pickers`), £515, in transit.
**2026-06-16** — `second-spin-supply` checkout link live (16 quilted RLs @ £24) — **unactioned 3d** 🔥.
**2026-06-15** — Order #88121: "ASHWORTH CARHARTT 12PC" handpick £1,040 (`retro-harbor`), QC passed, awaiting Friday freight consol.
**2026-06-10** — Order #87903 (`denim-dynasty`) enters **QC HOLD**; ticket opened 06-09→escalated. ⚠️ Still open.
**2026-06-11** — `golden-era-goods`: buyer asked pit-to-pit on Arc'teryx shells — no vendor reply (8d).

## 7 · Open threads to action  *(data-derived — refreshed 2026-06-19)*
1. 🔥 **Push the second-spin-supply checkout** — link live 3 days, price pre-agreed (16 × £24). Hottest conversion in the book.
2. 🟢 **Protect the retro-harbor July handpick** — confirm sorting video arrives; this bundle is ~13% of his monthly spend.
3. ⚠️ **Nudge golden-era-goods** on the Arc'teryx measurements (8d silent); fallback = resurface the 4 April demand-hub shell quotes (§3) — his gorpcore hunt is 7 weeks unmet across 3 channels.
4. ⭐ **Reactivate mumbai-mills-vintage** ($12,470 · 16 orders, ghosted 96d on a buyer-initiated RL ask) — or formally migrate that RL handpick demand to second-spin-supply.
5. ❌ **Resolve denim-dynasty #87903 QC hold** (9 days) and re-route his denim lane until the vendor's hold rate normalises.
6. 🧹 Close the stale Carhartt Detroit demand-hub item (redundant with the live retro-harbor thread); prune dead threads (silverlake-surplus, the-sorting-house).

## Conversation Summary — WhatsApp
_No WhatsApp channel mapped._ ⚠️ (platform gap — supplier/buyer comms linkage)

## Sources / blueprint legend
| Section | Source |
|---|---|
| Frontmatter snapshot | `<bq-project>.fleek_raw.order_line_status_details` (GMV/orders/AOV) + derived |
| §1 What he buys | `<bq-project>.fleek_raw.order_line_status_details` × `<bq-project>.fleek_analytics.product_details_v2` |
| §1b Cancellations & pipeline | `<bq-project>.fleek_raw.order_line_status_details` status codes + `<bq-project>.fleek_analytics.header_truth` |
| §1c Supplier ledger | `<bq-project>.fleek_raw.order_line_status_details` grouped by vendor, joined to §4/§5 states |
| §2 Latent intent | chat PDP-shares (`<bq-project>.fleek_node_rudder.send_message`) + demand hub |
| §2b In-app + chat mining | in-app cart/favourite events + `<bq-project>.fleek_node_rudder.send_message` free-text |
| §Dx Demand by category | derived: §1 past-spend floor + §2/§2b/§3 asks (Σ line-values → USD) |
| §3 Demand Hub | `<bq-project>.postgres_rds_public.demand_request` + `_item` + `_item_quote` |
| §4 Chat threads + state | `<bq-project>.fleek_node_rudder.send_message` (Sendbird) × `order_line_status_details` (conversion cross-ref) |
| §5 Issues/CX + state | `<bq-project>.zendesk_new.ticket` (subject, AI sentiment/intent, QC-miss flag, refund amount, Sendbird chat link) + hub `customer_experience_details` × `send_message` (Order-Issue/QC channels) |
| §6/§7 Activity & actions | orders + chat states (derived) |
| Identity/PII | Platform API + CRM `people` object |
