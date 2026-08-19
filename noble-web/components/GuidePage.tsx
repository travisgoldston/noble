import { Button } from "@/components/Button";
import { RelatedLinks } from "@/components/RelatedLinks";
import type { Guide } from "@/lib/guides";
import { capabilities, locations, searchSurfaces } from "@/lib/content";

export function GuidePage({ guide }: { guide: Guide }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    inLanguage: "en-US",
    author: {
      "@type": "Organization",
      name: "Noble",
      url: "https://nobleseo.co",
    },
    publisher: {
      "@type": "Organization",
      name: "Noble",
      url: "https://nobleseo.co",
    },
    mainEntityOfPage: `https://nobleseo.co/${guide.slug}`,
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-20">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            {guide.eyebrow}
          </p>
          <h1 className="font-serif mt-4 max-w-[16ch] text-5xl tracking-tightest md:text-6xl">
            {guide.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">{guide.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Get a Search Assessment</Button>
            <Button href="/locations" variant="secondary">
              DFW cities
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-site px-6">
          <article className="max-w-3xl">
            {guide.sections.map((section) => (
              <div key={section.heading} className="mb-12">
                <h2 className="font-serif text-3xl tracking-tight">{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-stone">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </article>
          <div className="max-w-3xl rounded-xl border border-mist bg-cream p-8">
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
              A real example
            </p>
            <h2 className="font-serif mt-3 text-2xl tracking-tight md:text-3xl">
              {guide.example.heading}
            </h2>
            <p className="mt-4 text-stone">{guide.example.setup}</p>
            <ol className="mt-5 grid gap-3 text-sm text-stone">
              {guide.example.steps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="font-serif text-lg text-forest">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Get a Search Assessment</Button>
            <Button href="/work" variant="secondary">
              See Our Work
            </Button>
          </div>
          <RelatedLinks
            title="Keep reading"
            items={searchSurfaces
              .filter((item) => item.slug !== guide.slug)
              .map((item) => ({ href: item.href, label: item.title }))}
          />
          <RelatedLinks
            title="Services"
            items={capabilities.map((item) => ({
              href: item.href,
              label: item.title,
            }))}
          />
          <RelatedLinks
            title="DFW cities"
            items={[
              { href: "/locations", label: "All DFW cities" },
              ...locations.map((city) => ({
                href: `/locations/${city.slug}`,
                label: city.name,
              })),
            ]}
          />
        </div>
      </section>
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-16">
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl bg-ink px-8 py-10 text-white md:flex-row md:items-center">
            <h2 className="font-serif max-w-[16ch] text-3xl tracking-tightest">
              Want this applied to your business, not just explained?
            </h2>
            <Button href="/contact" variant="light">
              Get a Search Assessment
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
