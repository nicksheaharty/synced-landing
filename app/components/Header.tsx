"use client";

import { useEffect, useRef, useState } from "react";
import { PiCaretDownBold, PiListBold, PiXBold } from "react-icons/pi";

const WAITLIST_URL = "https://forms.gle/g64ZQ3Wy7hhp1M6X7";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type NavLink = { label: string; href: string; note?: string };

const NAV_ITEMS: (NavLink | { label: string; children: NavLink[] })[] = [
  { label: "How it works", href: `${BASE}/how-it-works` },
  { label: "Integrations", href: `${BASE}/integrations` },
  { label: "Pricing", href: `${BASE}/pricing` },
  {
    label: "Resources",
    children: [
      { label: "Guides", href: `${BASE}/guides`, note: "How-tos for email and messages" },
      { label: "Templates", href: `${BASE}/templates`, note: "Copyable work emails" },
      { label: "Compare", href: `${BASE}/compare`, note: "Synced next to other tools" },
      { label: "Glossary", href: `${BASE}/glossary`, note: "AI inbox terms, defined" },
      { label: "Blog", href: `${BASE}/blog`, note: "Notes from the team" },
      { label: "Help center", href: `${BASE}/help`, note: "Setup and troubleshooting" },
    ],
  },
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

function Dropdown({ label, items }: { label: string; items: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // When a mouse hover already opened the menu, the click that usually follows
  // should keep it open rather than toggle it shut.
  const openedByHover = useRef(false);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => cancelClose, []);

  return (
    <div
      ref={ref}
      className="nav-dropdown"
      onPointerEnter={(e) => {
        if (e.pointerType !== "mouse") return;
        cancelClose();
        if (!open) openedByHover.current = true;
        setOpen(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType !== "mouse") return;
        cancelClose();
        closeTimer.current = setTimeout(() => {
          openedByHover.current = false;
          setOpen(false);
        }, 160);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        type="button"
        className="nav-link nav-dropdown-trigger"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => {
          if (openedByHover.current) {
            openedByHover.current = false;
            setOpen(true);
            return;
          }
          setOpen((v) => !v);
        }}
      >
        {label}
        <PiCaretDownBold size={11} className={`nav-dropdown-caret${open ? " is-open" : ""}`} />
      </button>
      <div className={`nav-dropdown-panel${open ? " is-open" : ""}`}>
        <div className="nav-dropdown-card">
          {items.map((item) => (
            <a key={item.label} href={item.href} className="nav-dropdown-item">
              <span className="nav-dropdown-label">{item.label}</span>
              {item.note ? <span className="nav-dropdown-note">{item.note}</span> : null}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    // Sync immediately so a page restored mid-scroll (refresh, back button) gets the right style.
    onScroll();
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

  const flat = NAV_ITEMS.flatMap((item) => ("children" in item ? item.children : [item]));

  return (
    <>
      <nav className={`synced-nav${scrolled ? " scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href={`${BASE}/`} aria-label="Synced home" className="nav-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BASE}/icon-light.png`} alt="" width={26} height={26} className="nav-icon" />
            <LogoText />
          </a>
          <div className="nav-links">
            {NAV_ITEMS.map((item) =>
              "children" in item ? (
                <Dropdown key={item.label} label={item.label} items={item.children} />
              ) : (
                <a key={item.label} href={item.href} className="nav-link">{item.label}</a>
              ),
            )}
          </div>
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
          {flat.map((item) => (
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
