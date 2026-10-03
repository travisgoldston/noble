export type LocalResultStatus = "in-progress" | "complete";

export type MetricPair = {
  before: number | null;
  after: number | null;
};

export type LocalResult = {
  slug: string;
  industry: string;
  status: LocalResultStatus;
  startDate: string;
  trackedKeywords: string[];
  metrics: {
    avgPosition: MetricPair;
    impressions: MetricPair;
    clicks: MetricPair;
    gbpCalls: MetricPair;
    gbpDirectionRequests: MetricPair;
  };
  whatWeDid: string[];
  caveats: string;
  published: boolean;
};

export const localResults: LocalResult[] = [
  {
    slug: "dfw-local-placeholder",
    industry: "[PLACEHOLDER: anonymized industry]",
    status: "in-progress",
    startDate: "[PLACEHOLDER: start date YYYY-MM-DD]",
    trackedKeywords: [
      "[PLACEHOLDER: tracked keyword 1]",
      "[PLACEHOLDER: tracked keyword 2]",
      "[PLACEHOLDER: tracked keyword 3]",
    ],
    metrics: {
      avgPosition: { before: null, after: null },
      impressions: { before: null, after: null },
      clicks: { before: null, after: null },
      gbpCalls: { before: null, after: null },
      gbpDirectionRequests: { before: null, after: null },
    },
    whatWeDid: ["[PLACEHOLDER: what we did]"],
    caveats:
      "[PLACEHOLDER: caveats for this engagement.]",
    published: false,
  },
];

export function publishedLocalResults() {
  return localResults.filter((item) => item.published);
}

export function getPublishedLocalResult(slug: string) {
  return publishedLocalResults().find((item) => item.slug === slug);
}

export function monthsInProgress(startDate: string, now = new Date()) {
  const start = new Date(`${startDate}T00:00:00`);
  if (Number.isNaN(start.getTime())) return null;
  const months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth()) +
    1;
  return Math.max(1, months);
}
