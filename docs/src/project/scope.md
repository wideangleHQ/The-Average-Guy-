# Scope

## In Scope *(SRS §1.3)*

- Responsive public-facing café website.
- Content-led pages for menu, events, community, products, and visit information.
- Premium dark visual direction with gold/white accents and editorial layouts.
- SEO, performance, accessibility, and mobile-first implementation.
- Admin/CMS capabilities, subject to final platform and scope confirmation.

## Out of Scope *(SRS §13)*

- Loyalty points or rewards system.
- Loyal customer engagement / loyalty program.
- Priority notifications.
- Online ordering, payment, delivery, e-commerce — unless approved.
- Event ticketing/registration — unless approved.
- Full social-feed integration — unless approved.

Additional items **not currently confirmed requirements** (per the AI development
rules — see [AI Development](../development/ai-development.md#12-ai-must-not)):
POS, custom payment processing, custom form builder, complex loyalty systems,
automatic Instagram publishing, microservices, Redis, background workers. These may
become future scope but must not be implemented speculatively.

## Assumptions, Dependencies, and Risks *(SRS §12)*

- Timely client content and approvals.
- Availability of third-party services.
- Explicit confirmation required for: event registration, feeds, filtering, parking
  details, and CMS depth.
- Image rights and animation complexity may affect delivery.

## Community Creation Model

Community creation is primarily an announcement/content workflow, not a custom form
builder:

```text
Admin creates community announcement
        → Adds community information
        → Adds external Google Form URL
        → Publishes
        → Website displays announcement
        → User follows external form
```

Do not build a custom form builder unless explicitly required.
