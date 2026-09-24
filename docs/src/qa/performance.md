# Performance

Per NFR-001 and `DESIGN.md` §42.

## Priorities

- Optimized, responsive images; lazy loading where appropriate.
- Font optimization (Next.js font loading, as already used for Geist in the current
  scaffold — swap for Cormorant Garamond / DM Sans in Phase 2, see
  [Typography](../design/typography.md)).
- Minimized/limited JavaScript.
- GPU-friendly transforms for animation, not layout-triggering properties.
- Proper caching.
- Minimal third-party dependencies.
- Mobile performance is a first-class priority, not an afterthought.

## Rule

Do not add an animation or library because it looks impressive — every dependency
must justify itself against the [Coding Standards](../development/coding-standards.md)
"avoid unnecessary dependencies" rule.
