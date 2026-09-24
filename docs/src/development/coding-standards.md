# Coding Standards

## TypeScript

Strict mode. Avoid `any`, unnecessary type assertions, unsafe casting, `@ts-ignore`,
`@ts-expect-error`. Do not create domain types (Menu, Events, Members, Community,
Products) speculatively — define them once backend contracts exist
(see [Database Schema](../database/schema.md)).

## Frontend

- Server Components by default; Client Components only where interaction requires it.
- No unnecessary global state or state-management library.
- Feature-based organization — see [Project Structure](../frontend/project-structure.md).
- No giant page components, repeated markup, or business logic inside presentational
  components.
- No hardcoded API endpoints — go through `lib/api/` and `config/site.ts`.

## Backend (once implemented)

DTOs, services, controllers, guards, validation, proper error handling, versioned
APIs. No business logic in controllers; no database logic scattered across modules —
see [Backend Architecture](../backend/architecture.md).

## General

- ESLint + TypeScript compilation must pass.
- Clean import structure, no duplicate utilities, no premature abstraction.
- Avoid unnecessary dependencies — check stdlib/native/already-installed options
  first.
