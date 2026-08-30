import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/components/JsonLd";
import { PricingBlock } from "@/components/PricingBlock";
import { RelatedLinks } from "@/components/RelatedLinks";
import { articlePath } from "@/lib/articles/helpers";
import { getArticle } from "@/lib/articles";
import { getGroup, citiesForIndustry, industryCityHref, industryHref } from "@/lib/industries";
import type { Industry } from "@/lib/industries";
import { locations } from "@/lib/content";
import { cta, industryPath, paths } from "@/lib/site";

export function IndustryPage({ industry }: { industry: Industry }) {
  const group = getGroup(industry.group);
  const cityPages = citiesForIndustry(industry.slug);
  const articles = industry.relatedArticleSlugs
    .map((slug) => getArticle(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const breadcrumbs = [
    { name: "Home", href: paths.home },
    { name: "Industries", href: paths.industries },
    ...(group ? [{ name: group.name, href: industryPath(group.slug) }] : []),
    { name: industry.navLabel },
  ];
  const schemaCrumbs = [
    { name: "Home", href: paths.home },
    { name: "Industries", href: paths.industries },
    ...(group ? [{ name: group.name, href: industryPath(group.slug) }] : []),
    { name: industry.navLabel, href: industryHref(industry) },
  ];

  return (
    <div>
      <JsonLd
        data={[
          breadcrumbSchema(schemaCrumbs),
          serviceSchema({
            name: `${industry.name} local SEO`,
            description: industry.description,
            url: industryHref(industry),
          }),
          faqSchema(industry.faqs),
        ]}
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-20">
          <Breadcrumbs items={breadcrumbs} />
          <p className="mt-8 text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            {industry.navLabel}
          </p>
          <h1 className="font-serif mt-4 max-w-[16ch] text-5xl tracking-tightest md:text-6xl">
            {industry.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">{industry.lede}</p>
          <p className="mt-4 max-w-2xl text-stone">{industry.problem}</p>
          <p className="mt-4 max-w-2xl text-stone">{industry.outcome}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={paths.contact}>{cta.form}</Button>
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
              What {industry.name.toLowerCase()} businesses actually run into
            </h2>
            <div className="mt-10 grid gap-4">
              {industry.problems.map((item) => (
                <div key={item.title} className="rounded-xl border border-mist bg-white p-6">
                  <h3 className="font-medium text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{item.body}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif mt-16 text-3xl tracking-tight">What NOBLE does</h2>
            <p className="mt-4 text-stone">
              The product is local SEO. The work below is what usually matters for{" "}
              {industry.name} businesses in Dallas–Fort Worth — not a menu of
              unrelated marketing services.
            </p>
            <ul className="mt-8 grid gap-4">
              {industry.approach.map((item) => (
                <li key={item.title} className="rounded-xl border border-mist px-5 py-4">
                  {item.href ? (
                    <Link href={item.href} className="font-medium text-forest hover:text-forest-deep">
                      {item.title}
                    </Link>
                  ) : (
                    <p className="font-medium text-ink">{item.title}</p>
                  )}
                  <p className="mt-2 text-sm leading-relaxed text-stone">{item.body}</p>
                </li>
              ))}
            </ul>

            <h2 className="font-serif mt-16 text-3xl tracking-tight">
              What actually matters for {industry.name.toLowerCase()} SEO
            </h2>
            {industry.strategy.map((item) => (
              <div key={item.heading} className="mt-10">
                <h3 className="font-serif text-2xl tracking-tight">{item.heading}</h3>
                <p className="mt-3 text-stone">{item.body}</p>
              </div>
            ))}

            <h2 className="font-serif mt-16 text-3xl tracking-tight">
              Searches {industry.name.toLowerCase()} customers actually type
            </h2>
            <p className="mt-4 text-stone">
              These are examples of intent, not a ranking report. We do not publish
              fabricated search volumes.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {industry.searches.map((query) => (
                <li
                  key={query}
                  className="rounded-xl border border-mist bg-cream px-4 py-3 text-sm"
                >
                  {query}
                </li>
              ))}
            </ul>

            <h2 className="font-serif mt-16 text-3xl tracking-tight">Proof</h2>
            <p className="mt-4 text-stone">{industry.proof}</p>
            <p className="mt-4 text-sm text-stone">
              <Link href={paths.caseStudies} className="text-forest hover:text-forest-deep">
                See published case studies
              </Link>
              — including what they are and what they are not.
            </p>
          </article>

          {cityPages.length > 0 ? (
            <RelatedLinks
              title={`${industry.name} SEO in DFW`}
              items={cityPages.map((page) => {
                const city = locations.find((item) => item.slug === page.citySlug);
                return {
                  href: industryCityHref(page),
                  label: `${industry.name} SEO in ${city?.name ?? page.citySlug}`,
                };
              })}
            />
          ) : null}

          {articles.length > 0 ? (
            <RelatedLinks
              title="Resources"
              items={articles.map((article) => ({
                href: articlePath(article.slug),
                label: article.title,
              }))}
            />
          ) : null}

          <RelatedLinks
            title="Related"
            items={[
              { href: paths.localSeo, label: "Local SEO" },
              { href: paths.gbp, label: "Google Business Profile" },
              { href: paths.fortWorth, label: "Fort Worth SEO" },
              { href: paths.areas, label: "DFW areas" },
              { href: paths.resources, label: "Resources" },
              { href: paths.pricing, label: "Pricing" },
              { href: paths.industries, label: "All industries" },
            ]}
          />
        </div>
      </section>

      <PricingBlock />
      <FaqList items={industry.faqs} title={`${industry.name} SEO questions`} />
      <FinalCta title={cta.auditTitle} body={cta.auditBody} buttonLabel={cta.form} />
    </div>
  );
}
