"use client";

import { FormEvent, useState } from "react";

export function AssessmentForm() {
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(
      "Thank you. This form is not connected yet. Email hello@nobleseo.co and I will follow up."
    );
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-5 rounded-xl border border-mist bg-white p-6 md:p-8"
    >
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="rounded-xl border border-mist px-4 py-3 outline-none transition-colors focus:border-forest"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="business" className="text-sm font-medium">
          Business
        </label>
        <input
          id="business"
          name="business"
          required
          className="rounded-xl border border-mist px-4 py-3 outline-none transition-colors focus:border-forest"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="website" className="text-sm font-medium">
          Website
        </label>
        <input
          id="website"
          name="website"
          type="url"
          placeholder="https://"
          className="rounded-xl border border-mist px-4 py-3 outline-none transition-colors focus:border-forest"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="rounded-xl border border-mist px-4 py-3 outline-none transition-colors focus:border-forest"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="challenge" className="text-sm font-medium">
          What should we look at first?
        </label>
        <textarea
          id="challenge"
          name="challenge"
          required
          rows={5}
          className="resize-y rounded-xl border border-mist px-4 py-3 outline-none transition-colors focus:border-forest"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-forest-deep"
      >
        Get a Search Assessment
      </button>
      {status ? (
        <p className="rounded-xl bg-forest-mist px-4 py-3 text-sm text-forest-deep" role="status">
          {status}
        </p>
      ) : null}
    </form>
  );
}
