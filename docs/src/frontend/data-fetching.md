# Data Fetching

## Current State

No live data fetching exists yet — `lib/api/client.ts` only reserves
`apiBaseUrl` (from `NEXT_PUBLIC_API_URL`) for when the backend API exists. There are
no endpoints, no mock responses, and no fake data in the codebase.

## Rules (once the backend exists)

- Prefer fetching in **Server Components** (`fetch` with Next.js caching, or a typed
  client in `lib/api/`) over client-side fetching.
- Use Client Components + client-side fetching only for genuinely interactive data
  (e.g. live-updating community wall, form submission feedback).
- Centralize API calls in `lib/api/` — never hardcode endpoint URLs inside
  components; always go through `NEXT_PUBLIC_API_URL` via `config/site.ts`.
- Type every API response against shared types (`types/`), once backend contracts
  exist — see [Database Schema](../database/schema.md) and [API](../backend/api.md).
- Define loading and error states for every data-dependent UI.

## Never

- Never call PostgreSQL or Supabase directly from the browser — all data flows
  through the NestJS API. See [Backend Architecture](../backend/architecture.md).
