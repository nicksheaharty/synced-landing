import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Synced",
  description:
    "Read the Synced Terms of Service covering acceptable use, connected account permissions, user responsibilities, intellectual property, and disclaimers.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | Synced",
    description: "Read the terms that govern access to and use of Synced.",
    url: "/terms",
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
