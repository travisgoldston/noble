"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/Button";
import { capabilities, locations, searchSurfaces } from "@/lib/content";

function Dropdown({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: ReactNode;
}) {
  return (
    <div className="group relative">
      <Link
        href={href}
        className="inline-flex items-center gap-1 py-3 transition-colors hover:text-ink"
      >
        {label}
        <span className="text-[0.65rem]" aria-hidden="true">
          ▾
        </span>
      </Link>
      <div className="invisible absolute left-0 top-full z-50 pt-1 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        {children}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-mist/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-site items-center gap-6 px-6 py-4">
        <BrandMark />
        <nav className="ml-auto hidden items-center gap-6 text-sm text-stone lg:flex" aria-label="Primary">
          <Dropdown label="Services" href="/services">
            <div className="grid w-[34rem] grid-cols-2 gap-6 rounded-xl border border-mist bg-white p-5 shadow-card">
              <div>
                <p className="px-2 text-[0.68rem] font-medium tracking-[0.16em] text-stone uppercase">
                  What we do
                </p>
                <Link
                  href="/services"
                  className="mt-2 block rounded-lg px-2 py-2 text-ink hover:bg-cream"
                >
                  All services
                </Link>
                {capabilities.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="block rounded-lg px-2 py-2 text-stone hover:bg-cream hover:text-ink"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <div>
                <p className="px-2 text-[0.68rem] font-medium tracking-[0.16em] text-stone uppercase">
                  How people find you
                </p>
                {searchSurfaces.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="mt-0 block rounded-lg px-2 py-2 text-stone hover:bg-cream hover:text-ink"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </Dropdown>
          <Dropdown label="Locations" href="/locations">
            <div className="min-w-56 rounded-xl border border-mist bg-white py-2 shadow-card">
              <Link
                href="/locations"
                className="block px-4 py-2 text-ink hover:bg-cream"
              >
                All DFW cities
              </Link>
              {locations.map((item) => (
                <Link
                  key={item.slug}
                  href={`/locations/${item.slug}`}
                  className="block px-4 py-2 text-stone hover:bg-cream hover:text-ink"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Dropdown>
          <Link href="/work" className="transition-colors hover:text-ink">
            Work
          </Link>
          <Link href="/about" className="transition-colors hover:text-ink">
            About
          </Link>
          <Link href="/resources" className="transition-colors hover:text-ink">
            Resources
          </Link>
        </nav>
        <div className="ml-auto hidden lg:block lg:ml-0">
          <Button href="/contact">Get a Search Assessment</Button>
        </div>
        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-mist lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-px w-4 bg-ink" />
            <span className="block h-px w-4 bg-ink" />
            <span className="block h-px w-4 bg-ink" />
          </span>
        </button>
      </div>
      {open ? (
        <nav className="max-h-[80vh] overflow-y-auto border-t border-mist px-6 py-4 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-3 text-sm">
            <p className="text-xs font-medium tracking-[0.14em] text-stone uppercase">Services</p>
            <Link href="/services" className="text-ink" onClick={() => setOpen(false)}>
              All services
            </Link>
            {capabilities.map((item) => (
              <Link key={item.id} href={item.href} className="text-ink" onClick={() => setOpen(false)}>
                {item.title}
              </Link>
            ))}
            <p className="mt-3 text-xs font-medium tracking-[0.14em] text-stone uppercase">
              How people find you
            </p>
            {searchSurfaces.map((item) => (
              <Link key={item.href} href={item.href} className="text-ink" onClick={() => setOpen(false)}>
                {item.title}
              </Link>
            ))}
            <p className="mt-3 text-xs font-medium tracking-[0.14em] text-stone uppercase">Locations</p>
            <Link href="/locations" className="text-ink" onClick={() => setOpen(false)}>
              All DFW cities
            </Link>
            {locations.map((item) => (
              <Link
                key={item.slug}
                href={`/locations/${item.slug}`}
                className="text-ink"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/work" className="mt-3 text-ink" onClick={() => setOpen(false)}>
              Work
            </Link>
            <Link href="/about" className="text-ink" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/resources" className="text-ink" onClick={() => setOpen(false)}>
              Resources
            </Link>
            <Button href="/contact">Get a Search Assessment</Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
