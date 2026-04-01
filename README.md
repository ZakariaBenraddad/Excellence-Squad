# Point Squad

Landing page for Point Squad — a hospitality services company based in Belgium specializing in housekeeping, maintenance, breakfast service, front office, and staff training for hotels.

Built with **Next.js 15**, **Tailwind CSS 4**, and **Radix UI**. Supports three languages (FR / EN / NL) via file-based i18n with JSON dictionaries.

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The root redirects to `/fr` by default.

## Production Build

```bash
pnpm build
pnpm start
```

## Environment Variables

Create a `.env.local` file:

```
WHATSAPP_PHONE=32XXXXXXXXX
```

Used by the `/api/wa` route to redirect users to WhatsApp.

## Project Structure

```
app/
  [lang]/          → Main localized landing page (fr, en, nl)
  excellence-squads/[lang]/ → Legacy route alias (same page)
  api/wa/          → WhatsApp redirect endpoint
  sitemap.xml/     → Dynamic XML sitemap
  robots.ts        → Robots.txt generation
components/
  ui/              → Radix-based UI primitives (button, card, sheet, badge, dropdown)
  reveal.tsx       → Scroll-triggered reveal animation
  lang-toggle.tsx  → Language switcher dropdown
  whatsapp-button.tsx → Floating WhatsApp CTA
locales/           → i18n JSON dictionaries (fr.json, en.json, nl.json)
lib/
  i18n.ts          → Dictionary loader and translation helper
  config.ts        → Environment variable exports
  utils.ts         → Tailwind class merge utility
```

## Deployment

Configured for Vercel. Push to the connected branch and it deploys automatically.
