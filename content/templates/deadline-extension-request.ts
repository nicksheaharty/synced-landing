import type { Page } from "../types";

export const deadlineExtensionRequest: Page = {
  slug: "/templates/deadline-extension-request",
  cluster: "template",
  parent: "/templates",
  title: "Deadline Extension Request Email: Templates | Synced",
  h1: "Deadline extension request email",
  navLabel: "Deadline extension request",
  cardText: "Ask for more time with a new date and a partial delivery, for a manager, a client, or a professor.",
  description:
    "Email templates to request a deadline extension from a manager, a client, or a professor. Each proposes a specific new date and a clear reason.",
  eyebrow: "Email template",
  intro: "Asking for an extension early looks like planning. Asking the morning it's due looks like something else.",
  answer:
    "Ask for a deadline extension as soon as you know you'll miss the date, not on the day it's due. Name the original deadline, propose a specific new date, give a one-sentence reason, and say what you can deliver by the original date. A specific new date is easier to approve than an open request for more time.",
  primaryIntent: "deadline extension request email",
  published: "2026-09-13",
  updated: "2026-09-13",
  body: [
    { type: "h2", text: "Extension request to a manager or team lead" },
    { type: "p", text: "Internal, direct. Offer a partial delivery so their plans don't stall." },
    {
      type: "template",
      label: "Manager",
      subject: "[Deliverable]: can we move the deadline to [new date]?",
      text: "Hi [Name],\n\n[Deliverable] is due [original date], and I don't think I can get it done well by then. [One-line reason, e.g. the data pull took three days longer than planned.]\n\nCould we move it to [new date]? By the original date I can send you [partial delivery, e.g. the first two sections] so you can start reviewing.\n\nIf [original date] is fixed, let me know and I'll work out what to cut.\n\nThanks,\n[Your name]",
    },
    { type: "h2", text: "Extension request to a client" },
    { type: "p", text: "More formal. Acknowledge the impact on them, keep the reason brief, and restate the scope so they know nothing is being dropped." },
    {
      type: "template",
      label: "Client",
      subject: "[Project]: revised delivery date for [deliverable]",
      text: "Dear [Name],\n\nI'm writing about [deliverable], currently due on [original date]. [Brief reason, e.g. The revised requirements from last week's call added a second round of testing.] To deliver it at the quality we agreed, I'd like to propose a new date of [new date].\n\nIn the meantime, we'll send [interim item] by [original date], and the full scope stays the same.\n\nPlease let me know if the new date works for your side, or if there's a constraint I should plan around.\n\nKind regards,\n[Your name]",
    },
    { type: "h2", text: "Extension request to a professor or instructor" },
    { type: "p", text: "Check the syllabus policy first and mention it. Be clear and brief, and attach documentation if the policy requires it." },
    {
      type: "template",
      label: "Professor",
      subject: "[Course code]: extension request for [assignment]",
      text: "Dear Professor [Last name],\n\nI'm in your [course name] class ([section / time]). I'm writing to ask for an extension on [assignment], due [date], because [brief reason, e.g. I was ill this week; a note from student health is attached].\n\nWould it be possible to submit it by [new date]? I've completed [what's done] and can send that now if helpful.\n\nThank you for considering it,\n[Your name]\n[Student ID if relevant]",
    },
    { type: "h2", text: "When to ask for an extension, and when to renegotiate scope" },
    {
      type: "list",
      items: [
        "Ask for more time when the scope is right but the estimate was wrong, or something outside your control slipped.",
        "Offer to cut scope instead when the date is tied to a launch, an event, or someone else's deadline.",
        "If this is your second extension on the same deliverable, talk to them directly rather than sending another email.",
      ],
    },
    { type: "h2", text: "What to avoid" },
    {
      type: "list",
      items: [
        "\"Could I have a bit more time?\" Name the date.",
        "Asking on the due date, when you knew a week ago.",
        "A detailed account of everything that went wrong. One sentence of reason is enough.",
        "Proposing a new date you're not confident about. Add a buffer so you don't ask twice.",
      ],
    },
    { type: "h2", text: "How Synced drafts an extension request" },
    {
      type: "p",
      text: "[Synced](/) drafts replies with the details already in the thread: the deliverable, the original date, and who set it. When the honest reply to a deadline is that you need more time, you edit that draft in Decide, add the reason and the new date, and approve it. Nothing is sent before that. See [drafting](/features/drafting).",
    },
  ],
  faqs: [
    {
      q: "How do you ask for a deadline extension professionally?",
      a: "Ask early, state the original deadline, propose a specific new date, give a short reason, and offer something by the original date, such as a draft or a partial delivery.",
    },
    {
      q: "How far in advance should you ask for an extension?",
      a: "As soon as you know you'll miss the deadline. Common practice is at least a few days ahead, so the other person can adjust their own plans.",
    },
    {
      q: "What's a good reason to give for a deadline extension?",
      a: "The true one, in a sentence: a dependency that slipped, a change in scope, illness, or competing priorities you've been asked to handle. Specific reasons are more credible than vague ones.",
    },
  ],
  related: ["/templates/project-status-update", "/templates/apology-for-late-reply", "/templates/polite-decline", "/features/drafting"],
};
