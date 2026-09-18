import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export function LegalPage({
  kicker,
  title,
  updated,
  children,
}: {
  kicker: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-16 md:py-20">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: title }]} />
          <p className="mt-8 text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            {kicker}
          </p>
          <h1 className="font-serif mt-4 max-w-[16ch] text-5xl tracking-tightest md:text-6xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-stone">Updated {updated}</p>
        </div>
      </section>
      <section className="py-16">
        <article className="mx-auto grid max-w-3xl gap-8 px-6 text-stone [&_a]:text-forest [&_a]:hover:text-forest-deep [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:tracking-tight [&_h2]:text-ink [&_li]:leading-relaxed [&_p]:leading-relaxed [&_ul]:grid [&_ul]:list-disc [&_ul]:gap-2 [&_ul]:pl-5">
          {children}
        </article>
      </section>
    </div>
  );
}
