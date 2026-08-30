import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { relatedArticles } from "@/lib/articles";
import { articlePath, categoryLabel, formatArticleDate } from "@/lib/articles/helpers";
import type { Article } from "@/lib/articles/types";
import { cta, paths } from "@/lib/site";

export function ArticlePage({ article }: { article: Article }) {
  const related = relatedArticles(article);
  const url = articlePath(article.slug);
  const primaryCategory = article.categories[0];

  return (
    <div>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: paths.home },
            { name: "Resources", href: paths.resources },
            { name: article.title, href: url },
          ]),
          articleSchema({
            headline: article.h1,
            description: article.description,
            url,
            datePublished: article.publishedAt,
            dateModified: article.updatedAt,
            section: categoryLabel(primaryCategory),
          }),
          faqSchema(article.faqs),
        ]}
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-20">
          <Breadcrumbs
            items={[
              { name: "Home", href: paths.home },
              { name: "Resources", href: paths.resources },
              { name: article.title },
            ]}
          />
          <p className="mt-8 text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            {categoryLabel(primaryCategory)}
          </p>
          <h1 className="font-serif mt-4 max-w-[18ch] text-5xl tracking-tightest md:text-6xl">
            {article.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">{article.answer}</p>
          <p className="mt-4 text-sm text-stone">
            Updated {formatArticleDate(article.updatedAt)}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={paths.contact}>{cta.form}</Button>
            <Button href={paths.resources} variant="secondary">
              All resources
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-site px-6">
          <article className="max-w-3xl">
            <p className="text-stone">{article.intro}</p>
            {article.sections.map((section) => (
              <div key={section.heading} className="mt-12">
                <h2 className="font-serif text-3xl tracking-tight">{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-stone">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </article>
          <div className="mt-12 max-w-3xl rounded-xl border border-mist bg-cream p-8">
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
              A real example
            </p>
            <h2 className="font-serif mt-3 text-2xl tracking-tight md:text-3xl">
              {article.example.heading}
            </h2>
            <p className="mt-4 text-stone">{article.example.setup}</p>
            <ol className="mt-5 grid gap-3 text-sm text-stone">
              {article.example.steps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="font-serif text-lg text-forest">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <Button href={paths.contact}>{cta.form}</Button>
            </div>
          </div>
          <RelatedLinks title="NOBLE services" items={article.serviceLinks} />
          <RelatedLinks title="DFW pages" items={article.locationLinks} />
          {related.length > 0 ? (
            <RelatedLinks
              title="Related resources"
              items={related.map((item) => ({
                href: articlePath(item.slug),
                label: item.title,
              }))}
            />
          ) : null}
        </div>
      </section>
      <FaqList items={article.faqs} title="Questions this article answers" />
      <FinalCta title={cta.auditTitle} body={cta.auditBody} buttonLabel={cta.form} />
    </div>
  );
}
