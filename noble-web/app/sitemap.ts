import type { MetadataRoute } from "next";
import { locations, searchSurfaces } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nobleseo.co";
  const now = new Date("2026-08-18");
  const paths = [
    "",
    "/services",
    "/work",
    "/about",
    "/resources",
    "/contact",
    "/locations",
    ...locations.map((city) => `/locations/${city.slug}`),
    ...searchSurfaces.map((item) => item.href),
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
  }));
}
