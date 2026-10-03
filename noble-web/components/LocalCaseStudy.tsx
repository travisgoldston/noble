import { BeforeAfterChart } from "@/components/BeforeAfterChart";
import { Button } from "@/components/Button";
import {
  monthsInProgress,
  type LocalResult,
} from "@/data/case-studies";
import { cta, paths } from "@/lib/site";

export function LocalCaseStudy({ study }: { study: LocalResult }) {
  const month = monthsInProgress(study.startDate);
  const badge =
    study.status === "complete"
      ? "Complete"
      : month
        ? `In progress, month ${month}`
        : "In progress";

  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-16 md:py-20">
          <p className="inline-flex rounded-full bg-forest-mist px-3 py-1 text-[0.68rem] font-medium tracking-[0.14em] text-forest uppercase">
            {badge}
          </p>
          <h1 className="font-serif mt-4 max-w-[18ch] text-4xl tracking-tightest md:text-6xl">
            {study.industry}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            Local result for a DFW business. Industry is anonymized. Numbers
            only appear when we have permission and a fixed keyword set.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-site px-6 py-12 md:py-16">
        <BeforeAfterChart
          title="Tracked keyword set"
          rows={[
            {
              label: "Average position",
              before: study.metrics.avgPosition.before,
              after: study.metrics.avgPosition.after,
              note: "Lower is better. Fixed set only.",
            },
            {
              label: "Impressions",
              before: study.metrics.impressions.before,
              after: study.metrics.impressions.after,
            },
            {
              label: "Clicks",
              before: study.metrics.clicks.before,
              after: study.metrics.clicks.after,
            },
            {
              label: "GBP calls",
              before: study.metrics.gbpCalls.before,
              after: study.metrics.gbpCalls.after,
            },
            {
              label: "GBP direction requests",
              before: study.metrics.gbpDirectionRequests.before,
              after: study.metrics.gbpDirectionRequests.after,
            },
          ]}
        />

        <article className="mt-14 max-w-3xl">
          <h2 className="font-serif text-3xl tracking-tight">Tracked keywords</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-stone">
            {study.trackedKeywords.map((keyword) => (
              <li key={keyword}>{keyword}</li>
            ))}
          </ul>

          <h2 className="font-serif mt-12 text-3xl tracking-tight">What we did</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-stone">
            {study.whatWeDid.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className="font-serif mt-12 text-3xl tracking-tight">Caveats</h2>
          <p className="mt-4 text-stone">{study.caveats}</p>
          <p className="mt-4 text-stone">
            Average position can be distorted by new keywords, so we track a
            fixed set.
          </p>
        </article>

        <div className="mt-12">
          <Button href={paths.contact}>{cta.primary}</Button>
        </div>
      </section>
    </div>
  );
}
