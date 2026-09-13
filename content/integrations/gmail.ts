import type { Page } from "../types";

export const gmail: Page = {
  slug: "/integrations/gmail",
  cluster: "integration",
  parent: "/integrations",
  title: "AI Assistant for Gmail: Drafts, Scheduling, Follow-ups | Synced",
  h1: "Synced for Gmail",
  navLabel: "Gmail",
  cardText: "Reads new mail, drafts replies for approval, and pulls context from Drive and Calendar.",
  description:
    "Connect Gmail to Synced and it drafts replies for your approval, proposes meeting times, and finds files. What it does and the exact permissions it asks for.",
  eyebrow: "Integration · Inbox",
  intro:
    "Gmail is the Inbox most people connect first. Synced reads each new email, works out what it's asking for, and gets the draft, the file, or the meeting ready before you open it.",
  answer:
    "Synced connects to Gmail through Google's OAuth permission screen. Once connected, it reads new messages, writes an Action Plan for each one, drafts replies, finds attachments in Google Drive, and proposes meeting times from Google Calendar. Nothing it drafts is sent until you approve it. Gmail is included on the Free plan.",
  primaryIntent: "ai assistant for gmail",
  related: ["/integrations/google-drive", "/integrations/google-calendar", "/integrations/outlook", "/guides/how-to-automate-email-follow-ups"],
  published: "2026-09-13",
  updated: "2026-09-13",
  integration: { brand: "gmail", plans: "free", kind: "inbox" },
  body: [
    { type: "h2", text: "What Synced does with a Gmail thread" },
    {
      type: "p",
      text: "Take a common one: a client emails at 4:50 PM asking for the signed SOW and a time next week to walk through it. Synced sees two requests in one message and handles them as one [Action Plan](/glossary/action-plan).",
    },
    {
      type: "message",
      from: "Dana (client)",
      source: "gmail",
      time: "4:52 PM",
      text: "Can you resend the signed SOW? And do you have 30 min next week to walk through phase 2?",
      stepsLabel: "3 Tasks Ready for Approval",
      steps: [
        "Found the signed SOW in Drive and attached it",
        "Checked your calendar and picked three open slots next week",
        "Drafted a reply with the file and the times",
      ],
      file: "Acme_SOW_signed.pdf",
      caption: "The reply sits in Decide until you approve it. Edit it first if you want.",
    },
    {
      type: "p",
      text: "You open Synced, read the draft, and tap approve. The email goes out from your own Gmail address, in the same thread, with the attachment.",
    },
    { type: "h2", text: "What you can hand off" },
    {
      type: "features",
      items: [
        { icon: "draft", title: "Replies drafted in context", body: "Synced reads the whole thread before drafting, so the reply answers the question that was actually asked." },
        { icon: "search", title: "Attachments found for you", body: "When an email asks for a file, Synced searches connected Drive or OneDrive and attaches the right one." },
        { icon: "calendar", title: "Meeting times proposed", body: "Scheduling requests get real open slots from your calendar, not a link that makes the other person do the work." },
        { icon: "clock", title: "Follow-ups drafted on request", body: "Ask Synced to chase a quiet thread and it writes the nudge with the open question pulled from the thread. Schedule it to send later if you want." },
      ],
    },
    { type: "h2", text: "How to connect Gmail" },
    {
      type: "steps",
      items: [
        { title: "Open Synced", body: "Sign in at [mail.syncedinbox.com](https://mail.syncedinbox.com) on a desktop browser, or open the iOS app. Sign-in uses your phone number and a 6-digit code." },
        { title: "Choose Gmail", body: "New accounts are asked to connect Gmail during setup. Existing accounts can add it from Settings under Inboxes." },
        { title: "Approve Google's permission screen", body: "Pick the Google account you want to connect and review the permissions listed below. Google shows the same list." },
        { title: "Let the first messages come in", body: "New email starts arriving in Messages. Action Plans that need your judgment show up in Decide." },
      ],
    },
    { type: "h2", text: "Permissions Synced asks for" },
    {
      type: "p",
      text: "These are the Google OAuth scopes listed in Synced's [privacy policy](/privacy), and why each one is needed.",
    },
    {
      type: "table",
      head: ["Scope", "What Synced uses it for"],
      rows: [
        ["`gmail.readonly`", "Search messages and read message details and headers to build context and summarize threads."],
        ["`gmail.modify`", "Create draft replies and send emails you've approved."],
        ["`gmail.settings.basic`", "Read and update your Gmail out-of-office auto-reply when you set it from Synced."],
        ["`userinfo.email`, `userinfo.profile`", "Identify the connected account and set up your profile."],
      ],
      caption: "Drive, Calendar, and Contacts scopes are requested separately, only if you connect those services.",
    },
    {
      type: "callout",
      title: "Google Workspace data isn't used for model training",
      text: "Synced does not use Gmail data to train generalized AI or machine-learning models, and follows the Google API Services User Data Policy, including the Limited Use requirements. More on [Security](/security).",
    },
    { type: "h2", text: "Plan availability" },
    {
      type: "p",
      text: "Gmail is included on Free, Pro, and Enterprise. The Free plan covers 20 Action Plans a week; Pro covers 100. One email is one Action Plan no matter how many steps it takes. Full details on [pricing](/pricing).",
    },
  ],
  faqs: [
    {
      q: "Does Synced send emails from my Gmail account automatically?",
      a: "No. Synced drafts replies, but every AI-drafted message waits in Decide for your approval. Approved replies go out from your own address in the original thread.",
    },
    {
      q: "Can I connect more than one Gmail account?",
      a: "Yes. Inboxes are unlimited on every plan, so you can connect a work and a personal Gmail account side by side.",
    },
    {
      q: "Does it work with Google Workspace accounts?",
      a: "Synced connects through Google's standard OAuth screen, which covers personal Gmail and Google Workspace accounts. Some Workspace admins restrict third-party apps; if the permission screen is blocked, your admin needs to allow Synced.",
    },
    {
      q: "How do I disconnect Gmail?",
      a: "Remove it from Settings in Synced, or revoke access at [myaccount.google.com/permissions](https://myaccount.google.com/permissions). You can also request account deletion; see the [privacy policy](/privacy) for retention details.",
    },
  ],
};
