import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";
import { paths } from "@/lib/site";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const href = `${paths.caseStudies}/${study.slug}`;

  return (
    <article className="grid items-center gap-7 rounded-xl border border-mist bg-cream p-8 md:grid-cols-[140px_1fr] md:p-10">
      {study.logo && study.url ? (
        <a
          href={study.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center"
        >
          <Image
            src={study.logo}
            alt={study.client}
            width={120}
            height={120}
            className="h-[120px] w-[120px] rounded-full object-contain"
          />
        </a>
      ) : (
        <div className="flex h-[120px] w-[120px] items-center justify-center justify-self-center rounded-full border border-mist bg-white font-serif text-2xl">
          {study.client.slice(0, 1)}
        </div>
      )}
      <div>
        <p className="text-xs font-medium tracking-[0.16em] text-forest uppercase">
          {study.kicker}
        </p>
        <h3 className="font-serif mt-2 text-3xl tracking-tight">{study.client}</h3>
        <p className="mt-1 text-sm text-stone">
          {study.industry}
          {study.location ? ` · ${study.location}` : ""}
        </p>
        <p className="mt-3 font-medium text-ink">{study.metric}</p>
        <p className="mt-3 text-sm leading-relaxed text-stone">{study.summary}</p>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
          <Link href={href} className="text-forest hover:text-forest-deep">
            Read the case study
          </Link>
          {study.url ? (
            <a
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest hover:text-forest-deep"
            >
              Visit {study.client}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
