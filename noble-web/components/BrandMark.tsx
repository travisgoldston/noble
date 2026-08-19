import Link from "next/link";

export function BrandMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      className="font-serif text-[1.65rem] leading-none font-medium tracking-wide"
      aria-label="Noble SEO home"
    >
      <span className={inverted ? "text-white" : "text-ink"}>Noble</span>{" "}
      <span className={inverted ? "text-white" : "text-forest"}>SEO</span>
    </Link>
  );
}
