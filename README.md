# FinalProject
# GreenSpace (replace with your Brand Name)

## Live Demo
https://final-project-di3o-hbmdmzwk3-orpha-nyanchama-ombworis-projects.vercel.app/

## Project Overview
GreenSpace is a responsive marketing site showcasing urban green-space design and consulting services focused on healthier cities.

## Brand Identity
### Color System
- Primary: #0b6b3a (Used for main CTA and brand marks — conveys growth & trust)
- Secondary: #2fa186 (Supporting color for accents and secondary CTAs)
- Accent: #f59e0b (Highlight/CTA contrast)
- Neutral dark: #0f1724 (Main text)
- Neutral light: #f8fafc (Backgrounds)

### Typography
- Headings: Inter — clean geometric sans-serif for modern, tech-friendly feel
- Body: Roboto — neutral readable body text
- Font weights: 400, 600, 800

## Design Decisions
### Layout Adherence
- Measured spacing in Figma and mapped to Tailwind spacing scale.
- Container width: `max-w-6xl` to match LG layout proportions.

### Creative Departures
- Rewrote all content to reflect an urban ecological practice.
- MD (tablet) layout stacks hero image under the copy for better readability on mid-breakpoints.

## Component Architecture
- `components/layout` — header, footer, nav
- `components/sections` — Hero, Features, About, Contact
- `components/common` — Button, Card, LazyImage

## Performance Optimizations
- Images optimized to WebP and lazy-loaded.
- React.memo used for expensive components.
- Lighthouse: [Add your scores and screenshots in /screenshots]

## Image Credits
- Hero: Photographer Name — Unsplash (link)
- Card images: Photographer Name — Pexels (link)

## Installation & Setup
1. `git clone <repo>`
2. `cd <repo>`
3. `npm install`
4. `npm run dev`
5. Build: `npm run build`

## Technologies Used
- React 18+
- Tailwind CSS 3+
- Vite
- ESLint, Prettier

## Challenges & Solutions
- Challenge 1: Achieving exact spacing — Solution: measured in Figma, extended Tailwind spacing.
- Challenge 2: Getting Lighthouse perf >85 — Solution: image optimization, lazy loading, removed heavy libs.
- Challenge 3: Mobile nav accessibility — Solution: keyboard accessible menu and ARIA labels.

## Future Improvements
- Add dark mode
- Add CMS for dynamic content
- Convert to PWA for offline access
