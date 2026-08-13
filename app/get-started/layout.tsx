import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started | Synced",
  description:
    "How Synced works, and how to get started on web and mobile. Connect your Signals, review Action Plans, and clear your Decide queue.",
  alternates: { canonical: "/get-started" },
  openGraph: {
    title: "Get Started | Synced",
    description:
      "How Synced works, and how to get started on web and mobile.",
    url: "/get-started",
  },
};

export default function GetStartedLayout({ children }: { children: React.ReactNode }) {
  return children;
}
