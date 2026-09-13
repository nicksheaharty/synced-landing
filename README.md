# syncedinbox.com

Marketing site for Synced. Next.js 16 App Router, deployed on Firebase App Hosting. Every page is prerendered at build time.

```bash
npm ci
npm run dev        # http://localhost:3000
npm run build
```

## Hosting

Firebase App Hosting builds and serves the site from `main` (its adapter runs `next build` and uses the standalone output). DNS for syncedinbox.com is on Cloudflare. To reproduce the production build locally:

```bash
npx -p @apphosting/adapter-nextjs apphosting-adapter-nextjs-build
```

## Pages

- **Hand-built pages** live in their own folders: `/` (`app/page.tsx`), `/pricing`, `/get-started`, `/security`, `/team`, `/privacy`, `/terms`.
- **Everything else** (integrations, features, use cases, comparisons, guides, templates, glossary, help, blog, company pages) is data in `content/`, rendered by a single route, `app/[...slug]/page.tsx`. To add or edit a page, edit its object in `content/<cluster>/`. Read `content/AUTHORING.md` first.

The content registry (`content/registry.ts`) drives the sitemap, `llms.txt`, `llms-full.txt`, breadcrumbs, hub pages, related links, JSON-LD, and OG images (`/og/<slug>.png`).

## Guardrails

`content/validate.ts` runs during every build and fails it on:
- two pages claiming the same search intent (`primaryIntent`), a duplicate slug, or a year in a slug
- broken internal links or related pages
- titles over 65 characters, descriptions outside 90–170
- banned filler words, emoji, exclamation marks, generic headings

Quick check without a full build: `npx tsx scripts/check-content.ts`.

## After deploying

- Submit the sitemap in Google Search Console and Bing Webmaster Tools.
- `INDEXNOW_KEY=<key> npx tsx scripts/indexnow.ts` (see the script for one-time setup).

Strategy and rationale: `SEO_GEO_PLAN.md`.
