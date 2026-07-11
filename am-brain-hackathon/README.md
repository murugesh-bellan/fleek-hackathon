# am-brain-hackathon

**A fully synthetic mirror of Fleek's AM Brain** — the queryable second brain Fleek Account Managers use
for opportunity discovery across buyer and supplier relationships.

> ⚠️ **Everything in this repo is mock data.** Every buyer, supplier, vendor handle, order, GMV figure,
> chat quote, and CX ticket is invented. Names of real Fleek staff, customers, and vendors do not appear.
> The *schema, structure, and analytical style* faithfully mirror the production system so you can build
> against it as if it were real.

## What the real system does

Fleek is a B2B marketplace for secondhand/vintage clothing. Account Managers (AMs) broker deals between
wholesale **buyers** (vintage retailers, resellers) and **suppliers** (rag-sorters, exporters, curators).
The AM Brain compiles, per entity, a daily markdown profile fusing five data streams:

1. **Orders** — GMV, AOV, cadence, brand/category mix, cancellations, stuck pipeline
2. **Chat** — vendor↔buyer message threads (volume, recency, thread state)
3. **Demand hub** — AM-logged buyer demand requests and their fulfilment status
4. **Browse/catalog** — what suppliers list, upload cadence, visual signature
5. **CX** — support tickets, refunds, disputes, dominant issue types

A retrieval layer then answers questions like *"which buyers have live unmet demand for knitwear?"* or
*"who is exposed to vendor X's quality slide?"*

## Repo layout

```
profiles/
  README.md                    # profile schema — read this first
  buyer-profile-example.md     # canonical buyer blueprint (annotated)
  supplier-profile-example.md  # canonical supplier blueprint (annotated)
  buyers/                      # 19 synthetic buyer profiles (the 20th, Oliver Ashworth, is the example blueprint)
  suppliers/                   # 9 synthetic supplier profiles (the 10th, retro-harbor, is the example blueprint)
```

Profiles are markdown with YAML frontmatter (machine-readable snapshot) + narrative sections
(human/LLM-readable analysis). The frontmatter is what you'd index; the narrative is what an AM (or an
LLM agent) actually reads.

## The synthetic universe

The 20 buyers and 10 suppliers form one coherent world: buyer profiles reference the same vendor handles
that have supplier profiles, so **relational queries work** (e.g. `denim-dynasty`'s QC slide is visible
from both the supplier side and its affected buyer, Marcus Delaney). Five extra vendor handles appear
only in buyer ledgers — just like production, where not every vendor has a profile yet.

Buyer archetypes: **A** chat-native marketplace buyer · **B** AM-brokered wholesale/container whale ·
**C** silent self-serve. States range across active whales, decelerating accounts, chronic-unmet-demand,
new-and-ramping, churned, and reactivated — so you see the full range of situations the brain models.

## Hackathon ideas

- Build a retrieval/QA agent over the profiles (the frontmatter is embedding-friendly)
- Rank the book: who are the top 5 winback targets and why?
- Cross-entity reasoning: which buyers are exposed to a supplier's quality slide?
- Generate next-best-action outreach drafts per buyer, grounded in their profile
- Design a better profile schema — what's missing? what would you cut?
