import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { cta, paths } from "@/lib/site";

const faqs = [
  {
    question: "Is on-page SEO just rewriting titles?",
    answer:
      "Titles matter. So do headings, the copy on the pages that should produce calls, and internal links that send people — and Google — to those pages. On-page SEO is making the site match how customers search.",
  },
  {
    question: "Do you write blog posts every week?",
    answer:
      "No. We write the pages the business actually needs. A content mill is not the product.",
  },
  {
    question: "How does this relate to Google Maps?",
    answer:
      "Maps still sends people to the website. If the page they land on does not name the job, the city, or the next step, the click is wasted. On-page SEO and the listing have to tell the same story.",
  },
];

export const metadata: Metadata = {
  title: "On-page SEO",
  description:
    "On-page SEO for Dallas–Fort Worth local businesses: titles, headings, service-page copy, and internal links that match how customers search.",
  alternates: { canonical: "/on-page-seo" },
};

export default function OnPageSeoPage() {
  return (
    <div>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "On-page SEO", href: "/on-page-seo" },
          ]),
          serviceSchema({
            name: "On-page SEO",
            description: metadata.description as string,
            url: "/on-page-seo",
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
              { name: "On-page SEO" },
            ]}
          />
          <p className="mt-8 text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            On-page SEO
          </p>
          <h1 className="font-serif mt-4 max-w-[16ch] text-5xl tracking-tightest md:text-6xl">
            Make the pages match how people actually search.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            On-page SEO is the core of the work: titles, headings, service-page
            copy, and internal links. For DFW local businesses it exists so
            Search, Maps, and the site tell the same story — not as a blog
            mill.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={paths.contact}>{cta.primary}</Button>
            <Button href={paths.technical} variant="secondary">
              Technical SEO
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-site px-6">
          <article className="max-w-3xl">
            <h2 className="font-serif text-3xl tracking-tight">What we change on the page</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-stone">
              <li>Title tags and headings that name the work people hire for.</li>
              <li>Service pages for the jobs that actually pay the bills.</li>
              <li>Copy that matches how a DFW customer searches, not filler.</li>
              <li>Internal links from the homepage and service hub to those pages.</li>
              <li>Alignment between the website and the Google Business Profile.</li>
            </ul>
            <h2 className="font-serif mt-12 text-3xl tracking-tight">
              Why this matters before Maps work
            </h2>
            <p className="mt-4 text-stone">
              A click that lands on a vague page does not become a call. That
              is why on-page SEO sits first. Google Business Profile and local
              SEO support it. Technical SEO keeps the pages crawlable.
            </p>
          </article>
          <RelatedLinks
            title="Related"
            items={[
              { href: paths.technical, label: "Technical SEO" },
              { href: paths.gbp, label: "Google Business Profile" },
              { href: paths.localSeo, label: "Local SEO" },
              { href: paths.fortWorth, label: "Fort Worth SEO" },
              { href: paths.industries, label: "Industries" },
              { href: paths.caseStudies, label: "Case studies" },
            ]}
          />
        </div>
      </section>
      <FaqList items={faqs} title="On-page SEO questions" />
      <FinalCta title="See what the pages are actually saying today." />
    </div>
  );
}
