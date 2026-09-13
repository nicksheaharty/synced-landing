import type { Page } from "../types";

export const thankYouAfterInterview: Page = {
  slug: "/templates/thank-you-after-interview",
  cluster: "template",
  parent: "/templates",
  title: "Thank-You Email After an Interview: Templates | Synced",
  h1: "Thank-you email after an interview",
  navLabel: "Thank-you after an interview",
  cardText: "Short, specific thank-you notes for a first interview, a final round or panel, and a phone screen.",
  description:
    "Thank-you email templates to send after a job interview: a standard note, a final-round or panel version, and a short one for a phone screen.",
  eyebrow: "Email template",
  intro: "The thank-you email won't get you the job on its own. A specific one can remind the interviewer why they liked you.",
  answer:
    "A thank-you email after an interview is usually sent the same day, or within 24 hours, and runs about 100 to 150 words. Thank the interviewer by name, mention one specific thing you discussed, and add one line tying it to why you fit the role. Send a separate note to each interviewer instead of one group email.",
  primaryIntent: "thank you email after interview",
  published: "2026-09-13",
  updated: "2026-09-13",
  body: [
    { type: "h2", text: "Thank-you email after a first interview" },
    { type: "p", text: "The standard version. The specific detail is what makes it yours, so don't skip it." },
    {
      type: "template",
      label: "First interview",
      subject: "Thank you, [role] interview",
      text: "Hi [Name],\n\nThank you for talking with me today about the [role] position. I enjoyed hearing about [specific project or challenge they mentioned].\n\nOur conversation made me more excited about the role, especially [specific part]. My experience [one concrete example, e.g. rebuilding our onboarding flow at X] feels like a close match for what the team needs.\n\nIf there's anything else I can send, please let me know.\n\nBest,\n[Your name]\n[Phone]",
    },
    { type: "h2", text: "After a final round or panel interview" },
    { type: "p", text: "Write one note per interviewer, each with a different detail from your conversation with them. They may compare." },
    {
      type: "template",
      label: "Final round",
      subject: "Thank you for today",
      text: "Hi [Name],\n\nThanks for your time in today's final round. Your question about [topic] got me thinking, and I wanted to add: [one-sentence follow-up thought].\n\nAfter meeting the team, I'm confident this is where I want to be. I look forward to hearing about next steps.\n\nBest regards,\n[Your name]",
    },
    { type: "h2", text: "Short thank-you after a phone or recruiter screen" },
    {
      type: "template",
      label: "Phone screen",
      subject: "Thanks for the call, [Name]",
      text: "Hi [Name],\n\nThanks for the call today and for explaining [something specific, e.g. how the team is structured]. I'm very interested in moving forward and happy to share anything else that would help.\n\nBest,\n[Your name]",
    },
    { type: "h2", text: "When a thank-you email is expected" },
    {
      type: "list",
      items: [
        "Send one after any interview where you spoke with someone directly, including recruiter screens.",
        "If the recruiter coordinated a panel and you don't have individual addresses, send one note to the recruiter and ask them to pass on your thanks.",
        "If you've decided you don't want the role, a short thank-you still helps. You can withdraw in the same email.",
      ],
    },
    { type: "h2", text: "What to avoid" },
    {
      type: "list",
      items: [
        "A generic note that could go to any company. One detail from the conversation fixes it.",
        "Copy-pasting the same note to every panelist.",
        "Re-selling your whole résumé. One example is enough.",
        "Asking about the decision timeline in the thank-you. Save it for a follow-up a week or so later.",
      ],
    },
    { type: "h2", text: "How Synced helps after an interview" },
    {
      type: "p",
      text: "If your Gmail or Outlook is connected, [Synced](/) sees the interview thread with the recruiter and can draft the thank-you with names and details already in place. You add the specific moment from the conversation, since only you were there, and approve it in Decide. For the \"any update?\" email later, see the [follow-up template](/templates/follow-up-after-no-response). More on [drafting](/features/drafting).",
    },
  ],
  faqs: [
    {
      q: "How soon should you send a thank-you email after an interview?",
      a: "Common practice is the same day, or within 24 hours. For a late afternoon interview, the next morning is fine.",
    },
    {
      q: "Is it too late to send a thank-you email two days after an interview?",
      a: "No. A late thank-you is still better than none. Send it without apologizing for the timing and keep it short.",
    },
    {
      q: "Should I send a thank-you email to each interviewer?",
      a: "Yes, when you have their addresses. Personalize each one with something from your conversation with that person.",
    },
    {
      q: "What if I don't have the interviewer's email address?",
      a: "Send your thank-you to the recruiter or coordinator and ask them to forward it, or ask them for the addresses.",
    },
  ],
  related: ["/templates/follow-up-after-meeting", "/templates/follow-up-after-no-response", "/templates/polite-decline", "/features/drafting"],
};
