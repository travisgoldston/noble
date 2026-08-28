import Link from "next/link";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-stone">
      <ol className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <li key={`${item.name}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {item.href && index < items.length - 1 ? (
              <Link href={item.href} className="hover:text-ink">
                {item.name}
              </Link>
            ) : (
              <span className={index === items.length - 1 ? "text-ink" : undefined}>
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
