import type { Page } from "../types";

export const followUpAfterMeeting: Page = {
  slug: "/templates/follow-up-after-meeting",
  cluster: "template",
  parent: "/templates",
  title: "Follow-up Email After a Meeting: Templates | Synced",
  h1: "Follow-up email after a meeting",
  navLabel: "Follow-up after a meeting",
  cardText: "A recap with owners and dates, a short thank-you for a first meeting, and a networking version.",
  description:
    "Follow-up email templates for after a meeting: a recap with action items and owners, a short thank-you after a first client call, and a networking note.",
  eyebrow: "Email template",
  intro: "The meeting ended with everyone nodding. The follow-up is where you find out whether they were nodding at the same thing.",
  answer:
    "A good follow-up email after a meeting goes out the same day or the next morning, stays under 150 words, and lists the decisions made, who owns each next step, and the date of the next check-in. Send it to everyone who attended so there is one written version of what was agreed.",
  primaryIntent: "follow up email after meeting template",
  published: "2026-09-13",
  updated: "2026-09-13",
  body: [
    { type: "h2", text: "Meeting recap with action items" },
    { type: "p", text: "The default for internal and client meetings with more than two people. Decisions first, then owners and dates. Anyone who missed the call should be able to act on it." },
    {
      type: "template",
      label: "Recap with action items",
      subject: "Recap: [meeting name], [date]",
      text: "Hi all,\n\nThanks for the time today. Here's what we agreed:\n\nDecisions\n- [Decision 1]\n- [Decision 2]\n\nNext steps\n- [Owner]: [task] by [date]\n- [Owner]: [task] by [date]\n\nOpen question: [question], [owner] to confirm by [date].\n\nWe'll check in again on [date]. If I got anything wrong, reply here and I'll fix it.\n\n[Your name]",
    },
    { type: "h2", text: "Short thank-you after a first client or prospect meeting" },
    { type: "p", text: "For a first conversation where the main next step is yours. Keep it short and make the next step concrete." },
    {
      type: "template",
      label: "First meeting thank-you",
      subject: "Thanks for today, [Name]",
      text: "Hi [Name],\n\nThanks for walking me through [their problem or project]. The part about [specific detail] was useful.\n\nAs promised, I'll send [proposal / pricing / examples] by [day]. If it would help to bring [colleague or stakeholder] into the next conversation, I'm happy to set that up.\n\nBest,\n[Your name]",
    },
    { type: "h2", text: "Follow-up after a networking or informational meeting" },
    { type: "p", text: "For coffee chats and advice calls, where there's no project, just goodwill. Mention what you'll do with their advice." },
    {
      type: "template",
      label: "Networking follow-up",
      subject: "Thank you for the advice on [topic]",
      text: "Hi [Name],\n\nThank you for making time yesterday. Your point about [specific advice] changed how I'm thinking about [goal].\n\nI'm going to [action you'll take], and I'll let you know how it goes. If there's ever anything I can help with on [their area], I'd be glad to.\n\nBest,\n[Your name]",
    },
    { type: "h2", text: "When a follow-up email helps, and when to skip it" },
    {
      type: "list",
      items: [
        "Send one after any meeting that produced a decision, a deadline, or a promise from you.",
        "Send one after first meetings with clients, candidates, or people doing you a favor.",
        "Skip it for a standing team meeting where notes already live in a shared doc. Post the link instead.",
        "Skip the email if a quick chat message covers it, like a two-person sync with one next step.",
      ],
    },
    { type: "h2", text: "What to avoid" },
    {
      type: "list",
      items: [
        "Waiting until the end of the week. By then people remember the meeting differently.",
        "Retelling the whole discussion. List what was decided, not how you got there.",
        "Next steps without a name attached. \"We'll look into it\" means nobody will.",
        "Burying a request for the reader in the last paragraph. Put it in the next steps list with their name.",
      ],
    },
    { type: "h2", text: "What Synced does after the meeting" },
    {
      type: "p",
      text: "Synced doesn't join calls or read transcripts (there's no Zoom connector), so the recap itself starts from your notes. It helps with what comes next: when an attendee emails asking for the deck or another time to meet, [Synced](/) finds the file in Drive, proposes open slots from Google Calendar, and drafts the reply. The draft waits in [Decide](/features/decide) until you approve it.",
    },
  ],
  faqs: [
    {
      q: "How soon should you send a follow-up email after a meeting?",
      a: "Same day is common practice, or the next morning for a late afternoon meeting. The sooner it goes out, the less room there is for people to remember different outcomes.",
    },
    {
      q: "Should the meeting recap go to everyone who was invited?",
      a: "Send it to everyone who attended and anyone who owns a next step. Invitees who didn't show up can be included if the decisions affect their work.",
    },
    {
      q: "What if I forgot to send a follow-up after the meeting?",
      a: "Send it anyway, even a few days late. Skip the apology paragraph, and lead with the next steps and dates so the email is still useful.",
    },
  ],
  related: ["/templates/project-status-update", "/templates/sharing-your-availability", "/templates/follow-up-after-no-response", "/features/decide"],
};
