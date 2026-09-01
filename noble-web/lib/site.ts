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
  primary: "Get My Free SEO Game Plan",
  form: "Get My Free SEO Game Plan",
  nav: "Contact",
  proof: "See the Proof",
  auditTitle: "Want a plain-English game plan for local search?",
  auditBody:
    "Already have a website? We'll show you what's holding it back. Starting from zero? We'll tell you what to build first.",
};

export const gamePlan = {
  offer: "Free Local SEO Game Plan",
  introTitle: "Tell us about your business.",
  introBody:
    "Whether you've been online for years or haven't built your online presence yet, we'll tell you what we'd do first.",
  introMeta: "30 seconds. Written response. No sales call required.",
  alreadyHave: "Already have a website? We'll show you what's holding it back.",
  startingZero: "Starting from zero? We'll tell you what to build first.",
  zeroTitle: "Starting from zero? That's okay.",
  zeroBody:
    "Don't have a website or Google Business Profile yet? Request the free game plan anyway. We'll tell you what to set up first, what can wait, and whether SEO even makes sense for your business right now.",
  thatsOkay: "Don't have a website or Google Business Profile yet? That's okay.",
  noWebsiteTitle: "No website yet?",
  noWebsiteBody:
    "That's not a dealbreaker. In fact, it helps to know that before we start talking about SEO.",
  noWebsiteNext:
    "I'll help you understand what needs to exist first — website, Google Business Profile, reviews, local visibility, or something else — so you're not paying for SEO before you're ready.",
  next: [
    "You submit the 30-second form.",
    "I review your business and local market.",
    "You receive a written game plan by email.",
    "No calendar invite. No required sales call. No pressure.",
  ],
  youGet: [
    "What customers searching locally can currently find",
    "Website and Google Business Profile opportunities — including what to set up if you don't have them yet",
    "The biggest visibility issues to fix first",
    "What I'd prioritize if this were my business",
    "Whether SEO makes sense for you right now",
  ],
};

export const gbpOptions = [
  { value: "has", label: "I have one" },
  { value: "none", label: "I don't have one" },
  { value: "unsure", label: "I'm not sure" },
] as const;

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
