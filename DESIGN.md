# Design Brief: Heartland Farms

## Purpose & Tone
Premium, aspirational agriculture brand website showcasing founder's transformation from corporate to sustainable farming. Refined, modern, emotionally engaging — not rural or outdated.

## Visual Identity
**Palette:** Deep forest green (primary, trust & growth), warm soil brown (secondary, earth & nurture), light cream (background, premium & clean)
**Typography:** Fraunces (serif display—warmth & premium), General Sans (body—clarity & modernity)
**Shape Language:** Medium radii (0.75rem), generous spacing, elevated card treatments
**Atmosphere:** Layered depth via card elevations, subtle earthy undertones, cinematic hero imagery

## Structural Zones

| Zone | Treatment | Purpose |
|------|-----------|---------|
| Header | Cream background, primary text, subtle border-b | Navigation prominence |
| Hero | Full-bleed imagery, serif overlay typography | Emotional storytelling & founder journey |
| Content Sections | Alternating bg-background / bg-muted, card-based | Breathing room & visual rhythm |
| Cards | Elevated shadow, border-border, hover lift | Product/practice highlights |
| Footer | Darker footer, muted text, accent CTA links | Contact & engagement |

## Color Palette (OKLCH)

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| Primary | 38/11/140 (forest green) | 65/8/140 | Core brand, CTAs, interactive |
| Secondary | 48/12/33 (soil brown) | 68/11/33 | Accents, highlights, emphasis |
| Background | 97/2/140 (cream) | 14/1/140 | Page background |
| Card | 99/0/0 (white) | 20/1/140 | Container cards, elevated zones |
| Foreground | 20/2/140 | 92/1/140 | Body text |
| Muted | 88/3/140 | 24/1/140 | Secondary text, borders |

## Typography Scale
- Display: Fraunces 40–56px, bold, tracking tight
- Heading 1: Fraunces 32px, semibold
- Heading 2: Fraunces 24px, semibold
- Body: General Sans 16px, regular
- Small: General Sans 14px, regular
- Meta: General Sans 12px, muted

## Component Patterns
- **Buttons:** Primary (bg-primary text-primary-foreground), Secondary (border-primary text-primary)
- **Cards:** card-elevated utility for consistent lift + hover states
- **Forms:** Input border-input focus:ring-2 ring-primary
- **Galleries:** Grid (sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3), card containers with hover scale

## Motion & Interaction
- Smooth transitions: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- Card hover: shadow-lg to shadow-xl lift
- CTA fade-in on scroll (future implementation)
- No bouncy animations—refined elegance throughout

## Accessibility
- All text meets AA+ contrast (L difference ≥0.7)
- Focus states on all interactive elements
- Semantic HTML, aria-labels on custom components
- Mobile-first responsive (sm/md/lg breakpoints)

## Constraints
- No dark mode toggle—light is primary, dark available via system preference
- Max content width: 1400px (2xl container)
- Spacing scale: 4px increments (via Tailwind)
- No gradient overlays—depth via layered cards and shadows
- Serif font sparingly—display headings only, not body

## Signature Details
- Warm undertone in cream background (140° hue bias)
- Secondary brown as accent highlight (product CTAs, badges)
- Elevated card shadows (not flat design)
- Generous padding within cards (premium breathing room)
- Serif typeface choice signals premium + heritage over cold modernism
