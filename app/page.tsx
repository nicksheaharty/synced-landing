"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  PiCalendarDuotone,
  PiClockDuotone,
  PiScrollDuotone,
  PiPencilSimpleLineDuotone,
  PiPlugsConnectedDuotone,
  PiCursorClickDuotone,
  PiArrowRightDuotone,
  PiLinkedinLogoDuotone,
  PiInstagramLogoDuotone,
  PiEnvelopeSimpleDuotone,
  PiChatCircleDuotone,
  PiCheckBold,
  PiCaretDownBold,
} from "react-icons/pi";
import {
  SiGmail,
  SiGooglecalendar,
  SiSlack,
  SiGoogledrive,
  SiDropbox,
  SiNotion,
  SiWhatsapp,
} from "react-icons/si";
import { PiMicrosoftOutlookLogoDuotone } from "react-icons/pi";
import Header, { LogoText } from "./components/Header";

const WAITLIST_URL = "https://forms.gle/g64ZQ3Wy7hhp1M6X7";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const features = [
  {
    icon: PiScrollDuotone,
    title: "Find information instantly",
    body: "Synced searches your email, files, and cloud storage without you leaving the conversation, and pulls in whatever context it needs.",
  },
  {
    icon: PiPencilSimpleLineDuotone,
    title: "Draft replies and documents",
    body: "Synced drafts email replies and creates documents for you, ready to review and send the moment you approve.",
  },
  {
    icon: PiCalendarDuotone,
    title: "Coordinate schedules effortlessly",
    body: "Synced checks calendars, finds times that work, and proposes meetings, so you skip the back-and-forth.",
  },
  {
    icon: PiClockDuotone,
    title: "Manage follow-ups automatically",
    body: "Synced tracks commitments and follow-ups across your conversations, so nothing slips through the cracks.",
  },
  {
    icon: PiPlugsConnectedDuotone,
    title: "Connects to everything you use",
    body: "Email, messages, cloud storage, calendar, and more, all synced together so work gets done without switching apps.",
  },
  {
    icon: PiCursorClickDuotone,
    title: "Only asks when it matters",
    body: "Approve an email, pick a meeting time, confirm a detail, Synced lists exactly what needs you and handles the rest on its own.",
  },
];

const integrations = [
  { name: "Gmail", icon: SiGmail, color: "#EA4335" },
  { name: "Outlook", icon: PiMicrosoftOutlookLogoDuotone, color: "#0078D4" },
  { name: "Google Calendar", icon: SiGooglecalendar, color: "#4285F4" },
  { name: "Slack", icon: SiSlack, color: "#4A154B" },
  { name: "WhatsApp", icon: SiWhatsapp, color: "#25D366" },
  { name: "Google Drive", icon: SiGoogledrive, color: "#0F9D58" },
  { name: "Dropbox", icon: SiDropbox, color: "#0061FF" },
  { name: "Notion", icon: SiNotion, color: "#000000" },
];

const team = [
  {
    name: "Aum Dhruv",
    role: "Chief Executive Officer",
    bio: "ORFE at Princeton. Built TigerMeet.org, used across Princeton, Penn, UF, and Brandeis for 10,000+ meetings. Two internships at Amazon building AR hardware. Worked at the SEC.",
    photo: `${BASE}/aum.webp`,
    linkedin: "https://www.linkedin.com/in/aumdhruv/",
    instagram: "https://www.instagram.com/aum.dhruv/",
  },
  {
    name: "Nick Harty",
    role: "Chief Technology Officer",
    bio: "Engineering & Economics at Wharton. Shipped product inside regulated institutions. Raised $20k non-dilutive. Coordinated 400 congressional offices for the Congressional App Challenge.",
    photo: `${BASE}/nick.webp`,
    linkedin: "https://www.linkedin.com/in/nicksheaharty/",
    instagram: "https://www.instagram.com/nicksheaharty/",
  },
];

const APP_COLORS = {
  primary: "#4429F2",
  background: "#EDEAF8",
  surface: "#000000",
  card: "#FFFFFF",
  cardBorder: "rgba(0, 0, 0, 0.08)",
  bubbleIn: "#E5E5EA",
  muted: "rgba(0, 0, 0, 0.4)",
  separator: "rgba(0, 0, 0, 0.1)",
  actionBg: "rgba(68, 41, 242, 0.10)",
};
const BUBBLE_BLUE = "#007AFF";
const SOURCE_COLORS: Record<string, string> = { gmail: "#EA4335", imessage: "#30D158" };
const SOURCE_ICON: Record<string, typeof PiEnvelopeSimpleDuotone> = {
  gmail: PiEnvelopeSimpleDuotone,
  imessage: PiChatCircleDuotone,
};
const SOURCE_LABEL: Record<string, string> = { gmail: "Gmail", imessage: "iMessage" };

const BOSS_CARD = {
  id: "boss",
  name: "Gary (your boss)",
  source: "gmail" as const,
  time: "11:58 PM",
  inbound: "quick thing before tomorrow's 8am, need this \"ASAP\" 🙏🙏🙏",
  tasksTotal: 4,
  tasks: [
    "Decode what \"quick thing\" actually means",
    "Rebuild the deck Gary deleted by accident",
    "Pretend the 11:58 PM email was totally normal",
    "Draft a reply that hides how annoyed you are",
  ],
  fileOn: 1,
  file: "Deck_FINAL_v7_ForRealThisTime.pptx",
};

const IMESSAGE_THREAD = {
  id: "mom",
  name: "Mom",
  time: "Just now",
  messages: [
    { from: "them", text: "Thanksgiving's at our place this year, 3pm. Let me know if you're bringing a side!", source: "gmail" as const },
    { from: "me", text: "yep, added it to the calendar and told everyone to bring a side, no ambush green bean casserole this year" },
  ],
};

function IMessageThreadCard({ t }: { t: typeof IMESSAGE_THREAD }) {
  const c = APP_COLORS;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {t.messages.map((m, i) => {
        const outbound = m.from === "me";
        const SourceIcon = m.source ? SOURCE_ICON[m.source] : null;
        return (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: outbound ? "flex-end" : "flex-start", gap: 4 }}>
            {SourceIcon ? (
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 600, color: SOURCE_COLORS[m.source!] }}>
                <SourceIcon size={12} />
                {SOURCE_LABEL[m.source!]}
              </span>
            ) : null}
            <div
              style={{
                maxWidth: "85%",
                padding: "10px 14px",
                fontSize: 14,
                lineHeight: 1.45,
                background: outbound ? BUBBLE_BLUE : c.bubbleIn,
                color: outbound ? "#fff" : c.surface,
                borderRadius: 18,
                borderTopLeftRadius: outbound ? 18 : 4,
                borderTopRightRadius: outbound ? 4 : 18,
              }}
            >
              {m.text}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function AppMessageCard({ p }: { p: typeof BOSS_CARD }) {
  const [expanded, setExpanded] = useState(true);
  const c = APP_COLORS;
  const srcColor = SOURCE_COLORS[p.source];
  const SourceIcon = SOURCE_ICON[p.source];
  const { tasks, tasksTotal, inbound, fileOn, file } = p;

  return (
    <div className="app-message-card" style={{ background: c.card, border: `1px solid ${c.cardBorder}` }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 14px 12px" }}>
        <div style={{ width: 36, height: 36, borderRadius: 18, background: srcColor, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#fff", fontSize: 15, fontWeight: 700 }}>
          {p.name.charAt(0)}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: c.surface, marginBottom: 3 }}>{p.name}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 4, background: srcColor + "20", padding: "3px 7px", borderRadius: 6 }}>
              <SourceIcon size={12} style={{ color: srcColor }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: srcColor }}>{SOURCE_LABEL[p.source]}</span>
            </span>
            <span style={{ fontSize: 11, color: c.muted }}>{p.time}</span>
          </div>
        </div>
      </div>

      <div style={{ padding: "0 14px 14px" }}>
        <div
          style={{
            maxWidth: "85%",
            padding: "10px 14px",
            fontSize: 14,
            lineHeight: 1.45,
            background: c.bubbleIn,
            color: c.surface,
            borderRadius: 18,
            borderTopLeftRadius: 4,
          }}
        >
          {inbound}
        </div>
      </div>

      <div style={{ height: 1, background: c.separator, margin: "0 14px" }} />

      <div style={{ padding: "12px 14px 14px" }}>
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls="completed-tasks"
          onClick={() => setExpanded(!expanded)}
          style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between", cursor: "pointer", padding: 0, border: 0, background: "transparent" }}
        >
          <span style={{ fontSize: 13, fontWeight: 600, color: c.primary }}>
            {tasksTotal} Task{tasksTotal === 1 ? "" : "s"} Completed
          </span>
          <PiCaretDownBold size={14} style={{ color: c.primary, transform: expanded ? "rotate(180deg)" : "none", transition: "transform .2s" }} />
        </button>
        {expanded ? (
          <div id="completed-tasks" style={{ marginTop: 12 }}>
            {tasks.map((t, i) => (
              <div key={t} style={{ display: "flex", gap: 0, position: "relative", paddingBottom: i === tasks.length - 1 ? 0 : 16 }}>
                <div style={{ position: "relative", width: 22, flexShrink: 0 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 11, background: c.actionBg, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 2 }}>
                    <PiCheckBold size={11} style={{ color: c.primary }} />
                  </div>
                  {i < tasks.length - 1 ? (
                    <div style={{ position: "absolute", top: 22, bottom: -16, left: 10.5, width: 1.5, background: c.separator }} />
                  ) : null}
                </div>
                <div style={{ flex: 1, paddingLeft: 10 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: c.surface }}>{t}</div>
                  {i === fileOn ? (
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 4, marginTop: 6, background: "rgba(0,0,0,0.06)", padding: "4px 8px", borderRadius: 6 }}>
                      <span style={{ fontSize: 11, color: c.muted }}>{file}</span>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const bgContainer = document.querySelector(".bg-container") as HTMLElement;
    const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!supportsFinePointer.matches) return;

    let animationFrame = 0;
    let pointerX = -999;
    let pointerY = -999;
    const updatePointer = () => {
      bgContainer?.style.setProperty("--mouse-x", `${pointerX}px`);
      bgContainer?.style.setProperty("--mouse-y", `${pointerY}px`);
      animationFrame = 0;
    };
    const handleMouseMove = (e: PointerEvent) => {
      pointerX = e.clientX;
      pointerY = e.clientY;
      if (!animationFrame) animationFrame = requestAnimationFrame(updatePointer);
    };
    window.addEventListener("pointermove", handleMouseMove, { passive: true });

    const cards = document.querySelectorAll<HTMLElement>(".feature-card, .team-card");
    const handleCardMouseMove = (event: Event) => {
      const e = event as MouseEvent;
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--card-mouse-x", `${x}px`);
      card.style.setProperty("--card-mouse-y", `${y}px`);
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleCardMouseMove);
    });

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
      if (animationFrame) cancelAnimationFrame(animationFrame);
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleCardMouseMove);
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

      <Header />

      <main className="flex flex-col flex-1">

        {/* Hero */}
        <section className="hero-section">
          <div className="hero-glow" />
          <div className="container hero-container">
            <span className="eyebrow">Your AI Inbox Assistant</span>
            <h1 className="hero-title">
              <span className="hero-title-line">Turn your inbox into</span>
              <span className="hero-title-line hero-accent">completed work.</span>
            </h1>
            <p className="hero-sub">
              Stop copying emails into AI, digging through files, and coordinating schedules. Synced is an AI inbox assistant that connects to your email, messages, cloud storage, and calendar to handle the busywork for you.
            </p>
            <div className="hero-ctas">
              <a href={WAITLIST_URL} className="btn-primary btn-lg">
                Get Early Access
                <PiArrowRightDuotone size={18} />
              </a>
            </div>
            <p className="hero-footnote">Coming soon · Be first to access</p>

            <div className="hero-3d-wrap">
              <Image
                src={`${BASE}/logo3d.webp`}
                alt="Synced AI inbox assistant logo"
                width={720}
                height={683}
                priority
                sizes="(max-width: 640px) 78vw, 360px"
                className="hero-3d-img"
              />
            </div>
          </div>
        </section>

        {/* App showcase: a real MessageCard from the product, dropped into the marketing page */}
        <section className="app-showcase-section">
          <div className="container app-showcase-inner">
            <div className="app-showcase-copy">
              <div className="uppercase-label">Inside Synced</div>
              <h2 className="section-heading">
                Even your worst<br />senders get handled.
              </h2>
              <p className="section-sub">
                An 11:58 PM &quot;quick thing&quot; from your boss becomes a rebuilt deck and
                a diplomatic reply, before you&apos;ve even opened your laptop.
              </p>
            </div>
            <div className="app-showcase-card-wrap">
              <AppMessageCard p={BOSS_CARD} />
            </div>
          </div>
        </section>

        {/* Integrations strip */}
        <section id="integrations" className="agency-section">
          <div className="container">
            <p className="uppercase-label">Connects to your favorite tools</p>
            <div className="agency-badges">
              {integrations.map(({ name, icon: Icon, color }) => (
                <span key={name} className="agency-badge">
                  <Icon size={18} style={{ color, flexShrink: 0 }} />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="features-section">
          <div className="container">
            <div className="section-header features-header">
              <div className="section-header-copy">
                <div className="uppercase-label">How Synced works</div>
                <h2 className="section-heading">
                  Email as easy as<br />iMessage.
                </h2>
                <p className="section-sub">
                  Synced learns what you need, finds the information, drafts responses, and manages follow-ups, all while asking for input only when it matters.
                </p>
              </div>
              <div className="features-header-card">
                <IMessageThreadCard t={IMESSAGE_THREAD} />
              </div>
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
              {team.map(({ name, role, bio, photo, linkedin, instagram }) => (
                <div key={name} className="team-card">
                  <div className="team-card-top">
                    <Image src={photo} alt={name} width={52} height={52} sizes="52px" className="team-photo" />
                    <div className="team-info">
                      <div className="team-name">{name}</div>
                      <div className="team-role">{role}</div>
                    </div>
                    <div className="team-social-links">
                      <a href={linkedin} target="_blank" rel="noopener noreferrer" className="team-social-btn" aria-label={`${name} on LinkedIn`}>
                        <PiLinkedinLogoDuotone size={22} />
                      </a>
                      <a href={instagram} target="_blank" rel="noopener noreferrer" className="team-social-btn" aria-label={`${name} on Instagram`}>
                        <PiInstagramLogoDuotone size={22} />
                      </a>
                    </div>
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
            <p className="cta-sub">Join thousands ready to reclaim their time. Synced handles the busywork, you focus on what matters.</p>
            <a href={WAITLIST_URL} className="btn-primary btn-lg">
              Get Early Access
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
            <a href={WAITLIST_URL} className="footer-link">Get Early Access</a>
            <a href={`${BASE}/privacy`} className="footer-link">Privacy</a>
            <a href={`${BASE}/terms`} className="footer-link">Terms</a>
          </nav>
          <div className="footer-social-links">
            <a href="https://www.linkedin.com/company/syncedinbox/" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Synced on LinkedIn">
              <PiLinkedinLogoDuotone size={20} />
            </a>
            <a href="https://www.instagram.com/synced.it/" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Synced on Instagram">
              <PiInstagramLogoDuotone size={20} />
            </a>
          </div>
          <span className="footer-copy">© 2026 Synced</span>
        </div>
      </footer>

      <style>{`

        main, nav, footer { position: relative; z-index: 2; }

        /* ── Glassmorphic & Reactive Cards ── */
        .feature-card,
        .team-card {
          position: relative;
          overflow: hidden;
          background: color-mix(in srgb, hsl(var(--card)) 65%, transparent);
          -webkit-backdrop-filter: blur(12px);
          backdrop-filter: blur(12px);
          border: 1px solid hsl(var(--border) / 0.6);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.015);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                      border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                      box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        .feature-card:hover,
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
        .team-card:hover::before {
          opacity: 1;
        }

        /* Ensure card contents stay on top of the relative glow */
        .feature-card > *,
        .team-card > * {
          position: relative;
          z-index: 1;
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
        .hero-title {
          font-family: "p22-mackinac-pro", serif;
          font-size: clamp(2rem, 5.5vw, 3.5rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin-bottom: 1.5rem;
          color: hsl(var(--fg));
          max-width: 800px;
        }
        .hero-title-line {
          display: block;
          white-space: nowrap;
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

        /* ── App showcase ── */
        .app-showcase-section {
          padding: 5rem 0 2rem;
        }
        .app-showcase-inner {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 3rem;
        }
        .app-showcase-copy {
          max-width: 420px;
        }
        .app-showcase-card-wrap {
          width: 340px;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .app-showcase-card-wrap:hover {
          transform: translateY(-4px);
        }
        .app-message-card {
          border-radius: 20px;
          overflow: hidden;
          font-family: var(--font-sans, inherit);
          text-align: left;
          box-shadow:
            0 0 0 1px hsl(var(--border) / .5),
            0 24px 70px -20px rgba(68, 41, 242, 0.22);
        }
        @media (max-width: 900px) {
          .app-showcase-inner {
            grid-template-columns: 1fr;
            justify-items: center;
            text-align: center;
            gap: 2.5rem;
          }
          .app-showcase-copy {
            max-width: 480px;
          }
          .app-showcase-card-wrap {
            width: 100%;
            max-width: 380px;
          }
          .section-sub {
            margin-inline: auto;
          }
        }

        /* ── Agency strip ── */
        .agency-section {
          padding: 3rem 0;
          border-top: 1px solid hsl(var(--border));
          margin-top: 1.5rem;
          text-align: center;
        }
        .agency-section .uppercase-label { margin-bottom: 1.25rem; }
        .agency-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
        }
        .agency-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--card));
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: hsl(var(--muted-fg));
          transition: all 0.2s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        .agency-badge:hover {
          border-color: hsl(var(--primary) / 0.3);
          background: hsl(var(--primary) / 0.05);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(68, 41, 242, 0.1);
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
        .features-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
        }
        .section-header-copy { flex: 1; min-width: 0; }
        .features-header-card {
          width: 300px;
          flex-shrink: 0;
        }
        @media (max-width: 900px) {
          .features-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .features-header-card {
            width: 100%;
            max-width: 360px;
          }
        }
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
        .team-social-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
          margin-left: auto;
        }
        .team-social-btn {
          color: hsl(var(--primary));
          opacity: 0.7;
          transition: opacity .15s, transform .15s;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .team-social-btn:hover { opacity: 1; transform: scale(1.1); }
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
        .footer-social-links {
          display: flex;
          gap: 0.75rem;
        }
        .footer-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          color: hsl(var(--muted-fg));
          opacity: 0.85;
          transition: opacity .15s, color .15s;
        }
        .footer-social-btn:hover { opacity: 1; color: hsl(var(--fg)); }

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
