import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dockerfile-friendly build for the Coolify deploy (stage 05).
  output: 'standalone',
  // Next's dev-mode badge sits bottom-left, exactly where the WhatsApp
  // button lives. Dev-only either way; off entirely.
  devIndicators: false,
};

export default nextConfig;
