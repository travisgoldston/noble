import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/ArticlePage";
import { articles, getArticle } from "@/lib/articles";
import { articlePath } from "@/lib/articles/helpers";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Resource" };
  const url = articlePath(article.slug);
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${article.title} | NOBLE SEO`,
      description: article.description,
      url,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
  };
}

export default async function ResourceArticleRoute({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return <ArticlePage article={article} />;
}
