import type { Metadata } from "next";
import PageStructuredData from "../components/PageStructuredData";

export const metadata: Metadata = {
  title: "AI Inbox Assistant Pricing | Synced",
  description:
    "Simple, transparent pricing for Synced. Start free with 20 Action Plans a week, or go Pro for unlimited Inboxes and 100 Action Plans a week.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "AI Inbox Assistant Pricing | Synced",
    description:
      "Simple, transparent pricing for Synced's AI inbox assistant.",
    url: "/pricing",
    type: "website",
    siteName: "Synced",
    images: [{ url: "/social-preview.png", width: 1200, height: 630, alt: "Synced AI inbox assistant pricing" }],
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <><PageStructuredData path="/pricing" name="AI Inbox Assistant Pricing | Synced" description="Simple, transparent pricing for Synced's AI inbox assistant." />{children}</>;
}
