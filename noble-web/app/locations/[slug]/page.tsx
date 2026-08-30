import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { Button } from "@/components/Button";
import { RelatedLinks } from "@/components/RelatedLinks";
import { capabilities, locations, searchSurfaces } from "@/lib/content";
import { industryLinksForCity } from "@/lib/industries";
import { cityPath, cta, paths } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locations
    .filter((city) => city.slug !== "fort-worth")
    .map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = locations.find((item) => item.slug === slug);
  if (!city) return { title: "Location" };
  return {
    title: `Local SEO in ${city.name}, TX`,
    description: city.intro,
    alternates: { canonical: cityPath(slug) },
  };
}

export default async function LocationCityPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "fort-worth") redirect("/areas/fort-worth-seo");
  const city = locations.find((item) => item.slug === slug);
  if (!city) notFound();

  const nearby = city.nearby
    .map((nearSlug) => locations.find((item) => item.slug === nearSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-20">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            {city.name}, Texas
          </p>
          <h1 className="font-serif mt-4 max-w-[18ch] text-5xl tracking-tightest md:text-6xl">
            Local SEO for {city.name} businesses.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">{city.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={paths.contact}>{cta.primary}</Button>
            <Button href={paths.services} variant="secondary">
              See services
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-site px-6">
          <article className="max-w-3xl">
            <h2 className="font-serif text-3xl tracking-tight">
              How {city.name} actually searches
            </h2>
            {city.places.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-stone">
                {paragraph}
              </p>
            ))}

            <h2 className="font-serif mt-12 text-3xl tracking-tight">
              What getting found means here
            </h2>
            {city.searchReality.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-stone">
                {paragraph}
              </p>
            ))}

            <h2 className="font-serif mt-12 text-3xl tracking-tight">
              Who this is for
            </h2>
            <p className="mt-4 text-stone">{city.whoFor}</p>
          </article>

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
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={paths.contact}>{cta.primary}</Button>
              <Button href={paths.caseStudies} variant="secondary">
                {cta.proof}
              </Button>
            </div>
          </div>

          <RelatedLinks
            title={`How people find a ${city.name} business`}
            items={searchSurfaces.map((item) => ({
              href: item.href,
              label: item.title,
            }))}
          />
          <RelatedLinks
            title="Services that apply here"
            items={capabilities.map((item) => ({
              href: item.href,
              label: item.title,
            }))}
          />
          <RelatedLinks
            title={`${city.name} industries`}
            items={[
              { href: paths.industries, label: "All industries" },
              ...industryLinksForCity(city.slug),
            ]}
          />
          <RelatedLinks
            title="Nearby DFW cities"
            items={[
              { href: paths.areas, label: "All DFW areas" },
              ...nearby.map((item) => ({
                href: cityPath(item.slug),
                label: item.name,
              })),
            ]}
          />
        </div>
      </section>
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-16">
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl bg-ink px-8 py-10 text-white md:flex-row md:items-center">
            <h2 className="font-serif max-w-[16ch] text-3xl tracking-tightest">
              See how {city.name} customers find you today.
            </h2>
            <div className="flex flex-wrap gap-3">
              <Button href={paths.contact} variant="light">
                {cta.primary}
              </Button>
              <Button href={paths.caseStudies} variant="onDark">
                {cta.proof}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
