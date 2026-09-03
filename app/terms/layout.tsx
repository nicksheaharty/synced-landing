import type { Metadata } from "next";
import PageStructuredData from "../components/PageStructuredData";

export const metadata: Metadata = {
  title: "Terms of Service | Synced",
  description:
    "Read the Synced Terms of Service covering acceptable use, connected account permissions, user responsibilities, intellectual property, and disclaimers.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | Synced",
    description: "Read the terms that govern access to and use of Synced.",
    url: "/terms",
    type: "website",
    siteName: "Synced",
    images: [{ url: "/social-preview.png", width: 1200, height: 630, alt: "Synced terms of service" }],
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <><PageStructuredData path="/terms" name="Terms of Service | Synced" description="The terms that govern access to and use of Synced." />{children}</>;
}
