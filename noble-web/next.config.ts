import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/work", destination: "/case-studies", permanent: true },
      { source: "/work/", destination: "/case-studies", permanent: true },
      { source: "/locations", destination: "/areas", permanent: true },
      { source: "/locations/", destination: "/areas", permanent: true },
      {
        source: "/locations/fort-worth",
        destination: "/areas/fort-worth-seo",
        permanent: true,
      },
      {
        source: "/locations/fort-worth/",
        destination: "/areas/fort-worth-seo",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
