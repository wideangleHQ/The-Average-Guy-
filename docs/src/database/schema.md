# Schema

**Status: TBD.** No Prisma schema exists yet — this page will hold the entity
definitions once the backend implementation phase begins.

## Expected Entities (from confirmed requirements)

Derived from [Requirements](../project/requirements.md) — field lists are indicative,
not final:

- **MenuItem** — name, image, description, price, category, bestseller flag (FR-MEN-002)
- **Event** — title, date/time, description, image/poster, status, moments (FR-EVT-002)
- **EventMoment** — media, caption, display order
- **CommunityPost** — media, caption, moderation status, featured flag (FR-COM-*)
- **Product** — image, name, description, coming-soon status, optional launch date (FR-PRD-002)
- **AdminUser** — auth identity, role

Do not add fields without a documented requirement — see
[AI Development → AI Must Not](../development/ai-development.md#12-ai-must-not).
