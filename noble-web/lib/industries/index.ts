import { locations } from "@/lib/content";
import { industryCityPath, industryPath } from "@/lib/site";
import { industryCities } from "./cities";
import { industryGroups } from "./groups";
import { dental, medSpa, optometry, orthodontics } from "./healthcare";
import { electrical, hvac, plumbing, roofing } from "./home-services";
import type { Industry, IndustryCity, IndustryGroup, IndustryGroupId } from "./types";

export const industries: Industry[] = [
  hvac,
  dental,
  plumbing,
  roofing,
  optometry,
  electrical,
  medSpa,
  orthodontics,
];

export { industryGroups } from "./groups";
export { industryCities } from "./cities";
export type { Industry, IndustryCity, IndustryGroup } from "./types";

const groupOrder: IndustryGroupId[] = [
  "home-services",
  "healthcare",
  "professional-services",
];

export function getIndustry(slug: string) {
  return industries.find((item) => item.slug === slug);
}

export function getGroup(slug: string) {
  return industryGroups.find((item) => item.slug === slug);
}

export function industriesInGroup(group: IndustryGroupId) {
  return industries.filter((item) => item.group === group);
}

export function getIndustryCity(industrySlug: string, citySlug: string) {
  return industryCities.find(
    (item) => item.industrySlug === industrySlug && item.citySlug === citySlug,
  );
}

export function citiesForIndustry(industrySlug: string) {
  return industryCities.filter((item) => item.industrySlug === industrySlug);
}

export function industriesForCity(citySlug: string) {
  const slugs = new Set(
    industryCities.filter((item) => item.citySlug === citySlug).map((item) => item.industrySlug),
  );
  return industries.filter((item) => slugs.has(item.slug));
}

export function industryHref(industry: Industry) {
  return industryPath(industry.slug);
}

export function industryCityHref(page: IndustryCity) {
  return industryCityPath(page.industrySlug, page.citySlug);
}

export function industryLinksForCity(citySlug: string) {
  const city = locations.find((item) => item.slug === citySlug);
  return industryCities
    .filter((page) => page.citySlug === citySlug)
    .map((page) => {
      const industry = getIndustry(page.industrySlug);
      return {
        href: industryCityHref(page),
        label: `${industry?.name ?? page.industrySlug} SEO in ${city?.name ?? citySlug}`,
      };
    });
}

export function siblingIndustryCities(industrySlug: string, citySlug: string) {
  return industryCities.filter(
    (page) => page.citySlug === citySlug && page.industrySlug !== industrySlug,
  );
}

export function groupedIndustries() {
  return groupOrder.map((slug) => {
    const group = getGroup(slug);
    if (!group) throw new Error(`Missing industry group: ${slug}`);
    return { group, industries: industriesInGroup(slug) };
  });
}

export const tier2Backlog = [
  { name: "Chiropractors", group: "healthcare" as const },
  { name: "Veterinary practices", group: "healthcare" as const },
  { name: "Auto repair", group: "home-services" as const },
  { name: "Landscaping", group: "home-services" as const },
  { name: "Remodeling", group: "home-services" as const },
  { name: "Foundation repair", group: "home-services" as const },
  { name: "Pool companies", group: "home-services" as const },
  { name: "Law firms", group: "professional-services" as const },
];
