# Ajit Zagade — Portfolio

Production-ready personal site for a Senior Full Stack Engineer & Engineering Leader, built with React, Vite, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, and React Router.

## Prerequisites

- Node.js 20+ recommended
- npm 10+

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command       | Description                    |
| ------------- | ------------------------------ |
| `npm run dev` | Start Vite dev server          |
| `npm run build` | Typecheck + production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint                   |

## Environment

Copy `.env.example` to `.env` (optional for local SEO URLs):

```bash
cp .env.example .env
```

Set `VITE_SITE_URL` to your deployed origin (no trailing slash). This powers canonical and Open Graph `og:url` / `og:image` absolute URLs in `src/components/seo.tsx`.

## Resume & assets

- A placeholder PDF ships as `public/resume.pdf` (downloads as **Ajit-Zagade-Resume.pdf**). Replace it with your real CV and redeploy.
- Add `public/og-image.png` (recommended 1200×630) for social previews; update `site.ogImage` in `src/lib/site.ts` if you use a different filename.

## Customize content

- **Profile, links, copy**: `src/lib/site.ts`
- **Sections**: `src/sections/`
- **Layout**: `src/components/layout/`

## Performance

- **Code splitting**: Below-the-fold homepage content loads in a lazy chunk (`src/pages/home-below-fold.tsx`) with a lightweight skeleton while it loads.
- **Vendor chunks**: `vite.config.ts` splits React, Framer Motion, React Router, lucide, Base UI, and react-helmet-async for caching and parallel loading.

## Deploy on Vercel

1. Push the repository to GitHub/GitLab/Bitbucket.
2. In [Vercel](https://vercel.com), **Import** the repo.
3. Framework preset: **Vite** (auto-detected). Build command: `npm run build`, output: `dist`.
4. Add environment variable `VITE_SITE_URL` to your production URL.
5. Deploy.

This app is a static SPA. `vercel.json` includes a rewrite so the app shell resolves correctly on refresh for any path.

## Tech stack

- React 19 + Vite 8 + TypeScript
- Tailwind CSS v4 + shadcn/ui (Base UI primitives)
- React Router 7, Framer Motion, react-helmet-async

## License

Private / personal use — adjust as needed.
