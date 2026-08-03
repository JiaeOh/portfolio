---
slug: open-till-close
category: "Hospitality"
platform: "Mobile App"
navLabel: "Hospitality Operations App"
year: "2026"
title: "Hospitality Operations App"
description: "Closing checklists, stock counts and temperature logs for cafe teams. Designed so the record is captured during the shift, not rebuilt from memory afterwards."
badge: "Pre-launch"
client: "Own product — designed and built with one developer"
featured: true
order: 1
cover: "/images/open-till-close/00-cover.png"
gallery:
  - { src: "/images/open-till-close/01-app-screens.png", alt: "Task checklist and temperature entry screens", size: "large" }
  - { src: "/images/open-till-close/02-field-research.png", alt: "Field research notes mapping when tasks are done versus recorded", size: "small" }
  - { src: "/images/open-till-close/03-design-system.png", alt: "Token architecture with light and dark mode variants", size: "small" }
roleTitle: "Product Designer & Co-founder"
timeline: "Ongoing \u2022 Designer, 1 Developer"
keyChallenges:
  - "Records written from memory after the shift, not during it"
  - "Logs must hold up as evidence in a food safety inspection"
outcomes:
  - "~50% reduction in record-keeping time in initial testing"
  - "Every entry timestamped and attributable at the moment of the task"
tags: [Field Research, Design System, Accessibility, AI-Assisted Build]
---

## Overview

I work part-time in a cafe. Closing runs on a laminated checklist, a fridge temperature log, a stock sheet, and whoever remembers what was already done. The window is thirty minutes; staff were staying 30 to 45 minutes past it every shift.

## Process

### 1. Watch the work, not the worker

I ran research with baristas **during live shifts** rather than in interviews afterwards. Every barista described the problem as "too many tasks." What I saw was different: tasks were done throughout the evening, then the paperwork was reconstructed from memory at the end — because stopping mid-service to write is impossible.

Nobody mentioned this, because to them it was not a fact. It was just how it is.

![Field research notes mapping when tasks are done versus when they are recorded](/images/open-till-close/01-field-research.png "The gap between doing and recording was where the overtime lived")

### 2. Read the constraint before designing to it

Before drawing a screen I went to the rules the record has to satisfy: what a food safety inspector is entitled to see, which temperature thresholds carry legal weight, and how long records must be kept.

That changed the brief. These logs are not admin — they are evidence produced for someone else to audit. A record written from memory is a story about evidence, not evidence.

So the constraint set the target, and the user need set the solution: **how do you make recording take less effort than remembering, while producing something an inspector can rely on?**

Knowing the rules first also told me where I could be generous. Most of the app needed no controls at all, so the friction sits only on the three fields that carry legal weight.

### 3. Record at the moment of doing

One tap at the point of completion, timestamp captured automatically, multiple staff checking off at once so nobody waits for the clipboard. Temperature entry enforces the thresholds that carry legal weight rather than accepting any number.

![Task checklist and temperature entry screens](/images/open-till-close/02-app-screens.png "Recording happens in one tap, at the moment the task is done")

### 4. Design for the pace, not the demo

Touch targets and contrast are WCAG-informed as a floor. I deliberately kept some states below maximum contrast where the standard exempts them — disabled controls, decorative elements — because maximum contrast everywhere causes eye strain across a long shift.

![Token architecture and light/dark mode comparison](/images/open-till-close/03-design-system.png "Three-tier tokens, with dark mode variants brightened because the same hue reads dimmer on a dark ground")

### How it was built

The first working version came out of prompt-driven development with Claude Code, Cursor and Figma MCP.

What mattered was not speed. It was that the design system existed as a written specification a human developer and an AI tool could both read, so generated code came back on-system rather than as scaffolding that needed unpicking.

What I did not delegate: the research, the reframe, the accessibility trade-offs, and every decision with a legal consequence.

![The written design specification alongside generated screens](/images/open-till-close/04-ai-workflow.png "One specification, two builders")

## What this transfers to

In an operational environment the record is not admin overhead around the work — it is the work's evidence, and it is either designed or it is not. That holds for a fridge temperature log and for any regulated process where a colleague has to show what they did and why.
