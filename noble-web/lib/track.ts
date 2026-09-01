export function trackLead() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "generate_lead", lead_type: "seo_audit" });
  window.gtag?.("event", "generate_lead", { method: "seo_audit" });
}

export type AuditTrackEvent =
  | "audit_form_viewed"
  | "audit_form_started"
  | "audit_website_not_present"
  | "audit_gbp_not_present"
  | "audit_form_submitted";

export function trackAuditEvent(event: AuditTrackEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event });
  window.gtag?.("event", event);
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}
