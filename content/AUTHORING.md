# Authoring content pages for syncedinbox.com

Read this whole file before writing. `SEO_GEO_PLAN.md` at the repo root has the strategy; this file is the working rulebook.

## How pages work

- Every page is a typed `Page` object (`content/types.ts`) rendered by `app/[...slug]/page.tsx` through `app/components/content/ContentPage.tsx`. You never write JSX or CSS. The design system is fixed; you choose blocks.
- Each cluster folder exports `pages: Page[]` from its `index.ts`. Put one page per file (`content/<cluster>/<slug>.ts`, exporting a named const) and add it to that folder's `index.ts`. **Only edit files inside the folder(s) you were assigned.** Never edit `types.ts`, `registry.ts`, `validate.ts`, `manifest.ts`, or anything in `app/`. If you need a type change or a new URL, say so in your final report.
- Hubs already exist in some `index.ts` files. Keep them first in the array.
- Inline marks in any text field: `[label](/path)` for links, `**bold**`, `` `code` ``. Internal links use root-relative paths with no trailing slash. Only link to URLs in `content/manifest.ts` or existing hand-built pages (`/`, `/pricing`, `/get-started`, `/security`, `/team`, `/privacy`, `/terms`).
- Available blocks: `h2`, `h3`, `p`, `list`, `steps`, `table`, `template`, `callout`, `features` (2-column grid, 2–6 items, icon names from `IconName`), `message` (a mock Synced message card: inbound message + completed steps), `links`, `sources` (external citations with a checked date).

## Check your work

- `npx tsx scripts/check-content.ts --planned --only /your-prefix` after every few pages. It enforces: unique `primaryIntent`, slug format, no year in slug, title ≤65 chars, description 90–170 chars, banned words, no emoji, no `!`, max one em dash per text field, no generic H2s, links resolve to planned URLs.
- `npx tsc --noEmit` for type errors (ignore errors from folders other agents own; they're mid-edit).
- **Do not run `next build` or `npm run dev`.** Other agents are working in the same checkout.

## Required fields, and how to fill them

| Field | Rule |
|---|---|
| `slug` | Exactly as listed in `content/manifest.ts`. |
| `title` | ≤65 chars. Primary keyword first. End with `| Synced`. |
| `h1` | Sentence case. Short. For hubs, end with a period (matches site style: "Glossary."). For article-type pages, no period. |
| `description` | 120–160 chars. Contains the primary keyword. Reads as an answer, not a teaser. |
| `eyebrow` | Short label like `Guide`, `Email template`, `Integration · Inbox`, `Glossary`, `Help`, `Use case`, `Compare`. |
| `intro` | 1–2 sentences under the H1. Specific, human. |
| `answer` | 2–4 sentences, self-contained, quotable by an LLM. Names the subject explicitly ("Synced, the AI inbox assistant, ..." or the concept). No "it" without a referent. |
| `primaryIntent` | The search query this page owns. Must not overlap with another page's intent. |
| `parent` | The hub slug. |
| `related` | 2–4 slugs. Prefer siblings plus one page from another cluster. |
| `published` / `updated` | `"2026-09-13"` |
| `navLabel` / `cardText` | Short label and one-line card text for hubs and related blocks. Always set both. |
| `faqs` | 2–5 real questions people search. Not "Is Synced easy to use?". |
| `schema` | Guides and blog: `"Article"`. Help: `"TechArticle"`. Glossary: `"DefinedTerm"` with `term`. `/ios`, `/android`: `"MobileApplication"`. `/about`: `"AboutPage"`. `/contact`: `"ContactPage"`. Otherwise omit. |

## Product facts (the only facts you may state about Synced)

If you need a fact that isn't here or in the sources listed below, don't write it. Rephrase around it.

- **What it is:** Synced is an AI inbox assistant. It connects to email and messaging accounts, cloud storage, and calendar. It reads incoming messages, searches connected sources for context, drafts replies and documents, proposes meeting times, turns messages into tasks, and drafts follow-ups when asked. Tagline in use: "Your AI Inbox on Autopilot." Core idea: instead of you prompting an AI, Synced comes to you with the decisions only you can make.
- **Status:** Private beta. Web app at `mail.syncedinbox.com` (desktop browsers; phone browsers are pointed to the app). iOS app. Android is planned, no date. Primary CTA is "Get Early Access" (waitlist). Enterprise has a "Contact Sales" form.
- **Sign-in:** phone number plus a 6-digit code sent by text. No password. Same account and history on web and iOS.
- **Vocabulary (capitalize these):** **Inboxes** (connected message sources, also called input connectors), **Action Plan** (the steps Synced takes or proposes for one message), **Decide** (queue of approvals and questions, same name on web and iOS), **Tasks** (to-dos delegated to a human), **Messages** (the conversation list on web and iOS).
- **Live Inboxes:** Gmail, Outlook, Slack, Microsoft Teams, WhatsApp Business, Instagram Business (DMs), Messenger (Facebook Page conversations), SMS via Twilio (texts to your Twilio number), GroupMe.
- **Live output integrations:** Google Drive, OneDrive, Google Calendar. Outlook calendar is live too, included with an Outlook connection.
- **Coming soon (say so plainly):** iMessage, Dropbox, Notion, GitHub. The in-app catalog also lists many future connectors (Jira, Linear, HubSpot, Asana, Stripe, QuickBooks, Figma, etc.) as coming soon; don't build pages for them, but you may say "more connectors are listed as coming soon in the app."
- **Not supported:** Zoom has no connector. Don't claim one.
- **Plans:** Free $0/user, 20 Action Plans/week, Gmail + Drive + OneDrive + Calendar. Pro $29.99/user/month or $24.99/user/month billed annually, 100 Action Plans/week, all integrations, priority support. Enterprise: contact sales, custom limits, SSO and admin controls, security review and custom contract, dedicated support. Inboxes are unlimited on every plan, 4 accounts each. One message = one Action Plan regardless of steps; counts whether Synced finishes it or hands it to Decide. The count resets every Monday at 00:00 UTC. Past the limit, messages still arrive; new requests become to-dos in Tasks (with steps) instead of agent work, and replies on plans already in progress continue and don't count. Plan changes apply next billing cycle.
- **Safety and data:** Every AI-drafted message needs the user's approval before sending. Google Workspace data is not used to train generalized AI/ML models. Follows the Google API Services User Data Policy including Limited Use. Has completed Google's restricted-scope OAuth verification, including the CASA security assessment. TLS in transit, encrypted at rest. Staff don't read connected data except for user-requested support, written consent, or security investigations. Users can disconnect integrations anytime and revoke Google access at myaccount.google.com/permissions. Account deletion removes stored tokens and cached data within 30 days. Service providers include Google Cloud Firebase/Firestore and LLM APIs such as OpenAI or Anthropic, bound not to train on the data.
- **Google scopes (from the privacy policy):** `userinfo.email`, `userinfo.profile` (identity); `calendar` (read availability, create/modify events); `contacts.readonly`, `contacts.other.readonly` (autocomplete invitees via People API); `drive.readonly` (search and read Drive files for context); `gmail.readonly` (search messages, read details/headers, summarize threads); `gmail.modify` (create drafts, send approved emails); `gmail.settings.basic` (read and update the Gmail out-of-office auto-reply).
- **Company:** Synced Inc., founded in 2025, based in San Francisco.
- **People:** Aum Dhruv, CEO (Princeton ORFE; built TigerMeet.org, used across Princeton, Penn, UF, and Brandeis for 10,000+ meetings; Amazon internships on AR hardware; worked at the SEC). Nick Harty, CTO (Engineering and Economics at Wharton; shipped product inside regulated institutions; coordinated 400 congressional offices for the Congressional App Challenge). Founders have built together since middle school. Socials: linkedin.com/company/syncedinbox, instagram.com/syncedinbox.
- **Verified against the app code (2026-09-13), overrides anything above:**
  - App tabs on iOS are **Messages, Decide, Tasks, Settings**. Don't use "Home" or "Answer".
  - The Action Plan count resets every Monday at 00:00 UTC. Past the limit, messages still arrive; new requests become to-dos in Tasks (with steps) instead of agent work, and replies on plans already in progress continue and don't count. Don't say "7 days from your first Inbox".
  - Say "unlimited Inboxes, 4 accounts each". Don't say "as many as you want".
  - Follow-ups: Synced does not detect quiet threads or draft nudges on its own. You ask it to follow up, it drafts for approval, and you can schedule the send. The Sent filter shows conversations waiting on the other side. Scheduled sends aren't cancelled if the person replies first.
  - Undo send covers messages you write or forward yourself (off/5/10/20/30s, default 8s). Approved AI drafts have no undo window.
  - WhatsApp, Instagram, and Messenger replies only work within 24 hours of the person's last message. The Instagram connector covers DMs, not post comments.
  - Microsoft Teams covers one-on-one and group chats, not channel posts. Google Drive and OneDrive access is read-only.
  - Disconnecting an integration removes that account's conversations, messages, files, and tasks from Synced; reconnecting doesn't restore them.
  - Don't mention that iOS sign-in is limited to US (+1) numbers (founder decision). iOS 16.4 or later, no iPad app. No in-app billing is live yet.
  - Mailbox-wide search of old mail was removed. Synced can look up public web pages when a request needs it.
- **Extra source for product behavior:** the mobile app repo at `~/synced-mobile-app` (read-only; never modify it). Use it to confirm how a feature actually behaves (e.g. `constants/connectorMeta.ts`, `app/` screens, `git log`). Only describe user-facing behavior that is shipped. Never publish internal names, infrastructure details, file paths, env vars, or security implementation specifics.

## Honesty rules

- No testimonials, customer names, logos, user counts, ratings, or invented metrics. No "trusted by."
- Competitor facts only from the competitor's own public pages, fetched now, cited in a `sources` block with `checked: "2026-09-13"`. If you can't verify something, leave it out or write "not listed on their pricing page."
- Say where Synced is not the right fit. It builds trust.
- Coming-soon things are labeled coming soon.
- Example message cards (`message` blocks) are illustrations, not customer stories. Use plausible first names with a role ("Dana (client)"), never real companies.

## Voice

Match the existing site: dry, specific, lightly funny, never hype. Samples from the live homepage:

> An 11:58 PM "quick thing" from your boss becomes a rebuilt deck and a diplomatic reply, before you've even opened your laptop.

> Instead of you prompting Synced, Synced comes to you with the decisions only you can make, then handles everything else.

Rules:
- Second person ("your inbox") and product-as-subject ("Synced drafts..."). "We" sparingly.
- Functional verbs: search, draft, schedule, send, track, approve, flag, connect, find.
- Concrete nouns and numbers beat adjectives. "20 Action Plans a week", "a 6-digit code", "the Q3 deck".
- Paragraphs of 2–4 sentences. Vary sentence length. Contractions are fine.
- Open with the answer. No preamble that restates the title.
- H2s specific enough to stand alone as a search snippet: "What Synced does with a Slack thread", not "How it works".
- Useful beyond Synced. Guides give the manual method first and mention Synced once, near the end, briefly. Templates must be genuinely good templates.

Never:
- Banned words (enforced): unlock, supercharge, revolutionize, transform, empower, elevate, seamless, effortlessly, game-changer, cutting-edge, robust, leverage, harness, delve, landscape, realm, tapestry, streamline, unleash, embark, journey, testament, boasts, myriad, plethora, "look no further", "in today's fast-paced world", "whether you're a...".
- Also avoid: "navigate" as a metaphor, "crucial", "essential", "vital", "comprehensive", "ensure", "enhance", "foster", "dive into", "not just X but Y", "it's not about X, it's about Y", "the best part?", "here's the thing", rhetorical-question H2s, a "Conclusion" section, one-line dramatic closers, bolded lead-in on every bullet, three-item lists of identical rhythm, "In short," inside body text (the answer box already has that label).
- Emoji, exclamation marks, more than one em dash per paragraph (prefer commas, periods, parentheses).

## Length guide (not quotas)

Glossary 250–500 words. Templates 400–800. Help 150–500. Integrations 600–1000. Features and use cases 700–1100. Guides 900–1600. Comparisons 1000–1800. Don't pad.

## Exemplars (copy their structure and voice)

- Integration: `content/integrations/gmail.ts`
- Glossary: `content/glossary/action-plan.ts`
- Guide: `content/guides/how-to-automate-email-follow-ups.ts`
- Template: `content/templates/follow-up-after-no-response.ts`

## Final report

When done, report: pages written (slugs), anything you couldn't verify and left out, any URL you think should be added/removed from the manifest, and facts the founders should confirm.
