import type { Page } from "../types";
import { syncedVsSuperhuman } from "./synced-vs-superhuman";
import { syncedVsShortwave } from "./synced-vs-shortwave";
import { syncedVsFyxer } from "./synced-vs-fyxer";
import { syncedVsGeminiInGmail } from "./synced-vs-gemini-in-gmail";
import { syncedVsCopilotInOutlook } from "./synced-vs-copilot-in-outlook";
import { syncedVsSanebox } from "./synced-vs-sanebox";
import { syncedVsChatgpt } from "./synced-vs-chatgpt";
import { syncedVsSpark } from "./synced-vs-spark";
import { superhumanAlternatives } from "./superhuman-alternatives";
import { saneboxAlternatives } from "./sanebox-alternatives";
import { fyxerAlternatives } from "./fyxer-alternatives";
import { bestAiEmailAssistants } from "./best-ai-email-assistants";

const hub: Page = {
  slug: "/compare",
  cluster: "compare",
  title: "Compare Synced with Other AI Email Assistants | Synced",
  h1: "Synced compared.",
  navLabel: "Compare",
  description:
    "Side-by-side comparisons of Synced with other AI email tools, with pricing, platforms, and data policies sourced from each vendor's own pages.",
  eyebrow: "Compare",
  intro: "Honest comparisons. Every competitor detail links to the vendor's own page with the date we checked it, and each page says where the other tool is the better pick.",
  primaryIntent: "synced alternatives comparison",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "CollectionPage",
  icon: "arrows",
  body: [{ type: "index", clusters: ["compare", "alternatives"] }],
};

export const pages: Page[] = [
  hub,
  syncedVsSuperhuman,
  syncedVsShortwave,
  syncedVsFyxer,
  syncedVsGeminiInGmail,
  syncedVsCopilotInOutlook,
  syncedVsSanebox,
  syncedVsChatgpt,
  syncedVsSpark,
  superhumanAlternatives,
  saneboxAlternatives,
  fyxerAlternatives,
  bestAiEmailAssistants,
];
