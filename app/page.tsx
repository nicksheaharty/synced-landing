"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import {
  PiCheckBold,
  PiLockKeyDuotone,
  PiBugBeetleDuotone,
  PiBrainDuotone,
  PiArrowsLeftRightDuotone,
} from "react-icons/pi";
import Header from "./components/Header";
import { ConnectorGlyph } from "./components/ConnectorIcon";
import Footer from "./components/Footer";
import { Button } from "./components/ui/Button";
import { CtaSection } from "./components/ui/CtaSection";
import { PricingCards } from "./components/ui/PricingCards";
import { BASE, WAITLIST_URL } from "./components/ui/links";
import { Grainient } from "./components/ui/lazy-bits";
import { LogoLoop, type LogoItem } from "./components/reactbits/LogoLoop/LogoLoop";
import SpotlightCard from "./components/reactbits/SpotlightCard/SpotlightCard";
import "./home.css";


/* ── data ─────────────────────────────────────────────────────────── */

const STATS = [
  { value: 70, suffix: "%+", label: "of sent messages go through Synced" },
  { value: 11000, suffix: "+", label: "tasks completed" },
];

const PINGS: [string, string, string][] = [
  ["Gary Chen", "gmail", "need the board deck back ASAP"],
  ["Dana · Brightline", "gmail", "Does 3pm Tuesday work for Nick?"],
  ["Jordan Blake", "outlook", "Could you send the signed MSA?"],
  ["Alex Rivera", "slack", "can Nick still make Thursday?"],
  ["Lena Fischer", "teams", "Q4 numbers attached"],
  ["Finance", "outlook", "Invoice #4471 is overdue"],
  ["Sam Okafor", "gmail", "Would Thursday at 2pm still work?"],
  ["Chris Lee", "slack", "quick q on the deck"],
];

const TOOLS = [
  { name: "Gmail", brand: "gmail", slug: "gmail" },
  { name: "Outlook", brand: "outlook", slug: "outlook" },
  { name: "Slack", brand: "slack", slug: "slack" },
  { name: "Microsoft Teams", brand: "teams", slug: "microsoft-teams" },
  { name: "Google Calendar", brand: "calendar", slug: "google-calendar" },
  { name: "Google Drive", brand: "drive", slug: "google-drive" },
  { name: "OneDrive", brand: "onedrive", slug: "onedrive" },
  { name: "SMS", brand: "sms", slug: "sms" },
  { name: "WhatsApp Business", brand: "whatsapp", slug: "whatsapp-business" },
  { name: "Messenger", brand: "messenger", slug: "messenger" },
  { name: "Instagram Business", brand: "instagram", slug: "instagram-business" },
  { name: "GroupMe", brand: "groupme", slug: "groupme" },
];
const TOOL_LOGOS: LogoItem[] = TOOLS.map((t) => ({
  node: (
    <span className="int-tile">
      <span className="int-icon"><ConnectorGlyph brand={t.brand} size={30} /></span>
      <span className="int-name">{t.name}</span>
    </span>
  ),
  href: `${BASE}/integrations/${t.slug}`,
  title: t.name,
}));



/* ── motion helpers ───────────────────────────────────────────────── */

function Reveal({ children, className = "", as: Tag = "div" }: { children: ReactNode; className?: string; delay?: number; as?: "div" | "section" | "li" | "article" }) {
  return <Tag className={className || undefined}>{children}</Tag>;
}

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  return <span>{to.toLocaleString("en-US")}{suffix}</span>;
}

/* ── hero phone ───────────────────────────────────────────────────── */

function HeroPhone() {
  const wrap = useRef<HTMLDivElement>(null);
  // The poster paints first; the video loads once the page has finished loading
  // so it never competes with first paint. Reduced motion keeps the still poster.
  const [playVideo, setPlayVideo] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = () => setTimeout(() => setPlayVideo(true), 300);
    if (document.readyState === "complete") { start(); return; }
    window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  // Gentle pointer parallax on desktop; the base angle lives in CSS.
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || still) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        el.style.setProperty("--px", x.toFixed(3));
        el.style.setProperty("--py", y.toFixed(3));
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => { window.removeEventListener("pointermove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className="hero-phone-stage" ref={wrap} aria-hidden="true">
      <div className="hero-phone-glow" />
      <div className="hero-phone">
        <div className="hero-phone-screen">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero-phone-poster" src={`${BASE}/hero-swipe-poster.webp`} alt="" width={786} height={1704} fetchPriority="high" decoding="async" />
          {playVideo ? (
            <video autoPlay muted loop playsInline preload="auto" onPlaying={(e) => e.currentTarget.classList.add("is-playing")}>
              <source src={`${BASE}/hero-swipe.webm`} type="video/webm" />
              <source src={`${BASE}/hero-swipe.mp4`} type="video/mp4" />
            </video>
          ) : null}
          <div className="hero-phone-glare" />
        </div>
        <span className="hero-phone-btn hero-phone-btn-a" />
        <span className="hero-phone-btn hero-phone-btn-b" />
        <span className="hero-phone-btn hero-phone-btn-c" />
      </div>
      <div className="hero-phone-shadow" />
    </div>
  );
}

/* ── section visuals ──────────────────────────────────────────────── */

function ReadsVisual() {
  const rows = [...PINGS, ...PINGS];
  return (
    <div className="viz viz-reads">
      <div className="viz-reads-track">
        {rows.map(([name, src, text], i) => (
          <div className="ping" key={i}>
            <ConnectorGlyph brand={src} size={18} />
            <span className="ping-name">{name}</span>
            <span className="ping-text">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PreparesVisual() {
  const steps = [
    "Tue 3:00 is open",
    "Dana's side is free",
    "Attached the intro deck",
    "Drafted in Nick's voice",
  ];
  return (
    <div className="viz viz-prepares">
      <div className="prep-msg">
        <ConnectorGlyph brand="gmail" size={16} />
        <span><strong>Dana · Brightline</strong> Does 3pm Tuesday work for Nick?</span>
      </div>
      <ul className="prep-steps">
        {steps.map((s, i) => (
          <li key={s} style={{ "--i": i } as CSSProperties}>
            <span className="prep-check"><PiCheckBold size={10} /></span>
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SwipeVisual() {
  return (
    <div className="viz viz-swipe">
      <div className="mini-card mini-card-back">
        <div className="mini-head"><span className="mini-av">GC</span><span>Gary Chen</span></div>
        <div className="mini-line" /><div className="mini-line short" />
      </div>
      <div className="mini-card mini-card-top">
        <div className="mini-head"><span className="mini-av">DB</span><span>Dana · Brightline</span></div>
        <p className="mini-q">Book Tue 3:00 with Dana?</p>
        <div className="mini-btns"><span>Not now</span><span className="is-primary">Send</span></div>
      </div>
      <div className="swipe-label swipe-label-skip">Skip</div>
      <div className="swipe-label swipe-label-send"><PiCheckBold size={12} /> Sent</div>
    </div>
  );
}

function LearnsVisual() {
  return (
    <div className="learn-stage">
      <div className="learn-draft">
        <div className="learn-draft-head">
          <span className="mini-av">GC</span>
          <div>
            <div className="learn-to">Re: board deck</div>
            <div className="learn-sub">Draft for Gary Chen</div>
          </div>
        </div>
        <p className="learn-body">
          <span className="edit"><s>Hi Gary, I hope this finds you well!</s><ins>Gary —</ins></span>
          {" "}Rebuilt the deck from v7 and restored the revenue slides. Updated version attached.
          <br />
          <span className="edit edit-2"><s>Best regards, Nick Harty</s><ins>— N</ins></span>
        </p>
        <div className="learn-toast">Learned: signs off “N”</div>
      </div>
    </div>
  );
}


/* ── page ─────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Header />

      <div className="page-sheet">
        <main className="flex flex-col flex-1">

          {/* Hero */}
          <section className="hero">
            <div className="hero-bg" aria-hidden="true">
              <Grainient
                intro={false}
                dpr={1}
                colors={["#F7F5FF", "#DCD4FF", "#9C8BFF", "#5B43F5"]}
                angle={115}
                speed={0.35}
                flow={0.6}
                softness={1}
                silk={0.25}
                grainAmount={0.07}
                interactive={false}
                clickSwirl={false}
              />
            </div>
            <div className="container hero-grid">
              <div className="hero-copy">
                <h1 className="hero-title">
                  <span className="hero-line">Your inbox</span>
                  <span className="hero-line hero-accent">on autopilot.</span>
                </h1>
                <p className="hero-sub">
                  Synced reads every message for you and the people you support, books the meetings and writes the replies. You approve each one with a tap.
                </p>
                <div className="hero-ctas">
                  <Button href={WAITLIST_URL} size="lg" arrow>Get Early Access</Button>
                  <Button href={`${BASE}/how-it-works`} variant="secondary" size="lg">See how it works</Button>
                </div>
                <p className="hero-footnote">For executive assistants · Private beta on iOS</p>
              </div>
              <HeroPhone />
            </div>
          </section>

          {/* Proof */}
          <section className="proof" aria-label="Beta results">
            <div className="container">
              <dl className="proof-grid">
                {STATS.map((s, i) => (
                  <Reveal key={s.label} delay={i * 80} className="proof-item">
                    <dt className="proof-num"><CountUp to={s.value} suffix={s.suffix} /></dt>
                    <dd className="proof-label">{s.label}</dd>
                  </Reveal>
                ))}
              </dl>
            </div>
          </section>

          {/* How it works */}
          <section className="block" id="how">
            <div className="container">
              <Reveal className="block-head">
                <h2 className="block-title">95% of the work, done<br />before you open the inbox.</h2>
              </Reveal>
              <div className="steps">
                <Reveal className="step" delay={0}>
                  <ReadsVisual />
                  <p className="step-cap"><strong>Reads everything.</strong> Email, Slack, Teams and texts for everyone you support.</p>
                </Reveal>
                <Reveal className="step" delay={120}>
                  <PreparesVisual />
                  <p className="step-cap"><strong>Does the work.</strong> Finds a time that&apos;s open for everyone, attaches the right file, writes the reply.</p>
                </Reveal>
                <Reveal className="step" delay={240}>
                  <SwipeVisual />
                  <p className="step-cap"><strong>You sign off.</strong> Tap to send. Swipe to skip.</p>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Built for assistants */}
          <section className="dark-band">
            <div className="dark-beams" aria-hidden="true" />
            <div className="container dark-single">
              <Reveal className="dark-copy">
                <h2 className="block-title light">Built for assistants.</h2>
                <p className="block-sub light">Cover several executives from one queue. When the assistant on the other side uses Synced too, meetings get booked without the back-and-forth.</p>
              </Reveal>
            </div>
          </section>

          {/* Learns you */}
          <section className="block">
            <div className="container">
              <Reveal className="block-head center">
                <h2 className="block-title one-line">Gets better every time you edit a draft.</h2>
                <p className="block-sub">Synced picks up how your executive writes, who matters to them and when they like to meet.</p>
              </Reveal>
              <div className="learn-wrap"><LearnsVisual /></div>
            </div>
          </section>

          {/* Gmail / Outlook + integrations */}
          <section className="block block-tint" id="integrations">
            <div className="container">
              <Reveal className="block-head center">
                <h2 className="block-title">Keep Gmail and Outlook.</h2>
                <p className="block-sub">Synced connects to the accounts you already have. Replies go out from the real address and land in Sent.</p>
              </Reveal>
              <Reveal className="int-loop">
                <LogoLoop intro={false} logos={TOOL_LOGOS} speed={42} logoHeight={110} gap={20} pauseOnHover fadeOut fadeOutColor="#F6F4FD" ariaLabel="Integrations" />
              </Reveal>
              <p className="int-more">
                Dropbox, Notion and GitHub are on the way. <a href={`${BASE}/integrations`} className="text-link">See all integrations</a>
              </p>
            </div>
          </section>

          {/* Security */}
          <section className="block" id="security">
            <div className="container sec-grid">
              <Reveal className="sec-copy">
                <h2 className="block-title">Private by default.</h2>
                <p className="block-sub">You&apos;re trusted with someone else&apos;s email. Synced treats it that way.</p>
              </Reveal>
              <div className="sec-cards">
                <Reveal delay={0}>
                  <SpotlightCard className="sec-card" theme="light" spotlightColor="rgba(68, 41, 242, 0.22)" spotlightSize={280} borderGlow={0.8}>
                  <PiBrainDuotone size={22} />
                  <strong>Your mail never trains AI</strong>
                  <span>We don&apos;t use Google Workspace data to train AI models.</span>
                </SpotlightCard>
                </Reveal>
                <Reveal delay={80}>
                  <SpotlightCard className="sec-card" theme="light" spotlightColor="rgba(68, 41, 242, 0.22)" spotlightSize={280} borderGlow={0.8}>
                  <PiLockKeyDuotone size={22} />
                  <strong>Encrypted in transit and at rest</strong>
                  <span>Sign-in tokens and stored data are encrypted. Access is limited to running the service.</span>
                </SpotlightCard>
                </Reveal>
                <Reveal delay={160}>
                  <SpotlightCard className="sec-card" theme="light" spotlightColor="rgba(68, 41, 242, 0.22)" spotlightSize={280} borderGlow={0.8}>
                  <PiBugBeetleDuotone size={22} />
                  <strong>Tested against prompt injection</strong>
                  <span>Emails can hide instructions meant for AI. We test every change to Synced&apos;s agents against attacks like that.</span>
                </SpotlightCard>
                </Reveal>
                <Reveal delay={240}>
                  <SpotlightCard className="sec-card" theme="light" spotlightColor="rgba(68, 41, 242, 0.22)" spotlightSize={280} borderGlow={0.8}>
                  <PiArrowsLeftRightDuotone size={22} />
                  <strong>Leave whenever you want</strong>
                  <span>Disconnect an account or delete your data at any time.</span>
                </SpotlightCard>
                </Reveal>
              </div>
            </div>
            <div className="container">
              <p className="sec-foot">
                SOC 2 audit in progress · <a href={`${BASE}/security`} className="text-link">Security details</a>
              </p>
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="block block-tint">
            <div className="container">
              <Reveal className="block-head center">
                <h2 className="block-title">Start free. Upgrade when you need more.</h2>
              </Reveal>
              <PricingCards />
              <p className="plan-foot">
                <a href={`${BASE}/pricing`} className="text-link">Compare plans</a>
                {" · "}
                <a href={`${BASE}/glossary/action-plan`} className="text-link">What counts as an Action Plan</a>
              </p>
            </div>
          </section>

          {/* CTA */}
          <CtaSection />

        </main>

        <Footer />
      </div>
    </>
  );
}
