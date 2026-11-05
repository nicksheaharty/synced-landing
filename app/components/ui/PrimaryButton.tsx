"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type AnchorHTMLAttributes, type ReactNode } from "react";

const SpecularButton = dynamic(() => import("../reactbits/SpecularButton/SpecularButton"), { ssr: false });

/**
 * Primary button. Renders a plain indigo link first (fast, works without JS), then
 * upgrades to the React Bits SpecularButton after the page has loaded, on devices
 * with a mouse. Touch screens keep the plain button: the light follows a pointer.
 */
export function PrimaryButton({ className, children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children: ReactNode }) {
  const [upgrade, setUpgrade] = useState(false);
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let idle = 0;
    const go = () => {
      const ric = (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
      idle = ric ? ric(() => setUpgrade(true)) : window.setTimeout(() => setUpgrade(true), 200);
    };
    if (document.readyState === "complete") go();
    else window.addEventListener("load", go, { once: true });
    return () => { window.removeEventListener("load", go); window.clearTimeout(idle); };
  }, []);

  if (!upgrade) {
    return <a className={`${className ?? ""} btn-primary-plain`} {...rest}>{children}</a>;
  }
  return (
    <SpecularButton
      size="sm"
      radius={8}
      tint="#4429F2"
      tintOpacity={1}
      textColor="#F7F6FF"
      lineColor="#FFFFFF"
      baseColor="#7A66FF"
      intensity={1.1}
      idleIntensity={0.45}
      shineSize={12}
      glow={0.8}
      className={className}
      {...(rest as object)}
    >
      {children}
    </SpecularButton>
  );
}
