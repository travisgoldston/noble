import { dentalSeoDallas, dentalSeoFortWorth, gbpForDentists, howDentistsRankMaps } from "./dental";
import { hvacSeoDallas, hvacSeoFortWorth } from "./hvac/cities";
import {
  gbpForHvac,
  howToRankHvacGoogleMaps,
  hvacNotInMapPack,
  hvacServiceAreaSeo,
} from "./hvac/maps";
import {
  hvacChecklist,
  hvacLandingPages,
  hvacReviews,
  hvacSeoCost,
  seoVsAdsHvac,
} from "./hvac/commercial";
import { gbpForOptometrists, howOptometristsRankMaps, optometrySeo, optometrySeoFortWorth } from "./optometry";
import { howPlumbersRankMaps } from "./plumbing";
import type { Article } from "./types";
import { resourceCategories, type ResourceCategoryId } from "./types";

export const articles: Article[] = [
  howToRankHvacGoogleMaps,
  hvacSeoDallas,
  hvacSeoFortWorth,
  hvacNotInMapPack,
  gbpForHvac,
  hvacServiceAreaSeo,
  hvacReviews,
  hvacLandingPages,
  hvacSeoCost,
  seoVsAdsHvac,
  hvacChecklist,
  dentalSeoDallas,
  dentalSeoFortWorth,
  gbpForDentists,
  howDentistsRankMaps,
  optometrySeo,
  optometrySeoFortWorth,
  gbpForOptometrists,
  howOptometristsRankMaps,
  howPlumbersRankMaps,
];

export function getArticle(slug: string) {
  return articles.find((item) => item.slug === slug);
}

export function articlesByCategory(id: ResourceCategoryId) {
  return articles.filter((item) => item.categories.includes(id));
}

export function articlesByVertical(vertical: string) {
  return articles.filter((item) => item.vertical === vertical);
}

export function relatedArticles(article: Article) {
  return article.relatedSlugs
    .map((slug) => getArticle(slug))
    .filter((item): item is Article => Boolean(item));
}

export const industryResourceFilters = [
  { id: "hvac", label: "HVAC" },
  { id: "dental", label: "Dental" },
  { id: "optometry", label: "Optometry" },
  { id: "plumbing", label: "Plumbing" },
  { id: "roofing", label: "Roofing" },
  { id: "electrical", label: "Electrical" },
  { id: "med-spa", label: "Med spas" },
  { id: "orthodontics", label: "Orthodontics" },
] as const;

export { resourceCategories };
export type { Article, ResourceCategoryId };
