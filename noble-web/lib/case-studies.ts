export type CaseStudyStat = { value: string; label: string };

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  location: string;
  url?: string;
  logo?: string;
  kicker: string;
  headline: string;
  subhead: string;
  metric: string;
  summary: string;
  startingSituation: string;
  problem: string;
  strategy: string;
  workPerformed: string[];
  timeline: string;
  baseline: CaseStudyStat[];
  results: CaseStudyStat[];
  caveats: string;
  quote?: { text: string; attribution: string };
  lessons: string[];
  ctaNote: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "budgetocity",
    client: "Budgetocity",
    industry: "Personal finance software",
    location: "United States (national search)",
    url: "https://budgetocity.com",
    logo: "/budgetocity-logo.png",
    kicker: "Case study. Organic SEO",
    headline: "Budgetocity: from page 3 to page 1 with organic SEO",
    subhead:
      "How we rebuilt their search foundation and the pages people already type — without paid ads.",
    metric:
      "Avg. position 31.2 to 6.2. +28% clicks year over year. Content engine built without paid ads",
    summary:
      "We rebuilt structure, on-page SEO, and the pages people search for paycheck budgeting, so the product could get found without ad spend.",
    startingSituation:
      "Budgetocity is a paycheck budgeting app for people living paycheck to paycheck. The product was real. Search demand was real. The site was averaging position 31.2 in Google — page three, effectively invisible — with no content engine and no durable organic presence.",
    problem:
      "They did not need another ad campaign. They needed to be findable for the searches that already existed around paycheck budgeting.",
    strategy:
      "Fix the search foundation first, then publish pages that answer the questions people already type. Measure in Search Console. Keep what earns attention. Do not buy the result with ads.",
    workPerformed: [
      "SEO foundation: structural and on-page issues that kept the site buried, built around queries people actually type.",
      "Pages for the questions people already type, written to answer the search — not filler.",
      "Steady shipping: publish, measure in Search Console, iterate. No tricks.",
    ],
    timeline: "Ongoing organic program. Results reported year over year.",
    baseline: [
      { value: "31.2", label: "Average Google search position before" },
      { value: "Page 3", label: "Typical visibility for target queries" },
      { value: "No engine", label: "No durable organic content system" },
    ],
    results: [
      { value: "6.2", label: "Average Google search position after" },
      { value: "+28%", label: "Clicks, year over year" },
      { value: "~$0 ads", label: "Growth driven by organic SEO and content" },
    ],
    caveats:
      "These figures come from Google Search Console for this engagement. Rankings move with competition, seasonality, and Google changes. This is organic SEO proof for a software product, not a Fort Worth home-services campaign. Local Maps and call results are a different measurement set and will be published only when we have permission and clean data.",
    lessons: [
      "A real product still loses if the pages do not match how people search.",
      "Content only compounds after the technical and on-page foundation can support it.",
      "Paid ads can hide a weak organic presence. Removing that crutch makes the work honest.",
    ],
    ctaNote:
      "If you want the same kind of look at your search presence, the next step is a free SEO audit — then a clear yes, no, or not yet.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}
