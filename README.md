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

## Environment

Copy the example file and fill in what you have. The site still runs if you leave it empty.

```bash
cp .env.example .env.local
```

`NEXT_PUBLIC_BOOKING_URL` is a public scheduling page, such as a Google Calendar appointment schedule or a Cal.com link. When it is set, “Book a free call” and “Request an app audit” both open that page in a new tab. When it is empty, the first emails with the subject “Free call” and the second emails with the subject “App audit”. Paste the page URL only. Do not embed a third-party iframe. Restart `npm run dev` after changing it.
