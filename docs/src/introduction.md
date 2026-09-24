# THE AVERAGE GUY — Project Documentation

This is the technical and product knowledge base for **THE AVERAGE GUY**, a premium
community-centric café website. It is written for three audiences:

- **Developers** — architecture, frontend, backend, database, API, deployment, security.
- **Designers** — the design system, typography, colour, components, motion.
- **AI coding agents** (Claude, Antigravity, Cursor, etc.) — what to build, what not to
  build, and the rules that keep implementation consistent with prior decisions.

## Core Concept

> "We are building a community."

The site should feel like a warm neighbourhood café presented through a premium
editorial lens — dark, warm, cinematic, minimal, human. See
[Design System](design/design-system.md) for the full visual language.

## Document Ownership

Each topic has exactly one authoritative source. Do not duplicate a requirement across
documents — reference the owner instead.

| Topic | Owner |
|---|---|
| Project identity & scope | [Project Brief](project/brief.md), [Scope](project/scope.md) |
| Functional/non-functional requirements | [Requirements](project/requirements.md) (sourced from `THE_AVERAGE_GUY_SRS_v1.0.pdf`) |
| Routes | [Sitemap](project/sitemap.md) |
| Visual design | `/DESIGN.md` (repo root) — this book's design pages summarize and link to it |
| Frontend architecture | [Frontend Architecture](frontend/architecture.md) |
| Backend architecture | [Backend Architecture](backend/architecture.md) |
| Database | [Database Architecture](database/architecture.md) |
| API | [API](backend/api.md) |
| Admin/CMS | [Admin Overview](admin/overview.md) |
| Infrastructure | [Technology Stack](infrastructure/tech-stack.md), [Deployment](infrastructure/deployment.md) |
| AI development rules | [AI Development](development/ai-development.md), root `/AGENTS.md` |

## Current Implementation Status

- **Frontend environment** (`apps/web`): set up — Next.js, TypeScript, Tailwind, folder
  architecture, SEO foundation, env config.
- **Backend** (`apps/api`): not yet initialized — placeholder folder only.
- **Database**: not yet provisioned.
- **UI**: minimal placeholder home page only; feature pages and the full design system
  are not yet implemented.

This status is authoritative here and should be updated as phases complete — see
[Development Workflow](development/workflow.md).
