import { pricing } from "@/lib/site";
import { Button } from "@/components/Button";

export function PricingBlock({ id = "pricing" }: { id?: string }) {
  return (
    <section id={id} className="py-20 md:py-24">
      <div className="mx-auto max-w-site px-6">
        <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
          Pricing
        </p>
        <h2 className="font-serif mt-4 max-w-[16ch] text-4xl tracking-tightest md:text-5xl">
          Local SEO, scoped to the work.
        </h2>
        <div className="mt-10 max-w-2xl rounded-xl border border-mist bg-cream p-8 md:p-10">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Local SEO
          </p>
          <p className="font-serif mt-3 text-4xl tracking-tight">
            Starting at {pricing.startingLabel}
          </p>
          <p className="mt-4 text-stone">{pricing.summary}</p>
          <p className="mt-4 text-sm text-stone">
            The number is here so the right businesses can self-qualify. If
            $1,250/month is not realistic, we are probably not the right fit.
          </p>
          <div className="mt-8">
            <Button href="/contact">Get Your Free SEO Audit</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
