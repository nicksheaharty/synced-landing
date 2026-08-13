import {
  PiLinkedinLogoDuotone,
  PiInstagramLogoDuotone,
} from "react-icons/pi";
import { LogoText } from "./Header";

const WAITLIST_URL = "https://forms.gle/g64ZQ3Wy7hhp1M6X7";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: `${BASE}/#features` },
      { label: "Integrations", href: `${BASE}/#integrations` },
      { label: "Pricing", href: `${BASE}/pricing` },
      { label: "Get Started", href: `${BASE}/get-started` },
      { label: "Get Early Access", href: WAITLIST_URL },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: `${BASE}/#team` },
      { label: "Careers", href: "mailto:nick@storiara.com" },
      { label: "Contact", href: "mailto:nick@storiara.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/syncedinbox/" },
      { label: "Instagram", href: "https://www.instagram.com/synced.it/" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Get Started guide", href: `${BASE}/get-started` },
      { label: "Pricing FAQ", href: `${BASE}/pricing` },
      { label: "Web app", href: "https://mail.synced.it" },
      { label: "Support", href: "mailto:nick@storiara.com" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: `${BASE}/privacy` },
      { label: "Terms of Service", href: `${BASE}/terms` },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="corp-footer relative z-2">
      <div className="container">
        <div className="corp-footer-top">
          <div className="corp-footer-brand">
            <a href={`${BASE}/`} aria-label="Synced home" className="nav-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${BASE}/icon-light.png`} alt="" width={24} height={24} className="nav-icon" />
              <LogoText />
            </a>
            <p className="corp-footer-tagline">Your AI Inbox on Autopilot.</p>
            <div className="footer-social-links">
              <a href="https://www.linkedin.com/company/syncedinbox/" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Synced on LinkedIn">
                <PiLinkedinLogoDuotone size={19} />
              </a>
              <a href="https://www.instagram.com/synced.it/" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Synced on Instagram">
                <PiInstagramLogoDuotone size={19} />
              </a>
            </div>
          </div>

          <div className="corp-footer-columns">
            {columns.map((col) => (
              <div key={col.heading} className="corp-footer-col">
                <div className="corp-footer-heading">{col.heading}</div>
                <ul className="corp-footer-list">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="corp-footer-link"
                        {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="corp-footer-bottom">
          <span className="footer-copy">© 2026 Synced. All rights reserved.</span>
        </div>
      </div>

      <style>{`
        .corp-footer {
          border-top: 1px solid hsl(var(--border));
          padding: 4rem 0 2rem;
        }
        .corp-footer-top {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 2.4fr);
          gap: 3rem;
          padding-bottom: 3rem;
        }
        .corp-footer-brand {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          max-width: 260px;
        }
        .corp-footer-tagline {
          font-size: 0.85rem;
          color: hsl(var(--muted-fg));
          line-height: 1.5;
        }
        .corp-footer-columns {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .corp-footer-heading {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: hsl(var(--fg));
          margin-bottom: 1rem;
        }
        .corp-footer-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }
        .corp-footer-link {
          font-size: 0.85rem;
          color: hsl(var(--muted-fg));
          text-decoration: none;
          transition: color .15s;
        }
        .corp-footer-link:hover { color: hsl(var(--fg)); }

        .corp-footer-bottom {
          padding-top: 1.75rem;
          border-top: 1px solid hsl(var(--border) / .75);
        }
        .footer-social-links {
          display: flex;
          gap: 0.6rem;
        }
        .footer-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 36px;
          min-height: 36px;
          border-radius: 50%;
          color: hsl(var(--muted-fg));
          opacity: 0.85;
          transition: background-color .18s ease, opacity .15s ease, color .15s ease, transform 80ms ease;
        }
        .footer-social-btn:hover {
          opacity: 1;
          color: hsl(var(--fg));
          background: hsl(var(--primary) / .08);
        }
        .footer-social-btn:active { transform: scale(.92); }

        @media (max-width: 900px) {
          .corp-footer-top { grid-template-columns: 1fr; gap: 2.5rem; }
          .corp-footer-brand { max-width: 100%; }
          .corp-footer-columns { grid-template-columns: repeat(2, 1fr); gap: 2rem 1.5rem; }
        }
        @media (max-width: 520px) {
          .corp-footer { padding: 3rem 0 1.5rem; }
          .corp-footer-columns { grid-template-columns: repeat(2, 1fr); gap: 1.75rem 1rem; }
          .corp-footer-bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </footer>
  );
}
