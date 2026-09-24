# Authorization

**Status: planned, not implemented.**

## Model

Role-based, minimally: `guest` (no auth, public API only) and `admin` (authenticated,
admin API). See [Permissions](../admin/permissions.md) for the admin-side breakdown
per module.

## Rules

- Enforce authorization with NestJS Guards on controllers — not ad hoc checks
  scattered through services.
- Admin API routes (`/api/v1/admin/*`) must be protected; public routes
  (`/api/v1/public/*`) must never require or leak admin-only data.
- Do not expose internal stack traces or unauthorized data in error responses
  (see [Security](../infrastructure/security.md)).
