import type { ComponentType, CSSProperties } from "react";
import {
  PiCalendarDuotone,
  PiChatCircleDuotone,
  PiDropboxLogoDuotone,
  PiGithubLogoDuotone,
  PiGoogleDriveLogoDuotone,
  PiInstagramLogoDuotone,
  PiMessengerLogoDuotone,
  PiMicrosoftOutlookLogoDuotone,
  PiMicrosoftTeamsLogoDuotone,
  PiSlackLogoDuotone,
  PiWhatsappLogoDuotone,
} from "react-icons/pi";
import { CONNECTOR_SVGS } from "./connectorSvgs.generated";

// Mirrors the mobile app's components/ConnectorIcon.tsx: a connector's custom SVG
// (copied from synced-mobile-app/assets/icons by scripts/sync-connector-icons.mjs)
// if it has one, otherwise the Phosphor duotone icon, tinted with the brand color
// from the app's constants/connectorMeta.ts.

type PhosphorIcon = ComponentType<{ size?: number; style?: CSSProperties }>;

export const CONNECTORS: Record<string, { label: string; color: string; Icon?: PhosphorIcon }> = {
  gmail: { label: "Gmail", color: "#EA4335" },
  outlook: { label: "Outlook", color: "#0078D4", Icon: PiMicrosoftOutlookLogoDuotone },
  slack: { label: "Slack", color: "#E01E5A", Icon: PiSlackLogoDuotone },
  teams: { label: "Microsoft Teams", color: "#6264A7", Icon: PiMicrosoftTeamsLogoDuotone },
  whatsapp: { label: "WhatsApp Business", color: "#25D366", Icon: PiWhatsappLogoDuotone },
  instagram: { label: "Instagram Business", color: "#E1306C", Icon: PiInstagramLogoDuotone },
  messenger: { label: "Messenger", color: "#0084FF", Icon: PiMessengerLogoDuotone },
  sms: { label: "SMS", color: "#F22F46" },
  groupme: { label: "GroupMe", color: "#00AFF0" },
  imessage: { label: "iMessage", color: "#30D158", Icon: PiChatCircleDuotone },
  drive: { label: "Google Drive", color: "#34A853", Icon: PiGoogleDriveLogoDuotone },
  onedrive: { label: "OneDrive", color: "#0078D4" },
  dropbox: { label: "Dropbox", color: "#0061FF", Icon: PiDropboxLogoDuotone },
  notion: { label: "Notion", color: "#000000" },
  github: { label: "GitHub", color: "#000000", Icon: PiGithubLogoDuotone },
  calendar: { label: "Google Calendar", color: "#4285F4", Icon: PiCalendarDuotone },
};

/** The bare brand glyph in brand color. */
export function ConnectorGlyph({ brand, size = 18, color }: { brand: string; size?: number; color?: string }) {
  const meta = CONNECTORS[brand];
  if (!meta) return null;
  const tint = color ?? meta.color;
  const svg = CONNECTOR_SVGS[brand];
  if (svg) {
    return (
      <svg
        width={size}
        height={size}
        viewBox={svg.viewBox}
        fill="none"
        aria-hidden="true"
        style={{ color: tint, flexShrink: 0 }}
        dangerouslySetInnerHTML={{ __html: svg.inner }}
      />
    );
  }
  const Icon = meta.Icon;
  return Icon ? <Icon size={size} style={{ color: tint, flexShrink: 0 }} /> : null;
}

/** The app's tinted well: brand color at 20% alpha, glyph at 56% of the well. */
export function ConnectorTile({ brand, size = 32, className }: { brand: string; size?: number; className?: string }) {
  const meta = CONNECTORS[brand];
  if (!meta) return null;
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flex: `0 0 ${size}px`,
        width: size,
        height: size,
        borderRadius: Math.round(size / 4),
        background: `${meta.color}20`,
      }}
    >
      <ConnectorGlyph brand={brand} size={Math.round(size * 0.5625)} />
    </span>
  );
}
