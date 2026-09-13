import { PiArrowRightDuotone, PiCaretDownBold } from "react-icons/pi";
import type { Page } from "@/content/types";
import { breadcrumbs } from "@/content/registry";
import { PEOPLE, WAITLIST_URL, href } from "@/content/site";
import { jsonLd, pageGraph } from "@/content/schema";
import Header from "../Header";
import Footer from "../Footer";
import Blocks, { RelatedLinks, slugId } from "./Blocks";
import Inline from "./Inline";
import { ConnectorTile } from "../ConnectorIcon";

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}

export default function ContentPage({ page }: { page: Page }) {
  const crumbs = breadcrumbs(page);
  const h2s = page.body.filter((b) => b.type === "h2") as { type: "h2"; text: string; id?: string }[];
  const isHub = page.body.some((b) => b.type === "index");
  const showRail = !isHub && h2s.length >= 3;
  const isArticle = page.schema === "Article" || page.schema === "TechArticle";
  const author = page.author && page.author !== "team" ? PEOPLE[page.author] : null;
  const cta = page.cta ?? {
    title: "Get early access to Synced.",
    sub: "Join the private beta. Synced drafts the replies, finds the files, and proposes the meeting times. You approve.",
  };

  return (
    <>
      <div className="bg-container" aria-hidden="true" />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(pageGraph(page)) }} />

      <main className="ui-main">
        <section className="ui-hero">
          <div className="container">
            <nav aria-label="Breadcrumb">
              <ol className="ui-crumbs">
                {crumbs.map((c, i) => (
                  <li key={c.path}>
                    {i === crumbs.length - 1 ? (
                      <span aria-current="page">{c.name}</span>
                    ) : (
                      <a href={href(c.path)}>{c.name}</a>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            {page.integration ? <div className="ui-hero-brand"><ConnectorTile brand={page.integration.brand} size={52} /></div> : null}
            <div className="ui-eyebrow">{page.eyebrow}</div>
            <h1 className="ui-h1">{page.h1}</h1>
            <p className="ui-intro"><Inline text={page.intro} /></p>
            {isArticle ? (
              <p className="ui-meta">
                {author ? (
                  <>By <a href={href("/team")}>{author.name}</a> · </>
                ) : (
                  <>By the Synced team · </>
                )}
                Updated <time dateTime={page.updated}>{formatDate(page.updated)}</time>
              </p>
            ) : null}
          </div>
        </section>

        <div className="container">
          <div className={`ui-layout${showRail ? "" : " is-wide"}`}>
            <article className="ui-article">
              {page.answer ? (
                <div className="ui-answer">
                  <div className="ui-answer-label">In short</div>
                  <p><Inline text={page.answer} /></p>
                </div>
              ) : null}
              <Blocks blocks={page.body} page={page} />
            </article>
            {showRail ? (
              <aside className="ui-rail" aria-label="On this page">
                <div>
                  <div className="ui-rail-title">On this page</div>
                  <ol>
                    {h2s.map((h) => (
                      <li key={h.text}><a href={`#${h.id ?? slugId(h.text)}`}>{h.text.replace(/\*\*/g, "")}</a></li>
                    ))}
                    {page.faqs?.length ? <li><a href="#faq">Questions</a></li> : null}
                  </ol>
                </div>
              </aside>
            ) : null}
          </div>
        </div>

        {page.faqs?.length ? (
          <section className="ui-section" id="faq">
            <div className="container">
              <div className="ui-label">Questions</div>
              <h2 className="ui-section-heading">Frequently asked.</h2>
              <div className="ui-faq-list">
                {page.faqs.map((f) => (
                  <details key={f.q} className="ui-faq">
                    <summary>
                      {f.q}
                      <PiCaretDownBold size={14} className="ui-faq-caret" />
                    </summary>
                    <p className="ui-faq-answer"><Inline text={f.a} /></p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {page.related?.length ? (
          <section className="ui-section">
            <div className="container">
              <div className="ui-label">Keep reading</div>
              <h2 className="ui-section-heading">Related.</h2>
              <RelatedLinks slugs={page.related} />
            </div>
          </section>
        ) : null}

        <section className="ui-cta">
          <div className="container">
            <div className="ui-cta-inner">
              <div>
                <div className="ui-label">Get started</div>
                <h2 className="ui-cta-title">{cta.title}</h2>
                <p className="ui-cta-sub">{cta.sub}</p>
              </div>
              <div className="ui-cta-action">
                <a href={WAITLIST_URL} className="btn-primary btn-lg">
                  Get Early Access
                  <PiArrowRightDuotone size={18} />
                </a>
                <span className="ui-cta-note">Free plan. No credit card.</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
