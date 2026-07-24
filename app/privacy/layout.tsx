import type { Metadata } from "next";

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
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
