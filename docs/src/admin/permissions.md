# Admin — Permissions

**Status: planned.** See [Authorization](../backend/authorization.md) for the
enforcement mechanism (NestJS Guards).

Minimal role model until requirements say otherwise:

| Role | Access |
|---|---|
| Guest | Public API only, no admin routes |
| Admin / Content Manager | Admin API — manage/moderate menu, events, community, products |

More granular roles (e.g. per-module permissions, audit-log access) are TBD pending
CMS scope confirmation (SRS §6).
