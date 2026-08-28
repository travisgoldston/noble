import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { FinalCta } from "@/components/FinalCta";
import { caseStudies } from "@/lib/case-studies";
import { paths } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "SEO built on proof. Case studies from Noble SEO with baseline metrics, work performed, results, and caveats — no fabricated numbers.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-20">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Proof
          </p>
          <h1 className="font-serif mt-4 max-w-[14ch] text-5xl tracking-tightest md:text-6xl">
            SEO built on proof.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            Case studies are the primary trust mechanism. Each one includes the
            starting point, the work, the numbers, and the limits of what those
            numbers mean. We do not publish confidential client information
            without permission.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-site px-6 py-16">
        <div className="grid gap-6">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm text-stone">
          Local service case studies for DFW will be added here
          as client work produces clean, permissible results. Until then, the
          published record is organic SEO for Budgetocity — real, inspectable,
          and not dressed up as a Maps campaign.
        </p>
      </section>
      <FinalCta title="Want this kind of look at your search presence?" />
    </div>
  );
}
