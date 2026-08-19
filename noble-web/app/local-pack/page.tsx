import type { Metadata } from "next";
import { GuidePage } from "@/components/GuidePage";
import { guides } from "@/lib/guides";

const guide = guides.find((item) => item.slug === "local-pack")!;

export const metadata: Metadata = {
  title: guide.title,
  description: guide.description,
};

export default function Page() {
  return <GuidePage guide={guide} />;
}
