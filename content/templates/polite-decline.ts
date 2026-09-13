import type { Page } from "../types";

export const politeDecline: Page = {
  slug: "/templates/polite-decline",
  cluster: "template",
  parent: "/templates",
  title: "Polite Decline Email: How to Say No at Work | Synced",
  h1: "Polite decline email",
  navLabel: "Polite decline",
  cardText: "Turn down a request, a project, or an offer clearly, without leaving the door awkwardly half open.",
  description:
    "Polite decline email templates for turning down extra work, a job or business offer, a vendor pitch, or a request you might say yes to later.",
  eyebrow: "Email template",
  intro: "A clear no, sent quickly, is kinder than a maybe that sits in someone's inbox for two weeks.",
  answer:
    "A polite decline email says no clearly in the first two sentences, thanks the person, gives a brief reason only when it's true and useful, and offers an alternative if you have one. Reply within a day or two. The other person can plan around a quick no, but not around silence.",
  primaryIntent: "how to politely decline a request email",
  published: "2026-09-13",
  updated: "2026-09-13",
  body: [
    { type: "p", text: "These are for requests, projects, and offers. For a calendar invite, use the [decline a meeting invitation](/templates/decline-meeting-invitation) templates instead." },
    { type: "h2", text: "Declining a request for your time or extra work" },
    { type: "p", text: "For a colleague asking for help or a new project. Say no, say why in one line, and point to something useful." },
    {
      type: "template",
      label: "Extra work",
      subject: "Re: [request]",
      text: "Hi [Name],\n\nThanks for thinking of me for [project]. I can't take it on right now. [Current priority] has me full through [date], and I wouldn't be able to give it proper attention.\n\n[Colleague] has done similar work on [related thing] and might be a good fit. I'm also happy to spend 15 minutes sharing what I know before you hand it off.\n\n[Your name]",
    },
    { type: "h2", text: "Declining a job or business offer" },
    { type: "p", text: "More formal, and worth sending to the person who made the offer directly. Keep the relationship intact, since you may cross paths again." },
    {
      type: "template",
      label: "Job or business offer",
      subject: "[Role / proposal] offer",
      text: "Dear [Name],\n\nThank you for offering me [the role of X / the opportunity to work on Y]. I appreciate the time you and the team spent on this.\n\nAfter careful thought, I've decided to decline. [Optional one line: I've accepted a role that's closer to my focus on Z.]\n\nI enjoyed getting to know you, and I hope we stay in touch.\n\nKind regards,\n[Your name]",
    },
    { type: "h2", text: "Declining a vendor or sales pitch" },
    {
      type: "template",
      label: "Vendor pitch",
      subject: "Re: [their subject]",
      text: "Hi [Name],\n\nThanks for reaching out. We're not looking at [category] right now, so I'll pass. Please take me off the follow-up sequence, and I'll get in touch if that changes.\n\n[Your name]",
    },
    { type: "h2", text: "Declining for now, but open to it later" },
    { type: "p", text: "Only use this if you mean it. Give a real time frame so it doesn't read as a soft no." },
    {
      type: "template",
      label: "Not right now",
      subject: "Re: [request]",
      text: "Hi [Name],\n\nI'd like to help with [request], but I can't before [date or event]. If it can wait until then, send it back my way in [month] and I'll give it a proper look.\n\nThanks for understanding,\n[Your name]",
    },
    { type: "h2", text: "When a decline email is the right move" },
    {
      type: "list",
      items: [
        "Decline in writing when the request came in writing, or when the other person needs something to point to later.",
        "For a close colleague, a quick conversation first and a short email after can land better.",
        "Don't decline by ignoring. Silence reads as a maybe, and the request comes back.",
      ],
    },
    { type: "h2", text: "What to avoid" },
    {
      type: "list",
      items: [
        "Burying the no in the third paragraph. Say it early.",
        "Invented reasons. They create follow-up questions you'll have to keep inventing answers for.",
        "\"Maybe next time\" when you don't mean it. You'll get asked next time.",
        "Apologizing so much the reader has to reassure you.",
      ],
    },
    { type: "h2", text: "How Synced drafts a decline" },
    {
      type: "p",
      text: "[Synced](/) reads each incoming request and drafts a reply with the details from the thread, so it names the actual project and the actual date. When your answer is no, you edit the draft in Decide to say so, adjust the tone, and approve it. Nothing sends before that. More on [drafting](/features/drafting).",
    },
  ],
  faqs: [
    {
      q: "How do you say no at work without burning a bridge?",
      a: "Reply promptly, thank the person, say no in plain words, and offer something smaller, such as a referral, a short call, or a later date you can commit to.",
    },
    {
      q: "Do you need to give a reason when declining?",
      a: "No. A short, true reason can soften it, but \"I can't take this on right now\" is enough. Long explanations tend to invite negotiation.",
    },
    {
      q: "How do you decline a job offer by email?",
      a: "Thank the hiring manager, say you're declining, and optionally give one line on why. Send it as soon as you've decided so they can move to other candidates.",
    },
  ],
  related: ["/templates/decline-meeting-invitation", "/templates/delegation-email", "/templates/apology-for-late-reply", "/features/drafting"],
};
