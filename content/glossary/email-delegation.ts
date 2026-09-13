import type { Page } from "../types";

export const emailDelegation: Page = {
  slug: "/glossary/email-delegation",
  cluster: "glossary",
  parent: "/glossary",
  term: "Email delegation",
  title: "What Is Email Delegation? | Synced",
  h1: "Email delegation",
  navLabel: "Email delegation",
  cardText: "Letting someone else read, reply, or act on your email for you.",
  description:
    "Email delegation is giving another person, or software, permission to read and act on your email. It covers mailbox access and handing off single emails.",
  eyebrow: "Glossary",
  intro: "Executives have done it with assistants for decades. The question now is what else can be a delegate.",
  answer:
    "Email delegation is granting another person or a piece of software the ability to read, organize, reply to, or act on email on your behalf. Email delegation can mean account-level access, like Gmail's delegate setting or Outlook's delegate permissions, or handing off a single message to a colleague with instructions.",
  primaryIntent: "email delegation definition",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "Account-level email delegation" },
    {
      type: "p",
      text: "Gmail lets you add a delegate who can read, send, and delete email in your account; when a delegate sends a message, their email address appears on it. Outlook and Microsoft 365 offer delegate access and \"send on behalf\" permissions, often used by executive assistants. Gmail's delegate access covers the whole mailbox; Outlook's delegate permissions can be set separately for folders like Inbox and Calendar.",
    },
    { type: "h2", text: "Message-level email delegation" },
    {
      type: "p",
      text: "More common day to day: forwarding one email to the person who should handle it, with a note about what you need and by when. Good message-level delegation names the outcome, the deadline, and whether you want to see the reply before it goes out.",
    },
    { type: "h2", text: "Email delegation to software" },
    {
      type: "p",
      text: "An [AI inbox assistant](/glossary/ai-inbox-assistant) is also a delegate, usually connected through OAuth rather than mailbox delegation. The same questions apply as with a human assistant: what can it see, what can it send, and does it check with you first. The [OAuth scopes](/glossary/oauth-scopes) an app requests answer the first two.",
    },
    {
      type: "p",
      text: "Synced works as a delegate with limits. It takes on work it can do, like drafting replies and finding files, with every drafted message waiting for your approval. Work that needs a person becomes a Task. The manual approach is in [how to delegate email](/guides/how-to-delegate-email).",
    },
    {
      type: "sources",
      items: [{ label: "Gmail Help: Set up mail delegation", url: "https://support.google.com/mail/answer/138350", checked: "2026-09-13" }],
    },
  ],
  faqs: [
    {
      q: "Can a Gmail delegate change my password?",
      a: "No. Google's help page says a delegate can read, send, and delete email for you, but can't chat with anyone, change your password, or open your Google Account settings.",
    },
  ],
  related: ["/glossary/email-to-task", "/glossary/shared-inbox", "/guides/how-to-delegate-email"],
};
