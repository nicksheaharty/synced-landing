"use client";

// WebGL backgrounds load after the page is interactive so they never delay first paint.
import dynamic from "next/dynamic";

export const Grainient = dynamic(() => import("../reactbits/Grainient/Grainient"), { ssr: false });
export const Threads = dynamic(() => import("../reactbits/Threads/Threads"), { ssr: false });
export const GlassSurface = dynamic(() => import("../reactbits/GlassSurface/GlassSurface"), { ssr: false });
