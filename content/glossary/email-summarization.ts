import type { Page } from "../types";

export const emailSummarization: Page = {
  slug: "/glossary/email-summarization",
  cluster: "glossary",
  parent: "/glossary",
  term: "Email summarization",
  title: "What Is Email Summarization? | Synced",
  h1: "Email summarization",
  navLabel: "Email summarization",
  cardText: "Condensing a long email or thread into its decisions, asks, and open questions.",
  description:
    "Email summarization is condensing a long email or thread into a few lines that capture what was decided, what's being asked, and what's still open.",
  eyebrow: "Glossary",
  intro: "The 40-message reply-all chain, reduced to the three lines you actually needed.",
  answer:
    "Email summarization is the process of condensing an email or an entire thread into a short account of what matters: decisions made, requests addressed to the reader, deadlines, and unresolved questions. Modern email summarization is usually done by a large language model, which reads the full thread and writes the summary in plain language.",
  primaryIntent: "email summarization definition",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "What a useful email summary includes" },
    {
      type: "list",
      items: [
        "The current state: what was decided, and by whom.",
        "Anything asked of you specifically, with dates.",
        "Open questions nobody has answered yet.",
        "Attachments or links that the rest of the thread depends on.",
      ],
    },
    {
      type: "p",
      text: "A summary that retells the thread in order (\"Priya wrote, then Sam replied\") is shorter but not much more useful. The best summaries are organized by what the reader needs to do.",
    },
    { type: "h2", text: "Extractive vs. abstractive summarization" },
    {
      type: "p",
      text: "Extractive summarization pulls the most important sentences out of the original text word for word. Abstractive summarization writes new sentences that capture the meaning, which is what [large language models](/glossary/large-language-model) do. Abstractive summaries read better but can occasionally state something the thread didn't say, so a summary that points back to the source message is easier to trust.",
    },
    { type: "h2", text: "Email summarization vs. a reply" },
    {
      type: "p",
      text: "A summary tells you what a thread says; it doesn't act on it. Summarization is often the first step inside a larger system. Synced, for example, reads the whole [email thread](/glossary/email-thread) before it drafts a reply, but the output you see is the draft and any question for you, not a separate summary to read. For doing it by hand, see [how to summarize long email threads](/guides/how-to-summarize-long-email-threads).",
    },
  ],
  related: ["/glossary/email-thread", "/glossary/large-language-model", "/guides/how-to-summarize-long-email-threads"],
};
