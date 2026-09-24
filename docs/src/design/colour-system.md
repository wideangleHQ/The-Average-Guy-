# Colour System

Full detail: `DESIGN.md` §§4–9. This page is a quick reference — copy tokens from
`DESIGN.md` §9, do not retype them by hand.

| Token | Hex / Value | Name | Use |
|---|---|---|---|
| `--color-bg-primary` | `#0B0B0A` | Obsidian | Hero, main sections, footer, immersive sections |
| `--color-bg-secondary` | `#141412` | Charcoal | Secondary sections, cards, nav surfaces |
| `--color-bg-surface` | `#1C1A17` | Warm Graphite | Hover surfaces, modals, elevated UI |
| `--color-gold` | `#C8A96B` | Champagne Gold | Labels, accent lines, active nav, primary CTA bg |
| `--color-gold-light` | `#E1C98A` | Soft Gold | Hover states, highlighted text |
| `--color-gold-dark` | `#8F713D` | Antique Gold | Subtle borders, decorative backgrounds |
| `--color-text-primary` | `#F5F1E8` | Warm White | Headlines, primary UI text |
| `--color-text-secondary` | `#C9C3B8` | Muted Cream | Paragraphs, supporting content |
| `--color-text-muted` | `#858078` | — | Metadata, timestamps, low-priority info |
| `--color-border-gold` | `rgba(200,169,107,0.18)` | — | Primary borders |
| `--color-border-light` | `rgba(245,241,232,0.12)` | — | Secondary borders |

## Usage Ratio (guideline, not a formula)

```text
70%  Dark / Black
15%  Warm White
10%  Gold
5%   Supporting warm tones
```

## Rules

- Gold is an accent — never the dominant colour.
- Avoid pure white for major typography; use Warm White (`#F5F1E8`).
- Do not introduce colour values outside these tokens (`DESIGN.md` §9).
- Borders stay subtle — no bright gold or thick decorative borders.
