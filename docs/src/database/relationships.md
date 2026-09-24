# Relationships

**Status: TBD.** Entity relationships will be documented here once the Prisma schema
exists (see [Schema](schema.md)). Expected shape, not yet implemented:

- `Event` 1—N `EventMoment`
- `CommunityPost` N—1 `AdminUser` (moderated by)
- `MenuItem` N—1 `MenuCategory`

Define these precisely, with cardinality and deletion behaviour, during backend
implementation — see [Database Architecture](architecture.md#before-creating-a-new-entity).
