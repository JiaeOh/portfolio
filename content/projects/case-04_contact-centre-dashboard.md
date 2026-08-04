---
slug: contact-centre-dashboard
category: "AI Enhanced workflow"
platform: "Desktop Web"
navLabel: "Customer Centre Dashboard"
year: "2026"
title: "AI enhanced Customer Centre Dashboard"
description: "AI can summarise a call in a second. It anticipates the advisor's next action and links straight to the relevant page, improving workflow efficiency. A self-initiated concept."
badge: "In progress"
client: "Self-initiated concept"
featured: true
order: 4
cover: "/images/contact-centre-dashboard/00-cover.png"
video: "/images/contact-centre-dashboard/00-product-video.mp4"
gallery:
  - { src: "/images/contact-centre-dashboard/01-summary-panel.png", alt: "Summary panel with source links and unconfirmed states", size: "large" }
  - { src: "/images/contact-centre-dashboard/02-states.png", alt: "Confirmed versus unconfirmed content states", size: "small" }
  - { src: "/images/contact-centre-dashboard/03-correction.png", alt: "Correction record showing where a human overrode a suggestion", size: "small" }
roleTitle: "Product Designer"
timeline: "14 months \u2022 Self-initiated / Solo"
keyChallenges:
  - "AI summaries look finished before they are correct, so they go unchallenged"
  - "Advisors are accountable for actions they cannot trace back to a source"
outcomes:
  - "Every generated line carries source, uncertainty and correction history"
  - "Uncertainty shown as behaviour \u2014 unconfirmed fields cannot pre-fill an action"
tags: [AI Interfaces, Explainability, Customer Centre, Concept]
---

## Overview

Contact centres are adopting AI to summarise calls and suggest next actions, and the efficiency case is obvious. The design case is not.

An advisor is accountable for what they do. If the system hands them a confident summary with no visible origin, the advisor either trusts it blindly or ignores it entirely — and both failures look the same from the outside until something goes wrong.

**This is a self-initiated concept.** There is no client, no real data, and no shipped outcome. The assumptions below are stated so they can be argued with.

## Process

### 1. The problem is not accuracy. It is accountability.

An AI summary that is 95% correct is not 95% useful if the advisor cannot tell which 5% to check. The design question is not "how do we make the AI better" but **"what does an advisor need in order to take responsibility for using it?"**

In a regulated service that question has a second half: what would this interaction need to look like six months later, when someone asks why the advisor did what they did? Designing for that audit up front is cheaper than adding a log afterwards, and it happens to be the same thing that makes the tool trustworthy to use in the moment.

### 2. Three things every AI output carries

**Source.** Every claim links back to the moment in the transcript or the record it came from. One click, no searching.

**Confidence, expressed as behaviour, not a number.** A low-confidence field does not display a percentage — it displays as unconfirmed and does not pre-fill anything actionable. Certainty is shown by what the interface lets you do next.

**Correction history.** When an advisor overrides a suggestion, that override is recorded and visible. This does two things: it gives the next advisor context, and it produces an audit trail showing that a human made the decision.

![Summary panel with source links, unconfirmed states and correction record](/images/contact-centre-dashboard/01-summary-panel.png "Concept: every generated line traces back to where it came from")

### 3. Design against fluency

Generated text reads as finished before it is correct. So confirmed and unconfirmed content are visually different classes, not the same paragraph with a small caveat. Unconfirmed content cannot be copied into a customer-facing action without an explicit confirm step.

The friction is deliberate and narrow: it sits only where an error would be expensive.

![Confirmed versus unconfirmed content states](/images/contact-centre-dashboard/02-states.png "Concept: the interface makes uncertainty structural, not cosmetic")

### 4. Assumptions I would test first

- That advisors want the summary at all, rather than the three fields they actually retype
- That source-linking is used in practice, or only reassures people who never click it
- That the correction record is read by the next advisor, or only by auditors
- Whether the confirm step is protective or is simply clicked through after week two

## What this transfers to

The pattern is not specific to contact centres. Anywhere a person is accountable for acting on a machine's output, the interface has to carry provenance, honest uncertainty, and a record of human judgement — otherwise efficiency is being bought with unmeasured risk.
