LA45 Site
====================================

A Next.js (App Router) + Tailwind project for the LA45 landing and lightweight demo flow.

Getting started
------------------------------------
- Install deps: `npm install`
- Dev server: `npm run dev` (http://localhost:3000)
- Build: `npm run build`
- Start: `npm run start`

Environment
------------------------------------
Copy `.env.example` to `.env.local` and update as needed.

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Notes
------------------------------------
- API routes are stubbed for demo purposes:
  - `POST /api/queue/enter` → `{ status: "searching" }`
  - `POST /api/match/next` → matches on second poll
- Tailwind theme maps CSS variables from `app/globals.css` to utility classes:
  - `ink`/`paper` and `gold-500`
- Fonts are loaded via `next/font` and exposed as CSS variables used in Tailwind `font-sans`/`font-serif`.

