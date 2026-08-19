import Image from "next/image";
import Link from "next/link";
import { budgetocity } from "@/lib/content";

export function BudgetocityFeature() {
  return (
    <article className="grid items-center gap-7 rounded-xl border border-mist bg-cream p-8 md:grid-cols-[140px_1fr] md:p-10">
      <a
        href={budgetocity.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center"
      >
        <Image
          src={budgetocity.logo}
          alt="Budgetocity"
          width={120}
          height={120}
          className="h-[120px] w-[120px] rounded-full object-contain"
        />
      </a>
      <div>
        <p className="text-xs font-medium tracking-[0.16em] text-forest uppercase">
          {budgetocity.kicker}
        </p>
        <h3 className="font-serif mt-2 text-3xl tracking-tight">{budgetocity.name}</h3>
        <p className="mt-3 font-medium text-ink">{budgetocity.metric}</p>
        <p className="mt-3 text-sm leading-relaxed text-stone">{budgetocity.summary}</p>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
          <Link href="/work" className="text-forest hover:text-forest-deep">
            Read the case study
          </Link>
          <a
            href={budgetocity.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest hover:text-forest-deep"
          >
            Visit Budgetocity
          </a>
        </div>
      </div>
    </article>
  );
}
