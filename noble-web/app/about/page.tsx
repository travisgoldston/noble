import type { Metadata } from "next";
import { FinalCta } from "@/components/FinalCta";
import { RelatedLinks } from "@/components/RelatedLinks";
import { paths } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Noble is a founder-led local SEO practice serving Dallas–Fort Worth. We work remotely and stay small on purpose.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-20">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            About
          </p>
          <h1 className="font-serif mt-4 max-w-[14ch] text-5xl tracking-tightest md:text-6xl">
            A founder-led local SEO practice.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            Noble SEO is not a full-service agency. It is a specialist practice
            built to produce proof: more of the right customers finding local
            businesses on Google Search and Maps.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-site px-6">
          <article className="max-w-3xl">
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
              Who we are
            </p>
            <h2 className="font-serif mt-3 text-3xl tracking-tight md:text-4xl">
              Direct work. Limited capacity. No account layer.
            </h2>
            <p className="mt-5 text-stone">
              When you work with Noble, you work with the person doing the
              strategy, the diagnosis, and the client communication. That is
              intentional. Local SEO fails when the work is handed down a chain
              of people who never looked at the listing.
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
              The first step is a free SEO audit, not a 15-field interrogation.
              If the work is not a fit, you will hear that. If it is, you will
              know what the work costs and what it is for.
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
                No. Founder-led. Intentionally small. You work with us directly.
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
                Capacity stays limited so the work stays direct. Target is a
                small set of strong clients, not a high-volume $300 package mill.
              </p>
            </div>
          </div>
          <RelatedLinks
            title="Where this work happens"
            items={[
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
