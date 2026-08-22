import type { MetadataRoute } from "next";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://syncedinbox.com").replace(/\/$/, "");

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
      url: `${siteUrl}/pricing`,
      lastModified: new Date("2026-08-13"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/get-started`,
      lastModified: new Date("2026-08-13"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
