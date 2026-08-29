import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Synced",
  description: "Meet the people building Synced.",
  robots: { index: false, follow: false },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
