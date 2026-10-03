import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How NOBLE SEO LLC collects, uses, and protects information from the website and free local SEO game plan form.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage kicker="Legal" title="Privacy policy" updated="October 3, 2026">
      <p>
        This policy explains what {site.legalName} (“NOBLE SEO,” “NOBLE,”
        “we,” “us”) collects on{" "}
        <a href={site.url}>{site.url.replace("https://", "")}</a> and how we
        use it. Questions:{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>
        {site.phoneTel ? (
          <>
            {" "}
            or{" "}
            <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
          </>
        ) : null}
        .
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
        <h2>Information you give us</h2>
        <p className="mt-3">
          The free game plan form asks for name, business name, and email. It
          may also ask for website URL (if you have one), Google Business
          Profile status, city, and primary service. Required fields are marked
          on the form.
        </p>
        <p className="mt-3">
          If you email, call, or text us, we also have whatever you choose to
          send in that conversation.
        </p>
      </div>

      <div>
        <h2>Information collected automatically</h2>
        <p className="mt-3">
          Our website host keeps ordinary server logs. Those can include IP
          address, browser and device information, pages requested, the
          referring site, timestamps, and an approximate location derived from
          IP. That is how hosting works. We do not currently run a separate
          analytics or advertising pixel on this site.
        </p>
      </div>

      <div>
        <h2>Analytics and cookies</h2>
        <p className="mt-3">
          This website does not currently load Google Analytics, Google Tag
          Manager, Meta Pixel, or similar advertising or analytics scripts. The
          pages work if you block cookies. If that changes, we will update this
          page.
        </p>
      </div>

      <div>
        <h2>How we use form and contact information</h2>
        <p className="mt-3">
          We use what you submit to reply, to write the requested local SEO
          game plan, and to talk with you about work you asked about. If we are
          later hired, that information can become part of the client record.
          We do not sell personal information. Submitting the form does not add
          you to a marketing list.
        </p>
      </div>

      <div>
        <h2>Who processes it</h2>
        <p className="mt-3">
          The small team. Form submissions are delivered to us through the
          website host (Vercel) so we can email you a response. Email we send
          or receive is handled by our email provider. We do not currently use
          a payment processor, scheduling widget, or CRM on this website.
        </p>
      </div>

      <div>
        <h2>How long we keep it</h2>
        <p className="mt-3">
          We keep personal information only as long as it is reasonably needed
          for the purposes in this policy, to keep records, to resolve
          disputes, to meet legal obligations, or for other legitimate business
          reasons — for example, a game-plan request we still need to answer,
          or a client file if we work together.
        </p>
      </div>

      <div>
        <h2>Security</h2>
        <p className="mt-3">
          We use reasonable administrative, technical, and organizational
          measures designed to protect information. No website, email, or
          storage method is completely secure, and we do not claim that
          incidents are impossible.
        </p>
      </div>

      <div>
        <h2>Privacy requests</h2>
        <p className="mt-3">
          Email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> if you want to
          know what information we have, correct it, or ask us to delete it. We
          will do what the law requires.
        </p>
      </div>

      <div>
        <h2>Children</h2>
        <p className="mt-3">
          This site is not directed at children under 13. We do not knowingly
          collect personal information from children under 13.
        </p>
      </div>

      <div>
        <h2>State privacy laws</h2>
        <p className="mt-3">
          Some states give residents extra rights over personal information.
          Those laws often apply only above certain revenue or data-volume
          thresholds. We do not claim that every such law applies to{" "}
          {site.legalName}. If a law does apply to your request, email us and
          we will handle it as required. We do not sell personal information.
        </p>
      </div>

      <div>
        <h2>Changes</h2>
        <p className="mt-3">
          If this policy changes, we will update the date at the top of this
          page.
        </p>
      </div>
    </LegalPage>
  );
}
