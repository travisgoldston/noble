import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { articlePath } from "@/lib/articles/helpers";
import { getArticle } from "@/lib/articles";
import { getIndustry, industryCityHref, industryHref, siblingIndustryCities } from "@/lib/industries";
import type { IndustryCity } from "@/lib/industries";
import { locations } from "@/lib/content";
import { cityPath, cta, paths } from "@/lib/site";

export function IndustryCityPage({ page }: { page: IndustryCity }) {
  const industry = getIndustry(page.industrySlug);
  const city = locations.find((item) => item.slug === page.citySlug);
  if (!industry || !city) return null;

  const articles = page.relatedArticleSlugs
    .map((slug) => getArticle(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const siblings = siblingIndustryCities(page.industrySlug, page.citySlug);

  const url = industryCityHref(page);
  const schemaCrumbs = [
    { name: "Home", href: paths.home },
    { name: "Industries", href: paths.industries },
    { name: industry.navLabel, href: industryHref(industry) },
    { name: city.name, href: url },
  ];

  return (
    <div>
      <JsonLd
        data={[
          breadcrumbSchema(schemaCrumbs),
          serviceSchema({
            name: `${industry.name} local SEO in ${city.name}`,
            description: page.description,
            url,
          }),
          faqSchema(page.faqs),
        ]}
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-20">
          <Breadcrumbs
            items={[
              { name: "Home", href: paths.home },
              { name: "Industries", href: paths.industries },
              { name: industry.navLabel, href: industryHref(industry) },
              { name: city.name },
            ]}
          />
          <p className="mt-8 text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            {industry.name} · {city.name}
          </p>
          <h1 className="font-serif mt-4 max-w-[18ch] text-5xl tracking-tightest md:text-6xl">
            {page.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">{page.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={paths.contact}>{cta.form}</Button>
            <Button href={industryHref(industry)} variant="secondary">
              {industry.navLabel}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-site px-6">
          <article className="max-w-3xl">
            {page.localContext.map((item) => (
              <div key={item.heading} className="mb-12">
                <h2 className="font-serif text-3xl tracking-tight">{item.heading}</h2>
                <p className="mt-4 text-stone">{item.body}</p>
              </div>
            ))}

            <h2 className="font-serif text-3xl tracking-tight">
              How {city.name} customers actually search
            </h2>
            {page.behavior.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-stone">
                {paragraph}
              </p>
            ))}

            <h2 className="font-serif mt-12 text-3xl tracking-tight">
              Competitive reality in {city.name}
            </h2>
            {page.competition.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-stone">
                {paragraph}
              </p>
            ))}

            <h2 className="font-serif mt-12 text-3xl tracking-tight">Example searches</h2>
            <p className="mt-4 text-stone">
              Intent examples only. No fabricated volumes.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {page.searches.map((query) => (
                <li
                  key={query}
                  className="rounded-xl border border-mist bg-cream px-4 py-3 text-sm"
                >
                  {query}
                </li>
              ))}
            </ul>
          </article>

          <div className="mt-12 max-w-3xl rounded-xl border border-mist bg-cream p-8">
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
              A real example
            </p>
            <h2 className="font-serif mt-3 text-2xl tracking-tight md:text-3xl">
              {page.example.heading}
            </h2>
            <p className="mt-4 text-stone">{page.example.setup}</p>
            <ol className="mt-5 grid gap-3 text-sm text-stone">
              {page.example.steps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="font-serif text-lg text-forest">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={paths.contact}>{cta.form}</Button>
              <Button href={paths.caseStudies} variant="secondary">
                {cta.proof}
              </Button>
            </div>
          </div>

          <RelatedLinks
            title="Related"
            items={[
              { href: industryHref(industry), label: industry.navLabel },
              { href: cityPath(city.slug), label: `${city.name} local SEO` },
              { href: paths.localSeo, label: "Local SEO" },
              { href: paths.gbp, label: "Google Business Profile" },
              { href: paths.pricing, label: "Pricing" },
              { href: paths.caseStudies, label: "Case studies" },
            ]}
          />
          {siblings.length > 0 ? (
            <RelatedLinks
              title={`Other ${city.name} industries`}
              items={siblings.map((item) => {
                const siblingIndustry = getIndustry(item.industrySlug);
                return {
                  href: industryCityHref(item),
                  label: siblingIndustry
                    ? `${siblingIndustry.name} SEO in ${city.name}`
                    : item.industrySlug,
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
        </div>
      </section>

      <FaqList items={page.faqs} title={`${city.name} ${industry.navLabel} questions`} />
      <FinalCta title={cta.auditTitle} body={cta.auditBody} buttonLabel={cta.form} />
    </div>
  );
}
