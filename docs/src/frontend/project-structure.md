# Project Structure

```text
apps/web/
├── app/                  Routes, layout, metadata, sitemap.ts, robots.ts
├── components/
│   ├── ui/               Generic reusable primitives
│   ├── layout/            Header, footer, nav shells
│   └── shared/            Cross-feature shared components
│   └── sections/          (in use) page-level section components, e.g. ManifestoSection
├── features/              One folder per domain: home, menu, events, regulars,
│                          community, products, location — feature-owned UI + logic
├── lib/
│   ├── api/               API client foundation (lib/api/client.ts)
│   ├── seo/                SEO helpers
│   └── utils/              Generic utilities
├── hooks/                 Reusable React hooks
├── providers/             App-level providers
├── config/                Typed env/config access (config/site.ts)
├── constants/              Static constants
├── types/                  Shared frontend TypeScript types
└── public/{images,icons,fonts}/
```

## Rules

- **Feature-oriented, not one giant `components/` dump.** Domain-specific UI goes in
  `features/<domain>/`; only cross-feature, generic pieces go in `components/`.
- `components/sections/` holds page-composition sections (already in use for
  `ManifestoSection`) — treat it as part of `components/shared` in spirit.
- Before adding a new folder at this level, check whether an existing one already
  fits — see [Design Consistency Rule](../design/components.md#consistency-rule).
