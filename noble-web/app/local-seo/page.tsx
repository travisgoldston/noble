import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/components/JsonLd";
import { PricingBlock } from "@/components/PricingBlock";
import { RelatedLinks } from "@/components/RelatedLinks";
import { cta, paths } from "@/lib/site";

const faqs = [
  {
    question: "Is local SEO the same as Google Business Profile work?",
    answer:
      "GBP is a major piece of local SEO, not the whole job. Rankings also depend on on-page signals, reviews, proximity, and whether the website can be crawled and understood. NOBLE treats the listing and the site as one system.",
  },
  {
    question: "How long before we see movement?",
    answer:
      "Some listing and technical fixes show up quickly. Competitive Map pack movement usually takes longer. We set expectations against the market, not a generic 90-day promise.",
  },
  {
    question: "Where do you work?",
    answer:
      "We serve businesses across Dallas–Fort Worth. We work remotely and do not claim a physical office in any DFW city.",
  },
];

export const metadata: Metadata = {
  title: "Local SEO",
  description:
    "Local SEO for Dallas–Fort Worth service businesses: Maps, Google Business Profile, on-page signals, and the work that turns visibility into calls.",
  alternates: { canonical: "/local-seo" },
};

export default function LocalSeoPage() {
  return (
    <div>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Local SEO", href: "/local-seo" },
          ]),
          serviceSchema({
            name: "Local SEO",
            description: metadata.description as string,
            url: "/local-seo",
          }),
          faqSchema(faqs),
        ]}
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-20">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: "Local SEO" },
            ]}
          />
          <p className="mt-8 text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Local SEO
          </p>
          <h1 className="font-serif mt-4 max-w-[16ch] text-5xl tracking-tightest md:text-6xl">
            Get found when nearby customers are ready to hire.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            Local SEO is how a DFW HVAC company, dentist, or optometrist
            shows up in Google Search and Maps instead of losing the job to a
            clearer competitor. The work is practical: relevance, distance,
            prominence, and a website that can convert the click.
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
            <h2 className="font-serif text-3xl tracking-tight">What the work covers</h2>
            <p className="mt-4 text-stone">
              We start with how you actually show up today: the Map pack, the
              organic results, branded search, and the Google Business Profile.
              Then we fix the gaps that are costing calls — categories, service
              areas, on-page service pages, internal links, and the technical
              issues that keep good pages from ranking.
            </p>
            <h2 className="font-serif mt-12 text-3xl tracking-tight">
              Who this is for
            </h2>
            <p className="mt-4 text-stone">
              Owner-operated local businesses across Dallas–Fort Worth —
              home services, dental and optometry practices, and other firms
              where a new customer is worth real money. If that customer has
              meaningful economic value, local SEO is usually a better
              investment than a cheap package or another round of ads that
              stop when you stop paying.
            </p>
            <h2 className="font-serif mt-12 text-3xl tracking-tight">
              What it is not
            </h2>
            <p className="mt-4 text-stone">
              It is not social media management, branding, generic web design,
              or PPC. Those can be useful. They are not what NOBLE sells.
            </p>
          </article>
          <RelatedLinks
            title="Related"
            items={[
              { href: paths.gbp, label: "Google Business Profile" },
              { href: paths.technical, label: "Technical SEO" },
              { href: paths.fortWorth, label: "Fort Worth SEO" },
              { href: paths.industries, label: "Industries" },
              { href: "/industries/hvac-seo", label: "HVAC SEO" },
              { href: "/industries/dental-seo", label: "Dental SEO" },
              { href: "/industries/optometry-seo", label: "Optometry SEO" },
              { href: paths.resources, label: "Resources" },
              { href: paths.areas, label: "DFW areas" },
            ]}
          />
        </div>
      </section>
      <PricingBlock />
      <FaqList items={faqs} title="Local SEO questions" />
      <FinalCta title="See how you show up for the searches that should produce calls." />
    </div>
  );
}
