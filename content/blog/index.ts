import type { Page } from "../types";
import { whyAsksBeforeSends } from "./why-synced-asks-before-it-sends";
import { inboxIsToDoList } from "./your-inbox-is-a-to-do-list";
import { workBeyondEmail } from "./work-happens-in-more-than-email";

const hub: Page = {
  slug: "/blog",
  cluster: "blog",
  title: "Synced Blog: Product Thinking on AI and Your Inbox | Synced",
  h1: "Blog.",
  navLabel: "Blog",
  cardText: "Notes from the Synced team on how an AI should work in your inbox.",
  description:
    "The Synced blog: the team behind the AI inbox assistant on approval before sending, Action Plans instead of summaries, and handling work across every channel.",
  eyebrow: "Resources",
  intro: "Why Synced works the way it does, written by the people building it.",
  primaryIntent: "synced blog ai inbox product thinking",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "CollectionPage",
  icon: "book",
  body: [{ type: "index", clusters: ["blog"] }],
};

export const pages: Page[] = [hub, whyAsksBeforeSends, inboxIsToDoList, workBeyondEmail];
