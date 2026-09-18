import type { Metadata } from "next";
import Image from "next/image";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { paths, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "NOBLE is a small local SEO team serving Dallas–Fort Worth. We work remotely and stay small on purpose. Your story is the work.",
  alternates: { canonical: "/about" },
};

const team = [
  {
    name: "Travis Goldston",
    role: "Co-Founder",
    paragraphs: [
      "Travis has spent more than a decade working across sales, marketing, customer experience, and operations. He started NOBLE to help local businesses get more out of search without the agency runaround, confusing reports, or marketing for marketing’s sake.",
      "His approach is simple: understand the business, find the opportunities, do the work, and measure what happens.",
      "Texas Tech graduate. Lifelong Texan turned Utah transplant. Husband, dad, and lifelong learner who probably spends too much time thinking about Google.",
    ],
  },
  {
    name: "Victoria Goldston",
    role: "Co-Founder",
    paragraphs: [
      "Victoria helps keep NOBLE — and the Goldston household — running.",
      "She’s building her expertise in SEO and digital marketing while helping with NOBLE’s operations, marketing, and client experience. Her perspective is simple and useful: marketing should make sense to the people actually running the business.",
      "When she’s not helping build NOBLE, she’s raising their daughter, managing the household, and occasionally reminding Travis that not every conversation needs to become an SEO conversation.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About NOBLE SEO",
          url: "https://nobleseo.co/about",
          mainEntity: {
            "@type": "Organization",
            name: site.businessName,
            url: site.url,
            email: site.email,
            founder: team.map((person) => ({
              "@type": "Person",
              name: person.name,
              jobTitle: person.role,
            })),
          },
        }}
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-20">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            About
          </p>
          <h1 className="font-serif mt-4 max-w-[16ch] text-5xl tracking-tightest md:text-6xl">
            Your story is the work. Ours is just the team.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            NOBLE is a small local SEO team, not a full-service agency. We stay
            small on purpose so the work stays direct: more of the right
            customers finding local businesses on Google Search and Maps.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-site items-center gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <figure>
            <Image
              src="/travis-victoria.jpg"
              alt="Travis and Victoria Goldston, co-founders of NOBLE SEO"
              width={960}
              height={958}
              className="w-full rounded-xl object-cover"
              priority
            />
            <figcaption className="mt-3 text-sm text-stone">
              Travis and Victoria Goldston, co-founders.
            </figcaption>
          </figure>
          <article>
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
              Why this page exists
            </p>
            <h2 className="font-serif mt-3 text-3xl tracking-tight md:text-4xl">
              Their story matters more than ours.
            </h2>
            <p className="mt-5 text-stone">
              The About page exists so you know who you are talking to. It is
              not the product. The product is whether nearby customers can find
              you, trust the listing, and call.
            </p>
            <p className="mt-4 text-stone">
              If you want the work, start with a game plan. If you want the
              people, they are below.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-mist bg-cream py-16">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            The team
          </p>
          <h2 className="font-serif mt-3 text-3xl tracking-tight md:text-4xl">
            A small team. Direct work. No account layer.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {team.map((person) => (
              <article
                key={person.name}
                className="rounded-xl border border-mist bg-white p-8"
              >
                <h3 className="font-serif text-2xl tracking-tight">{person.name}</h3>
                <p className="mt-1 text-[0.72rem] font-medium tracking-[0.18em] text-forest uppercase">
                  {person.role}
                </p>
                {person.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-sm leading-relaxed text-stone">
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-site px-6">
          <article className="max-w-3xl">
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
              How we work
            </p>
            <h2 className="font-serif mt-3 text-3xl tracking-tight md:text-4xl">
              Direct work. Limited capacity. No account layer.
            </h2>
            <p className="mt-5 text-stone">
              We take on a handful of clients at a time, and we plan to keep it
              that way. You will not get handed off to a VA, intern, or account
              manager. You work with us. You have our phone numbers.
            </p>
            <p className="mt-4 text-stone">
              That is intentional. Local SEO fails when the work is handed down
              a chain of people who never looked at the listing.
            </p>
            <p className="mt-4 text-stone">
              We serve businesses across Dallas–Fort Worth. We operate remotely
              and do not claim a physical office in any DFW city.
            </p>
            <p className="mt-4 text-stone">
              The brand promise is simple: SEO built on proof. If we cannot
              measure it or will not publish it honestly, we do not sell it as
              theater.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-mist bg-cream py-16">
        <div className="mx-auto grid max-w-site gap-6 px-6 md:grid-cols-2">
          <article className="rounded-xl border border-mist bg-white p-8">
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
              What you can expect
            </p>
            <h2 className="font-serif mt-3 text-2xl tracking-tight">
              Plain language. Clear fit. No runaround.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone">
              The first step is a free local SEO game plan, not a 15-field
              interrogation. If we work together, you work with us — not a VA,
              intern, or account manager. If the work is not a fit, you will
              hear that. If it is, you will know what the work costs and what
              it is for.
            </p>
          </article>
          <article className="rounded-xl border border-mist bg-white p-8">
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
              The standard
            </p>
            <h2 className="font-serif mt-3 text-2xl tracking-tight">
              Show up. Do it right. Treat people fairly.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone">
              The moment that matters is when the right customer finds you and
              decides to call. Rankings are a means. Proof is the point.
            </p>
          </article>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Quick facts
          </p>
          <h2 className="font-serif mt-3 text-3xl tracking-tight">
            Because people ask.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-mist p-6">
              <p className="font-medium">Are you an agency?</p>
              <p className="mt-2 text-sm text-stone">
                No. Small team. A handful of clients at a time. You work with
                us directly — including our phone numbers.
              </p>
            </div>
            <div className="rounded-xl border border-mist p-6">
              <p className="font-medium">Where are you located?</p>
              <p className="mt-2 text-sm text-stone">
                We work remotely and serve businesses across Dallas–Fort Worth.
                We do not claim a storefront we do not occupy.
              </p>
            </div>
            <div className="rounded-xl border border-mist p-6">
              <p className="font-medium">What do you sell?</p>
              <p className="mt-2 text-sm text-stone">
                Local SEO: $1,250, $1,850, or $2,500/month. Not social, PPC,
                branding, or generic web design.
              </p>
            </div>
            <div className="rounded-xl border border-mist p-6">
              <p className="font-medium">Why so small?</p>
              <p className="mt-2 text-sm text-stone">
                We take on a handful of clients at a time, and we plan to keep
                it that way. You will not get handed off to a VA, intern, or
                account manager. This is not a high-volume $300 package mill.
              </p>
            </div>
          </div>
          <RelatedLinks
            title="Where this work happens"
            items={[
              { href: paths.localSeo, label: "Local SEO" },
              { href: paths.industries, label: "Industries" },
              { href: paths.fortWorth, label: "Fort Worth SEO" },
              { href: paths.areas, label: "DFW areas" },
              { href: paths.pricing, label: "Pricing" },
              { href: paths.caseStudies, label: "Case studies" },
            ]}
          />
        </div>
      </section>

      <FinalCta title="Ready to see where you stand?" />
    </div>
  );
}
