export function trackLead() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "generate_lead", lead_type: "seo_audit" });
  window.gtag?.("event", "generate_lead", { method: "seo_audit" });
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}
