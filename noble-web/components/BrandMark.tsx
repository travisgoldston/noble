import Link from "next/link";

export function BrandMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      className="font-serif text-[clamp(1.8rem,1.2vw+1.55rem,1.95rem)] leading-none font-bold tracking-[0.04em]"
      aria-label="NOBLE SEO home"
    >
      <span className={inverted ? "text-white" : "text-ink"}>NOBLE</span>{" "}
      <span className={inverted ? "text-white" : "text-forest"}>SEO</span>
    </Link>
  );
}
