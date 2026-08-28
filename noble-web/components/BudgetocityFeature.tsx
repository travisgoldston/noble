import { CaseStudyCard } from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/case-studies";

export function BudgetocityFeature() {
  const study = caseStudies[0];
  if (!study) return null;
  return <CaseStudyCard study={study} />;
}
