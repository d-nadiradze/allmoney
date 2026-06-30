# AllMoneyCard — Landing Page

A high-performance, single-page marketing site for AllMoneyCard, built from the Figma design.
English-only, fully responsive (desktop + mobile), with smooth scroll-reveal animations and a swipeable carousel.

## Tech stack

- **Next.js 16** (App Router, Turbopack) — statically prerendered (`output: static`)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** — design tokens defined in `src/app/globals.css` via `@theme`
- **Framer Motion** — scroll-reveal + stagger animations (respects `prefers-reduced-motion`)
- **Swiper** — the "What you can do" cards carousel
- **next/image** — automatic responsive sizing; all raster assets are pre-optimized **WebP**

## Project structure

```
src/
  app/
    layout.tsx        # fonts (Inter), SEO metadata, viewport
    page.tsx          # section composition
    globals.css       # Tailwind theme tokens, base styles, utilities
  components/
    sections/         # Header, Hero, Features, WhatYouCanDo, ManageCard, Fees, Steps, CtaFooter
    ui/               # Logo, icons, StoreButtons, FeaturePills, Reveal/Stagger (motion)
  lib/
    content.ts        # all copy + asset references (single source of truth)
public/figma/         # WebP images + SVG logo exported from Figma
scripts/to-webp.mjs   # one-off: converts exported PNGs to WebP (uses sharp)
```

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (static)
npm run start      # serve the production build
npm run lint
```

## Assets

Images were exported from the Figma file and converted to WebP with `scripts/to-webp.mjs`
(quality 82, alpha preserved). Decorative glows/gradients are pure CSS to keep payload small
(total image weight ≈ 1 MB). The complex iPhone app mockups and lifestyle cards are flattened
images; all layout, text, buttons and pills are real DOM for crisp text and accessibility.

## Performance notes

- Single static HTML page, no client data fetching.
- Above-the-fold hero phone uses `priority`; everything else lazy-loads.
- Fonts loaded with `next/font` (`display: swap`, self-hosted).
- Animations are GPU-friendly transforms/opacity and disabled under reduced-motion.
