# SEO

## Implemented

- `app/layout.tsx` — root metadata (title, description, Open Graph, Twitter card),
  sourced from `config/site.ts` (typed env access), not hardcoded.
- `app/sitemap.ts` — `MetadataRoute.Sitemap`, currently the root URL only.
- `app/robots.ts` — allows all, points to the sitemap.
- `metadataBase` set from `NEXT_PUBLIC_APP_URL` when present.

## Rules

- Extend `sitemap.ts` as real routes are added (see [Sitemap](../project/sitemap.md)).
- Per-page metadata (`export const metadata` or `generateMetadata`) as feature pages
  are built — do not invent copy; use approved content or mark `TBD`.
- Do not invent café address, hours, phone, or social handles for structured data —
  pull from `config/site.ts` / environment, and leave unset if not yet supplied
  (see [Content Rules](../development/ai-development.md#content-rules)).
- Structured data (e.g. LocalBusiness JSON-LD) is a later addition once real business
  details are confirmed — see NFR-004 in [Requirements](../project/requirements.md).

## Non-Functional Requirement

NFR-004 (SEO): SEO URLs, metadata, alt text, sitemap, robots.txt, Open Graph, and
relevant structured data — see [Requirements](../project/requirements.md).
