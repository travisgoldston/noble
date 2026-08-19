import Link from "next/link";

export function RelatedLinks({
  title,
  items,
}: {
  title: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div className="mt-12 border-t border-mist pt-10">
      <p className="text-sm font-medium">{title}</p>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-forest hover:text-forest-deep"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
