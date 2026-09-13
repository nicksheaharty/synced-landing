import type { Page } from "../../types";

export const organizeGmailLabelsFilters: Page = {
  slug: "/guides/how-to-organize-gmail-with-labels-and-filters",
  cluster: "guide",
  parent: "/guides",
  title: "How to Organize Gmail with Labels and Filters | Synced",
  h1: "How to organize Gmail with labels and filters",
  navLabel: "Organize Gmail with labels and filters",
  cardText: "A small label system, the filters that feed it, and the search operators that make both precise.",
  description:
    "Organize Gmail with a short set of labels, filters that apply them automatically, and search operators for precise rules. Setup steps and a starter system.",
  eyebrow: "Guide",
  intro:
    "Most Gmail label systems die the same way: 40 labels, applied by hand, abandoned by March. A handful of labels that filters apply for you lasts longer.",
  answer:
    "To organize Gmail, create a small set of labels (five to ten, nested if needed), then build filters that apply them automatically. Start a filter from Gmail's search options, test the search, click Create filter, and choose actions such as applying a label and skipping the inbox. Labels differ from folders: one email can carry several labels, and archiving removes it from the inbox without removing its labels.",
  primaryIntent: "how to organize gmail with labels and filters",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "Article",
  author: "team",
  body: [
    { type: "h2", text: "How Gmail labels differ from folders" },
    {
      type: "p",
      text: "A Gmail label is a tag, not a location. One email can have several labels, so a contract from a client can sit under both Clients/Acme and Contracts. Labels are private: the people you email never see them. Deleting an email removes it from every label it had.",
    },
    {
      type: "p",
      text: "The inbox is itself a label. Archiving an email removes the Inbox label and leaves the others, which is why \"label it, then archive it\" is the core Gmail filing move. Gmail allows up to 5,000 labels per account, which is roughly 4,990 more than most people should create.",
    },
    { type: "h2", text: "A starter label system that survives contact with real email" },
    {
      type: "p",
      text: "Label by what you'll need to find or do, not by every sender. This set covers most work inboxes.",
    },
    {
      type: "table",
      head: ["Label", "What goes in it", "Applied by"],
      rows: [
        ["Clients/[Name]", "Mail from each active client's domain", "Filter per client domain"],
        ["Receipts", "Invoices, order confirmations, subscriptions", "Filter on words like receipt or invoice"],
        ["Newsletters", "Anything you subscribed to on purpose", "Filter on unsubscribe, or per sender"],
        ["Notifications", "App alerts, calendar notices, automated reports", "Filter on sender addresses"],
        ["Waiting", "Threads where you're waiting on someone", "You, by hand"],
        ["Reference", "Things you'll search for later: policies, logins, travel", "You, by hand"],
      ],
      caption: "Only two labels are applied by hand. Everything else is a filter's job.",
    },
    { type: "h2", text: "How to create and nest labels in Gmail" },
    {
      type: "steps",
      items: [
        { title: "Create the label", body: "In the left sidebar, next to Labels, click Create new label. Type the name and click Create." },
        { title: "Nest it if it belongs to a group", body: "In the same dialog, check Nest label under and pick the parent. Clients/Acme and Clients/Northwind keep the sidebar short." },
        { title: "Give busy labels a color", body: "Hover over the label, click More, then Label color. Color the two or three you want to spot in the inbox and leave the rest plain." },
        { title: "Hide labels you only search", body: "In Settings, Labels, choose Show or Hide for each label. Receipts rarely need to be in the sidebar." },
      ],
    },
    { type: "h2", text: "How to create a Gmail filter" },
    {
      type: "steps",
      items: [
        { title: "Open search options", body: "Click Show search options, the icon inside the search box at the top of Gmail. Fill in From, To, Subject, Has the words, or other fields." },
        { title: "Test before you commit", body: "Click Search and scan the results. If the search catches the wrong mail, the filter will too." },
        { title: "Click Create filter", body: "It's at the bottom of the search options panel." },
        { title: "Choose actions", body: "Gmail's filter actions include applying a label, skipping the inbox (archiving), marking as read, starring, never sending to spam, deleting, and forwarding. There's also a checkbox to apply the filter to matching conversations you already have." },
        { title: "Save", body: "Click Create filter. Edit or delete filters later in Settings, See all settings, Filters and Blocked Addresses." },
      ],
    },
    {
      type: "p",
      text: "A faster shortcut: open an email from the sender you want to filter, click More (the three dots), and choose Filter messages like these. Gmail fills in the From field for you.",
    },
    { type: "h2", text: "Search operators that make Gmail filters precise" },
    {
      type: "p",
      text: "The Has the words field accepts Gmail's search operators, which is where filters get useful.",
    },
    {
      type: "table",
      head: ["Operator", "Example", "Use it to"],
      rows: [
        ["`from:`", "`from:@acme.com`", "Catch everyone at a client's domain"],
        ["`OR` or `{ }`", "`invoice OR receipt`", "Match any of several words in one filter"],
        ["`-`", "`from:@acme.com -from:billing@acme.com`", "Exclude one sender from a broader rule"],
        ["`list:`", "`list:updates@example.com`", "Catch a mailing list regardless of who posted"],
        ["`has:attachment`", "`from:@acme.com has:attachment`", "Label client files separately"],
        ["`larger:`", "`larger:10M`", "Find big attachments eating storage"],
        ["`deliveredto:`", "`deliveredto:you+receipts@gmail.com`", "Route plus-addressed mail you gave to shops"],
      ],
    },
    {
      type: "callout",
      title: "Filters only act on new mail by default",
      text: "A new filter applies to incoming messages. To label what's already in your inbox, tick the option to also apply the filter to matching conversations when you save it. Forwarding filters only ever affect new messages.",
    },
    { type: "h2", text: "Keeping the system from falling apart" },
    {
      type: "list",
      items: [
        "Add a filter the third time you manually label the same kind of email, not the first.",
        "Export your filters once they're working, using Export at the bottom of Filters and Blocked Addresses. The .xml file can be imported into another Gmail account with Import filters.",
        "Every few months, check which labels you haven't opened. Delete the label, not the mail, and let search do the finding.",
        "Don't build a filter for every newsletter. Unsubscribing is a filter that never breaks.",
      ],
    },
    { type: "h2", text: "What labels and filters can't do" },
    {
      type: "p",
      text: "Filters sort by who sent a message and what words it contains. They can't tell whether a client email is asking for a file, a meeting, or nothing, so an Acme label full of mixed requests still needs reading. That's the gap an assistant fills.",
    },
    {
      type: "p",
      text: "[Synced](/) works alongside your labels rather than replacing them. It reads new Gmail messages, works out what each one is asking for, and prepares the reply, the file from Google Drive, or open times from Google Calendar as an Action Plan. Anything that needs sending waits in Decide for your approval. Gmail is on the Free plan; details are on the [Gmail integration](/integrations/gmail) page.",
    },
    {
      type: "sources",
      items: [
        { label: "Create rules to filter your emails (Gmail Help)", url: "https://support.google.com/mail/answer/6579", checked: "2026-09-13" },
        { label: "Create labels to organize Gmail (Gmail Help)", url: "https://support.google.com/mail/answer/118708", checked: "2026-09-13" },
        { label: "Search operators you can use with Gmail (Gmail Help)", url: "https://support.google.com/mail/answer/7190", checked: "2026-09-13" },
      ],
    },
  ],
  faqs: [
    {
      q: "What's the difference between labels and folders in Gmail?",
      a: "A folder holds each email in one place. A Gmail label is a tag, so one email can carry several labels and still be in your inbox or archive. Deleting an email removes it from all its labels.",
    },
    {
      q: "Can a Gmail filter apply to emails I already have?",
      a: "Yes. When you create or edit the filter, tick the option to also apply it to matching conversations before saving. Forwarding actions still only apply to new mail.",
    },
    {
      q: "How many labels should I have in Gmail?",
      a: "Five to ten top-level labels is enough for most people, with nesting for groups like clients. Gmail allows up to 5,000, but labels you don't apply automatically tend to be abandoned.",
    },
    {
      q: "Why isn't my Gmail filter working?",
      a: "Run the filter's criteria as a search first. If the search doesn't return the email, the filter won't catch it. Common causes are a sender using a different address or the words being in an attachment instead of the body.",
    },
  ],
  related: ["/guides/how-to-set-up-rules-in-outlook", "/glossary/inbox-zero", "/integrations/gmail"],
};
