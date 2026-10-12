# Bajwa Web Studio

A first-version sales portfolio for Haider Bajwa, aimed at U.S. small businesses. The primary call to action opens WhatsApp; email is the alternative.

## Run locally

Use Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Open the localhost URL printed by the development server (normally `http://localhost:5173`). To make a production build, run `npm run build`.

## Edit the site

- `app/page.tsx` — content and page sections
- `app/globals.css` — visual design and responsive layout
- `app/layout.tsx` — page metadata
- `public/favicon.svg` — favicon

The site is built with React, TypeScript, Vinext, and CSS. It is statically exported to `dist/client` for hosting. Its project summaries are descriptive, not testimonials or claims of measured business results.
