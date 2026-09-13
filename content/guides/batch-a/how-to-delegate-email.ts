import type { Page } from "../../types";

export const delegateEmail: Page = {
  slug: "/guides/how-to-delegate-email",
  cluster: "guide",
  parent: "/guides",
  title: "How to Delegate Email in Gmail and Outlook | Synced",
  h1: "How to delegate email",
  navLabel: "Delegate email",
  cardText: "Forward a single thread well, give an assistant delegate access in Gmail or Outlook, and agree on rules so nothing gets answered twice.",
  description:
    "How to delegate email: forward one thread with a clear ask, add a Gmail delegate, grant Outlook delegate access, and set rules so replies don't collide.",
  eyebrow: "Guide",
  intro:
    "Delegating email comes in two sizes. Handing off one thread takes a good forward. Handing off your inbox takes account access, and an agreement about who answers what.",
  answer:
    "To delegate a single email, forward it with one line saying what you need, by when, and whether to copy you. To delegate your inbox, add the person as a delegate: in Gmail, go to Settings, See all settings, Accounts and Import, then Grant access to your account. In classic Outlook for a Microsoft 365 work account, go to File, Account Settings, Delegate Access. Never share your password instead.",
  primaryIntent: "how to delegate email",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "Article",
  author: "team",
  body: [
    { type: "h2", text: "Decide which kind of delegation you need" },
    {
      type: "table",
      head: ["You want to...", "Use", "The other person gets"],
      rows: [
        ["Hand off one request", "A forward with a clear ask", "That thread only"],
        ["Have someone triage and reply for you daily", "Delegate access", "Your inbox, sending as \"on behalf of\" you"],
        ["Share a team address like support@", "A shared mailbox or Google Group", "A common inbox, not yours"],
      ],
    },
    {
      type: "p",
      text: "The term [email delegation](/glossary/email-delegation) usually means the second row. Most people need the first row far more often.",
    },
    { type: "h2", text: "Delegate one thread with a forward" },
    {
      type: "p",
      text: "A bare \"FYI\" forward is how work gets done twice or not at all. Add three things above the forwarded message:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "What you need: \"Please send Dana the revised SOW.\"",
        "By when: \"before her Thursday call.\"",
        "How to close the loop: \"Reply to her directly and cc me\" or \"No need to cc me, just let me know if it slips.\"",
      ],
    },
    {
      type: "p",
      text: "Then tell the original sender who's taking it, so they don't wait on you. The [delegation email template](/templates/delegation-email) has wording for both messages. If you forward and walk away, set yourself a follow-up; the guide on [automating email follow-ups](/guides/how-to-automate-email-follow-ups) covers how.",
    },
    { type: "h2", text: "Add a delegate in Gmail" },
    {
      type: "steps",
      items: [
        {
          title: "Open account settings",
          body: "In Gmail on a computer, click Settings, then See all settings. You can't add delegates from the Gmail app.",
        },
        {
          title: "Find Grant access to your account",
          body: "Open the Accounts and Import tab (or Accounts, on a work or school account). In Grant access to your account, click Add another account.",
        },
        {
          title: "Invite the delegate",
          body: "Enter their email address, click Next Step, then Send email to grant access. They need to accept the invitation before access starts.",
        },
      ],
    },
    {
      type: "list",
      items: [
        "Limits: up to 10 delegates on a personal Gmail account, and up to 1,000 on a work or school account.",
        "A delegate can read, send, and delete email in your account. When they send a message, their own email address appears on it.",
        "A delegate can't change your password, chat as you, or use features like Gemini in Gmail on your behalf.",
        "On Google Workspace, your admin has to allow delegation for the organization. If the option is missing, ask them.",
      ],
    },
    { type: "h2", text: "Give delegate access in Outlook" },
    {
      type: "p",
      text: "Outlook's delegate access is for work or school accounts on Microsoft 365 or Exchange Online, and the delegate has to be in your organization's address list. Microsoft notes that assigning mail folder delegate permissions in new Outlook is only partly available, so set it up in classic Outlook.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Open Delegate Access",
          body: "In classic Outlook, select File, Info, Account Settings, then Delegate Access.",
        },
        {
          title: "Add the person",
          body: "Select Add, type the person's name, press Enter, select them, then Add and OK.",
        },
        {
          title: "Set permission levels",
          body: "In Delegate Permissions, choose a level for each folder. Reviewer can read items. Author can read and create items. Editor can also change and delete items you created.",
        },
      ],
    },
    {
      type: "p",
      text: "Delegates send \"on behalf of\" you, and the recipient sees both names. If messages need to appear as if you sent them yourself, that's Send As, which only your organization's admin can grant. In new Outlook, delegates open your mailbox by right-clicking Shared with me, then Add shared folder or mailbox.",
    },
    { type: "h2", text: "Agree on rules before handing over the inbox" },
    {
      type: "p",
      text: "Access is the easy part. Collisions come from two people answering the same thread, or neither. Write these down in a short doc you both keep:",
    },
    {
      type: "list",
      items: [
        "Which senders or topics the delegate answers without asking, and which they only flag.",
        "A label or category for \"handled\" and one for \"needs you,\" so the state of each thread is visible.",
        "How they sign off. \"Sent on behalf of\" plus their own name avoids confusing the recipient.",
        "What they never do: accept meetings over a certain length, agree to pricing, or reply to legal.",
        "A daily 10-minute check on the \"needs you\" label, so the delegate isn't stuck waiting.",
      ],
    },
    {
      type: "callout",
      title: "Don't share your password",
      text: "Giving someone your password means handing over your two-step verification codes too, makes every action look like yours, and is often against company policy. Delegate access exists so you can revoke it later without changing anything else.",
    },
    { type: "h2", text: "Where Synced fits in email delegation" },
    {
      type: "p",
      text: "[Synced](/) isn't a delegate-access tool and doesn't give another person your inbox. It covers the kind of delegation where you'd hand an assistant the prep work: it drafts replies, finds files, and proposes meeting times, then waits for your approval in Decide. When a message asks a person to do something, it turns into an item in [Tasks](/features/tasks).",
    },
    {
      type: "message",
      from: "Tom (board member)",
      source: "gmail",
      time: "6:15 PM",
      text: "Could you send me last quarter's board deck and set up 20 minutes before the meeting to go over the numbers?",
      stepsLabel: "3 Tasks Ready for Approval",
      steps: [
        "Found the Q2 board deck in Google Drive",
        "Picked two 20-minute slots before the meeting from your calendar",
        "Drafted a reply with the deck and the times",
      ],
      file: "Board_deck_Q2.pdf",
      caption: "An illustration. Nothing is sent until you approve it.",
    },
    {
      type: "p",
      text: "If you need another person to read and answer your mail directly, use delegate access; Synced doesn't replace that. How assistants use Synced for their own inbox work is covered in [Synced for executive assistants](/for/executive-assistants).",
    },
    {
      type: "sources",
      items: [
        { label: "Gmail Help: Set up mail delegation", url: "https://support.google.com/mail/answer/138350", checked: "2026-09-13" },
        { label: "Microsoft Support: About delegates in Outlook", url: "https://support.microsoft.com/en-us/office/about-delegates-allow-someone-to-manage-your-mail-and-calendar-in-outlook-41c40c04-3bd1-4d22-963a-28eafec25926", checked: "2026-09-13" },
        { label: "Microsoft Support: Allow messages to be sent on your behalf", url: "https://support.microsoft.com/en-us/office/allow-messages-to-be-sent-on-your-behalf-when-sharing-a-folder-or-mailbox-afb79d6b-2967-43b9-a944-a6b953190af5", checked: "2026-09-13" },
        { label: "Microsoft Support: Share and access another person's mailbox or folder", url: "https://support.microsoft.com/en-us/office/share-and-access-another-person-s-mailbox-or-folder-in-outlook-a909ad30-e413-40b5-a487-0ea70b763081", checked: "2026-09-13" },
      ],
    },
  ],
  faqs: [
    {
      q: "Can a Gmail delegate see my password or change settings?",
      a: "No. A Gmail delegate can read, send, and delete email, but can't change your password or chat as you. You can remove a delegate anytime from the same Grant access to your account section.",
    },
    {
      q: "Can I delegate a personal Outlook.com account?",
      a: "Outlook's Delegate Access feature is only for work or school accounts on Microsoft 365 or Exchange Online. For a personal account, forwarding specific threads is the safer option.",
    },
    {
      q: "What's the difference between Send on behalf and Send As?",
      a: "Send on behalf shows both names, so the recipient sees that a delegate sent it. Send As shows only the owner's name, and in Microsoft 365 it has to be granted by an admin.",
    },
    {
      q: "How do I stop someone from being my email delegate?",
      a: "In Gmail, go back to Settings, Accounts and Import, and remove them under Grant access to your account. In classic Outlook, open Delegate Access again and remove the person from the list.",
    },
  ],
  related: ["/guides/how-to-turn-emails-into-tasks", "/templates/delegation-email", "/features/tasks"],
};
