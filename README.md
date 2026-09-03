# akhaizel

Single-page marketing site for Aaron Haizel, built with Next.js 15 (App Router), React 19, and TypeScript.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Layout

- `src/app/layout.tsx` — fonts, metadata, site chrome (navbar and footer)
- `src/app/page.tsx` — the landing page, composed from sections
- `src/app/globals.css` — design tokens, reset, and the small set of shared classes (`.btn`, `.card`, `.section-title`, ...)
- `src/components/` — one file per section; copy lives in a constant at the top of each
- `src/components/ui/` — shared primitives (`ButtonLink`, `SectionHeading`)
- `src/lib/site.ts` — site-wide config: name, email, nav links, and the booking link every CTA points at

Styling is CSS variables plus inline styles. There is no Tailwind or CSS-in-JS.
