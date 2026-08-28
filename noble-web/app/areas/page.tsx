import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { FinalCta } from "@/components/FinalCta";
import { cityPath, cta, paths } from "@/lib/site";
import { locations } from "@/lib/content";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Founder-led local SEO for Dallas–Fort Worth businesses. We serve DFW remotely and do not claim a physical office.",
  alternates: { canonical: "/areas" },
};

export default function AreasPage() {
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-20">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Areas
          </p>
          <h1 className="font-serif mt-4 max-w-[16ch] text-5xl tracking-tightest md:text-6xl">
            Local SEO across Dallas–Fort Worth.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            Noble serves businesses throughout DFW. These pages exist because
            search behaves differently in each city — not as thin doorway pages
            with the city name swapped. We work remotely and do not claim a
            physical office.
          </p>
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
          <div className="grid gap-4 md:grid-cols-2">
            {locations.map((city) => (
              <Link
                key={city.slug}
                href={cityPath(city.slug)}
                className="rounded-xl border border-mist bg-white p-7 transition-shadow hover:shadow-card"
              >
                <h2 className="font-serif text-2xl tracking-tight">{city.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-stone">{city.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCta title="Not on this list? The work still starts with an audit." />
    </div>
  );
}
