import { Button } from "@/components/Button";
import { BudgetocityFeature } from "@/components/BudgetocityFeature";
import { HeroQuiz } from "@/components/HeroQuiz";
import {
  capabilities,
  locations,
  processSteps,
  resourceNotes,
  searchSurfaces,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_88%_0%,rgba(17,80,54,0.10),transparent_36%),linear-gradient(180deg,#f8f9fa_0%,#ffffff_72%)]">
        <div className="mx-auto grid max-w-site items-start gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
              SEO. Local Search. AI Visibility
            </p>
            <h1 className="font-serif mt-5 max-w-[18ch] text-5xl leading-[1.05] tracking-tightest text-ink md:text-6xl">
              Dallas-Fort Worth SEO and Growth for Businesses That Want to Be Found.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone md:text-xl">
              NOBLE builds SEO, local search, Google Business Profile, and
              AI search visibility into a practical growth system for small
              businesses with real ambition and realistic budgets.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/contact">Get a Search Assessment</Button>
              <Button href="/work" variant="secondary">
                See Our Work
              </Button>
            </div>
          </div>
          <HeroQuiz />
        </div>
      </section>

      <section className="border-y border-mist py-12">
        <div className="mx-auto max-w-site px-6">
          <p className="text-center text-[0.72rem] font-medium tracking-[0.22em] text-stone uppercase">
            Trusted by
          </p>
          <div className="mt-6 flex items-center justify-center gap-8">
            <span className="hidden h-px w-24 bg-mist sm:block" aria-hidden="true" />
            <a
              href="https://budgetocity.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              aria-label="Budgetocity"
            >
              <img
                src="/budgetocity-logo.png"
                alt="Budgetocity"
                width={88}
                height={88}
                className="h-[88px] w-[88px] rounded-full object-contain"
              />
            </a>
            <span className="hidden h-px w-24 bg-mist sm:block" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Search changed
          </p>
          <h2 className="font-serif mt-4 max-w-[16ch] text-4xl tracking-tightest md:text-5xl">
            Your customers search across more than ten blue links.
          </h2>
          <p className="mt-5 max-w-2xl text-stone">
            The job is to make the business clear wherever a serious customer
            looks. Not to chase every new channel with a new product.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {searchSurfaces.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-xl border border-mist bg-white p-6"
              >
                <h3 className="font-serif text-2xl tracking-tight">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">{item.body}</p>
                <div className="mt-5">
                  <Button href={item.href} variant="secondary">
                    Learn more
                  </Button>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">Get a Search Assessment</Button>
            <Button href="/services" variant="secondary">
              See all services
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Capabilities
          </p>
          <h2 className="font-serif mt-4 max-w-[16ch] text-4xl tracking-tightest md:text-5xl">
            Search work connected to business outcomes.
          </h2>
          <p className="mt-5 max-w-2xl text-stone">
            NOBLE does not sell a pile of disconnected tactics. Each service
            supports a clearer, more useful search presence.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => (
              <article
                key={item.id}
                className="flex flex-col rounded-xl border border-mist bg-white p-7"
              >
                <h3 className="font-serif text-2xl tracking-tight">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">{item.body}</p>
                <div className="mt-5">
                  <Button href={item.href} variant="secondary">
                    Learn more
                  </Button>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">Get a Search Assessment</Button>
            <Button href="/locations" variant="secondary">
              DFW cities
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-white/50 uppercase">
            How NOBLE works
          </p>
          <h2 className="font-serif mt-4 max-w-[14ch] text-4xl tracking-tightest md:text-5xl">
            SEO is an operating system, not a one time tweak.
          </h2>
          <p className="mt-5 max-w-2xl text-white/65">
            A deliberate cycle keeps the work tied to evidence and prevents
            small budgets from disappearing into low value activity.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
          <div className="mt-12 max-w-3xl border-t border-white/10 pt-10">
            <h3 className="font-serif text-3xl tracking-tight">
              If SEO is the fuel, the website is the engine.
            </h3>
            <p className="mt-4 text-white/70">
              If the engine is broken, you just waste gas. Traffic that hits a
              slow, confusing, or unclear site does not turn into calls.
            </p>
            <p className="mt-4 text-white/70">
              That is why we pair local and on page SEO with technical work when
              the site itself is holding you back. Getting found only helps if
              the next step is obvious.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="light">
                Get a Search Assessment
              </Button>
              <Button href="/work" variant="onDark">
                See Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-mist bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Dallas Fort Worth
          </p>
          <h2 className="font-serif mt-4 max-w-[16ch] text-4xl tracking-tightest md:text-5xl">
            Local SEO for the cities you actually serve.
          </h2>
          <p className="mt-5 max-w-2xl text-stone">
            Search behaves differently in Fort Worth than it does in McKinney.
            These pages are built around how people here look for a business.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {locations.map((city) => (
              <Button key={city.slug} href={`/locations/${city.slug}`} variant="secondary">
                {city.name}
              </Button>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/locations">All DFW cities</Button>
          </div>
        </div>
      </section>

      <section id="work" className="py-20 md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Selected work
          </p>
          <h2 className="font-serif mt-4 text-4xl tracking-tightest md:text-5xl">
            What success looks like
          </h2>
          <p className="mt-5 max-w-2xl text-stone">
            Real organic work. No ad spend required to move the needle.
          </p>
          <div className="mt-12">
            <BudgetocityFeature />
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">Get a Search Assessment</Button>
            <Button href="/work" variant="secondary">
              See Our Work
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-mist bg-cream py-20 md:py-24">
        <div className="mx-auto grid max-w-site gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
              About
            </p>
            <h2 className="font-serif mt-4 max-w-[16ch] text-4xl tracking-tightest md:text-5xl">
              The biggest impact is helping small businesses get found.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone">
              I am Travis. I like making the most impact I can with the hours I
              have. That impact is not another layer of agency process. It is
              helping a small business show up when a real customer is ready to
              choose.
            </p>
          </div>
          <aside className="rounded-xl border border-mist bg-white p-7">
            <p className="font-serif text-2xl tracking-tight">No bloat. No layers.</p>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              If we work together, you work with me, not an account team
              handing notes down a chain. The first conversation is about fit.
            </p>
            <div className="mt-6">
              <Button href="/about" variant="secondary">
                About NOBLE
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section id="resources" className="py-20 md:py-24">
        <div className="mx-auto max-w-site px-6">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Resources
          </p>
          <h2 className="font-serif mt-4 max-w-[14ch] text-4xl tracking-tightest md:text-5xl">
            Free education lives on social. Implementation starts here.
          </h2>
          <p className="mt-5 max-w-2xl text-stone">
            The channels teach. The website is for businesses that have decided
            they want the work done. Notes will live here as they are useful.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {resourceNotes.map((note) => (
              <article key={note.title} className="rounded-xl border border-mist p-6">
                <p className="text-xs font-medium tracking-[0.16em] text-forest uppercase">
                  Coming soon. {note.topic}
                </p>
                <h3 className="font-serif mt-3 text-2xl tracking-tight">{note.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{note.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">Get a Search Assessment</Button>
            <Button href="/resources" variant="secondary">
              Browse resources
            </Button>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-site px-6">
          <div className="flex flex-col items-start justify-between gap-8 rounded-xl bg-forest-deep px-8 py-12 text-white md:flex-row md:items-center md:px-12">
            <div>
              <p className="text-[0.72rem] font-medium tracking-[0.22em] text-white/55 uppercase">
                A practical first step
              </p>
              <h2 className="font-serif mt-3 max-w-[14ch] text-4xl tracking-tightest">
                Find out where the business is losing search visibility.
              </h2>
            </div>
            <Button href="/contact" variant="light">
              Get a Search Assessment
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
