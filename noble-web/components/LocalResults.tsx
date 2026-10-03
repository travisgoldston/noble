import Link from "next/link";
import {
  monthsInProgress,
  publishedLocalResults,
  type LocalResult,
} from "@/data/case-studies";
import { paths } from "@/lib/site";

function StatusBadge({ study }: { study: LocalResult }) {
  if (study.status !== "in-progress") {
    return (
      <span className="rounded-full bg-forest-mist px-2.5 py-1 text-[0.68rem] font-medium tracking-[0.14em] text-forest uppercase">
        Complete
      </span>
    );
  }

  const month = monthsInProgress(study.startDate);
  return (
    <span className="rounded-full bg-forest-mist px-2.5 py-1 text-[0.68rem] font-medium tracking-[0.14em] text-forest uppercase">
      {month ? `In progress, month ${month}` : "In progress"}
    </span>
  );
}

export function LocalResultCard({ study }: { study: LocalResult }) {
  return (
    <article className="rounded-xl border border-mist bg-white p-6">
      <div className="flex flex-wrap items-center gap-3">
        <StatusBadge study={study} />
        <p className="text-sm text-stone">{study.industry}</p>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-stone">
        Tracked keyword set: {study.trackedKeywords.join(", ")}
      </p>
      <Link
        href={`${paths.caseStudies}/${study.slug}`}
        className="mt-4 inline-block text-sm font-medium text-forest hover:text-forest-deep"
      >
        Read the local result
      </Link>
    </article>
  );
}

export function LocalResultsSection() {
  const studies = publishedLocalResults();

  return (
    <section className="border-b border-mist py-12 md:py-16">
      <div className="mx-auto max-w-site px-6">
        <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
          Local results
        </p>
        <h2 className="font-serif mt-4 max-w-[16ch] text-3xl tracking-tightest md:text-4xl">
          DFW work, published the same way.
        </h2>
        {studies.length ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {studies.map((study) => (
              <LocalResultCard key={study.slug} study={study} />
            ))}
          </div>
        ) : (
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-stone">
            Results to be shared soon featuring 3 small businesses.
          </p>
        )}
      </div>
    </section>
  );
}
