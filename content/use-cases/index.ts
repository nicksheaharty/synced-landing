import type { Page } from "../types";
import { founders } from "./founders";
import { executiveAssistants } from "./executive-assistants";
import { adminAssistants } from "./admin-assistants";
import { sales } from "./sales";
import { recruiters } from "./recruiters";
import { consultants } from "./consultants";
import { agencies } from "./agencies";
import { realEstateAgents } from "./real-estate-agents";
import { smallBusinessOwners } from "./small-business-owners";

const hub: Page = {
  slug: "/for",
  cluster: "use-case",
  title: "Who Synced Is For: Assistants, Founders, Sales, More | Synced",
  h1: "Who Synced is for.",
  navLabel: "Use cases",
  description:
    "Synced is built for executive and admin assistants who handle someone else's inbox, and for founders, sales, recruiters, and consultants running their own.",
  eyebrow: "Use cases",
  intro: "Synced is built first for assistants who handle the inbox and calendar of the people they support. It works the same way for anyone running a busy inbox of their own. Here's what that looks like by role, including where it isn't the right tool.",
  primaryIntent: "who uses ai inbox assistant",
  published: "2026-09-13",
  updated: "2026-11-05",
  schema: "CollectionPage",
  icon: "users",
  body: [{ type: "index", clusters: ["use-case"] }],
};

export const pages: Page[] = [
  hub,
  executiveAssistants,
  adminAssistants,
  founders,
  sales,
  recruiters,
  consultants,
  agencies,
  realEstateAgents,
  smallBusinessOwners,
];
