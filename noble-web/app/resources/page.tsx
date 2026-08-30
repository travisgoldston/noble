import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { articles, articlesByVertical, industryResourceFilters, resourceCategories } from "@/lib/articles";
import { articlePath, resourceTopicPath } from "@/lib/articles/helpers";
import { industries, industryHref } from "@/lib/industries";
import { cta, paths } from "@/lib/site";
import { RelatedLinks } from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Practical local SEO writing from NOBLE: Google Maps, Google Business Profile, HVAC, dental, optometry, and DFW search — without an AI content farm.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Resources | NOBLE SEO",
    description:
      "Practical local SEO writing for high-value local businesses in Dallas–Fort Worth.",
    url: "/resources",
  },
};

export default function ResourcesPage() {
  return (
    <div>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
        ])}
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-20">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Resources" },
            ]}
          />
          <p className="mt-8 text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Resources
          </p>
          <h1 className="font-serif mt-4 max-w-[16ch] text-5xl tracking-tightest md:text-6xl">
            Notes that help an owner decide what to fix.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            Educational writing around local SEO, Maps, and specific industries.
            Every piece should be useful. We will not publish thin city swaps or
            fake search volumes.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Browse by topic
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {resourceCategories.map((item) => (
              <Link
                key={item.id}
                href={resourceTopicPath(item.id)}
                className="rounded-full border border-mist bg-white px-4 py-2 text-sm hover:border-ink/30"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <p className="mt-12 text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Browse by industry
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {industryResourceFilters.map((item) => {
              const industry = industries.find((entry) => entry.id === item.id);
              const count = articlesByVertical(item.id).length;
              return (
                <Link
                  key={item.id}
                  href={count > 0 ? `#industry-${item.id}` : industry ? industryHref(industry) : "/industries"}
                  className="rounded-full border border-mist bg-white px-4 py-2 text-sm hover:border-ink/30"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="mt-14 grid gap-4">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={articlePath(article.slug)}
                className="rounded-xl border border-mist bg-white p-7 transition-shadow hover:shadow-card"
              >
                <p className="text-xs font-medium tracking-[0.16em] text-forest uppercase">
                  {article.vertical}
                </p>
                <h2 className="font-serif mt-2 text-2xl tracking-tight">{article.title}</h2>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone">
                  {article.description}
                </p>
              </Link>
            ))}
          </div>
          {industryResourceFilters.map((item) => {
            const list = articlesByVertical(item.id);
            if (list.length === 0) return null;
            return (
              <div key={item.id} id={`industry-${item.id}`} className="mt-16">
                <h2 className="font-serif text-3xl tracking-tight">{item.label}</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {list.map((article) => (
                    <Link
                      key={article.slug}
                      href={articlePath(article.slug)}
                      className="rounded-xl border border-mist p-6 hover:shadow-card"
                    >
                      <h3 className="font-medium text-ink">{article.title}</h3>
                      <p className="mt-2 text-sm text-stone">{article.answer}</p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
          <RelatedLinks
            title="Keep going"
            items={[
              { href: paths.fortWorth, label: "Fort Worth SEO" },
              { href: paths.industries, label: "Industries" },
              { href: paths.localSeo, label: "Local SEO" },
              { href: paths.gbp, label: "Google Business Profile" },
              { href: "/industries/hvac-seo/fort-worth", label: "HVAC SEO in Fort Worth" },
              { href: "/industries/dental-seo/fort-worth", label: "Dental SEO in Fort Worth" },
              { href: "/industries/optometry-seo/fort-worth", label: "Optometry SEO in Fort Worth" },
            ]}
          />
        </div>
      </section>
      <FinalCta title={cta.auditTitle} body={cta.auditBody} buttonLabel={cta.form} />
    </div>
  );
}
