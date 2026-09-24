# Authentication

**Status: planned, not implemented.**

## Scope

Authentication is required for administrator/content-manager access only (SRS §3);
there is no public user account system in the confirmed requirements — guests browse
without signing in.

## Rules

- JWT-based session handling in NestJS, once implemented.
- Auth secrets (JWT secret, Supabase service-role key) stay server-side, in
  environment variables — never committed, never exposed to the frontend. See
  [Security](../infrastructure/security.md).
- The frontend never handles credentials directly against Supabase/Postgres — all
  auth flows go through the NestJS API.

## Not Yet Defined

Concrete auth provider choice (Supabase Auth vs. custom), token expiry, and refresh
strategy are TBD until the backend implementation phase.
