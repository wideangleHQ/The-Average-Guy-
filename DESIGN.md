# THE AVERAGE GUY — DESIGN SYSTEM

Version: 1.0  
Status: Approved Design Direction  
Project: The Average Guy  
Purpose: Website UI/UX and frontend development reference

---

# 01. DESIGN SYSTEM PURPOSE

This document defines the visual language, UI rules, typography, colours, spacing, components, responsive behaviour, imagery and interaction principles for THE AVERAGE GUY website.

Every page and component must follow this design system.

The design system exists to ensure that:

- All pages feel like the same brand.
- Components remain visually consistent.
- AI-generated UI does not introduce random design patterns.
- New sections reuse existing visual language.
- The website maintains a premium café experience.
- The interface feels warm and human rather than corporate or generic.
- Animations and interactions remain intentional.
- Mobile and desktop experiences remain consistent.

This document is the visual source of truth for frontend development.

---

# 02. BRAND DESIGN DIRECTION

## Core Concept

THE AVERAGE GUY is not positioned visually as a traditional luxury restaurant.

The experience should feel like:

> A warm neighbourhood café presented through a premium editorial lens.

The visual identity combines:

- Premium
- Dark
- Warm
- Editorial
- Cinematic
- Minimal
- Human
- Social
- Cozy
- Contemporary

---

# 03. VISUAL NORTH STAR

> Build THE AVERAGE GUY like a warm, cinematic editorial magazine for a neighbourhood café — black canvas, champagne-gold details, warm-white typography, beautiful photography, generous negative space and subtle motion.

The website should feel:

- Premium without being intimidating.
- Dark without being cold.
- Golden without being flashy.
- Minimal without feeling empty.
- Interactive without feeling experimental for the sake of experimentation.

---

# 04. COLOUR SYSTEM

## 4.1 Primary Background — Obsidian

`#0B0B0A`

Primary website background.

Use for hero, main sections, footer and large immersive sections.

## 4.2 Secondary Background — Charcoal

`#141412`

Use for secondary sections, cards, navigation surfaces, content areas and alternate section backgrounds.

## 4.3 Elevated Surface — Warm Graphite

`#1C1A17`

Use for hover surfaces, modals, interactive cards, dropdowns, elevated UI and form containers.

---

# 05. GOLD SYSTEM

Gold is an accent colour. It must never become the dominant colour of the interface.

## Primary Gold — Champagne Gold

`#C8A96B`

Use for important labels, accent lines, active navigation states, decorative details, primary CTA backgrounds, highlighted words, small icons and metadata.

## Light Gold — Soft Gold

`#E1C98A`

Use for hover states, highlighted text, important interactive states and subtle visual emphasis.

## Dark Gold — Antique Gold

`#8F713D`

Use for subtle borders, decorative backgrounds, secondary accents and low-contrast visual details.

---

# 06. TEXT COLOURS

## Primary Text — Warm White

`#F5F1E8`

Use for headlines, important content, navigation and primary UI text.

Avoid using pure white for major typography.

## Secondary Text — Muted Cream

`#C9C3B8`

Use for paragraphs, descriptions, supporting content and secondary navigation.

## Muted Text

`#858078`

Use for metadata, dates, supporting labels, timestamps and low-priority information.

---

# 07. BORDER COLOURS

Primary:

`rgba(200, 169, 107, 0.18)`

Secondary:

`rgba(245, 241, 232, 0.12)`

Borders should remain subtle.

Do not use bright gold borders, thick decorative borders or high-contrast boxes everywhere.

---

# 08. COLOUR USAGE RATIO

Recommended visual balance:

```text
70%  Dark / Black
15%  Warm White
10%  Gold
5%   Supporting warm tones
```

This is a visual guideline, not a mathematical requirement.

Gold should feel like a detail discovered within the design.

---

# 09. CSS COLOUR TOKENS

```css
:root {
  --color-bg-primary: #0B0B0A;
  --color-bg-secondary: #141412;
  --color-bg-surface: #1C1A17;

  --color-gold: #C8A96B;
  --color-gold-light: #E1C98A;
  --color-gold-dark: #8F713D;

  --color-text-primary: #F5F1E8;
  --color-text-secondary: #C9C3B8;
  --color-text-muted: #858078;

  --color-border-gold: rgba(200, 169, 107, 0.18);
  --color-border-light: rgba(245, 241, 232, 0.12);
}
```

Do not introduce random colour values into components when an existing design token can be used.

---

# 10. TYPOGRAPHY SYSTEM

THE AVERAGE GUY uses two primary typefaces.

## Display Typeface — Cormorant Garamond

Use for:

- Hero headlines
- Large editorial statements
- Manifesto
- Section headlines
- Important brand statements
- Emotional messaging
- Large decorative typography

Cormorant Garamond provides the emotional and editorial character of the brand.

## Functional Typeface — DM Sans

Use for:

- Navigation
- Paragraphs
- Buttons
- Cards
- Metadata
- Forms
- Labels
- Dashboard
- Functional UI

DM Sans provides clarity and modern usability.

---

# 11. TYPOGRAPHY RULE

**Cormorant Garamond = Emotion.**

**DM Sans = Function.**

Do not reverse their primary responsibilities without a deliberate design reason.

Example:

```text
CORMORANT GARAMOND

Not just a café.
A place to belong.

DM SANS

Some come for coffee.
Some come for the food.
Some come because their friends
are already here.
```

---

# 12. TYPE SCALE

The following scale is the starting system and may be adjusted during implementation according to composition.

## Display XL

```text
Desktop: 96–120px
Tablet: 72–96px
Mobile: 52–68px
```

Use for hero and major emotional statements.

## Display Large

```text
Desktop: 64–88px
Tablet: 52–68px
Mobile: 42–56px
```

## Heading Large

```text
Desktop: 48–64px
Tablet: 40–52px
Mobile: 34–44px
```

## Heading Medium

```text
Desktop: 32–44px
Tablet: 28–38px
Mobile: 26–34px
```

## Body Large

`16–20px`

Use for important supporting paragraphs.

## Body

`16–18px`

Primary paragraph size.

## Small

`13–14px`

Use for metadata, supporting information and secondary labels.

## Eyebrow

`11–12px`

Use uppercase with:

`letter-spacing: 0.12em – 0.18em`

Examples:

```text
THE IDEA
WHAT'S ON
THE COMMUNITY
```

---

# 13. TYPOGRAPHY WEIGHTS

## Cormorant Garamond

Prefer:

- Regular
- Medium
- SemiBold

Use heavier weights only when required by the composition.

Avoid making every headline extremely bold.

## DM Sans

Prefer:

- Regular
- Medium
- SemiBold
- Bold

Recommended:

```text
Body       → Regular
Navigation → Medium
Buttons    → Medium / SemiBold
Labels     → Medium
Important  → SemiBold
```

---

# 14. TYPOGRAPHY COLOUR RULES

Headlines:

`#F5F1E8`

Paragraphs:

`#C9C3B8`

Metadata:

`#858078`

Important accent:

`#C8A96B`

Avoid large blocks of gold text.

Gold should highlight rather than replace primary typography.

---

# 15. SPACING SYSTEM

Use a consistent spacing scale:

```text
4px
8px
12px
16px
24px
32px
48px
64px
80px
96px
120px
160px
200px
```

Prefer these values instead of introducing arbitrary spacing.

---

# 16. SECTION SPACING

Large sections should have generous vertical spacing.

Desktop:

`120px – 200px`

Tablet:

`96px – 140px`

Mobile:

`72px – 100px`

Spacing can be reduced when a section is intentionally compact.

---

# 17. LAYOUT SYSTEM

## Desktop

```text
12-column grid
Maximum content width: 1440px
Typical horizontal padding: 5vw
```

## Tablet

```text
8-column grid
```

## Mobile

```text
4-column grid
```

Do not force every section to use the same grid composition.

Some sections should intentionally be:

- Full bleed
- Centered
- Asymmetric
- Image-led
- Typography-led

---

# 18. LAYOUT PHILOSOPHY

Prefer:

- Large negative space
- Editorial alignment
- Asymmetry
- Large typography
- Full-width imagery
- Layered compositions
- Overlapping visual elements

Avoid:

- Repetitive card grids
- Everything centered
- Equal spacing everywhere
- Generic SaaS layouts
- Excessive boxed sections

---

# 19. BORDER RADIUS

Use restrained rounding:

```text
Small: 6px
Medium: 12px
Large: 20px
Pill: 999px
```

Not every component needs rounded corners.

Editorial elements may intentionally use sharp corners.

---

# 20. BUTTON SYSTEM

## Primary Button

```text
Background: #C8A96B
Text: #0B0B0A
```

Example:

`SEE WHAT'S ON →`

Characteristics:

- Medium weight
- Compact
- Clear
- Premium
- No excessive shadow

## Secondary Button

```text
Background: Transparent
Border: rgba(245,241,232,0.18)
Text: #F5F1E8
```

Example:

`VIEW MENU`

## Text CTA

Example:

`EXPLORE EVENTS →`

No container.

Use gold text, animated underline and subtle arrow movement.

---

# 21. BUTTON INTERACTION

Primary hover:

```text
Background: #E1C98A
Transform: translateY(-1px)
```

Secondary hover:

```text
Border: rgba(200,169,107,0.5)
Text: #E1C98A
```

Text CTA hover:

```text
Gold underline expands
Arrow moves slightly
```

Keep interaction subtle.

---

# 22. NAVIGATION

The navigation should be minimal and premium.

Desktop structure:

```text
THE AVERAGE GUY

MENU
WHAT'S ON
REGULARS
COMMUNITY
PRODUCTS

VISIT US
```

The logo/brand name should have stronger visual presence than navigation links.

---

# 23. NAVIGATION STATES

Default:

`Warm White / Muted Cream`

Hover:

`Soft Gold`

Active:

`Champagne Gold`

Active states should be subtle.

---

# 24. NAVIGATION SCROLL BEHAVIOUR

Initial state:

`Transparent`

After scrolling:

`rgba(11,11,10,0.85)`

with subtle backdrop blur.

Avoid heavy glassmorphism.

The navigation should remain visually quiet.

---

# 25. CARD SYSTEM

Cards should feel editorial rather than like dashboard widgets.

Basic structure:

```text
IMAGE

EYEBROW

TITLE

DESCRIPTION

METADATA / CTA
```

Example:

```text
LIVE MUSIC

Friday night,
the usual place.

24 SEPTEMBER

EXPLORE →
```

---

# 26. CARD VISUAL RULES

Cards should use:

- Dark surface
- Subtle border
- Large imagery
- Warm typography
- Small gold details

Avoid:

- Thick borders
- Bright gold backgrounds
- Excessive shadows
- Excessive badges
- Too many UI controls

---

# 27. IMAGE SYSTEM

Photography is a major part of the visual identity.

Images should feel:

- Warm
- Cinematic
- Natural
- Human
- Atmospheric
- Slightly imperfect
- Authentic

Preferred subjects:

- Coffee
- Food
- Hands
- Conversations
- Café interiors
- Friends
- Staff
- Night atmosphere
- Community events
- Small human moments

---

# 28. IMAGE TREATMENT

Avoid generic stock photography.

Prefer:

- Natural shadows
- Warm lighting
- Deep blacks
- Soft highlights
- Slight grain
- Strong composition

Images may use subtle dark gradients when typography overlays the image.

Example:

```css
background:
linear-gradient(
  180deg,
  rgba(11,11,10,0.05),
  rgba(11,11,10,0.75)
);
```

---

# 29. GOLD USAGE PRINCIPLE

## GOLD IS A WHISPER, NOT A SHOUT.

Use gold for:

- Eyebrows
- Small labels
- Important metadata
- CTA accents
- Icons
- Lines
- Active states
- Small decorative elements

Avoid:

- Entire backgrounds
- Large blocks of text
- Every border
- Every icon
- Every button
- Every heading

---

# 30. DECORATIVE LANGUAGE

The design may use small editorial details such as:

```text
01
02
03
—
•
→
```

Examples:

```text
01 — THE IDEA
```

or:

```text
WHAT'S ON
──────────
03 EVENTS
```

These details should remain subtle.

---

# 31. MOTION PRINCIPLES

Motion should feel:

- Slow
- Intentional
- Cinematic
- Elegant
- Responsive

Preferred motion:

- Fade
- Reveal
- Mask
- Image scale
- Subtle parallax
- Text reveal
- Horizontal movement
- Hover transitions

Avoid:

- Excessive bouncing
- Random floating elements
- Fast transitions
- Constant parallax
- Animation on every element
- Unnecessary 3D effects

---

# 32. MOTION TIMING

Suggested starting values:

```text
Micro interaction: 150–250ms
Component hover: 250–400ms
Content reveal: 500–800ms
Editorial transition: 700–1200ms
```

These values may be adjusted according to the final animation implementation.

---

# 33. REDUCED MOTION

All animations must respect:

`prefers-reduced-motion`

When reduced motion is enabled:

- Remove parallax
- Reduce transforms
- Remove complex reveals
- Keep essential transitions minimal
- Preserve usability

---

# 34. SIGNATURE INTERACTIONS

## Gold Line

```text
EXPLORE EVENTS
──────────────→
```

The line subtly expands on hover.

## Image Zoom

```text
scale:
1.00 → 1.04
```

Keep the effect subtle.

## Typography Reveal

Large editorial headlines may reveal through masks or vertical movement.

Use selectively.

---

# 35. ICONOGRAPHY

Use:

`Lucide Icons`

Characteristics:

- Minimal
- Clean
- Rounded
- 1.5px visual weight
- No unnecessary decoration

Icons should generally use warm white or muted cream.

Gold should indicate an active or special state.

---

# 36. FORMS

Forms should remain minimal.

Input:

```text
Background: #141412
Border: rgba(245,241,232,0.15)
Text: #F5F1E8
```

Focus:

```text
Border: #C8A96B
```

Placeholder:

```text
#858078
```

Avoid bright white input fields on the dark website unless a specific UX requirement requires it.

---

# 37. MODALS / OVERLAYS

Use:

```text
Background: #141412
Border: rgba(200,169,107,0.18)
```

Overlay:

```text
rgba(0,0,0,0.65)
```

Use subtle backdrop blur where appropriate.

Avoid excessive glassmorphism.

---

# 38. MOBILE DESIGN

Mobile is not a scaled-down desktop.

Mobile layouts must be intentionally composed.

Priorities:

1. Typography
2. Content hierarchy
3. Touch targets
4. Image composition
5. Performance
6. Simplified interactions

---

# 39. MOBILE NAVIGATION

Desktop navigation should collapse into a dedicated mobile navigation.

Recommended:

```text
THE AVERAGE GUY

                    MENU
```

The menu should provide access to:

- Menu
- What's On
- Regulars
- Community
- Products
- Visit

---

# 40. MOBILE TYPOGRAPHY

Large desktop typography must scale down while preserving hierarchy.

Never allow:

- Horizontal overflow
- Extremely long lines
- Oversized text that dominates the entire viewport unnecessarily

Cormorant Garamond should remain visually expressive on mobile.

---

# 41. ACCESSIBILITY

The design must maintain:

- Strong text contrast
- Visible focus states
- Keyboard navigation
- Accessible buttons
- Accessible form labels
- Meaningful image alt text
- Touch-friendly controls
- Reduced-motion support

Gold must not be used as the only visual indicator of state.

---

# 42. PERFORMANCE PRINCIPLES

The visual system must not compromise performance.

Use:

- Optimized images
- Responsive images
- Lazy loading where appropriate
- Font optimization
- Limited animation
- GPU-friendly transforms
- Avoid unnecessary JavaScript
- Avoid excessive third-party animation libraries

Large visual experiences should remain performant on mobile.

---

# 43. COMPONENT PRINCIPLE

Every repeated UI pattern should become a reusable component.

Examples:

```text
Button
SectionHeader
Eyebrow
EventCard
MenuCard
ProductCard
CommunityCard
ImageCard
CTA
Badge
Modal
Navigation
Footer
```

Do not create slightly different versions of the same component without a design requirement.

---

# 44. DESIGN CONSISTENCY RULE

Before creating a new component, ask:

> Does an existing component already solve this?

If yes:

> Reuse it.

If no:

> Create a reusable component rather than a page-specific one.

---

# 45. WHAT TO AVOID

The following visual patterns should NOT become part of THE AVERAGE GUY identity:

- Generic restaurant template layouts
- Excessive gold
- Bright yellow gold
- Pure white everywhere
- Excessive glassmorphism
- Excessive gradients
- Excessive rounded cards
- SaaS dashboard aesthetics on the public website
- Overly corporate typography
- Stock-photo aesthetic
- Excessive animation
- Random 3D elements
- Unnecessary cursor effects
- Bouncy UI
- Every section looking identical

---

# 46. DESIGN QUALITY CHECK

Before considering a page complete:

## Brand

- Does it feel like THE AVERAGE GUY?
- Does it feel premium?
- Does it still feel warm?
- Does the community aspect remain visible?

## Colour

- Is black/dark the dominant foundation?
- Is gold used selectively?
- Is typography warm rather than pure white?

## Typography

- Is Cormorant Garamond used for emotional/editorial moments?
- Is DM Sans used for functional content?
- Is the hierarchy obvious?

## Layout

- Is there enough negative space?
- Is the composition editorial?
- Does it avoid repetitive card-grid patterns?

## Photography

- Does imagery feel authentic?
- Does it have warmth and atmosphere?

## Motion

- Does animation add meaning?
- Is it subtle?
- Does it respect reduced motion?

## Responsive

- Does mobile feel intentionally designed?
- Are touch targets comfortable?
- Is typography still readable?

---

# 47. DESIGN SYSTEM GOLDEN RULE

When in doubt:

> Choose restraint.

THE AVERAGE GUY should not look expensive because it uses lots of gold.

It should look premium because:

- Typography is confident.
- Spacing is intentional.
- Photography is beautiful.
- Colour is restrained.
- Interactions are subtle.
- Content has personality.
- Every visual element has a reason to exist.

---

# 48. FINAL DESIGN STATEMENT

THE AVERAGE GUY is a premium café experience built around a dark editorial visual language.

The website should combine:

```text
OBSIDIAN
      +
CHAMPAGNE GOLD
      +
WARM WHITE
      +
CORMORANT GARAMOND
      +
DM SANS
      +
CINEMATIC PHOTOGRAPHY
      +
GENEROUS SPACE
      +
SUBTLE MOTION
      +
HUMAN CONTENT
```

The result should feel:

> **Premium enough to remember.  
> Warm enough to belong.**
