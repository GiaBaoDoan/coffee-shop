import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // cho phép tất cả hostname
      },
      {
        protocol: "http",
        hostname: "**", // nếu cần support http
      },
    ],
  },
};

export default nextConfig;
