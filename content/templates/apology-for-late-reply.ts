import type { Page } from "../types";

export const apologyForLateReply: Page = {
  slug: "/templates/apology-for-late-reply",
  cluster: "template",
  parent: "/templates",
  title: "Apology for a Late Reply: Email Templates | Synced",
  h1: "Apology for a late reply",
  navLabel: "Apology for a late reply",
  cardText: "Say sorry in one line and get to the answer, for a few days late, weeks late, or late with consequences.",
  description:
    "Email templates to apologize for a late reply: a short note for a few days' delay, one for weeks late, and a formal version when the delay caused a problem.",
  eyebrow: "Email template",
  intro: "Sorry for the delay. That's the whole apology. The rest of the email should be the answer.",
  answer:
    "An apology for a late reply is one sentence of apology followed straight away by the answer the person was waiting for. Skip long explanations, which make the email about you. If you still can't give a full answer, say what you can now and give a specific date for the rest.",
  primaryIntent: "apology email for late reply",
  published: "2026-09-13",
  updated: "2026-09-13",
  body: [
    { type: "h2", text: "A few days late" },
    { type: "p", text: "The most common case. Apologize in the first line, then answer as if the delay never happened." },
    {
      type: "template",
      label: "A few days late",
      subject: "Re: [original subject]",
      text: "Hi [Name],\n\nSorry for the slow reply.\n\n[Direct answer to their question, e.g. Yes, Thursday works. I've attached the updated figures.]\n\n[Your name]",
    },
    { type: "h2", text: "Weeks late" },
    { type: "p", text: "Acknowledge the gap, check whether it's still relevant, and don't make them re-explain." },
    {
      type: "template",
      label: "Weeks late",
      subject: "Re: [original subject]",
      text: "Hi [Name],\n\nI'm sorry this took me so long. Your email got buried and I should have replied weeks ago.\n\n[Answer, or: On your question about X, here's where things stand: ...]\n\nIf this has moved on since you wrote, let me know what would still be useful and I'll help with that instead.\n\nBest,\n[Your name]",
    },
    { type: "h2", text: "Formal apology when the delay caused a problem" },
    { type: "p", text: "For a client or stakeholder whose work was held up. Own it, state the fix, and say what changes." },
    {
      type: "template",
      label: "Delay caused a problem",
      subject: "Re: [original subject]",
      text: "Dear [Name],\n\nI apologize for not replying sooner. I know it held up [their work or decision], and that's on me.\n\n[The answer or deliverable.]\n\nTo make up the time, I can [concrete offer, e.g. turn around your review within 24 hours / join a call tomorrow]. Going forward, [what you'll do differently, e.g. I'll confirm receipt of requests the same day].\n\nKind regards,\n[Your name]",
    },
    { type: "h2", text: "When an apology is needed, and when it isn't" },
    {
      type: "list",
      items: [
        "Apologize when you missed a deadline they set, or when they had to follow up.",
        "For a routine email answered in two or three days, you can often skip the apology and just reply. \"Thanks for your patience\" works too.",
        "If you can't answer yet, a quick holding reply (\"I'll get back to you by Friday\") prevents the need for an apology later.",
      ],
    },
    { type: "h2", text: "What to avoid" },
    {
      type: "list",
      items: [
        "A paragraph about how busy you've been. Everyone is busy.",
        "Apologizing and then not answering the question.",
        "\"Sorry, I just saw this\" when it's been two weeks. It rarely sounds true.",
        "Replying in a new thread. Stay in theirs so the context is there.",
      ],
    },
    { type: "h2", text: "Replying before the apology is needed" },
    {
      type: "p",
      text: "Late replies usually happen because the answer needed a file, a date, or a decision you didn't have in front of you. [Synced](/) reads new messages as they arrive, looks up what the reply needs in your connected sources, and puts a draft in Decide, so the reply is mostly written before the email gets buried. See [how to reply to emails faster](/guides/how-to-reply-to-emails-faster) for manual methods too.",
    },
  ],
  faqs: [
    {
      q: "How do you apologize for a late email response professionally?",
      a: "Open with one short line, such as \"Sorry for the delayed reply,\" then give the full answer. If the delay caused a problem, name it and offer something concrete to make up the time.",
    },
    {
      q: "Should I explain why I replied late?",
      a: "Usually not. A brief reason is fine if it matters to them, such as being out sick when they needed a decision, but the answer is what they care about.",
    },
    {
      q: "Is \"sorry for the delayed response\" professional?",
      a: "Yes, it's standard and neutral. \"Thanks for your patience\" is a common alternative when the delay was short and you'd rather not apologize.",
    },
  ],
  related: ["/templates/follow-up-after-no-response", "/templates/deadline-extension-request", "/templates/out-of-office-message", "/guides/how-to-reply-to-emails-faster"],
};
