import type { Block, Page } from "./types";
import { PEOPLE, SITE_URL } from "./site";
import { breadcrumbs } from "./registry";

const strip = (t: string) => t.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1");

export function ogImageFor(page: Page) {
  return `${SITE_URL}/og${page.slug}.png`;
}

/** JSON-LD @graph for a registry page. Reuses the root layout's Organization/WebSite/SoftwareApplication @ids. */
export function pageGraph(page: Page) {
  const url = `${SITE_URL}${page.slug}`;
  const crumbs = breadcrumbs(page);
  const graph: Record<string, unknown>[] = [];

  const schema = page.schema ?? "WebPage";
  const webPageType = schema === "AboutPage" || schema === "ContactPage" || schema === "CollectionPage" ? schema : "WebPage";

  graph.push({
    "@type": webPageType,
    "@id": `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: "en-US",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#software` },
    breadcrumb: { "@id": `${url}#breadcrumb` },
    primaryImageOfPage: { "@type": "ImageObject", url: ogImageFor(page) },
    datePublished: page.published,
    dateModified: page.updated,
  });

  graph.push({
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path === "/" ? "/" : c.path}`,
    })),
  });

  if (schema === "Article" || schema === "TechArticle") {
    const author = page.author && page.author !== "team"
      ? { "@type": "Person", "@id": PEOPLE[page.author].id, name: PEOPLE[page.author].name, url: PEOPLE[page.author].url }
      : { "@id": `${SITE_URL}/#organization` };
    graph.push({
      "@type": schema,
      "@id": `${url}#article`,
      headline: page.h1,
      description: page.description,
      mainEntityOfPage: { "@id": `${url}#webpage` },
      image: ogImageFor(page),
      datePublished: page.published,
      dateModified: page.updated,
      author,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    });
    const steps = page.body.find((b): b is Extract<Block, { type: "steps" }> => b.type === "steps");
    if (steps && steps.items.length >= 3) {
      graph.push({
        "@type": "HowTo",
        "@id": `${url}#howto`,
        name: page.h1,
        description: page.answer ? strip(page.answer) : page.description,
        step: steps.items.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: strip(s.title), text: strip(s.body) })),
      });
    }
  }

  if (schema === "DefinedTerm" && page.term) {
    graph.push({
      "@type": "DefinedTerm",
      "@id": `${url}#term`,
      name: page.term,
      description: strip(page.answer ?? page.description),
      url,
      inDefinedTermSet: { "@type": "DefinedTermSet", "@id": `${SITE_URL}/glossary#set`, name: "Synced glossary", url: `${SITE_URL}/glossary` },
    });
  }

  if (schema === "MobileApplication") {
    graph.push({
      "@type": "MobileApplication",
      "@id": `${url}#app`,
      name: "Synced",
      operatingSystem: page.slug.includes("android") ? "Android" : "iOS",
      applicationCategory: "BusinessApplication",
      description: page.description,
      publisher: { "@id": `${SITE_URL}/#organization` },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    });
  }

  if (page.faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: strip(f.a) },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
