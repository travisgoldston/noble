import { articlePath as siteArticlePath } from "@/lib/site";
import { resourceCategories, type ResourceCategoryId } from "./types";

export function articlePath(slug: string) {
  return siteArticlePath(slug);
}

export function resourceTopicPath(id: ResourceCategoryId) {
  return `/resources/topic/${id}`;
}

export function formatArticleDate(iso: string) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [year, month, day] = iso.split("-").map(Number);
  return `${months[month - 1]} ${day}, ${year}`;
}

export function categoryLabel(id: ResourceCategoryId) {
  return resourceCategories.find((item) => item.id === id)?.label ?? id;
}

export const PUBLISHED = "2026-08-30";
