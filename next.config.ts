import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow Sanity image CDN
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
