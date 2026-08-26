import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { RelatedLinks } from "@/components/RelatedLinks";
import { budgetocity } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Budgetocity case study: from page 3 to page 1 with organic SEO, without paid ads.",
};

export default function WorkPage() {
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-20">
          <a
            href={budgetocity.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-8 inline-block"
          >
            <Image
              src={budgetocity.logo}
              alt="Budgetocity"
              width={96}
              height={96}
              className="h-24 w-24 rounded-full object-contain"
            />
          </a>
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            {budgetocity.kicker}
          </p>
          <h1 className="font-serif mt-4 max-w-[18ch] text-5xl tracking-tightest md:text-6xl">
            {budgetocity.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">{budgetocity.subhead}</p>
        </div>
      </section>

      <section className="mx-auto max-w-site px-6 py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {budgetocity.stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-mist bg-cream p-6">
              <p className="font-serif text-3xl tracking-tight">{stat.value}</p>
              <p className="mt-2 text-sm text-stone">{stat.label}</p>
            </div>
          ))}
        </div>

        <article className="prose mt-14 max-w-3xl">
          <h2 className="font-serif text-3xl tracking-tight">The problem</h2>
          <p className="mt-4 text-stone">
            Budgetocity is a paycheck budgeting app for people living paycheck to
            paycheck. It is a real product with real search demand. The site was
            averaging position <strong className="text-ink">31.2</strong> in Google.
            Page three. Effectively invisible. No content engine. No durable
            organic presence.
          </p>
          <p className="mt-4 text-stone">
            They did not need another ad campaign. They needed to be findable.
          </p>

          <h2 className="font-serif mt-12 text-3xl tracking-tight">What we did</h2>
          <p className="mt-4 text-stone">
            We focused on organic search and the content that supports it:
          </p>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-stone">
            <li>
              <strong className="text-ink">SEO foundation.</strong> Structural and
              on page issues that kept the site buried, built around queries
              people actually type.
            </li>
            <li>
              <strong className="text-ink">Content that ranks.</strong> Topics
              chosen from search intent, written to answer the question and earn
              the click. Not filler.
            </li>
            <li>
              <strong className="text-ink">Steady shipping.</strong> Publish,
              measure in Search Console, iterate. No tricks.
            </li>
          </ul>
          <p className="mt-4 text-stone">
            Social channels helped awareness while organic search compounded. The
            growth story we care about here is SEO and content, not paid media.
          </p>

          <h2 className="font-serif mt-12 text-3xl tracking-tight">What happened</h2>
          <p className="mt-4 text-stone">
            Average ranking position moved from{" "}
            <strong className="text-ink">31.2 to 6.2</strong>: page three to the
            top of page one across real keywords in a competitive niche. Clicks
            grew <strong className="text-ink">28% year over year</strong>.
            Higher intent queries started landing on pages built for them.
          </p>
          <p className="mt-4 text-stone">
            Same product. Better visibility. No ad budget required to prove the
            channel.
          </p>
        </article>

        <p className="mt-12">
          <Button href={budgetocity.url} variant="secondary">
            Visit Budgetocity
          </Button>
        </p>
      </section>

      <section className="border-t border-mist bg-cream">
        <div className="mx-auto grid max-w-site gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
              Want to trust the work?
            </p>
            <h2 className="font-serif mt-4 max-w-[14ch] text-4xl tracking-tightest md:text-5xl">
              One result is not a pitch. It is a method you can inspect.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone">
              Budgetocity moved because the foundation, the content, and the
              measurement were real. If you want the same kind of look at your
              search presence, the next step is a search assessment, then a
              clear yes, no, or not yet.
            </p>
          </div>
          <aside className="rounded-xl border border-mist bg-white p-8">
            <p className="font-serif text-2xl tracking-tight">What you can expect</p>
            <ul className="mt-5 grid gap-3 text-sm text-stone">
              <li>Direct work, not an account layer</li>
              <li>A review of the Google presence before any retainer talk</li>
              <li>No ranking guarantees, courses, or Hire Me theater</li>
              <li>Capacity stays limited on purpose</li>
            </ul>
            <div className="mt-8">
              <Button href="/contact">Get a Search Assessment</Button>
            </div>
          </aside>
        </div>
        <div className="mx-auto max-w-site px-6 pb-16">
          <RelatedLinks
            title="Where this kind of work happens"
            items={[
              { href: "/services", label: "Services" },
              { href: "/locations", label: "DFW cities" },
              { href: "/google-search", label: "Google Search" },
              { href: "/google-maps", label: "Google Maps" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
