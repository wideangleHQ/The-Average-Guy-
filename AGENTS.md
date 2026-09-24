# THE AVERAGE GUY — AI DEVELOPMENT GUIDE

## Before You Code

1. Read this file.
2. Read the relevant documentation in [`docs/src`](docs/src/introduction.md)
   (build with `mdbook serve docs` or `mdbook build docs`).
3. Read [`DESIGN.md`](DESIGN.md).
4. Inspect the existing implementation.
5. Follow the documented architecture.

## Source of Truth

| Topic | Source |
|---|---|
| Project | `docs/src/project/` |
| Design | `DESIGN.md` (docs/src/design/ summarizes it) |
| Frontend | `docs/src/frontend/` |
| Backend | `docs/src/backend/` |
| Database | `docs/src/database/` |
| API | `docs/src/backend/api.md` |
| AI development rules | `docs/src/development/ai-development.md` (full rules) |

## Rules

- Do not invent requirements.
- Do not redesign unrelated areas.
- Reuse existing components.
- Follow the design system.
- Protect secrets.
- Do not bypass the NestJS API.
- Validate changes before completion.
- Update documentation when architecture changes.

## Definition of Done

Run the appropriate typecheck, lint, and build checks — see
`docs/src/development/ai-development.md#14-definition-of-done`.
