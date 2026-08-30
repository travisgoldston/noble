import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { articlePath, resourceTopicPath } from "@/lib/articles/helpers";
import { resourceCategories } from "@/lib/articles/types";
import { caseStudies } from "@/lib/case-studies";
import { locations, searchSurfaces } from "@/lib/content";
import { industries, industryCities, industryCityHref, industryGroups, industryHref } from "@/lib/industries";
import { cityPath, paths } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nobleseo.co";
  const now = new Date("2026-08-30");
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
    ...resourceCategories.map((item) => resourceTopicPath(item.id)),
    ...articles.map((article) => articlePath(article.slug)),
    paths.pricing,
    paths.contact,
    paths.areas,
    paths.fortWorth,
    paths.industries,
    ...industryGroups.map((group) => `${paths.industries}/${group.slug}`),
    ...industries.map((industry) => industryHref(industry)),
    ...industryCities.map((page) => industryCityHref(page)),
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
