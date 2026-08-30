import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { FaqList } from "@/components/FaqList";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/components/JsonLd";
import { PricingBlock } from "@/components/PricingBlock";
import { RelatedLinks } from "@/components/RelatedLinks";
import { articlePath } from "@/lib/articles/helpers";
import { caseStudies } from "@/lib/case-studies";
import { locations, processSteps } from "@/lib/content";
import { industryCityPath, industryPath, cta, paths } from "@/lib/site";
import { notFound } from "next/navigation";

const faqs = [
  {
    question: "Does NOBLE have a Fort Worth office?",
    answer:
      "No. We do not claim a physical Fort Worth office, a virtual office, or a residential address used to manufacture Maps presence. The founder works remotely and serves Fort Worth businesses as part of DFW coverage.",
  },
  {
    question: "How much does local SEO cost in Fort Worth?",
    answer:
      "Maps is $1,250/month when the listing is the main leak. Local is $1,850/month when the site and local pages need more work. Competitive is $2,500/month when the market is crowded and the build is heavier. Same prices as the rest of DFW — not a Fort Worth discount.",
  },
  {
    question: "How long does Fort Worth SEO take?",
    answer:
      "Listing and technical fixes can show up quickly. Competitive Map pack movement across a wide city usually takes longer. We set expectations against the market, not a generic 90-day promise.",
  },
  {
    question: "Does local SEO help businesses outside downtown Fort Worth?",
    answer:
      "Yes. A lot of Fort Worth search happens from the south side, near TCU, toward Keller, or from a phone in the Zoo parking lot. Distance is real. The listing and the site still have to tell the truth about where you work.",
  },
  {
    question: "How does Google Maps ranking work in Fort Worth?",
    answer:
      "Relevance, distance, and prominence. You cannot veto distance in a spread-out city. You can stop looking empty: the right category, an honest service area, reviews that mention the work, and a page that matches the search.",
  },
  {
    question: "What types of Fort Worth businesses does NOBLE work with?",
    answer:
      "High-value local businesses that depend on Search and Maps: home services, dental and optometry practices, and other firms where a new customer is worth real money. HVAC is one example, not the only one.",
  },
];

const fortWorthIndustryNav = [
  {
    href: industryCityPath("hvac-seo", "fort-worth"),
    label: "HVAC SEO in Fort Worth",
    lede: "Maps, service area, and emergency AC/heat searches across a wide city.",
  },
  {
    href: industryCityPath("dental-seo", "fort-worth"),
    label: "Dental SEO in Fort Worth",
    lede: "New-patient Maps, treatment pages, and an office that looks bookable.",
  },
  {
    href: industryCityPath("optometry-seo", "fort-worth"),
    label: "Optometry SEO in Fort Worth",
    lede: "Eye exams, contacts, and independent practices next to optical chains.",
  },
  {
    href: industryPath("plumbing-seo"),
    label: "Plumbing SEO",
    lede: "Emergency plumber and water heater search. Fort Worth city page comes when the copy is locally true.",
  },
  {
    href: industryPath("roofing-seo"),
    label: "Roofing SEO",
    lede: "Repair, replacement, and storm-season Maps — without doorway suburbs.",
  },
  {
    href: industryPath("electrical-seo"),
    label: "Electrical SEO",
    lede: "Panel, EV charger, and outage searches for licensed shops.",
  },
  {
    href: industryPath("med-spa-seo"),
    label: "Med spa SEO",
    lede: "Treatment pages and Maps in a short-distance retail corridor.",
  },
  {
    href: industryPath("orthodontic-seo"),
    label: "Orthodontic SEO",
    lede: "Braces, Invisalign, and consult intent — not dentist-with-extra-keywords.",
  },
];

export const metadata: Metadata = {
  title: "Fort Worth SEO",
  description:
    "Founder-led local SEO for Fort Worth businesses. Google Maps, Google Business Profile, and technical SEO — remote, honest, and built on proof. No fake Fort Worth office.",
  alternates: { canonical: "/areas/fort-worth-seo" },
  openGraph: {
    title: "Fort Worth SEO | NOBLE SEO",
    description:
      "Founder-led local SEO for Fort Worth businesses. Maps, Google Business Profile, and a free audit — without a fake Fort Worth office.",
    url: "/areas/fort-worth-seo",
  },
};

export default function FortWorthSeoPage() {
  const city = locations.find((item) => item.slug === "fort-worth");
  if (!city) notFound();

  return (
    <div>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Areas", href: "/areas" },
            { name: "Fort Worth SEO", href: "/areas/fort-worth-seo" },
          ]),
          serviceSchema({
            name: "Fort Worth SEO",
            description: metadata.description as string,
            url: "/areas/fort-worth-seo",
          }),
          faqSchema(faqs),
        ]}
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-20">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Areas", href: "/areas" },
              { name: "Fort Worth SEO" },
            ]}
          />
          <p className="mt-8 text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Fort Worth, Texas
          </p>
          <h1 className="font-serif mt-4 max-w-[18ch] text-5xl tracking-tightest md:text-6xl">
            Local SEO for Fort Worth businesses.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            Founder-led local SEO for companies that want more of the right
            Fort Worth customers finding them on Google Search and Maps. We
            work remotely. We do not invent a Fort Worth office to look local.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={paths.contact}>{cta.primary}</Button>
            <Button href={paths.caseStudies} variant="secondary">
              {cta.proof}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-site px-6">
          <article className="max-w-3xl">
            <h2 className="font-serif text-3xl tracking-tight">
              What NOBLE does in Fort Worth
            </h2>
            <p className="mt-4 text-stone">
              The product is local SEO. Google Business Profile, Maps
              visibility, on-page service pages, and technical fixes are how
              the work gets done. The outcome is qualified calls and customers —
              not a dashboard full of vanity rankings.
            </p>
            <p className="mt-4 text-stone">{city.intro}</p>

            <h2 className="font-serif mt-12 text-3xl tracking-tight">
              How Fort Worth actually searches
            </h2>
            {city.places.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-stone">
                {paragraph}
              </p>
            ))}

            <h2 className="font-serif mt-12 text-3xl tracking-tight">
              Google Maps and local SEO here
            </h2>
            {city.searchReality.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-stone">
                {paragraph}
              </p>
            ))}
            <p className="mt-4 text-stone">
              Organic search still matters after the map click. If the website
              never names roof repair, AC service, or the part of town you
              actually cover, the pack click dies on the homepage. Technical
              SEO is what keeps those pages indexable and usable on a phone.
            </p>

            <h2 className="font-serif mt-12 text-3xl tracking-tight">
              Who this is for
            </h2>
            <p className="mt-4 text-stone">{city.whoFor}</p>
            <p className="mt-4 text-stone">
              The work is the same product. The searches are not. Fort Worth
              home services, clinics, and other high-value local businesses all
              need to be findable — they do not all type the same query.
            </p>
          </article>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-[0.72rem] font-medium tracking-[0.18em] text-forest uppercase">
                Home services
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-stone">
                <li>
                  <Link href={industryCityPath("hvac-seo", "fort-worth")} className="text-forest hover:text-forest-deep">
                    HVAC
                  </Link>
                </li>
                <li>
                  <Link href={industryPath("plumbing-seo")} className="text-forest hover:text-forest-deep">
                    Plumbing
                  </Link>
                </li>
                <li>
                  <Link href={industryPath("roofing-seo")} className="text-forest hover:text-forest-deep">
                    Roofing
                  </Link>
                </li>
                <li>
                  <Link href={industryPath("electrical-seo")} className="text-forest hover:text-forest-deep">
                    Electrical
                  </Link>
                </li>
                <li>Foundation repair</li>
                <li>Remodeling</li>
                <li>Garage doors</li>
                <li>Concrete</li>
                <li>Landscaping</li>
                <li>Fencing</li>
              </ul>
            </div>
            <div>
              <p className="text-[0.72rem] font-medium tracking-[0.18em] text-forest uppercase">
                Healthcare & wellness
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-stone">
                <li>
                  <Link href={industryCityPath("dental-seo", "fort-worth")} className="text-forest hover:text-forest-deep">
                    Dental
                  </Link>
                </li>
                <li>
                  <Link href={industryPath("orthodontic-seo")} className="text-forest hover:text-forest-deep">
                    Orthodontics
                  </Link>
                </li>
                <li>
                  <Link href={industryCityPath("optometry-seo", "fort-worth")} className="text-forest hover:text-forest-deep">
                    Optometry
                  </Link>
                </li>
                <li>
                  <Link href={industryPath("med-spa-seo")} className="text-forest hover:text-forest-deep">
                    Med spas
                  </Link>
                </li>
                <li>Chiropractic</li>
                <li>Veterinary</li>
              </ul>
            </div>
            <div>
              <p className="text-[0.72rem] font-medium tracking-[0.18em] text-forest uppercase">
                Other high-value local
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-stone">
                <li>Auto repair</li>
                <li>Specialty contractors</li>
                <li>
                  <Link href={industryPath("professional-services")} className="text-forest hover:text-forest-deep">
                    Professional services
                  </Link>
                </li>
                <li>Other businesses where local search drives the next customer</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 max-w-3xl rounded-xl border border-mist bg-cream p-8">
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
              A real example
            </p>
            <h2 className="font-serif mt-3 text-2xl tracking-tight md:text-3xl">
              {city.exampleTitle}
            </h2>
            <p className="mt-4 text-stone">{city.exampleProblem}</p>
            <ol className="mt-5 grid gap-3 text-sm text-stone">
              {city.exampleFix.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="font-serif text-lg text-forest">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm">
              <Link
                href={industryCityPath("hvac-seo", "fort-worth")}
                className="text-forest hover:text-forest-deep"
              >
                HVAC SEO in Fort Worth
              </Link>
            </p>
          </div>

          <article className="mt-16 max-w-3xl">
            <h2 className="font-serif text-3xl tracking-tight">
              Local SEO looks different by industry
            </h2>
            <p className="mt-4 text-stone">
              The fundamentals stay the same: Google Business Profile, Maps,
              on-page pages, reviews, and a site that can take the click. What
              people type is not the same. Fort Worth is the first market
              where we are testing that geography × industry relationship in
              public — HVAC, dental, and optometry — not because those are
              the only businesses worth helping.
            </p>
            <div className="mt-8 grid gap-6">
              <div className="rounded-xl border border-mist p-6">
                <h3 className="font-medium text-ink">HVAC</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">
                  Maps visibility, honest service areas, emergency and seasonal
                  searches (AC repair, heat, install), reviews that mention the
                  job, and service pages a phone can use.
                </p>
              </div>
              <div className="rounded-xl border border-mist p-6">
                <h3 className="font-medium text-ink">Dental</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">
                  Maps for a real office, treatment and new-patient searches,
                  reviews that sound like patients, and pages for the work you
                  actually want to book — not a DFW slogan.
                </p>
              </div>
              <div className="rounded-xl border border-mist p-6">
                <h3 className="font-medium text-ink">Optometry</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">
                  Eye exam and optometrist search, appointment intent, contacts
                  and specialties if they are real, reviews, and a listing that
                  looks like a clinic next to national optical chains.
                </p>
              </div>
            </div>
          </article>

          <div className="mt-16">
            <h2 className="font-serif text-3xl tracking-tight">
              Local SEO for Fort Worth industries
            </h2>
            <p className="mt-4 max-w-2xl text-stone">
              HVAC, dental, and optometry have Fort Worth pages because the
              local story is different enough to deserve a URL. The others
              link to the industry page until a Fort Worth version can be
              written the same way.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {fortWorthIndustryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl border border-mist bg-white p-6 transition-shadow hover:shadow-card"
                >
                  <h3 className="font-serif text-xl tracking-tight">{item.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{item.lede}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-mist bg-ink py-20 text-white">
        <div className="mx-auto max-w-site px-6">
          <h2 className="font-serif max-w-[14ch] text-4xl tracking-tightest md:text-5xl">
            Methodology
          </h2>
          <p className="mt-5 max-w-2xl text-white/65">
            Same cycle we use across Dallas–Fort Worth.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.n}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-7"
              >
                <p className="font-serif text-3xl text-white/35">{step.n}</p>
                <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-site px-6">
          <h2 className="font-serif text-4xl tracking-tightest md:text-5xl">Proof</h2>
          <p className="mt-5 max-w-2xl text-stone">
            Published results follow the same rules on this page as everywhere
            else: real numbers, stated caveats, no invented Fort Worth plumbing
            case studies.
          </p>
          <div className="mt-10">
            <CaseStudyCard study={caseStudies[0]} />
          </div>
        </div>
      </section>

      <section className="pb-4">
        <div className="mx-auto max-w-site px-6">
          <p className="max-w-2xl text-stone">
            Maps at $1,250/month is focused visibility work when the listing is
            the leak. Local at $1,850/month is for broader site and local SEO.
            Competitive at $2,500/month is for harder markets and more
            substantial build. Details live on the pricing page. The audit is
            how we tell which scope actually fits.
          </p>
        </div>
      </section>
      <PricingBlock />
      <FaqList items={faqs} title="Fort Worth SEO questions" />
      <div className="mx-auto max-w-site px-6 pb-8">
        <RelatedLinks
          title="Keep going"
          items={[
            { href: paths.localSeo, label: "Local SEO" },
            { href: paths.gbp, label: "Google Business Profile" },
            { href: paths.technical, label: "Technical SEO" },
            { href: industryCityPath("hvac-seo", "fort-worth"), label: "HVAC SEO in Fort Worth" },
            { href: industryCityPath("dental-seo", "fort-worth"), label: "Dental SEO in Fort Worth" },
            {
              href: industryCityPath("optometry-seo", "fort-worth"),
              label: "Optometry SEO in Fort Worth",
            },
            { href: articlePath("hvac-seo-fort-worth"), label: "How HVAC SEO works in Fort Worth" },
            { href: paths.resources, label: "Resources" },
            { href: paths.industries, label: "Industries" },
            { href: paths.areas, label: "All DFW areas" },
          ]}
        />
      </div>
      <FinalCta title="See how Fort Worth customers find you today." />
    </div>
  );
}
