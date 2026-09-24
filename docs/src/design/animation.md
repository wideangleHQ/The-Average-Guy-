# Animation

Full detail: `DESIGN.md` §§31–34.

## Principles

Motion should feel slow, intentional, cinematic, elegant, responsive.

**Preferred:** fade, reveal, mask, image scale, subtle parallax, text reveal,
horizontal movement, hover transitions.

**Avoid:** excessive bouncing, random floating elements, fast transitions, constant
parallax, animation on every element, unnecessary 3D effects.

## Timing (starting values)

| Interaction | Duration |
|---|---|
| Micro interaction | 150–250ms |
| Component hover | 250–400ms |
| Content reveal | 500–800ms |
| Editorial transition | 700–1200ms |

## Reduced Motion

All animation must respect `prefers-reduced-motion`. When enabled: remove parallax,
reduce transforms, remove complex reveals, keep essential transitions minimal,
preserve usability.

## Signature Interactions

- **Gold line:** underline expands subtly on hover (`EXPLORE EVENTS ──────────→`).
- **Image zoom:** `scale: 1.00 → 1.04`, kept subtle.
- **Typography reveal:** large editorial headlines may reveal via mask/vertical
  movement — used selectively, not on every heading.

## Scope Note

Per the SRS (FR-UX-003), the site **may** include a moving creature/brand animation
and page-level motion effects — this is a dedicated, later phase (see
[Development Workflow](../development/workflow.md)), not part of the frontend
environment/architecture phase. No preloader is required (FR-UX-005).
