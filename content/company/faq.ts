import type { Page } from "../types";

export const faq: Page = {
  slug: "/faq",
  cluster: "company",
  title: "Synced FAQ: Pricing, Integrations, Privacy, Platforms | Synced",
  h1: "Frequently asked questions.",
  navLabel: "FAQ",
  cardText: "Short answers about pricing, Action Plans, integrations, approval, data, and platforms.",
  description:
    "Answers to common questions about Synced, the AI inbox assistant: pricing, Action Plans, live integrations, approval before sending, data use, and platforms.",
  eyebrow: "Company",
  intro: "The questions people ask most, answered briefly. Each answer links to the page that covers the topic in full.",
  answer:
    "Synced (syncedinbox.com) is an AI inbox assistant in private beta on the web and iOS. Synced reads messages from connected Inboxes like Gmail, Outlook, and Slack, drafts replies and documents, and waits for your approval before sending anything it wrote. The Free plan includes 20 Action Plans a week; Pro is $29.99 per user per month with 100.",
  primaryIntent: "synced frequently asked questions",
  published: "2026-09-13",
  updated: "2026-09-13",
  icon: "question",
  body: [
    {
      type: "p",
      text: "Can't find your question here? The [Help center](/help) has step-by-step articles, and you can always [contact the team](/contact).",
    },
    {
      type: "links",
      title: "Start with these pages",
      slugs: ["/how-it-works", "/features", "/integrations", "/pricing", "/security", "/help"],
    },
  ],
  faqs: [
    {
      q: "What is Synced?",
      a: "Synced (syncedinbox.com) is an AI inbox assistant. It connects to your email, messaging apps, cloud storage, and calendar, then drafts replies, finds files, proposes meeting times, and tracks follow-ups. See [How it works](/how-it-works).",
    },
    {
      q: "How is Synced different from a regular email client?",
      a: "Synced comes to you with the decisions only you can make instead of waiting for you to prompt it. For each message it writes an Action Plan and does the preparation, so you mostly approve and edit. More on [How it works](/how-it-works).",
    },
    {
      q: "What is an Action Plan?",
      a: "An Action Plan is the set of steps Synced takes or proposes for one incoming message. One message is one Action Plan, no matter how many steps it has. See [Action Plan](/glossary/action-plan).",
    },
    {
      q: "How much does Synced cost?",
      a: "Free is $0 with 20 Action Plans a week. Pro is $29.99 per user per month, or $24.99 billed annually, with 100 Action Plans a week and all integrations. Enterprise is priced through sales. See [pricing](/pricing).",
    },
    {
      q: "What happens when I hit my weekly Action Plan limit?",
      a: "Messages still arrive and nothing is lost. New requests go to your Tasks list as to-dos for you until your count resets on Monday at 00:00 UTC. Settings shows your usage. See [Weekly limit reached](/help/weekly-limit-reached).",
    },
    {
      q: "Which Inboxes can I connect today?",
      a: "Gmail, Outlook, Slack, Microsoft Teams, WhatsApp Business, Instagram Business, Messenger, SMS via Twilio, and GroupMe are live. Inboxes are unlimited on every plan. See [Integrations](/integrations).",
    },
    {
      q: "Which file and calendar tools does Synced work with?",
      a: "Google Drive, OneDrive, and Google Calendar are live output integrations. Synced uses them to find attachments and propose meeting times. See [Google Drive](/integrations/google-drive) and [Google Calendar](/integrations/google-calendar).",
    },
    {
      q: "Does Synced work with iMessage, Dropbox, Notion, or GitHub?",
      a: "Not yet. iMessage, Dropbox, Notion, and GitHub are coming soon, and more connectors are listed as coming soon in the app. See [iMessage](/integrations/imessage).",
    },
    {
      q: "Does Synced connect to Zoom?",
      a: "No. Synced has no Zoom connector. It can propose meeting times from Google Calendar; see [Scheduling](/features/scheduling).",
    },
    {
      q: "Does Synced send emails without my approval?",
      a: "No. Every AI-drafted message waits in Decide for your approval before it is sent, and you can edit it first. See [Decide](/features/decide) and [Why Synced asks before it sends](/blog/why-synced-asks-before-it-sends).",
    },
    {
      q: "What is the Decide queue?",
      a: "Decide is where Synced puts approvals and questions that need your judgment. It's the same queue on web and iPhone. See [Decide queue](/glossary/decide-queue).",
    },
    {
      q: "What are Tasks in Synced?",
      a: "Tasks are to-dos meant for a person rather than for Synced, like something a conversation delegated to you. See [Tasks](/features/tasks).",
    },
    {
      q: "Does Synced use my email to train AI models?",
      a: "No. Synced does not use Google Workspace data to train generalized AI or machine-learning models, and follows the Google API Services User Data Policy, including Limited Use. See [Security](/security).",
    },
    {
      q: "Can Synced employees read my messages?",
      a: "Staff don't read connected data except when you request support, give written consent, or a security investigation requires it. See [Security](/security).",
    },
    {
      q: "What Google permissions does Synced ask for?",
      a: "Synced requests Gmail, Calendar, Drive, and Contacts scopes, each for a specific job such as reading messages or creating approved drafts. The full list with reasons is in [Gmail OAuth scopes explained](/guides/gmail-oauth-scopes-explained).",
    },
    {
      q: "How do I disconnect an integration?",
      a: "Remove it from Settings in Synced at any time. For Google, you can also revoke access at myaccount.google.com/permissions. See [Disconnect an integration](/help/disconnect-an-integration).",
    },
    {
      q: "What happens to my data if I delete my account?",
      a: "Account deletion removes stored tokens and cached data within 30 days. See [Delete your account](/help/delete-your-account).",
    },
    {
      q: "How do I sign in to Synced?",
      a: "With your phone number and a 6-digit code sent by text. There's no password. See [Sign in with your phone number](/help/sign-in-with-your-phone-number).",
    },
    {
      q: "Where can I use Synced?",
      a: "On the web at mail.syncedinbox.com in a desktop browser, and in the iOS app. Your account and history are the same on both. See [Use Synced on web and mobile](/help/use-synced-on-web-and-mobile).",
    },
    {
      q: "Is there a Synced Android app?",
      a: "Android is planned, but there's no release date yet. Until then, Android users can use the web app on a desktop browser. See [Android](/android).",
    },
    {
      q: "How do I get access to Synced?",
      a: "Synced is in private beta. Join the waitlist through [Get Early Access](/get-started).",
    },
    {
      q: "How is Synced different from the AI built into Gmail?",
      a: "Synced works across Gmail, Outlook, Slack, Teams, and messaging apps in one place, and writes an Action Plan for each message rather than only helping inside one mailbox. The side-by-side is in [Synced vs Gemini in Gmail](/compare/synced-vs-gemini-in-gmail).",
    },
    {
      q: "Does Synced work for teams?",
      a: "Pricing is per user, and the Enterprise plan adds SSO, admin controls, a security review, and dedicated support. See [pricing](/pricing) or [contact sales](/contact).",
    },
    {
      q: "Who makes Synced?",
      a: "Synced was founded by Aum Dhruv (CEO) and Nick Harty (CTO). See [About](/about) and the [team page](/team).",
    },
  ],
  related: ["/about", "/help", "/pricing"],
};
