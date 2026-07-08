"use client";

import { useEffect, useState } from "react";

const WAITLIST_URL = "https://forms.gle/g64ZQ3Wy7hhp1M6X7";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function LogoText({ small }: { small?: boolean }) {
  return (
    <span
      style={{
        fontFamily: "p22-mackinac-pro, serif",
        fontSize: small ? "1rem" : "1.25rem",
        fontWeight: 700,
        letterSpacing: "-0.01em",
        lineHeight: 1,
        color: "hsl(var(--fg))",
      }}
    >
      Synced
    </span>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`synced-nav${scrolled ? " scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href={`${BASE}/`} aria-label="Synced home" className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${BASE}/icon-light.png`} alt="" width={26} height={26} className="nav-icon" />
          <LogoText />
        </a>
        <nav className="nav-links">
          <a href={`${BASE}/#features`} className="nav-link">Features</a>
          <a href={`${BASE}/#integrations`} className="nav-link">Integrations</a>
          <a href={`${BASE}/#team`} className="nav-link">Team</a>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
          <a href={WAITLIST_URL} className="btn-primary">
            Get Early Access
          </a>
        </div>
      </div>
    </nav>
  );
}
