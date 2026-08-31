"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/Button";
import { trackLead } from "@/lib/track";
import { cta, paths } from "@/lib/site";

const fieldClass =
  "w-full rounded-xl border border-mist px-4 py-3 outline-none transition-colors focus:border-forest";

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
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting" || status === "success") return;

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;
      if (!response.ok) {
        throw new Error(payload?.error || "Request failed");
      }
      trackLead();
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
          Your audit request is in.
        </h3>
        <p className="mt-4 max-w-xl text-stone">
          We will review your business and send the findings to the email you
          provided.
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
      noValidate={false}
      className={
        compact
          ? "grid gap-4"
          : "grid gap-5 rounded-xl border border-mist bg-white p-6 md:p-8"
      }
    >
      {compact ? null : (
        <p className="text-sm text-stone">
          Required fields are marked with{" "}
          <span className="font-medium text-ink">*</span>.
        </p>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" required autoComplete="name" />
        <Field id="business" label="Business name" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="website"
          label="Website"
          placeholder="https://"
          required={!compact}
          autoComplete="url"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      {compact ? (
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="city" label="City" placeholder="Dallas" />
          <div className="grid gap-2">
            <label htmlFor="service-compact" className="text-sm font-medium">
              Primary service
            </label>
            <select
              id="service-compact"
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
          <Field id="phone" label="Phone" type="tel" autoComplete="tel" />
          <div className="grid gap-2">
            <label htmlFor="improve" className="text-sm font-medium">
              What would you like to improve?{" "}
              <span className="font-normal text-stone">(optional)</span>
            </label>
            <textarea
              id="improve"
              name="improve"
              rows={3}
              className={`resize-y ${fieldClass}`}
            />
          </div>
        </>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-forest-deep disabled:opacity-70"
      >
        {status === "submitting"
          ? "Sending…"
          : compact
            ? cta.form
            : "Get My Free Audit →"}
      </button>
      {message ? (
        <p className="rounded-xl bg-forest-mist px-4 py-3 text-sm text-forest-deep" role="alert">
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {required ? <span className="text-forest"> *</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-required={required || undefined}
        className={fieldClass}
      />
    </div>
  );
}
