export function FaqList({
  items,
  title = "Questions owners actually ask",
}: {
  items: { question: string; answer: string }[];
  title?: string;
}) {
  return (
    <section className="border-y border-mist bg-cream py-20 md:py-24">
      <div className="mx-auto max-w-site px-6">
        <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
          FAQ
        </p>
        <h2 className="font-serif mt-4 max-w-[16ch] text-4xl tracking-tightest md:text-5xl">
          {title}
        </h2>
        <div className="mt-10 grid gap-4">
          {items.map((item) => (
            <details
              key={item.question}
              className="rounded-xl border border-mist bg-white px-6 py-5"
            >
              <summary className="cursor-pointer font-medium text-ink">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-stone">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
