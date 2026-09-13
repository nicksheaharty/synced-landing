import type { Page } from "../types";
import { automateFollowUps } from "./how-to-automate-email-follow-ups";
import { pages as batchA } from "./batch-a";
import { pages as batchB } from "./batch-b";

const hub: Page = {
  slug: "/guides",
  cluster: "guide",
  title: "Email and Inbox Guides | Synced",
  h1: "Guides.",
  navLabel: "Guides",
  description:
    "Practical guides to getting email under control: follow-ups, scheduling from email, summarizing threads, managing several inboxes, and using AI safely.",
  eyebrow: "Resources",
  intro: "Practical how-tos for email work, with the manual way first and the Synced way where it helps.",
  primaryIntent: "email productivity guides",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "CollectionPage",
  icon: "book",
  body: [{ type: "index", clusters: ["guide"] }],
};

export const pages: Page[] = [hub, automateFollowUps, ...batchA, ...batchB];
