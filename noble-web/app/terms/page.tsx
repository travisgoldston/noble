import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { paths, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms for using nobleseo.co and requesting a free local SEO game plan from NOBLE SEO.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage kicker="Legal" title="Terms of use" updated="September 18, 2026">
      <p>
        By using{" "}
        <a href={site.url}>{site.url.replace("https://", "")}</a>, you agree to
        these terms. Questions:{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <div>
        <h2>Who we are</h2>
        <p className="mt-3">
          NOBLE SEO is a small local SEO team serving Dallas–Fort Worth
          businesses remotely. We are based in Utah.
        </p>
      </div>

      <div>
        <h2>The website</h2>
        <p className="mt-3">
          The site is information about our work, pricing, and proof. Nothing
          on it is legal, tax, or guaranteed-results advice. A game-plan
          request is not a paid engagement.
        </p>
      </div>

      <div>
        <h2>Paid work</h2>
        <p className="mt-3">
          Paid work is local SEO — Maps, Local, or Competitive — as described
          on the{" "}
          <Link href={paths.pricing}>pricing page</Link>. We do not sell
          social, PPC, branding, or generic web design unless we say so in
          writing. The agreement we send you governs a paid engagement.
        </p>
      </div>

      <div>
        <h2>No ranking or lead guarantees</h2>
        <p className="mt-3">
          We do not guarantee rankings, traffic, leads, or revenue. Google does
          not sell those, and neither do we. Case studies are published with
          numbers, caveats, and permission. We do not fabricate results.
        </p>
      </div>

      <div>
        <h2>Your part</h2>
        <p className="mt-3">
          You are responsible for providing accurate information, for having
          the right to share materials you send us, and — if we are hired —
          for access to the listing, website, and accounts needed to do the
          work.
        </p>
      </div>

      <div>
        <h2>Remote work</h2>
        <p className="mt-3">
          We serve Dallas–Fort Worth remotely. We do not claim a storefront we
          do not occupy.
        </p>
      </div>

      <div>
        <h2>Limitation of liability</h2>
        <p className="mt-3">
          The website and the free game plan are provided as-is. To the extent
          allowed by law, NOBLE is not liable for indirect, incidental, or
          consequential damages arising from use of the site. Paid work is
          governed by the written agreement we send you.
        </p>
      </div>

      <div>
        <h2>Governing law</h2>
        <p className="mt-3">
          These terms are governed by the laws of the State of Utah, without
          regard to conflict-of-law rules.
        </p>
      </div>

      <div>
        <h2>Changes</h2>
        <p className="mt-3">
          If these terms change, we will update the date at the top of this
          page.
        </p>
      </div>
    </LegalPage>
  );
}
