import Image from "next/image";
import Link from "next/link";

export function BrandMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="NOBLE SEO home">
      <Image
        src="/noble-seo-header-logo.png"
        alt="NOBLE SEO"
        width={446}
        height={118}
        priority
        className={`h-[30px] w-auto lg:h-10 ${inverted ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}
