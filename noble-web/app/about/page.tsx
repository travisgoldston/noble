import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { ContactChannels } from "@/components/ContactChannels";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import {
  aboutPhoto,
  cta,
  founders,
  paths,
  site,
  telHref,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "About NOBLE",
  description:
    "SEO for Dallas–Fort Worth local businesses. A small team — Travis and Victoria Goldston — doing on-page, technical, and local search work remotely. No handoffs.",
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

const howWeWork = [
  {
    title: "A handful of clients",
    body: "We take on a handful of clients at a time, and we plan to keep it that way.",
  },
  {
    title: "Direct work. No handoffs.",
    body: "You will not get handed off to a VA, intern, or account manager. You work with us. You have our phone numbers.",
  },
  {
    title: "Remote, serving DFW",
    body: "We serve businesses across Dallas–Fort Worth. We operate remotely and do not claim a physical office in any DFW city.",
  },
];

export default function AboutPage() {
  const phoneHref = telHref();

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
            founder: founders.map((person) => ({
              "@type": "Person",
              name: person.name,
              jobTitle: person.jobTitle,
            })),
          },
        }}
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-16 md:py-20">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            About
          </p>
          <h1 className="font-serif mt-4 max-w-[16ch] text-4xl tracking-tightest md:text-6xl">
            Your story is the work. Ours is just the team.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            NOBLE does SEO for Dallas–Fort Worth local businesses. We stay
            small on purpose so the work stays direct: on-page SEO, technical
            SEO, and the Google Business Profile and Maps work that supports
            them.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-site items-center gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <figure>
            {/* TODO: swap in a clear photo without sunglasses */}
            <Image
              src={aboutPhoto.src}
              alt={aboutPhoto.alt}
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
              not the product. The product is whether the right customers can
              find you, trust what they see, and call.
            </p>
            <p className="mt-4 text-stone">
              If you want the work, start with a game plan. If you want the
              people, they are below.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-mist bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            The team
          </p>
          <h2 className="font-serif mt-3 text-3xl tracking-tight md:text-4xl">
            A small team. Direct work. No handoffs.
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

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            How we work
          </p>
          <h2 className="font-serif mt-3 text-3xl tracking-tight md:text-4xl">
            Limited capacity. Direct access.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {howWeWork.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-mist bg-cream p-6"
              >
                <h3 className="font-serif text-xl tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-mist bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Contact
          </p>
          <h2 className="font-serif mt-3 max-w-[16ch] text-3xl tracking-tight md:text-4xl">
            Talk to us directly.
          </h2>
          <ContactChannels className="mt-5 text-lg" />
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={paths.contact}>{cta.primary}</Button>
            {phoneHref ? (
              <Button href={phoneHref} variant="secondary">
                {site.phoneCta} {site.phone}
              </Button>
            ) : null}
          </div>
          <RelatedLinks
            title="Where this work happens"
            items={[
              { href: paths.onPage, label: "On-page SEO" },
              { href: paths.technical, label: "Technical SEO" },
              { href: paths.gbp, label: "Google Business Profile" },
              { href: paths.localSeo, label: "Local SEO" },
              { href: paths.pricing, label: "Pricing" },
              { href: paths.caseStudies, label: "Case studies" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
