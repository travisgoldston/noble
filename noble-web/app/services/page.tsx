import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { FinalCta } from "@/components/FinalCta";
import { PricingBlock } from "@/components/PricingBlock";
import { RelatedLinks } from "@/components/RelatedLinks";
import { capabilities, supportingTactics } from "@/lib/content";
import { cta, paths } from "@/lib/site";

export const metadata: Metadata = {
  title: "Local SEO Services",
  description:
    "Founder-led local SEO for Dallas–Fort Worth businesses: Google Business Profile, local rankings, and technical SEO without agency retainers.",
  alternates: { canonical: "/services" },
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
            Local SEO is the product.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            Noble is not a full-service marketing agency. The customer buys
            search growth: more of the right people finding the business on
            Google Search and Maps.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={paths.contact}>{cta.primary}</Button>
            <Button href={paths.caseStudies} variant="secondary">
              {cta.proof}
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
                  How Noble would fix it
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone">{item.exampleSetup}</p>
                <p className="mt-3 text-sm leading-relaxed text-stone">{item.exampleFix}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button href={item.href} variant="secondary">
                  {item.title} in detail
                </Button>
                <Button href={paths.contact}>{cta.primary}</Button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="border-y border-mist bg-cream py-16">
        <div className="mx-auto max-w-site px-6">
          <h2 className="font-serif max-w-[16ch] text-3xl tracking-tight md:text-4xl">
            Tactics that support the outcome.
          </h2>
          <p className="mt-4 max-w-2xl text-stone">
            These are not extra products. They are how local SEO gets done.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {supportingTactics.map((item) => (
              <li key={item} className="rounded-xl border border-mist bg-white px-5 py-4 text-sm">
                {item}
              </li>
            ))}
          </ul>
          <RelatedLinks
            title="Start with the market"
            items={[
              { href: paths.areas, label: "DFW areas" },
              { href: paths.caseStudies, label: "Case studies" },
            ]}
          />
        </div>
      </section>
      <PricingBlock />
      <FinalCta title="See whether local SEO is the right work right now." />
    </div>
  );
}
