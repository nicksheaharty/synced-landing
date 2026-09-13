"use client";

import { useState } from "react";
import { PiCheckBold, PiCopyDuotone } from "react-icons/pi";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="ui-copy"
      onClick={() => {
        navigator.clipboard?.writeText(text).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        });
      }}
    >
      {copied ? <PiCheckBold size={13} /> : <PiCopyDuotone size={14} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
