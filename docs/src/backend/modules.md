# Modules

**Status: planned, not implemented.** Reserved module boundaries for the future
NestJS app, aligned to [Requirements](../project/requirements.md) and
[Admin Overview](../admin/overview.md).

| Module | Owns |
|---|---|
| Auth | Login, sessions/JWT, admin authentication |
| Users | Admin/staff accounts, roles |
| Menu | Categories, items, prices, bestseller flags (FR-MEN-*) |
| Events | Event CRUD, status, moments (FR-EVT-*) |
| Community | Community wall posts, moment of the day, moderation (FR-COM-*) |
| Products | Upcoming/coming-soon products (FR-PRD-*) |
| Regulars / Membership | Future scope — not in the confirmed SRS sitemap, see [Sitemap](../project/sitemap.md) |
| Notifications | Reserved; no priority-notification features are in scope (SRS §13) |
| Admin / CMS | Cross-cutting publishing/moderation workflow, permissions |

## Rule

Before creating a new module or entity, check whether an existing module already
covers the requirement — see [Database Architecture](../database/architecture.md).
Do not add modules speculatively; each must trace to a requirement in
[Requirements](../project/requirements.md).
