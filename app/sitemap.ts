import type { MetadataRoute } from "next";
import { pages, staticPages } from "@/content/registry";
import type { Cluster } from "@/content/types";
import { SITE_URL } from "@/content/site";
import { ogImageFor } from "@/content/schema";

export const dynamic = "force-static";

const FREQ: Record<Cluster, MetadataRoute.Sitemap[number]["changeFrequency"]> = {
  product: "monthly",
  feature: "monthly",
  integration: "monthly",
  "use-case": "monthly",
  compare: "monthly",
  alternatives: "monthly",
  glossary: "yearly",
  guide: "monthly",
  template: "yearly",
  help: "monthly",
  blog: "weekly",
  company: "monthly",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const hand = staticPages.map((p) => ({
    url: `${SITE_URL}${p.slug}`,
    lastModified: new Date(p.updated),
    priority: p.priority,
    ...(p.slug === "" ? { images: [`${SITE_URL}/social-preview.png`] } : {}),
  }));
  const registry = pages
    .filter((p) => p.index !== false)
    .map((p) => ({
      url: `${SITE_URL}${p.slug}`,
      lastModified: new Date(p.updated),
      changeFrequency: FREQ[p.cluster],
      priority: p.parent ? 0.6 : 0.8,
      images: [ogImageFor(p)],
    }));
  return [...hand, ...registry];
}
