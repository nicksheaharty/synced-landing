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
  PiBankDuotone,
  PiMoneyWavyDuotone,
} from "react-icons/pi";

const APP_URL = "https://app.synced.it";
const WAITLIST_URL = "https://forms.gle/g64ZQ3Wy7hhp1M6X7";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const features = [
  {
    icon: PiScrollDuotone,
    title: "Find information instantly",
    body: "Search your email, files, and cloud storage without leaving your inbox. Synced pulls context from across your accounts.",
  },
  {
    icon: PiCheckSquareDuotone,
    title: "Draft and schedule automatically",
    body: "Reply to emails, create documents, and set up meetings — all from your conversation. Just approve and send.",
  },
  {
    icon: PiCalendarDuotone,
    title: "Coordinate schedules effortlessly",
    body: "Synced checks calendars, finds available times, and proposes meetings. No more back-and-forth scheduling.",
  },
  {
    icon: PiClockDuotone,
    title: "Manage follow-ups intelligently",
    body: "Set reminders, track commitments, and never let a task slip through the cracks.",
  },
  {
    icon: PiUsersDuotone,
    title: "Work in one unified space",
    body: "All your conversations, files, and tasks in one place. No more context switching between apps.",
  },
  {
    icon: PiMonitorDuotone,
    title: "Built for how you work",
    body: "Command palette, shortcuts, VS Code-style navigation. Designed for people who value efficiency.",
  },
];

const agencies = ["Gmail", "Outlook", "Slack", "Google Drive", "Dropbox", "More"];

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

  useEffect(() => {
    const bgContainer = document.querySelector(".bg-container") as HTMLElement;
    const handleMouseMove = (e: PointerEvent) => {
      if (bgContainer) {
        bgContainer.style.setProperty("--mouse-x", `${e.clientX}px`);
        bgContainer.style.setProperty("--mouse-y", `${e.clientY}px`);
      }
    };
    window.addEventListener("pointermove", handleMouseMove);

    const cards = document.querySelectorAll(".feature-card, .pricing-card, .team-card, .screenshot-wrap");
    const handleCardMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--card-mouse-x", `${x}px`);
      card.style.setProperty("--card-mouse-y", `${y}px`);
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleCardMouseMove as any);
    });

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleCardMouseMove as any);
      });
    };
  }, []);

  return (
    <>
      {/* Dynamic Background Elements */}
      <div className="bg-container">
        <div className="bg-grid-base" />
        <div className="bg-grid-glow" />
        <div className="cursor-glow" />
        <div className="ambient-blob-1" />
        <div className="ambient-blob-2" />
        <div className="ambient-blob-3" />
      </div>

      {/* Nav */}
      <nav className={`synced-nav${scrolled ? " scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href={`${BASE}/`} aria-label="Synced home" className="nav-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BASE}/icon-light.png`} alt="" width={26} height={26} className="nav-icon" />
            <LogoText />
          </a>
          <nav className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#integrations" className="nav-link">Integrations</a>
            <a href="#team" className="nav-link">Team</a>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <a href={WAITLIST_URL} className="nav-link" style={{ fontSize: "0.78rem", fontWeight: 500 }}>
              Join Waitlist
            </a>
            <a href={WAITLIST_URL} className="btn-primary">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      <main className="flex flex-col flex-1">

        {/* Hero */}
        <section className="hero-section">
          <div className="hero-glow" />
          <div className="container hero-container">
            <span className="eyebrow">Your automated inbox that gets things done</span>
            <h1 className="hero-title">
              Turn conversations into<br />
              <em className="not-italic hero-accent">completed work.</em>
            </h1>
            <p className="hero-sub">
              Stop copying emails into AI, digging through files, and coordinating schedules. Synced connects to your email, messages, cloud storage, and calendar to handle the busywork for you.
            </p>
            <div className="hero-ctas">
              <a href={WAITLIST_URL} className="btn-primary btn-lg">
                Join the Waitlist
                <PiArrowRightDuotone size={18} />
              </a>
            </div>
            <p className="hero-footnote">Coming soon · Be first to access</p>

            <div className="hero-3d-wrap">
              <Image
                src={`${BASE}/logo3d.png`}
                alt="Synced 3D Logo"
                width={360}
                height={360}
                priority
                className="hero-3d-img"
              />
            </div>
          </div>
        </section>

        {/* Screenshot */}
        <section className="screenshot-section">
          <div className="container">
            <a href={WAITLIST_URL} className="screenshot-wrap">
              <Image
                src={`${BASE}/demo-light.png`}
                alt="Synced app dashboard"
                width={1200}
                height={720}
                priority
                className="w-full h-auto block"
              />

            </a>
          </div>
        </section>

        {/* Integrations strip */}
        <section id="integrations" className="agency-section">
          <div className="container">
            <p className="uppercase-label">Connects to your favorite tools</p>
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
        <section id="features" className="features-section">
          <div className="container">
            <div className="section-header">
              <div className="uppercase-label">How Synced works</div>
              <h2 className="section-heading">
                Email as easy as<br />texting.
              </h2>
              <p className="section-sub">
                Synced learns what you need, finds the information, drafts responses, and manages follow-ups — all while asking for input only when it matters.
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
        <section id="team" className="team-section">
          <div className="container">
            <div className="section-header">
              <div className="uppercase-label">The team</div>
              <h2 className="section-heading">
                Built by people who know<br />the pain of inbox overload.
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
              Make your inbox<br />work for you.
            </h2>
            <p className="cta-sub">Join thousands ready to reclaim their time. Synced handles the busywork — you focus on what matters.</p>
            <a href={WAITLIST_URL} className="btn-primary btn-lg">
              Join the Waitlist
              <PiArrowRightDuotone size={18} />
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <a href={`${BASE}/`} aria-label="Synced home" className="nav-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BASE}/icon-light.png`} alt="" width={20} height={20} className="nav-icon" />
            <LogoText small />
          </a>
          <nav className="footer-links">
            <a href={WAITLIST_URL} className="footer-link">Join Waitlist</a>
            <a href={`${BASE}/privacy`} className="footer-link">Privacy</a>
            <a href={`${BASE}/terms`} className="footer-link">Terms</a>
          </nav>
          <span className="footer-copy">© 2026 Synced.it</span>
        </div>
      </footer>

      <style>{`

        .container {
          width: 100%;
          max-width: 1120px;
          margin-inline: auto;
          padding-inline: clamp(1rem, 5vw, 2rem);
        }

        /* ── Premium Interactive Background & Grids ── */
        .bg-container {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .bg-grid-base {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(hsl(248 30% 70% / 0.12) 1.2px, transparent 1.2px);
          background-size: 32px 32px;
          pointer-events: none;
          z-index: 0;
        }

        .bg-grid-glow {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(hsl(var(--primary)) 1.2px, transparent 1.2px);
          background-size: 32px 32px;
          mask-image: radial-gradient(300px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), black 0%, transparent 100%);
          -webkit-mask-image: radial-gradient(300px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), black 0%, transparent 100%);
          pointer-events: none;
          z-index: 1;
          opacity: 0.65;
          transition: opacity 0.5s ease;
          will-change: mask-image, -webkit-mask-image;
        }

        .cursor-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, hsl(var(--primary) / 0.055) 0%, transparent 70%);
          transform: translate3d(calc(var(--mouse-x, -999px) - 400px), calc(var(--mouse-y, -999px) - 400px), 0);
          pointer-events: none;
          z-index: 0;
          will-change: transform;
        }

        /* Ambient Animated Blobs */
        .ambient-blob-1 {
          position: absolute;
          top: 10%;
          left: 5%;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, hsl(248 89% 65% / 0.12) 0%, transparent 70%);
          filter: blur(40px);
          pointer-events: none;
          z-index: 0;
          animation: drift-slow 25s infinite alternate ease-in-out;
        }
        .ambient-blob-2 {
          position: fixed;
          bottom: 15%;
          right: 5%;
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, hsl(280 80% 65% / 0.08) 0%, transparent 70%);
          filter: blur(50px);
          pointer-events: none;
          z-index: 0;
          animation: drift-slower 35s infinite alternate-reverse ease-in-out;
        }
        .ambient-blob-3 {
          position: fixed;
          top: 45%;
          left: 55%;
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, hsl(220 80% 65% / 0.07) 0%, transparent 70%);
          filter: blur(45px);
          pointer-events: none;
          z-index: 0;
          animation: drift-rotate 30s infinite linear;
        }

        @keyframes drift-slow {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(80px, -60px) scale(1.15); }
          100% { transform: translate(-60px, 80px) scale(0.9); }
        }
        @keyframes drift-slower {
          0% { transform: translate(0, 0) scale(0.95); }
          50% { transform: translate(-70px, 80px) scale(1.1); }
          100% { transform: translate(60px, -60px) scale(1); }
        }
        @keyframes drift-rotate {
          0% { transform: rotate(0deg) translate(40px) rotate(0deg); }
          100% { transform: rotate(360deg) translate(40px) rotate(-360deg); }
        }

        main, nav, footer { position: relative; z-index: 2; }

        /* ── Glassmorphic & Reactive Cards ── */
        .feature-card,
        .pricing-card,
        .team-card {
          position: relative;
          overflow: hidden;
          background: color-mix(in srgb, hsl(var(--card)) 65%, transparent);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid hsl(var(--border) / 0.6);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.015);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                      border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                      box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        .feature-card:hover,
        .pricing-card:hover,
        .team-card:hover {
          transform: translateY(-4px);
          background: color-mix(in srgb, hsl(var(--card)) 85%, transparent);
          border-color: hsl(var(--primary) / 0.35);
          box-shadow: 
            0 12px 30px -10px hsl(248 89% 65% / 0.08),
            0 1px 1px hsl(var(--primary) / 0.05);
        }

        /* Border glow indicator */
        .feature-card::before,
        .pricing-card::before,
        .team-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(240px circle at var(--card-mouse-x, -999px) var(--card-mouse-y, -999px), hsl(var(--primary) / 0.08), transparent 80%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: 0;
        }

        .feature-card:hover::before,
        .pricing-card:hover::before,
        .team-card:hover::before {
          opacity: 1;
        }

        /* Ensure card contents stay on top of the relative glow */
        .feature-card > *,
        .pricing-card > *,
        .team-card > * {
          position: relative;
          z-index: 1;
        }

        /* ── Nav ── */
        .synced-nav {
          position: fixed;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 100%;
          z-index: 100;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid transparent;
          background: transparent;
          padding-top: 1rem;
          padding-bottom: 0.35rem;
        }
        .synced-nav.scrolled {
          top: 1rem;
          width: calc(100% - 2rem);
          max-width: 1120px;
          background: color-mix(in srgb, hsl(var(--card)) 65%, transparent);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-color: hsl(var(--border) / 0.6);
          border-radius: 14px;
          padding-top: 0.35rem;
          padding-bottom: 0.35rem;
          box-shadow: 
            0 12px 30px -10px rgba(0,0,0,.05),
            0 1px 1px hsl(var(--primary) / 0.02);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 48px;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
        }
        .nav-icon { border-radius: 6px; display: block; }
        .nav-inner {
          gap: 2rem;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          margin-right: auto;
          margin-left: 2rem;
        }
        .nav-link {
          font-size: 0.875rem;
          font-weight: 500;
          color: hsl(var(--muted-fg));
          text-decoration: none;
          padding-bottom: 2px;
          position: relative;
          transition: color .2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: hsl(var(--primary));
          border-radius: 1px;
          transition: width .25s ease;
        }
        .nav-link:hover {
          color: hsl(var(--fg));
        }
        .nav-link:hover::after {
          width: 100%;
        }
        @media (max-width: 640px) {
          .nav-links { display: none; }
        }

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

        .btn-sm {
          height: 2.25rem;
          padding: 0 1rem;
          font-size: 0.8125rem;
          border-radius: var(--radius);
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
        .hero-3d-wrap {
          display: none;
          margin-right: 2em;
        }
        @media (min-width: 1024px) {
          .hero-3d-wrap {
            display: block;
            position: absolute;
            top: 45%;
            right: -20px;
            transform: translateY(-50%);
            width: 320px;
            height: 320px;
            pointer-events: none;
            z-index: 10;
            animation: float-3d 6s ease-in-out infinite;
          }
          .hero-3d-img {
            width: 100%;
            height: auto;
            display: block;
            filter: drop-shadow(0 25px 50px rgba(68, 41, 242, 0.12));
          }
        }
        @keyframes float-3d {
          0% {
            transform: translateY(-50%) translate3d(0, 0px, 0) rotate(0deg);
          }
          50% {
            transform: translateY(-50%) translate3d(0, -15px, 0) rotate(2.5deg);
          }
          100% {
            transform: translateY(-50%) translate3d(0, 0px, 0) rotate(0deg);
          }
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
          display: block;
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid hsl(var(--border));
          box-shadow:
            0 0 0 1px hsl(var(--border) / .5),
            0 24px 80px -16px rgba(68,41,242,.15);
          line-height: 0;
          cursor: url('${BASE}/icon-cursor.png') 16 16, pointer;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), 
                      border-color 0.5s cubic-bezier(0.16, 1, 0.3, 1), 
                      box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .screenshot-wrap:hover {
          transform: translateY(-4px);
          border-color: hsl(var(--primary) / 0.3);
          box-shadow:
            0 0 0 1px hsl(var(--primary) / 0.1),
            0 32px 90px -12px rgba(68,41,242,.24);
        }
        .screenshot-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(600px circle at var(--card-mouse-x, -999px) var(--card-mouse-y, -999px), hsl(var(--primary) / 0.08), transparent 80%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: 10;
        }
        .screenshot-wrap:hover::before {
          opacity: 1;
        }
        .screenshot-wrap > * {
          position: relative;
          z-index: 1;
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
          padding: 1.75rem;
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
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }
        .team-card-top {
          display: flex;
          align-items: center;
          gap: 0.875rem;
        }
        .team-photo {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center top;
          border: 2px solid hsl(var(--border));
          flex-shrink: 0;
          cursor: url('${BASE}/icon-cursor.png') 16 16, pointer;
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

        /* ── Pricing ── */
        .pricing-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        @media (max-width: 640px) {
          .pricing-grid { grid-template-columns: 1fr; }
        }
        .pricing-card {
          border-radius: 14px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .pricing-card-featured {
          border-color: hsl(var(--primary) / 0.4);
          background: color-mix(in srgb, hsl(var(--card)) 75%, transparent);
        }
        .pricing-card-featured:hover {
          border-color: hsl(var(--primary) / 0.6);
          box-shadow: 
            0 16px 40px -12px rgba(68,41,242,.2),
            0 1px 2px hsl(var(--primary) / 0.1);
        }
        .pricing-card-featured::before {
          background: radial-gradient(240px circle at var(--card-mouse-x, -999px) var(--card-mouse-y, -999px), hsl(var(--primary) / 0.15), transparent 80%);
        }
        .pricing-card-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .pricing-icon {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: hsl(var(--primary) / .1);
          border-radius: 12px;
          color: hsl(var(--primary));
          flex-shrink: 0;
        }
        .pricing-icon-featured {
          background: hsl(var(--primary) / .15);
        }
        .pricing-title {
          font-family: "p22-mackinac-pro", serif;
          font-size: 1.35rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: hsl(var(--fg));
          margin-bottom: 0.3rem;
        }
        .pricing-sub {
          font-size: 0.875rem;
          color: hsl(var(--muted-fg));
          line-height: 1.6;
        }
        .pricing-features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          flex: 1;
        }
        .pricing-features li {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.875rem;
          color: hsl(var(--fg));
        }
        .pricing-features li svg {
          color: hsl(var(--primary));
          flex-shrink: 0;
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
