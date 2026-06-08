import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [360, 414, 640, 768, 1024, 1280],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2678400,
    qualities: [60, 70, 75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
        port: "",
        pathname: "/media/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/ashutoshx7.png",
        search: "",
      },
    ],
  },
};

export default nextConfig;
