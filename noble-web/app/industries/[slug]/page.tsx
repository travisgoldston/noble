import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryGroupPage } from "@/components/IndustryGroupPage";
import { IndustryPage } from "@/components/IndustryPage";
import { getGroup, getIndustry, industries, industryGroups } from "@/lib/industries";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [
    ...industryGroups.map((group) => ({ slug: group.slug })),
    ...industries.map((industry) => ({ slug: industry.slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const group = getGroup(slug);
  if (group) {
    return {
      title: group.title,
      description: group.description,
      alternates: { canonical: `/industries/${group.slug}` },
      openGraph: {
        title: `${group.title} | NOBLE SEO`,
        description: group.description,
        url: `/industries/${group.slug}`,
      },
    };
  }
  const industry = getIndustry(slug);
  if (!industry) return { title: "Industry" };
  return {
    title: industry.title,
    description: industry.description,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: `${industry.title} | NOBLE SEO`,
      description: industry.description,
      url: `/industries/${industry.slug}`,
    },
  };
}

export default async function IndustryOrGroupPage({ params }: Props) {
  const { slug } = await params;
  const group = getGroup(slug);
  if (group) return <IndustryGroupPage group={group} />;
  const industry = getIndustry(slug);
  if (!industry) notFound();
  return <IndustryPage industry={industry} />;
}
