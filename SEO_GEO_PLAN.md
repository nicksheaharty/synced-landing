# Synced SEO + GEO Expansion Plan

Handoff document for the agent building out syncedinbox.com. Read all of it before touching code. Sections 1–4 are constraints and rules; sections 5–9 are the work.

Status: implemented 2026-09-13 (147 registry pages). See README.md for how it works and content/AUTHORING.md for the verified product facts.

---

## 0. TL;DR

- The site today is 7 pages, one primary CTA (Google Form waitlist), good baseline metadata/JSON-LD, static-exported Next 16 on GitHub Pages.
- Goal: grow to ~120–150 indexable, genuinely useful pages across 10 content clusters, wired into a keyword→URL registry so we never cannibalize ourselves, and structured so LLM search engines (ChatGPT, Perplexity, Gemini, Claude) can cite us.
- Non-negotiables: **one intent → one URL**, **no fabricated social proof** (we are a private beta), **every page reuses the existing design system** (serif Mackinac headings, Indivisible body, the `.container` / `.eyebrow` / `.section-heading` / `.feature-grid` / `.faq-item` / `.cta-inner` patterns already in the codebase), and **no AI-slop copy** (see §4 for the concrete rules).
- Biggest technical decision: GitHub Pages can't do 301s. Either get every slug right the first time (registry enforces this) or move hosting to Cloudflare Pages / Vercel before launch (recommended, see §3.4).

---

## 1. Current state audit

### 1.1 Stack and deploy

| Item | Value |
|---|---|
| Framework | Next.js 16.2.9, App Router, React 19, Tailwind v4 (barely used; most styling is inline `<style>` blocks per page) |
| Output | `output: "export"` → static HTML in `out/` |
| Hosting | GitHub Pages via `.github/workflows/nextjs.yml`, custom domain `syncedinbox.com` (`public/CNAME`) |
| Base path | `NEXT_PUBLIC_BASE_PATH` (empty in prod) — every internal href is `${BASE}/...`; new pages must keep doing this |
| Site URL | `NEXT_PUBLIC_SITE_URL=https://syncedinbox.com` (`.env.production`) |
| Fonts | Typekit: `p22-mackinac-pro` (headings, 700), `indivisible` (body, 500) — loaded in `app/layout.tsx` |
| Icons | `react-icons/pi` (Phosphor duotone) + a couple `react-icons/si` |
| Images | `next/image` with `unoptimized: true`; logo3d.webp, social-preview.png |
| `out/` | Committed to git. Should be gitignored (the workflow rebuilds it). Low priority cleanup. |

### 1.2 Existing routes

| Route | Indexed | Notes |
|---|---|---|
| `/` | yes | Hero, app showcase (real `AppMessageCard`), integrations strip, 6-feature grid, pricing (3 cards), CTA |
| `/pricing` | yes | 3 plans, comparison table, 7-item FAQ. Duplicates the homepage pricing section almost verbatim |
| `/get-started` | yes | Web + iOS setup steps, glossary (Inboxes / Action Plan / Decide / Tasks) |
| `/security` | yes | 6 control cards, link to privacy |
| `/team` | yes (`robots: index: true`) — commit `090d483` says "unindexed"; the layout says index. Resolve intent. | Person JSON-LD for Aum Dhruv (CEO) and Nick Harty (CTO) |
| `/privacy`, `/terms` | yes | Long legal pages, `.legal-card` pattern |
| `/qr` | yes, in sitemap? no | Utility page; add `robots: noindex` |
| `/#features`, `/#integrations`, `/#pricing` | anchors | Nav "How it works" and footer "Features"/"Integrations" point at anchors, not pages |

### 1.3 SEO plumbing already in place (keep, extend)

- `app/layout.tsx`: full `metadata` object, Organization + WebSite + SoftwareApplication JSON-LD `@graph` with stable `@id`s (`/#organization`, `/#website`, `/#software`). New pages should reference these IDs.
- `app/components/PageStructuredData.tsx`: WebPage + 2-level BreadcrumbList. Needs to support N levels (§6.2).
- `app/sitemap.ts`: hardcoded array with one shared `lastModified`. Must become registry-driven (§6.3).
- `app/robots.ts`: allow all. Needs explicit AI-crawler allowances (§7.3).
- `public/llms.txt`: hand-written, 7 links. Must become generated (§7.2).
- Per-route `layout.tsx` files carry `metadata` + `PageStructuredData` because page files are `"use client"`. Keep this split: **layout = metadata (server), page = UI**.

### 1.4 Cannibalization / hygiene issues to fix before adding content

The video findings say: fix old content before creating new. Here is what's actually overlapping today:

1. **Homepage pricing section vs `/pricing`.** Same H2 ("Simple pricing, no surprises."), same three cards, same footnote. Google will pick one. Fix: shrink the homepage section to a teaser (plan names + price + one line + "See pricing" link), keep the H2 but not the same string; `/pricing` owns the intent.
2. **`/get-started` vs future `/help/*`.** `/get-started` is the "set up Synced" page. Help articles must be narrower (one task each) and link up to it. Never write a second "getting started" page.
3. **Nav "How it works" → `/#features`.** Once `/how-it-works` exists (§5.1), point the nav there and keep the homepage `#features` section as a summary that links to it.
4. **Footer "Get Started" + "Get Started guide"** both → `/get-started`. Harmless but sloppy; dedupe when the footer is rebuilt (§6.5).
5. **Footer "Careers" / "Contact" / "Support" → `mailto:nick@storiara.com`.** Off-brand domain. Replace with `/contact` page (§5.10) and a `@syncedinbox.com` address (confirm with Nick which one exists).
6. **`/team` index intent** — decide and make the layout match.
7. **`/qr`** — noindex it.

There is no year-based slug problem yet. Registry rules (§3.2) prevent one from appearing.

---

## 2. Product facts (source of truth for all copy)

Everything below is pulled from the current site. Do not invent features, integrations, metrics, customers, or quotes. If a page needs a fact that isn't here, leave a `<!-- TODO: confirm with Nick -->` and move on.

- **What it is:** Synced is an AI inbox assistant. It connects to email, messages, cloud storage, and calendar; searches them; drafts replies and documents; coordinates schedules; turns messages into tasks; manages follow-ups. It prompts *you* with decisions only you can make and handles the rest.
- **Status:** Private beta on web (`mail.syncedinbox.com`, desktop only) and iOS. Android "coming soon". Primary CTA: "Get Early Access" → `https://forms.gle/g64ZQ3Wy7hhp1M6X7`. Enterprise: `https://forms.gle/tP89zuGpCL1BsR6f6`.
- **Sign-in:** phone number + 6-digit SMS code, not a password. Same account on web and mobile.
- **Core nouns (capitalized product terms):**
  - **Inboxes** — connected mailboxes/channels (input connectors).
  - **Action Plan** — what Synced generates from one message: the steps it takes or proposes.
  - **Decide** — queue of pending approvals/questions. On mobile it's called "Answer".
  - **Tasks** — human to-dos delegated to you, tracked in one list.
  - **Messages** (web) / **Home** (mobile) — the conversation list.
- **Integrations shown on site (13):** Gmail, Outlook, Slack, Microsoft Teams, WhatsApp Business, Zoom, iMessage, Google Drive, OneDrive, Dropbox, Notion, GitHub, Calendar (Google Calendar).
  - Free tier: Gmail, Drive, OneDrive, Calendar. Pro adds Notion, GitHub, Slack, Teams (and Dropbox per the comparison table).
  - The privacy policy documents Google scopes: `userinfo.email/profile`, `calendar`, `contacts.readonly`, `contacts.other.readonly`, `drive.readonly`, `gmail.readonly`, `gmail.modify`.
- **Pricing:** Free $0/user, 20 Action Plans/week. Pro $29.99/user/month or $24.99 billed annually, 100 Action Plans/week, priority support. Enterprise: custom limits, SSO, admin controls, security review, custom contract, dedicated support. Weekly count resets 7 days from first Inbox connection. Overage: messages wait until reset.
- **Security claims we can make:** AI-drafted messages require user approval before sending. Workspace data is not used to train models. TLS in transit, encrypted at rest. Team doesn't read connected data except support/consent/security investigation. Users can disconnect integrations and request deletion. Google API Services User Data Policy / Limited Use compliance.
- **People:** Aum Dhruv (CEO, linkedin.com/in/aumdhruv), Nick Harty (CTO, linkedin.com/in/nicksheaharty). Socials: linkedin.com/company/syncedinbox, instagram.com/syncedinbox.
- **Existing voice samples** (match this register — dry, specific, lightly funny, never hype):
  - "An 11:58 PM 'quick thing' from your boss becomes a rebuilt deck and a diplomatic reply, before you've even opened your laptop."
  - "Instead of you prompting Synced, Synced comes to you with the decisions only you can make, then handles everything else."
  - "yep, added it to the calendar and told everyone to bring a side, no ambush green bean casserole this year"
  - "Email as easy as iMessage."

---

## 3. Rules that apply to every page

### 3.1 One intent, one URL

Before creating any page, the agent must:
1. Write its **primary keyword/intent** and check the registry (§6.1) — if another page owns that intent or a semantic synonym ("best X" vs "top X" are the same intent; BERT clusters them), **extend that page instead**.
2. For any pair of candidate pages that look close, apply the **70% SERP overlap rule**: search both queries; if ≥7 of the top 10 results are the same URLs, it's one page.
3. **Evergreen slugs only.** Never `/best-ai-email-assistants-2026`. Use `/best-ai-email-assistants` and update the body + `dateModified` annually.
4. No modifier-only variants (`/gmail-ai-assistant` and `/ai-assistant-for-gmail` are one page).

### 3.2 Slug conventions

- Lowercase, hyphenated, no stop-word padding, no years, no trailing slash (`trailingSlash: false`).
- Hub/spoke: `/integrations` → `/integrations/gmail`. `/compare` → `/compare/synced-vs-superhuman`. `/glossary` → `/glossary/action-plan`.
- Slug is the primary keyword or the entity name, nothing else.
- Once published, a slug is permanent (see §3.4).

### 3.3 Honesty constraints (this is a private beta)

- **No fake testimonials, logos, star ratings, user counts, "trusted by", or made-up metrics.** Zero. If we want social proof, the honest options are: founder credibility (link to `/team`), the fact that AI drafts always require approval (a trust feature), the Google Limited Use compliance, and concrete product screenshots.
- Comparison pages: every competitor claim must come from the competitor's own public pricing/docs page, cited with a link and a "checked on [date]" note. When unsure, say "as of our last check" or leave the cell blank. Never disparage.
- "Coming soon" features stay labeled as such.
- No `AggregateRating` or `Review` schema anywhere.

### 3.4 Redirects on GitHub Pages (decision needed)

GitHub Pages cannot issue 301s. The video findings are explicit that canonicals are hints and only 301s move authority. Options:

- **A (recommended):** Move hosting to **Cloudflare Pages** (`_redirects` file, free) or **Vercel** (`vercel.json` redirects / `next.config` redirects work there). Both MCP connectors are available in this workspace. Keep `output: "export"` either way; nothing else changes. Do this in Phase 0 before the URL count grows.
- **B:** Stay on GitHub Pages and treat slugs as immutable. If a URL ever must move: keep a stub at the old path with `<meta http-equiv="refresh" content="0;url=...">`, `<link rel="canonical">` to the new URL, `noindex`, and drop it from the sitemap. Weaker, but workable.

Do not build a `next.config` `redirects()` block while on GitHub Pages — it silently does nothing in static export.

### 3.5 Metadata checklist (per page)

Every route's `layout.tsx` must export `metadata` with:
- `title` — ≤60 chars, primary keyword first, `| Synced` suffix (match existing pattern: "AI Inbox Assistant Pricing | Synced").
- `description` — 140–160 chars, contains the primary keyword, written as an answer not a teaser.
- `alternates.canonical` — absolute path (`/integrations/gmail`); `metadataBase` already handles the domain.
- `openGraph` (`title`, `description`, `url`, `type`, `siteName: "Synced"`, `images`) and `twitter` inherit from root if omitted — but set OG title/description explicitly, they're often shorter.
- Per-page OG image via `opengraph-image.tsx` (§6.4) once the generator exists; until then `/social-preview.png`.
- `PageStructuredData` (WebPage + BreadcrumbList) plus the page-type schema from §7.1.
- `robots` only when noindexing.

---

## 4. Design system + anti-slop rules

The whole point of the "stick to the design" instruction: new pages must be indistinguishable in quality from `/pricing` and `/security`. A reader should not be able to tell which pages were generated.

### 4.1 Reuse, don't reinvent

Extract shared UI before writing content pages. Today each page duplicates ~200 lines of CSS in a `<style>` block. Phase 0 creates these components (all in `app/components/`) by lifting the exact existing CSS, not rewriting it:

| Component | Lifted from | Used for |
|---|---|---|
| `PageHero` | `.pricing-hero-section` / `.learn-hero-section` / `.security-hero` (they're the same pattern: `.eyebrow` + serif `h1` clamp(2.25rem,5vw,3.5rem) + muted sub ≤560px) | every non-home page top |
| `SectionHeader` | `.uppercase-label` + `.section-heading` + `.section-sub` | every section |
| `FeatureGrid` / `FeatureCard` | `.feature-grid` (2-col, 24px radius, hairline dividers, Phosphor duotone icon in `hsl(var(--primary)/.1)` tile) | feature/benefit lists — **max 6 items, never 3-col** |
| `Faq` | `.faq-list` / `.faq-item` `<details>` | FAQ on every content page; pairs with FAQPage schema |
| `CtaBand` | `.cta-section` / `.cta-inner` (the rounded 32px card with the radial glow) | bottom of every page, one button, "Get Early Access" |
| `StepList` | `.step-list` / `.step-num` from get-started | how-to guides |
| `CompareTable` | `.compare-table-wrap` from pricing | comparison pages |
| `Prose` | new, but styled from `.legal-body` (privacy page) | long-form article body: `h2` serif 1.5rem, `p` 1rem/1.7 muted-fg max-width 68ch, `ul` with primary-colored markers, `code` in `hsl(var(--muted))` |
| `ProductWindow` | `.product-window` + `.product-window-bar` (macOS-dots chrome) | wrapping any screenshot or live component |
| `RelatedLinks` | new; style like `.glossary-grid` items (icon + term + one line) | internal linking block |
| `AnswerBox` | new; style like `.legal-callout` but lighter — 1px border, 16px radius, `hsl(var(--card)/.7)` | the "In short" answer-first block for GEO |

Move the shared CSS into `globals.css` (or a `app/components/content.css`) once and delete the duplicates from `pricing/page.tsx`, `get-started/page.tsx`, `security/page.tsx`. Verify visually that those three pages are pixel-identical after the refactor before moving on.

### 4.2 Visual rules

- Headings: `p22-mackinac-pro` 700, negative tracking (-.025 to -.04em), sentence case. **Never Title Case, never ALL CAPS except `.uppercase-label`.**
- Body: `indivisible` 500, `hsl(var(--muted-fg))` for secondary text, `hsl(var(--fg))` for primary.
- One accent color: `hsl(248 89% 55%)` (#4429F2). No gradients on text. No second accent. No colored section backgrounds beyond `hsl(var(--card)/.46)` (features) and the CTA card.
- Radii: 8px buttons, 12–13px icon tiles, 14–16px small cards, 20–24px large cards, 32px CTA band, 999px pills. Nothing else.
- Borders: `1px solid hsl(var(--border)/.75)`. Shadows only the two existing recipes (`0 20px 55px rgba(35,27,72,.055)` cards, `0 24px 70px rgba(35,27,72,.06)` CTA).
- Icons: Phosphor **duotone** only (`react-icons/pi`, `Pi*Duotone`), 22px, inside the 40px primary-tinted tile. Brand logos from `react-icons/si` or the existing `GmailIcon`.
- Images: real product screenshots (ask Nick for a set: Messages, Decide, Tasks, mobile Home, Settings → Inboxes) wrapped in `ProductWindow`. **No stock photos, no abstract 3D blobs, no illustrated people, no AI-generated imagery.** The one 3D logo on the homepage is the exception; don't reuse it as decoration.
- Spacing: sections 5–8rem vertical, `.container` max 1120px. Content prose max-width ~68ch.
- Motion: only what exists (hover scale 1.05–1.06 on icon tiles, `:active` scale .97). Respect `prefers-reduced-motion`.
- Mobile: every template checked at 390px. Tables inside `overflow-x: auto` wrapper.
- Dark mode: site is light-only (`colorScheme: "light"`). Don't add dark mode.

### 4.3 Copy rules (the anti-slop list)

Ban list — if any of these appear, the page fails review:
- Words: unlock, supercharge, revolutionize, transform, empower, elevate, seamless(ly), effortless(ly) (except in the existing feature title), game-changer, cutting-edge, robust, leverage, harness, delve, navigate (the metaphorical kind), landscape, realm, tapestry, "in today's fast-paced world", "in the digital age", "whether you're a … or a …", "look no further", "it's important to note", "at the end of the day".
- Structures: an intro paragraph that restates the title; a "Conclusion" or "Final thoughts" H2; three-item lists where every item is exactly one sentence of equal length; bolded lead-ins on every bullet; rhetorical questions as H2s ("Why does this matter?"); emoji anywhere; exclamation marks; more than one em dash per paragraph; "Not X, but Y" constructions more than once per page.
- Headings that are generic ("Benefits", "Features", "Overview"). Every H2 should be specific enough to stand alone as a search snippet: "What Synced does with a Gmail thread" not "How it works".
- Filler FAQ ("Is Synced easy to use?"). FAQ questions come from real query patterns (People Also Ask, Reddit, GSC once we have data).

Do list:
- Functional verbs from the findings: search, draft, schedule, sync, track, approve, flag, reconcile, connect.
- Concrete nouns and numbers: "20 Action Plans a week", "a 6-digit code", "the 11:58 PM email".
- Short paragraphs (2–4 sentences). Vary sentence length. Contractions fine.
- Say what Synced *doesn't* do when relevant. It builds trust and reads human.
- First-person plural sparingly ("we") — the site mostly uses second person ("your inbox") and product-as-subject ("Synced drafts…").
- Every page opens with the answer (see §7.4), not a preamble.
- Length is whatever the intent needs: glossary entries 250–500 words, integration pages 700–1100, guides 900–1600, comparisons 1200–2000. Do not pad to hit a number.

### 4.4 Review gate

Before any batch is merged, one agent pass reads every new page cold and answers: *Could this have been written by the person who wrote the pricing FAQ?* If no, rewrite. Also run the ban-list grep (§9.4).

---

## 5. Page inventory by cluster

Counts are targets, not quotas. Each entry lists slug, primary intent, and what makes the page non-thin. "Verify" means run the 70% overlap check first.

### 5.1 Product pages (8 + hub)

Own the branded/product intent so nobody else (review sites, competitors) ranks for "Synced [feature]".

| Slug | Intent | Content |
|---|---|---|
| `/how-it-works` | "how does synced work", replaces `#features` anchor | The Connect → Action Plan → Decide loop as a `StepList`, one real screenshot per step, then the 6 features from the homepage with a paragraph each and links to the feature pages |
| `/features/action-plans` | "synced action plan" | What one is, how counting works (ties to pricing FAQ), examples of a 1-step vs 4-step plan (reuse `AppMessageCard` with different data) |
| `/features/decide` | "synced decide queue" | Approvals, questions, what shows up, what doesn't; mobile "Answer" |
| `/features/tasks` | "synced tasks" | Delegation from a conversation, tracking |
| `/features/inboxes` | "connect inboxes synced" | Input connectors vs output integrations (the pricing table draws this distinction — explain it) |
| `/features/search` | "search email and files with ai" | Cross-source search: Gmail + Drive + Notion in one query |
| `/features/drafting` | "ai email drafting" | Draft replies/docs, approval-before-send |
| `/features/scheduling` | "ai meeting scheduling from email" | Calendar checks, proposing times, contacts autocomplete |
| `/features/follow-ups` | "automated email follow-ups" | Tracking what's waiting on whom |
| `/ios`, `/android` | app-store intent | iOS: TestFlight/private beta path, screenshots, `MobileApplication` schema. Android: honest "not yet" + waitlist. |

### 5.2 Integrations (13 spokes + hub)

Highest commercial intent we can own early: "[tool] ai assistant", "ai for gmail", "slack email integration ai".

- Hub `/integrations`: grid of all 13 (reuse `.agency-badge` visuals), grouped Input (Inboxes) vs Output, free-vs-pro badges.
- Spokes `/integrations/{gmail,outlook,slack,microsoft-teams,whatsapp-business,zoom,imessage,google-drive,onedrive,dropbox,notion,github,google-calendar}`.
- Every spoke has the same skeleton (build one template, `app/integrations/[slug]/page.tsx` + `generateStaticParams` over the registry):
  1. `PageHero`: "Synced for Gmail" + one-sentence functional description.
  2. `AnswerBox`: what Synced does with this integration in 2–3 sentences.
  3. "What Synced can do with [tool]" — 3–5 concrete scenarios written for *this* tool (a Gmail scenario is not a Slack scenario; no template sentences with the tool name swapped).
  4. "How to connect [tool]" — `StepList`, real steps from the app (ask Nick for the settings flow per integration).
  5. "Permissions Synced asks for" — for Google tools, the exact scopes from the privacy policy; for others, what's known. This is the trust section and also unique content.
  6. "Plan availability" — Free / Pro.
  7. FAQ (3–5, tool-specific).
  8. `RelatedLinks`: 2–3 sibling integrations that pair with it + the relevant feature page + a guide.
  9. `CtaBand`.
- Schema: WebPage + BreadcrumbList (Home › Integrations › Gmail) + FAQPage. Consider `SoftwareApplication` `featureList`.
- **Pair pages** (`/integrations/gmail-to-notion`) — only if a real workflow exists and search intent is distinct (e.g. "turn emails into notion tasks"). Verify. Cap at 5 in Phase 3.

### 5.3 Use cases / who it's for (8 + hub)

Answers the "Is it right for me?" question from the 7 essential questions, and captures "[role] email assistant" queries.

- Hub `/for`: short intro + cards.
- `/for/founders`, `/for/executive-assistants`, `/for/sales`, `/for/recruiters`, `/for/consultants`, `/for/agencies`, `/for/real-estate-agents`, `/for/small-business-owners`.
- Skeleton: hero in the persona's language ("You're the bottleneck in 40 threads a day") → three real scenarios with `AppMessageCard`-style examples specific to the role → which integrations matter for this role → honest fit/no-fit paragraph ("Synced isn't a CRM; if you need pipeline reporting, pair it with one") → FAQ → CTA.
- Verify each against the others: "founder" vs "small business owner" may collapse into one. Run the overlap check.

### 5.4 Comparisons and alternatives (10–14)

Two distinct intents; keep them separate but cross-linked:

- **`/compare/synced-vs-{competitor}`** — "synced vs superhuman" (people already using or evaluating a named tool). Candidates: Superhuman, Shortwave, Fyxer, Gemini in Gmail, Copilot in Outlook, Notion Mail, SaneBox, ChatGPT (for email), Missive, Spark. Pick 8 after checking each has real search volume.
  - Skeleton: `AnswerBox` verdict (who should pick which) → side-by-side `CompareTable` (pricing, platforms, approval-before-send, integrations, model-training policy, human-in-loop) with source links and "checked [date]" → 3 "where X is better" paragraphs (yes, honestly) → 3 "where Synced is better" → FAQ → CTA.
- **`/alternatives/{competitor}-alternatives`** — list intent, different SERP. Only build if the overlap check with the `/compare` page is <70%. Likely: `superhuman-alternatives`, `sanebox-alternatives`, `fyxer-alternatives`.
- **`/best-ai-email-assistants`** — evergreen listicle, no year in slug. Include Synced honestly as one entry with "private beta" noted. This is a GEO magnet: LLMs love ranked lists with criteria. Refresh quarterly, bump `dateModified`.

### 5.5 Glossary (25–35 entries + hub)

GEO's best cluster: definition-first pages get cited. Cheap to write well.

- Hub `/glossary`: alphabetical list, `DefinedTermSet` schema.
- Entries `/glossary/{term}` with `DefinedTerm` schema. Two groups:
  - **Synced terms:** action-plan, decide-queue, inbox-connector, output-integration, human-in-the-loop-approval.
  - **Category terms:** ai-inbox-assistant, ai-email-assistant, agentic-email, email-triage, inbox-zero, email-summarization, smart-reply, follow-up-tracking, email-to-task, calendar-coordination, natural-language-search, unified-inbox, email-delegation, limited-use-policy (Google), oauth-scopes, gmail-modify-scope, read-only-access, encryption-at-rest, draft-approval, context-window (as it applies to email), retrieval (RAG in plain English), llm, ai-agent.
- Skeleton: term as H1 → one-sentence definition in `AnswerBox` (this exact sentence is what LLMs will quote; write it to be quoted) → 2–4 short paragraphs (how it works, why it matters, common confusion) → "How Synced uses this" (1 paragraph, only if genuinely relevant) → 2–3 related terms.
- Guardrail: a glossary entry must not compete with a feature page. `/glossary/action-plan` defines; `/features/action-plans` sells. Different intent, different depth; the glossary entry links to the feature page in its first paragraph.

### 5.6 Guides (20–30 + hub)

Informational "how to" intent where Synced is one of several methods. These earn links and citations.

- Hub `/guides`.
- Candidates (verify volume, dedupe against glossary and help):
  - `how-to-get-to-inbox-zero-with-ai`
  - `how-to-automate-email-follow-ups`
  - `how-to-summarize-long-email-threads`
  - `how-to-schedule-meetings-from-email`
  - `how-to-turn-emails-into-tasks`
  - `how-to-search-gmail-and-google-drive-together`
  - `how-to-use-ai-to-draft-email-replies`
  - `how-to-delegate-email`
  - `how-to-manage-multiple-inboxes`
  - `how-to-connect-gmail-to-slack` (tool-pair how-to; not the same as the integration page)
  - `how-to-write-a-follow-up-email` (bridge to templates)
  - `gmail-oauth-scopes-explained`
  - `what-ai-email-tools-do-with-your-data` (trust/education; links security + glossary)
  - `ai-email-assistant-buyers-checklist`
  - `how-to-evaluate-ai-tools-for-email-security`
- Skeleton: `AnswerBox` (the short answer) → `StepList` or H2-per-method → "Doing this with Synced" section (one, near the end, not a sales pitch) → FAQ → related guides.
- Schema: `Article` (author → `/team#nick-harty` or `#aum-dhruv` Person IDs, `publisher` → `/#organization`, `dateModified` real) + `HowTo` where steps exist (Google dropped HowTo rich results in 2023 but it's still useful structure for LLMs) + FAQPage.

### 5.7 Templates (15–20 + hub)

"Follow-up email template" style queries have big volume and directly demo the drafting feature. Must be genuinely good templates, not filler.

- Hub `/templates`.
- `/templates/{follow-up-after-no-response, follow-up-after-meeting, meeting-request, reschedule-meeting, decline-meeting, polite-decline, introduction-email, out-of-office, delegation-email, status-update, cold-email-reply, invoice-reminder, thank-you-after-interview, project-kickoff, check-in-email}`.
- Skeleton: `AnswerBox` with the template itself (copyable block, styled like `code` in `.legal-body`) → when to use / when not → 2 variants (shorter, more formal) → "What Synced would do with this" (one paragraph showing how the draft appears in Decide, screenshot) → related templates.

### 5.8 Help center (15–25 + hub)

Support intent from actual beta users and Google Play/App Store reviewers; also the "Where can I get help?" question.

- Hub `/help` (replaces the mailto "Support" link).
- Articles: `sign-in-with-phone-number`, `didnt-receive-sms-code`, `connect-gmail`, `connect-outlook`, `connect-slack`, `disconnect-an-inbox`, `revoke-google-access`, `what-counts-as-an-action-plan` (short; canonical explanation lives in pricing FAQ — this article links there, doesn't restate at length), `weekly-limit-reset`, `approve-or-reject-a-draft`, `edit-a-draft-before-sending`, `delegate-a-task`, `switch-between-web-and-mobile`, `delete-your-account`, `export-your-data`, `upgrade-to-pro`, `cancel-pro`, `supported-browsers-and-devices`, `known-limitations`.
- Skeleton: H1 as the task → 3–8 numbered steps with a screenshot each → "If that didn't work" → contact link.
- Schema: `TechArticle` + BreadcrumbList. Noindex anything that's beta-internal.
- Cannibalization rule: `/get-started` stays the only "setup overview". Help articles are single tasks.

### 5.9 Blog + changelog

- `/blog` — cadence 2/month minimum after launch. Topics: product thinking (why approval-before-send, why phone sign-in, why "Synced prompts you"), build notes, honest beta updates. This is the E-E-A-T channel: bylined by Aum or Nick, first-person, opinionated. **Not** SEO-first listicles — those live in `/guides`.
- `/changelog` — dated entries, one page (not one page per release until there are 30+). `dateModified` bumps on every update → cheap freshness signal for the whole domain.
- Blog posts use `Article` schema with the Person authors.

### 5.10 Trust + company pages (6)

- `/about` — what Synced is, why, who; plain, factual. Links `/team`. This is the entity page LLMs need to disambiguate "Synced" from the dozens of other things called Synced (see §7.5).
- `/contact` — replaces mailto links. Email + the two forms. Embed the form if possible (§8.3).
- `/faq` — global FAQ (20–30 Qs) aggregating the top question from each cluster, each answer linking to the canonical page. FAQPage schema. This page exists mainly for GEO.
- `/security` — keep; add a "Subprocessors" section and a "Google API Limited Use" section as H2s (don't split into subpages yet; not enough content).
- `/press` — one paragraph, logo pack download, founder bios, contact. Small but signals legitimacy.
- `/roadmap` — optional; only if Nick wants to commit publicly. Android is the obvious entry.

### 5.11 Totals

| Cluster | Pages |
|---|---|
| Product | 11 |
| Integrations | 14 (+ ≤5 pairs) |
| Use cases | 9 |
| Compare / alternatives / best-of | 12 |
| Glossary | 30 |
| Guides | 25 |
| Templates | 16 |
| Help | 20 |
| Blog / changelog | 8 initial + ongoing |
| Trust / company | 6 |
| **Total** | **~150** |

---

## 6. Technical build

### 6.1 Content registry (the cannibalization guard)

Create `content/registry.ts`:

```ts
export type Cluster = "product" | "integration" | "use-case" | "compare" | "alternatives" | "glossary" | "guide" | "template" | "help" | "blog" | "company";

export interface Entry {
  slug: string;            // "/integrations/gmail" — permanent
  cluster: Cluster;
  title: string;           // <title>
  h1: string;
  description: string;     // meta description, 140–160
  primaryIntent: string;   // "ai assistant for gmail" — UNIQUE across registry
  secondaryIntents?: string[];
  parent?: string;         // hub slug for breadcrumbs
  related?: string[];      // slugs for RelatedLinks
  published: string;       // ISO date
  updated: string;         // ISO date → sitemap lastModified + dateModified
  index?: boolean;         // default true
  schema: ("WebPage" | "Article" | "TechArticle" | "FAQPage" | "HowTo" | "DefinedTerm" | "MobileApplication")[];
}
```

- A build-time script (`scripts/check-registry.ts`, run in `prebuild`) fails the build if: duplicate `slug`, duplicate `primaryIntent` (normalized: lowercase, strip stop words and the modifiers best/top/vs/for), any slug containing a 4-digit year, any `related` slug that doesn't exist, any `updated < published`.
- `app/sitemap.ts`, `public/llms.txt` generation, breadcrumbs, RelatedLinks, and hub pages all read from this file. One source of truth.

### 6.2 Content format

Two kinds of pages:

- **Data-driven templates** (integrations, glossary, templates, use cases, compare): typed objects in `content/{cluster}/*.ts` rendered by one `app/{cluster}/[slug]/page.tsx` with `generateStaticParams()` reading the registry. Static export supports this fine.
- **Long-form** (guides, help, blog): MDX in `content/{cluster}/*.mdx` with frontmatter mirrored in the registry; rendered with `next-mdx-remote/rsc` (add dependency) through the `Prose` component so headings/lists/code get the design-system styles. Custom MDX components: `AnswerBox`, `StepList`, `Faq`, `ProductWindow`, `Callout`.
- Extend `PageStructuredData` to accept `crumbs: {name, path}[]` (N levels) and an optional `extra` JSON-LD array for page-type schema.
- Because content pages are server components, drop the `"use client"` + separate layout pattern for them: `page.tsx` exports `metadata` via `generateMetadata()` from the registry and renders `Header`/`Footer` (both already work in server trees; `Header` is a client component, that's fine).

### 6.3 Sitemap

Replace the hardcoded array with a registry map: real `lastModified` per page, `changeFrequency` by cluster (blog/changelog weekly, help monthly, glossary yearly), `priority` (home 1.0, hubs .8, spokes .6, legal .3). Split into `sitemap-{cluster}.xml` + index only if >1,000 URLs (not needed yet). Exclude `index: false` entries.

### 6.4 OG images

Add `app/opengraph-image.tsx`-style generators per cluster using `next/og` `ImageResponse`. Static export renders them at build time for each `generateStaticParams` slug. Design: off-white `hsl(248 30% 97%)` background, small Synced wordmark (load the Mackinac `.otf`/`.woff2` — Typekit URLs won't work in `ImageResponse`; get the font file from Adobe or fall back to a system serif for OG only), title in serif at 64px, cluster label in the `.uppercase-label` style, primary-color rule at the bottom. No gradients, no icons.

### 6.5 Navigation + footer

- Header: `Product` (→ `/how-it-works`), `Integrations`, `Pricing`, `Resources` (simple hover menu: Guides, Templates, Glossary, Blog, Help), CTA. Drop "Security" from the header (it stays in footer + `/how-it-works`). Keep the mobile menu pattern.
- Footer: 5 columns — Product (How it works, Features, Integrations, Pricing, iOS, Android), Use cases, Resources (Guides, Templates, Glossary, Compare, Blog, Changelog, Help), Company (About, Team, Press, Contact, LinkedIn, Instagram), Legal (Privacy, Terms, Security). Generated from the registry's hub entries so it never goes stale.
- Every content page: breadcrumb trail rendered visually above the hero (small, muted, matches `.hero-footnote` style) — not just in JSON-LD.

### 6.6 Internal linking rules

- Hub → every spoke. Spoke → hub + 2–4 siblings + one product page + one guide (all via `related` in the registry, rendered by `RelatedLinks`).
- Homepage links to every hub (integrations strip already links… to nothing — make each badge link to its integration page).
- Money pages (`/pricing`, integration spokes, `/compare/*`) get the most inbound internal links.
- Anchor text = the target's H1 or primary intent, not "click here" / "learn more".
- Max ~1 CTA per screen. The `CtaBand` at the bottom is the only "Get Early Access" on content pages besides the header button.

### 6.7 Performance

- Content pages must not import the homepage's `page.tsx` CSS or the `html-to-image`/`qrcode.react` deps.
- Keep Typekit as-is; add `<link rel="preconnect" href="https://use.typekit.net">`.
- Screenshots as `.webp`, ≤150 KB, explicit width/height, `loading="lazy"` below the fold.
- Target Lighthouse ≥95 on a content page at 390px before scaling to 150 pages.

---

## 7. GEO (LLM search) specifics

### 7.1 Schema by page type

| Page type | JSON-LD |
|---|---|
| All | `WebPage` + `BreadcrumbList` (via `PageStructuredData`) |
| Guide / blog | `Article` (`author` → Person `@id`s in `/team`, `publisher` → `/#organization`, `datePublished`, `dateModified`, `image`) + `FAQPage` when a FAQ exists + `HowTo` when steps exist |
| Help | `TechArticle` |
| Glossary | `DefinedTerm` (`inDefinedTermSet` → `/glossary#set`) |
| Integrations / features | `WebPage` `about` → `/#software`, `FAQPage` |
| Compare | `WebPage` + `FAQPage` (no `Review`/`Rating`) |
| `/ios` | `MobileApplication` (`operatingSystem: iOS`, `applicationCategory: BusinessApplication`, `offers` free) |
| `/pricing` | `Offer`s under `/#software` (`price`, `priceCurrency`, `billingIncrement`) |
| `/about` | `Organization` extended: `foundingDate`, `founder` → Person IDs, `description`, `sameAs` (add Crunchbase/X/App Store when they exist) |

Escape `<` in all JSON-LD (existing pattern does this). Validate with the Rich Results Test on one page per type.

### 7.2 `llms.txt` and `llms-full.txt`

- Generate `public/llms.txt` at build from the registry: H1 + one-paragraph description → "## Canonical pages" (hubs) → one `##` per cluster with `- [title](url): description` lines → "## Important facts" (the current list, extended with pricing and platform facts).
- Generate `public/llms-full.txt`: the same, but with each page's `AnswerBox` text + H2s inlined (plain Markdown). Cap ~200 KB.
- Link both from the footer (tiny "llms.txt" link in the bottom bar) and from `robots.txt` via a comment.

### 7.3 `robots.ts`

Explicitly allow the AI crawlers (they respect robots but some skip pages without an explicit rule): `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-SearchBot`, `anthropic-ai`, `PerplexityBot`, `Google-Extended`, `Bingbot`, `Applebot-Extended`, `CCBot`. Disallow `/qr`, `/team` if the decision is noindex. Keep the sitemap line.

Also: register the site in **Bing Webmaster Tools** (ChatGPT search and Copilot use Bing's index) and submit via **IndexNow** on deploy (add a step to the workflow that POSTs changed URLs).

### 7.4 Answer-first page structure

Every content page opens (directly under the H1/sub) with an `AnswerBox` containing a 2–4 sentence self-contained answer that names the entity ("Synced, an AI inbox assistant, …") and could be lifted verbatim as a citation. Then the H2s. LLM retrievers chunk by heading; each H2 section should make sense on its own without the rest of the page, and should restate the subject noun rather than using "it".

### 7.5 Entity disambiguation

"Synced" is a crowded name. Every page's first mention should be "Synced (syncedinbox.com)" or "Synced, the AI inbox assistant". `/about` is the canonical entity page: consistent legal name, founding year, founders, HQ city (confirm with Nick), product category, one-line description identical to the `WebSite` schema description. Use `sameAs` aggressively once profiles exist: App Store listing, Product Hunt, Crunchbase, G2/Capterra (only when real), X, GitHub org.

### 7.6 Citable original content

LLMs cite pages that contain facts nobody else has. Cheap wins that are *true*:
- The exact Google OAuth scope list and what each is used for (already in the privacy policy; surface it on `/integrations/gmail` and `/guides/gmail-oauth-scopes-explained`).
- The Action Plan counting model (one message = one plan regardless of steps).
- Weekly reset mechanics.
- A public "How we evaluated AI email tools" methodology page backing `/best-ai-email-assistants`.
- Later, when there's real usage data: an anonymized "State of the inbox" stats post. **Not before there's real data.**

---

## 8. Conversion fixes from the video findings (apply alongside content)

These are small and should ship in Phase 0/1 because every new page inherits them.

### 8.1 Hero copy

Current: eyebrow "Your AI Inbox on Autopilot" + H1 "Turn your inbox into completed work." (6 words, borderline aspirational) + a 3-sentence sub.

Findings ask for 10–14 words, functional verbs, "[audience] + [action] + [constraint]", Mom-test clarity. Options to A/B (keep the two-line serif layout; the second line stays in primary color):

1. "Synced reads your email, drafts the replies, / and books the meetings. You approve." (13 words)
2. "An AI assistant that drafts, schedules, and follows up / from your inbox. You just approve." (14)
3. "Your email, handled: replies drafted, meetings booked, / follow-ups tracked. You approve." (11)

Sub shrinks to one sentence naming the sources: "Connects to Gmail, Outlook, Slack, Teams, Drive, and Calendar. Private beta on web and iOS."

Mom test: option 1 passes cleanly.

### 8.2 Single CTA, repeated

Already true (Get Early Access everywhere). Keep it. Add "No credit card. Free plan available." under the hero button — that's the Decoherence lesson and it's true.

### 8.3 Embed the waitlist input

A Google Form link is a trust hit ("Is it legit?") and adds a step before the aha. Options for a static site: Tally/Formspree embed, or a tiny Cloudflare Worker (the Cloudflare MCP is connected) writing to KV/D1 and emailing Nick. Put an email field + button directly in the hero and in `CtaBand`. Keep the Google Form as fallback until the worker exists.

### 8.4 Social proof without lying

Until there are users to quote: founder credibility strip ("Built by [Aum] and [Nick]" → `/team`), the approval-before-send guarantee as a trust badge, Google Limited Use compliance line, real screenshots. Add a "Who else is using it" section only when there are real names.

### 8.5 Answer the 7 questions on the homepage

Map each to a section and check nothing is missing: CTA ✔, What is this (hero) ✔, Right for me (add a compact `/for` row: "Built for founders, EAs, sales, recruiters…" linking to the persona pages), Legit (founders + security line), Who else (see 8.4), How much (pricing teaser + link) ✔, Where's help (footer Help link + `/help` hub).

### 8.6 Aha moment

The aha is "I opened Synced and it had already done the thing." That's the `AppMessageCard` on the homepage — good. On `/get-started`, add a line under step 5: "Within a few minutes of connecting Gmail you'll see your first Action Plans in Decide." and consider a 20-second screen recording (`<video muted autoplay loop playsinline>` in a `ProductWindow`) — the single highest-value asset for both conversion and GEO (video schema).

---

## 9. Execution plan

### Phase 0 — Foundation (do first, ~1 week)

1. Decide hosting (§3.4). If moving, do it now.
2. Hygiene fixes from §1.4 (pricing teaser, `/qr` noindex, `/team` decision, footer mailto → `/contact`).
3. Build `content/registry.ts` + `scripts/check-registry.ts` + `prebuild` hook. Seed with the 7 existing pages.
4. Extract shared components (§4.1) and consolidate CSS. Visual regression check on `/pricing`, `/get-started`, `/security`.
5. `PageStructuredData` → N-level breadcrumbs + `extra` schema. Registry-driven `sitemap.ts`, `llms.txt` generator, `robots.ts` AI crawlers.
6. MDX pipeline (`next-mdx-remote`) + `Prose` component + one sample guide rendered end to end in static export.
7. OG image generator for one cluster.
8. Hero copy + "No credit card" line + waitlist embed (or at least the plan for the worker).
9. Set up GSC + Bing Webmaster + IndexNow step in the workflow.
10. Ask Nick for: product screenshots (list in §4.2), per-integration connect steps, confirmed contact email, HQ/founding facts for `/about`, whether `/team` should index, Mackinac font file for OG images.

### Phase 1 — Own the product (~2 weeks, ~35 pages)

`/how-it-works`, 8 feature pages, `/ios`, `/android`, `/integrations` hub + 13 spokes, `/about`, `/contact`, `/help` hub + 8 core help articles, `/changelog` with the first entries. Update header/footer. Homepage integration badges link to spokes.

### Phase 2 — Own the category (~2 weeks, ~45 pages)

`/glossary` + 30 entries, `/for` + 8 personas, `/best-ai-email-assistants` + methodology, `/faq`.

### Phase 3 — Capture demand (~3 weeks, ~55 pages)

`/compare` × 8, `/alternatives` × 3 (after overlap checks), `/guides` + 25, `/templates` + 16, remaining help articles, ≤5 integration pairs, `/press`.

### Phase 4 — Compound (ongoing)

Blog 2×/month. Changelog on every release. Quarterly refresh of `/best-…` and every `/compare` page (re-verify competitor claims, bump `updated`). 90-day GSC cannibalization audit (§9.3). Prune or merge anything with zero impressions after 6 months.

### 9.1 Per-page definition of done

- Registry entry exists, `check-registry` passes.
- `metadata` per §3.5; JSON-LD per §7.1 validates.
- Opens with `AnswerBox`; H2s specific; FAQ from real questions; `RelatedLinks` populated; `CtaBand` present.
- Uses only shared components; no new one-off CSS unless added to the shared file.
- Ban-list grep clean (§9.4); cold-read review passed (§4.4).
- Lighthouse ≥95 mobile; no horizontal scroll at 390px.
- Facts traceable to §2, the privacy policy, or a cited external source.

### 9.2 Batching for the executing agent

Write one page per cluster first, get it reviewed, *then* fan out. Do not generate 30 glossary entries before one has passed review. When fanning out, give each subagent: the registry entry, §2, §3, §4 verbatim, the approved exemplar page, and nothing else about "SEO".

### 9.3 Measurement + 90-day cannibalization audit

- GSC: Performance → filter by query → if one query shows 2+ URLs with meaningful impressions, or a URL's position swings >20 places week over week, it's flagged.
- `site:syncedinbox.com "query"` spot checks on the top 20 money terms monthly.
- For each flag: pick the winner (rank, 90-day clicks, backlinks; tiebreak fewer inbound internal links), merge unique content into it, 301 (or stub per §3.4 B), update internal links, remove loser from registry.
- Track by cluster: impressions, clicks, avg position, and LLM referrals (`chatgpt.com`, `perplexity.ai`, `claude.ai`, `gemini.google.com` referrers in analytics — add Vercel/Cloudflare analytics or Plausible; no GA needed).

### 9.4 Ban-list grep

Add `scripts/check-copy.ts` to `prebuild`: scans `content/**` and `app/**/page.tsx` for the §4.3 word list (case-insensitive, word-boundary), emoji ranges, `!` outside code, and H2s matching `^(Benefits|Features|Overview|Conclusion|Final thoughts|Why .* matters\?)$`. Fails the build with file:line.

---

## 10. Open questions for Nick

1. Hosting move (Cloudflare Pages vs Vercel vs stay)?
2. Which `@syncedinbox.com` address for contact/support?
3. Should `/team` be indexed?
4. Can you export a screenshot set (web: Messages, Decide, Tasks, Settings → Inboxes, a draft awaiting approval; iOS: Home, Answer, Tasks) and a 20s screen recording?
5. Per-integration connect steps for the non-Google tools (Outlook, Slack, Teams, WhatsApp Business, Zoom, iMessage, OneDrive, Dropbox, Notion, GitHub).
6. Legal entity name, founding year, city for `/about` schema.
7. Which competitors do you actually get compared to in beta calls? (Drives the `/compare` list.)
8. Anything on the roadmap you're willing to publish (Android date, Enterprise features)?
9. Do you have the Mackinac font files for OG image rendering?
