import type { Page } from "../../types";

export const findOldEmailAttachment: Page = {
  slug: "/guides/how-to-find-an-old-email-attachment",
  cluster: "guide",
  parent: "/guides",
  title: "How to Find an Old Email Attachment in Gmail or Outlook | Synced",
  h1: "How to find an old email attachment",
  navLabel: "Find an old email attachment",
  cardText: "The search operators and filters that find a file you were sent months ago, in Gmail and every version of Outlook.",
  description:
    "Find an old email attachment with Gmail operators like has:attachment and filename:, or Outlook's Files filter and hasattachments:yes, plus where files hide.",
  eyebrow: "Guide",
  intro:
    "You know someone sent the signed lease. You think it was spring. The subject line was probably \"Re: Re: quick question.\" Here's how to find it in under a minute.",
  answer:
    "To find an old email attachment in Gmail, search with `has:attachment` plus whatever you remember, such as `from:dana filename:pdf before:2026/06/01`, and add `in:anywhere` to include Spam and Trash. In Outlook, type a keyword in the search box and choose the Files filter, or use Advanced Search and check Attachments; in classic Outlook, type `hasattachments:yes`. If the file still doesn't appear, it may have been sent as a Google Drive or OneDrive link instead of an attachment.",
  primaryIntent: "how to find an old email attachment",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "Article",
  author: "team",
  body: [
    { type: "h2", text: "Start with what you remember" },
    {
      type: "p",
      text: "Attachment searches work best when you combine a few facts rather than guessing the exact filename. Before typing anything, jot down whatever you know: who sent it, roughly when, what kind of file, and any word likely to be in the subject or filename.",
    },
    {
      type: "table",
      head: ["You remember", "Gmail operator", "Outlook"],
      rows: [
        ["Who sent it", "`from:dana@example.com` or `from:dana`", "Type the name in search, or use From in Advanced Search"],
        ["It was a file", "`has:attachment`", "Files filter (new Outlook, web) or `hasattachments:yes` (classic)"],
        ["The file type", "`filename:pdf`, `filename:xlsx`", "Add the extension as a search word"],
        ["Part of the filename", "`filename:lease`", "Search the word, then filter to Files"],
        ["Roughly when", "`after:2026/03/01 before:2026/06/01` or `older_than:6m`", "Date range in Advanced Search"],
        ["It was big", "`larger:5M`", "Sort a folder by size, where your version offers it"],
        ["A Google Doc, Sheet, or Slides link", "`has:document`, `has:spreadsheet`, `has:presentation`, or `has:drive`", "Search the file name or the word \"shared\""],
      ],
    },
    { type: "h2", text: "How to find an attachment in Gmail" },
    {
      type: "steps",
      items: [
        { title: "Search with two or three operators", body: "In the search box, combine operators with spaces: `from:dana has:attachment filename:pdf`. Each one narrows the results." },
        { title: "Add a date range if the list is long", body: "`after:` and `before:` take dates in YYYY/MM/DD format. `older_than:` and `newer_than:` take d, m, or y, like `older_than:1y`." },
        { title: "Use alternatives when you're unsure", body: "`filename:{pdf docx}` matches either type. `from:{dana priya}` matches either sender." },
        { title: "Widen to Spam and Trash", body: "Add `in:anywhere` to include Spam and Trash. Deleted messages stay in Trash for 30 days before Gmail removes them permanently." },
        { title: "Use the search options panel if you'd rather not type operators", body: "Click Show search options in the search box and fill in fields like From and Subject instead. The same panel is where filters start." },
      ],
    },
    {
      type: "p",
      text: "One Gmail detail catches people out: files over the 25 MB attachment limit on personal accounts are automatically replaced with a Google Drive link. Those emails may not match `has:attachment`. Try `has:drive` instead, or search Google Drive directly under Shared with me.",
    },
    { type: "h2", text: "How to find an attachment in Outlook" },
    {
      type: "h3",
      text: "New Outlook for Windows and Outlook on the web",
    },
    {
      type: "steps",
      items: [
        { title: "Search a keyword", body: "Click the search box and type the sender, a subject word, or part of the filename." },
        { title: "Filter to files", body: "Select Files in the search results to show only messages with attachments." },
        { title: "Or use Advanced Search", body: "Open the search filters and check Attachments, then add From, date range, or keywords. Outlook on the web also accepts `HasAttachment:yes` typed into the search box." },
        { title: "Browse all messages with files", body: "Without searching, use Sort, then Has files, to group messages that carry attachments." },
      ],
    },
    {
      type: "h3",
      text: "Classic Outlook for Windows",
    },
    {
      type: "steps",
      items: [
        { title: "Type the search keyword", body: "In the search box above the message list, type `hasattachments:yes` and press Enter. Add other words, like `lease hasattachments:yes`, to narrow it." },
        { title: "Or use the ribbon", body: "Click in the search box to open the Search tab, then select Has Attachments in the Refine group." },
        { title: "Widen the scope", body: "Search looks in the current folder or mailbox by default. If nothing turns up, widen the scope in the Search tab to all mailboxes or all Outlook items." },
      ],
    },
    {
      type: "p",
      text: "Outlook on the web shows only the first 1,000 search results, so on a busy mailbox, add a sender or date before scrolling.",
    },
    { type: "h2", text: "When the attachment still won't show up" },
    {
      type: "list",
      items: [
        "It was a link, not a file. Search your cloud storage (Google Drive, OneDrive, Dropbox) for the name, or search email for the word \"shared\".",
        "It came through a different channel. Check Slack, Teams, or WhatsApp if the sender uses them. People often say \"I emailed it\" about something they sent in chat.",
        "It was sent to a different address. Check your other accounts, or a shared inbox you're on.",
        "The mail was deleted more than 30 days ago in Gmail, or purged by a retention policy at work. Ask the sender to resend, or ask your admin whether it can be recovered.",
      ],
    },
    { type: "h2", text: "Save the next one where you'll find it" },
    {
      type: "p",
      text: "When you find an important file, save it to a folder in Drive or OneDrive with a filename you'd search for: `2026-04 Lease signed - 12 Elm St.pdf` beats `scan0042.pdf`. For recurring senders, a filter or rule that labels mail with attachments saves the hunt next time; see [how to organize Gmail with labels and filters](/guides/how-to-organize-gmail-with-labels-and-filters).",
    },
    { type: "h2", text: "How Synced finds files for replies" },
    {
      type: "p",
      text: "Most attachment hunts start because someone asked for the file again. [Synced](/) handles that case: when a message in a connected Inbox asks for a document, it searches your connected Google Drive or OneDrive, using past emails for context, finds the file, and drafts the reply with it attached. The draft waits in Decide until you approve it. For search across mail and files in general, see [Search](/features/search).",
    },
    {
      type: "message",
      from: "Dana (landlord)",
      source: "gmail",
      time: "2:08 PM",
      text: "Hi, our records are missing the signed lease from April. Can you send a copy?",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Found \"Lease signed - 12 Elm St.pdf\" in Google Drive",
        "Drafted a reply with the lease attached",
      ],
      file: "Lease signed - 12 Elm St.pdf",
      caption: "An illustration. Nothing is sent until you approve it.",
    },
    {
      type: "sources",
      items: [
        { label: "Search operators you can use with Gmail (Gmail Help)", url: "https://support.google.com/mail/answer/7190", checked: "2026-09-13" },
        { label: "Gmail attachment size limits (Gmail Help)", url: "https://support.google.com/mail/answer/6584", checked: "2026-09-13" },
        { label: "Delete or recover Gmail messages (Gmail Help)", url: "https://support.google.com/mail/answer/7401", checked: "2026-09-13" },
        { label: "Find all messages with attachments in Outlook (Microsoft Support)", url: "https://support.microsoft.com/en-us/outlook/find-all-messages-with-attachments-in-outlook", checked: "2026-09-13" },
        { label: "Use Outlook's built-in search filters (Microsoft Support)", url: "https://support.microsoft.com/en-us/office/use-outlook-s-built-in-search-filters-86fe4399-fba1-42e1-8057-6a5d7f99a230", checked: "2026-09-13" },
        { label: "Search Mail and People in Outlook on the web (Microsoft Support)", url: "https://support.microsoft.com/en-us/office/search-mail-and-people-in-outlook-on-the-web-b27e5eb7-3255-4c61-bf16-1c6a16bc2e6b", checked: "2026-09-13" },
      ],
    },
  ],
  faqs: [
    {
      q: "How do I see all emails with attachments in Gmail?",
      a: "Search `has:attachment`. To narrow it, add a sender (`from:`), a file type (`filename:pdf`), or a size (`larger:10M`).",
    },
    {
      q: "How do I search for an attachment by file name in Gmail?",
      a: "Use `filename:` followed by part of the name or the extension, for example `filename:invoice` or `filename:\"q3 report\"`.",
    },
    {
      q: "Why can't I find an attachment I know I received?",
      a: "The most common reasons: it was sent as a Drive or OneDrive link rather than a file, it arrived in another account or app, or it was deleted. In Gmail, add `in:anywhere` to include Spam and Trash.",
    },
    {
      q: "How do I find large attachments to free up storage?",
      a: "In Gmail, search `larger:10M`, or `size:` with a value in bytes, then delete or download what you don't need. In Outlook, sort a folder by size where your version offers it.",
    },
  ],
  related: ["/guides/how-to-organize-gmail-with-labels-and-filters", "/glossary/natural-language-search", "/features/search"],
};
