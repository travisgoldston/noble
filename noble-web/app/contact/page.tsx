import type { Metadata } from "next";
import { AuditForm } from "@/components/AuditForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/components/JsonLd";
import { cta, gamePlan, paths } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Local SEO Game Plan",
  description:
    "Get a free local SEO game plan from NOBLE. Already have a website? We'll show you what's holding it back. Starting from zero? We'll tell you what to build first. Written response. No sales call required.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Free Local SEO Game Plan | NOBLE SEO",
    description:
      "Get a free local SEO game plan from NOBLE. Already have a website? We'll show you what's holding it back. Starting from zero? We'll tell you what to build first. Written response. No sales call required.",
    url: "/contact",
  },
};

const questions = [
  {
    q: "Is NOBLE for a business like mine?",
    a: "Yes — if you are an owner-led local business in Dallas–Fort Worth and a new customer is worth real money. Roofing, HVAC, dental, and similar. A full website is not required.",
  },
  {
    q: "What if I don't have a website?",
    a: "That's okay. Request the game plan anyway. I'll tell you what to set up first, what can wait, and whether SEO even makes sense right now.",
  },
  {
    q: "What exactly am I getting?",
    a: "A written local SEO game plan by email: what customers can find today, website and Google listing opportunities, what I'd fix first, and whether SEO is worth it for you now.",
  },
  {
    q: "Is this actually free?",
    a: "Yes. The game plan is free. It is not a cheap version of the monthly work. Paid local SEO is $1,250, $1,850, or $2,500 a month — only if we both want to continue.",
  },
  {
    q: "What happens after I submit?",
    a: "I review your business and local market, then email you the written plan. Typical response is one business day.",
  },
  {
    q: "Am I going to get a sales call?",
    a: "No. No calendar invite. No required sales call. No pressure. If you want to talk after you read the plan, you can.",
  },
  {
    q: "Can I submit the form quickly?",
    a: "Yes. Name, business, email, and a couple of taps. About 30 seconds. You do not need SEO vocabulary.",
  },
];

const sampleScores = [
  { label: "Google Maps", score: "62/100", width: "w-[62%]" },
  { label: "Google Business Profile", score: "71/100", width: "w-[71%]" },
  { label: "Website", score: "48/100", width: "w-[48%]" },
  { label: "Reviews", score: "83/100", width: "w-[83%]" },
  { label: "Local competition", score: "Moderate", width: "w-[55%]" },
];

const firstFixes = [
  "Fix the primary Google Business Profile category",
  "Build or strengthen the highest-value service page",
  "Improve how you ask for reviews and how you reply",
];

export default function ContactPage() {
  return (
    <div>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Free Local SEO Game Plan", href: "/contact" },
          ]),
          serviceSchema({
            name: "Free Local SEO Game Plan",
            description: metadata.description as string,
            url: "/contact",
          }),
        ]}
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-12 md:py-20">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />
          <p className="mt-8 text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Free local SEO game plan
          </p>
          <h1 className="font-serif mt-4 max-w-[16ch] text-5xl tracking-tightest md:text-6xl">
            Get your free local SEO game plan
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium text-ink">
            {gamePlan.alreadyHave}
          </p>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-stone">
            {gamePlan.startingZero} {gamePlan.thatsOkay}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#audit-form">{cta.primary} →</Button>
            <Button href={paths.pricing} variant="secondary">
              See pricing
            </Button>
          </div>
        </div>
      </section>

      <section id="audit-form" className="scroll-mt-28 py-12 md:py-16">
        <div className="mx-auto grid max-w-site gap-10 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
              Straight answers
            </p>
            <h2 className="font-serif mt-4 max-w-[16ch] text-3xl tracking-tightest md:text-4xl">
              Before you send the form
            </h2>
            <dl className="mt-8 grid gap-5">
              {questions.map((item) => (
                <div key={item.q}>
                  <dt className="font-medium text-ink">{item.q}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-stone">{item.a}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <h3 className="font-serif text-2xl tracking-tight">What you&apos;ll get</h3>
              <ul className="mt-4 grid gap-2">
                {gamePlan.youGet.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-stone">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 rounded-xl border border-mist bg-cream p-6">
              <h3 className="font-serif text-2xl tracking-tight">{gamePlan.noWebsiteTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">{gamePlan.noWebsiteBody}</p>
              <p className="mt-3 text-sm leading-relaxed text-stone">{gamePlan.noWebsiteNext}</p>
            </div>
          </div>
          <div className="order-1 lg:sticky lg:top-28 lg:order-2">
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
              Request
            </p>
            <h2 className="font-serif mt-4 max-w-[16ch] text-3xl tracking-tightest md:text-4xl">
              Request your free game plan
            </h2>
            <ul className="mt-5 grid gap-2">
              {gamePlan.youGet.slice(0, 3).map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-stone">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <AuditForm />
            </div>
            <p className="mt-6 text-sm text-stone">
              Prefer to write directly?{" "}
              <a className="text-forest hover:text-forest-deep" href="mailto:hello@nobleseo.co">
                hello@nobleseo.co
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-mist bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Example only
          </p>
          <h2 className="font-serif mt-4 max-w-[16ch] text-4xl tracking-tightest md:text-5xl">
            Here is what a game plan can look like
          </h2>
          <p className="mt-5 max-w-2xl text-stone">
            Sample audit — representative of what you&apos;ll receive. This is
            not a real client, and the scores are not from live data. If you
            don&apos;t have a website or Google listing yet, the plan focuses on
            what to set up first rather than scores like these.
          </p>
          <article className="mt-12 rounded-xl border border-mist bg-white p-7 md:p-10">
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
              Sample audit — representative of what you&apos;ll receive
            </p>
            <div className="mt-8 grid gap-5">
              {sampleScores.map((item) => (
                <div key={item.label}>
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="font-serif text-xl tracking-tight">{item.score}</p>
                  </div>
                  <div className="mt-2 h-1 rounded-full bg-mist">
                    <div className={`h-1 rounded-full bg-forest ${item.width}`} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 border-t border-mist pt-8">
              <h3 className="font-serif text-2xl tracking-tight">Biggest opportunity</h3>
              <p className="mt-4 max-w-2xl text-stone">
                The Google Business Profile and the website are aiming at
                different searches. That gap is costing the highest-value local
                queries.
              </p>
            </div>
            <div className="mt-10">
              <h3 className="font-serif text-2xl tracking-tight">What we would fix first</h3>
              <ol className="mt-5 grid gap-3 text-sm text-stone">
                {firstFixes.map((item, index) => (
                  <li key={item} className="flex gap-3">
                    <span className="font-serif text-lg text-forest">{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </article>
        </div>
      </section>

      <section className="border-b border-mist bg-ink py-20 text-white md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-white/50 uppercase">
            After the diagnosis
          </p>
          <h2 className="font-serif mt-4 max-w-[16ch] text-4xl tracking-tightest md:text-5xl">
            Want to know what implementation costs?
          </h2>
          <p className="mt-5 max-w-2xl text-white/70">
            NOBLE pricing is on the page: $1,250, $1,850, or $2,500 a month.
            No “book a call to learn more.” The game plan is free. The monthly
            work is not.
          </p>
          <div className="mt-8">
            <Button href={paths.pricing} variant="light">
              See NOBLE Pricing →
            </Button>
          </div>
        </div>
      </section>

      <div className="pt-20 md:pt-24">
        <FinalCta
          title="Wondering what Google sees — or what should exist first?"
          body="Request the free game plan. I'll write it up and email it. No calendar invite. No required sales call."
          buttonLabel="Get My Free SEO Game Plan →"
          href="#audit-form"
        />
      </div>
    </div>
  );
}
