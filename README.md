# Morning Edition

**Not a feed. A front page.**

Morning Edition is a shared front page for San Diego — built to help us notice more, understand where we live, participate in our community, and have better conversations.

> **Status:** Early MVP / prototype. Not yet in production. Being tested with a small group of readers.

---

## Product philosophy

- **Same edition for the same community.** Every reader sees the same page. No personalization, no algorithmic ranking.
- **Finite daily read.** 5–8 minutes. A beginning and an end. No infinite scroll.
- **Human editorial responsibility.** AI assists with gathering and drafting. Humans review, verify, and approve everything before it publishes.
- **AI-assisted, clearly labeled.** Every piece of content carries a provenance badge. Readers can always see how something was made.
- **Source transparency.** No unsourced claims. No fabricated details.
- **Practical local knowledge matters.** Transit routes, parking, event times, and costs are trust-critical. A wrong logistics note damages credibility faster than a weak article summary.
- **The goal is shared context and real-world conversation, not engagement.** Morning Edition does not optimize for time-on-site. It helps people decide where attention and effort are worth spending.

---

## Sections

| Section | Purpose |
|---|---|
| **Today's Front Page** | One important local story. Factual summary, why it matters, source links, and provenance. |
| **Around Town** | One local event or discovery happening this week. Includes logistics (If You Go) for events. |
| **Looking Ahead** | One upcoming thing worth planning for, 1–7 days out. Includes activation cost score, logistics, and a decision deadline. |
| **The Storyline** | One ongoing narrative in sports, politics, business, or culture — written to give context, not take sides. |
| **Worth Your Time** | One long-form article recommendation. Title, author, outlet, reading time, and a 2–3 sentence teaser. |
| **Mini Puzzle** | Local trivia. Helps readers know their city better. Interactive. |
| **Hallway Question** | One low-stakes conversation starter. Easy to answer, easy to share. |

---

## Local logistics principle

Practical details are trust-critical. A wrong parking, transit, date, cost, or location note can break a reader's trust faster than any editorial misstep.

Rules:
- AI may draft logistics, but **humans must verify them before publishing**
- Never invent transit routes. Only mention the San Diego Trolley if the stop is confirmed at sdmts.com
- Never guess bus route numbers. Confirm against official MTS sources
- If a detail cannot be verified, remove it or say "verify before you go"
- Use `verificationStatus` fields honestly (`editor_verified`, `source_verified`, `ai_inferred`, `needs_review`)

Ocean Beach has no trolley service. Do not suggest it.

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the latest published edition.

---

## Where content lives

```
content/
  editions/
    2026-06-25.json   ← One file per edition, named by date
    2026-06-24.json
    2026-06-23.json
```

Each edition is a single JSON file. The homepage automatically loads the most recent file where `"published": true`.

---

## Creating a new edition

1. Copy an existing edition file: `cp content/editions/2026-06-25.json content/editions/YYYY-MM-DD.json`
2. Update the `id` and `date` fields to today's date
3. Use the AI prompts in `prompts/` to draft content (start with `gather-candidates.md`)
4. Work through the draft, verify all facts and logistics
5. Update `provenance` fields to reflect actual review status
6. Update `verificationStatus` on all logistics fields
7. Run through `prompts/fact-check-checklist.md` before publishing
8. Set `"published": true`
9. Restart the dev server

---

## Publishing an edition

An edition is live when:
- `"published": true` in the JSON file
- All logistics fields have `verificationStatus` of `editor_verified` or `source_verified` (not `ai_inferred`)
- The editor has read the entire edition

---

## Provenance and verification status

**Provenance** — how content was created:

| Value | Meaning |
|---|---|
| `ai_drafted` | AI-generated. Not reviewed. Do not publish. |
| `human_reviewed` | AI-generated, reviewed and approved by editor. |
| `human_written` | Written by a human editor from scratch. |
| `community_submitted` | From community input, reviewed before publishing. |

**Verification status** — for logistics fields (If You Go, Looking Ahead):

| Value | Meaning |
|---|---|
| `editor_verified` | Editor personally checked this |
| `source_verified` | Confirmed against an official source (URL available) |
| `ai_inferred` | AI estimate — do not publish without verification |
| `community_submitted` | From community — verify before publishing |
| `needs_review` | Known to be uncertain or potentially outdated |

---

## AI editorial workflow

```
prompts/
  gather-candidates.md     ← Surface candidate stories for each section
  rank-candidates.md       ← Select the best candidate per section
  draft-edition.md         ← Draft full edition JSON from selected candidates
  fact-check-checklist.md  ← Pre-publication human review checklist
```

AI does not publish. AI drafts. Humans decide.

---

## Pages

| Route | Description |
|---|---|
| `/` | Today's latest published edition |
| `/archive` | All published editions |
| `/edition/[id]` | Individual edition permalink (e.g. `/edition/2026-06-25`) |
| `/editor` | Editorial dashboard — provenance and completeness status |
| `/editorial-guide` | Public editorial standards |

---

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build — run before committing
npm run lint     # ESLint check
```

---

## Project structure

```
morning-edition/
├── app/                    # Next.js App Router pages
├── components/             # React components (one per section + shared UI)
├── content/editions/       # Edition JSON files (one per day)
├── docs/                   # Product and process documentation
├── lib/                    # Data access utilities
├── prompts/                # AI editorial prompt templates
├── types/                  # TypeScript types (edition schema)
├── CONTRIBUTING.md         # How to contribute as an editor or reader
├── EDITORIAL_GUIDE.md      # Editorial standards and verification rules
├── LIVE_EDITION_CHECKLIST.md  # Pre-publish checklist for real editions
└── README.md
```

---

## Documentation

| File | Purpose |
|---|---|
| [`EDITORIAL_GUIDE.md`](EDITORIAL_GUIDE.md) | Editorial standards, verification rules, section purposes |
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | How to suggest stories, verify logistics, contribute as an editor |
| [`LIVE_EDITION_CHECKLIST.md`](LIVE_EDITION_CHECKLIST.md) | Checklist to run before publishing a real edition |
| [`docs/PRODUCT_PRINCIPLES.md`](docs/PRODUCT_PRINCIPLES.md) | Internal product philosophy document |
| [`docs/TESTING_PLAN.md`](docs/TESTING_PLAN.md) | Early reader testing plan |

---

## Tech stack

- [Next.js](https://nextjs.org) (App Router, static generation)
- TypeScript
- Tailwind CSS
- Local JSON content (no database)
- Google Fonts: Lora (serif headings), Inter (body)

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
