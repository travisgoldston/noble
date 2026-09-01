"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { trackAuditEvent, trackLead } from "@/lib/track";
import { cta, gamePlan, gbpOptions, paths } from "@/lib/site";

const fieldClass =
  "w-full min-h-12 rounded-xl border border-mist px-4 py-3 outline-none transition-colors focus:border-forest";

const fieldDisabledClass =
  "w-full min-h-12 rounded-xl border border-mist bg-cream px-4 py-3 text-stone outline-none";

const services = [
  "HVAC",
  "Plumbing",
  "Roofing",
  "Electrical",
  "Dental",
  "Optometry",
  "Orthodontics",
  "Med spa",
  "Landscaping",
  "Foundation repair",
  "Remodeling",
  "Garage doors",
  "Concrete",
  "Fencing",
  "Other",
];

type Props = {
  compact?: boolean;
};

export function AuditForm({ compact = false }: Props) {
  const prefix = compact ? "compact-" : "";
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const [noWebsite, setNoWebsite] = useState(false);
  const [website, setWebsite] = useState("");
  const started = useRef(false);
  const websiteTracked = useRef(false);
  const gbpTracked = useRef(false);

  useEffect(() => {
    trackAuditEvent("audit_form_viewed");
  }, []);

  function markStarted() {
    if (started.current) return;
    started.current = true;
    trackAuditEvent("audit_form_started");
  }

  function onNoWebsiteChange(checked: boolean) {
    markStarted();
    setNoWebsite(checked);
    if (checked) {
      setWebsite("");
      if (!websiteTracked.current) {
        websiteTracked.current = true;
        trackAuditEvent("audit_website_not_present");
      }
    }
  }

  function onGbpChange(value: string) {
    markStarted();
    if (value === "none" && !gbpTracked.current) {
      gbpTracked.current = true;
      trackAuditEvent("audit_gbp_not_present");
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting" || status === "success") return;

    const form = event.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      business: String(fd.get("business") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      website: noWebsite ? "" : String(fd.get("website") || website || "").trim(),
      noWebsite: noWebsite ? "true" : "",
      gbpStatus: String(fd.get("gbpStatus") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      city: String(fd.get("city") || "").trim(),
      service: String(fd.get("service") || "").trim(),
      improve: String(fd.get("improve") || "").trim(),
    };

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;
      if (!response.ok) {
        throw new Error(result?.error || "Request failed");
      }
      trackLead();
      trackAuditEvent("audit_form_submitted");
      if (compact) {
        window.location.href = "/contact/thanks";
        return;
      }
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error && error.message && error.message !== "Request failed"
          ? error.message
          : "The form did not send. Email hello@nobleseo.co and we will follow up.",
      );
    }
  }

  if (!compact && status === "success") {
    return (
      <div className="rounded-xl border border-mist bg-white p-6 md:p-8">
        <p className="text-[0.72rem] font-medium tracking-[0.22em] text-forest uppercase">
          Request received
        </p>
        <h3 className="font-serif mt-3 text-3xl tracking-tight">
          Your game plan request is in.
        </h3>
        <p className="mt-4 max-w-xl text-stone">
          I will review your business and local market, then email you a written
          game plan. No calendar invite. No required sales call.
        </p>
        <div className="mt-8">
          <Button href={paths.pricing}>Explore NOBLE Pricing →</Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      onInput={markStarted}
      className={
        compact
          ? "grid gap-3"
          : "grid gap-5 rounded-xl border border-mist bg-white p-6 md:p-8"
      }
    >
      <div>
        <p className="font-medium text-ink">{gamePlan.introTitle}</p>
        <p className={`${compact ? "mt-1" : "mt-2"} text-sm leading-relaxed text-stone`}>
          {gamePlan.introBody}
        </p>
        <p className={`${compact ? "mt-1" : "mt-2"} text-sm text-stone`}>{gamePlan.introMeta}</p>
      </div>
      {compact ? null : (
        <p className="text-sm text-stone">
          Required fields are marked with{" "}
          <span className="font-medium text-ink">*</span>.
        </p>
      )}
      <div className="grid gap-3 sm:grid-cols-2">
        <Field
          id={`${prefix}name`}
          name="name"
          label="Name"
          required
          autoComplete="name"
        />
        <Field
          id={`${prefix}business`}
          name="business"
          label="Business name"
          required
          autoComplete="organization"
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field
          id={`${prefix}email`}
          name="email"
          label="Email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
        />
        <div className="grid gap-2">
          <label htmlFor={`${prefix}website`} className="text-sm font-medium">
            Website{" "}
            <span className="font-normal text-stone">
              {noWebsite ? "(not needed)" : "(optional)"}
            </span>
          </label>
          <input
            id={`${prefix}website`}
            name="website"
            type="text"
            inputMode="url"
            autoComplete="url"
            value={website}
            disabled={noWebsite}
            placeholder={noWebsite ? "Not needed" : "https://"}
            aria-required={false}
            aria-disabled={noWebsite || undefined}
            onChange={(event) => {
              markStarted();
              setWebsite(event.target.value);
            }}
            className={noWebsite ? fieldDisabledClass : fieldClass}
          />
        </div>
      </div>
      <label className="flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-mist bg-cream px-4 py-3">
        <input
          type="checkbox"
          name="noWebsite"
          value="true"
          checked={noWebsite}
          onChange={(event) => onNoWebsiteChange(event.target.checked)}
          className="h-5 w-5 shrink-0 accent-forest"
        />
        <span className="text-sm font-medium">I don&apos;t have a website yet</span>
      </label>
      <fieldset className={compact ? "grid gap-2" : "grid gap-3"}>
        <legend className="text-sm font-medium">
          Google Business Profile <span className="text-forest">*</span>
        </legend>
        {compact ? (
          <p className="text-xs text-stone">
            The Google listing with hours, reviews, and a map pin.
          </p>
        ) : (
          <p className="text-sm text-stone">
            The Google listing with your hours, reviews, and map pin. If you&apos;re
            not sure, that&apos;s fine.
          </p>
        )}
        <div className={`grid gap-2 ${compact ? "sm:grid-cols-3" : ""}`}>
          {gbpOptions.map((option) => (
            <label
              key={option.value}
              className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border border-mist px-3 py-2.5"
            >
              <input
                type="radio"
                name="gbpStatus"
                value={option.value}
                required
                onChange={(event) => onGbpChange(event.target.value)}
                className="h-5 w-5 shrink-0 accent-forest"
              />
              <span className="text-sm font-medium">{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      {compact ? (
        <div className="grid gap-3 sm:grid-cols-2">
          <Field id={`${prefix}city`} name="city" label="City" placeholder="Fort Worth" />
          <div className="grid gap-2">
            <label htmlFor={`${prefix}service`} className="text-sm font-medium">
              Primary service
            </label>
            <select
              id={`${prefix}service`}
              name="service"
              className={fieldClass}
              defaultValue=""
            >
              <option value="" disabled>
                Select one
              </option>
              {services.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id={`${prefix}phone`}
              name="phone"
              label="Phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
            />
            <Field
              id={`${prefix}city`}
              name="city"
              label="City"
              placeholder="Fort Worth"
              autoComplete="address-level2"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor={`${prefix}improve`} className="text-sm font-medium">
              What would you like to improve?{" "}
              <span className="font-normal text-stone">(optional)</span>
            </label>
            <textarea
              id={`${prefix}improve`}
              name="improve"
              rows={3}
              className={`min-h-24 resize-y ${fieldClass}`}
            />
          </div>
        </>
      )}
      {compact ? (
        <p className="text-sm text-stone">
          Written game plan by email. No calendar invite. No required sales
          call.
        </p>
      ) : (
        <WhatHappensNext />
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-forest-deep disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : `${cta.form} →`}
      </button>
      {message ? (
        <p className="rounded-xl bg-forest-mist px-4 py-3 text-sm text-forest-deep" role="alert">
          {message}
        </p>
      ) : null}
    </form>
  );
}

function WhatHappensNext() {
  return (
    <div>
      <p className="text-sm font-medium">What happens next</p>
      <ol className="mt-3 grid gap-2">
        {gamePlan.next.map((item, index) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-stone">
            <span className="font-serif text-forest">{index + 1}.</span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required,
  autoComplete,
  placeholder,
  inputMode,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  inputMode?: "email" | "tel" | "url" | "text";
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {required ? <span className="text-forest"> *</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        inputMode={inputMode}
        aria-required={required || undefined}
        className={fieldClass}
      />
    </div>
  );
}
