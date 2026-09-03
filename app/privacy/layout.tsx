import type { Metadata } from "next";
import PageStructuredData from "../components/PageStructuredData";

export const metadata: Metadata = {
  title: "Privacy Policy | Synced",
  description:
    "Learn how Synced collects, uses, secures, retains, and deletes account and Google Workspace data when you use our AI inbox assistant.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Synced",
    description:
      "Learn how Synced handles and protects account and Google Workspace data.",
    url: "/privacy",
    type: "website",
    siteName: "Synced",
    images: [{ url: "/social-preview.png", width: 1200, height: 630, alt: "Synced privacy policy" }],
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <><PageStructuredData path="/privacy" name="Privacy Policy | Synced" description="How Synced handles and protects account and Google Workspace data." />{children}</>;
}
