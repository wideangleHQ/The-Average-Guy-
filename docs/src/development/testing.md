# Testing

**Status: no test suite exists yet** — the project has no automated tests
(frontend or backend).

## Current Validation (frontend)

```bash
npm run lint --workspace=web
npx tsc --noEmit           # from apps/web
npm run build --workspace=web
```

All three must pass before a change is considered done — see
[Definition of Done](ai-development.md#14-definition-of-done).

## When to Add Automated Tests

Add tests when non-trivial logic appears — a data transform, a validation rule, an
API handler, a parser. Do not scaffold a test framework speculatively ahead of that;
add the minimum runnable check alongside the logic it covers (see
[QA Checklist](../qa/checklist.md) for manual QA in the meantime).

## Manual QA (per SRS §10, until then)

- Test primary pages and navigation on desktop and mobile.
- Validate all approved content.
- Test links, forms, maps, social links, media.
- Check accessibility basics, SEO metadata, image optimization, responsiveness.
- Resolve critical/high-severity defects before launch unless accepted by the client.
