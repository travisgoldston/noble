import { pricing, pricingTiers } from "@/lib/pricing";
import { Button } from "@/components/Button";
import { cta, paths } from "@/lib/site";

export function PricingBlock({ id = "pricing" }: { id?: string }) {
  return (
    <section id={id} className="py-20 md:py-24">
      <div className="mx-auto max-w-site px-6">
        <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
          Pricing
        </p>
        <h2 className="font-serif mt-4 max-w-[16ch] text-4xl tracking-tightest md:text-5xl">
          Local SEO, priced in the open.
        </h2>
        <p className="mt-5 max-w-2xl text-stone">{pricing.summary}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {pricingTiers.map((tier) => {
            const featured = tier.featured;
            return (
              <article
                key={tier.id}
                className={`rounded-xl border p-6 ${
                  featured ? "border-forest bg-cream" : "border-mist bg-white"
                }`}
              >
                <p className="text-[0.72rem] font-medium tracking-[0.18em] text-forest uppercase">
                  {tier.kicker}
                </p>
                <p className="font-serif mt-2 text-2xl tracking-tight">{tier.name}</p>
                <p className="mt-2 text-lg font-medium">{tier.priceLabel}</p>
              </article>
            );
          })}
        </div>
        <p className="mt-6 text-sm text-stone">
          If {pricing.startingLabel} is not realistic, we are probably not the
          right fit.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={paths.pricing}>See pricing</Button>
          <Button href={paths.contact} variant="secondary">
            {cta.primary}
          </Button>
        </div>
      </div>
    </section>
  );
}
