import { helpedClients } from "@/lib/clients";

function LogoSet({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-12 pr-12 md:gap-16 md:pr-16"
      aria-hidden={ariaHidden || undefined}
    >
      {helpedClients.map((client) => (
        <li key={client.name} className="shrink-0">
          <a
            href={client.href}
            target="_blank"
            rel="noopener noreferrer"
            className={
              client.onDark
                ? "flex items-center rounded-lg bg-ink px-4 py-2.5"
                : "flex items-center"
            }
            tabIndex={ariaHidden ? -1 : undefined}
          >
            <img
              src={client.src}
              alt={ariaHidden ? "" : client.name}
              width={client.width}
              height={client.height}
              className={`${client.className} object-contain`}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function HelpedLogos() {
  return (
    <section className="border-b border-mist bg-white py-10 md:py-12" aria-label="Who we've helped">
      <div className="mx-auto max-w-site px-6">
        <p className="text-center text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
          Who we&apos;ve helped
        </p>
      </div>
      <div className="logo-marquee mt-7">
        <div className="logo-marquee-track">
          <LogoSet />
          <LogoSet ariaHidden />
        </div>
      </div>
    </section>
  );
}
