import type { Page } from "../types";

export const naturalLanguageSearch: Page = {
  slug: "/glossary/natural-language-search",
  cluster: "glossary",
  parent: "/glossary",
  term: "Natural language search",
  title: "What Is Natural Language Search in Email? | Synced",
  h1: "Natural language search",
  navLabel: "Natural language search",
  cardText: "Searching by describing what you want in plain words instead of exact keywords.",
  description:
    "Natural language search lets you find emails and files by describing them in plain words, like \"the contract Sam sent in March,\" instead of exact keywords.",
  eyebrow: "Glossary",
  intro: "The difference between remembering the exact subject line and remembering roughly what happened.",
  answer:
    "Natural language search is a way of searching in which you describe what you're looking for in ordinary words, such as \"the pricing deck Sam sent before the offsite,\" and the system interprets the meaning rather than matching exact keywords. In email, natural language search usually combines an AI model that understands the request with a conventional search over senders, dates, and content.",
  primaryIntent: "natural language search email definition",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "Keyword search vs. natural language search" },
    {
      type: "p",
      text: "Keyword search finds messages containing the words you type. Gmail's operators, like `from:sam has:attachment after:2026/03/01`, make keyword search precise, but you have to know the operators and remember the right words. Natural language search accepts the fuzzy version and works out the filters and synonyms for you. \"Deck\" can match a file called Q3_pricing_v4.pptx.",
    },
    {
      type: "table",
      head: ["You type", "Keyword search looks for", "Natural language search looks for"],
      rows: [
        ["invoice from the designer last month", "Those exact words", "Messages from your designer, in the past month, with an invoice attached or mentioned"],
        ["when is the kickoff", "The words \"when\" and \"kickoff\"", "The most recent message confirming a kickoff date"],
      ],
    },
    { type: "h2", text: "How natural language search works" },
    {
      type: "p",
      text: "Most systems use a [large language model](/glossary/large-language-model) to turn your request into structured filters and search terms, run the search, and then read the top results to pick or summarize the answer. That last step is a form of [retrieval-augmented generation](/glossary/retrieval-augmented-generation).",
    },
    { type: "h2", text: "How Synced uses natural language search" },
    {
      type: "p",
      text: "Synced searches your connected email and files for context while it works on a message, so a request for \"the signed SOW\" turns into the right file attached to a draft. Doing this by hand across tools is covered in [how to search email and files together](/guides/how-to-search-email-and-files-together).",
    },
  ],
  related: ["/glossary/retrieval-augmented-generation", "/glossary/unified-inbox", "/features/search"],
};
