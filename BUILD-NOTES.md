# BUILD-NOTES — current build review checklist

The first build is up. Before iterating on visuals, verify these specific points. They are ordered by how likely they are to be wrong.

## 1. Detail-page elements the card schema doesn't cover

The case study bodies contain elements that need explicit styles. Check each renders intentionally, not with browser defaults:

- **Tables** — `crypto-exchange` has an Outcomes table (Metric / Result / Source). Style it: no heavy grid lines, generous row height, source column muted.
- **Blockquotes** — user quotes in `crypto-exchange`. They are testimonial pull-quotes, not code-style indent blocks.
- **`####` headings** — `crypto-exchange` has `#### User behaviour flow` inside a Process step. Must render smaller than `###` but clearly a heading.
- **`## Sources`** — render smaller and muted, like footnotes. Present in `crypto-exchange`.
- **Image captions** — markdown title-in-quotes must render as a visible caption under the image. Alt text stays in the alt attribute.

## 2. Empty-gallery cards (case 05, 06)

`scam-protection` and `money-skills-kids` have `gallery: []`. Their cards must render header + description + three columns with **no image area at all** — not three grey frames. If grey frames appear, the empty-gallery branch is missing.

## 3. Placeholder behaviour

No real images exist yet. Every image slot should currently show one consistent neutral placeholder. If any slot 404s, breaks layout, or collapses to zero height, fix the fallback. Real images will drop into `public/images/{slug}/` with the exact filenames in HANDOFF.md — the build must pick them up with no code change.

## 4. Order and identity checks

- Card order matches `site.json → workOrder` exactly: open-till-close → enterprise-dashboards → crypto-exchange → contact-centre-dashboard → scam-protection → money-skills-kids.
- Routes and image paths come from frontmatter `slug`, not the `case-NN_` filename.
- `client` appears nowhere on cards or in the nav. Detail page only.
- Nav pill format: `{category} — {navLabel}` with an em dash. The pill text scrolls horizontally when long (marquee), so do not truncate with ellipsis.

## 5. Content integrity

Run a diff against the source `content/` files. Zero text changes allowed. Watch for:

- Smart-quote or dash substitution by a formatter
- "Fixed" grammar in the deliberately hedged sentences (see STRATEGY.md → Non-negotiables)
- Dropped `Source` notes next to numbers

## 6. The three headline numbers

On the work index, without opening anything, these must be readable and visually the loudest text on their cards:

- `~50% reduction in record-keeping time`
- `60% reduction in report-data retrieval time`
- `Sign-up conversion 4% → 25%`

If any of the three is below the fold inside its own card, or styled smaller than the tags, rebalance the card.

## 7. Accessibility pass

- Tag pills and the muted Sources block: check contrast against WCAG AA.
- Every image has alt text from the markdown — confirm it survives into the HTML.
- The marquee nav text: ensure it pauses on hover/focus and is readable by screen readers as static text (marquee is visual only).
- Keyboard: cards and the ↗ link reachable and focus-visible.
