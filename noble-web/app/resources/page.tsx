import type { Metadata } from "next";
import { resourceNotes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources",
  description: "Practical notes on local SEO, Google Business Profile, and modern search from NOBLE.",
};

export default function ResourcesPage() {
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-site px-6 py-20">
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
            Resources
          </p>
          <h1 className="font-serif mt-4 max-w-[14ch] text-5xl tracking-tightest md:text-6xl">
            Notes, when they are useful.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            Free education lives on the channels. This page is reserved for
            short, practical writing. Nothing is published yet.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-site px-6 py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {resourceNotes.map((note) => (
            <article key={note.title} className="rounded-xl border border-mist p-6">
              <p className="text-xs font-medium tracking-[0.16em] text-forest uppercase">
                Coming soon. {note.topic}
              </p>
              <h2 className="font-serif mt-3 text-2xl tracking-tight">{note.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone">{note.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
