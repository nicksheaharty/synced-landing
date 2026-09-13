import type { NextConfig } from "next";
import path from "path";

// Deployed on Firebase App Hosting, which runs Next.js as a server (its adapter
// needs the standalone build output). Every page is still prerendered at build time.
const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  // The OG image route reads these at build time; make sure they're traced into
  // the server bundle too, in case a card is ever rendered at request time.
  outputFileTracingIncludes: {
    "/og/[...slug]": ["./assets/fonts/**", "./public/icon-light.png"],
  },
  // Dev only: let other devices on the network (phone, another laptop) load the dev
  // server's JS. Without this, Next blocks /_next dev resources for non-localhost
  // origins, the page never hydrates, and the header dropdown/scroll state are dead.
  allowedDevOrigins: ["10.102.77.178", "*.local"],
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
