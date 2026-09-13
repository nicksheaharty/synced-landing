import type { Page } from "../types";

export const dropbox: Page = {
  slug: "/integrations/dropbox",
  cluster: "integration",
  parent: "/integrations",
  title: "Dropbox AI Assistant Integration (Coming Soon) | Synced",
  h1: "Synced for Dropbox",
  navLabel: "Dropbox",
  cardText: "Planned: search Dropbox files for context and attachments. Use Drive or OneDrive today.",
  description:
    "A Dropbox integration for Synced, the AI inbox assistant, is coming soon. Here's what it's planned to do and how to get file search with Drive or OneDrive now.",
  eyebrow: "Integration · Output",
  intro:
    "If your files live in Dropbox, Synced can't search them yet. The Dropbox connector is on the list, and Google Drive and OneDrive work today.",
  answer:
    "A Dropbox integration for Synced, the AI inbox assistant, is listed as coming soon and can't be connected yet. It's planned as an output integration, so Synced could search Dropbox files when a message asks for a document and use them as context or attachments. Today, Synced offers the same file search with Google Drive and OneDrive, both included on the Free plan.",
  primaryIntent: "dropbox ai assistant integration",
  related: ["/integrations/google-drive", "/integrations/onedrive", "/guides/how-to-find-an-old-email-attachment"],
  published: "2026-09-13",
  updated: "2026-09-13",
  integration: { brand: "dropbox", plans: "pro", kind: "output" },
  body: [
    {
      type: "callout",
      title: "Coming soon",
      text: "Dropbox appears as Coming Soon in Synced's connector list. There's no release date yet.",
    },
    { type: "h2", text: "What a Dropbox connection in Synced is planned to do" },
    {
      type: "p",
      text: "Output integrations are where Synced looks while it works. When an email, Slack message, or text asks for \"the signed contract\" or \"the photos from the shoot,\" Synced searches connected storage, picks the file, and attaches it to a reply you approve. The Dropbox connector is meant to add your Dropbox to that search.",
    },
    {
      type: "p",
      text: "Synced's current storage connectors are read-only: they search, read, and attach, and never edit or delete your files. Details for Dropbox will be published when it's available.",
    },
    { type: "h2", text: "Get file search in Synced today with Drive or OneDrive" },
    {
      type: "list",
      items: [
        "[Google Drive](/integrations/google-drive) reads Docs, Sheets, Slides, Office files, and PDFs, and attaches Google files as .docx, .xlsx, or .pptx.",
        "[OneDrive](/integrations/onedrive) reads Word, Excel, PowerPoint, and PDF files and attaches originals unchanged.",
      ],
    },
    {
      type: "p",
      text: "Both are on the Free plan. If you keep a working copy of client-facing files in one of them, Synced can handle file requests now. If everything you share lives only in Dropbox, Synced's file features won't reach it until this connector ships.",
    },
    { type: "h2", text: "How to get Dropbox support when it launches" },
    {
      type: "p",
      text: "[Get early access](/get-started) to join the Synced waitlist. Synced's [pricing](/pricing) lists Dropbox among Pro's output integrations.",
    },
  ],
  faqs: [
    {
      q: "Can I connect Dropbox to Synced now?",
      a: "No. Dropbox is listed as coming soon. Google Drive and OneDrive are the storage integrations available today.",
    },
    {
      q: "Will Dropbox be on the Free plan?",
      a: "Synced's pricing lists Dropbox under Pro. Google Drive and OneDrive stay on Free.",
    },
  ],
};
