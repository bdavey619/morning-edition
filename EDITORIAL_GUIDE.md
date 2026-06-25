# Morning Edition — Editorial Guide

Morning Edition is a shared daily front page. Its job is to give people enough common ground to participate in their community. It is not trying to maximize engagement, time on site, or emotional reaction. It is trying to help people start their day with useful, honest information.

---

## The goal

Every edition should answer this question: **"What do I need to know today to participate in my community?"**

Not: what's viral, what's trending, what will make you angry, what will make you click.

---

## What we select

We look for content that is:

- **Locally grounded** — specific to the community we serve
- **Useful** — helps someone do something, understand something, or connect with something
- **Shared** — the kind of thing most people in the community would want to know
- **Verifiable** — we can source it

We do not select content because it is:
- Emotionally provocative
- Politically validating
- Popular elsewhere
- Easy to generate

---

## What we avoid

- **Clickbait** — headlines that promise more than the content delivers
- **Partisan framing** — language that codes as team-based political signaling
- **Unsourced claims** — anything we can't link to
- **Manufactured urgency** — "you need to know this NOW" energy
- **Outrage loops** — stories selected because they make people angry
- **Engagement bait** — questions or framings designed to provoke rather than connect

---

## On AI involvement

AI tools help us gather, summarize, and draft. They are useful. They are not editors.

Every item in Morning Edition carries a **provenance label** that honestly describes how it was created:

| Label | Meaning |
|---|---|
| AI drafted | Created by AI. Has not been reviewed by a human. **Do not publish.** |
| AI drafted · Human approved | Created by AI, reviewed and approved by a human editor. This is the minimum for publication. |
| Human written | Written by a human editor from scratch. |
| Community submitted | Sourced from community input and reviewed before publication. |

**AI does not set provenance to "human reviewed." Only humans do that.**

---

## On neutrality

We are not neutral. No one is.

We have editorial values:
- We believe in source transparency
- We believe in giving readers context rather than conclusions
- We believe in the importance of shared local knowledge over national narrative
- We believe people are better served by information than by outrage

We make these choices visible rather than pretending they don't exist.

---

## The editor's responsibility

The editor is responsible for every edition. Not the AI tools. Not the automation pipeline. The human who reviews and approves.

If something is wrong, the editor made a mistake. If something is harmful, the editor failed to catch it. This is not a criticism — it is a clarification of accountability. It means the editor should:

- Read everything before approving it
- Verify facts, not just plausibility
- Change things that don't feel right
- Remove things that can't be sourced
- Delay publication rather than rush it

A delayed edition is fine. A wrong edition is not.

---

## Section purposes

| Section | Purpose |
|---|---|
| Good Morning | Orient the reader to the day. Set the tone: warm, specific, finite. |
| Front Page | The most important local thing happening. Give people shared civic ground. |
| Around Town | Something to do, see, or know about. Warm and specific. |
| Looking Ahead | One upcoming thing worth planning for. Helps readers commit in advance. |
| The Storyline | Context for an ongoing narrative. Help people follow something over time. |
| Worth Your Time | One good long read. Respect the reader's time by curating carefully. |
| Mini Puzzle | A moment of play. Local knowledge celebrated. |
| Hallway Question | Conversation fuel. Easy to answer, easy to share. |

---

## Operational Local Knowledge

San Diegans usually need to plan ahead. Traffic, parking, and neighborhood distance make spontaneous after-work redirection hard. Recommendations should help people decide what to commit to in advance — not just what to do tonight.

This makes practical logistics a trust-critical part of the product. A wrong parking note or a fabricated transit route can do more damage to reader trust than a weak article summary. Follow these rules precisely.

### Rules for practical logistics

**1. Verify before publishing.**
Event dates, times, locations, costs, parking availability, and transit routes must be verified before publication. AI may draft logistics, but the editor must check them against official or trusted sources.

**2. Never invent transit routes.**
Do not describe a bus or trolley route unless you have confirmed it against the official MTS source (sdmts.com or a confirmed event page). Do not call something a trolley stop unless it is actually part of the San Diego Trolley system.

- The **San Diego Trolley** (Green, Orange, Blue lines) serves specific, fixed stations. Do not guess connections.
- **MTS bus routes** change. Always confirm current routes and stop locations before publishing.
- **Rideshare** (Uber/Lyft) is always an option and does not need to be sourced, but note expected surge conditions honestly.
- **Walking** distance should be estimated honestly — a "5-minute walk" that is actually 15 minutes is a broken promise.

**3. When uncertain, say so or omit.**
If you cannot verify a logistics detail, either:
- Remove it
- Replace it with "verify before you go" and a link to the official source
- Mark it `needs_review` in the `verificationStatus` field

**4. Use `verificationStatus` honestly.**

| Status | Meaning |
|---|---|
| `editor_verified` | The editor personally checked this detail |
| `source_verified` | Confirmed against an official or trusted source (with URL) |
| `ai_inferred` | AI generated this — do not publish until verified |
| `community_submitted` | Sourced from community input — verify before publishing |
| `needs_review` | Known to be uncertain or potentially outdated |

**5. Distinguish transit modes clearly.**
- Trolley = San Diego Trolley (light rail system)
- Bus = MTS bus (specify route number if known and verified)
- Rideshare = Uber, Lyft, etc.
- Walking = on foot
- Driving = car

Do not conflate these. "Transit" is not a synonym for "trolley."

### Example: Ocean Beach

Ocean Beach does **not** have a trolley stop. No trolley line runs to Ocean Beach. Do not suggest trolley service to OB. The correct guidance is:

> "No trolley runs into Ocean Beach. If using public transit, verify current MTS bus routes before you go at sdmts.com."

### The trust principle

Readers who act on our logistics — and find wrong information — will not trust Morning Edition again. Practical details earn or lose trust faster than editorial quality. Be conservative. If in doubt, leave it out.

---

## Tone and voice

Morning Edition sounds like a trusted local friend who reads a lot and doesn't have an agenda. It is:

- **Warm** but not sentimental
- **Specific** but not dense
- **Honest** but not cynical
- **Local** but not insular

It does not sound like:
- A wire service
- A press release
- A blog
- A podcast transcript
- An AI writing assistant

---

## Future editorial voices (not in MVP)

The architecture supports optional editorial voice overlays — sections rewritten in a distinct style (e.g. playful, satirical) clearly labeled as such. Do not launch this feature until the base edition is solid and trusted. Readers need to trust the edition before they can appreciate commentary on it.

---

## Questions?

If you're unsure whether to publish something, the answer is probably: wait. Sleep on it. Ask someone. The edition is daily — there's always tomorrow.
