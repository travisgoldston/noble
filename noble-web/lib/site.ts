export const site = {
  name: "Noble",
  businessName: "Noble SEO",
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
} as const;

export function cityPath(slug: string) {
  if (slug === "fort-worth") return paths.fortWorth;
  return `/locations/${slug}`;
}

export const cta = {
  primary: "Get Your Free SEO Audit",
  form: "Get My Free SEO Audit",
  proof: "See the Proof",
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
