# Quackenworth — CLAUDE.md

## Project Overview

**Quackenworth** is a corporate website for an educational technology company that builds apps and websites for teachers and parents. The platform serves K–12 students across three age groups: elementary, middle school, and high school.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Rendering:** Static (prefer `generateStaticParams` and static exports where possible)
- **Package manager:** npm

## Project Structure

```
app/                  # Next.js App Router root
  layout.tsx          # Root layout (global fonts, metadata)
  page.tsx            # Home page
  globals.css         # Global styles (Tailwind base)
public/               # Static assets (images, icons, etc.)
```

## Pages

The site has 5 confirmed pages (6th TBD):

| Route | Page | Primary Audience | SEO Focus |
|---|---|---|---|
| `/` | Home | General / all visitors | Brand awareness, "educational apps for K-12" |
| `/about` | About | General | Company mission, team, trust signals |
| `/teachers` | Teachers | K-12 educators | "classroom tools", "teaching apps", grade-level resources |
| `/parents` | Parents | Parents of K-12 students | "learning apps for kids", "homework help", "educational games" |
| `/apps` | Apps | All | Product listings, app features, age-group filtering |

## Company Details

- **Company name:** Quackenworth
- **Sector:** EdTech (Educational Technology)
- **Products:** Educational apps and websites
- **Target users:** Teachers and parents of K–12 students
- **Student age groups:** Elementary (5–10), Middle School (11–13), High School (14–18)

## SEO Guidelines

Each page must include:
- A unique `<title>` tag (50–60 chars)
- A unique `<meta name="description">` (150–160 chars)
- Proper heading hierarchy (one `<h1>` per page)
- Semantic HTML landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`)
- `alt` attributes on all images
- Open Graph tags (`og:title`, `og:description`, `og:image`) on every page

Use Next.js `metadata` exports (not `<Head>`) for all SEO metadata.

### Per-Page SEO Notes

**Home (`/`):** Target broad brand keywords. Emphasize the company value proposition for both teachers and parents. Include CTAs pointing to `/teachers`, `/parents`, and `/apps`.

**About (`/about`):** Focus on trust, mission, and credibility. Keywords: "educational technology company", "K-12 learning solutions", "EdTech".

**Teachers (`/teachers`):** Target educator-specific keywords: "classroom apps", "teacher resources", "lesson planning tools", "K-12 teaching tools". Mention grade levels explicitly.

**Parents (`/parents`):** Target parent-focused keywords: "educational apps for kids", "learning apps at home", "homework help tools", "kids educational games". Mention age groups explicitly.

**Apps (`/apps`):** Product-focused SEO. Each app/product should have clear descriptions with grade-level and subject-matter keywords. Consider structured data (`schema.org/SoftwareApplication`).

## Branding

### Colors
| Token | Value | Usage |
|---|---|---|
| Blue (brand) | `#00aeef` | Header accent bar, links hover, CTAs |
| Orange (brand) | `#F5A623` | Logo icon, accent highlights |
| White | `#ffffff` | Page background |
| Foreground (text) | `oklch(37% 0.013 285.805)` = `text-zinc-700` | **All body text, headings, and UI text** — use `text-zinc-700` in Tailwind |

### Header Layout
- **Top:** 10px blue accent bar (`#00aeef`), full width
- **Main header:** Dark navy (`#1a2f4a`), sticky, `z-50`
  - Left: nav links — Apps, Teachers, Parents, About (white text, uppercase, hover → `#00aeef`)
  - Right: Quackenworth logo (orange arrow icon + white wordmark)
- Logo is currently an SVG placeholder in `Header.tsx` — replace with `/public/logo.png` when available

### Typography
- Font: Geist Sans (Google Fonts via `next/font`)
- No dark mode — site is always light/white

### Principles
- Prefer accessible color contrast (WCAG AA minimum)
- Design should feel trustworthy and approachable — appropriate for both educators and families

## Responsive Design (Required)

Every page and component **must** be fully responsive across all three breakpoints:

| Breakpoint | Target | Tailwind prefix |
|---|---|---|
| Mobile | Phones (320px–767px) | *(default, no prefix)* |
| Tablet | Tablets (768px–1023px) | `md:` |
| Desktop | Laptops/monitors (1024px+) | `lg:` |

### Rules
- **Mobile-first:** Write base styles for mobile, then layer `md:` and `lg:` overrides
- Never use fixed pixel widths that break on small screens — use `w-full`, `max-w-*`, percentages, or flex/grid
- Navigation must collapse to a hamburger menu on mobile
- Font sizes, spacing, and layout must scale appropriately at every breakpoint
- Images must use responsive sizing (`w-full`, `object-cover`, or `next/image` with `fill` / responsive `sizes`)
- Touch targets (buttons, links) must be at least 44×44px on mobile
- Test every new page/component at 375px (mobile), 768px (tablet), and 1280px (desktop) before considering it done

## Development Conventions

- Use the **App Router** (`app/` directory) exclusively — no `pages/` directory
- Use **TypeScript** for all files (`.tsx` / `.ts`)
- Use **Tailwind CSS** for all styling — no inline `style` props or separate CSS modules unless necessary
- Component files go in `app/components/` or `components/` at root
- Keep pages lean — extract reusable UI into components
- No `use client` unless interactivity requires it — prefer React Server Components
- Run `npm run lint` before committing

## Commands

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run lint      # Run ESLint
```
