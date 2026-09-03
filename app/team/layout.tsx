import type { Metadata } from "next";
import PageStructuredData from "../components/PageStructuredData";

export const metadata: Metadata = {
  title: "Meet the Team Building Synced",
  description: "Meet the founders building Synced, the AI inbox assistant that turns messages into completed work.",
  alternates: { canonical: "/team" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Meet the Team Building Synced",
    description: "Meet the founders building Synced, the AI inbox assistant that turns messages into completed work.",
    url: "/team",
    type: "website",
    siteName: "Synced",
    images: [{ url: "/social-preview.png", width: 1200, height: 630, alt: "Synced AI inbox assistant" }],
  },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  const people = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://syncedinbox.com/team#aum-dhruv",
        name: "Aum Dhruv",
        jobTitle: "Chief Executive Officer",
        worksFor: { "@id": "https://syncedinbox.com/#organization" },
        sameAs: ["https://www.linkedin.com/in/aumdhruv/"],
      },
      {
        "@type": "Person",
        "@id": "https://syncedinbox.com/team#nick-harty",
        name: "Nick Harty",
        jobTitle: "Chief Technology Officer",
        worksFor: { "@id": "https://syncedinbox.com/#organization" },
        sameAs: ["https://www.linkedin.com/in/nicksheaharty/"],
      },
    ],
  };
  return <><PageStructuredData path="/team" name="Meet the Team Building Synced" description="Meet the founders building the Synced AI inbox assistant." /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(people).replace(/</g, "\\u003c") }} />{children}</>;
}
