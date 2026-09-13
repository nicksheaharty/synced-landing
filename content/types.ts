// Content model for every registry-driven page on syncedinbox.com.
// Text fields support two inline marks: [label](/path) links and **bold**.

export type Cluster =
  | "product"
  | "feature"
  | "integration"
  | "use-case"
  | "compare"
  | "alternatives"
  | "glossary"
  | "guide"
  | "template"
  | "help"
  | "blog"
  | "company";

export type IconName =
  | "search"
  | "draft"
  | "calendar"
  | "tasks"
  | "plug"
  | "cursor"
  | "check"
  | "lock"
  | "hand"
  | "user"
  | "trash"
  | "phone"
  | "mobile"
  | "desktop"
  | "clock"
  | "list"
  | "envelope"
  | "chat"
  | "shield"
  | "folder"
  | "bell"
  | "arrows"
  | "users"
  | "briefcase"
  | "book"
  | "lightning"
  | "eye"
  | "question";

export type Block =
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "steps"; items: { title: string; body: string }[] }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string }
  | { type: "template"; label?: string; subject?: string; text: string }
  | { type: "callout"; title?: string; text: string }
  | { type: "features"; items: { icon: IconName; title: string; body: string }[] }
  | {
      // A static rendering of a real Synced message card: inbound message + completed/proposed steps.
      type: "message";
      from: string;
      source: "gmail" | "outlook" | "slack" | "teams" | "whatsapp" | "instagram" | "messenger" | "sms" | "groupme" | "imessage";
      time: string;
      text: string;
      stepsLabel?: string;
      steps: string[];
      file?: string;
      caption?: string;
    }
  | { type: "links"; title?: string; slugs: string[] }
  | { type: "index"; clusters: Cluster[]; group?: "letter" }
  | { type: "sources"; items: { label: string; url: string; checked: string }[] };

export type SchemaType = "WebPage" | "Article" | "TechArticle" | "DefinedTerm" | "MobileApplication" | "AboutPage" | "ContactPage" | "CollectionPage";

export interface Faq {
  q: string;
  a: string;
}

export interface Page {
  /** Permanent URL path, e.g. "/integrations/gmail". Never change after publishing. */
  slug: string;
  cluster: Cluster;
  /** <title>. 60 chars or fewer, ends with "| Synced" unless it already names Synced. */
  title: string;
  h1: string;
  /** Meta description, 120–160 chars, written as an answer. */
  description: string;
  /** Small label above the H1. */
  eyebrow: string;
  /** One or two sentences under the H1. */
  intro: string;
  /** Self-contained 2–4 sentence answer shown in the "In short" box. The sentence LLMs should quote. */
  answer?: string;
  /** Unique search intent this URL owns. Checked for duplicates at build time. */
  primaryIntent: string;
  /** Hub slug for breadcrumbs, e.g. "/integrations". */
  parent?: string;
  /** Slugs rendered in the related-links block. Must exist. */
  related?: string[];
  /** ISO dates. */
  published: string;
  updated: string;
  /** Defaults to true. */
  index?: boolean;
  schema?: SchemaType;
  author?: "aum" | "nick" | "team";
  /** Short label used in nav, hub cards, breadcrumbs. Defaults to h1. */
  navLabel?: string;
  /** One line used on hub cards. Defaults to description. */
  cardText?: string;
  icon?: IconName;
  body: Block[];
  faqs?: Faq[];
  /** For glossary pages: the term being defined. */
  term?: string;
  /** For integration pages: which plan includes it, and brand icon key. */
  integration?: { brand: string; plans: "free" | "pro"; kind: "inbox" | "output" | "both" };
  cta?: { title: string; sub: string };
}
