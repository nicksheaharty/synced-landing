import type { Page } from "../types";

export const followUpNoResponse: Page = {
  slug: "/templates/follow-up-after-no-response",
  cluster: "template",
  parent: "/templates",
  title: "Follow-up Email After No Response: Templates | Synced",
  h1: "Follow-up email after no response",
  navLabel: "Follow-up after no response",
  cardText: "A short, polite nudge for a thread that went quiet, plus a firmer version for the second try.",
  description:
    "Copy-and-paste follow-up email templates for when someone hasn't replied: a short first nudge, a firmer second follow-up, and a close-the-loop version.",
  eyebrow: "Email template",
  intro: "Short beats clever. A follow-up should restate the one thing you need and make it easy to answer.",
  answer:
    "A good follow-up email after no response is two to four sentences long, replies in the original thread, restates the single thing you need, and gives a specific date or an easy yes/no. Wait two to three business days before the first follow-up and about a week before the second.",
  primaryIntent: "follow up email after no response template",
  published: "2026-09-13",
  updated: "2026-09-13",
  body: [
    { type: "h2", text: "First follow-up" },
    { type: "p", text: "Send this two to three business days after your original email, as a reply in the same thread so the context is right there." },
    {
      type: "template",
      label: "First follow-up",
      subject: "Re: [original subject]",
      text: "Hi [Name],\n\nBumping this up in case it got buried. Could you let me know about [the one thing you need] by [day]?\n\nThanks,\n[Your name]",
    },
    { type: "h2", text: "Second follow-up" },
    { type: "p", text: "About a week later. Be more specific and offer a way to answer quickly." },
    {
      type: "template",
      label: "Second follow-up",
      subject: "Re: [original subject]",
      text: "Hi [Name],\n\nFollowing up on [topic]. To keep [project/deadline] on track I need [decision/document] by [date].\n\nIf it's easier, a one-word reply works: yes to [option A], or no and I'll [alternative].\n\nThanks,\n[Your name]",
    },
    { type: "h2", text: "Closing the loop" },
    { type: "p", text: "When you've tried twice and it's not urgent, close it politely. People often reply to this one." },
    {
      type: "template",
      label: "Close the loop",
      subject: "Re: [original subject]",
      text: "Hi [Name],\n\nI haven't heard back, so I'll assume [topic] isn't a priority right now and take it off my list. If that changes, just reply here and I'll pick it back up.\n\nBest,\n[Your name]",
    },
    { type: "h2", text: "What to avoid" },
    {
      type: "list",
      items: [
        "Starting with \"Just checking in.\" Say what you need in the first sentence instead.",
        "Starting a new thread. Replying in the original keeps the history attached.",
        "Pasting the whole original email back in. One line of context is enough.",
        "Guilt lines like \"I know you're busy, but.\" They make the reply feel like a chore.",
      ],
    },
    { type: "h2", text: "Letting Synced write it" },
    {
      type: "p",
      text: "Ask [Synced](/) to chase a thread and it drafts the follow-up with the specific ask pulled from the thread. The draft shows up in Decide, you edit or approve it, and it goes out from your own account. More in the guide on [automating email follow-ups](/guides/how-to-automate-email-follow-ups).",
    },
  ],
  faqs: [
    {
      q: "How many times should I follow up?",
      a: "Twice is a reasonable limit for most work email, followed by a close-the-loop message. For something with a hard deadline, a phone call or a message on another channel usually works better than a third email.",
    },
    {
      q: "Should I change the subject line?",
      a: "No. Reply in the original thread so the subject stays the same and the other person sees the full history.",
    },
  ],
  related: ["/guides/how-to-automate-email-follow-ups", "/integrations/gmail"],
};
