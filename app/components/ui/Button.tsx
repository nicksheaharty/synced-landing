import type { AnchorHTMLAttributes, ReactNode } from "react";
import { PiArrowRightBold } from "react-icons/pi";
import { PrimaryButton } from "./PrimaryButton";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  /** Adds the trailing arrow used on primary calls to action. */
  arrow?: boolean;
  /** Stretch to the container width. */
  block?: boolean;
  children: ReactNode;
};

/**
 * The site's one button. Primary is solid indigo and upgrades to a React Bits SpecularButton
 * (see PrimaryButton); secondary is frosted glass. Styles: globals.css.
 */
export function Button({ href, variant = "primary", size = "md", arrow, block, className, children, ...rest }: Props) {
  const external = /^https?:\/\//.test(href) && !href.includes("syncedinbox.com");
  const cls = [`btn-${variant}`, size === "lg" ? "btn-lg" : "", block ? "btn-block" : "", className ?? ""].filter(Boolean).join(" ");
  const ext = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  const content = (
    <>
      {children}
      {arrow ? <PiArrowRightBold size={size === "lg" ? 15 : 13} aria-hidden="true" /> : null}
    </>
  );

  if (variant === "primary") {
    return (
      <PrimaryButton href={href} className={cls} {...ext} {...rest}>
        {content}
      </PrimaryButton>
    );
  }

  return (
    <a href={href} className={cls} {...ext} {...rest}>
      {content}
    </a>
  );
}
