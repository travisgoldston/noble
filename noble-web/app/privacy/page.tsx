import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How NOBLE SEO collects, uses, and protects information from the website and free local SEO game plan form.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage kicker="Legal" title="Privacy policy" updated="September 18, 2026">
      <p>
        This policy explains what NOBLE SEO (“NOBLE,” “we,” “us”) collects on{" "}
        <a href={site.url}>{site.url.replace("https://", "")}</a> and how we
        use it. Questions:{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <div>
        <h2>Who we are</h2>
        <p className="mt-3">
          NOBLE is a small local SEO team serving Dallas–Fort Worth businesses
          remotely. We are based in Utah.
        </p>
      </div>

      <div>
        <h2>What we collect</h2>
        <ul className="mt-3">
          <li>
            Game-plan form: name, business name, email, phone, city, website
            (if you have one), Google Business Profile status, and anything you
            type in optional fields.
          </li>
          <li>
            Basic server logs (IP address, browser, pages requested) as part of
            hosting.
          </li>
          <li>
            If Google Analytics is enabled, usage data such as pages viewed,
            device type, and approximate location.
          </li>
        </ul>
      </div>

      <div>
        <h2>How we use it</h2>
        <p className="mt-3">
          We use this information to send your game plan, follow up if you ask
          us to, deliver paid work if we are hired, and understand which pages
          on the site are useful. We do not sell personal information.
        </p>
      </div>

      <div>
        <h2>Who sees it</h2>
        <p className="mt-3">
          The small team. Email, and any form webhook we use to receive
          requests. Hosting and analytics processors that make the site run
          (currently the site host and, if configured, Google Analytics).
        </p>
      </div>

      <div>
        <h2>Cookies</h2>
        <p className="mt-3">
          If Google Analytics is on, it may set cookies to measure site use.
          The site does not depend on a marketing pixel stack. You can block
          cookies in your browser; the pages still work.
        </p>
      </div>

      <div>
        <h2>How long we keep it</h2>
        <p className="mt-3">
          Contact and game-plan requests are kept as long as we need them to
          reply and, if we work together, to keep a client record. Analytics
          retention follows Google’s defaults unless you ask us to delete
          associated data we control.
        </p>
      </div>

      <div>
        <h2>Your choices</h2>
        <p className="mt-3">
          Email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> to access, correct,
          or delete information we hold about you. We do not sell personal
          information.
        </p>
      </div>

      <div>
        <h2>Children</h2>
        <p className="mt-3">
          This site is not directed at children under 13. We do not knowingly
          collect personal information from children.
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
