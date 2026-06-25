# Fact-Check Checklist

**Purpose:** Pre-publication checklist for the human editor to complete before setting `"published": true`.

Use this before approving any AI-drafted content. Work through each section. Do not skip the logistics checks — wrong practical details damage credibility faster than weak editorial copy.

---

## Before you publish

### General

- [ ] I have read the entire edition from top to bottom
- [ ] Every claim I cannot verify has been removed or qualified
- [ ] All source URLs are real, working, and actually support the claims made
- [ ] No section contains fabricated quotes, statistics, or attributions
- [ ] Provenance fields honestly reflect how each item was created
- [ ] The mission statement is present and accurate

---

### Front Page

- [ ] The headline accurately describes what happened
- [ ] The summary is factually accurate to the sources linked
- [ ] "Why it matters" does not overstate significance or editorialize beyond the facts
- [ ] At least one source link is provided and working
- [ ] Conversation starter is appropriate and specific
- [ ] Provenance updated from `ai_drafted` to `human_reviewed` (if applicable)

---

### Around Town

- [ ] The event or discovery is real and currently happening or upcoming
- [ ] Date, time, and location are accurate and sourced
- [ ] The "Why care" section is warm but not misleading
- [ ] Neighborhood nudge is honest — not overselling
- [ ] Source link is accurate

**If You Go logistics — verify each item:**

- [ ] Best time is a reasonable estimate, not a fabricated claim
- [ ] **Parking note:** Is this based on actual knowledge of the area, not an AI guess? If uncertain, say "verify before you go."
- [ ] **Transit note:** Is any transit guidance verified?
  - [ ] If mentioning the San Diego Trolley: confirmed the stop exists and the line serves it (check sdmts.com)
  - [ ] If mentioning a bus route: confirmed the route number and that it stops nearby
  - [ ] If Ocean Beach is the destination: **No trolley runs to OB.** Remove any trolley reference.
  - [ ] If uncertain about any transit detail: replaced with "verify current routes at sdmts.com"
- [ ] Cost is verified (check official event page)
- [ ] `verificationStatus` updated to `editor_verified` or `source_verified` (not `ai_inferred`)

---

### Looking Ahead

- [ ] Event is real and confirmed (date, venue, time)
- [ ] worthLeavingNeighborhoodFor assessment is honest
- [ ] planningDifficulty is realistic
- [ ] decisionDeadline is accurate and useful
- [ ] travelFriction and energyPayoff scores are honest

**Getting There logistics — verify each item:**

- [ ] **Parking note:** Based on real knowledge of the area, not AI inference. If uncertain, flag as `needs_review` or remove.
- [ ] **Transit note:**
  - [ ] Trolley references verified against sdmts.com — confirmed line and station name
  - [ ] Bus route references confirmed — route number, stops, current schedule
  - [ ] No invented transit connections
  - [ ] If uncertain: removed or replaced with "verify at sdmts.com"
- [ ] Rideshare note is honest about surge expectations
- [ ] `verificationStatus` updated to `editor_verified` or `source_verified`
- [ ] Source URLs for event details are working and accurate

---

### Storyline

- [ ] The narrative is accurate to what's publicly known
- [ ] No predictions are stated as facts
- [ ] No partisan framing
- [ ] Source link is from a credible outlet and supports the claims made

---

### Worth Your Time

- [ ] Article is real, author and outlet correctly attributed
- [ ] URL goes to the article (or as close as possible)
- [ ] Teaser doesn't misrepresent the article
- [ ] Reading time is approximate and reasonable

---

### Mini Puzzle

- [ ] The answer is definitively correct (looked it up)
- [ ] The question is fair — someone who knows could get it right
- [ ] The hint is accurate if provided
- [ ] All incorrect options are plausible but clearly wrong

---

### Hallway Question

- [ ] Genuinely low-stakes and easy to engage with
- [ ] Not accidentally political, offensive, or exclusionary

---

## After review

- [ ] All `provenance` fields updated appropriately
- [ ] All logistics `verificationStatus` fields updated (no `ai_inferred` remaining in published content)
- [ ] `"published": true` set
- [ ] Final browser read of the published page

---

## The logistics rule

> **If you're not sure, leave it out.**

A reader who follows a transit direction that doesn't exist will not trust Morning Edition again. One wrong trolley reference costs more credibility than ten excellent articles earn. Be conservative with practical details. The edition is better with less information than with wrong information.
