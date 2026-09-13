import type { Page } from "../types";

export const onedrive: Page = {
  slug: "/integrations/onedrive",
  cluster: "integration",
  parent: "/integrations",
  title: "OneDrive AI Assistant: Search and Attach Files | Synced",
  h1: "Synced for OneDrive",
  navLabel: "OneDrive",
  cardText: "Searches and reads your OneDrive files, read-only, and attaches them to replies you approve.",
  description:
    "Connect OneDrive to Synced and it searches and reads your OneDrive files with read-only access, then attaches the right one to replies you approve.",
  eyebrow: "Integration · Output",
  intro:
    "If your contracts, decks, and spreadsheets live in OneDrive, connect it and Synced can answer \"can you send me...\" messages with the actual file.",
  answer:
    "Synced, the AI inbox assistant, connects to OneDrive with read-only file access through Microsoft's sign-in. When a message in Outlook, Teams, Gmail, or another connected Inbox asks for a document, Synced searches OneDrive, reads Word, Excel, PowerPoint, and PDF files for context, and attaches the right one to a reply you approve. OneDrive is included on the Free plan and connects separately from Outlook.",
  primaryIntent: "onedrive ai assistant",
  related: ["/integrations/outlook", "/integrations/microsoft-teams", "/integrations/google-drive", "/features/documents"],
  published: "2026-09-13",
  updated: "2026-09-13",
  integration: { brand: "onedrive", plans: "free", kind: "output" },
  body: [
    { type: "h2", text: "What Synced does with OneDrive when a client asks for documents" },
    {
      type: "p",
      text: "A client of a small accounting practice asks for two things by email: a signed letter and a number buried in a spreadsheet. The first is a straight attachment. The second needs someone to open the file.",
    },
    {
      type: "message",
      from: "Rachel (client)",
      source: "outlook",
      time: "10:22 AM",
      text: "Could you resend our signed engagement letter? And what was the total on the Q2 invoice summary? Our CFO is asking.",
      stepsLabel: "3 Tasks Ready for Approval",
      steps: [
        "Found Engagement_Letter_signed.pdf in OneDrive and attached it",
        "Opened Q2_Invoice_Summary.xlsx and read the total from the summary sheet",
        "Drafted a reply with the letter and the Q2 total",
      ],
      file: "Engagement_Letter_signed.pdf",
      caption: "Synced reads the spreadsheet to answer the question. The spreadsheet itself stays untouched in OneDrive.",
    },
    {
      type: "p",
      text: "You compare the number against the file if you want to, then approve. The reply goes out from your connected email account with the PDF attached.",
    },
    { type: "h2", text: "What Synced can do with your OneDrive files" },
    {
      type: "features",
      items: [
        { icon: "search", title: "Search by what people call things", body: "\"The signed letter\" or \"last quarter's summary\" turns into a OneDrive search, even when the sender doesn't know the file name." },
        { icon: "eye", title: "Read Office files and PDFs", body: "Synced reads text from .docx, .xlsx, .pptx, and PDF files: paragraphs, table cells, sheet rows, and slide text." },
        { icon: "folder", title: "Attach the original", body: "When a message just asks for the file, Synced attaches your existing file exactly as it is." },
        { icon: "draft", title: "Build something new from it", body: "Asked for a short summary of a long report, Synced reads the OneDrive file and creates the new document in Synced, ready to attach." },
      ],
    },
    { type: "h2", text: "What Synced can't do in OneDrive" },
    {
      type: "p",
      text: "Access is read-only. Synced can't upload, edit, rename, move, share, or delete OneDrive files. New documents Synced creates stay in Synced and are sent as attachments you approve, not saved to OneDrive.",
    },
    { type: "h2", text: "How to connect OneDrive to Synced" },
    {
      type: "steps",
      items: [
        { title: "Open Settings in Synced", body: "In the web app or on iOS, find OneDrive in the connectors section of Settings." },
        { title: "Review the permissions sheet", body: "Synced lists what it does automatically: search your files when relevant to a task, and read file contents to use in a document." },
        { title: "Sign in with Microsoft", body: "Pick the Microsoft account whose files you want searched. It doesn't need to be the same account as your Outlook or Teams connection." },
        { title: "Confirm it in Settings", body: "OneDrive shows as connected. Disconnecting it later doesn't affect Outlook mail or calendar." },
      ],
    },
    { type: "h2", text: "Microsoft permissions Synced requests for OneDrive" },
    {
      type: "table",
      head: ["Access", "What Synced uses it for"],
      rows: [
        ["Read your files", "Search OneDrive, read file contents for context, and attach existing files to approved replies."],
        ["Sign you in and read your profile", "Identify which Microsoft account's OneDrive is connected."],
        ["Maintain access to data you've given it access to", "Stay connected until you disconnect, without signing in again each session."],
      ],
      caption: "Microsoft shows these on its consent screen. Nothing on the list allows writing to your files.",
    },
    { type: "h2", text: "Which Synced plan includes OneDrive" },
    {
      type: "p",
      text: "OneDrive is included on Free, Pro, and Enterprise. On Free, it pairs with [Gmail](/integrations/gmail) as your Inbox. [Outlook](/integrations/outlook) and [Microsoft Teams](/integrations/microsoft-teams) are Pro integrations. Opening files doesn't count against anything: Action Plans are counted per incoming message. See [pricing](/pricing).",
    },
  ],
  faqs: [
    {
      q: "Do I need Outlook connected to use OneDrive with Synced?",
      a: "No. OneDrive is its own connection. You can use it with Gmail on the Free plan, or with Outlook and Teams on Pro.",
    },
    {
      q: "Can Synced save documents it creates to my OneDrive?",
      a: "No. The OneDrive connection is read-only. Documents Synced creates are kept in Synced and attached to replies you approve.",
    },
    {
      q: "Can I connect both OneDrive and Google Drive?",
      a: "Yes. Connect both and Synced searches whichever holds the file a message is asking about. Both are included on the Free plan.",
    },
    {
      q: "Does the OneDrive connection include SharePoint sites?",
      a: "The OneDrive connection is for your own OneDrive files. SharePoint isn't listed as a separate integration in Synced.",
    },
  ],
};
