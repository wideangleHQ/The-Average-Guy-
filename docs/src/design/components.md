# Components

Full detail: `DESIGN.md` §§20–27, 43–44.

## Consistency Rule

Before creating a new component, ask: **does an existing component already solve
this?** If yes, reuse it. If no, create a reusable component — not a page-specific
one. Cross-reference [Frontend Components](../frontend/components.md) for where these
live in code.

## Core Component Set

```text
Button  SectionHeader  Eyebrow  EventCard  MenuCard  ProductCard
CommunityCard  ImageCard  CTA  Badge  Modal  Navigation  Footer
```

Do not create near-duplicate variants without a documented design requirement.

## Buttons

| Variant | Style |
|---|---|
| Primary | Background `#C8A96B`, text `#0B0B0A`. Hover: bg `#E1C98A`, `translateY(-1px)`. |
| Secondary | Transparent bg, border `rgba(245,241,232,0.18)`, text `#F5F1E8`. Hover: border `rgba(200,169,107,0.5)`, text `#E1C98A`. |
| Text CTA | No container, gold text, animated underline, subtle arrow movement on hover. |

## Navigation

Desktop: `THE AVERAGE GUY` (brand, stronger visual presence) — Menu / What's On /
Regulars / Community / Products — Visit Us.

States: default Warm White/Muted Cream → hover Soft Gold → active Champagne Gold
(subtle). Transparent until scroll, then `rgba(11,11,10,0.85)` with subtle backdrop
blur — avoid heavy glassmorphism.

## Cards

Structure: `IMAGE → EYEBROW → TITLE → DESCRIPTION → METADATA/CTA`. Dark surface,
subtle border, large imagery, warm typography, small gold details. Avoid thick
borders, bright gold backgrounds, excessive shadows/badges.

## Forms & Modals

Inputs: bg `#141412`, border `rgba(245,241,232,0.15)`, text `#F5F1E8`, focus border
`#C8A96B`, placeholder `#858078`. Modals: bg `#141412`, border
`rgba(200,169,107,0.18)`, overlay `rgba(0,0,0,0.65)`, subtle backdrop blur only.

## Iconography

Lucide Icons — minimal, clean, rounded, ~1.5px weight. Warm white/muted cream by
default; gold indicates active/special state only.
