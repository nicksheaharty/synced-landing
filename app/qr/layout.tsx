import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Early Access | Synced",
  description: "Scan the QR code to join the Synced early-access list.",
  robots: { index: false, follow: false },
};

export default function QrLayout({ children }: { children: React.ReactNode }) {
  return children;
}
