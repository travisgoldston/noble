import type { Metadata } from "next";
import { AuditForm } from "@/components/AuditForm";
import { Button } from "@/components/Button";
import { cta, paths } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free SEO Audit",
  description:
    "Request a free SEO audit from Noble. We review Google Search and Maps visibility and tell you whether it makes sense to work together.",
  alternates: { canonical: "/contact" },
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
            Get your free SEO audit
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            Share enough to qualify the work. We review how the business shows
            up in Google Search and Maps, then reply with a plain-English read
            and a clear next step.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-site gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <AuditForm />
        <aside className="h-fit rounded-xl border border-mist bg-cream p-7">
          <h2 className="font-serif text-2xl tracking-tight">What happens next</h2>
          <ol className="mt-4 grid gap-3 text-sm text-stone">
            <li>1. We confirm we received the request.</li>
            <li>2. Typical response time is one business day.</li>
            <li>3. You get a short audit: what is in the way, and whether Noble is a fit.</li>
            <li>4. If it is a fit, we schedule a conversation. If it is not, we say so.</li>
          </ol>
          <p className="mt-6 text-sm text-stone">Prefer to write directly?</p>
          <p className="mt-2">
            <a className="text-forest hover:text-forest-deep" href="mailto:hello@nobleseo.co">
              hello@nobleseo.co
            </a>
          </p>
          <p className="mt-6 text-sm text-stone">
            Local SEO starts at $1,250/month. The audit is free either way.
          </p>
          <div className="mt-6">
            <Button href={paths.caseStudies} variant="secondary">
              {cta.proof}
            </Button>
          </div>
        </aside>
      </section>
    </div>
  );
}
