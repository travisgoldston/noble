import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { cta, paths } from "@/lib/site";

const faqs = [
  {
    question: "Do I need technical SEO if I only care about Google Maps?",
    answer:
      "Often, yes. Maps clicks still land on the website. If important pages are blocked, slow, or missing, the listing has nowhere useful to send people. Technical work supports local results; it is not a separate vanity project.",
  },
  {
    question: "Is this website redesign?",
    answer:
      "No. We fix crawlability, indexation, structure, structured data, internal linking, and performance issues that suppress local pages. Visual redesign is out of scope unless it is required to make the engine work.",
  },
  {
    question: "How do you decide what to fix first?",
    answer:
      "Whatever is blocking the pages that should produce calls. A noindex service page beats a Core Web Vitals trophy. Diagnose, then prioritize.",
  },
];

export const metadata: Metadata = {
  title: "Technical SEO",
  description:
    "Technical SEO that supports local visibility: indexing, crawlability, structured data, internal linking, and Core Web Vitals for service businesses.",
  alternates: { canonical: "/technical-seo" },
};

export default function TechnicalSeoPage() {
  return (
    <div>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Technical SEO", href: "/technical-seo" },
          ]),
          serviceSchema({
            name: "Technical SEO",
            description: metadata.description as string,
            url: "/technical-seo",
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
              { name: "Technical SEO" },
            ]}
          />
          <p className="mt-8 text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Technical SEO
          </p>
          <h1 className="font-serif mt-4 max-w-[16ch] text-5xl tracking-tightest md:text-6xl">
            If the site cannot be crawled, local SEO cannot work.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            Technical SEO is real engineering work on the site: indexability,
            architecture, structured data, internal linking, and speed. For
            local businesses it exists to support Maps and organic visibility —
            not as a separate product to upsell.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={paths.contact}>{cta.primary}</Button>
            <Button href={paths.localSeo} variant="secondary">
              Local SEO
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-site px-6">
          <article className="max-w-3xl">
            <h2 className="font-serif text-3xl tracking-tight">What we check and fix</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-stone">
              <li>Crawlability and index rules, including accidental noindex.</li>
              <li>Canonicals, redirects, and duplicate or thin URL patterns.</li>
              <li>Service-page architecture and internal linking.</li>
              <li>Structured data that accurately describes the business and pages.</li>
              <li>Mobile performance and Core Web Vitals on the templates that get traffic.</li>
            </ul>
            <h2 className="font-serif mt-12 text-3xl tracking-tight">
              Why this matters for DFW service businesses
            </h2>
            <p className="mt-4 text-stone">
              A lot of trade websites were built as lead-form templates. They
              look fine in a demo and fail on a phone in a parking lot. Getting
              found only helps if the next step loads, makes sense, and can be
              indexed in the first place.
            </p>
          </article>
          <RelatedLinks
            title="Related"
            items={[
              { href: paths.localSeo, label: "Local SEO" },
              { href: paths.gbp, label: "Google Business Profile" },
              { href: paths.caseStudies, label: "Case studies" },
            ]}
          />
        </div>
      </section>
      <FaqList items={faqs} title="Technical SEO questions" />
      <FinalCta title="If the site is the bottleneck, say so in the audit." />
    </div>
  );
}
