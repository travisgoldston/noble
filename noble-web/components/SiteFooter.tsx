import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { SocialIcons } from "@/components/SocialIcons";
import { capabilities, locations, searchSurfaces } from "@/lib/content";
import { cityPath, cta, paths } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white/75">
      <div className="mx-auto grid max-w-site gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandMark inverted />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            Founder-led local SEO for Dallas–Fort Worth businesses. SEO built
            on proof.
          </p>
          <SocialIcons />
        </div>
        <div className="grid gap-3 text-sm">
          <p className="text-white">Services</p>
          <Link href={paths.services} className="hover:text-white">
            All services
          </Link>
          {capabilities.map((item) => (
            <Link key={item.id} href={item.href} className="hover:text-white">
              {item.title}
            </Link>
          ))}
          <Link href={paths.contact} className="mt-3 hover:text-white">
            {cta.primary}
          </Link>
        </div>
        <div className="grid gap-3 text-sm">
          <p className="text-white">Proof and company</p>
          <Link href={paths.caseStudies} className="hover:text-white">
            Case studies
          </Link>
          <Link href={paths.pricing} className="hover:text-white">
            Pricing
          </Link>
          <Link href={paths.about} className="hover:text-white">
            About
          </Link>
          <Link href={paths.contact} className="hover:text-white">
            Contact
          </Link>
          <Link href={paths.resources} className="hover:text-white">
            Resources
          </Link>
          <p className="mt-3 text-white">How people find you</p>
          {searchSurfaces.map((item) => (
            <Link key={item.slug} href={item.href} className="hover:text-white">
              {item.title}
            </Link>
          ))}
        </div>
        <div className="grid gap-3 text-sm">
          <p className="text-white">Areas</p>
          <Link href={paths.areas} className="hover:text-white">
            DFW areas
          </Link>
          {locations.slice(0, 6).map((item) => (
            <Link key={item.slug} href={cityPath(item.slug)} className="hover:text-white">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-site flex-col gap-2 px-6 py-5 text-xs text-white/45 sm:flex-row sm:justify-between">
          <p>© 2026 Noble SEO. All rights reserved.</p>
          <p>nobleseo.co · hello@nobleseo.co</p>
        </div>
      </div>
    </footer>
  );
}
