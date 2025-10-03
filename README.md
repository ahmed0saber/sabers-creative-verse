# Ahmed Saber — Portfolio

A fast, modern, and customizable developer portfolio built with React, TypeScript, and Vite. It showcases projects, articles, YouTube content, open‑source work, experience, and education — all rendered from typed data sources.

---

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5 (React SWC plugin)
- **Styling**: Tailwind CSS 3 (+ tailwindcss-animate)
- **UI Primitives**: Radix UI
- **Icons**: lucide-react
- **Routing**: react-router-dom
- **Linting**: ESLint 9 (TypeScript + React hooks + refresh)
- **User Tracking**: Hotjar

---

## Features

- **Multiple display modes**: `NormalMode`, `DevMode`, and `HackerMode`
- **Typed content sources** under `src/data` with dedicated `src/types`
- **Responsive, accessible UI** using Radix primitives and Tailwind
- **Pretty animations** configured in `tailwind.config.ts`
- **Zero server-side requirements** — fully static, deploy anywhere

---

## Quick Start

```bash
# 1) Install dependencies
npm install

# 2) Start dev server (http://localhost:8080)
npm run dev

# 3) Build for production
npm run build

# 4) Preview the production build locally
npm run preview
```

Dev server runs on port `8080` and listens on all interfaces (configured in `vite.config.ts`).

---

## Project Structure

```text
.
├─ public/                 # Static assets (favicons, images, manifest)
├─ src/
│  ├─ components/
│  │  ├─ layout/          # Navbar, Footer
│  │  ├─ modes/           # DevMode, HackerMode, NormalMode (+ sections)
│  │  └─ ui/              # Reusable UI components (Radix-based)
│  ├─ contexts/           # React context (e.g., ModeContext)
│  ├─ data/               # Portfolio content (projects, skills, etc.)
│  ├─ lib/                # Utilities (e.g., class names helpers)
│  ├─ pages/              # Top-level routed pages
│  ├─ types/              # TypeScript types for data
│  └─ utils/              # Helpers (e.g., README generation)
├─ index.html             # App entry
├─ tailwind.config.ts     # Tailwind setup + animations
├─ vite.config.ts         # Vite + aliases and dev server
├─ eslint.config.js       # ESLint config
└─ package.json           # Scripts and dependencies
```

---

## Scripts

- **dev**: `vite`
- **build**: `vite build`
- **build:dev**: `vite build --mode development`
- **preview**: `vite preview`
- **lint**: `eslint .`

---

## Customizing Your Content

Most content lives in `src/data/` and is strongly typed via `src/types/`.

- **Profile**: `src/data/developer-details.tsx`
- **Experience**: `src/data/experience.tsx`
- **Education**: `src/data/education.tsx`
- **Skills**: `src/data/skills.tsx`
- **Projects**: `src/data/projects.tsx`
- **Open Source**: `src/data/opensource-projects.tsx`
- **Articles**: `src/data/articles.tsx`
- **YouTube**: `src/data/youtube-content.tsx`
- **Socials**: `src/data/social-platforms.tsx`

Update these files to instantly reflect changes across the portfolio. Types under `src/types/` guide the shape of each dataset.

---

## Theming and Styles

- Tailwind is preconfigured with dark mode and custom animations in `tailwind.config.ts`.
- Global styles live in `src/globals.css` and `src/index.css`.
- UI components under `src/components/ui/` are built on Radix UI primitives.

---

## Development Notes

- Import alias `@` maps to `./src` (see `vite.config.ts`).
- Mode switching is provided by `src/contexts/ModeContext.tsx` and consumed in components under `src/components/modes/`.
- A helper to generate README-like content from your data exists at `src/utils/generateReadme.tsx`.

---

## Deployment

The site is static — deploy the `dist/` directory after `npm run build`.

- Works well on Netlify, GitHub Pages, Cloudflare Pages, etc.
