import type { Metadata } from "next";
import PageStructuredData from "../components/PageStructuredData";

export const metadata: Metadata = {
  title: "Security and Data Controls | Synced",
  description:
    "Learn how Synced protects connected inbox, calendar, contact, and file data and how users control access.",
  alternates: { canonical: "/security" },
  openGraph: {
    title: "Security and Data Controls | Synced",
    description: "How Synced protects connected data and keeps users in control.",
    url: "/security",
    type: "website",
    siteName: "Synced",
    images: [{ url: "/social-preview.png", width: 1200, height: 630, alt: "Synced security and data controls" }],
  },
};

export default function SecurityLayout({ children }: { children: React.ReactNode }) {
  return <><PageStructuredData path="/security" name="Security and Data Controls | Synced" description="How Synced protects connected data and keeps users in control." />{children}</>;
}
