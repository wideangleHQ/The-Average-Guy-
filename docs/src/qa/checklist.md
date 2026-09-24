# QA Checklist

## Definition of Done (per change)

```text
[ ] Requirements understood
[ ] Existing implementation inspected
[ ] Design system followed (/DESIGN.md)
[ ] Existing components reused
[ ] TypeScript passes
[ ] ESLint passes
[ ] Build passes
[ ] No obvious console errors
[ ] No hydration errors
[ ] Responsive behaviour checked
[ ] Accessibility considered
[ ] API behaviour checked
[ ] Database changes validated
[ ] Documentation updated if necessary
```

## Design Quality Check (per page, from `DESIGN.md` §46)

- **Brand:** feels like THE AVERAGE GUY, premium, warm, community visible.
- **Colour:** dark dominant, gold selective, warm rather than pure white.
- **Typography:** Cormorant Garamond for emotion, DM Sans for function, clear
  hierarchy.
- **Layout:** enough negative space, editorial composition, avoids repetitive card
  grids.
- **Photography:** authentic, warm, atmospheric.
- **Motion:** adds meaning, subtle, respects reduced motion.
- **Responsive:** mobile intentionally designed, comfortable touch targets, readable
  typography.

## Pre-Launch (SRS §10–11)

- Primary pages and navigation tested on desktop and mobile.
- All approved content validated.
- Links, forms, maps, social links, and media tested.
- Accessibility basics, SEO metadata, image optimization, responsiveness checked.
- Hosting, domain, SSL, backups, analytics confirmed.
- Critical/high-severity defects resolved (see severity table in
  [Requirements](../project/requirements.md)).
