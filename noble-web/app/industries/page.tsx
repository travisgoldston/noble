import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { groupedIndustries, industryHref, tier2Backlog } from "@/lib/industries";
import { cta, industryPath, paths } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Local SEO for high-value local businesses that depend on Google Search and Maps — HVAC, dental, plumbing, roofing, optometry, and more in Dallas–Fort Worth.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries | NOBLE SEO",
    description:
      "Local SEO for high-value local businesses that depend on Google Search and Maps. Industry pages prove the work is specific — the product is still local SEO.",
    url: "/industries",
  },
};

export default function IndustriesPage() {
  const groups = groupedIndustries();

  return (
    <div>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
        ])}
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-20">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Industries
          </p>
          <h1 className="font-serif mt-4 max-w-[18ch] text-5xl tracking-tightest md:text-6xl">
            High-value local businesses that depend on Search and Maps.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            NOBLE is not an SEO agency for everyone. The product is local SEO.
            Industry pages exist so an HVAC owner, a dentist, or an optometrist
            can see that the work is specific — without turning the homepage into
            a keyword list.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={paths.contact}>{cta.form}</Button>
            <Button href={paths.localSeo} variant="secondary">
              Local SEO
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-site px-6">
          {groups.map(({ group, industries }) => (
            <div key={group.slug} className="mb-16">
              <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
                {group.name}
              </p>
              <h2 className="font-serif mt-3 text-3xl tracking-tight">
                <Link href={industryPath(group.slug)} className="hover:text-forest">
                  {group.name}
                </Link>
              </h2>
              <p className="mt-3 max-w-2xl text-stone">{group.lede}</p>
              {industries.length > 0 ? (
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {industries.map((industry) => (
                    <Link
                      key={industry.slug}
                      href={industryHref(industry)}
                      className="rounded-xl border border-mist bg-white p-7 transition-shadow hover:shadow-card"
                    >
                      <h3 className="font-serif text-2xl tracking-tight">{industry.navLabel}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-stone">{industry.lede}</p>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="mt-6 max-w-2xl text-sm text-stone">{group.comingSoon}</p>
              )}
            </div>
          ))}
          <div className="rounded-xl border border-mist bg-cream p-8">
            <h2 className="font-serif text-2xl tracking-tight">Not on this list yet</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone">
              Architecture is ready for more verticals. We will not mass-produce
              thin industry pages. If a new customer is worth real money, the
              audit is still the right first step.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 text-sm">
              {tier2Backlog.map((item) => (
                <li key={item.name} className="rounded-full border border-mist bg-white px-4 py-2">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <FinalCta title={cta.auditTitle} body={cta.auditBody} buttonLabel={cta.form} />
    </div>
  );
}
