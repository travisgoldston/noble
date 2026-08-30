import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryCityPage } from "@/components/IndustryCityPage";
import {
  getIndustry,
  getIndustryCity,
  industryCities,
  industryCityHref,
} from "@/lib/industries";

type Props = { params: Promise<{ slug: string; city: string }> };

export function generateStaticParams() {
  return industryCities.map((page) => ({
    slug: page.industrySlug,
    city: page.citySlug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, city } = await params;
  const page = getIndustryCity(slug, city);
  if (!page) return { title: "Industry" };
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: industryCityHref(page) },
    openGraph: {
      title: `${page.title} | NOBLE SEO`,
      description: page.description,
      url: industryCityHref(page),
    },
  };
}

export default async function IndustryCityRoute({ params }: Props) {
  const { slug, city } = await params;
  if (!getIndustry(slug)) notFound();
  const page = getIndustryCity(slug, city);
  if (!page) notFound();
  return <IndustryCityPage page={page} />;
}
