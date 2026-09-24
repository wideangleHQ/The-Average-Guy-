# Frontend Components

The design system's component catalogue is defined in
[Design → Components](../design/components.md). This page covers where components
live in code, not their visual spec.

## Placement

| Kind | Location |
|---|---|
| Generic, reusable, no domain knowledge | `components/ui/` |
| Layout shells (header, footer, nav) | `components/layout/` |
| Cross-feature shared pieces | `components/shared/` (or `components/sections/` for page sections) |
| Domain-specific (Menu card, Event card, Community post) | `features/<domain>/` |

## Rules

- Check [Design Consistency Rule](../design/components.md#consistency-rule) before
  creating anything new — reuse over duplication.
- Typed props, no `any`.
- Presentational components stay presentational — no business logic or direct API
  calls inside them; fetch in the page/Server Component and pass data down, or use
  `lib/api/` for client-side calls.
- Accessible by default: semantic elements, visible focus states, alt text — see
  [Accessibility](../qa/accessibility.md).
