import type { NextConfig } from "next";
import path from "path";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
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
