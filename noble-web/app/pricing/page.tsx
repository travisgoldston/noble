import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  offerCatalogSchema,
} from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import {
  pricing,
  pricingComparisons,
  pricingFailure,
  pricingFaqs,
  pricingGuide,
  pricingPlan,
  pricingProblems,
  pricingSuccess,
  pricingTiers,
} from "@/lib/pricing";
import { cta, paths } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Noble local SEO pricing for Dallas–Fort Worth businesses: Maps $1,250, Local $1,850, and Competitive $2,500 per month. Founder-led work, public prices, no agency black box.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <div>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Pricing", href: paths.pricing },
          ]),
          offerCatalogSchema(
            pricingTiers.map((tier) => ({
              name: `${tier.name} local SEO`,
              description: tier.summary,
              price: tier.price,
            })),
          ),
          faqSchema(pricingFaqs),
        ]}
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-20">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Pricing" }]} />
          <p className="mt-8 text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Pricing
          </p>
          <h1 className="font-serif mt-4 max-w-[16ch] text-5xl tracking-tightest md:text-6xl">
            Your customers are searching. Make sure they find you.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium text-ink">
            Owner-led Dallas–Fort Worth businesses hire Noble to turn Google
            Search and Maps visibility into more qualified calls.
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone">
            If they cannot find you, they hire the company that looks clearer.
            That is the problem. The plan is a free audit, a public monthly
            number, and local SEO done by the person you talk to — not a
            stacked agency retainer.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={paths.contact}>{cta.primary}</Button>
            <Button href="#plans" variant="secondary">
              See the plans
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            The problem
          </p>
          <h2 className="font-serif mt-4 max-w-[16ch] text-4xl tracking-tightest md:text-5xl">
            You are not losing to better work. You are losing to clearer Google.
          </h2>
          <p className="mt-5 max-w-2xl text-stone">
            Nearby customers already want the job done. They search. They tap
            Maps. They bounce from a slow site. Then they call someone else.
            Paying for activity does not fix that. Making the business
            understandable does.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {pricingProblems.map((item) => (
              <article key={item.title} className="rounded-xl border border-mist bg-cream p-7">
                <h3 className="font-serif text-2xl tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-mist bg-cream py-20 md:py-24">
        <div className="mx-auto grid max-w-site gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
              Why founder-led
            </p>
            <h2 className="font-serif mt-4 max-w-[16ch] text-4xl tracking-tightest md:text-5xl">
              A founder-led practice, not an agency black box.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone">{pricingGuide.empathy}</p>
            <p className="mt-4 text-lg leading-relaxed text-stone">{pricingGuide.authority}</p>
          </div>
          <aside className="rounded-xl border border-mist bg-white p-7">
            <p className="font-serif text-2xl tracking-tight">What you are buying</p>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              Search growth: more of the right people finding the business and
              calling. Google Business Profile, Maps, on-page SEO, and
              technical work are how that happens — not extra products.
              On-page SEO is in every plan.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-stone">
              We do not sell social, PPC, branding, or generic web design. We
              do not guarantee rankings. We do not fabricate case studies.
            </p>
            <div className="mt-6">
              <Button href={paths.caseStudies} variant="secondary">
                {cta.proof}
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-ink py-20 text-white md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-white/50 uppercase">
            The plan
          </p>
          <h2 className="font-serif mt-4 max-w-[14ch] text-4xl tracking-tightest md:text-5xl">
            Three steps. Then you decide.
          </h2>
          <p className="mt-5 max-w-2xl text-white/65">
            No pitch deck. No obligation on the audit. If the budget, the
            market, or the site cannot support the work, we would rather say
            no than sell you a plan that cannot pay for itself.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {pricingPlan.map((step) => (
              <article
                key={step.n}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-7"
              >
                <p className="font-serif text-3xl text-white/35">{step.n}</p>
                <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="scroll-mt-28 py-20 md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Monthly plans
          </p>
          <h2 className="font-serif mt-4 max-w-[16ch] text-4xl tracking-tightest md:text-5xl">
            Local SEO, priced for the work.
          </h2>
          <p className="mt-5 max-w-2xl text-stone">{pricing.summary}</p>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {pricingTiers.map((tier) => {
              const featured = tier.featured;
              return (
                <article
                  key={tier.id}
                  className={`flex flex-col rounded-xl border p-7 ${
                    featured
                      ? "border-forest bg-cream shadow-card"
                      : "border-mist bg-white"
                  }`}
                >
                  <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
                    {tier.kicker}
                  </p>
                  <h3 className="font-serif mt-3 text-3xl tracking-tight">{tier.name}</h3>
                  <p className="font-serif mt-3 text-4xl tracking-tight">{tier.priceLabel}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-stone">{tier.summary}</p>
                  <p className="mt-4 text-sm text-ink">{tier.bestFor}</p>
                  <ul className="mt-6 grid gap-2 text-sm text-stone">
                    {tier.includes.map((item) => (
                      <li key={item} className="border-t border-mist pt-2 first:border-0 first:pt-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-xs font-medium tracking-[0.14em] text-stone uppercase">
                    Not this plan
                  </p>
                  <ul className="mt-2 grid gap-1 text-xs leading-relaxed text-stone">
                    {tier.notIncluded.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button href={paths.contact}>
                      {featured ? cta.primary : "Start with an audit"}
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-stone">
            The number is here so the right businesses can self-qualify. If
            $1,250/month is not realistic, we are probably not the right fit.
          </p>
        </div>
      </section>

      <section className="border-y border-mist bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Noble vs other SEO
          </p>
          <h2 className="font-serif mt-4 max-w-[16ch] text-4xl tracking-tightest md:text-5xl">
            You are not buying a logo and a login.
          </h2>
          <p className="mt-5 max-w-2xl text-stone">
            Most owners comparing SEO firms are really choosing between a
            founder who does the work, an agency that resells a bench, and a
            cheap package that treats every suburb in North Texas the same.
          </p>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {pricingComparisons.map((column) => (
              <article
                key={column.id}
                className={`rounded-xl border p-7 ${
                  column.highlight
                    ? "border-forest bg-white"
                    : "border-mist bg-white"
                }`}
              >
                <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
                  {column.kicker}
                </p>
                <h3 className="font-serif mt-3 text-2xl tracking-tight">{column.name}</h3>
                <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-stone">
                  {column.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-site gap-4 px-6 md:grid-cols-2">
          <article className="rounded-xl border border-mist bg-cream p-8 md:p-10">
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
              If this works
            </p>
            <h2 className="font-serif mt-4 text-3xl tracking-tight md:text-4xl">
              {pricingSuccess.title}
            </h2>
            <p className="mt-4 text-stone">{pricingSuccess.body}</p>
          </article>
          <article className="rounded-xl border border-mist bg-ink p-8 text-white md:p-10">
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-white/50 uppercase">
              If you wait
            </p>
            <h2 className="font-serif mt-4 text-3xl tracking-tight md:text-4xl">
              {pricingFailure.title}
            </h2>
            <p className="mt-4 text-white/70">{pricingFailure.body}</p>
          </article>
        </div>
      </section>

      <FaqList items={pricingFaqs} title="Questions owners ask before they buy" />

      <div className="mx-auto max-w-site px-6">
        <RelatedLinks
          title="Related"
          items={[
            { href: paths.localSeo, label: "Local SEO" },
            { href: paths.caseStudies, label: "Case studies" },
            { href: paths.contact, label: "Free SEO audit" },
          ]}
        />
      </div>

      <FinalCta
        title="Find out which plan, if any, is worth it."
        body="A free audit of Search, Maps, and the site. Then a clear yes, no, or not yet — including which monthly plan fits."
      />
    </div>
  );
}
