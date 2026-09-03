"use client";

import { useEffect, useState } from "react";
import { PiListBold, PiXBold } from "react-icons/pi";

const WAITLIST_URL = "https://forms.gle/g64ZQ3Wy7hhp1M6X7";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const NAV_ITEMS = [
  { label: "Pricing", href: `${BASE}/pricing` },
  { label: "Security", href: `${BASE}/security` },
  { label: "How it works", href: `${BASE}/#features` },
  { label: "Get Started", href: `${BASE}/get-started` },
];

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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={`synced-nav${scrolled ? " scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href={`${BASE}/`} aria-label="Synced home" className="nav-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BASE}/icon-light.png`} alt="" width={26} height={26} className="nav-icon" />
            <LogoText />
          </a>
          <nav className="nav-links">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">{item.label}</a>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <a href={WAITLIST_URL} className="btn-primary nav-cta">
              Get Early Access
            </a>
            <button
              type="button"
              className="nav-menu-btn"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <PiListBold size={22} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-top">
          <a href={`${BASE}/`} aria-label="Synced home" className="nav-logo" onClick={() => setMenuOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BASE}/icon-light.png`} alt="" width={26} height={26} className="nav-icon" />
            <LogoText />
          </a>
          <button
            type="button"
            className="nav-menu-btn"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <PiXBold size={22} />
          </button>
        </div>
        <nav className="mobile-menu-links">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} className="mobile-menu-link" onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href={WAITLIST_URL} className="btn-primary btn-lg mobile-menu-cta" onClick={() => setMenuOpen(false)}>
          Get Early Access
        </a>
      </div>
    </>
  );
}
