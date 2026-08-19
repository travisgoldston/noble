import type { Metadata } from "next";
import { AssessmentForm } from "@/components/AssessmentForm";

export const metadata: Metadata = {
  title: "Get a Search Assessment",
  description:
    "Request a practical search assessment from NOBLE. We will look at the Google presence and tell you whether it makes sense to work together.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-20">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Contact
          </p>
          <h1 className="font-serif mt-4 max-w-[13ch] text-5xl tracking-tightest md:text-6xl">
            Get a Search Assessment
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            Share enough context to understand the business and the search
            challenge. If NOBLE can help, the next conversation is about
            priorities, not a pitch deck.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-site gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <AssessmentForm />
        <aside className="h-fit rounded-xl border border-mist bg-cream p-7">
          <h2 className="font-serif text-2xl tracking-tight">Email is always open</h2>
          <p className="mt-3 text-sm text-stone">
            Prefer to write directly?
          </p>
          <p className="mt-2">
            <a className="text-forest hover:text-forest-deep" href="mailto:travis@nobleseo.co">
              travis@nobleseo.co
            </a>
          </p>
          <p className="mt-6 text-sm text-stone">
            Capacity stays limited. If the work is not a fit, you will hear that
            clearly.
          </p>
        </aside>
      </section>
    </div>
  );
}
