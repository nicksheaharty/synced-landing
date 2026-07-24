import type { MetadataRoute } from "next";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://synced.it").replace(/\/$/, "");

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-07-23"),
      changeFrequency: "weekly",
      priority: 1,
      images: [`${siteUrl}/social-preview.png`],
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: new Date("2026-07-13"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
