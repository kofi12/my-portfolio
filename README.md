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

Copy the example file and fill in what you have. Both values are optional; the site still runs without them.

```bash
cp .env.example .env.local
```

### Booking link

`NEXT_PUBLIC_BOOKING_URL` is a public scheduling page, such as a Google Calendar appointment schedule or a Cal.com link. When it is set, every “Book a free call” button opens that page in a new tab. When it is empty, those buttons email `aaronhaizel@gmail.com` instead. Paste the page URL only. Do not embed a third-party iframe.

### App audit form

The form posts to `/api/app-audit`, which sends the message with [Resend](https://resend.com)’s HTTP API.

1. Create a free Resend account and copy an API key into `RESEND_API_KEY`.
2. Leave `RESEND_FROM` unset to use `onboarding@resend.dev`. On the free plan, that sender can only deliver to the email address on the Resend account until you verify a domain. After a domain is verified, set `RESEND_FROM` to an address on that domain.
3. Restart `npm run dev` after changing either variable.

If `RESEND_API_KEY` is missing, the form does not crash. It tells the visitor to email instead.
