import { Button } from "@/components/Button";

export function FinalCta({
  eyebrow = "Next step",
  title = "See how the business shows up in Google today.",
  body = "A free SEO audit. Plain English. No obligation.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="pb-20 md:pb-24">
      <div className="mx-auto max-w-site px-6">
        <div className="flex flex-col items-start justify-between gap-8 rounded-xl bg-forest-deep px-8 py-12 text-white md:flex-row md:items-center md:px-12">
          <div>
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-white/55 uppercase">
              {eyebrow}
            </p>
            <h2 className="font-serif mt-3 max-w-[16ch] text-4xl tracking-tightest">
              {title}
            </h2>
            {body ? <p className="mt-4 max-w-xl text-white/70">{body}</p> : null}
          </div>
          <Button href="/contact" variant="light">
            Get Your Free SEO Audit
          </Button>
        </div>
      </div>
    </section>
  );
}
