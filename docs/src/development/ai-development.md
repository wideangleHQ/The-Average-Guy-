# AI Development

How Claude, Antigravity, Cursor, and other AI coding agents should work on THE
AVERAGE GUY. This is the most-referenced page in this book — root `/AGENTS.md` points
here.

## 1. Before Modifying Code

1. Read `/AGENTS.md` if available.
2. Read the relevant page(s) in this book.
3. Read `/DESIGN.md` for anything visual.
4. Inspect the existing repository structure.
5. Inspect existing components before creating new ones.
6. Inspect existing APIs before creating new endpoints.
7. Inspect existing database models before creating new models.
8. Understand the current implementation before changing it.

## 2. AI Agents Must

- Follow the documented architecture (this book) and `/DESIGN.md`.
- Reuse existing components and utilities.
- Follow existing naming conventions.
- Avoid unnecessary dependencies and abstractions.
- Keep business logic out of presentation components.
- Keep API logic out of UI components where possible.
- Keep database access inside the backend only.
- Keep secrets server-side.
- Preserve existing project structure unless there is a documented reason to change
  it.
- Ask for clarification when requirements conflict.
- Update documentation when architectural behaviour changes.
- Test affected functionality; run type checking, linting, and a production build
  where appropriate.

## 3. AI Must Not

- Invent business requirements.
- Invent production content when approved content exists.
- Randomly redesign existing pages.
- Introduce a new colour palette or font outside `/DESIGN.md`.
- Add unnecessary animations, gradients, glassmorphism, or 3D effects.
- Add unnecessary dependencies.
- Access PostgreSQL directly from the browser.
- Expose Supabase service-role credentials.
- Hardcode secrets or production API URLs.
- Create duplicate components without justification.
- Change architecture merely to make a task easier.
- Rewrite unrelated modules or perform large refactors without explicit
  justification.
- Claim a feature is complete without validating it.

## 4. Design Rules

Full detail: [Design System](../design/design-system.md), `/DESIGN.md`. Summary:

- Dark/black is the primary foundation; gold is a restrained accent.
- Warm white replaces harsh pure white for major typography.
- Cormorant Garamond = emotional/display; DM Sans = functional/UI.
- Photography: warm, cinematic, human.
- Generous negative space; prefer editorial composition over repetitive card grids.
- Avoid generic restaurant templates, excessive rounded cards, excessive gradients,
  excessive animation.

> Gold is a whisper, not a shout.

## 5. Content Rules

- Distinguish approved content, draft content, placeholder content, and generated
  temporary content.
- If approved content exists, do not rewrite it unless specifically instructed.
- If content is missing, use an explicit placeholder or request clarification.
- Never silently invent business claims, pricing, event details, opening hours, or
  other factual information.

## 6. Architecture Rules

```text
Next.js → NestJS API → PostgreSQL / Supabase
```

Never `Browser → PostgreSQL`. See [Technology Stack](../infrastructure/tech-stack.md).

## 7. Frontend Rules

See [Coding Standards](coding-standards.md) and
[Frontend Architecture](../frontend/architecture.md).

## 8. Backend Rules

See [Backend Architecture](../backend/architecture.md), [API](../backend/api.md).

## 9. Database Rules

See [Database Architecture](../database/architecture.md).

## 10. API Rules

Versioned (`/api/v1`), split into `/public` (published content only) and `/admin`
(protected). See [API](../backend/api.md).

## 11. Security Rules

See [Security](../infrastructure/security.md).

## 12. Performance & Accessibility Rules

See [Performance](../qa/performance.md) and [Accessibility](../qa/accessibility.md).

## 13. Out-of-Scope Protection

Do not automatically implement: e-commerce, food ordering, delivery, POS, custom
payment processing, custom form builder, complex loyalty systems, automatic Instagram
publishing, microservices, Redis, background workers — unless a future requirement
explicitly introduces them. See [Scope](../project/scope.md).

## 14. Definition of Done

Do not report a task complete merely because code was written. Before completion,
verify where applicable:

```text
[ ] Requirements understood
[ ] Existing implementation inspected
[ ] Design system followed
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

Full checklist: [QA Checklist](../qa/checklist.md).

## 15. If You Encounter an Issue

Investigate the root cause and fix it properly. Do not apply quick hacks, hardcode
environment-specific values, disable TypeScript/ESLint, use `@ts-ignore`, bypass build
errors, or modify the architecture simply to make a command pass.
