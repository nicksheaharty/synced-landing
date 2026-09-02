import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Synced",
  description:
    "Simple, transparent pricing for Synced. Start free with 20 Action Plans a week, or go Pro for unlimited Inboxes and 100 Action Plans a week.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | Synced",
    description:
      "Simple, transparent pricing for Synced's AI inbox assistant.",
    url: "/pricing",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
