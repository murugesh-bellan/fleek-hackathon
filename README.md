# Jack & Jill

A WhatsApp-native agent system for **B2B secondhand-fashion sourcing**, built on [Fleek](https://fleek.co) + [Wassist](https://wassist.app) for the a16z × Fleek hackathon (Agents & LLMs track).

A buyer states demand in natural language → **Jack** extracts a structured mandate and returns ranked supplier matches with fit rationale → the buyer picks → **Jill** autonomously negotiates within the buyer's mandate → returns a closed deal, all in one WhatsApp thread.

## The idea

The unsolved, agent-shaped problem downstream of Fleek Sort ("what is this item") is buyer↔supplier **matching + negotiation** — hard because it's async (parties never online together), multi-party, and judgement-under-a-mandate. We build on Sort's output, not the vision layer.

- **Jack** faces the buyer. **Jill** faces the supplier. They are literally the *same agent* — one factory (`src/agent/factory.ts`) builds either persona by swapping the system prompt, the on-demand skill, and the scoped tools. Persona is chosen by who's on the other end of the WhatsApp thread. The agent loop itself runs on the [Pi SDK](https://github.com/earendil-works/pi-coding-agent) (`createAgentSession`).
- Negotiation is **autonomous within a contract**: `≤ price ceiling, ≥ grade floor, ≥ quantity`. Jill auto-closes inside the mandate and escalates to the buyer only when terms fall outside it.
- A **memory brain** accretes per-buyer revealed preferences so matching sharpens over time — Fleek's data-flywheel thesis.

## Architecture

```
WhatsApp ─▶ Wassist ─▶ POST /webhook ─▶ verify sig + dedupe ─▶ ACK 200
                                              │
                                     router (buyer→Jack / supplier→Jill)
                                              │
              ┌───────────────────────────────┼───────────────────────────┐
        extract_mandate                 find_matches                    negotiate
        (structured LLM)          (LLM semantic ranking)      (Jill ↔ supplier loop, in-process)
                                              │
                          reply pushed via Wassist send API ─▶ WhatsApp
     Postgres memory brain: buyers · suppliers · inventory_bales · mandates · matches · negotiations · deals
```

Key files: `src/agent/factory.ts` (one Pi-SDK agent factory for both Jack & Jill — system prompt + skill + tools per persona), `src/agent/tools/` (Jack's `extract_mandate`/`find_matches`/`negotiate` + Jill's `make_offer`/`accept_deal`/`escalate`), `skills/jack-sourcing/` + `skills/jill-negotiation/` (persona playbooks loaded on-demand as Pi skills), `personas/*.md` (persona identity + invariants, always-on in the system prompt), `src/mandate.ts`, `src/matching.ts`, `src/negotiation.ts` (Jill sub-session orchestration), `src/supplier-sim.ts`, `src/contract.ts` (mandate enforcement — enforced in code inside `accept_deal`), `src/memory.ts`, `src/wassist.ts` + `src/server.ts` (transport), `src/llm.ts` (single-shot structured completions for the extraction modules).

## Setup

```bash
npm install
cp .env.example .env      # add ANTHROPIC_API_KEY (Wassist vars only needed for real WhatsApp)
npm run seed              # seed fuzzy bulk-bale inventory + a buyer
```

## Run

**Offline demo (the money-shot without WhatsApp — for rehearsal):**
```bash
npm run demo      # scripted: buyer → ranked matches → pick → negotiate → closed deal
npm run chat      # interactive: talk to Jack as the buyer in your terminal
```

**Over real WhatsApp (Wassist):**
```bash
# 1. fill WASSIST_API_KEY (+ WASSIST_WEBHOOK_SECRET) in .env
npm run serve                                   # starts the webhook on :8787
# 2. expose it, e.g.  ngrok http 8787
PUBLIC_WEBHOOK_URL=https://<ngrok>/webhook npm run register
# 3. in the Wassist dashboard, set the returned agent as your number's default
# 4. text the number from WhatsApp
```

## Test

```bash
npm test          # unit tests: contract enforcement + webhook signature/parse
npm run typecheck
```

## Deliberately unresolved (pending Fleek conversations)

- Real supplier inventory structure — the matching interface (`Matcher` in `src/matching.ts`) is swappable.
- Fleeky's existing capabilities — determines whether to lean matching vs negotiation.
