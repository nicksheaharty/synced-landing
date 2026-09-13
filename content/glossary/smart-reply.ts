import type { Page } from "../types";

export const smartReply: Page = {
  slug: "/glossary/smart-reply",
  cluster: "glossary",
  parent: "/glossary",
  term: "Smart Reply",
  title: "What Is Smart Reply in Gmail? | Synced",
  h1: "Smart Reply",
  navLabel: "Smart Reply",
  cardText: "Gmail's short, one-tap suggested responses at the bottom of an email.",
  description:
    "Smart Reply is Gmail's feature that suggests short responses you can send with one tap, like \"Sounds good.\" How it differs from Smart Compose and AI drafting.",
  eyebrow: "Glossary",
  intro: "The little \"Thanks, got it\" buttons under an email, and what they are and aren't.",
  answer:
    "Smart Reply is a Gmail feature that suggests a few short responses at the bottom of a received email, such as \"Sounds good\" or \"Thanks for the update,\" which you can tap to start a reply. Google describes it as a way to respond quickly with short, suggested messages. The term is also used generically for any one-tap suggested response in messaging apps.",
  primaryIntent: "gmail smart reply meaning",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "How Smart Reply works in Gmail" },
    {
      type: "p",
      text: "Gmail uses machine learning to read the message you received and offer brief replies that fit it. Tapping one drops the text into a reply, where you can edit it or send it. The suggestions are short on purpose: acknowledgments, yes or no, a quick thanks. Smart Reply can be turned on or off in Gmail's settings.",
    },
    { type: "h2", text: "Smart Reply vs. Smart Compose" },
    {
      type: "p",
      text: "Gmail has two similarly named features. Smart Reply suggests complete short responses before you start typing. Smart Compose suggests the rest of a sentence while you type, which you accept with the Tab key or a swipe. Both are separate settings.",
    },
    { type: "h2", text: "Smart Reply vs. AI drafting" },
    {
      type: "p",
      text: "Smart Reply works from the one message in front of it and returns a sentence or two. AI drafting tools write a full reply and can pull in context from outside that message: earlier emails, a file, your calendar. \"Sounds good, see you then\" is Smart Reply territory. \"Here's the signed SOW, and Tuesday at 2 or Thursday at 10 work for me\" needs a drafting tool that can find the SOW and check the calendar.",
    },
    {
      type: "p",
      text: "Synced sits on the drafting side. It writes the full reply with the file and times included, and waits for your approval before sending.",
    },
    {
      type: "sources",
      items: [
        { label: "Gmail Help: Reply to messages in Gmail", url: "https://support.google.com/mail/answer/6585", checked: "2026-09-13" },
        { label: "Gmail Help: Use Smart Compose", url: "https://support.google.com/mail/answer/9116836", checked: "2026-09-13" },
      ],
    },
  ],
  related: ["/glossary/ai-inbox-assistant", "/glossary/large-language-model", "/guides/how-to-use-ai-to-draft-email-replies"],
};
