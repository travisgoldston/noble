import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { RelatedLinks } from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "About",
  description:
    "Noble is Travis and Victoria Goldston's search practice. Small on purpose. Your story matters more than ours.",
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
            Your story matters more than ours.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            People like to know who they are working with. We will share that.
            The point of the page is still you: the business, the goals, and
            what “good” looks like from your side.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-site items-start gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <figure className="overflow-hidden rounded-xl border border-mist shadow-card">
            <Image
              src="/travis-and-victoria.png"
              alt="Travis and Victoria"
              width={720}
              height={720}
              className="h-auto w-full"
              priority
            />
          </figure>
          <article>
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
              Who we are
            </p>
            <h2 className="font-serif mt-3 text-3xl tracking-tight md:text-4xl">
              Not an agency. A husband and wife who want small businesses found.
            </h2>
            <p className="mt-5 text-stone">
              We are Travis and Victoria. Noble is the two of us. We do the work
              ourselves: the strategy, the writing, the website, the listings.
              When you work with us, you work with the people actually doing the
              work. No handoffs, no repeating your story to someone new.
            </p>
            <p className="mt-4 text-stone">
              We started this because we saw too many good businesses invisible
              online. They were great at what they did, but when someone
              searched for their service, another business showed up, not
              because that business was better, but because they were easier to
              find. We wanted to help level that. We&apos;re not here to sell
              you a package you don&apos;t need. We&apos;re here to help you get
              found so you can do more of what you&apos;re already good at.
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
              Direct contact. Plain language. No runaround.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone">
              You will have our contact. Text or call when something is on your
              mind. We do not use a ticket queue. We explain the work in plain
              English. If something is not working, we say so and adjust.
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
              That is the bar Travis learned from his dad, a Texas master
              electrician for more than thirty years. We try to carry the same
              craft into search work. The moment that matters is when the right
              customer finds you and decides to call.
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
              <p className="font-medium">Who is behind Noble?</p>
              <p className="mt-2 text-sm text-stone">
                Travis and Victoria, a husband and wife team. We run the
                practice and do the work ourselves.
              </p>
            </div>
            <div className="rounded-xl border border-mist p-6">
              <p className="font-medium">Are you an agency?</p>
              <p className="mt-2 text-sm text-stone">
                No. Intentionally small. You work with us directly.
              </p>
            </div>
            <div className="rounded-xl border border-mist p-6">
              <p className="font-medium">How long have you been doing this?</p>
              <p className="mt-2 text-sm text-stone">
                Years of visibility work with local businesses across trades,
                health, and small professional firms.
              </p>
            </div>
            <div className="rounded-xl border border-mist p-6">
              <p className="font-medium">Why so small?</p>
              <p className="mt-2 text-sm text-stone">
                Capacity stays limited so the work stays direct. No junior
                handoffs. No package you do not need.
              </p>
            </div>
          </div>
          <RelatedLinks
            title="Where this work happens"
            items={[
              { href: "/locations", label: "DFW cities" },
              { href: "/services", label: "Services" },
              { href: "/work", label: "Work" },
            ]}
          />
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-16">
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl bg-ink px-8 py-10 text-white md:flex-row md:items-center">
            <div>
              <p className="text-[0.72rem] font-medium tracking-[0.22em] text-white/50 uppercase">
                Next step
              </p>
              <h2 className="font-serif mt-3 max-w-[16ch] text-3xl tracking-tightest">
                Ready to see where you stand?
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact" variant="light">
                Get a Search Assessment
              </Button>
              <Button href="/work" variant="onDark">
                See Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
