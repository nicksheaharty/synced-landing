import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  PiCheckCircleDuotone,
  PiHandTapDuotone,
  PiLockKeyDuotone,
  PiPlugsConnectedDuotone,
  PiTrashDuotone,
} from "react-icons/pi";

const controls = [
  {
    icon: PiPlugsConnectedDuotone,
    title: "You choose what to connect",
    body: "Synced requests access only when you enable a connected service. Available features depend on the permissions you grant, and you can disconnect an integration in Synced or revoke Google access from your Google Account settings.",
  },
  {
    icon: PiHandTapDuotone,
    title: "You approve outbound messages",
    body: "Synced can prepare drafts and suggested actions, but an AI-drafted message requires your approval before it is sent. You remain responsible for reviewing important output and actions.",
  },
  {
    icon: PiCheckCircleDuotone,
    title: "Workspace data is not model-training data",
    body: "Synced does not use raw, derived, aggregated, or anonymized Google Workspace API data to train generalized AI or machine-learning models.",
  },
  {
    icon: PiLockKeyDuotone,
    title: "Data is protected in transit and at rest",
    body: "Credentials, authorization tokens, and stored service data are encrypted in transit using TLS and encrypted at rest. Access is restricted to providing the service, approved support, and necessary security investigations.",
  },
  {
    icon: PiTrashDuotone,
    title: "You can delete your data",
    body: "You can disconnect services at any time and request account deletion. Synced's Privacy Policy explains retention, deletion, and the limited circumstances in which data may be retained.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <div className="bg-container" aria-hidden="true" />
      <Header />
      <main className="security-main">
        <section className="security-hero container">
          <span className="eyebrow">Security and privacy</span>
          <h1>Your inbox stays under your control.</h1>
          <p>
            Synced connects to the services you authorize to help search messages and files,
            draft replies, coordinate calendars, and manage follow-ups. These are the core
            safeguards and controls behind that access.
          </p>
        </section>
        <section className="container security-grid" aria-label="Synced security controls">
          {controls.map(({ icon: Icon, title, body }) => (
            <article className="security-card" key={title}>
              <div className="security-icon-wrap" aria-hidden="true"><Icon size={22} /></div>
              <div className="security-card-copy">
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </section>
        <section className="container security-detail">
          <h2>Read the complete data policy</h2>
          <p>
            The <a href="/privacy">Privacy Policy</a> describes the Google scopes Synced may
            request, service providers used to deliver features, retention and deletion, and
            Google API Services User Data Policy compliance.
          </p>
        </section>
      </main>
      <Footer />
      <style>{`
        .security-main {
          position: relative;
          z-index: 2;
          padding: 9rem 0 7rem;
        }
        .security-hero {
          text-align: left;
        }
        .security-hero .eyebrow {
          padding: 0;
          margin-bottom: 1.35rem;
          border: 0;
          border-radius: 0;
          background: transparent;
          box-shadow: none;
          letter-spacing: .08em;
        }
        .security-hero h1 {
          max-width: 680px;
          margin: 0 0 1.1rem;
          font-family: "p22-mackinac-pro", serif;
          font-size: clamp(2.25rem, 5vw, 3.5rem);
          font-weight: 700;
          letter-spacing: -.035em;
          line-height: 1.08;
          color: hsl(var(--fg));
        }
        .security-hero > p {
          max-width: 580px;
          margin: 0;
          color: hsl(var(--muted-fg));
          font-size: clamp(1rem, 1.8vw, 1.1rem);
          line-height: 1.6;
        }
        .security-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0;
          overflow: hidden;
          margin-top: 3.25rem;
          border: 1px solid hsl(var(--border) / .85);
          border-radius: 24px;
          background: hsl(var(--card));
          box-shadow: 0 20px 55px rgba(35, 27, 72, .055);
        }
        .security-card {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          min-height: 190px;
          padding: 2rem;
          border-bottom: 1px solid hsl(var(--border) / .75);
          background: transparent;
          transition: background-color 180ms ease;
        }
        .security-card:nth-child(odd) {
          border-right: 1px solid hsl(var(--border) / .75);
        }
        .security-card:last-child {
          grid-column: 1 / -1;
          min-height: 0;
          border-right: 0;
          border-bottom: 0;
        }
        .security-card h2,
        .security-detail h2 {
          margin: .1rem 0 .5rem;
          font-family: "p22-mackinac-pro", serif;
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: -.015em;
          color: hsl(var(--fg));
        }
        .security-card p,
        .security-detail p {
          max-width: 620px;
          color: hsl(var(--muted-fg));
          font-size: .92rem;
          line-height: 1.65;
        }
        .security-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          flex: 0 0 42px;
          border-radius: 12px;
          background: hsl(var(--primary) / .1);
          color: hsl(var(--primary));
          transition: transform 180ms cubic-bezier(.23, 1, .32, 1), background-color 180ms ease;
        }
        .security-card-copy { min-width: 0; }
        .security-detail {
          display: grid;
          grid-template-columns: minmax(0, .75fr) minmax(0, 1.25fr);
          gap: 2rem;
          align-items: start;
          margin-top: 1.5rem;
          padding: 2rem;
          border: 1px solid hsl(var(--border) / .75);
          border-radius: 20px;
          background: hsl(var(--card) / .7);
        }
        .security-detail h2 { margin: 0; }
        .security-detail a {
          color: hsl(var(--primary));
          font-weight: 600;
          text-decoration: none;
        }
        .security-detail a:hover { text-decoration: underline; text-underline-offset: 3px; }
        @media (hover: hover) and (pointer: fine) {
          .security-card:hover { background: hsl(var(--primary) / .035); }
          .security-card:hover .security-icon-wrap { transform: scale(1.05); background: hsl(var(--primary) / .14); }
        }
        @media (max-width: 700px) {
          .security-main { padding: 8.25rem 0 5rem; }
          .security-grid { grid-template-columns: 1fr; margin-top: 3rem; border-radius: 20px; }
          .security-card,
          .security-card:last-child { grid-column: auto; min-height: 0; padding: 1.4rem; border-right: 0; border-bottom: 1px solid hsl(var(--border) / .75); }
          .security-card:last-child { border-bottom: 0; }
          .security-detail { grid-template-columns: 1fr; gap: .75rem; padding: 1.5rem; }
        }
      `}</style>
    </>
  );
}
