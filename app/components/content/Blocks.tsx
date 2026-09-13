import { PiCheckBold } from "react-icons/pi";
import type { Block, Cluster, Page } from "@/content/types";
import { descriptionFor, getPage, labelFor, pages } from "@/content/registry";
import { href } from "@/content/site";
import Inline from "./Inline";
import CopyButton from "./CopyButton";
import { ICONS } from "./icons";
import { CONNECTORS, ConnectorGlyph, ConnectorTile } from "../ConnectorIcon";

export function slugId(text: string) {
  return text
    .toLowerCase()
    .replace(/\*\*|\[|\]\([^)]*\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function MessageCard({ b }: { b: Extract<Block, { type: "message" }> }) {
  const brand = CONNECTORS[b.source];
  return (
    <figure className="ui-message-wrap" style={{ margin: "1.5rem 0 0" }}>
      <div className="ui-message">
        <div className="ui-message-head">
          <div className="ui-message-avatar" style={{ background: brand.color }}>{b.from.charAt(0)}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="ui-message-name">{b.from}</div>
            <div className="ui-message-meta">
              <span className="ui-message-source" style={{ background: `${brand.color}20`, color: brand.color }}>
                <ConnectorGlyph brand={b.source} size={12} />
                {brand.label}
              </span>
              <span className="ui-message-time">{b.time}</span>
            </div>
          </div>
        </div>
        <div className="ui-message-bubble">{b.text}</div>
        <div className="ui-message-sep" />
        <div className="ui-message-steps">
          <div className="ui-message-steps-label">
            {b.stepsLabel ?? `${b.steps.length} Task${b.steps.length === 1 ? "" : "s"} Completed`}
          </div>
          {b.steps.map((s, i) => (
            <div key={s} className="ui-message-step">
              <div className="ui-message-check"><PiCheckBold size={11} /></div>
              <div className="ui-message-step-text">
                {s}
                {b.file && i === b.steps.length - 1 ? (
                  <div><span className="ui-message-file">{b.file}</span></div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
      {b.caption ? <figcaption><p className="ui-message-caption"><Inline text={b.caption} /></p></figcaption> : null}
    </figure>
  );
}

export function Card({ page }: { page: Page }) {
  const Icon = page.icon ? ICONS[page.icon] : null;
  const comingSoon = page.body.some((b) => b.type === "callout" && b.title === "Coming soon");
  return (
    <a href={href(page.slug)} className="ui-card">
      <span className="ui-card-head">
        {page.integration ? (
          <ConnectorTile brand={page.integration.brand} size={34} />
        ) : Icon ? (
          <span className="ui-icon-tile"><Icon size={19} /></span>
        ) : null}
        <span className="ui-card-title">{page.navLabel ?? page.h1}</span>
      </span>
      <span className="ui-card-text">{page.cardText ?? page.description}</span>
      {page.integration ? (
        <span className={`ui-card-tag${comingSoon ? "" : " is-live"}`}>
          {comingSoon ? "Coming soon" : page.integration.plans === "free" ? "Free and Pro" : "Pro"}
        </span>
      ) : null}
    </a>
  );
}

function IndexBlock({ clusters, group, self }: { clusters: Cluster[]; group?: "letter"; self: Page }) {
  const items = pages
    .filter((p) => p.index !== false && p.slug !== self.slug && (p.parent === self.slug || (clusters.includes(p.cluster) && p.parent)))
    .filter((p, i, arr) => arr.findIndex((x) => x.slug === p.slug) === i);

  if (group === "letter") {
    const sorted = [...items].sort((a, b) => (a.term ?? a.h1).localeCompare(b.term ?? b.h1));
    const letters = [...new Set(sorted.map((p) => (p.term ?? p.h1)[0].toUpperCase()))];
    return (
      <div>
        {letters.map((l) => (
          <section key={l}>
            <h2 className="ui-letter" id={`letter-${l.toLowerCase()}`}>{l}</h2>
            <div className="ui-card-grid">
              {sorted.filter((p) => (p.term ?? p.h1)[0].toUpperCase() === l).map((p) => <Card key={p.slug} page={p} />)}
            </div>
          </section>
        ))}
      </div>
    );
  }
  return (
    <div className="ui-card-grid">
      {items.map((p) => <Card key={p.slug} page={p} />)}
    </div>
  );
}

export function RelatedLinks({ slugs, title }: { slugs: string[]; title?: string }) {
  return (
    <div>
      {title ? <h3>{title}</h3> : null}
      <div className="ui-card-grid">
        {slugs.map((s) => {
          const p = getPage(s);
          if (p) return <Card key={s} page={p} />;
          return (
            <a key={s} href={href(s || "/")} className="ui-card">
              <span className="ui-card-title">{labelFor(s)}</span>
              <span className="ui-card-text">{descriptionFor(s)}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default function Blocks({ blocks, page }: { blocks: Block[]; page: Page }) {
  return (
    <div className="ui-prose">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return <h2 key={i} id={b.id ?? slugId(b.text)}><Inline text={b.text} /></h2>;
          case "h3":
            return <h3 key={i}><Inline text={b.text} /></h3>;
          case "p":
            return <p key={i}><Inline text={b.text} /></p>;
          case "list": {
            const L = b.ordered ? "ol" : "ul";
            return (
              <L key={i} className="ui-list">
                {b.items.map((t) => <li key={t}><Inline text={t} /></li>)}
              </L>
            );
          }
          case "steps":
            return (
              <ol key={i} className="ui-steps">
                {b.items.map((s, n) => (
                  <li key={s.title} className="ui-step">
                    <span className="ui-step-num">{n + 1}</span>
                    <div>
                      <div className="ui-step-title"><Inline text={s.title} /></div>
                      <p className="ui-step-body"><Inline text={s.body} /></p>
                    </div>
                  </li>
                ))}
              </ol>
            );
          case "table":
            return (
              <div key={i}>
                <div className="ui-table-wrap">
                  <table className="ui-table">
                    <thead>
                      <tr>{b.head.map((h, n) => <th key={n} scope="col">{h}</th>)}</tr>
                    </thead>
                    <tbody>
                      {b.rows.map((r, n) => (
                        <tr key={n}>{r.map((c, m) => <td key={m}><Inline text={c} /></td>)}</tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {b.caption ? <p className="ui-table-caption"><Inline text={b.caption} /></p> : null}
              </div>
            );
          case "template":
            return (
              <div key={i} className="ui-template">
                <div className="ui-template-bar">
                  <span className="ui-template-label">{b.label ?? "Template"}</span>
                  <CopyButton text={b.subject ? `Subject: ${b.subject}\n\n${b.text}` : b.text} />
                </div>
                {b.subject ? <div className="ui-template-subject"><span>Subject</span>{b.subject}</div> : null}
                <pre className="ui-template-text">{b.text}</pre>
              </div>
            );
          case "callout":
            return (
              <div key={i} className="ui-callout">
                {b.title ? <div className="ui-callout-title">{b.title}</div> : null}
                <p><Inline text={b.text} /></p>
              </div>
            );
          case "features":
            return (
              <div key={i} className="ui-feature-grid">
                {b.items.map((f) => {
                  const Icon = ICONS[f.icon];
                  return (
                    <article key={f.title} className="ui-feature">
                      <span className="ui-icon-tile" aria-hidden="true"><Icon size={22} /></span>
                      <div>
                        <h3 className="ui-feature-title">{f.title}</h3>
                        <p className="ui-feature-body"><Inline text={f.body} /></p>
                      </div>
                    </article>
                  );
                })}
              </div>
            );
          case "message":
            return <MessageCard key={i} b={b} />;
          case "links":
            return <RelatedLinks key={i} slugs={b.slugs} title={b.title} />;
          case "index":
            return <IndexBlock key={i} clusters={b.clusters} group={b.group} self={page} />;
          case "sources":
            return (
              <ul key={i} className="ui-sources">
                {b.items.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a> <span>(checked {s.checked})</span>
                  </li>
                ))}
              </ul>
            );
        }
      })}
    </div>
  );
}
