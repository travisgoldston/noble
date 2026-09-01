import type { Metadata } from "next";
import { AuditForm } from "@/components/AuditForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/components/JsonLd";
import { cta, paths } from "@/lib/site";

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

const youGet = [
  "What customers can find today",
  "What's hurting your visibility",
  "The biggest opportunities I see",
  "What I'd fix first",
  "Whether SEO is actually worth investing in right now",
];

const faqs = [
  {
    question: "Is it really free?",
    answer: "Yes. No credit card, no obligation, and no required sales call.",
  },
  {
    question: "How long does it take?",
    answer: "I'll review your business and email your game plan within one business day.",
  },
  {
    question: "Do I need a website?",
    answer: "No. You can request the game plan even if you don't have a website yet.",
  },
  {
    question: "What happens if SEO isn't right for me?",
    answer:
      "I'll tell you. The goal is to identify what would help your business most — not force you into a service.",
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
          faqSchema(faqs),
        ]}
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-12 md:py-16">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />
          <p className="mt-8 text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Free local SEO game plan
          </p>
          <h1 className="font-serif mt-4 max-w-[18ch] text-5xl tracking-tightest md:text-6xl">
            Get Your Free Local SEO Game Plan
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium text-ink">
            Find out what Google sees when customers search for your business — and
            what I&apos;d fix first.
          </p>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-stone">
            About 30 seconds. Written response. No required sales call.
          </p>
          <div className="mt-8">
            <Button href="#audit-form">{cta.primary} →</Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-site gap-10 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-16">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif max-w-[16ch] text-3xl tracking-tightest md:text-4xl">
              What will I get?
            </h2>
            <p className="mt-4 max-w-xl text-stone">
              A straightforward look at your local visibility — and what I&apos;d
              prioritize first.
            </p>
            <ul className="mt-6 grid gap-2.5">
              {youGet.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-stone">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-xl border border-mist bg-cream p-6">
              <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
                Don&apos;t have a website yet?
              </p>
              <h3 className="font-serif mt-3 text-2xl tracking-tight">That&apos;s okay.</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">
                You can still request the game plan. I&apos;ll tell you what I&apos;d
                prioritize first — whether that&apos;s your Google Business Profile,
                website, reviews, or something else.
              </p>
              <p className="mt-3 text-sm font-medium text-ink">
                No website required. No sales pitch required.
              </p>
            </div>
          </div>
          <div id="audit-form" className="order-1 scroll-mt-28 lg:sticky lg:top-28 lg:order-2">
            <AuditForm variant="contact" />
          </div>
        </div>
      </section>

      <section className="border-y border-mist bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-site px-6">
          <h2 className="font-serif max-w-[18ch] text-4xl tracking-tightest md:text-5xl">
            Here&apos;s what I&apos;ll actually send you.
          </h2>
          <p className="mt-5 max-w-2xl text-stone">
            Sample audit — representative of what you&apos;ll receive. This is not a
            real client, and the scores are not from live data.
          </p>
          <article className="mt-10 rounded-xl border border-mist bg-white p-7 md:p-10">
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
                The Google Business Profile and the website are aiming at different
                searches. That gap is costing the highest-value local queries.
              </p>
            </div>
            <div className="mt-10">
              <h3 className="font-serif text-2xl tracking-tight">What I would fix first</h3>
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

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-site px-6">
          <h2 className="font-serif max-w-[16ch] text-3xl tracking-tightest md:text-4xl">
            A few quick answers
          </h2>
          <div className="mt-8 grid gap-4">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="rounded-xl border border-mist bg-white px-6 py-5"
              >
                <summary className="cursor-pointer font-medium text-ink">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-stone">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-mist bg-cream py-10 md:py-12">
        <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl tracking-tight md:text-3xl">
              Want help implementing it?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              If you&apos;d rather have NOBLE handle the work, plans start at
              $1,250/month. Pricing is public and there is no &ldquo;book a call to
              find out.&rdquo;
            </p>
          </div>
          <Button href={paths.pricing} variant="secondary">
            View Pricing
          </Button>
        </div>
      </section>

      <div className="pt-16 md:pt-20">
        <FinalCta
          title="See what Google sees."
          body="Get your free local SEO game plan and find out what I'd fix first."
          buttonLabel="Get My Free SEO Game Plan →"
          href="#audit-form"
        />
      </div>
    </div>
  );
}
