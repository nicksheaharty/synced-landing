import type { Page } from "../types";

export const documents: Page = {
  slug: "/features/documents",
  cluster: "feature",
  parent: "/features",
  title: "AI Document Creation From Email: Decks, Docs, Sheets | Synced",
  h1: "Documents Synced creates for you",
  navLabel: "Documents",
  cardText: "Word docs, PowerPoint decks, Excel sheets, and PDFs built from a request, in your brand colors.",
  description:
    "AI document creation in Synced: Word docs, PowerPoint decks, Excel sheets, and PDFs built from an email or request, in your brand, attached for your approval.",
  eyebrow: "Feature",
  intro:
    "Sometimes the reply is a file. \"Can you put together a one-pager\" deserves a one-pager, not a promise to make one tomorrow.",
  answer:
    "Synced, the AI inbox assistant, can create documents when a message or your own request calls for one. It produces Word documents, PowerPoint decks, Excel spreadsheets, and PDFs, using context from your connected mail and files and the brand colors and fonts you set. The finished file is attached to a draft reply in Decide for your approval, and every file Synced creates is kept in the Files screen. You can ask for changes and Synced revises the same document.",
  primaryIntent: "ai document creation from email",
  related: ["/features/drafting", "/features/search", "/integrations/google-drive", "/how-it-works"],
  published: "2026-09-13",
  updated: "2026-09-13",
  icon: "folder",
  body: [
    { type: "h2", text: "The file types Synced can create" },
    {
      type: "features",
      items: [
        { icon: "book", title: "Word documents", body: "One-pagers, memos, briefs, proposals, and meeting notes as .docx files." },
        { icon: "desktop", title: "PowerPoint decks", body: "Slide decks as .pptx, including rebuilding a deck someone sent you with changes." },
        { icon: "list", title: "Excel spreadsheets", body: "Trackers, budgets, and tables as .xlsx files." },
        { icon: "draft", title: "PDFs", body: "Finished documents for sending when the other person shouldn't be editing." },
      ],
    },
    { type: "h2", text: "From a late-night request to an attached deck" },
    {
      type: "p",
      text: "Documents start the same way as everything else in Synced: a message comes in, or you ask for something directly. Synced reads the request, gathers the material (the thread, attachments on the message, files in Drive or OneDrive), builds the file, and checks it before handing it to you.",
    },
    {
      type: "message",
      from: "Nadia (your boss)",
      source: "teams",
      time: "11:52 PM",
      text: "Board moved up to 9am. Can you turn the Q3 numbers into 5 slides? Revenue, burn, hiring, and the two risks we talked about.",
      stepsLabel: "1 Task Ready for Approval",
      steps: [
        "Found Q3_Financials.xlsx in OneDrive and pulled revenue, burn, and headcount",
        "Found the risks from your thread with Nadia last Tuesday",
        "Built a 5-slide deck in your brand colors",
        "Drafted a Teams reply to Nadia with the deck attached",
      ],
      file: "Q3_Board_Update.pptx",
      caption: "An illustration. The deck and the reply wait in Decide. Open the file to check it before you send.",
    },
    { type: "h2", text: "Revising a document without starting over" },
    {
      type: "p",
      text: "First drafts of decks are rarely final. Tap Reprompt on the approval card and say what to change (\"swap slides 2 and 3\", \"add a column for Q2\", \"cut it to one page\"), and Synced edits the same file rather than generating a new one from nothing.",
    },
    {
      type: "p",
      text: "The same works days later from a different conversation. Ask for changes to \"the budget tracker from last week\" and Synced searches the files it already made before assuming it needs to build a new one.",
    },
    { type: "h2", text: "Brand colors and fonts on every file" },
    {
      type: "p",
      text: "In Settings, Brand lets you pick a header font, a body font, and a primary color. Synced works out the background, surface, secondary, and accent colors from the primary, and applies the set to every Word, PowerPoint, Excel, and PDF file it makes. So the deck for Nadia doesn't arrive in default blue.",
    },
    { type: "h2", text: "Finding documents in the Files screen" },
    {
      type: "p",
      text: "Every file Synced creates is saved to Files, reachable from the top of Messages. Filter by All, PDF, Word, Excel, PowerPoint, images, or ZIP, search by name, open a file to read it, share it through your phone's share sheet, or select several and delete them. Files made for a specific request also show up on the related [Task](/features/tasks) and in the conversation.",
    },
    { type: "h2", text: "Limits of Synced document creation" },
    {
      type: "list",
      items: [
        "Synced doesn't edit files in place in Google Drive or OneDrive. It reads them (Drive access is read-only) and creates a new file.",
        "No Google Docs, Sheets, or Slides output. Files come out as Word, Excel, PowerPoint, or PDF.",
        "It can't invent the numbers. If the figures a deck needs aren't in your connected sources, Synced asks you for them in Decide.",
        "Documents aren't sent anywhere until you approve the message they're attached to.",
      ],
    },
    {
      type: "p",
      text: "For heavily designed pitch decks with custom illustration, a designer and a presentation tool will still do better. Synced is for the deck you need by 9 AM that has the right numbers in it.",
    },
  ],
  faqs: [
    {
      q: "Can AI create a PowerPoint from an email?",
      a: "Synced can. When a message asks for slides, or you ask Synced directly, it builds a .pptx from the thread and your connected files, applies your brand colors and fonts, and attaches it to a reply for your approval.",
    },
    {
      q: "Where does Synced save the documents it creates?",
      a: "In the Files screen inside Synced, where you can filter, search, open, share, and delete them. They're also attached to the related conversation and Task.",
    },
    {
      q: "Does creating a document use more than one Action Plan?",
      a: "No. One message is one Action Plan regardless of how many steps it takes, including building a document. See the [Action Plan page](/glossary/action-plan).",
    },
    {
      q: "Can Synced edit a document someone attached to an email?",
      a: "Synced can read an attached Word, Excel, PowerPoint, or PDF file and build a revised version from it. The new file is what gets attached to your reply.",
    },
  ],
};
