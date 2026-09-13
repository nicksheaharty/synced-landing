import type { Page } from "../types";

export const followUpTracking: Page = {
  slug: "/glossary/follow-up-tracking",
  cluster: "glossary",
  parent: "/glossary",
  term: "Follow-up tracking",
  title: "What Is Email Follow-up Tracking? | Synced",
  h1: "Follow-up tracking",
  navLabel: "Follow-up tracking",
  cardText: "Keeping a list of threads waiting on someone else, so quiet ones resurface.",
  description:
    "Follow-up tracking is keeping track of sent emails and messages still waiting on a reply, so a thread that goes quiet comes back to you instead of disappearing.",
  eyebrow: "Glossary",
  intro: "The list of things other people owe you, which most inboxes don't keep.",
  answer:
    "Follow-up tracking is the practice, or software feature, of monitoring messages you've sent that still need a response and bringing them back to your attention when the response doesn't arrive. Follow-up tracking can be as simple as a reminder on a sent email or as involved as an assistant that notices the silence and drafts the nudge.",
  primaryIntent: "email follow up tracking definition",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "Why inboxes lose follow-ups" },
    {
      type: "p",
      text: "An inbox shows what other people sent you. A follow-up is the opposite: something you're waiting on, sitting in a sent folder nobody reads. Unless something brings the thread back, the only tracking system is your memory.",
    },
    { type: "h2", text: "Common ways to track follow-ups" },
    {
      type: "list",
      items: [
        "Gmail Nudges, which bring back sent emails that haven't had a reply after a few days.",
        "Snoozing a sent message or flagging it with a reminder in Outlook.",
        "A \"Waiting for\" label or folder you review on a schedule.",
        "An AI assistant that reads the thread, sees the open question, and drafts a follow-up.",
      ],
    },
    { type: "h2", text: "Follow-up tracking vs. read receipts and open tracking" },
    {
      type: "p",
      text: "Open tracking tells you whether someone opened an email, usually through a tracking pixel. Follow-up tracking tells you whether they answered. The second is what matters for getting work done: an opened email with no reply still needs a nudge. Open tracking is also blocked or made unreliable by some mail apps that preload images.",
    },
    { type: "h2", text: "How Synced tracks follow-ups" },
    {
      type: "p",
      text: "In Synced, the Sent filter shows conversations still waiting on a reply from the other side. When one needs chasing, you ask Synced to follow up and it drafts the nudge with the specific ask from the thread, then puts it in Decide for approval. Synced doesn't send reminders on a timer by itself; see [follow-ups](/features/follow-ups). The step-by-step comparison of methods is in [how to automate email follow-ups](/guides/how-to-automate-email-follow-ups).",
    },
  ],
  related: ["/glossary/email-to-task", "/glossary/scheduled-send", "/guides/how-to-automate-email-follow-ups"],
};
