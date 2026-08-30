export const resourceCategories = [
  { id: "local-seo", label: "Local SEO" },
  { id: "gbp", label: "Google Business Profile" },
  { id: "google-maps", label: "Google Maps" },
  { id: "technical-seo", label: "Technical SEO" },
  { id: "ai-search", label: "AI Search Visibility" },
  { id: "industry-guides", label: "Industry Guides" },
  { id: "dfw-local-search", label: "DFW Local Search" },
] as const;

export type ResourceCategoryId = (typeof resourceCategories)[number]["id"];

export type ArticleSocial = {
  xPosts: [string, string, string];
  xThread: string[];
  linkedin: string;
  facebook: string;
  tiktokScript: string;
  hooks: [string, string, string];
  newsletter: string;
  outreach: string;
};

export type ArticleSection = {
  heading: string;
  body: string[];
};

export type Article = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  categories: ResourceCategoryId[];
  vertical: string;
  publishedAt: string;
  updatedAt: string;
  answer: string;
  intro: string;
  sections: ArticleSection[];
  example: { heading: string; setup: string; steps: string[] };
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  serviceLinks: { href: string; label: string }[];
  locationLinks: { href: string; label: string }[];
  social: ArticleSocial;
};

export const articleAuthor = {
  name: "NOBLE",
  jobTitle: "Founder-led local SEO practice",
  url: "/about",
};

/**
 * Add a future vertical:
 * 1. Copy a file in lib/articles/hvac/ and change the city, trade, and examples.
 * 2. Export it from lib/articles/index.ts.
 * 3. Link it from the matching service page, location page, and 2–3 sibling articles.
 * 4. Move the slug off lib/articles/backlog.ts.
 * Do not ship a page that only swaps the city name.
 */
export const contentWorkflow = [
  "Pick a commercial-intent problem an owner would pay to solve.",
  "Answer it in the first screen.",
  "Use a DFW-specific example, not a national template.",
  "Link a service page, a location page when relevant, a sibling article, and the audit.",
  "Store social metadata. Do not paste the article into social.",
  "Refuse ranking guarantees, fake offices, and invented results.",
] as const;
