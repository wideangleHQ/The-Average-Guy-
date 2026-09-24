# Requirements

Structured extraction of `THE_AVERAGE_GUY_SRS_v1.0.pdf` (v1.0, Draft for Client
Review, 21 Sep 2026). This is a reference copy for convenience — **the PDF is the
authoritative source**; if a requirement here appears out of date, defer to the PDF.

## 5.1 Homepage

| ID | Requirement |
|---|---|
| FR-HOM-001 | Prominent hero section representing the café brand. |
| FR-HOM-002 | Café introduction and manifesto/community story. |
| FR-HOM-003 | Teaser of 4–5 bestselling menu items, subject to content availability. |
| FR-HOM-004 | Featured or upcoming events when available. |
| FR-HOM-005 | Clear CTAs to Menu, What's On, Community, Products, and Visit where applicable. |

## 5.2 Menu

| ID | Requirement |
|---|---|
| FR-MEN-001 | Dedicated menu page with category-based organization. |
| FR-MEN-002 | Each item may include name, image, description, price, category, bestseller indicator. |
| FR-MEN-003 | Readable and usable on mobile devices. |
| FR-MEN-004 | Search/filtering **may** be included if approved in final scope. |
| FR-MEN-005 | Authorized admins can update menu content once CMS is implemented. |

## 5.3 What's On / Events

| ID | Requirement |
|---|---|
| FR-EVT-001 | Display current, upcoming, and past events. |
| FR-EVT-002 | Event cards support title, date, time, description, image/poster, status. |
| FR-EVT-003 | Event detail view when detailed pages are included. |
| FR-EVT-004 | Event registration only if **separately approved**. |
| FR-EVT-005 | Admins manage event content where CMS is included. |

## 5.4 Community Wall

| ID | Requirement |
|---|---|
| FR-COM-001 | Community Wall for café-related moments and stories. |
| FR-COM-002 | "Moment of the Day" or featured moment presentation. |
| FR-COM-003 | Customer-submitted images/captions require moderation before publication, if uploads are enabled. |
| FR-COM-004 | Featured and past moments, including event photography where available. |
| FR-COM-005 | Admins approve, reject, edit, or remove community content. |

## 5.5 Social / Instagram

| ID | Requirement |
|---|---|
| FR-SOC-001 | Link to the café's Instagram/social profile. |
| FR-SOC-002 | Suitable social engagement CTAs. |
| FR-SOC-003 | Social feed/showcase is **optional**, subject to platform/API feasibility and approval. |

## 5.6 Upcoming Products

| ID | Requirement |
|---|---|
| FR-PRD-001 | Navigation includes Upcoming Products section when products are available. |
| FR-PRD-002 | Product entries support image, name, description, Coming Soon status. |
| FR-PRD-003 | Launch date may be displayed when confirmed by client. |
| FR-PRD-004 | Online purchasing is **out of scope** unless separately approved. |

## 5.7 Visit / Contact

| ID | Requirement |
|---|---|
| FR-VIS-001 | Café address and operating hours. |
| FR-VIS-002 | Map and directions link. |
| FR-VIS-003 | Phone, WhatsApp, and Instagram contact paths where supplied. |
| FR-VIS-004 | Parking info may be displayed if confirmed by client. |

## 5.8 Visual Design and Animation

| ID | Requirement |
|---|---|
| FR-UX-001 | Dark visual direction with gold/white accents unless revised by approval. |
| FR-UX-002 | Typography, spacing, imagery, layouts reflect a premium editorial café identity. |
| FR-UX-003 | May include a moving creature/brand animation and page-level motion effects. |
| FR-UX-004 | Animations responsive, performant, usable on mobile. |
| FR-UX-005 | No preloader required; `prefers-reduced-motion` respected. |

## Non-Functional Requirements

| ID | Requirement |
|---|---|
| NFR-001 Performance | Efficient loading, optimized images, lazy loading, minimized scripts. |
| NFR-002 Responsive Design | Support current major desktop, tablet, mobile viewports. |
| NFR-003 Accessibility | Contrast, keyboard access, alt text, focus states, reduced motion. |
| NFR-004 SEO | SEO URLs, metadata, alt text, sitemap, robots.txt, Open Graph, structured data. |
| NFR-005 Compatibility | Current major Chrome, Safari, Edge, Firefox. |
| NFR-006 Security | Access control, validation, reasonable security controls. |
| NFR-007 Maintainability | Document code, content structures, deployment configuration. |
| NFR-008 Localization | Client-approved formats for address, hours, prices, contact info. |

## Content and Administration

- CMS fields, publishing workflow, and permissions to be finalized before admin
  development.
- Client supplies approved brand assets, menu, prices, event details, products,
  address, hours, and imagery.
- Optional features are out of scope until written approval.
- No loyalty points, loyalty engagement programs, or priority notifications.

## Integrations

- Google Maps or equivalent directions service.
- Instagram/social profile links; embedded feeds optional.
- WhatsApp click-to-chat link where a valid number is provided.
- Google Business Profile connection/structured data, subject to access and approval.

Final tech stack, hosting, analytics, CMS, and third-party services beyond what's fixed
in [Technology Stack](../infrastructure/tech-stack.md) remain **TBC** per the SRS.

See [Scope](scope.md) for the out-of-scope list and assumptions/risks.
