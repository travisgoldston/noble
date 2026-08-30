import { AuditForm } from "@/components/AuditForm";
import { Button } from "@/components/Button";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd, faqSchema } from "@/components/JsonLd";
import { PricingBlock } from "@/components/PricingBlock";
import { caseStudies } from "@/lib/case-studies";
import {
  capabilities,
  homeFaqs,
  locations,
  processSteps,
  searchSurfaces,
  whoWeHelp,
} from "@/lib/content";
import { cityPath, cta, paths } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "NOBLE SEO | SEO built on proof",
  },
  description:
    "Founder-led local SEO for Dallas–Fort Worth businesses. We help local companies turn Google Search and Maps visibility into more qualified calls.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const proof = caseStudies[0];

  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_88%_0%,rgba(91,184,255,0.28),transparent_40%),radial-gradient(circle_at_12%_100%,rgba(58,86,228,0.10),transparent_42%),linear-gradient(180deg,#f8f9fa_0%,#ffffff_72%)]">
        <div className="mx-auto grid max-w-site items-start gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
              NOBLE SEO
            </p>
            <h1 className="font-serif mt-5 max-w-[14ch] text-5xl leading-[1.05] tracking-tightest text-ink md:text-6xl">
              SEO built on{" "}
              <Link
                href={paths.caseStudies}
                className="underline decoration-forest decoration-2 underline-offset-[0.18em] hover:text-forest"
              >
                proof
              </Link>
              .
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium text-ink md:text-xl">
              Founder-led local SEO for Dallas–Fort Worth businesses.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone">
              We help local businesses turn Google Search and Google Maps
              visibility into more qualified calls, leads, and customers —
              without bloated agency retainers or black-box reporting.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href={paths.contact}>{cta.primary}</Button>
              <Button href={paths.caseStudies} variant="secondary">
                {cta.proof}
              </Button>
            </div>
          </div>
          <div className="rounded-xl border border-mist bg-white p-6 shadow-card md:p-7">
            <p className="text-[0.72rem] font-medium tracking-[0.18em] text-forest uppercase">
              No big deal
            </p>
            <h2 className="font-serif mt-2 text-2xl tracking-tight">
              A 30 second look. You can walk away after.
            </h2>
            <p className="mt-2 text-sm text-stone">
              Tell us a little. We will look at how the business shows up in
              Search and Maps. No pitch deck. No obligation.
            </p>
            <div className="mt-6">
              <AuditForm compact />
            </div>
            <p className="mt-5 text-xs leading-relaxed text-stone">
              This first look is just information for you. You can choose to do
              nothing with it.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-mist py-12">
        <div className="mx-auto max-w-site px-6">
          <p className="text-center text-[0.72rem] font-medium tracking-[0.22em] text-stone uppercase">
            Trusted by
          </p>
          <div className="mt-6 flex items-center justify-center gap-8">
            <span className="hidden h-px w-24 bg-mist sm:block" aria-hidden="true" />
            <a
              href="https://budgetocity.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <img
                src="/budgetocity-logo.png"
                alt="Budgetocity"
                width={88}
                height={88}
                className="h-[88px] w-[88px] rounded-full object-contain"
              />
              <span
                className="mt-2.5 font-sans text-[0.7rem] font-medium tracking-[0.22em] uppercase"
                style={{ color: "#77C578" }}
              >
                Budgetocity
                <sup className="ml-0.5 text-[0.45rem] tracking-normal">TM</sup>
              </span>
            </a>
            <span className="hidden h-px w-24 bg-mist sm:block" aria-hidden="true" />
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {proof.results.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-mist bg-cream p-6 text-center">
                <p className="font-serif text-3xl tracking-tight">{stat.value}</p>
                <p className="mt-2 text-sm text-stone">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-stone">
            From the{" "}
            <Link href={paths.budgetocity} className="text-forest hover:text-forest-deep">
              Budgetocity organic SEO case study
            </Link>
            . Local service results are published the same way: with numbers,
            caveats, and permission.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            How people find you
          </p>
          <h2 className="font-serif mt-4 max-w-[16ch] text-4xl tracking-tightest md:text-5xl">
            Customers search across more than ten blue links.
          </h2>
          <p className="mt-5 max-w-2xl text-stone">
            The job is to make the business clear wherever a serious customer
            looks — Search, the Local Pack, Maps, and branded results. That is
            local SEO, not a pile of disconnected products.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {searchSurfaces.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-xl border border-mist bg-white p-6"
              >
                <h3 className="font-serif text-2xl tracking-tight">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">{item.body}</p>
                <div className="mt-5">
                  <Button href={item.href} variant="secondary">
                    {item.title}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Who this is for
          </p>
          <h2 className="font-serif mt-4 max-w-[16ch] text-4xl tracking-tightest md:text-5xl">
            Owner-led local businesses.
          </h2>
          <p className="mt-5 max-w-2xl text-stone">
            NOBLE is built for companies where a new customer is worth real
            money. If a booked job, a new patient, or a signed project pays for
            the work, local SEO can make sense.
          </p>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whoWeHelp.map((item) => (
              <li key={item.label} className="rounded-xl border border-mist bg-cream px-5 py-4 text-sm">
                {item.href ? (
                  <Link href={item.href} className="hover:text-forest">
                    {item.label}
                  </Link>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-stone">
            Industry-specific pages live deeper in the site — not as a homepage
            keyword list.{" "}
            <Link href={paths.industries} className="text-forest hover:text-forest-deep">
              See industries
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="services" className="border-y border-mist bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            What NOBLE does
          </p>
          <h2 className="font-serif mt-4 max-w-[16ch] text-4xl tracking-tightest md:text-5xl">
            Local SEO. That is the product.
          </h2>
          <p className="mt-5 max-w-2xl text-stone">
            Google Business Profile, Maps, on-page work, and technical fixes
            are tactics. The customer buys search growth: more of the right
            people finding the business and calling.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {capabilities.map((item) => (
              <article key={item.id} className="flex flex-col rounded-xl border border-mist bg-white p-7">
                <h3 className="font-serif text-2xl tracking-tight">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">{item.body}</p>
                <div className="mt-5">
                  <Button href={item.href} variant="secondary">
                    {item.title}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-white/50 uppercase">
            How NOBLE works
          </p>
          <h2 className="font-serif mt-4 max-w-[14ch] text-4xl tracking-tightest md:text-5xl">
            Diagnose. Prioritize. Fix. Monitor.
          </h2>
          <p className="mt-5 max-w-2xl text-white/65">
            A short cycle keeps the budget on the problems that actually block
            calls, not a retainer full of activity.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
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
          <div className="mt-12 max-w-3xl border-t border-white/10 pt-10">
            <h3 className="font-serif text-3xl tracking-tight">
              If SEO is the fuel, the website is the engine.
            </h3>
            <p className="mt-4 text-white/70">
              If the engine is broken, you just waste gas. Traffic that hits a
              slow, confusing, or unclear site does not turn into calls.
            </p>
            <p className="mt-4 text-white/70">
              That is why local SEO is paired with technical work when the site
              itself is holding you back. Getting found only helps if the next
              step is obvious.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={paths.contact} variant="light">
                {cta.primary}
              </Button>
              <Button href={paths.technical} variant="onDark">
                Technical SEO
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-mist bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Dallas–Fort Worth
          </p>
          <h2 className="font-serif mt-4 max-w-[16ch] text-4xl tracking-tightest md:text-5xl">
            Local SEO for the cities you actually serve.
          </h2>
          <p className="mt-5 max-w-2xl text-stone">
            Search behaves differently in Fort Worth than it does in McKinney.
            These pages are built around how people here look for a business —
            not a city name swapped into a template. We serve DFW remotely and
            do not claim a physical office.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {locations.map((city) => (
              <Button key={city.slug} href={cityPath(city.slug)} variant="secondary">
                {city.name}
              </Button>
            ))}
          </div>
          <div className="mt-8">
            <Button href={paths.areas}>All DFW areas</Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-site gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
              Why founder-led
            </p>
            <h2 className="font-serif mt-4 max-w-[16ch] text-4xl tracking-tightest md:text-5xl">
              You work with the person doing the work.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone">
              NOBLE is not a full-service agency. Capacity stays small on
              purpose. Strategy, diagnosis, and client communication stay with
              the founder. That is how the work stays tied to proof instead of
              an account layer.
            </p>
          </div>
          <aside className="rounded-xl border border-mist bg-cream p-7">
            <p className="font-serif text-2xl tracking-tight">No bloat. No layers.</p>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              If we work together, you work with us, not an account team
              handing notes down a chain. The first conversation is about fit.
            </p>
            <div className="mt-6">
              <Button href={paths.about} variant="secondary">
                About NOBLE
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section id="work" className="border-y border-mist bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Selected work
          </p>
          <h2 className="font-serif mt-4 text-4xl tracking-tightest md:text-5xl">
            The brand promise is proof.
          </h2>
          <p className="mt-5 max-w-2xl text-stone">
            Real organic work. No ad spend required to move the needle. We do
            not fabricate results, and we do not imply causation we cannot
            establish.
          </p>
          <div className="mt-12">
            <CaseStudyCard study={proof} />
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={paths.contact}>{cta.primary}</Button>
            <Button href={paths.caseStudies} variant="secondary">
              {cta.proof}
            </Button>
          </div>
        </div>
      </section>

      <PricingBlock />
      <FaqList items={homeFaqs} />
      <FinalCta
        title="Find out whether the Google presence is costing you jobs."
        body="A free SEO audit of Search, Maps, and the site. Then a clear yes, no, or not yet."
      />
    </>
  );
}
