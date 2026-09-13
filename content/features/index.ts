import type { Page } from "../types";
import { decide } from "./decide";
import { tasks } from "./tasks";
import { inboxes } from "./inboxes";
import { search } from "./search";
import { drafting } from "./drafting";
import { scheduling } from "./scheduling";
import { followUps } from "./follow-ups";
import { documents } from "./documents";

const hub: Page = {
  slug: "/features",
  cluster: "feature",
  title: "Features: Search, Drafting, Scheduling, Follow-ups | Synced",
  h1: "What Synced does.",
  navLabel: "Features",
  description:
    "Synced's features: cross-app search, drafted replies, meeting scheduling, follow-up tracking, Action Plans, the Decide queue, and Tasks.",
  eyebrow: "Product",
  intro: "Each feature below works on the messages in your connected Inboxes. Synced does the prep work and asks you only for the decisions.",
  primaryIntent: "synced features",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "CollectionPage",
  icon: "lightning",
  body: [{ type: "index", clusters: ["feature"] }],
};

export const pages: Page[] = [hub, decide, tasks, inboxes, search, drafting, scheduling, followUps, documents];
