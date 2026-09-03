import Header from "../components/Header";
import Footer from "../components/Footer";

const controls = [
  {
    title: "You choose what to connect",
    body: "Synced requests access only when you enable a connected service. Available features depend on the permissions you grant, and you can disconnect an integration in Synced or revoke Google access from your Google Account settings.",
  },
  {
    title: "You approve outbound messages",
    body: "Synced can prepare drafts and suggested actions, but an AI-drafted message requires your approval before it is sent. You remain responsible for reviewing important output and actions.",
  },
  {
    title: "Workspace data is not model-training data",
    body: "Synced does not use raw, derived, aggregated, or anonymized Google Workspace API data to train generalized AI or machine-learning models.",
  },
  {
    title: "Data is protected in transit and at rest",
    body: "Credentials, authorization tokens, and stored service data are encrypted in transit using TLS and encrypted at rest. Access is restricted to providing the service, approved support, and necessary security investigations.",
  },
  {
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
          {controls.map((control) => (
            <article className="security-card" key={control.title}>
              <h2>{control.title}</h2>
              <p>{control.body}</p>
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
        .security-main { position: relative; z-index: 2; padding: 10rem 0 7rem; }
        .security-hero { max-width: 850px; text-align: center; }
        .security-hero h1 { font-family: "p22-mackinac-pro", serif; font-size: clamp(2.5rem, 6vw, 4.75rem); letter-spacing: -.045em; line-height: 1; margin: 1rem auto 1.25rem; }
        .security-hero p { max-width: 720px; margin: 0 auto; color: hsl(var(--muted-fg)); font-size: 1.05rem; line-height: 1.7; }
        .security-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin-top: 4rem; }
        .security-card { padding: 2rem; border: 1px solid hsl(var(--border)); border-radius: 18px; background: hsl(var(--card) / .72); }
        .security-card:last-child { grid-column: 1 / -1; }
        .security-card h2, .security-detail h2 { font-size: 1.15rem; margin-bottom: .65rem; }
        .security-card p, .security-detail p { color: hsl(var(--muted-fg)); line-height: 1.65; }
        .security-detail { margin-top: 1rem; padding: 2rem; border-radius: 18px; background: hsl(var(--primary) / .06); }
        .security-detail a { color: hsl(var(--primary)); text-decoration: underline; text-underline-offset: 3px; }
        @media (max-width: 700px) { .security-main { padding-top: 8rem; } .security-grid { grid-template-columns: 1fr; } .security-card:last-child { grid-column: auto; } }
      `}</style>
    </>
  );
}
