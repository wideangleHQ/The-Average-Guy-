# The Average Guy

Premium, community-centric café website. Central idea: **"We are building a community."**

Full project documentation — architecture, design system, API, and AI development
rules — lives in the [`docs/`](docs/src/introduction.md) mdBook. Start there for
anything beyond quick setup.

## Current Phase

Frontend environment and architecture setup. **UI implementation has not started** —
see [Development Workflow](docs/src/development/workflow.md) for the full phase plan.

## Tech Stack

| Layer | Technology | Status |
|---|---|---|
| Frontend | Next.js, React, TypeScript, Tailwind CSS | Implemented (`apps/web`) |
| Backend | NestJS, REST API | Planned (`apps/api` — placeholder only) |
| Database | PostgreSQL (via Prisma) | Planned |
| Platform | Supabase (DB + Storage) | Planned |
| Deployment | Vercel (frontend), Railway (backend) | Planned |

Details: [Technology Stack](docs/src/infrastructure/tech-stack.md).

## Project Structure

```text
the-average-guy/
├── apps/
│   ├── web/            Next.js frontend
│   └── api/             empty placeholder for the future NestJS backend
├── docs/                 mdBook documentation (architecture, design, API, AI rules)
├── DESIGN.md              approved visual design system (source of truth)
├── AGENTS.md               AI agent development guide
├── package.json            npm workspaces root
└── README.md                this file
```

## Prerequisites

- [Node.js](https://nodejs.org/) 20+ and npm (bundled with Node)
- [Rust + Cargo](https://rustup.rs/) and [mdBook](https://rust-lang.github.io/mdBook/) — only if you want to build/serve the docs locally:

  ```bash
  cargo install mdbook
  ```

## Getting Started

```bash
git clone <repo-url>
cd "The Average Guy"
npm install
```

### Run the Web App (`apps/web`)

```bash
npm run dev --workspace=web       # dev server → http://localhost:3000
npm run build --workspace=web     # production build
npm run start --workspace=web     # run the production build
npm run lint --workspace=web      # ESLint
```

Copy `apps/web/.env.example` to `apps/web/.env.local` and fill in values before
running. See [Environments](docs/src/infrastructure/environments.md) for what each
variable does.

### Run the API (`apps/api`)

Not yet implemented — `apps/api` is currently an empty placeholder for the future
NestJS backend. There is nothing to run here yet. See
[Backend Architecture](docs/src/backend/architecture.md) for the planned design.

### Run the Documentation

```bash
mdbook serve docs --open   # live-reloading local server, default http://localhost:3000
```

Or build a static copy without serving it:

```bash
mdbook build docs          # output in docs/book/ (git-ignored), open docs/book/index.html
```

Note: `mdbook serve` and `npm run dev --workspace=web` both default to port 3000 — run
one at a time, or pass `mdbook serve docs --port <port>` to avoid a clash.

## Documentation

| Topic | Location |
|---|---|
| Project brief, requirements, sitemap, scope | [`docs/src/project/`](docs/src/project/brief.md) |
| Visual design system | [`DESIGN.md`](DESIGN.md) (summarized in [`docs/src/design/`](docs/src/design/design-system.md)) |
| Frontend architecture | [`docs/src/frontend/`](docs/src/frontend/architecture.md) |
| Backend architecture (planned) | [`docs/src/backend/`](docs/src/backend/architecture.md) |
| Database (planned) | [`docs/src/database/`](docs/src/database/architecture.md) |
| Infrastructure & deployment | [`docs/src/infrastructure/`](docs/src/infrastructure/tech-stack.md) |
| AI agent development rules | [`docs/src/development/ai-development.md`](docs/src/development/ai-development.md), [`AGENTS.md`](AGENTS.md) |
| QA checklist | [`docs/src/qa/checklist.md`](docs/src/qa/checklist.md) |

## Contributing

Before making changes, read [`AGENTS.md`](AGENTS.md) and
[AI Development Rules](docs/src/development/ai-development.md) — they apply to human
contributors and AI coding agents alike. In short: inspect the existing implementation
before adding to it, follow the documented architecture and `DESIGN.md`, and keep
TypeScript/ESLint/build passing before calling anything done.
