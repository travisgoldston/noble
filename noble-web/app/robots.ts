import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/sample-game-plan"] },
    ],
    sitemap: "https://nobleseo.co/sitemap.xml",
  };
}
