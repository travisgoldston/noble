import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { cta, paths } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case study" };
  return {
    title: `${study.client} Case Study`,
    description: study.subhead,
    alternates: { canonical: `${paths.caseStudies}/${study.slug}` },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <div>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Case studies", href: "/case-studies" },
          { name: study.client, href: `${paths.caseStudies}/${study.slug}` },
        ])}
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-20">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Case studies", href: "/case-studies" },
              { name: study.client },
            ]}
          />
          {study.logo && study.url ? (
            <a
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 mt-8 inline-block"
            >
              <Image
                src={study.logo}
                alt={study.client}
                width={96}
                height={96}
                className="h-24 w-24 rounded-full object-contain"
              />
            </a>
          ) : (
            <div className="mt-8" />
          )}
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            {study.kicker}
          </p>
          <h1 className="font-serif mt-4 max-w-[18ch] text-5xl tracking-tightest md:text-6xl">
            {study.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">{study.subhead}</p>
          <p className="mt-4 text-sm text-stone">
            {study.industry} · {study.location} · {study.timeline}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-site px-6 py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {study.results.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-mist bg-cream p-6">
              <p className="font-serif text-3xl tracking-tight">{stat.value}</p>
              <p className="mt-2 text-sm text-stone">{stat.label}</p>
            </div>
          ))}
        </div>

        <article className="mt-14 max-w-3xl">
          <h2 className="font-serif text-3xl tracking-tight">Starting situation</h2>
          <p className="mt-4 text-stone">{study.startingSituation}</p>

          <h2 className="font-serif mt-12 text-3xl tracking-tight">The problem</h2>
          <p className="mt-4 text-stone">{study.problem}</p>

          <h2 className="font-serif mt-12 text-3xl tracking-tight">Strategy</h2>
          <p className="mt-4 text-stone">{study.strategy}</p>

          <h2 className="font-serif mt-12 text-3xl tracking-tight">Work performed</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-stone">
            {study.workPerformed.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className="font-serif mt-12 text-3xl tracking-tight">Baseline</h2>
          <ul className="mt-4 grid gap-3 text-stone">
            {study.baseline.map((item) => (
              <li key={item.label}>
                <strong className="text-ink">{item.value}</strong> — {item.label}
              </li>
            ))}
          </ul>

          <h2 className="font-serif mt-12 text-3xl tracking-tight">Results</h2>
          <p className="mt-4 text-stone">{study.metric}</p>

          {study.quote ? (
            <>
              <h2 className="font-serif mt-12 text-3xl tracking-tight">Client quote</h2>
              <blockquote className="mt-4 border-l-2 border-forest pl-5 text-stone">
                <p>{study.quote.text}</p>
                <footer className="mt-3 text-sm text-ink">{study.quote.attribution}</footer>
              </blockquote>
            </>
          ) : null}

          <h2 className="font-serif mt-12 text-3xl tracking-tight">What this does not prove</h2>
          <p className="mt-4 text-stone">{study.caveats}</p>

          <h2 className="font-serif mt-12 text-3xl tracking-tight">Lessons</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-stone">
            {study.lessons.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        {study.url ? (
          <p className="mt-12">
            <Button href={study.url} variant="secondary">
              Visit {study.client}
            </Button>
          </p>
        ) : null}
      </section>

      <section className="border-t border-mist bg-cream">
        <div className="mx-auto grid max-w-site gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
              Next
            </p>
            <h2 className="font-serif mt-4 max-w-[14ch] text-4xl tracking-tightest md:text-5xl">
              {study.ctaNote}
            </h2>
          </div>
          <aside className="rounded-xl border border-mist bg-white p-8">
            <p className="font-serif text-2xl tracking-tight">What you can expect</p>
            <ul className="mt-5 grid gap-3 text-sm text-stone">
              <li>Direct work, not an account layer</li>
              <li>A review of the Google presence before any retainer talk</li>
              <li>No ranking guarantees</li>
              <li>Capacity stays limited on purpose</li>
            </ul>
            <div className="mt-8">
              <Button href={paths.contact}>{cta.primary}</Button>
            </div>
          </aside>
        </div>
        <div className="mx-auto max-w-site px-6 pb-16">
          <RelatedLinks
            title="Where this kind of work happens"
            items={[
              { href: paths.services, label: "Services" },
              { href: paths.areas, label: "DFW areas" },
              { href: paths.localSeo, label: "Local SEO" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
