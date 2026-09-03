import type { Metadata } from "next";
import PageStructuredData from "../components/PageStructuredData";

export const metadata: Metadata = {
  title: "How to Set Up the Synced AI Inbox Assistant",
  description:
    "How Synced works, and how to get started on web and mobile. Connect your Inboxes, review Action Plans, and clear your Decide queue.",
  alternates: { canonical: "/get-started" },
  openGraph: {
    title: "How to Set Up the Synced AI Inbox Assistant",
    description:
      "How Synced works, and how to get started on web and mobile.",
    url: "/get-started",
    type: "website",
    siteName: "Synced",
    images: [{ url: "/social-preview.png", width: 1200, height: 630, alt: "Set up the Synced AI inbox assistant" }],
  },
};

export default function GetStartedLayout({ children }: { children: React.ReactNode }) {
  return <><PageStructuredData path="/get-started" name="How to Set Up the Synced AI Inbox Assistant" description="How invited users set up Synced on web and iOS." />{children}</>;
}
