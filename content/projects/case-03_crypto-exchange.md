---
slug: crypto-exchange
category: "Fintech"
platform: "Web App Platform"
navLabel: "Cryptocurrency Trading Web App"
year: "2024"
title: "Cryptocurrency Trading Web App Platform"
description: "A new exchange with no track record, asking cautious users to commit before showing anything. I rebuilt the first screen around trust rather than persuasion."
badge: "Shipped"
client: "Custom Connect — cryptocurrency exchange startup"
featured: true
order: 3
cover: "/images/crypto-exchange/00-cover.png"
gallery:
  - { src: "/images/crypto-exchange/00-hero.mp4", poster: "/images/crypto-exchange/00-hero-poster.jpg", alt: "Walkthrough of the Lazex platform", size: "large" }
  - { src: "/images/crypto-exchange/07-futures-dark.jpg", alt: "Futures trading screen, dark mode", size: "small" }
  - { src: "/images/crypto-exchange/06-community.jpg", alt: "Community feed beside the trading chart", size: "small" }
roleTitle: "Product Designer"
timeline: "14 months • Junior Designer, PM, 8 Developers"
keyChallenges:
  - "No reason for users to leave exchanges they already trusted"
  - "Too few users to research at scale, pre-launch"
outcomes:
  - "Sign-up conversion 4% → 25%, tracked in Google Analytics"
  - "Average session duration 45s → 120s after relaunch"
tags: [Mixed-Method Research, Conversion, Design System, Mentoring]
---

## Overview

We launched Lazex, a crypto exchange built to look like the established players. It gained no traction. Visitors arrived, looked, and left in under a minute.

The team read this as a call-to-action problem. The evidence said otherwise.

## Research

The platform was live but pre-launch, with a small closed group of testers. That gave me one kind of evidence directly and forced me to borrow the other.

**Qualitative, from the testers I could reach.** I interviewed them about what made them hesitate. Small sample, no statistical weight — but it produced the language users actually used, and that is where the hypothesis came from.

**Population-scale, from published studies.** With no user base large enough to survey, I checked whether what a handful of testers said held more broadly.

- Pew Research Center (March 2023, 10,701 US adults): among those aware of crypto, **75% had little or no confidence** that current ways to invest in, trade or use it are reliable and safe. Only 6% were confident.
- Consensys / YouGov (2023, 15,158 respondents across 15 countries): the top barriers to entry were **market volatility (48%), fear of scams (44%) and ecosystem complexity (36%)**. 92% had heard of crypto; 8% felt familiar with web3.

Both said the same thing our testers did: hesitation was about trust and comprehension, not about the interface being unpersuasive.

**What I did not have.** No usability testing at scale, and no way to A/B the change. This was a hypothesis until the post-launch numbers arrived, and I would describe it that way in a review.

### Regulatory context

The project ran alongside Korea's Virtual Asset User Protection Act — enacted July 2023, in force July 2024 — which required exchanges to safeguard user deposits, prohibit unfair trading and disclose material information.

I was not designing for compliance. But it confirmed the direction: the market was moving from *claiming* trustworthiness to *evidencing* it. Opening real, live market data to people without an account is the interface-level version of the same move.

## Process

### 1. Engage — give something before asking for something

**Root cause.** The first screen held a slogan, an image and a sign-up form. That was everything a visitor could get. For someone already on a trusted exchange, leaving was easier than signing up.

**What I did.** I rebuilt it around live market data — current prices, 24-hour volume, market cap, top gainers and losers, trending coins, ranked traders' performance — all visible without an account.

![Original landing page: slogan, image and a sign-up form](/images/crypto-exchange/01-before-landing.jpg "AS-IS — everything a visitor could get without an account")

![Redesigned landing page with live market data open to logged-out users](/images/crypto-exchange/02-after-landing.jpg "TO-BE — the live market first, sign-up later")

![Browsing coins and live data without an account](/images/crypto-exchange/04-step1-explore.mp4 "Step 1 · Explore — real market data, no account needed")

### 2. Join — make sign-up a step, not a door

**Root cause.** Sign-up was requested before any trust existed. Users had watched exchanges collapse; caution was rational, not a UX flaw.

**What I did.** I moved authentication to the point where it is genuinely required — placing a trade. The account request now arrives after the product has proved itself.

![Sign-up flow entered mid-journey](/images/crypto-exchange/04-step2-signup.mp4 "Step 2 · Join — the account request arrives after the product has proved itself")

#### User behaviour flow

**Before** — the only two outcomes were commit or leave, and leaving was cheaper.

![Predicted user behaviour flow before the redesign](/images/crypto-exchange/05-flow-before.png "AS-IS: Landing → Input email → Sign up, or Landing → Leave")

**After** — exploring became a real third option, and sign-up became the step that unlocks what the user already wants.

![Predicted user behaviour flow after the redesign](/images/crypto-exchange/05-flow-after.png "TO-BE: Landing → Check information → More information → Sign up → Trade")

### 3. Build — give a reason to come back between trades

**Root cause.** Traders visit an exchange when they trade. Beginners had no reason to visit at all, and nowhere to learn without leaving.

**What I did.** With marketing, I added a content and community area beside the trading interface — loss-minimising guidance, trending coin explainers, platform updates.

![Community feed and posts beside the live chart](/images/crypto-exchange/04-step3-community.mp4 "Step 3 · Stay — trending posts and discussion next to the trading interface")

![The logged-in home after redesign: wallet, market and community in one view](/images/crypto-exchange/03-after-login-home.jpg "After sign-up, the same information density carries through")

### Beyond the screens

I built the design system from scratch to keep engineering consistent, then used it to onboard a junior designer as the team grew. I also ran stakeholder and investor sessions, translating between English and Korean, and fed that feedback into the roadmap. Those sessions contributed to securing additional investment.

## Outcomes

| Metric | Result | Source |
|---|---|---|
| Sign-up conversion | 4% → 25% | Google Analytics |
| Average session duration | 45s → 120s | Google Analytics |
| Trading activity | Grew after relaunch | Engineering team; not instrumented by me |

> "Now I check it regularly, kinda like reading the news." — tester, 5 years' trading experience

> "I didn't have a reason to switch exchanges, but I ended up here because of the info." — tester, 1 year's experience

## What this transfers to

Low conversion is often read as a persuasion problem when it is a trust problem. The fix was not a better button — it was deciding what to give away before asking for commitment. That question applies wherever a regulated service asks a cautious person to take a first step.

## Sources

- Pew Research Center, *Majority of Americans aren't confident in the safety and reliability of cryptocurrency* (April 2023)
- Consensys / YouGov, *Global Survey on Crypto and Web3* (2023)
- Korea Financial Services Commission, *Act on the Protection of Virtual Asset Users* (enacted July 2023, effective July 2024)
