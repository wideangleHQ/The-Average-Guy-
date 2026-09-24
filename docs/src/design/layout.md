# Layout

Full detail: `DESIGN.md` §§15–19.

## Spacing Scale

```text
4  8  12  16  24  32  48  64  80  96  120  160  200   (px)
```

Prefer these values over arbitrary spacing.

## Section Spacing (vertical)

| Breakpoint | Range |
|---|---|
| Desktop | 120px–200px |
| Tablet | 96px–140px |
| Mobile | 72px–100px |

Reduce only for intentionally compact sections.

## Grid

| Breakpoint | Columns |
|---|---|
| Desktop | 12-column, max content width 1440px, ~5vw horizontal padding |
| Tablet | 8-column |
| Mobile | 4-column |

Not every section needs the same grid — some should intentionally be full-bleed,
centered, asymmetric, image-led, or typography-led.

## Philosophy

**Prefer:** large negative space, editorial alignment, asymmetry, large typography,
full-width imagery, layered/overlapping compositions.

**Avoid:** repetitive card grids, everything centered, equal spacing everywhere,
generic SaaS layouts, excessive boxed sections.

## Border Radius

```text
Small: 6px   Medium: 12px   Large: 20px   Pill: 999px
```

Not every component needs rounding — editorial elements may use sharp corners
intentionally.
