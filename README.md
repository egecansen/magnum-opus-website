# Magnum Opus — Marketing Website

The public-facing site for **Magnum Opus**, the autonomous QA agent pipeline by Civitas Cerebrum.

> _The medium changed. The craft hasn't._

## Stack

- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS 4** with a custom alchemical token system (deep ink + copper-amber)
- **TypeScript**
- **motion** (framer-motion v12) for staggered entrances and accordion height
- **lucide-react** for iconography
- **Fraunces** (display serif), **Geist** (body), **JetBrains Mono** (technical labels)

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (turbopack)
npm run lint
```

## Section anatomy

The single-page site is composed in `src/app/page.tsx` from independent section components in `src/components/sections/`:

| Numeral | Section          | File                  |
|---------|------------------|-----------------------|
| —       | NavBar           | `NavBar.tsx`          |
| I.      | Hero             | `Hero.tsx`            |
| —       | Trusted By       | `TrustedBy.tsx`       |
| II.     | Manifesto        | `Manifesto.tsx`       |
| III.    | Pipeline         | `Pipeline.tsx`        |
| IV.     | Features         | `Features.tsx`        |
| V.      | Architecture     | `Architecture.tsx`    |
| VI.     | Demo / Delivery  | `Demo.tsx`            |
| VII.    | Testimonials     | `Testimonials.tsx`    |
| VIII.   | Pricing          | `Pricing.tsx`         |
| IX.     | FAQ              | `FAQ.tsx`             |
| X.      | CTA              | `CTA.tsx`             |
| —       | Footer           | `Footer.tsx`          |

Design tokens live in `src/app/globals.css` (color tokens, font variables, reusable `.btn-primary` / `.eyebrow` / `.ledger` / `.rule` atoms). Update tokens there to retheme the entire site.

## Deployment

Static export-friendly. Deploy to Vercel, Cloudflare Pages, or any static host. No backend dependencies — the access form is a client-side stub.

---

© Civitas Cerebrum · MMXXVI
