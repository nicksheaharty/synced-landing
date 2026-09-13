import type { Page } from "../types";

export const encryptionAtRest: Page = {
  slug: "/glossary/encryption-at-rest",
  cluster: "glossary",
  parent: "/glossary",
  term: "Encryption at rest",
  title: "What Is Encryption at Rest? | Synced",
  h1: "Encryption at rest",
  navLabel: "Encryption at rest",
  cardText: "Encrypting data while it's stored, so a copied disk or file is unreadable.",
  description:
    "Encryption at rest means data is encrypted while stored on disks or databases, so stolen storage is unreadable without the keys. It pairs with TLS in transit.",
  eyebrow: "Glossary",
  intro: "One of two encryption claims on nearly every security page, and the one that's easier to misread.",
  answer:
    "Encryption at rest is the practice of encrypting data while it is stored, on disks, in databases, or in backups, so that anyone who obtains the raw storage without the decryption keys sees unreadable data. Encryption at rest complements encryption in transit, which protects data while it moves across a network, usually with TLS.",
  primaryIntent: "encryption at rest definition",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "How encryption at rest works" },
    {
      type: "p",
      text: "Stored data is encrypted with a symmetric algorithm, most commonly AES-256. The keys are kept separately, often in a key management service. Large providers use envelope encryption: each chunk of data gets its own data encryption key, and those keys are themselves encrypted by a key encryption key. Google Cloud, for example, encrypts all customer content at rest by default with AES-256.",
    },
    { type: "h2", text: "What encryption at rest protects against" },
    {
      type: "list",
      items: [
        "A stolen or improperly disposed-of physical drive.",
        "A copied backup or database snapshot that leaves the provider's control.",
        "Access to raw storage by someone without permission to use the keys.",
      ],
    },
    { type: "h2", text: "Encryption at rest vs. end-to-end encryption" },
    {
      type: "p",
      text: "Encryption at rest does not stop the service itself from reading your data; the service holds the keys and decrypts data to use it. End-to-end encryption means only the sender and recipient hold keys, so the service can't read content. An AI assistant that reads and drafts email needs to process message content, so it relies on encryption at rest and in transit plus access controls, not end-to-end encryption.",
    },
    {
      type: "p",
      text: "That's why policies about who can access decrypted data matter as much as the encryption. Synced encrypts data in transit with TLS and at rest, and staff don't read connected data except for user-requested support, written consent, or security investigations. More on the [Security](/security) page.",
    },
    {
      type: "sources",
      items: [{ label: "Google Cloud: Default encryption at rest", url: "https://docs.cloud.google.com/docs/security/encryption/default-encryption", checked: "2026-09-13" }],
    },
  ],
  related: ["/glossary/oauth-scopes", "/glossary/google-limited-use-policy", "/guides/is-it-safe-to-give-ai-access-to-your-email"],
};
