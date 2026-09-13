import type { Page } from "../types";

export const agencies: Page = {
  slug: "/for/agencies",
  cluster: "use-case",
  parent: "/for",
  title: "Client Communication Assistant for Agencies | Synced",
  h1: "Synced for agencies",
  navLabel: "Agencies",
  cardText: "Client revision requests, asset asks, and approvals across Slack, Teams, and email, drafted for you.",
  description:
    "Synced helps agency account leads answer client revision requests, asset asks, and approval chases across Slack, Microsoft Teams, and email, with every reply approved.",
  eyebrow: "Use case",
  icon: "folder",
  intro:
    "Your clients each picked a different channel: one lives in a shared Slack channel, one in Teams, one only emails, and the founder of another sends requests over WhatsApp. Synced reads all of them and drafts the reply with the right file attached.",
  answer:
    "Synced, the AI inbox assistant, helps agency account managers and owners answer client requests across Slack, Microsoft Teams, Gmail, Outlook, and WhatsApp Business. It finds the latest assets and briefs in Google Drive or OneDrive, drafts replies to revision and approval requests, proposes review times from Google Calendar, and tracks clients who owe feedback. Every reply waits for approval, and Synced is not a project management or proofing tool.",
  primaryIntent: "client communication assistant for agencies",
  published: "2026-09-13",
  updated: "2026-09-13",
  related: ["/for/consultants", "/for/small-business-owners", "/integrations/slack", "/blog/work-happens-in-more-than-email"],
  body: [
    { type: "h2", text: "Why client requests get lost at an agency" },
    {
      type: "p",
      text: "Agency work is spread across whatever each client prefers. A revision request comes in a Slack channel you share with the client, a sign-off happens in a Teams chat, and the brief for next month is attached to an email from someone you've never met. The account lead is the only person who sees all of it, and only if they check everything.",
    },
    {
      type: "p",
      text: "Synced connects to each of those channels, reads every new client message, and writes an [Action Plan](/glossary/action-plan): find the asset, check the brief, draft the reply. Your part is approving what goes back to the client.",
    },
    { type: "h2", text: "Revision, asset, and approval requests Synced drafts for agencies" },
    { type: "h3", text: "A revision request in a client Slack channel" },
    {
      type: "message",
      from: "Jess (client, brand manager)",
      source: "slack",
      time: "3:18 PM",
      text: "Legal came back on the landing page. They need the claims line in the hero softened and the disclaimer moved above the fold. Can we see a revised version by Thursday?",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Created a Task for you: get the hero line and disclaimer revised with design by Wednesday",
        "Drafted a reply to Jess confirming the two changes and a Thursday delivery",
      ],
      caption: "Illustration. The Task lands in your Tasks list; the reply waits for your approval.",
    },
    { type: "h3", text: "A client asks for final files over email" },
    {
      type: "message",
      from: "Luis (client, marketing director)",
      source: "gmail",
      time: "9:04 AM",
      text: "Can you send over the final logo files and the brand guidelines PDF? Our printer needs them today.",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Found the final logo package and brand guidelines in Google Drive",
        "Drafted a reply with both files attached",
      ],
      file: "Brand_Guidelines_Final.pdf",
      caption: "Illustration. Check the attachment on the draft before approving.",
    },
    { type: "h3", text: "A client who owes approval in Teams" },
    {
      type: "message",
      from: "Synced",
      source: "teams",
      time: "Wednesday 10:00 AM",
      text: "Grace hasn't approved the Q4 campaign concepts shared last Thursday. The media booking deadline is Friday.",
      stepsLabel: "1 Task Ready for Approval",
      steps: ["Drafted a Teams message to Grace naming the Friday booking deadline and asking for a pick between concept A and B"],
      caption: "Illustration. Synced drafts the nudge; you decide the tone.",
    },
    { type: "h2", text: "Which integrations matter for an agency" },
    {
      type: "list",
      items: [
        "[Slack](/integrations/slack): client channels and DMs your account can see. Many agencies run most client work here.",
        "[Microsoft Teams](/integrations/microsoft-teams): for enterprise clients who keep everything inside Microsoft 365.",
        "[Gmail](/integrations/gmail) or [Outlook](/integrations/outlook): briefs, contracts, and clients who stick to email.",
        "[Google Drive](/integrations/google-drive) or [OneDrive](/integrations/onedrive): the asset library Synced searches for the latest files.",
        "[WhatsApp Business](/integrations/whatsapp-business): for smaller clients and founders who message instead of email.",
        "[Google Calendar](/integrations/google-calendar): review and kickoff call times.",
      ],
    },
    {
      type: "p",
      text: "Figma, Asana, and similar tools agencies use are listed as coming soon in the app, not live. Notion is also coming soon.",
    },
    { type: "h2", text: "Where Synced isn't the right tool for agencies" },
    {
      type: "list",
      items: [
        "It isn't project management. Synced can turn a client message into a Task, but it doesn't manage timelines, resourcing, or retainers.",
        "It isn't a proofing or approval tool. Clients can't mark up designs in Synced. Keep your proofing tool and let Synced handle the messages around it.",
        "It isn't a shared agency inbox. Each person connects their own accounts under their own login, so it fits account leads and owners better than a whole team working one queue.",
        "It doesn't report on client response times or hours spent per client.",
      ],
    },
  ],
  faqs: [
    {
      q: "Can Synced read messages from Slack channels shared with clients?",
      a: "Synced reads Slack DMs and channels available to the Slack account you connect. If a shared client channel shows up in your Slack, Synced can draft replies to messages in it. Slack is on the Pro plan.",
    },
    {
      q: "Can I use Synced across Slack and Microsoft Teams at the same time?",
      a: "Yes. Connect both as Inboxes. Messages from each show up in one list, and approved replies go back on the channel they came from.",
    },
    {
      q: "Will Synced send client replies without me checking them?",
      a: "No. Every AI-drafted message waits in Decide for your approval before it goes to a client.",
    },
    {
      q: "Does Synced connect to Figma or Asana?",
      a: "Not today. Both are listed as coming soon in the app's connector catalog.",
    },
  ],
};
