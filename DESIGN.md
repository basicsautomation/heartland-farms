# Design Brief: Teja Controls

## Purpose & Tone
Premium industrial automation website showcasing electrical control panel design, manufacturing, and solutions for mills and food processing. Professional, authoritative, engineering-focused — modern SaaS-grade quality comparable to Siemens, Schneider Electric, Rockwell Automation.

## Visual Identity
**Palette:** Dark Industrial Blue primary (#0B1F3A / oklch 0.14 0.04 250), Vibrant Orange accent (#FF7A00 / oklch 0.58 0.17 30), Clean White (0.95 0 0)
**Typography:** Space Grotesk (display—technical precision & modernity), General Sans (body—clarity & accessibility)
**Shape Language:** Medium radii (0.75rem), minimal excess, card-based hierarchies, industrial spacing
**Atmosphere:** High-contrast depth via layered shadows, crisp typography, professional iconography, smooth micro-interactions

## Structural Zones

| Zone | Treatment | Purpose |
|------|-----------|----------|
| Header/Nav | Dark blue bg, white text, sticky positioning | Navigation & brand stability |
| Hero | Full-bleed industrial backdrop, orange CTA buttons | Lead capture & emotional hook |
| Stats Section | Grid layout, animated counters, accent borders | Build credibility & scale |
| Service Cards | Card-elevated, hover lift, border-accent on hover | Feature showcase & visual rhythm |
| Gallery/Projects | Masonry layout, lightbox modal, filter tags | Project validation & trust-building |
| Forms | Contrast input fields, focus ring-accent | Lead generation focus |
| Footer | Dark blue footer, white links, accent hover states | Engagement & secondary CTA |

## Color Palette (OKLCH)

| Token | Value | Usage |
|-------|-------|-------|
| Primary (Dark Blue) | 0.14 0.04 250 | Core branding, backgrounds, text dominance |
| Accent (Orange) | 0.58 0.17 30 | CTAs, highlights, hover states, visual pop |
| Foreground (White) | 0.95 0 0 | Body text, card backgrounds, high contrast |
| Secondary (Blue-Grey) | 0.28 0.02 250 | Muted text, subtle borders, card overlays |
| Border | 0.24 0.02 250 | Structural separation, form inputs |
| Ring | 0.58 0.17 30 | Focus states, interactive feedback |

## Typography Scale
- Display: Space Grotesk 40–56px, bold, tracking tight
- Heading 1: Space Grotesk 32px, semibold
- Heading 2: Space Grotesk 24px, semibold
- Heading 3: Space Grotesk 18px, medium
- Body: General Sans 16px, regular
- Small: General Sans 14px, regular
- Meta: General Sans 12px, muted

## Component Patterns
- **CTA Buttons:** bg-accent text-primary, hover:shadow-industrial-lg, smooth transitions
- **Cards:** bg-card border-border shadow-industrial, hover:shadow-industrial-lg hover:border-accent
- **Forms:** Input bg-input border-border focus:ring-2 focus:ring-accent focus:border-accent
- **Gallery:** Grid (sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3), masonry, lightbox on click

## Motion & Interaction
- Smooth transitions: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- Card hover: shadow-industrial to shadow-industrial-lg lift + border accent shift
- Button hover: scale(1.02) + shadow elevation
- Scroll animations: fade-in + slide-right on viewport entry
- No bouncy easing—refined industrial elegance

## Accessibility
- All text meets AAA contrast (L difference ≥1.0 for body on backgrounds)
- Focus states on all interactive elements (visible ring-accent)
- Semantic HTML, aria-labels on custom components
- Mobile-first responsive (sm/md/lg breakpoints)

## Constraints
- Dark mode available via system preference (not toggled)
- Max content width: 1400px (2xl container)
- Spacing scale: 4px increments (via Tailwind)
- No gradients—depth via layered cards, shadows, and accent borders
- Professional industrial icons only—no decorative graphics

## Signature Details
- Dark blue dominance signals technical authority & trust
- Orange accent creates visual tension & draws focus to CTAs
- Industrial shadows (shadow-industrial variants) distinguish cards & panels
- Generous whitespace within cards—premium breathing room
- Space Grotesk geometric precision conveys engineering excellence
- No serif fonts—geometric modernity over heritage
