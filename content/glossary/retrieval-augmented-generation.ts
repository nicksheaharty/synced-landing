import type { Page } from "../types";

export const retrievalAugmentedGeneration: Page = {
  slug: "/glossary/retrieval-augmented-generation",
  cluster: "glossary",
  parent: "/glossary",
  term: "Retrieval-augmented generation (RAG)",
  title: "What Is Retrieval-Augmented Generation (RAG)? | Synced",
  h1: "Retrieval-augmented generation (RAG)",
  navLabel: "Retrieval-augmented generation",
  cardText: "An AI model searches your data first, then writes its answer from what it found.",
  description:
    "Retrieval-augmented generation (RAG) is when an AI model searches a set of documents first, then writes its answer using what it found instead of memory alone.",
  eyebrow: "Glossary",
  intro: "Why an AI assistant can quote your contract when the model has never seen it.",
  answer:
    "Retrieval-augmented generation (RAG) is a technique in which an AI system first retrieves relevant information from an external source, such as a search index, a document store, or an email account, and then passes that information to a large language model to generate its response. RAG lets a model answer from specific, current data it was never trained on.",
  primaryIntent: "retrieval augmented generation rag definition",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "How retrieval-augmented generation works" },
    {
      type: "steps",
      items: [
        { title: "Retrieve", body: "The system turns the question into a search and pulls the most relevant passages, messages, or files." },
        { title: "Augment", body: "Those results are placed in the prompt alongside the original question." },
        { title: "Generate", body: "The language model writes the answer, drawing on the retrieved text rather than only what it learned in training." },
      ],
    },
    {
      type: "p",
      text: "The term comes from a 2020 research paper by Patrick Lewis and colleagues, \"Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.\" Today it describes almost any system that searches before it writes.",
    },
    { type: "h2", text: "A retrieval-augmented generation example in email" },
    {
      type: "p",
      text: "A client asks, \"What did we agree the payment terms were?\" A model on its own has no idea. A RAG system searches your email and files, finds the signed agreement and the thread where terms were discussed, and drafts a reply quoting net 30 from the actual document.",
    },
    { type: "h2", text: "RAG vs. fine-tuning" },
    {
      type: "p",
      text: "Fine-tuning changes the model itself by training it on more data. RAG leaves the model unchanged and supplies information at the moment of the request. For personal data like email, RAG is the usual choice: the data changes every hour, and it shouldn't be baked into a model others use.",
    },
    {
      type: "p",
      text: "Synced works this way when it handles a message: it searches connected sources like Gmail, Google Drive, and OneDrive for context before drafting the reply.",
    },
    {
      type: "sources",
      items: [{ label: "Lewis et al., Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (arXiv, 2020)", url: "https://arxiv.org/abs/2005.11401", checked: "2026-09-13" }],
    },
  ],
  related: ["/glossary/large-language-model", "/glossary/natural-language-search", "/glossary/prompt-injection"],
};
