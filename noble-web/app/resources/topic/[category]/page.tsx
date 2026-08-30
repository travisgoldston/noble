import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { articlesByCategory, resourceCategories } from "@/lib/articles";
import { articlePath, categoryLabel, resourceTopicPath } from "@/lib/articles/helpers";
import type { ResourceCategoryId } from "@/lib/articles/types";
import { cta, paths } from "@/lib/site";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return resourceCategories.map((item) => ({ category: item.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const label = categoryLabel(category as ResourceCategoryId);
  if (!resourceCategories.some((item) => item.id === category)) {
    return { title: "Resources" };
  }
  return {
    title: `${label} resources`,
    description: `NOBLE notes on ${label.toLowerCase()} for Dallas–Fort Worth local businesses.`,
    alternates: { canonical: resourceTopicPath(category as ResourceCategoryId) },
  };
}

export default async function ResourceTopicPage({ params }: Props) {
  const { category } = await params;
  if (!resourceCategories.some((item) => item.id === category)) notFound();
  const id = category as ResourceCategoryId;
  const list = articlesByCategory(id);

  return (
    <div>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: paths.home },
          { name: "Resources", href: paths.resources },
          { name: categoryLabel(id), href: resourceTopicPath(id) },
        ])}
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-20">
          <Breadcrumbs
            items={[
              { name: "Home", href: paths.home },
              { name: "Resources", href: paths.resources },
              { name: categoryLabel(id) },
            ]}
          />
          <p className="mt-8 text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Resources
          </p>
          <h1 className="font-serif mt-4 max-w-[14ch] text-5xl tracking-tightest md:text-6xl">
            {categoryLabel(id)}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            Practical writing in this category. Usefulness over volume. No
            fabricated statistics.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-site px-6">
          {list.length === 0 ? (
            <p className="max-w-2xl text-stone">
              Nothing published in this category yet. Other resources are on the{" "}
              <Link href={paths.resources} className="text-forest hover:text-forest-deep">
                resources hub
              </Link>
              .
            </p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {list.map((article) => (
                <Link
                  key={article.slug}
                  href={articlePath(article.slug)}
                  className="rounded-xl border border-mist bg-white p-7 transition-shadow hover:shadow-card"
                >
                  <h2 className="font-serif text-2xl tracking-tight">{article.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{article.description}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      <FinalCta title={cta.auditTitle} body={cta.auditBody} buttonLabel={cta.form} />
    </div>
  );
}
