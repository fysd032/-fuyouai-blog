# FuyouAI Blog

English SEO blog for [FuyouAI](https://fuyouai.com) — practical guides on using AI to think more clearly, make better decisions, and turn vague ideas into structured action plans.

**Live site:** `blog.fuyouai.com`

---

## Tech Stack

- **Framework:** [Astro 5](https://astro.build) with static output
- **Styles:** Tailwind CSS + `@tailwindcss/typography`
- **Content:** Astro Content Collections (Markdown)
- **Plugins:** `@astrojs/sitemap`, `@astrojs/tailwind`, `@astrojs/rss`
- **Deployment:** Vercel

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally:

```bash
npm run preview
```

---

## Deploy to Vercel

1. Push the `seo-site/` directory to a GitHub repository
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel auto-detects Astro — no config changes needed (`vercel.json` is already included)
4. Set the production domain to `blog.fuyouai.com` in Vercel project settings

The `vercel.json` is already configured with the correct build command, output directory, and framework.

---

## Project Structure

```
seo-site/
├── src/
│   ├── pages/
│   │   ├── index.astro          # Homepage
│   │   ├── about.astro          # About page
│   │   ├── blog/
│   │   │   ├── index.astro      # Blog listing
│   │   │   └── [slug].astro     # Article detail (dynamic)
│   │   └── rss.xml.js           # RSS feed
│   ├── content/
│   │   ├── config.ts            # Collection schema
│   │   └── blog/                # Markdown articles (10 articles)
│   ├── layouts/
│   │   └── Layout.astro         # Base layout with SEO meta
│   └── components/
│       ├── Header.astro
│       ├── Footer.astro
│       ├── BlogCard.astro
│       └── CTA.astro
├── public/
│   ├── robots.txt
│   └── og/
│       └── default-blog.jpg     # Default OG image
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── vercel.json
```

---

## Adding a New Article

1. Create a new `.md` file in `src/content/blog/`
2. Use the slug as the filename (e.g., `my-article-title.md`)
3. Include all required frontmatter fields:

```yaml
---
title: "Your Article Title"
description: "150-160 char description for SEO"
pubDate: 2026-03-16
author: "FuyouAI"
category: "AI Productivity"
tags: ["tag1", "tag2", "tag3"]
targetKeyword: "primary search keyword"
canonicalURL: "https://blog.fuyouai.com/blog/your-article-slug/"
draft: false
ogImage: "/og/default-blog.jpg"
---
```

4. Write the article body in Markdown
5. Include at least 2 internal links to other existing articles
6. End with a CTA pointing to `https://fuyouai.com`
7. Add a FAQ section at the end

The article will automatically appear on the blog listing page and in the sitemap/RSS feed.

---

## Content Guidelines

- **Length:** 800–1200 words
- **Structure:** One H1, at least 3 H2s, H3s as needed
- **First paragraph:** Establish the topic clearly within 120 words
- **Internal links:** At least 2, pointing to existing articles
- **CTA:** One per article, different phrasing each time, linking to `https://fuyouai.com`
- **FAQ:** 2–4 questions at the end, built around the target keyword
- **Tone:** Clear, practical, professional — see `CLAUDE.md` for brand voice guidelines

---

## SEO Configuration

- **Site URL:** Set in `astro.config.mjs` → `site: 'https://blog.fuyouai.com'`
- **Sitemap:** Auto-generated at `/sitemap-index.xml` by `@astrojs/sitemap`
- **RSS:** Available at `/rss.xml`
- **robots.txt:** Located at `public/robots.txt`
- **Canonical URLs:** Set per-page via frontmatter `canonicalURL` field
- **JSON-LD:** Homepage uses `WebSite` + `Organization`; articles use `BlogPosting`

---

## Customization

- **Brand colors:** Edit `tailwind.config.mjs` → `theme.extend.colors.brand`
- **Navigation:** Edit `src/components/Header.astro`
- **Footer links:** Edit `src/components/Footer.astro`
- **CTA copy:** Edit `src/components/CTA.astro` or pass props when using the component
