import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/components/JsonLd";
import { PricingBlock } from "@/components/PricingBlock";
import { RelatedLinks } from "@/components/RelatedLinks";
import { caseStudies } from "@/lib/case-studies";
import { locations, processSteps, whoWeHelp } from "@/lib/content";
import { cta, paths } from "@/lib/site";
import { notFound } from "next/navigation";

const faqs = [
  {
    question: "Does Noble have a Fort Worth office?",
    answer:
      "No. We do not claim a physical Fort Worth office, a virtual office, or a residential address used to manufacture Maps presence. The founder works remotely and serves Fort Worth businesses as part of DFW coverage.",
  },
  {
    question: "Do you need a Fort Worth office to do this work?",
    answer:
      "No. Local SEO does not require a storefront if the work is honest. We help Fort Worth businesses get found. We do not pretend to be a local pack listing for Noble itself with a fake pin.",
  },
  {
    question: "Do you only take Fort Worth clients?",
    answer:
      "No. We serve businesses across Dallas–Fort Worth. This page is specifically about Fort Worth search. Capacity stays limited either way.",
  },
  {
    question: "What kinds of Fort Worth businesses is this for?",
    answer:
      "Owner-operated service businesses where a new customer is worth real money: HVAC, plumbing, roofing, electrical, landscaping, remodeling, and similar trades. We do not chase every industry page for search volume.",
  },
  {
    question: "How much does Fort Worth local SEO cost?",
    answer:
      "Local SEO starts at $1,250/month. Most clients invest $1,250–$2,500/month depending on competition and scope. No Bronze/Silver/Gold packages.",
  },
];

export const metadata: Metadata = {
  title: "Fort Worth SEO",
  description:
    "Founder-led local SEO for Fort Worth businesses. Google Maps, Google Business Profile, and technical SEO — remote, honest, and built on proof. No fake Fort Worth office.",
  alternates: { canonical: "/areas/fort-worth-seo" },
};

export default function FortWorthSeoPage() {
  const city = locations.find((item) => item.slug === "fort-worth");
  if (!city) notFound();

  return (
    <div>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Areas", href: "/areas" },
            { name: "Fort Worth SEO", href: "/areas/fort-worth-seo" },
          ]),
          serviceSchema({
            name: "Fort Worth SEO",
            description: metadata.description as string,
            url: "/areas/fort-worth-seo",
          }),
          faqSchema(faqs),
        ]}
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-20">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Areas", href: "/areas" },
              { name: "Fort Worth SEO" },
            ]}
          />
          <p className="mt-8 text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Fort Worth, Texas
          </p>
          <h1 className="font-serif mt-4 max-w-[18ch] text-5xl tracking-tightest md:text-6xl">
            Local SEO for Fort Worth businesses.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            Founder-led local SEO for companies that want more of the right
            Fort Worth customers finding them on Google Search and Maps. We
            work remotely. We do not invent a Fort Worth office to look local.
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
        <div className="mx-auto max-w-site px-6">
          <article className="max-w-3xl">
            <h2 className="font-serif text-3xl tracking-tight">
              What Noble does in Fort Worth
            </h2>
            <p className="mt-4 text-stone">
              The product is local SEO. Google Business Profile, Maps
              visibility, on-page service pages, and technical fixes are how
              the work gets done. The outcome is qualified calls and customers —
              not a dashboard full of vanity rankings.
            </p>
            <p className="mt-4 text-stone">{city.intro}</p>

            <h2 className="font-serif mt-12 text-3xl tracking-tight">
              How Fort Worth actually searches
            </h2>
            {city.places.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-stone">
                {paragraph}
              </p>
            ))}

            <h2 className="font-serif mt-12 text-3xl tracking-tight">
              Google Maps and local SEO here
            </h2>
            {city.searchReality.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-stone">
                {paragraph}
              </p>
            ))}
            <p className="mt-4 text-stone">
              Organic search still matters after the map click. If the website
              never names roof repair, AC service, or the part of town you
              actually cover, the pack click dies on the homepage. Technical
              SEO is what keeps those pages indexable and usable on a phone.
            </p>

            <h2 className="font-serif mt-12 text-3xl tracking-tight">
              Who this is for
            </h2>
            <p className="mt-4 text-stone">{city.whoFor}</p>
          </article>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whoWeHelp.map((item) => (
              <li key={item} className="rounded-xl border border-mist px-5 py-4 text-sm">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-12 max-w-3xl rounded-xl border border-mist bg-cream p-8">
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
              A real example
            </p>
            <h2 className="font-serif mt-3 text-2xl tracking-tight md:text-3xl">
              {city.exampleTitle}
            </h2>
            <p className="mt-4 text-stone">{city.exampleProblem}</p>
            <ol className="mt-5 grid gap-3 text-sm text-stone">
              {city.exampleFix.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="font-serif text-lg text-forest">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-y border-mist bg-ink py-20 text-white">
        <div className="mx-auto max-w-site px-6">
          <h2 className="font-serif max-w-[14ch] text-4xl tracking-tightest md:text-5xl">
            Methodology
          </h2>
          <p className="mt-5 max-w-2xl text-white/65">
            Same cycle we use across Dallas–Fort Worth.
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
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-site px-6">
          <h2 className="font-serif text-4xl tracking-tightest md:text-5xl">Proof</h2>
          <p className="mt-5 max-w-2xl text-stone">
            Published results follow the same rules on this page as everywhere
            else: real numbers, stated caveats, no invented Fort Worth plumbing
            case studies.
          </p>
          <div className="mt-10">
            <CaseStudyCard study={caseStudies[0]} />
          </div>
        </div>
      </section>

      <PricingBlock />
      <FaqList items={faqs} title="Fort Worth SEO questions" />
      <div className="mx-auto max-w-site px-6 pb-8">
        <RelatedLinks
          title="Keep going"
          items={[
            { href: paths.localSeo, label: "Local SEO" },
            { href: paths.gbp, label: "Google Business Profile" },
            { href: paths.technical, label: "Technical SEO" },
            { href: paths.areas, label: "All DFW areas" },
          ]}
        />
      </div>
      <FinalCta title="See how Fort Worth customers find you today." />
    </div>
  );
}
