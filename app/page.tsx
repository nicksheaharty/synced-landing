"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  PiCalendarDuotone,
  PiClockDuotone,
  PiScrollDuotone,
  PiUsersDuotone,
  PiCheckSquareDuotone,
  PiMonitorDuotone,
  PiArrowRightDuotone,
  PiLinkedinLogoDuotone,
} from "react-icons/pi";

const APP_URL = "https://app.synced.it";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const features = [
  {
    icon: PiCalendarDuotone,
    title: "Meeting coordination",
    body: "Sync Google and Outlook calendars. Find team availability instantly. Schedule exam meetings in seconds.",
  },
  {
    icon: PiClockDuotone,
    title: "Deadline tracking",
    body: "Never miss a statutory response window. Deadlines surface before they're urgent, with alerts for every exam type.",
  },
  {
    icon: PiScrollDuotone,
    title: "Compliance audit trail",
    body: "Every action timestamped and logged. Produce a complete ledger for examiners — no scrambling, no gaps.",
  },
  {
    icon: PiUsersDuotone,
    title: "Team-wide visibility",
    body: "Compliance managers, legal counsel, audit leads — one shared workspace. Everyone sees the same picture.",
  },
  {
    icon: PiCheckSquareDuotone,
    title: "Follow-up management",
    body: "Track open items and document requests from examiners. Close the loop before it becomes a finding.",
  },
  {
    icon: PiMonitorDuotone,
    title: "Keyboard-first UX",
    body: "Command palette, dark mode, VS Code-style navigation. Built for people who care about how their tools feel.",
  },
];

const agencies = ["SEC", "OCC", "CFPB", "FDIC", "Federal Reserve", "Partner Banks"];

const team = [
  {
    name: "Aum Dhruv",
    role: "Chief Executive Officer",
    bio: "ORFE at Princeton. Built TigerMeet.org — used across Princeton, Penn, UF, and Brandeis for 10,000+ meetings. Two internships at Amazon building AR hardware. Worked at the SEC.",
    photo: `${BASE}/aum.jpeg`,
    linkedin: "https://www.linkedin.com/in/aumdhruv/",
  },
  {
    name: "Nick Harty",
    role: "Chief Technology Officer",
    bio: "Engineering & Economics at Wharton. Shipped product inside regulated institutions. Raised $20k non-dilutive. Coordinated 400 congressional offices for the Congressional App Challenge.",
    photo: `${BASE}/nick.jpeg`,
    linkedin: "https://www.linkedin.com/in/nicksheaharty/",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Nav */}
      <nav className={`synced-nav${scrolled ? " scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="/" aria-label="Synced home" className="nav-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BASE}/icon-light.png`} alt="" width={26} height={26} className="nav-icon" />
            <LogoText />
          </a>
          <a href={APP_URL} className="btn-primary">
            Try the app
          </a>
        </div>
      </nav>

      <main className="flex flex-col flex-1">

        {/* Hero */}
        <section className="hero-section">
          <div className="hero-glow" />
          <div className="container hero-container">
            <span className="eyebrow">Regulatory compliance scheduling</span>
            <h1 className="hero-title">
              Exam-ready<br />
              <em className="not-italic hero-accent">from day one.</em>
            </h1>
            <p className="hero-sub">
              Synced gives compliance teams one place to coordinate exams — scheduling, deadlines, follow-ups, and audit logs across SEC, OCC, and CFPB examinations.
            </p>
            <div className="hero-ctas">
              <a href={APP_URL} className="btn-primary btn-lg">
                Get started free
                <PiArrowRightDuotone size={18} />
              </a>
              <a href="mailto:nick@storiara.com" className="btn-ghost btn-lg">
                Talk to us
              </a>
            </div>
            <p className="hero-footnote">No credit card required · Free for small teams</p>
          </div>
        </section>

        {/* Screenshot */}
        <section className="screenshot-section">
          <div className="container">
            <div className="screenshot-wrap">
              <Image
                src={`${BASE}/demo-light.png`}
                alt="Synced app dashboard"
                width={1200}
                height={720}
                priority
                className="w-full h-auto block"
              />
            </div>
          </div>
        </section>

        {/* Agency strip */}
        <section className="agency-section">
          <div className="container">
            <p className="uppercase-label">Built for institutions regulated by</p>
            <div className="agency-badges">
              {agencies.map((a) => (
                <span key={a} className="agency-badge">
                  <span className="badge-dot" />
                  {a}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="features-section">
          <div className="container">
            <div className="section-header">
              <div className="uppercase-label">Why Synced</div>
              <h2 className="section-heading">
                Everything an exam demands.<br />Nothing it doesn't.
              </h2>
              <p className="section-sub">
                Regulatory examinations move fast. Synced keeps your team coordinated from day one to final response.
              </p>
            </div>
            <div className="feature-grid">
              {features.map(({ icon: Icon, title, body }) => (
                <div key={title} className="feature-card">
                  <div className="feature-icon-wrap">
                    <Icon size={22} />
                  </div>
                  <h3 className="feature-title">{title}</h3>
                  <p className="feature-body">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="team-section">
          <div className="container">
            <div className="section-header">
              <div className="uppercase-label">The team</div>
              <h2 className="section-heading">
                Built by people who've seen<br />the pain firsthand.
              </h2>
              <p className="section-sub">Building together since middle school.</p>
            </div>
            <div className="team-grid">
              {team.map(({ name, role, bio, photo, linkedin }) => (
                <div key={name} className="team-card">
                  <div className="team-card-top">
                    <Image src={photo} alt={name} width={52} height={52} className="team-photo" />
                    <div className="team-info">
                      <div className="team-name">{name}</div>
                      <div className="team-role">{role}</div>
                    </div>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="team-linkedin-btn" aria-label="LinkedIn">
                      <PiLinkedinLogoDuotone size={22} />
                    </a>
                  </div>
                  <p className="team-bio">{bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container cta-inner">
            <h2 className="cta-title">
              Your next exam<br />starts now.
            </h2>
            <p className="cta-sub">Join compliance teams already using Synced to run cleaner, faster examinations.</p>
            <a href={APP_URL} className="btn-primary btn-lg">
              Try Synced free
              <PiArrowRightDuotone size={18} />
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <a href="/" aria-label="Synced home" className="nav-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BASE}/icon-light.png`} alt="" width={20} height={20} className="nav-icon" />
            <LogoText small />
          </a>
          <nav className="footer-links">
            <a href="mailto:nick@storiara.com" className="footer-link">Contact</a>
            <a href={`${APP_URL}/privacy`} className="footer-link">Privacy</a>
            <a href={`${APP_URL}/terms`} className="footer-link">Terms</a>
          </nav>
          <span className="footer-copy">© 2026 Synced.it</span>
        </div>
      </footer>

      <style>{`
        /* ── Tokens ── */
        :root {
          --bg:      248 30% 97%;
          --fg:      248 60% 8%;
          --card:    0 0% 100%;
          --primary: 248 89% 55%;
          --accent:  248 89% 65%;
          --muted:   248 20% 92%;
          --muted-fg:248 22% 44%;
          --border:  248 25% 89%;
          --radius:  0.5rem;
        }

        body {
          background: hsl(var(--bg));
          color: hsl(var(--fg));
        }

        .container {
          width: 100%;
          max-width: 1120px;
          margin-inline: auto;
          padding-inline: clamp(1rem, 5vw, 2rem);
        }

        /* ── Nav ── */
        .synced-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          transition: background .25s, border-color .25s, box-shadow .25s;
          border-bottom: 1px solid transparent;
        }
        .synced-nav.scrolled {
          background: color-mix(in srgb, hsl(var(--bg)) 88%, transparent);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom-color: hsl(var(--border));
          box-shadow: 0 1px 12px rgba(0,0,0,.05);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 60px;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
        }
        .nav-icon { border-radius: 6px; display: block; }

        /* ── Buttons ── */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          height: 2.5rem;
          padding: 0 1.2rem;
          border-radius: var(--radius);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          border: none;
          text-decoration: none;
          background: linear-gradient(to bottom, hsl(248 89% 55%), hsl(248 89% 63%));
          color: hsl(248 100% 98%);
          transition: opacity .15s, transform .1s;
          white-space: nowrap;
        }
        .btn-primary:hover  { opacity: .9; transform: translateY(-1px); }
        .btn-primary:active { transform: translateY(0); }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          height: 2.5rem;
          padding: 0 1.2rem;
          border-radius: var(--radius);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          border: none;
          background: color-mix(in srgb, hsl(248 89% 65%) 10%, transparent);
          color: hsl(248 89% 50%);
          transition: background .15s, box-shadow .15s, transform .1s;
          white-space: nowrap;
        }
        .btn-ghost:hover {
          background: hsl(var(--card));
          box-shadow: 0 2px 8px rgba(0,0,0,.08);
          transform: translateY(-1px);
        }
        .btn-ghost:active { transform: translateY(0); }

        .btn-lg {
          height: 2.75rem;
          padding: 0 1.4rem;
          font-size: 0.9375rem;
        }

        /* ── Hero ── */
        .hero-section {
          padding: 9rem 0 4rem;
          position: relative;
          overflow: hidden;
        }
        .hero-glow {
          position: absolute;
          top: -200px;
          left: -150px;
          width: 900px;
          height: 700px;
          background: radial-gradient(ellipse at 30% 40%, hsl(248 89% 60% / .13) 0%, transparent 65%);
          pointer-events: none;
          user-select: none;
        }
        .hero-container {
          position: relative;
        }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: hsl(var(--primary));
          background: hsl(var(--primary) / .08);
          border: 1px solid hsl(var(--primary) / .18);
          padding: 0.3rem 0.75rem;
          border-radius: 999px;
          margin-bottom: 1.5rem;
        }
        .hero-title {
          font-family: "p22-mackinac-pro", serif;
          font-size: clamp(2.4rem, 5.5vw, 3.75rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.08;
          margin-bottom: 1.5rem;
          color: hsl(var(--fg));
          max-width: 580px;
        }
        .hero-accent {
          color: hsl(var(--primary));
        }
        .hero-sub {
          font-size: clamp(1rem, 2vw, 1.1rem);
          line-height: 1.7;
          color: hsl(var(--muted-fg));
          max-width: 520px;
          margin-bottom: 2.25rem;
        }
        .hero-ctas {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          align-items: center;
        }
        .hero-footnote {
          margin-top: 1.25rem;
          font-size: 0.78rem;
          color: hsl(var(--muted-fg));
          opacity: 0.65;
        }

        /* ── Screenshot ── */
        .screenshot-section {
          padding-bottom: 0;
        }
        .screenshot-wrap {
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid hsl(var(--border));
          box-shadow:
            0 0 0 1px hsl(var(--border) / .5),
            0 24px 80px -16px rgba(68,41,242,.15);
          line-height: 0;
          cursor: url('${BASE}/icon-light.png') 16 16, pointer;
        }

        /* ── Agency strip ── */
        .agency-section {
          padding: 3rem 0;
          border-top: 1px solid hsl(var(--border));
          margin-top: 4rem;
          text-align: center;
        }
        .agency-section .uppercase-label { margin-bottom: 1.25rem; }
        .agency-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }
        .agency-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.85rem;
          border-radius: 999px;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--card));
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: hsl(var(--muted-fg));
        }
        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: hsl(var(--primary));
          flex-shrink: 0;
        }

        /* ── Section commons ── */
        .features-section,
        .team-section {
          padding: 5rem 0;
          border-top: 1px solid hsl(var(--border));
        }
        .section-header { margin-bottom: 3rem; }
        .uppercase-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: hsl(var(--primary));
          margin-bottom: 0.75rem;
        }
        .section-heading {
          font-family: "p22-mackinac-pro", serif;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          line-height: 1.15;
          margin-bottom: 0.75rem;
          color: hsl(var(--fg));
        }
        .section-sub {
          font-size: 1rem;
          color: hsl(var(--muted-fg));
          max-width: 480px;
          line-height: 1.65;
        }

        /* ── Features ── */
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: hsl(var(--border));
          border: 1px solid hsl(var(--border));
          border-radius: 12px;
          overflow: hidden;
        }
        .feature-card {
          background: hsl(var(--card));
          padding: 1.75rem;
          transition: background .2s;
        }
        .feature-card:hover {
          background: hsl(var(--muted));
        }
        .feature-icon-wrap {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: hsl(var(--primary) / .1);
          border-radius: 0.5rem;
          margin-bottom: 1rem;
          color: hsl(var(--primary));
        }
        .feature-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: hsl(var(--fg));
          margin-bottom: 0.4rem;
          font-family: inherit;
        }
        .feature-body {
          font-size: 0.85rem;
          color: hsl(var(--muted-fg));
          line-height: 1.6;
        }

        /* ── Team ── */
        .team-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          align-items: stretch;
        }
        @media (max-width: 520px) {
          .team-grid { grid-template-columns: 1fr; }
        }
        .team-card {
          background: hsl(var(--card));
          border: 1px solid hsl(var(--border));
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
          transition: border-color .2s, box-shadow .2s;
        }
        .team-card-top {
          display: flex;
          align-items: center;
          gap: 0.875rem;
        }
        .team-card:hover {
          border-color: hsl(var(--primary) / .35);
          box-shadow: 0 4px 16px -4px rgba(68,41,242,.1);
        }
        .team-photo {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center top;
          border: 2px solid hsl(var(--border));
          flex-shrink: 0;
          cursor: url('${BASE}/icon-light.png') 16 16, pointer;
        }
        .team-info {
          flex: 1;
          min-width: 0;
        }
        .team-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: hsl(var(--fg));
          line-height: 1.2;
        }
        .team-role {
          font-size: 0.78rem;
          font-weight: 500;
          color: hsl(var(--muted-fg));
          margin-top: 0.15rem;
        }
        .team-linkedin-btn {
          color: hsl(var(--primary));
          opacity: 0.7;
          transition: opacity .15s, transform .15s;
          display: flex;
          align-items: center;
          flex-shrink: 0;
          margin-left: auto;
        }
        .team-linkedin-btn:hover { opacity: 1; transform: scale(1.1); }
        .team-bio {
          font-size: 0.82rem;
          line-height: 1.6;
          color: hsl(var(--muted-fg));
        }

        /* ── CTA ── */
        .cta-section {
          padding: 6rem 0;
          border-top: 1px solid hsl(var(--border));
        }
        .cta-inner {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
        }
        .cta-title {
          font-family: "p22-mackinac-pro", serif;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: hsl(var(--fg));
          margin: 0;
        }
        .cta-sub {
          font-size: 1rem;
          color: hsl(var(--muted-fg));
          max-width: 400px;
          line-height: 1.65;
        }

        /* ── Footer ── */
        .site-footer {
          border-top: 1px solid hsl(var(--border));
          padding: 2rem 0;
        }
        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-links {
          display: flex;
          gap: 1.5rem;
        }
        .footer-link {
          font-size: 0.82rem;
          color: hsl(var(--muted-fg));
          text-decoration: none;
          transition: color .15s;
        }
        .footer-link:hover { color: hsl(var(--fg)); }
        .footer-copy {
          font-size: 0.82rem;
          color: hsl(var(--muted-fg));
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .hero-section { padding: 7rem 0 3rem; }

          .feature-grid {
            grid-template-columns: 1fr;
          }

          .cta-inner { align-items: flex-start; }

          .footer-inner { flex-direction: column; align-items: flex-start; }
        }

        @media (max-width: 600px) {
          .feature-grid { grid-template-columns: 1fr; }
        }

        @media (min-width: 601px) and (max-width: 900px) {
          .feature-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </>
  );
}

function LogoText({ small }: { small?: boolean }) {
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
      Synced<span style={{ color: "hsl(var(--primary))" }}>.</span>It
    </span>
  );
}
