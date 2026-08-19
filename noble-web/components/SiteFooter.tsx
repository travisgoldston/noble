import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { SocialIcons } from "@/components/SocialIcons";
import { capabilities, locations, searchSurfaces } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white/75">
      <div className="mx-auto grid max-w-site gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandMark inverted />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            A specialist search growth practice for businesses that want to be
            found, without the layers of a large agency.
          </p>
          <SocialIcons />
        </div>
        <div className="grid gap-3 text-sm">
          <p className="text-white">Services</p>
          <Link href="/services" className="hover:text-white">
            All services
          </Link>
          {capabilities.map((item) => (
            <Link key={item.id} href={item.href} className="hover:text-white">
              {item.title}
            </Link>
          ))}
        </div>
        <div className="grid gap-3 text-sm">
          <p className="text-white">How people find you</p>
          {searchSurfaces.map((item) => (
            <Link key={item.slug} href={item.href} className="hover:text-white">
              {item.title}
            </Link>
          ))}
        </div>
        <div className="grid gap-3 text-sm">
          <p className="text-white">Locations</p>
          <Link href="/locations" className="hover:text-white">
            DFW cities
          </Link>
          {locations.slice(0, 6).map((item) => (
            <Link
              key={item.slug}
              href={`/locations/${item.slug}`}
              className="hover:text-white"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/about" className="mt-3 hover:text-white">
            About
          </Link>
          <Link href="/work" className="hover:text-white">
            Work
          </Link>
          <Link href="/contact" className="hover:text-white">
            Get a Search Assessment
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-site flex-col gap-2 px-6 py-5 text-xs text-white/45 sm:flex-row sm:justify-between">
          <p>© 2026 Noble. All rights reserved.</p>
          <p>nobleseo.co</p>
        </div>
      </div>
    </footer>
  );
}
