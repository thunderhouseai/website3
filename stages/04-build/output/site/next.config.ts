import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dockerfile-friendly build for the Coolify deploy (stage 05).
  output: 'standalone',
  // The circular "N" badge Next.js injects bottom-left in dev mode. Dev-only
  // (never ships to production), but it sat exactly where our pillars dock
  // lives and isn't specced — off entirely.
  devIndicators: false,
};

export default nextConfig;
