import type { Page } from "../types";

export const search: Page = {
  slug: "/features/search",
  cluster: "feature",
  parent: "/features",
  title: "AI Search Across Email, Slack, and Files | Synced",
  h1: "Search across email and files",
  navLabel: "Search",
  cardText: "Synced searches mail, Slack, Drive, OneDrive, and your calendar for the context a reply needs.",
  description:
    "Synced searches your email, Slack, Google Drive, OneDrive, and calendar with AI to find the file, date, or earlier message a reply needs, before you ask.",
  eyebrow: "Feature",
  intro:
    "Answering most messages starts with finding something: the contract, the last thread with this person, the date you already agreed to. Synced does that search before the draft reaches you.",
  answer:
    "Synced, the AI inbox assistant, searches your connected sources to answer the message in front of it. Depending on what you've connected, that includes Gmail or Outlook mail, Slack messages, Google Drive and OneDrive files, calendar events, attachments on the incoming message, and documents Synced made for you earlier. It uses what it finds to draft the reply or attach the file. If a search turns up more than one plausible match, Synced asks you which one instead of guessing.",
  primaryIntent: "search email and files with ai",
  related: ["/features/drafting", "/features/documents", "/glossary/natural-language-search", "/guides/how-to-search-email-and-files-together"],
  published: "2026-09-13",
  updated: "2026-09-13",
  icon: "search",
  body: [
    { type: "h2", text: "What Synced searches when a message arrives" },
    {
      type: "p",
      text: "Most of Synced's searching happens before you see anything. The first thing it does with a new message is work out what information the reply depends on, then go get it from wherever it lives.",
    },
    {
      type: "table",
      head: ["Source", "What Synced looks for"],
      rows: [
        ["Gmail and Outlook", "Earlier threads with the sender, details and headers of specific emails, what was already promised"],
        ["Slack", "Messages and thread details that relate to the request"],
        ["Google Drive and OneDrive", "Files by name and content, which Synced can open, read, and attach"],
        ["Google Calendar and Outlook calendar", "Existing events and open time"],
        ["The incoming message", "Attachments the sender included, including PDFs and Office files"],
        ["Files Synced created", "Decks, docs, and spreadsheets from earlier requests, even in another conversation"],
        ["The public web", "Outside facts a request depends on, like a company or a public page someone referenced"],
      ],
      caption: "Synced searches only the sources you've connected. See [Inboxes](/features/inboxes) for what's available.",
    },
    { type: "h2", text: "A search that crosses email and Drive" },
    {
      type: "message",
      from: "Priya (finance)",
      source: "gmail",
      time: "10:26 AM",
      text: "What did we end up agreeing with Northwind on payment terms? I need it for the renewal and can't find the thread.",
      stepsLabel: "1 Task Ready for Approval",
      steps: [
        "Searched your email for Northwind and found the March thread where net-45 was agreed",
        "Found Northwind_MSA_signed.pdf in Drive and confirmed the terms in section 4",
        "Drafted a reply to Priya quoting both, with the contract attached",
      ],
      file: "Northwind_MSA_signed.pdf",
      caption: "An illustration. The answer and the source file arrive together, and the reply waits for your approval.",
    },
    {
      type: "p",
      text: "Doing that by hand means one search in Gmail, a second in Drive, opening the PDF, and copying the clause into a reply. Synced does all four and shows you the result, with the file attached so Priya doesn't have to take anyone's word for it.",
    },
    { type: "h2", text: "When a search finds more than one match" },
    {
      type: "p",
      text: "\"Send me the proposal\" is easy when there's one proposal. When Synced finds three files that could fit, or two people named Alex, it doesn't pick the likelier-sounding one. It sends a question to [Decide](/features/decide) with the options, and you tap the right one.",
    },
    {
      type: "p",
      text: "The same rule applies when a search comes back empty. If the reply needs a number or a date Synced can't find anywhere you've connected, it asks rather than writing something plausible. A confident wrong answer in an email you approved is worse than one extra tap.",
    },
    { type: "h2", text: "Finding a conversation yourself" },
    {
      type: "p",
      text: "For the times you're the one looking, Messages in the [iOS app](/ios) has a search that matches conversation names, the latest message text, and subjects, and submitting a name looks past the conversations already loaded. The Files screen has its own search for documents Synced created, filterable by type (PDF, Word, Excel, PowerPoint, images).",
    },
    { type: "h2", text: "What Synced search doesn't cover" },
    {
      type: "list",
      items: [
        "Sources you haven't connected. No Dropbox or Notion yet; both are listed as coming soon.",
        "A full-mailbox search screen inside the app. Synced searches your mailbox while handling a request; for digging through years of mail yourself, Gmail or Outlook's own search is still the tool.",
        "Files you can't open. Synced reads Drive and OneDrive with the access your account has, nothing more.",
      ],
    },
    {
      type: "p",
      text: "Synced requests read-only access to Drive (`drive.readonly`) and uses Gmail's read scope to search messages. The full list of Google permissions and why each is needed is in the [privacy policy](/privacy).",
    },
  ],
  faqs: [
    {
      q: "Can AI search my Gmail and Google Drive at the same time?",
      a: "Synced does. When a message needs context, it searches connected Gmail and Google Drive (plus Outlook, Slack, OneDrive, and your calendar if connected) and uses what it finds in the drafted reply.",
    },
    {
      q: "Does Synced change or delete files when it searches Drive?",
      a: "No. Synced's Google Drive permission is read-only. It can read and attach a file to a reply you approve, but it can't edit or delete files in Drive.",
    },
    {
      q: "Can I ask Synced to find something without an incoming message?",
      a: "Yes. Type a request like \"find the signed Northwind MSA and send it to Priya\" and Synced searches, drafts, and brings the message to Decide for approval.",
    },
    {
      q: "Is my data used to train AI models when Synced searches it?",
      a: "Google Workspace data isn't used to train generalized AI or machine-learning models, and the LLM providers Synced uses are bound not to train on it. Details on [Security](/security).",
    },
  ],
};
