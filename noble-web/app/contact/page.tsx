import type { Metadata } from "next";
import { AuditForm } from "@/components/AuditForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/components/JsonLd";
import { paths } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Local SEO Audit",
  description:
    "Get a free local SEO audit from NOBLE. We'll review your Google Maps visibility, Google Business Profile, website, reviews, and local competition.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Free Local SEO Audit | NOBLE SEO",
    description:
      "Get a free local SEO audit from NOBLE. We'll review your Google Maps visibility, Google Business Profile, website, reviews, and local competition.",
    url: "/contact",
  },
};

const lookAt = [
  {
    n: "01",
    title: "Google Maps",
    body: "How your business appears when nearby customers search for your services.",
  },
  {
    n: "02",
    title: "Google Business Profile",
    body: "Categories, services, reviews, photos, and what is missing from the listing.",
  },
  {
    n: "03",
    title: "Your website",
    body: "The pages, content, and technical issues affecting local visibility.",
  },
  {
    n: "04",
    title: "Your competition",
    body: "What businesses outranking you are doing differently.",
  },
  {
    n: "05",
    title: "Your next 3 moves",
    body: "The three highest-priority improvements we would make first.",
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
            { name: "Free Local Search Audit", href: "/contact" },
          ]),
          serviceSchema({
            name: "Free Local Search Audit",
            description: metadata.description as string,
            url: "/contact",
          }),
        ]}
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-20">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />
          <p className="mt-8 text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Free local search audit
          </p>
          <h1 className="font-serif mt-4 max-w-[16ch] text-5xl tracking-tightest md:text-6xl">
            Get Your Free NOBLE Local Search Audit
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium text-ink">
            Find out what is keeping your business from getting more customers
            from Google Search and Maps.
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone">
            We will review your Google Business Profile, Maps visibility,
            website, reviews, and local competition — then show you the 3
            things we would fix first.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#audit-form">Get My Free Audit →</Button>
            <Button href={paths.pricing} variant="secondary">
              See pricing
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            The audit
          </p>
          <h2 className="font-serif mt-4 max-w-[16ch] text-4xl tracking-tightest md:text-5xl">
            What we will look at
          </h2>
          <p className="mt-5 max-w-2xl text-stone">
            The question is simple: what is keeping you from getting more
            customers from Google? The audit is the diagnosis. It is not the
            product.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {lookAt.map((item) => (
              <article
                key={item.n}
                className="rounded-xl border border-mist bg-white p-7"
              >
                <p className="font-serif text-3xl text-forest/35">{item.n}</p>
                <h3 className="mt-4 text-lg font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-mist bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Example only
          </p>
          <h2 className="font-serif mt-4 max-w-[16ch] text-4xl tracking-tightest md:text-5xl">
            Here is what your audit looks like
          </h2>
          <p className="mt-5 max-w-2xl text-stone">
            This is a sample. It is not a real client, and the scores are not
            from live data. It is here so you can see the shape of the
            deliverable before you send the form.
          </p>
          <article className="mt-12 rounded-xl border border-mist bg-white p-7 md:p-10">
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
              Sample audit — example business
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

      <section className="bg-ink py-20 text-white md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-white/50 uppercase">
            No obligation
          </p>
          <h2 className="font-serif mt-4 max-w-[14ch] text-4xl tracking-tightest md:text-5xl">
            No pitch. Just the audit.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-white/70">
            You do not need to sign a contract, book a sales call, or hand over
            a marketing budget.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            We will show you what we see. What you do with it is up to you.
          </p>
        </div>
      </section>

      <section id="audit-form" className="scroll-mt-28 py-20 md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Request
          </p>
          <h2 className="font-serif mt-4 max-w-[16ch] text-4xl tracking-tightest md:text-5xl">
            Request your free audit
          </h2>
          <p className="mt-5 max-w-2xl text-stone">
            Give us a few details and we will take a look. Name, business,
            website, and email. About thirty seconds.
          </p>
          <div className="mt-10 max-w-3xl">
            <AuditForm />
          </div>
          <p className="mt-6 text-sm text-stone">
            Prefer to write directly?{" "}
            <a className="text-forest hover:text-forest-deep" href="mailto:hello@nobleseo.co">
              hello@nobleseo.co
            </a>
          </p>
        </div>
      </section>

      <section className="border-y border-mist bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            After the diagnosis
          </p>
          <h2 className="font-serif mt-4 max-w-[16ch] text-4xl tracking-tightest md:text-5xl">
            Want to know what implementation costs?
          </h2>
          <p className="mt-5 max-w-2xl text-stone">
            NOBLE pricing is on the page: $1,250, $1,850, or $2,500 a month.
            No “book a call to learn more.”
          </p>
          <div className="mt-8">
            <Button href={paths.pricing}>See NOBLE Pricing →</Button>
          </div>
        </div>
      </section>

      <FinalCta
        title="Wondering what Google sees?"
        body="Let’s find out. The audit is free. There is no obligation."
        buttonLabel="Get Your Free Local Search Audit →"
        href="#audit-form"
      />
    </div>
  );
}
