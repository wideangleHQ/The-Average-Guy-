# Database Architecture

**Status: not yet provisioned.** No schema, migrations, or Prisma setup exist yet.

## Stack

PostgreSQL, managed via Supabase. Access exclusively through Prisma from the NestJS
backend — see [Backend Architecture](../backend/architecture.md). The frontend never
connects directly.

## Responsibility

PostgreSQL is the source of truth for structured application data: users, menu items,
events, community posts, products, notifications, admin users, content metadata.
Media **binaries** belong in Supabase Storage, not Postgres — Postgres stores only
metadata/relationships to them (see [Media](../admin/media.md)).

## Before Creating a New Entity

1. Check the existing schema.
2. Check relationships.
3. Check whether an existing entity already covers the requirement.
4. Define indexes where justified.
5. Define unique constraints where required.
6. Define nullable fields intentionally.
7. Define deletion behaviour intentionally.

Do not create redundant tables. See [Schema](schema.md) and
[Relationships](relationships.md) (both TBD until backend implementation begins).
