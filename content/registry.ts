import type { Cluster, Page } from "./types";
import { validatePages } from "./validate";
import { ALL_PLANNED } from "./manifest";

import { pages as product } from "./product";
import { pages as features } from "./features";
import { pages as integrations } from "./integrations";
import { pages as useCases } from "./use-cases";
import { pages as compare } from "./compare";
import { pages as glossary } from "./glossary";
import { pages as guides } from "./guides";
import { pages as templates } from "./templates";
import { pages as help } from "./help";
import { pages as blog } from "./blog";
import { pages as company } from "./company";

export const pages: Page[] = [
  ...product,
  ...features,
  ...integrations,
  ...useCases,
  ...compare,
  ...glossary,
  ...guides,
  ...templates,
  ...help,
  ...blog,
  ...company,
];

validatePages(pages, process.env.CONTENT_ALLOW_PLANNED === "1" ? ALL_PLANNED : []);

/** Hand-built routes that live outside the registry but belong in the sitemap and llms.txt. */
export const staticPages: { slug: string; title: string; description: string; updated: string; priority: number }[] = [
  { slug: "", title: "Synced: AI inbox assistant", description: "What Synced does, supported integrations, and core features.", updated: "2026-09-13", priority: 1 },
  { slug: "/pricing", title: "Pricing", description: "Free, Pro, and Enterprise plans, Action Plan limits, and billing FAQ.", updated: "2026-09-03", priority: 0.9 },
  { slug: "/get-started", title: "Get started", description: "Set up Synced on web and iOS in under five minutes.", updated: "2026-09-03", priority: 0.8 },
  { slug: "/security", title: "Security and data controls", description: "How Synced protects connected data and keeps users in control.", updated: "2026-09-13", priority: 0.7 },
  { slug: "/team", title: "Team", description: "The founders building Synced.", updated: "2026-09-03", priority: 0.5 },
  { slug: "/privacy", title: "Privacy policy", description: "How Synced accesses, uses, retains, and deletes data.", updated: "2026-09-13", priority: 0.3 },
  { slug: "/terms", title: "Terms of service", description: "Rules and responsibilities for using Synced.", updated: "2026-09-13", priority: 0.3 },
];

const bySlug = new Map(pages.map((p) => [p.slug, p]));

export function getPage(slug: string) {
  return bySlug.get(slug);
}

export function pagesIn(...clusters: Cluster[]) {
  return pages.filter((p) => clusters.includes(p.cluster) && p.parent);
}

export function childrenOf(slug: string) {
  return pages.filter((p) => p.parent === slug);
}

export function labelFor(slug: string) {
  const p = bySlug.get(slug);
  if (p) return p.navLabel ?? p.h1;
  const s = staticPages.find((x) => x.slug === slug);
  return s?.title ?? slug;
}

export function descriptionFor(slug: string) {
  const p = bySlug.get(slug);
  if (p) return p.cardText ?? p.description;
  return staticPages.find((x) => x.slug === slug)?.description ?? "";
}

export function breadcrumbs(page: Page) {
  const trail: { name: string; path: string }[] = [];
  let cur: Page | undefined = page;
  while (cur) {
    trail.unshift({ name: cur.navLabel ?? cur.h1, path: cur.slug });
    cur = cur.parent ? bySlug.get(cur.parent) : undefined;
  }
  return [{ name: "Home", path: "/" }, ...trail];
}

export const CLUSTER_LABEL: Record<Cluster, string> = {
  product: "Product",
  feature: "Features",
  integration: "Integrations",
  "use-case": "Use cases",
  compare: "Compare",
  alternatives: "Alternatives",
  glossary: "Glossary",
  guide: "Guides",
  template: "Templates",
  help: "Help",
  blog: "Blog",
  company: "Company",
};
