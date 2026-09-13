import type { Page } from "../types";

export const googleDrive: Page = {
  slug: "/integrations/google-drive",
  cluster: "integration",
  parent: "/integrations",
  title: "Google Drive AI Assistant: Find and Attach Files | Synced",
  h1: "Synced for Google Drive",
  navLabel: "Google Drive",
  cardText: "Searches and reads your Drive files, read-only, to answer messages and attach the right file.",
  description:
    "Connect Google Drive to Synced and it searches and reads your files, read-only, to answer messages and attach the right document to replies you approve.",
  eyebrow: "Integration · Output",
  intro:
    "A surprising share of work messages are someone asking for a file you already have. With Drive connected, Synced finds it, reads it if needed, and attaches it to the reply.",
  answer:
    "Synced, the AI inbox assistant, connects to Google Drive with read-only access. When a message in any connected Inbox asks for a file or a fact, Synced searches your Drive, reads the contents of Docs, Sheets, Slides, PDFs, and Office files, and attaches the file to a reply you approve. Synced can't edit, move, or delete anything in Drive. Google Drive is included on the Free plan.",
  primaryIntent: "google drive ai assistant",
  related: ["/integrations/gmail", "/integrations/onedrive", "/guides/how-to-search-email-and-files-together"],
  published: "2026-09-13",
  updated: "2026-09-13",
  integration: { brand: "drive", plans: "free", kind: "output" },
  body: [
    { type: "h2", text: "What Synced does with Google Drive when a message asks for a file" },
    {
      type: "p",
      text: "An investor emails on a Friday asking for two documents. One is a Slides deck, the other a Sheet. Neither can be attached to an email as-is, and both have three near-identical copies in your Drive.",
    },
    {
      type: "message",
      from: "Owen (investor)",
      source: "gmail",
      time: "Fri 3:05 PM",
      text: "Could you send over the latest board deck and the current cap table before Monday's call?",
      stepsLabel: "3 Tasks Ready for Approval",
      steps: [
        "Searched Drive and picked the most recently edited board deck, exported as .pptx",
        "Found the cap table Sheet and exported it as .xlsx",
        "Drafted a reply with both files attached",
      ],
      file: "Board_Deck_September.pptx",
      caption: "Native Google files are attached as the matching Office format, since a Google Doc has no file of its own to send.",
    },
    {
      type: "p",
      text: "You check that it picked the right deck, then approve. If the investor had asked on Slack or WhatsApp instead, Synced would search Drive the same way.",
    },
    { type: "h2", text: "What Synced can do with your Drive files" },
    {
      type: "features",
      items: [
        { icon: "search", title: "Find the file someone means", body: "\"The deck from the offsite\" becomes a Drive search, not a question back to the sender." },
        { icon: "eye", title: "Read what's inside", body: "Synced reads text from Google Docs, Sheets, and Slides, plus .docx, .xlsx, .pptx, and PDF files, to answer a question like \"what did we quote them?\"" },
        { icon: "folder", title: "Attach it unchanged", body: "When someone just wants the file, Synced attaches your existing file rather than making a new copy." },
        { icon: "draft", title: "Use it as a starting point", body: "When a message asks for something new, like a one-page summary of a longer doc, Synced reads the Drive file and builds the new document inside Synced." },
      ],
    },
    { type: "h2", text: "What Synced can't do in Google Drive" },
    {
      type: "p",
      text: "Drive access is read-only. Synced can't create, edit, rename, move, share, or delete files in your Drive. Documents Synced builds for you live in Synced and go out as attachments on replies you approve. They aren't saved back to Drive.",
    },
    { type: "h2", text: "How to connect Google Drive to Synced" },
    {
      type: "steps",
      items: [
        { title: "Open Settings in Synced", body: "In the web app or on iOS, find Drive in the connectors section of Settings." },
        { title: "Review the permissions sheet", body: "Synced lists two things it does automatically: search your files when relevant to a task, and read file contents to use in a document." },
        { title: "Approve Google's screen", body: "Drive is a separate Google permission from Gmail, so you'll see a Google screen just for Drive access. Pick the account whose files you want Synced to search." },
        { title: "Try it", body: "Ask for a file in any connected Inbox, or wait for the next message that needs one." },
      ],
    },
    { type: "h2", text: "Google OAuth scopes Synced requests for Drive" },
    {
      type: "table",
      head: ["Scope", "What Synced uses it for"],
      rows: [
        ["`drive.readonly`", "Search and read your Drive files for context, and attach existing files to approved replies."],
        ["`userinfo.email`", "Identify which Google account's Drive is connected."],
      ],
      caption: "Gmail, Calendar, and Contacts scopes are requested separately, when you connect Gmail.",
    },
    {
      type: "callout",
      title: "Google Workspace data isn't used for model training",
      text: "Synced doesn't use Drive data to train generalized AI or machine-learning models, and follows the Google API Services User Data Policy, including the Limited Use requirements. More on [Security](/security).",
    },
    { type: "h2", text: "Which Synced plan includes Google Drive" },
    {
      type: "p",
      text: "Google Drive is included on Free, Pro, and Enterprise. Searching Drive doesn't use up anything on its own: the Action Plan is counted per incoming message, no matter how many files Synced opens for it. Free includes 20 Action Plans a week. See [pricing](/pricing).",
    },
  ],
  faqs: [
    {
      q: "Can Synced edit or delete my Google Drive files?",
      a: "No. Synced requests the `drive.readonly` scope, which only allows searching and reading. It can't change, move, share, or delete anything in Drive.",
    },
    {
      q: "Does connecting Gmail give Synced access to my Drive?",
      a: "No. Drive is a separate connection with its own Google permission screen. Disconnecting Drive in Settings also leaves Gmail and Calendar connected.",
    },
    {
      q: "Which file types can Synced read from Google Drive?",
      a: "Google Docs, Sheets, and Slides, plus .docx, .xlsx, .pptx, PDFs, and plain text files. Other file types can't be read for context.",
    },
    {
      q: "How do I remove Synced's access to Google Drive?",
      a: "Disconnect Drive in Synced's Settings, or revoke access at [myaccount.google.com/permissions](https://myaccount.google.com/permissions).",
    },
  ],
};
