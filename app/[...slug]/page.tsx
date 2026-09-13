import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPage, pages } from "@/content/registry";
import { ogImageFor } from "@/content/schema";
import ContentPage from "../components/content/ContentPage";
import "../components/content/content.css";

// Every registry page is rendered by this one route. Hand-built pages
// (/, /pricing, /security, ...) keep their own folders and take precedence.
export const dynamicParams = false;

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.slug.slice(1).split("/") }));
}

type Props = { params: Promise<{ slug: string[] }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(`/${slug.join("/")}`);
  if (!page) return {};
  const image = { url: ogImageFor(page), width: 1200, height: 630, alt: page.h1 };
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.slug },
    robots: page.index === false ? { index: false, follow: true } : undefined,
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.slug,
      type: page.schema === "Article" || page.schema === "TechArticle" ? "article" : "website",
      siteName: "Synced",
      locale: "en_US",
      images: [image],
      ...(page.schema === "Article" || page.schema === "TechArticle"
        ? { publishedTime: page.published, modifiedTime: page.updated }
        : {}),
    },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: [image.url] },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const page = getPage(`/${slug.join("/")}`);
  if (!page) notFound();
  return <ContentPage page={page} />;
}
