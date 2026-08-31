import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { paths } from "@/lib/site";

export const metadata: Metadata = {
  title: "Audit received",
  description: "Your local search audit request was received.",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <section className="mx-auto max-w-site px-6 py-28">
      <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
        Request received
      </p>
      <h1 className="font-serif mt-4 max-w-[14ch] text-5xl tracking-tightest">
        Your audit request is in.
      </h1>
      <p className="mt-5 max-w-xl text-lg text-stone">
        We will review your business and send the findings to the email you
        provided.
      </p>
      <p className="mt-4 max-w-xl text-stone">
        If you do not see a reply, check spam or email{" "}
        <a className="text-forest hover:text-forest-deep" href="mailto:hello@nobleseo.co">
          hello@nobleseo.co
        </a>
        .
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button href={paths.pricing}>Explore NOBLE Pricing →</Button>
        <Button href={paths.caseStudies} variant="secondary">
          See the Proof
        </Button>
      </div>
    </section>
  );
}
