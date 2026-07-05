# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Next.js dev server
- `npm run build` — production build (also the main correctness check; there are no tests)
- `npm run lint` — ESLint via `next lint`
- `npm run clean` — remove `.next` and `node_modules/.cache` (PowerShell-based; Windows only)

Requires Node >= 24. Sanity needs a `.env.local` with `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` (and `SANITY_API_READ_TOKEN` only for draft-mode previews) — the app throws at startup without the first two (`sanity/env.ts`).

## Architecture

Personal portfolio site: Next.js 14 App Router + TypeScript + Tailwind, deployed on Vercel at https://mohsinraz.vercel.app.

Two content sources:

1. **Static data** — the home page sections (Skills, Projects, Testimonials, TopReviews, nav links) are driven by plain arrays in `src/components/utils/rawData.ts`. To add/edit a project, testimonial, or nav item, edit that file and drop assets in `public/`.
2. **Sanity CMS** — blog posts only. Sanity Studio is mounted inside the app at `/studio` (`src/app/studio/[[...index]]/page.tsx`, configured by root `sanity.config.ts`). Schemas live in `sanity/schemaTypes/` (post, author, category, blockContent, customImage, seo). GROQ queries are centralized in `sanity/lib/queries.ts`, and all fetching goes through `sanityFetch` in `sanity/lib/fetch.ts` (server-only; handles draft mode and caching). Blog routes: `src/app/blogs/page.tsx` (list) and `src/app/blogs/[slug]/page.tsx` (detail, with a dynamic `opengraph-image.tsx`).

## Styling — Neo-Brutalism theme

The site follows a neo-brutalist design; `neo-brutalism.md` at the repo root is the design spec. Key conventions when writing UI:

- Flat solid colors (no gradients), thick black borders (`border-4 border-black`), hard offset shadows via arbitrary values like `shadow-[8px_8px_0_#000]`, with hover/active translate + shadow-size transitions.
- Theme colors defined in `tailwind.config.ts`: `neo-cyan`, `neo-pink`, `neo-yellow`, `neo-orange`, plus `primary`/`secondary`.
- Fonts: headings use `font-lexend` (Lexend, uppercase, bold), body uses `font-public` (Public Sans) — both loaded as CSS variables in `src/app/layout.tsx`. A local OfficeTimes font (`src/components/utils/customFonts.ts`) is the `<body>` default.
- Tailwind breakpoints are customized (`sm`=320px, `mm`=375px, `ml`=425px, `md`=768px) — do not assume the defaults.

## Gotchas

- `Testimonials` (react-slick + styled-components) must be imported with `next/dynamic` and `ssr: false` — it touches `document` and breaks the build if server-rendered (see `src/app/page.tsx`).
- Icons come from lucide-react through the `Icon` wrapper in `src/components/utils/lucidIcons.tsx` (`transpilePackages: ['lucide-react']` is set in `next.config.mjs`).
- `console.*` (except `console.error`) is stripped from production builds by the Next compiler config.
- Remote images are only allowed from `cdn.sanity.io`; everything else must live in `public/`.
