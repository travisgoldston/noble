import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { paths, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms for using nobleseo.co and requesting a free local SEO game plan from NOBLE SEO LLC.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage kicker="Legal" title="Terms of use" updated="October 3, 2026">
      <p>
        By using{" "}
        <a href={site.url}>{site.url.replace("https://", "")}</a>, you agree to
        these terms with {site.legalName} (“NOBLE SEO,” “NOBLE,” “we,” “us”).
        Questions:{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <div>
        <h2>Who we are</h2>
        <p className="mt-3">
          {site.legalName} is a Utah limited liability company. We serve
          Dallas–Fort Worth businesses remotely. We do not claim a storefront
          we do not occupy.
        </p>
      </div>

      <div>
        <h2>The website and paid work</h2>
        <p className="mt-3">
          This website is information about our work, pricing, and proof. A
          free local SEO game plan request is not a paid engagement and does
          not create a client relationship. Nothing on the site is legal, tax,
          or guaranteed-results advice.
        </p>
        <p className="mt-3">
          Paid SEO work is a separate relationship. It is described on the{" "}
          <Link href={paths.pricing}>pricing page</Link> and governed by a
          written service agreement we send you — not by these website Terms.
          We do not sell social, PPC, branding, or generic web design unless we
          say so in writing.
        </p>
      </div>

      <div>
        <h2>No ranking or lead guarantees</h2>
        <p className="mt-3">
          We do not guarantee search rankings, traffic, leads, revenue, Google
          Business Profile placement, Maps results, or any other specific
          business outcome. Google does not sell those, and neither do we. Case
          studies are published with numbers, caveats, and permission. We do
          not fabricate results.
        </p>
      </div>

      <div>
        <h2>Intellectual property</h2>
        <p className="mt-3">
          {site.legalName} owns or has the right to use this website, the NOBLE
          and NOBLE SEO names and logos, and the original copy, graphics,
          layouts, reports, templates, and other materials we create, unless we
          say otherwise. Client marks and third-party logos on the site belong
          to their owners.
        </p>
        <p className="mt-3">
          You may not copy, scrape, resell, or republish our original content
          without permission. A written game plan or report we send you is for
          your business’s internal use unless we agree otherwise in writing.
        </p>
      </div>

      <div>
        <h2>Third-party services</h2>
        <p className="mt-3">
          The website and our work rely on platforms we do not control. Today
          that includes website hosting (Vercel), email, and Google’s search
          products — Search, Maps, and Google Business Profile. Those providers
          can change, go down, or change how results work. That is outside our
          control.
        </p>
      </div>

      <div>
        <h2>Access and materials you send us</h2>
        <p className="mt-3">
          If you give us website access, Google Business Profile access, Search
          Console access, advertising access, content, images, business
          information, or other materials, you represent that you have the
          authority to do so. We may use what you send to prepare a game plan
          or, if we are hired, to perform the work. You are responsible for
          providing accurate information.
        </p>
      </div>

      <div>
        <h2>Remote work</h2>
        <p className="mt-3">
          We serve Dallas–Fort Worth remotely from Utah. We do not claim a
          storefront we do not occupy.
        </p>
      </div>

      <div>
        <h2>Use of the website</h2>
        <p className="mt-3">
          Do not misuse the site: no scraping that harms the service, no
          unlawful activity, and no attempts to break security. We may restrict
          or stop access to the website if we reasonably believe there is
          misuse, abuse, unlawful activity, a security concern, or a violation
          of these Terms.
        </p>
      </div>

      <div>
        <h2>Limitation of liability</h2>
        <p className="mt-3">
          The website and the free game plan are provided as-is. To the extent
          allowed by law, {site.legalName} is not liable for indirect,
          incidental, or consequential damages arising from use of the site.
          Paid work is governed by the written agreement we send you.
        </p>
      </div>

      <div>
        <h2>Disputes</h2>
        <p className="mt-3">
          These website Terms are governed by the laws of the State of Utah,
          where {site.legalName} is based, without regard to conflict-of-law
          rules. Disputes about paid SEO work may instead be governed by the
          separate written service agreement.
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
