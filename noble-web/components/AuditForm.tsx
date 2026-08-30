"use client";

import { FormEvent, useState } from "react";
import { trackLead } from "@/lib/track";
import { cta } from "@/lib/site";

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
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
      if (!response.ok) throw new Error("Request failed");
      trackLead();
      window.location.href = "/contact/thanks";
    } catch {
      setStatus("error");
      setMessage(
        "The form did not send. Email hello@nobleseo.co and we will follow up."
      );
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className={
        compact
          ? "grid gap-4"
          : "grid gap-5 rounded-xl border border-mist bg-white p-6 md:p-8"
      }
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" required autoComplete="name" />
        <Field id="business" label="Business" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="website"
          label="Website"
          placeholder="https://"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      {compact ? null : (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="phone" label="Phone" type="tel" autoComplete="tel" />
            <Field id="city" label="City" placeholder="Dallas" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="service" className="text-sm font-medium">
              Primary service
            </label>
            <select id="service" name="service" className={fieldClass} defaultValue="">
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
          <div className="grid gap-2">
            <label htmlFor="improve" className="text-sm font-medium">
              What would you most like to improve?{" "}
              <span className="font-normal text-stone">(optional)</span>
            </label>
            <textarea
              id="improve"
              name="improve"
              rows={4}
              className={`resize-y ${fieldClass}`}
            />
          </div>
        </>
      )}
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
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-forest-deep disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : cta.form}
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
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={fieldClass}
      />
    </div>
  );
}
