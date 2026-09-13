import type { Page } from "../../types";

export const searchEmailAndFiles: Page = {
  slug: "/guides/how-to-search-email-and-files-together",
  cluster: "guide",
  parent: "/guides",
  title: "How to Search Email and Files Together | Synced",
  h1: "How to search email and files together",
  navLabel: "Search email and files together",
  cardText: "Search operators that find Drive links in Gmail, Microsoft 365 search across Outlook and OneDrive, and where the gaps are.",
  description:
    "How to search email and cloud files together: Gmail operators like has:drive, Gemini with Drive sources, Outlook search, and Microsoft 365 search.",
  eyebrow: "Guide",
  intro:
    "The file you need was either attached to an email, linked from an email, or saved to Drive after someone mentioned it in an email. Searching in only one place is how you end up asking a colleague to resend it.",
  answer:
    "To search email and files together in Google Workspace, use Gmail operators like `has:drive`, `has:attachment`, and `filename:` to find files shared by email, then run the same terms in Google Drive, or ask Gemini in Gmail with Drive files as sources. In Microsoft 365, search in Outlook with `hasattachments:yes` and use Search in the Microsoft 365 Copilot app to see files, people, and messages in one results page. Neither suite searches the other's files, so mixed setups still need two searches.",
  primaryIntent: "how to search email and files together",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "Article",
  author: "team",
  body: [
    { type: "h2", text: "Start with what you remember about the file" },
    {
      type: "p",
      text: "People rarely remember a file name. They remember who sent it, roughly when, and what it was for. Build the search around those, and use the file type to cut the noise. \"The pricing deck Sam sent before the offsite\" becomes: from Sam, a presentation, in the last two months.",
    },
    { type: "h2", text: "In Google Workspace: Gmail first, then Drive" },
    {
      type: "p",
      text: "Gmail search can find emails that carry a file, whether it's attached or shared as a Drive link. Type these straight into the search bar.",
    },
    {
      type: "table",
      head: ["Operator", "What it finds", "Example"],
      rows: [
        ["`has:attachment`", "Emails with an attached file", "`from:sam has:attachment`"],
        ["`has:drive`", "Emails with a Google Drive file linked or attached", "`has:drive subject:pricing`"],
        ["`filename:`", "Attachments by name or file type", "`filename:pdf invoice`"],
        ["`newer_than:` / `older_than:`", "A time window, like `2m` for two months", "`has:attachment newer_than:2m`"],
        ["`after:` / `before:`", "A date range", "`after:2026/07/01 before:2026/08/01`"],
        ["`in:anywhere`", "Everything, including Spam and Trash", "`in:anywhere filename:contract`"],
        ["`OR` and `-`", "Either term, or exclude a term", "`filename:pptx OR filename:pdf -newsletter`"],
      ],
      caption: "From Google's list of Gmail search operators. Combine as many as you need.",
    },
    {
      type: "p",
      text: "If the email links a Drive file you can't find, or the file was edited after it was sent, switch to Google Drive. Drive's search box accepts the same keywords and adds filter chips for File type, People, and Date modified. It also supports operators such as `owner:` and `type:`.",
    },
    { type: "h3", text: "Ask Gemini to look across both" },
    {
      type: "p",
      text: "On an eligible Google Workspace or Google AI plan, click Ask Gemini at the top right of Gmail. You can ask about earlier emails, and add Drive files as sources by clicking Add from Drive or typing `@` and picking a file. A prompt like \"What did the Q3 pricing doc say about annual discounts, and who sent it?\" can pull from both. Check the answer against the source before you forward it.",
    },
    { type: "h2", text: "In Microsoft 365: Outlook search and Microsoft 365 search" },
    {
      type: "steps",
      items: [
        {
          title: "Search Outlook for emails with files",
          body: "Click the search box and type `hasattachments:yes` to list messages with attachments. Narrow it with `from:` and `subject:`, joined with AND or OR, for example `from:Jerri AND subject:report`. After a search, the Refine options let you filter by From, Subject, and Has attachments.",
        },
        {
          title: "Search files and messages in one place",
          body: "With a work or school account, open the Microsoft 365 Copilot app and select Search in the navigation pane. Results come from across your organization's content, and you can filter to files, people, meetings, chats, and more.",
        },
        {
          title: "Open the file where it lives",
          body: "A file that was attached in Outlook may since have been saved to OneDrive or SharePoint and edited. Open the latest copy from there instead of the attachment.",
        },
      ],
    },
    { type: "h2", text: "When your email and files live in different suites" },
    {
      type: "p",
      text: "Plenty of people use Gmail with OneDrive, or Outlook with Google Drive. Neither Google's nor Microsoft's search covers the other's storage, so the practical method is two searches with the same terms:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Search email for the sender and a rough date. Note the exact file name from the attachment or link.",
        "Search the other storage for that exact name. Exact names beat keywords every time.",
        "If nothing matches, search storage for files modified within a day or two of the email's date.",
        "Once found, reply to the original thread with a link so the next search finds it in one place.",
      ],
    },
    {
      type: "p",
      text: "If the file you're after was an attachment on a very old message, the guide on [finding an old email attachment](/guides/how-to-find-an-old-email-attachment) goes deeper on that case.",
    },
    { type: "h2", text: "Comparing ways to search across email and files" },
    {
      type: "table",
      head: ["Method", "Covers", "Plain-language questions", "Cost"],
      rows: [
        ["Gmail operators plus Drive search", "Gmail and Google Drive, separately", "No", "Free"],
        ["Gemini in Gmail with Drive sources", "Gmail and Drive together", "Yes", "Eligible Workspace or Google AI plan"],
        ["Outlook search plus Microsoft 365 search", "Outlook, OneDrive, SharePoint, Teams", "Keyword search", "Needs a Microsoft 365 work or school account"],
        ["AI inbox assistant (Synced)", "Connected Google Drive and OneDrive, plus the thread", "Searches when a message needs a file", "Free plan covers Gmail, Drive, and OneDrive; Pro ($29.99/user/month) adds the rest"],
      ],
    },
    { type: "h2", text: "How Synced searches when a message asks for a file" },
    {
      type: "p",
      text: "[Synced](/) doesn't wait for you to search. When a new message asks for a document, it uses the thread for context, searches your connected Google Drive or OneDrive, finds the likely file, and attaches it to a draft reply. That works across suites, so a Gmail request can be answered from OneDrive. The request is written in plain words, and Synced works out what to look for, which is close to how [natural language search](/glossary/natural-language-search) works.",
    },
    {
      type: "message",
      from: "Sam (sales lead)",
      source: "gmail",
      time: "5:06 PM",
      text: "Do you still have the pricing deck from before the offsite? Client wants the annual tiers.",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: ["Found Pricing_2026_offsite.pptx in OneDrive, last edited Aug 28", "Drafted a reply with the deck attached and the annual tiers called out"],
      file: "Pricing_2026_offsite.pptx",
      caption: "An illustration. You check the file and approve the reply before it's sent.",
    },
    {
      type: "p",
      text: "Synced doesn't search your whole mailbox history, so for an old email itself, use the Gmail or Outlook search steps above. Dropbox and Notion are listed as coming soon, so files stored there won't be found yet. Synced connects to Drive read-only for search; see [Google Drive](/integrations/google-drive) for the permissions it asks for.",
    },
    {
      type: "sources",
      items: [
        { label: "Gmail Help: Search operators you can use with Gmail", url: "https://support.google.com/mail/answer/7190", checked: "2026-09-13" },
        { label: "Google Drive Help: Search for files in Google Drive", url: "https://support.google.com/drive/answer/2375114", checked: "2026-09-13" },
        { label: "Gmail Help: Collaborate with Gemini in Gmail", url: "https://support.google.com/mail/answer/14355636", checked: "2026-09-13" },
        { label: "Microsoft Support: Find all messages with attachments in Outlook", url: "https://support.microsoft.com/en-us/office/find-all-messages-with-attachments-in-outlook-b1395e66-804f-4d05-99ef-0fbd9618fecf", checked: "2026-09-13" },
        { label: "Microsoft Support: Get started with Search in the Microsoft 365 Copilot app", url: "https://support.microsoft.com/en-us/topic/get-started-with-search-in-the-microsoft-365-copilot-app-acc4d31f-496e-4f9d-ade0-67bae32d14ba", checked: "2026-09-13" },
      ],
    },
  ],
  faqs: [
    {
      q: "How do I find emails with Google Drive links in Gmail?",
      a: "Type `has:drive` in the Gmail search bar. Add `from:` with the sender's name or a keyword to narrow it, for example `has:drive from:sam budget`.",
    },
    {
      q: "Can Gmail search inside attachments?",
      a: "Gmail's `filename:` operator matches attachment names and file types. For text inside a document, search Google Drive, which indexes file contents, or ask Gemini in Gmail with the file added as a source.",
    },
    {
      q: "Can I search Gmail and OneDrive at the same time?",
      a: "Not with Google's or Microsoft's built-in search. You need two searches, or a third-party tool that connects to both accounts.",
    },
    {
      q: "What does the in:anywhere operator do in Gmail?",
      a: "It widens a search to all of Gmail, including Spam and Trash. Use it when a file you know you received doesn't show up in a normal search.",
    },
  ],
  related: ["/guides/how-to-find-an-old-email-attachment", "/glossary/natural-language-search", "/integrations/google-drive"],
};
