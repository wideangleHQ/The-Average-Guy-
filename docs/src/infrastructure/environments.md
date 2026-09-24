# Environments

## Frontend (`apps/web`)

| File | Purpose |
|---|---|
| `.env.example` | Committed template — variable names only, no values |
| `.env.local` | Local dev values, git-ignored |

Variables (all `NEXT_PUBLIC_*`, safe to expose):

```text
NEXT_PUBLIC_APP_URL
NEXT_PUBLIC_API_URL
NEXT_PUBLIC_SITE_NAME
NEXT_PUBLIC_INSTAGRAM_URL
NEXT_PUBLIC_GOOGLE_MAPS_URL
```

Consumed via the typed wrapper `config/site.ts` — never read `process.env` directly
in components. Never put secrets in a `NEXT_PUBLIC_*` variable.

## Backend (`apps/api`)

Not yet initialized — no environment variables exist. When implemented, server-only
secrets (database URL, JWT secret, Supabase service-role key) will live in a
git-ignored `.env` at `apps/api`, never `NEXT_PUBLIC_*`.

## Rule

See [Security](security.md) for what must never be committed.
