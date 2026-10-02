import Image from "next/image";
import Link from "next/link";

export function BrandMark({
  inverted = false,
  compact = false,
}: {
  inverted?: boolean;
  compact?: boolean;
}) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="NOBLE SEO home">
      <Image
        src="/noble-seo-header-logo.png"
        alt="NOBLE SEO"
        width={446}
        height={118}
        priority
        className={`w-auto ${compact ? "h-[30px] lg:h-9" : "h-[30px] lg:h-11"} ${
          inverted ? "brightness-0 invert" : ""
        }`}
      />
    </Link>
  );
}
