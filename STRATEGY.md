# STRATEGY — read before building

This file explains *why* the content is arranged the way it is. When a layout decision is ambiguous, resolve it in favour of what is written here.

## Who this site is for

A hiring manager or design lead recruiting a **senior product designer for regulated financial services or complex internal operational software**. Not a design-award audience. Not a general creative portfolio.

That reader is scanning for three things, in this order:

1. **Can this person handle complexity and constraint?** Regulated environments, permissions, legacy systems, risk.
2. **Did their work produce a measurable result?** Numbers with a stated source beat adjectives.
3. **Do they understand where design meets business and risk?** Not just craft.

Optimise every layout decision for a reader who gives the page **30 seconds before deciding whether to open a case study**.

## Case study priority and what each one proves

Order is fixed in `site.json → workOrder`. Do not reorder by date, and do not let the CMS sort alphabetically.

| # | Slug | What it proves | Why it is in this position |
|---|---|---|---|
| 1 | `open-till-close` | Frontline internal tooling. Constraint-first design. Ownership end to end. Hands-on AI build. | Closest structural match to the target role: staff under time pressure, records that must survive an audit. Leads because it is current and it is the strongest analogy. |
| 2 | `enterprise-dashboards` | Enterprise scale. Role-based access design. Engineering trade-offs. A hard metric. | Second because "who is allowed to see what" is a risk-and-controls signal, and 60% is the cleanest number on the site. |
| 3 | `crypto-exchange` | Fintech. Measured CX outcome. Research method under sample constraints. Design system 0→1. Mentoring. | Third, not first. The numbers are the strongest on the site, but the work is customer acquisition rather than internal tooling — so it supports the story rather than leading it. |
| 4 | `contact-centre-dashboard` | AI experience design with explainability and audit built in. | Self-initiated. Fills the one real gap: no shipped AI *feature* work. Labelled a concept everywhere it appears. |
| 5 | `scam-protection` | Vulnerable-user design. | Placeholder. In progress. |
| 6 | `money-skills-kids` | Behavioural design. | Placeholder. In progress. |

Then `selectedWork` (Marin Consulting, Kia) as short text entries — range, not depth. Then `how-i-work`.

## What must be visible without clicking

On the work index, before any card is opened, the reader must be able to see:

- **`60% reduction in report-data retrieval time`**
- **`Sign-up conversion 4% → 25%`**
- **`~50% reduction in record-keeping time`**

These three lines carry the site. They live in `outcomes[]`. If a responsive breakpoint has to drop something from the card, drop the gallery, then the tags, then `keyChallenges` — **never `outcomes`.**

## Non-negotiables

**Do not edit any text in `content/`.** Not for length, not for tone, not for grammar. Every hedge is deliberate.

Specifically, these must survive verbatim:

- `crypto-exchange.md` — *"I was not designing for compliance."* This is a boundary against overclaiming, not a weak sentence to be tidied up.
- `crypto-exchange.md` — *"This was a hypothesis until the post-launch numbers arrived."*
- `open-till-close.md` — *"Small sample, pre-launch — a direction, not a benchmark."*
- Everywhere a number appears, its source appears with it. Never render a metric with its source stripped.
- `contact-centre-dashboard.md` — the `Concept` badge and the *"self-initiated concept"* line must both be visible. Never present it as client work.

**Company names.** `client` appears in frontmatter and may be rendered. No employer of the site owner beyond that, and no name of any company being applied to, anywhere in this repo.

## Tone of the build

The content is plain and unshowy on purpose. The visual design should be too: generous whitespace, strong typographic hierarchy, restrained colour, no scroll-jacking, no decorative animation on case study text.

The one place to spend visual effort is **the outcome numbers** — they should be the largest non-heading type on a card.

Accessibility is not optional here. The site argues that its author designs accessibly; a portfolio that fails WCAG AA contradicts its own content. Check contrast on the tag pills and the muted `Sources` block specifically.

## When adding case 4, 5 or 6 later

New images arrive in `public/images/{slug}/`. When a placeholder case study gets real content:

1. Change `badge` from `In progress` to `Concept`.
2. Populate `gallery` with 1 large + 2 small.
3. Replace both `outcomes` lines — they currently say "in development".
4. Leave `workOrder` alone unless told otherwise.

Do not promote a concept above a shipped case study.
