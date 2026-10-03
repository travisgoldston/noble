import { mailtoHref, site, telHref } from "@/lib/site";

export function ContactChannels({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const linkClass =
    tone === "dark"
      ? "hover:text-white"
      : "text-forest hover:text-forest-deep";
  const phoneHref = telHref();

  return (
    <p className={className}>
      <a href={mailtoHref()} className={linkClass}>
        {site.email}
      </a>
      {phoneHref ? (
        <>
          <span aria-hidden="true"> · </span>
          <a href={phoneHref} className={linkClass}>
            {site.phoneCta} {site.phone}
          </a>
        </>
      ) : null}
    </p>
  );
}
