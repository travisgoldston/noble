import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { RelatedLinks } from "@/components/RelatedLinks";
import { capabilities, locations, searchSurfaces } from "@/lib/content";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Local SEO and Google visibility for DFW businesses, starting with Fort Worth, McKinney, Dallas, Plano, Frisco, Arlington, Denton, and Irving.",
};

export default function LocationsPage() {
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-20">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Locations
          </p>
          <h1 className="font-serif mt-4 max-w-[14ch] text-5xl tracking-tightest md:text-6xl">
            DFW cities we work in.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            NOBLE helps local businesses get found on Google across North Texas.
            These pages are a starting set, not a claim that we only work in
            eight zip codes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Get a Search Assessment</Button>
            <Button href="/services" variant="secondary">
              See services
            </Button>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-site px-6 py-16">
        <div className="grid gap-4 md:grid-cols-2">
          {locations.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}`}
              className="rounded-xl border border-mist bg-white p-7 transition-shadow hover:shadow-card"
            >
              <h2 className="font-serif text-2xl tracking-tight">{city.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone">{city.blurb}</p>
            </Link>
          ))}
        </div>
        <RelatedLinks
          title="Services that apply in every city"
          items={capabilities.map((item) => ({
            href: item.href,
            label: item.title,
          }))}
        />
        <RelatedLinks
          title="How people find you"
          items={searchSurfaces.map((item) => ({
            href: item.href,
            label: item.title,
          }))}
        />
      </section>
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-16">
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl bg-ink px-8 py-10 text-white md:flex-row md:items-center">
            <h2 className="font-serif max-w-[16ch] text-3xl tracking-tightest">
              Not on this list? The work still starts with a search assessment.
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
