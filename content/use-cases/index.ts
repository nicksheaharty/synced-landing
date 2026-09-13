import type { Page } from "../types";
import { founders } from "./founders";
import { executiveAssistants } from "./executive-assistants";
import { sales } from "./sales";
import { recruiters } from "./recruiters";
import { consultants } from "./consultants";
import { agencies } from "./agencies";
import { realEstateAgents } from "./real-estate-agents";
import { smallBusinessOwners } from "./small-business-owners";

const hub: Page = {
  slug: "/for",
  cluster: "use-case",
  title: "Who Synced Is For: Founders, EAs, Sales, Recruiters | Synced",
  h1: "Who Synced is for.",
  navLabel: "Use cases",
  description:
    "How founders, executive assistants, sales teams, recruiters, consultants, and small business owners use Synced to clear email and messages.",
  eyebrow: "Use cases",
  intro: "Synced fits people whose job runs through their inbox. Here's what that looks like by role, including where it isn't the right tool.",
  primaryIntent: "who uses ai inbox assistant",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "CollectionPage",
  icon: "users",
  body: [{ type: "index", clusters: ["use-case"] }],
};

export const pages: Page[] = [
  hub,
  founders,
  executiveAssistants,
  sales,
  recruiters,
  consultants,
  agencies,
  realEstateAgents,
  smallBusinessOwners,
];
