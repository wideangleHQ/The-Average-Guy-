# Admin — Media

**Status: planned.**

- Media binaries live in Supabase Storage, never in PostgreSQL — Postgres stores
  only metadata/relationships (see [Database Architecture](../database/architecture.md)).
- Privileged storage credentials stay server-side (see [Security](../infrastructure/security.md)).
- Image handling follows [Media & Image Requirements](../project/requirements.md#media-and-image-requirements):
  resize/compress for intended display size, modern formats, responsive variants,
  descriptive filenames, meaningful alt text.
