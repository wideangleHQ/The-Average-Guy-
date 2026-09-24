# Sitemap

Confirmed information architecture. *(Source: SRS v1.0 §4)*

| Route | Contents |
|---|---|
| `/` (Home) | Hero, Manifesto, Menu Teaser, Featured Events, CTAs |
| `/menu` (Menu) | Categories, Menu Items, Images, Descriptions, Prices, Bestsellers |
| `/whats-on` (What's On) | Upcoming, Current, and Past Events |
| `/whats-on/[slug]` | Event detail view, if detailed pages are included (FR-EVT-003) |
| `/community` (Community) | Community Wall, Moment of the Day, Past Moments |
| `/products` (Products) | Upcoming Products and Coming Soon items |
| `/visit` (Visit) | Location, Timings, Contact, Map, Directions |

A `/regulars` (membership) route is referenced in the original architecture proposal
and `DESIGN.md` navigation, but is **not** in the SRS-confirmed sitemap above — treat it
as future scope pending client confirmation, per
[Scope](scope.md#out-of-scope).

## Implementation Status

Only the root route (`/`) currently exists, as a minimal placeholder — see
[Frontend Architecture](../frontend/architecture.md). Feature routes are not yet built.
