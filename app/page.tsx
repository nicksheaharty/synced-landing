"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties } from "react";
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
  PiCalendar,
  PiChatCircle,
  PiCloud,
  PiDropboxLogo,
  PiGithubLogo,
  PiGoogleDriveLogo,
  PiMicrosoftOutlookLogo,
  PiMicrosoftTeamsLogo,
  PiSlackLogo,
  PiWhatsappLogo,
} from "react-icons/pi";
import {
  SiNotion,
  SiZoom,
} from "react-icons/si";
import Header from "./components/Header";
import Footer from "./components/Footer";

const WAITLIST_URL = "https://forms.gle/g64ZQ3Wy7hhp1M6X7";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function GmailIcon({ size = 24, style }: { size?: number; style?: CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true" style={style}>
      <path d="M54.5 17.4639C54.4999 16.2258 53.1364 15.6155 52.2373 16.294L52.2354 16.295L48.8613 18.8389L48.8604 18.8379L32.001 31.5635L15.1377 18.8418L15.1357 18.8408L11.7627 16.294L11.6768 16.2334C10.7794 15.6534 9.50006 16.2619 9.5 17.4639V48H13.5469V23.3701L32 37.2959L50.4531 23.3701V47.9981H54.5V17.4639ZM58.5 48.3633C58.5 50.3716 56.8831 51.998 54.8867 51.998H48.4531L48.249 51.9873C47.3077 51.8917 46.5594 51.1435 46.4639 50.2022L46.4531 49.998V31.3994L32 42.3076L17.5469 31.3994V50L17.5361 50.2041C17.4339 51.2127 16.5824 51.9998 15.5469 52H9.11328L8.93555 51.9951C8.52149 51.9747 8.11328 51.8826 7.72949 51.7227C7.34598 51.5627 6.99343 51.3375 6.68652 51.0576L6.55762 50.9346C6.26399 50.639 6.02375 50.295 5.84668 49.918L5.77441 49.7549C5.59298 49.3137 5.49971 48.8408 5.5 48.3633V17.4639C5.50006 12.9699 10.5988 10.404 14.1719 13.1006L32 26.5528L49.8281 13.1006C53.399 10.4063 58.4999 12.9699 58.5 17.4639V48.3633Z" fill="currentColor" />
      <path opacity="0.2" d="M59 48.3633V17.4639C59 12.9698 53.8987 10.4061 50.3279 13.1008L46.9535 15.6445L32.5 26.5523L18.0465 15.6489L14.6721 13.1008C11.099 10.4039 6 12.9698 6 17.4639V48.3633C5.99971 48.8408 6.09295 49.3136 6.27438 49.7549C6.45581 50.1961 6.72188 50.597 7.05739 50.9347C7.39291 51.2724 7.79128 51.5403 8.22975 51.7231C8.66823 51.9059 9.1382 52 9.61283 52H16.0465C17.151 52 18.0465 51.1046 18.0465 50V31.3997L32.5 42.3074L46.9535 31.3997V49.9978C46.9535 51.1023 47.849 51.9978 48.9535 51.9978H55.3872C57.3835 51.9978 59 50.3716 59 48.3633Z" fill="currentColor" />
    </svg>
  );
}

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
    title: "Turn messages into tasks",
    body: "Delegate work to Synced straight from a conversation, then follow its progress and review the finished result in one place.",
  },
  {
    icon: PiPlugsConnectedDuotone,
    title: "Connects to everything you use",
    body: "Email, messages, cloud storage, calendar, and more, all synced together so work gets done without switching apps.",
  },
  {
    icon: PiCursorClickDuotone,
    title: "Synced prompts you",
    body: "Instead of you prompting Synced, Synced comes to you with the decisions only you can make, then handles everything else.",
  },
];

const integrations = [
  { name: "Gmail", icon: GmailIcon, color: "#EA4335" },
  { name: "Outlook", icon: PiMicrosoftOutlookLogo, color: "#0078D4" },
  { name: "Slack", icon: PiSlackLogo, color: "#E01E5A" },
  { name: "Microsoft Teams", icon: PiMicrosoftTeamsLogo, color: "#6264A7" },
  { name: "WhatsApp Business", icon: PiWhatsappLogo, color: "#25D366" },
  { name: "Zoom", icon: SiZoom, color: "#2D8CFF" },
  { name: "iMessage", icon: PiChatCircle, color: "#30D158" },
  { name: "Google Drive", icon: PiGoogleDriveLogo, color: "#34A853" },
  { name: "OneDrive", icon: PiCloud, color: "#0078D4" },
  { name: "Dropbox", icon: PiDropboxLogo, color: "#0061FF" },
  { name: "Notion", icon: SiNotion, color: "#000000" },
  { name: "GitHub", icon: PiGithubLogo, color: "#000000" },
  { name: "Calendar", icon: PiCalendar, color: "#4285F4" },
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
          className="task-disclosure"
          style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between", cursor: "pointer", padding: 0, border: 0, background: "transparent" }}
        >
          <span style={{ fontSize: 13, fontWeight: 600, color: c.primary }}>
            {tasksTotal} Task{tasksTotal === 1 ? "" : "s"} Completed
          </span>
          <PiCaretDownBold size={14} style={{ color: c.primary, transform: expanded ? "rotate(180deg)" : "none", transition: "transform .2s" }} />
        </button>
        <div id="completed-tasks" className={`task-list${expanded ? " is-expanded" : ""}`} aria-hidden={!expanded}>
          <div className="task-list-inner" style={{ marginTop: 12 }}>
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
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="bg-container" aria-hidden="true" />

      <Header />

      <main className="flex flex-col flex-1">

        {/* Hero */}
        <section className="hero-section">
          <div className="hero-glow" />
          <div className="container hero-container">
            <span className="eyebrow">Your AI Inbox on Autopilot</span>
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
                Open your inbox.<br />Find work ready to approve.
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
                  <span className="integration-icon-wrap">
                    <Icon size={22} style={{ color, flexShrink: 0 }} />
                  </span>
                  <span className="integration-name">{name}</span>
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
                <div className="product-window message-window">
                  <div className="product-window-bar">
                    <span className="window-dot" />
                    <span className="window-dot" />
                    <span className="window-dot" />
                    <span className="window-title">Synced</span>
                  </div>
                  <div className="product-window-content">
                    <IMessageThreadCard t={IMESSAGE_THREAD} />
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-grid">
              {features.map(({ icon: Icon, title, body }) => (
                <article key={title} className="feature-card">
                  <div className="feature-icon-wrap">
                    <Icon size={22} />
                  </div>
                  <div className="feature-copy">
                    <h3 className="feature-title">{title}</h3>
                    <p className="feature-body">{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="pricing-section">
          <div className="container">
            <div className="section-header" style={{ textAlign: "center", marginInline: "auto" }}>
              <div className="uppercase-label">Pricing</div>
              <h2 className="section-heading">Simple pricing, no surprises.</h2>
              <p className="section-sub" style={{ marginInline: "auto" }}>
                Start free. Upgrade when Synced becomes part of how you work.
              </p>
            </div>
            <div className="pricing-grid pricing-grid-3">
              <div className="pricing-card">
                <div className="pricing-card-head">
                  <div className="pricing-plan-name">Free</div>
                  <div className="pricing-price">
                    <span className="pricing-amount">$0</span>
                    <span className="pricing-period">/user</span>
                  </div>
                  <p className="pricing-tagline">Try Synced on your main inbox.</p>
                </div>
                <ul className="pricing-features">
                  <li><PiCheckBold size={14} /> 20 Action Plans a week</li>
                  <li><PiCheckBold size={14} /> Unlimited Signals</li>
                  <li><PiCheckBold size={14} /> Gmail, Drive, OneDrive &amp; Calendar</li>
                  <li><PiCheckBold size={14} /> Decide queue &amp; Tasks</li>
                </ul>
                <a href={WAITLIST_URL} className="btn-ghost pricing-cta">Get Early Access</a>
              </div>
              <div className="pricing-card pricing-card-featured">
                <span className="pricing-badge">Most popular</span>
                <div className="pricing-card-head">
                  <div className="pricing-plan-name">Pro</div>
                  <div className="pricing-price">
                    <span className="pricing-amount">$29.99</span>
                    <span className="pricing-period">/user/month</span>
                  </div>
                  <p className="pricing-tagline">$24.99/user/month billed annually.</p>
                </div>
                <ul className="pricing-features">
                  <li><PiCheckBold size={14} /> 100 Action Plans a week</li>
                  <li><PiCheckBold size={14} /> Unlimited Signals</li>
                  <li><PiCheckBold size={14} /> All integrations (adds Notion, GitHub, Slack &amp; Teams)</li>
                  <li><PiCheckBold size={14} /> Decide queue &amp; Tasks</li>
                  <li><PiCheckBold size={14} /> Priority support</li>
                </ul>
                <a href={WAITLIST_URL} className="btn-primary pricing-cta">Get Early Access</a>
              </div>
              <div className="pricing-card">
                <div className="pricing-card-head">
                  <div className="pricing-plan-name">Enterprise</div>
                  <div className="pricing-price">
                    <span className="pricing-amount pricing-amount-sm">Contact us</span>
                  </div>
                  <p className="pricing-tagline">For teams and companies.</p>
                </div>
                <ul className="pricing-features">
                  <li><PiCheckBold size={14} /> Custom Action Plan limits</li>
                  <li><PiCheckBold size={14} /> SSO &amp; admin controls</li>
                  <li><PiCheckBold size={14} /> Security review &amp; custom contract</li>
                  <li><PiCheckBold size={14} /> Dedicated support</li>
                </ul>
                <a href="https://forms.gle/tP89zuGpCL1BsR6f6" target="_blank" rel="noopener noreferrer" className="btn-ghost pricing-cta">Contact Sales</a>
              </div>
            </div>
            <p className="pricing-footnote">
              An Action Plan is one message Synced reads and acts on, whether it finishes the
              task or hands it to you in Decide. <a href={`${BASE}/pricing`} className="text-link">See full pricing details</a>.
            </p>
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
          <div className="container">
            <div className="cta-inner">
              <div className="cta-copy-block">
                <div className="uppercase-label">Get started</div>
                <h2 className="cta-title">
                  Make your inbox<br />work for you.
                </h2>
                <p className="cta-sub">Join thousands ready to reclaim their time. Synced handles the busywork, you focus on what matters.</p>
              </div>
              <a href={WAITLIST_URL} className="btn-primary btn-lg">
                Get Early Access
                <PiArrowRightDuotone size={18} />
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />

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

        /* ── Pricing ── */
        .pricing-section {
          padding: 5rem 0;
          border-top: 1px solid hsl(var(--border));
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          max-width: 760px;
          margin-inline: auto;
        }
        .pricing-grid-3 {
          grid-template-columns: repeat(3, 1fr);
          max-width: 1040px;
        }
        .pricing-card {
          position: relative;
          background: hsl(var(--card));
          border: 1px solid hsl(var(--border));
          border-radius: 16px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }
        .pricing-card-featured {
          border-color: hsl(var(--primary) / .4);
          box-shadow: 0 16px 40px rgba(68, 41, 242, 0.12);
        }
        .pricing-badge {
          position: absolute;
          top: -0.7rem;
          left: 50%;
          transform: translateX(-50%);
          background: hsl(var(--primary));
          color: hsl(248 100% 98%);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 0.3rem 0.75rem;
          border-radius: 999px;
        }
        .pricing-card-head { margin-bottom: 1.5rem; }
        .pricing-plan-name {
          font-family: "p22-mackinac-pro", serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: hsl(var(--fg));
          margin-bottom: 0.5rem;
        }
        .pricing-price {
          display: flex;
          align-items: baseline;
          gap: 0.3rem;
        }
        .pricing-amount {
          font-family: "p22-mackinac-pro", serif;
          font-size: 2.5rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: hsl(var(--fg));
        }
        .pricing-amount-sm { font-size: 1.75rem; }
        .pricing-period {
          font-size: 0.9rem;
          color: hsl(var(--muted-fg));
        }
        .pricing-tagline {
          font-size: 0.82rem;
          color: hsl(var(--muted-fg));
          margin-top: 0.5rem;
        }
        .pricing-features {
          list-style: none;
          margin: 0 0 2rem;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex: 1;
        }
        .pricing-features li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: hsl(var(--fg));
          line-height: 1.45;
        }
        .pricing-features li svg {
          color: hsl(var(--primary));
          flex-shrink: 0;
          margin-top: 0.2rem;
        }
        .pricing-cta {
          width: 100%;
          justify-content: center;
        }
        .pricing-footnote {
          text-align: center;
          font-size: 0.8rem;
          color: hsl(var(--muted-fg));
          max-width: 560px;
          margin: 2rem auto 0;
          line-height: 1.6;
        }
        .text-link {
          color: hsl(var(--primary));
          text-decoration: underline;
          transition: opacity 0.2s;
        }
        .text-link:hover { opacity: 0.8; }

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


        /* ── Mobile ── */
        @media (max-width: 768px) {
          .hero-section { padding: 7rem 0 3rem; }

          .feature-grid {
            grid-template-columns: 1fr;
          }

          .cta-inner { align-items: flex-start; }
        }

        @media (max-width: 600px) {
          .feature-grid { grid-template-columns: 1fr; }
        }

        @media (min-width: 601px) and (max-width: 900px) {
          .feature-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* ── 2026 spatial system: quiet, product-led, and physically responsive ── */
        main, nav, footer { position: relative; z-index: 2; }

        .feature-card,
        .team-card {
          background: transparent;
          -webkit-backdrop-filter: none;
          backdrop-filter: none;
          border: 0;
          box-shadow: none;
          will-change: auto;
        }
        .feature-card:hover,
        .team-card:hover {
          transform: none;
          background: transparent;
          border-color: transparent;
          box-shadow: none;
        }
        .feature-card::before,
        .team-card::before { display: none; }

        .hero-section {
          min-height: min(860px, 92svh);
          display: flex;
          align-items: center;
          padding: 10rem 0 7rem;
          overflow: clip;
        }
        .hero-glow {
          top: -28rem;
          left: 50%;
          width: 80rem;
          height: 58rem;
          transform: translateX(-50%);
          background: radial-gradient(ellipse, hsl(var(--primary) / .095), transparent 66%);
        }
        .hero-container { padding-right: min(36vw, 24rem); }
        .eyebrow {
          padding: 0;
          margin-bottom: 1.35rem;
          border: 0;
          border-radius: 0;
          background: transparent;
          box-shadow: none;
          letter-spacing: .08em;
        }
        .hero-title {
          font-size: clamp(2.75rem, 5vw, 4.15rem);
          line-height: 1.03;
          letter-spacing: -.04em;
          max-width: 720px;
          margin-bottom: 1.75rem;
        }
        .hero-sub { max-width: 600px; font-size: clamp(1rem, 1.7vw, 1.16rem); line-height: 1.62; }
        .hero-footnote { opacity: .78; }
        .hero-3d-wrap { margin-right: 0; }
        @media (min-width: 1024px) {
          .hero-3d-wrap {
            top: 51%;
            right: clamp(1rem, 3vw, 2.5rem);
            width: clamp(270px, 29vw, 370px);
            height: auto;
            animation: none;
          }
          .hero-3d-img { filter: drop-shadow(0 28px 42px rgba(68, 41, 242, .13)); }
        }

        .app-showcase-section { padding: 7rem 0; }
        .app-showcase-inner { grid-template-columns: minmax(0, .85fr) minmax(380px, 1fr); gap: clamp(3rem, 8vw, 8rem); }
        .app-showcase-copy { max-width: 440px; }
        .app-showcase-card-wrap { width: 100%; max-width: 500px; transform: none; transition: none; }
        .app-showcase-card-wrap:hover { transform: none; }
        .product-window {
          overflow: hidden;
          border: 1px solid hsl(var(--card) / .88);
          border-radius: 26px;
          background: color-mix(in srgb, hsl(var(--card)) 72%, transparent);
          -webkit-backdrop-filter: blur(28px) saturate(150%);
          backdrop-filter: blur(28px) saturate(150%);
          box-shadow: 0 34px 80px rgba(35, 27, 72, .11), inset 0 1px 0 hsl(var(--card));
        }
        .product-window-bar {
          position: relative;
          display: flex;
          align-items: center;
          gap: 7px;
          height: 48px;
          padding: 0 18px;
          border-bottom: 1px solid hsl(var(--border) / .7);
        }
        .window-dot { width: 8px; height: 8px; border-radius: 50%; background: hsl(var(--muted-fg) / .28); }
        .window-title { position: absolute; inset-inline: 0; text-align: center; font-size: .76rem; font-weight: 700; color: hsl(var(--muted-fg)); }
        .product-window-content { padding: clamp(1rem, 3vw, 1.5rem); background: hsl(var(--muted) / .55); }
        .app-showcase-card-wrap .app-message-card {
          border-radius: 22px;
          box-shadow: 0 24px 64px rgba(35, 27, 72, .11), 0 0 0 1px hsl(var(--border) / .55);
        }
        .task-disclosure { min-height: 28px; border-radius: 8px !important; transition: background-color .18s ease, transform 80ms ease; }
        .task-disclosure:hover { background: hsl(var(--primary) / .055) !important; }
        .task-disclosure:active { transform: scale(.985); }
        .task-disclosure:focus-visible { outline: 3px solid hsl(var(--primary) / .24); outline-offset: 3px; }
        .task-list { display: grid; grid-template-rows: 0fr; opacity: 0; transition: grid-template-rows .4s cubic-bezier(.22, 1, .36, 1), opacity .2s ease; }
        .task-list.is-expanded { grid-template-rows: 1fr; opacity: 1; }
        .task-list-inner { min-height: 0; overflow: hidden; }

        .agency-section { padding: 5rem 0; margin: 0; border-top: 1px solid hsl(var(--border) / .75); border-bottom: 1px solid hsl(var(--border) / .75); }
        .agency-section .uppercase-label { margin-bottom: 1.75rem; }
        .agency-badges {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.1rem .8rem;
          max-width: 960px;
          margin-inline: auto;
        }
        .agency-badge {
          flex: 0 1 112px;
          min-width: 0;
          min-height: 92px;
          padding: .25rem;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: .65rem;
          border: 0;
          border-radius: 0;
          background: transparent;
          box-shadow: none;
          opacity: .8;
          transition: opacity .18s ease, transform 80ms ease;
        }
        .agency-badge:hover { background: transparent; box-shadow: none; transform: none; opacity: 1; }
        .agency-badge:active { transform: scale(.97); }
        .integration-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          flex: 0 0 52px;
          border: 1px solid hsl(var(--border) / .62);
          border-radius: 13px;
          background: hsl(var(--card));
          box-shadow: 0 5px 14px rgba(35, 27, 72, .07), inset 0 1px 0 hsl(var(--card));
          transition: transform .32s cubic-bezier(.22, 1, .36, 1), box-shadow .18s ease;
        }
        .integration-icon-wrap svg { width: 26px; height: 26px; }
        .agency-badge:hover .integration-icon-wrap { transform: scale(1.06); box-shadow: 0 8px 20px rgba(35, 27, 72, .1), inset 0 1px 0 hsl(var(--card)); }
        .integration-name {
          overflow: hidden;
          max-width: 100%;
          font-size: .74rem;
          line-height: 1.25;
          text-align: center;
          text-overflow: ellipsis;
        }

        .features-section { padding: 8rem 0; border-top: 0; }
        .pricing-section { padding: 6rem 0; border-top: 1px solid hsl(var(--border) / .75); }
        .team-section { padding: 8rem 0 4rem; border-top: 0; }
        .features-section { background: hsl(var(--card) / .46); }
        .features-header { align-items: flex-end; margin-bottom: 4rem; }
        .features-header-card { width: min(380px, 100%); }
        .message-window { border-radius: 24px; box-shadow: 0 22px 52px rgba(35, 27, 72, .09), inset 0 1px 0 hsl(var(--card)); }
        .message-window .product-window-bar { height: 44px; }
        .message-window .product-window-content { padding: 1.25rem; }
        .uppercase-label { letter-spacing: .08em; }
        .section-heading { font-size: clamp(2rem, 4.5vw, 3.25rem); line-height: 1.04; letter-spacing: -.035em; margin-bottom: 1rem; }
        .section-sub { line-height: 1.62; }
        .feature-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 0;
          overflow: hidden;
          border: 1px solid hsl(var(--border) / .85);
          border-radius: 24px;
          background: hsl(var(--card));
          box-shadow: 0 20px 55px rgba(35, 27, 72, .055);
        }
        .feature-card {
          display: flex;
          align-items: flex-start;
          gap: 1.1rem;
          padding: 2rem;
          border-bottom: 1px solid hsl(var(--border) / .75);
          transition: background-color .18s ease;
        }
        .feature-card:hover { background: hsl(var(--primary) / .035); }
        .feature-card:active { background: hsl(var(--primary) / .055); }
        .feature-card:nth-child(odd) { border-right: 1px solid hsl(var(--border) / .75); }
        .feature-card:nth-last-child(-n + 2) { border-bottom: 0; }
        .feature-icon-wrap {
          flex: 0 0 auto;
          margin: 0;
          border-radius: 12px;
          transition: transform .32s cubic-bezier(.22, 1, .36, 1), background-color .18s ease;
        }
        .feature-card:hover .feature-icon-wrap { transform: scale(1.06); background: hsl(var(--primary) / .14); }
        .feature-card:active .feature-icon-wrap { transform: scale(.96); transition-duration: 80ms; }
        .feature-copy { min-width: 0; }
        .feature-title { font-size: .95rem; margin-bottom: .45rem; }
        .feature-body { line-height: 1.58; }

        .team-section { border-top: 1px solid hsl(var(--border) / .7); }
        .team-grid { gap: 0; border-top: 1px solid hsl(var(--border)); border-bottom: 1px solid hsl(var(--border)); }
        .team-card { padding: 2rem 2rem 2rem 0; border-radius: 0; }
        .team-card + .team-card { padding-left: 2rem; border-left: 1px solid hsl(var(--border)); }
        .team-photo { border: 0; }
        .team-social-btn { min-width: 36px; min-height: 36px; justify-content: center; border-radius: 50%; transition: background-color .18s ease, opacity .18s ease, transform 80ms ease; }
        .team-social-btn:hover { transform: none; background: hsl(var(--primary) / .08); }
        .team-social-btn:active { transform: scale(.92); }

        .cta-section { padding: 4rem 0 8rem; border-top: 0; }
        .cta-inner {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: center;
          gap: clamp(2rem, 7vw, 6rem);
          text-align: left;
          padding: clamp(2.5rem, 5vw, 4rem);
          border: 1px solid hsl(var(--border) / .7);
          border-radius: 32px;
          background:
            radial-gradient(circle at 92% 15%, hsl(var(--primary) / .09), transparent 34%),
            hsl(var(--card) / .78);
          box-shadow: 0 24px 70px rgba(35, 27, 72, .06), inset 0 1px 0 hsl(var(--card));
        }
        .cta-copy-block { min-width: 0; }
        .cta-copy-block .uppercase-label { margin-bottom: .8rem; }
        .cta-title { font-size: clamp(2.25rem, 4.5vw, 3.6rem); }
        .cta-sub { max-width: 520px; margin-top: 1rem; }
        .cta-inner > .btn-primary { min-width: 190px; justify-content: center; }

        @media (max-width: 900px) {
          .hero-section { min-height: auto; }
          .hero-container { padding-right: clamp(1rem, 5vw, 2rem); }
          .app-showcase-inner { grid-template-columns: 1fr; }
          .features-header { align-items: flex-start; }
          .pricing-grid { grid-template-columns: 1fr; max-width: 380px; }
          .cta-inner { grid-template-columns: 1fr; justify-items: start; }
          .agency-badge { flex-basis: 104px; }
        }
        @media (max-width: 640px) {
          .hero-section { padding: 8.5rem 0 5rem; }
          .hero-title { font-size: clamp(2.5rem, 12.5vw, 3.7rem); }
          .hero-title-line { white-space: normal; }
          .hero-sub { line-height: 1.55; }
          .app-showcase-section, .features-section { padding: 5rem 0; }
          .agency-section { padding: 3.25rem 0; }
          .agency-section .uppercase-label { margin-bottom: 1.25rem; }
          .agency-badges { gap: .65rem .2rem; }
          .agency-badge { flex: 0 1 calc(33.333% - .2rem); min-height: 88px; padding: 0; gap: .45rem; }
          .integration-icon-wrap { width: 58px; height: 58px; flex-basis: 58px; border-radius: 15px; }
          .integration-icon-wrap svg { width: 30px; height: 30px; }
          .integration-name { font-size: .7rem; line-height: 1.15; }
          .pricing-section { padding: 3.5rem 0; }
          .pricing-card { padding: 1.5rem; }
          .team-section { padding: 5rem 0 2.5rem; }
          .cta-section { padding: 2rem 0 4rem; }
          .cta-section > .container { padding-inline: 1.5rem; }
          .product-window { border-radius: 22px; }
          .product-window-content { padding: .75rem; }
          .feature-grid { grid-template-columns: 1fr; border-radius: 20px; }
          .feature-card { padding: 1.4rem; border-right: 0 !important; border-bottom: 1px solid hsl(var(--border) / .75) !important; }
          .feature-card:last-child { border-bottom: 0 !important; }
          .team-grid { grid-template-columns: 1fr; }
          .team-card { padding: 1.5rem 0; }
          .team-card + .team-card { padding-left: 0; border-left: 0; border-top: 1px solid hsl(var(--border)); }
          .cta-inner {
            gap: 1.4rem;
            border-radius: 22px;
            padding: 1.75rem 1.25rem 1.25rem;
            background:
              radial-gradient(circle at 100% 0%, hsl(var(--primary) / .075), transparent 42%),
              hsl(var(--card) / .82);
          }
          .cta-copy-block .uppercase-label { margin-bottom: .55rem; font-size: .66rem; }
          .cta-title { font-size: clamp(1.9rem, 10vw, 2.45rem); line-height: 1.03; letter-spacing: -.035em; }
          .cta-sub { margin-top: .75rem; font-size: .92rem; line-height: 1.5; }
          .cta-inner > .btn-primary { width: 100%; min-width: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-3d-wrap, .app-showcase-card-wrap, .agency-badge { transform: none !important; }
          .task-list { transition: opacity .2s ease; }
        }
        @media (prefers-reduced-transparency: reduce) {
          .product-window, .synced-nav.scrolled { background: hsl(var(--card)); -webkit-backdrop-filter: none; backdrop-filter: none; }
        }
        @media (prefers-contrast: more) {
          .product-window, .feature-grid, .cta-inner, .features-header-card { border-color: hsl(var(--fg)); }
        }
      `}</style>
    </>
  );
}
