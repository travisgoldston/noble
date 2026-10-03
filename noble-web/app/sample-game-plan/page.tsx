import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { gamePlan, paths } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sample SEO Game Plan",
  description:
    "A sample written SEO game plan from NOBLE. Placeholder content that matches what the free game plan covers.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/sample-game-plan" },
};

const sections = [
  {
    title: gamePlan.youGet[0],
    body: "[PLACEHOLDER: what customers searching locally can currently find — branded results, Maps, the site, and gaps. This is sample copy, not a live audit.]",
  },
  {
    title: gamePlan.youGet[1],
    body: "[PLACEHOLDER: Google Business Profile and website opportunities, including what to set up if they do not exist yet. Sample copy only.]",
  },
  {
    title: gamePlan.youGet[2],
    body: "[PLACEHOLDER: the biggest visibility issues to fix first. Sample copy only.]",
  },
  {
    title: gamePlan.youGet[3],
    body: "[PLACEHOLDER: what we would prioritize if this were our business. Sample copy only.]",
  },
  {
    title: gamePlan.youGet[4],
    body: "[PLACEHOLDER: whether SEO makes sense for this business right now — including a possible “not yet.” Sample copy only.]",
  },
];

export default function SampleGamePlanPage() {
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-16 md:py-20">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Sample. Not indexed.
          </p>
          <h1 className="font-serif mt-4 max-w-[16ch] text-4xl tracking-tightest md:text-6xl">
            Sample SEO game plan
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            This page shows the shape of the written game plan. Every section
            below is placeholder copy. It is not a real client and not live
            data.
          </p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-site px-6">
          <div className="grid gap-6">
            {sections.map((section, index) => (
              <article
                key={section.title}
                className="rounded-xl border border-mist bg-white p-6 md:p-8"
              >
                <p className="font-serif text-lg text-forest">{index + 1}.</p>
                <h2 className="font-serif mt-2 text-2xl tracking-tight">
                  {section.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-stone">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Button href={paths.contact}>Get My Free SEO Game Plan</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
