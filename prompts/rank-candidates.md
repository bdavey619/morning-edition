# Prompt: Rank Candidates

**Purpose:** Given a list of gathered candidates, select the best one per section and explain the choice.

---

You are an editorial assistant helping prepare the Morning Edition. Below is a list of candidate items gathered for today's edition. Your job is to recommend the best candidate for each section and explain your reasoning.

**Today's date:** [DATE]
**Edition:** [EDITION NAME]

---

## Candidates

[PASTE OUTPUT FROM gather-candidates.md HERE]

---

## Task

For each section, select one candidate and explain:

1. **Why this one** — what makes this the strongest choice
2. **What concerns remain** — anything the editor should fact-check or verify before approving
3. **Suggested provenance** — `ai_drafted` (needs full human review) or `human_reviewed` (solid, just needs approval)
4. **Verification flags** — for practical logistics, list each field and whether it's verified or needs editor attention

---

## Ranking criteria

### All sections
Prefer candidates that are accurate, verifiable, locally relevant, and useful to the community. Avoid items with disputed facts, low confidence, or no source URL.

### Looking Ahead — additional criteria

Rank Looking Ahead candidates on:

| Criterion | What to look for |
|---|---|
| Strong reason to leave the neighborhood | Is the event worth the effort for most readers? |
| Planning friction | How hard is it actually to get there and go? Low friction = higher rank |
| Energy payoff | How rewarding is the experience? Higher payoff = higher rank |
| Broad appeal | Would a wide range of San Diegans want to do this? |
| Local specificity | Is this distinctly San Diego, or is it generic? |
| Logistics confidence | Are the practical details verified, or are they uncertain? Unverified logistics lower the rank. |
| Decision urgency | Does the reader need to decide soon? A clear deadline strengthens the case. |

**Do not select a Looking Ahead item with `needs_review` transit or parking notes unless the editor has time to verify before publication.**

---

## Output format

```json
[
  {
    "section": "Looking Ahead",
    "selectedTitle": "...",
    "whySelected": "...",
    "remainingConcerns": "Transit note on bus route needs MTS verification before publishing.",
    "suggestedProvenance": "ai_drafted",
    "verificationFlags": [
      { "field": "transitNote", "status": "ai_inferred", "action": "Verify against sdmts.com" },
      { "field": "parkingNote", "status": "editor_verified", "action": "None" }
    ]
  }
]
```
