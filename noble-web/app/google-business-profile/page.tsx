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
    question: "Do you need access to the Google Business Profile?",
    answer:
      "Yes, for real work. Managers access is enough. We do not need to own the listing, and we will not move it to a location that is not real.",
  },
  {
    question: "Can you use a virtual office or a family address to rank in a DFW city?",
    answer:
      "No. If the business is a service-area business, the listing should be configured that way. Manufacturing an address to game Maps is against Google’s rules and against how Noble works.",
  },
  {
    question: "Is GBP work a one-time cleanup?",
    answer:
      "Cleanup is the start. Listings drift: hours get suggested, photos go stale, Q&A fills with junk. Ongoing monitoring is part of local SEO, not an upsell.",
  },
];

export const metadata: Metadata = {
  title: "Google Business Profile",
  description:
    "Google Business Profile and Google Maps work for local service businesses: categories, services, photos, reviews, and monitoring that support real calls.",
  alternates: { canonical: "/google-business-profile" },
};

export default function GbpPage() {
  return (
    <div>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Google Business Profile", href: "/google-business-profile" },
          ]),
          serviceSchema({
            name: "Google Business Profile",
            description: metadata.description as string,
            url: "/google-business-profile",
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
              { name: "Google Business Profile" },
            ]}
          />
          <p className="mt-8 text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Google Business Profile
          </p>
          <h1 className="font-serif mt-4 max-w-[16ch] text-5xl tracking-tightest md:text-6xl">
            Make the listing match the business — and keep it that way.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            For a lot of DFW service searches, the Map pack is
            the whole decision. A complete, honest Google Business Profile is
            often the difference between a call and a competitor getting the
            job.
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
            <h2 className="font-serif text-3xl tracking-tight">What we do</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-stone">
              <li>Primary and secondary categories that match the work you want.</li>
              <li>Services, description, hours, and attributes that match reality.</li>
              <li>Photos that look like the business, not a stock library.</li>
              <li>Review strategy that asks for specifics, not star counts with no text.</li>
              <li>Posts, Q&amp;A, and suggested-edit monitoring so the listing does not rot.</li>
            </ul>
            <h2 className="font-serif mt-12 text-3xl tracking-tight">
              How this supports local SEO
            </h2>
            <p className="mt-4 text-stone">
              Maps visibility is not a separate product. Prominence on the
              listing, relevance on the website, and consistent name / phone /
              service-area facts all feed the same outcome: the right customer
              finds you and calls.
            </p>
          </article>
          <RelatedLinks
            title="Related"
            items={[
              { href: paths.localSeo, label: "Local SEO" },
              { href: paths.technical, label: "Technical SEO" },
              { href: "/google-maps", label: "Google Maps, in plain English" },
            ]}
          />
        </div>
      </section>
      <FaqList items={faqs} title="GBP questions" />
      <FinalCta title="Want a straight read on the listing?" />
    </div>
  );
}
