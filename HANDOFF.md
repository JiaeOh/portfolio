# Portfolio content — build instructions

Content is finished and final. **Do not rewrite, shorten, paraphrase or "improve" any text** in `content/`. Build the layout around it exactly as written.

## Folder structure

```
content/
  site.json                    global config, nav, about, skills, card schema
  projects/*.md                one case study per file
  pages/how-i-work.md          standalone page
public/images/{slug}/          images, referenced from the markdown
```

## How a project file works

Each `.md` file has YAML frontmatter and a markdown body. They render in two different places:

- **Frontmatter → the card** on the work index
- **Body → the detail page** at `/work/{slug}`

Never render body markdown on a card. Never invent card content from the body.

## Card layout

```
{category} • {platform} • {year}                              ↗ (link to detail)

{title}                                                       [{badge}]

{description}

┌──────────────────────┬────────────┬────────────┐
│  gallery[0]  large   │ gallery[1] │ gallery[2] │
│                      │   small    │   small    │
└──────────────────────┴────────────┴────────────┘

Role & Timeline          Key Challenges              Outcomes
{roleTitle}              • {keyChallenges[0]}        • {outcomes[0]}
{timeline}               • {keyChallenges[1]}        • {outcomes[1]}

[tags[0]] [tags[1]] [tags[2]] [tags[3]]
```

Rules:

- **`client` never renders on the card or in navigation.** It appears only inside the detail page — Role & Timeline block or an overview table. Cards and nav identify work by what it is, not who it was for.
- Top navigation pill per case study: `{category} — {navLabel}` (em dash separator). Use `navLabel`, never `title` (titles are too long for the pill).
- `keyChallenges` and `outcomes` are always exactly 2 items. Do not pad or truncate.
- `tags` are always exactly 4, rendered as pills.
- `gallery` is 1 large + 2 small. **If `gallery` is empty, render the header, description and the three columns only** — no empty image frames.
- `badge` values and styles: `Shipped` neutral · `Pre-launch` accent · `Concept` outline · `In progress` outline-muted.
- Card order comes from `site.json → workOrder`, not from the filesystem.

## Detail page

Render the body markdown. Heading vocabulary used across files:

- `## Overview`
- `## Research` (optional)
- `## Process` with `### 1. …`, `### 2. …` steps, and optional `#### …` blocks inside a step
- `## Outcomes` (may contain a table)
- `## What this transfers to`
- `## Sources` (optional — render smaller and muted)

Any `##`, `###` or `####` must render. Do not hard-code a fixed set.

## Images

Body images use standard markdown: alt text in brackets, caption in quotes.

```md
![alt text for screen readers](/images/crypto-exchange/01-as-is-to-be.png "Visible caption")
```

Render the caption below the image. Never drop the alt text.

**Video:** an image reference ending in `.mp4` renders as `<video autoplay loop muted playsinline>` with the same caption treatment as images. No controls chrome, no sound. These replace GIFs at ~1/25th the weight.

**Video in the card gallery:** a gallery entry may be an `.mp4` with a `poster` field. The large slot autoplays muted on loop, with the poster shown until the video is ready. The small slots keep the existing hover-expand behaviour; if a small slot is a video, it stays paused until hover.

**Card columns are fixed:** Role & Timeline / Key Challenges / Outcomes — all three always render. `roleTitle` and `timeline` fill the first column; `client` never appears on the card. `keyChallenges` and `outcomes` are exactly 2 bullets each — if injected content and placeholder content disagree, the injected content wins and placeholders must be deleted.

## Pages

`content/pages/how-i-work.md` is a standalone page at `/how-i-work`, linked from the nav in `site.json`. It has no card and no frontmatter beyond `title`, `subtitle`, `type`, `order`.

## site.json

- `nav` — nav items in order
- `about`, `skills`, `contact`, `seo` — self-explanatory
- `selectedWork` — a short section under the case studies. Text entries with one image each, not full cards.
- `workOrder` — the order case study cards appear in
- `cardSchema` — reference copy of the rules above

## Images still needed

Drop files into `public/images/{slug}/` using these exact names.

| Folder | Files |
|---|---|
| `open-till-close/` | `00-cover` `01-app-screens` `02-field-research` `03-design-system` `04-ai-workflow` |
| `enterprise-dashboards/` | `00-cover` `01-dashboard` `02-access-model` `03-colour-hierarchy` |
| `crypto-exchange/` | DONE except `05-flow-before` `05-flow-after` (diagrams) and `00-hero.mp4` + `00-hero-poster.jpg` (hero video, coming) |
| `contact-centre-dashboard/` | `00-cover` `01-summary-panel` `02-states` `03-correction` |
| `scam-protection/` | `00-cover` |
| `money-skills-kids/` | `00-cover` |
| `selected/` | `marin-01` `kia-01` |

Missing images should render as a neutral placeholder, not break the build.
