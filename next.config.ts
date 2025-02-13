import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? "/audiostack-discogs" : '',
  output: "standalone",
  reactStrictMode: true
};

export default nextConfig;
