import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { cta, paths } from "@/lib/site";

export const metadata: Metadata = {
  title: "Audit received",
  description: "Your SEO audit request was received. NOBLE will follow up within one business day.",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  const calendar = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <section className="mx-auto max-w-site px-6 py-28">
      <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
        Request received
      </p>
      <h1 className="font-serif mt-4 max-w-[14ch] text-5xl tracking-tightest">
        We have the audit request.
      </h1>
      <p className="mt-5 max-w-xl text-lg text-stone">
        Typical response time is one business day. We will look at Google Search
        and Maps, then tell you what is in the way and whether it makes sense
        to talk.
      </p>
      <p className="mt-4 max-w-xl text-stone">
        If you do not see a reply, check spam or email{" "}
        <a className="text-forest hover:text-forest-deep" href="mailto:hello@nobleseo.co">
          hello@nobleseo.co
        </a>
        .
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        {calendar ? (
          <Button href={calendar}>Book a time</Button>
        ) : (
          <Button href={paths.caseStudies}>{cta.proof}</Button>
        )}
        <Button href={paths.areas} variant="secondary">
          DFW areas
        </Button>
      </div>
    </section>
  );
}
