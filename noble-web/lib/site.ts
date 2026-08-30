export const site = {
  name: "NOBLE",
  businessName: "NOBLE SEO",
  url: "https://nobleseo.co",
  email: "hello@nobleseo.co",
  instagram: "https://www.instagram.com/noble.seo",
  instagramHandle: "@noble.seo",
};

export const paths = {
  home: "/",
  services: "/services",
  localSeo: "/local-seo",
  gbp: "/google-business-profile",
  technical: "/technical-seo",
  caseStudies: "/case-studies",
  budgetocity: "/case-studies/budgetocity",
  about: "/about",
  areas: "/areas",
  fortWorth: "/areas/fort-worth-seo",
  contact: "/contact",
  thanks: "/contact/thanks",
  resources: "/resources",
  pricing: "/pricing",
  industries: "/industries",
} as const;

export function industryPath(slug: string) {
  return `${paths.industries}/${slug}`;
}

export function industryCityPath(industrySlug: string, citySlug: string) {
  return `${paths.industries}/${industrySlug}/${citySlug}`;
}

export function articlePath(slug: string) {
  return `${paths.resources}/${slug}`;
}

export function cityPath(slug: string) {
  if (slug === "fort-worth") return paths.fortWorth;
  return `/locations/${slug}`;
}

export const cta = {
  primary: "Get Your Free SEO Audit",
  form: "Get My Free SEO Audit",
  proof: "See the Proof",
  auditTitle: "Want to know where your business stands?",
  auditBody:
    "We'll look at how your business appears in Search, Maps, and your website and tell you what's actually holding you back.",
};

export { pricing } from "./pricing";

export const primaryServices = [
  {
    id: "local-seo",
    title: "Local SEO",
    href: paths.localSeo,
    body: "Improve local visibility, rankings, on-page signals, and the factors that influence Google Search and Maps when nearby customers are ready to hire.",
  },
  {
    id: "google-business-profile",
    title: "Google Business Profile",
    href: paths.gbp,
    body: "Categories, services, photos, posts, reviews, and ongoing monitoring so the listing matches the business and earns the call.",
  },
  {
    id: "technical-seo",
    title: "Technical SEO",
    href: paths.technical,
    body: "Site health, indexing, crawlability, structured data, internal linking, and Core Web Vitals — the technical work that supports local visibility.",
  },
] as const;
