import type { Page } from "../types";

export const largeLanguageModel: Page = {
  slug: "/glossary/large-language-model",
  cluster: "glossary",
  parent: "/glossary",
  term: "Large language model (LLM)",
  title: "What Is a Large Language Model (LLM)? | Synced",
  h1: "Large language model (LLM)",
  navLabel: "Large language model",
  cardText: "The kind of AI model that reads and writes text, behind most AI email tools.",
  description:
    "A large language model (LLM) is an AI model trained on large amounts of text to predict and generate language. LLMs power AI drafting, summaries, and chat.",
  eyebrow: "Glossary",
  intro: "The engine inside nearly every AI writing, summarizing, and email tool.",
  answer:
    "A large language model (LLM) is a type of AI model trained on very large amounts of text to predict the next piece of text in a sequence, which lets it read, summarize, answer questions, and write in natural language. GPT models from OpenAI and Claude models from Anthropic are examples. Most AI email assistants send message content to an LLM to understand it and draft replies.",
  primaryIntent: "large language model llm definition",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "How a large language model produces text" },
    {
      type: "p",
      text: "Text is split into tokens, which are word pieces. During training, the model sees enormous numbers of examples and adjusts billions of internal parameters to get better at predicting the next token. When you use it, the model reads your input and generates a response one token at a time. Instruction tuning and other training steps turn a raw next-token predictor into something that follows requests.",
    },
    { type: "h2", text: "What an LLM does and doesn't know" },
    {
      type: "p",
      text: "An LLM knows general patterns from its training data, up to a cutoff date. It doesn't know your inbox, your calendar, or last week's decision unless that information is placed in its input. It also has a context window, a limit on how much text it can consider at once. Tools work around both limits with [retrieval-augmented generation](/glossary/retrieval-augmented-generation), searching for the relevant pieces and passing only those in.",
    },
    { type: "h2", text: "LLM vs. AI agent" },
    {
      type: "p",
      text: "An LLM on its own takes text in and puts text out. An [AI agent](/glossary/ai-agent) wraps an LLM in a loop that can call tools, like search, calendars, or send buttons, and decide what to do next. The model is the reasoning part; the agent is the system that acts.",
    },
    { type: "h2", text: "Which LLMs Synced uses" },
    {
      type: "p",
      text: "Synced uses LLM APIs from providers such as OpenAI or Anthropic. Those providers are bound not to train on the data Synced sends them, and Google Workspace data isn't used to train generalized models. See the [privacy policy](/privacy).",
    },
  ],
  faqs: [
    {
      q: "Do LLMs learn from the emails I send through an AI assistant?",
      a: "It depends on the provider's terms and the assistant's contract. API providers commonly offer terms under which customer data isn't used for training; check the assistant's privacy policy for which providers it uses and what they've agreed to.",
    },
  ],
  related: ["/glossary/retrieval-augmented-generation", "/glossary/ai-agent", "/glossary/prompt-injection"],
};
