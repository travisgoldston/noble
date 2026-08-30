export type IndustryGroupId =
  | "home-services"
  | "healthcare"
  | "professional-services";

export type IndustryId =
  | "hvac"
  | "dental"
  | "plumbing"
  | "roofing"
  | "optometry"
  | "electrical"
  | "med-spa"
  | "orthodontics";

export type IndustryGroup = {
  slug: IndustryGroupId;
  name: string;
  title: string;
  h1: string;
  description: string;
  lede: string;
  body: string[];
  comingSoon?: string;
};

export type Industry = {
  slug: string;
  id: IndustryId;
  group: IndustryGroupId;
  name: string;
  navLabel: string;
  title: string;
  h1: string;
  lede: string;
  description: string;
  problem: string;
  outcome: string;
  problems: { title: string; body: string }[];
  approach: { title: string; body: string; href?: string }[];
  strategy: { heading: string; body: string }[];
  searches: string[];
  proof: string;
  outreachLine: string;
  faqs: { question: string; answer: string }[];
  relatedArticleSlugs: string[];
};

export type IndustryCity = {
  industrySlug: string;
  citySlug: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
  localContext: { heading: string; body: string }[];
  behavior: string[];
  competition: string[];
  searches: string[];
  example: { heading: string; setup: string; steps: string[] };
  faqs: { question: string; answer: string }[];
  relatedArticleSlugs: string[];
};
