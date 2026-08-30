import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { industriesInGroup, industryHref } from "@/lib/industries";
import type { IndustryGroup } from "@/lib/industries";
import { cta, paths } from "@/lib/site";

export function IndustryGroupPage({ group }: { group: IndustryGroup }) {
  const members = industriesInGroup(group.slug);
  const url = `${paths.industries}/${group.slug}`;

  return (
    <div>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: paths.home },
          { name: "Industries", href: paths.industries },
          { name: group.name, href: url },
        ])}
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-20">
          <Breadcrumbs
            items={[
              { name: "Home", href: paths.home },
              { name: "Industries", href: paths.industries },
              { name: group.name },
            ]}
          />
          <p className="mt-8 text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            {group.name}
          </p>
          <h1 className="font-serif mt-4 max-w-[16ch] text-5xl tracking-tightest md:text-6xl">
            {group.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">{group.lede}</p>
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
          <article className="max-w-3xl">
            {group.body.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-stone first:mt-0">
                {paragraph}
              </p>
            ))}
            {group.comingSoon ? (
              <p className="mt-8 rounded-xl border border-mist bg-cream p-6 text-sm text-stone">
                {group.comingSoon}
              </p>
            ) : null}
          </article>
          {members.length > 0 ? (
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {members.map((industry) => (
                <Link
                  key={industry.slug}
                  href={industryHref(industry)}
                  className="rounded-xl border border-mist bg-white p-7 transition-shadow hover:shadow-card"
                >
                  <h2 className="font-serif text-2xl tracking-tight">{industry.navLabel}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{industry.lede}</p>
                </Link>
              ))}
            </div>
          ) : null}
          <RelatedLinks
            title="Related"
            items={[
              { href: paths.industries, label: "All industries" },
              { href: paths.localSeo, label: "Local SEO" },
              { href: paths.fortWorth, label: "Fort Worth SEO" },
              { href: paths.resources, label: "Resources" },
              { href: paths.areas, label: "DFW areas" },
            ]}
          />
        </div>
      </section>
      <FinalCta title={cta.auditTitle} body={cta.auditBody} buttonLabel={cta.form} />
    </div>
  );
}
