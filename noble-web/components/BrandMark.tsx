import Link from "next/link";

export function BrandMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      className="font-serif text-[1.65rem] leading-none font-medium tracking-wide"
      aria-label="NOBLE SEO home"
    >
      <span className={inverted ? "text-white" : "text-ink"}>NOBLE</span>{" "}
      <span className={inverted ? "text-white" : "text-forest"}>SEO</span>
    </Link>
  );
}
