import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { RelatedLinks } from "@/components/RelatedLinks";
import { capabilities, locations, searchSurfaces } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "SEO, local SEO, Google Business Profile, technical SEO, and AI search visibility from NOBLE. Plus plain English guides to Google Search, the Local Pack, Maps, branded search, reviews, and AI powered search.",
};

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-20">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Services
          </p>
          <h1 className="font-serif mt-4 max-w-[14ch] text-5xl tracking-tightest md:text-6xl">
            Search work connected to business outcomes.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            Five capabilities. One job: make the business easier to find,
            understand, and trust, without agency theater.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Get a Search Assessment</Button>
            <Button href="/locations" variant="secondary">
              DFW cities
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto grid max-w-site gap-16 px-6">
          {capabilities.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="scroll-mt-28 border-b border-mist pb-12 last:border-0"
            >
              <h2 className="font-serif text-3xl tracking-tight">{item.title}</h2>
              <p className="mt-4 max-w-2xl text-stone">{item.body}</p>
              <div className="mt-8 max-w-3xl rounded-xl border border-mist bg-cream p-7">
                <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
                  How NOBLE would fix it
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone">{item.exampleSetup}</p>
                <p className="mt-3 text-sm leading-relaxed text-stone">{item.exampleFix}</p>
              </div>
              <div className="mt-6">
                <Button href="/contact">Get a Search Assessment</Button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="border-y border-mist bg-cream py-16">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            How people find you
          </p>
          <h2 className="font-serif mt-3 max-w-[16ch] text-3xl tracking-tight md:text-4xl">
            The search surfaces that actually matter.
          </h2>
          <p className="mt-4 max-w-2xl text-stone">
            These pages are written for owners, not for jargon. They explain
            what each surface is, why it matters, and what to check first.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {searchSurfaces.map((item) => (
              <article
                key={item.slug}
                className="flex flex-col rounded-xl border border-mist bg-white p-6"
              >
                <h3 className="font-serif text-2xl tracking-tight">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">{item.body}</p>
                <div className="mt-5">
                  <Button href={item.href} variant="secondary">
                    Learn more
                  </Button>
                </div>
              </article>
            ))}
          </div>
          <RelatedLinks
            title="DFW cities this work covers"
            items={[
              { href: "/locations", label: "All DFW cities" },
              ...locations.map((city) => ({
                href: `/locations/${city.slug}`,
                label: city.name,
              })),
            ]}
          />
        </div>
      </section>
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-16">
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl bg-ink px-8 py-10 text-white md:flex-row md:items-center">
            <h2 className="font-serif max-w-[16ch] text-3xl tracking-tightest">
              See whether this is the right work right now.
            </h2>
            <Button href="/contact" variant="light">
              Get a Search Assessment
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
