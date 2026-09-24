# Responsive Design

Full detail: `DESIGN.md` §§38–41.

## Mobile Is Not a Scaled-Down Desktop

Mobile layouts must be intentionally composed. Priority order: typography → content
hierarchy → touch targets → image composition → performance → simplified interactions.

## Mobile Navigation

Desktop nav collapses into a dedicated mobile pattern:

```text
THE AVERAGE GUY                    MENU
```

The mobile menu provides access to: Menu, What's On, Regulars, Community, Products,
Visit.

## Mobile Typography

Large desktop typography scales down while preserving hierarchy. Never allow
horizontal overflow, extremely long lines, or oversized text that dominates the
viewport unnecessarily. Cormorant Garamond stays visually expressive on mobile.

## Accessibility (cross-cutting with responsive)

Strong text contrast, visible focus states, keyboard navigation, accessible
buttons/form labels, meaningful alt text, touch-friendly controls, reduced-motion
support. **Gold must never be the only indicator of state.** See
[Accessibility](../qa/accessibility.md) for the full checklist.
