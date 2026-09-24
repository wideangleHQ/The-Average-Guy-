# API

**Status: planned, not implemented.** No endpoints, controllers, or DTOs exist yet.

## Versioning & Namespacing

```text
/api/v1/public/...   — public, read-only, published content only
/api/v1/admin/...    — protected, requires authentication (see Authentication)
```

## Rules

- REST over HTTPS. Documented via Swagger/OpenAPI once implemented.
- Public endpoints expose only published/approved content — never draft or
  unmoderated community submissions (FR-COM-003).
- Controllers stay thin — business logic lives in services, not controllers
  (see [Backend Architecture](architecture.md)).
- Use DTOs for input validation and output shaping; never return raw internal
  database rows.
- The frontend consumes this API only through `lib/api/` in `apps/web` — see
  [Frontend Data Fetching](../frontend/data-fetching.md).

## Not Yet Defined

Concrete resource schemas, request/response shapes, and error formats are TBD until
the backend implementation phase — see [Database Schema](../database/schema.md) for
the data model these endpoints will expose once it exists.
