import { Fragment } from "react";
import { href } from "@/content/site";

// Renders the inline marks content may use: [label](/path), **bold**, and `code`.
const TOKEN = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`/g;

export default function Inline({ text }: { text: string }) {
  const out: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(TOKEN)) {
    const i = m.index ?? 0;
    if (i > last) out.push(text.slice(last, i));
    if (m[1] !== undefined) {
      const url = m[2];
      const external = /^https?:/.test(url);
      out.push(
        <a key={i} href={href(url)} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {m[1]}
        </a>,
      );
    } else if (m[3] !== undefined) {
      out.push(<strong key={i}>{m[3]}</strong>);
    } else {
      out.push(<code key={i}>{m[4]}</code>);
    }
    last = i + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <Fragment>{out}</Fragment>;
}

/** Plain-text version for JSON-LD, meta tags, and llms.txt. */
export function plain(text: string) {
  return text.replace(TOKEN, (_, label, _url, bold, code) => label ?? bold ?? code);
}
