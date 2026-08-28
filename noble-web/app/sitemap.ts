import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { locations, searchSurfaces } from "@/lib/content";
import { cityPath, paths } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nobleseo.co";
  const now = new Date("2026-08-27");
  const pathsList = [
    "",
    paths.services,
    paths.localSeo,
    paths.gbp,
    paths.technical,
    paths.caseStudies,
    ...caseStudies.map((study) => `${paths.caseStudies}/${study.slug}`),
    paths.about,
    paths.resources,
    paths.contact,
    paths.areas,
    paths.fortWorth,
    ...locations
      .filter((city) => city.slug !== "fort-worth")
      .map((city) => cityPath(city.slug)),
    ...searchSurfaces.map((item) => item.href),
  ];
  return pathsList.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
  }));
}
