import { cityPath, industryCityPath, industryPath, paths } from "@/lib/site";

export const svc = {
  local: { href: paths.localSeo, label: "Local SEO" },
  gbp: { href: paths.gbp, label: "Google Business Profile" },
  technical: { href: paths.technical, label: "Technical SEO" },
  pricing: { href: paths.pricing, label: "Pricing" },
  mapsGuide: { href: "/google-maps", label: "Google Maps, in plain English" },
  packGuide: { href: "/local-pack", label: "The Local Pack, in plain English" },
  hvac: { href: industryPath("hvac-seo"), label: "HVAC SEO" },
  dental: { href: industryPath("dental-seo"), label: "Dental SEO" },
  optometry: { href: industryPath("optometry-seo"), label: "Optometry SEO" },
  plumbing: { href: industryPath("plumbing-seo"), label: "Plumbing SEO" },
};

export const loc = {
  dallas: { href: cityPath("dallas"), label: "Dallas SEO" },
  fortWorth: { href: cityPath("fort-worth"), label: "Fort Worth SEO" },
  plano: { href: cityPath("plano"), label: "Plano SEO" },
  arlington: { href: cityPath("arlington"), label: "Arlington SEO" },
  hvacDallas: { href: industryCityPath("hvac-seo", "dallas"), label: "HVAC SEO in Dallas" },
  hvacFortWorth: {
    href: industryCityPath("hvac-seo", "fort-worth"),
    label: "HVAC SEO in Fort Worth",
  },
  dentalDallas: { href: industryCityPath("dental-seo", "dallas"), label: "Dental SEO in Dallas" },
  dentalFortWorth: {
    href: industryCityPath("dental-seo", "fort-worth"),
    label: "Dental SEO in Fort Worth",
  },
  optometryDallas: {
    href: industryCityPath("optometry-seo", "dallas"),
    label: "Optometry SEO in Dallas",
  },
  optometryFortWorth: {
    href: industryCityPath("optometry-seo", "fort-worth"),
    label: "Optometry SEO in Fort Worth",
  },
  plumbingDallas: {
    href: industryCityPath("plumbing-seo", "dallas"),
    label: "Plumbing SEO in Dallas",
  },
};
