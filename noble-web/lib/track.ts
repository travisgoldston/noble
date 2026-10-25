declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

function gtagFn() {
  return typeof window !== "undefined" ? window.gtag : undefined;
}

export function trackLead() {
  const gtag = gtagFn();
  if (typeof gtag === "function") {
    gtag("event", "generate_lead");
  }
}

export function trackPhoneClick() {
  const gtag = gtagFn();
  if (typeof gtag === "function") {
    gtag("event", "phone_click");
  }
}

export type AuditTrackEvent =
  | "audit_form_viewed"
  | "audit_form_started"
  | "audit_website_not_present"
  | "audit_gbp_not_present"
  | "audit_form_submitted";

export function trackAuditEvent(event: AuditTrackEvent) {
  const gtag = gtagFn();
  if (typeof gtag === "function") {
    gtag("event", event);
  }
}
