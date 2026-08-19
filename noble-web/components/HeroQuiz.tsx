"use client";

import { FormEvent, useState } from "react";

const pains = [
  "Not enough leads",
  "Hard to find on Google",
  "Google Business Profile is a mess",
  "Marketing feels like a black box",
  "I’m just tired of guessing",
];

const fieldClass =
  "w-full rounded-xl border border-mist px-4 py-3 outline-none transition-colors focus:border-forest";

export function HeroQuiz() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function togglePain(value: string) {
    setSelected((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    );
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDone(true);
  }

  return (
    <div className="rounded-xl border border-mist bg-white p-6 shadow-card md:p-7">
      <p className="text-[0.72rem] font-medium tracking-[0.18em] text-forest uppercase">
        No big deal
      </p>
      <h2 className="font-serif mt-2 text-2xl tracking-tight">
        A 30 second look. You can walk away after.
      </h2>
      <p className="mt-2 text-sm text-stone">
        Tell us a little. We’ll look at how the business shows up. No pitch
        deck. No obligation.
      </p>

      {done ? (
        <p className="mt-6 rounded-xl bg-forest-mist px-4 py-4 text-sm text-forest-deep" role="status">
          Got it. This form is not connected yet. Email{" "}
          <a href="mailto:travis@nobleseo.co" className="underline">
            travis@nobleseo.co
          </a>{" "}
          and we’ll follow up with a plain English look, not a sales pitch.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-6">
          {step === 1 ? (
            <div className="grid gap-3">
              <label htmlFor="quiz-name" className="text-sm font-medium">
                First, what should we call you?
              </label>
              <input
                id="quiz-name"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="I’m Sarah, owner of…"
                required
                className={fieldClass}
              />
              <button
                type="button"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-forest px-5 py-3 text-sm font-medium text-white hover:bg-forest-deep"
                onClick={() => name.trim() && setStep(2)}
              >
                Next
              </button>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="grid gap-3">
              <label htmlFor="quiz-business" className="text-sm font-medium">
                What kind of business do you run?
              </label>
              <input
                id="quiz-business"
                name="business"
                value={business}
                onChange={(event) => setBusiness(event.target.value)}
                placeholder="Family dental office in Austin"
                required
                className={fieldClass}
              />
              <p className="text-xs text-stone">A simple description is perfect.</p>
              <div className="mt-2 flex gap-3">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-mist px-5 py-3 text-sm font-medium hover:border-ink/40"
                  onClick={() => setStep(1)}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-forest px-5 py-3 text-sm font-medium text-white hover:bg-forest-deep"
                  onClick={() => business.trim() && setStep(3)}
                >
                  Next
                </button>
              </div>
            </div>
          ) : null}

          {step === 3 ? (
            <div className="grid gap-3">
              <p className="text-sm font-medium">
                What feels hardest about getting found right now?
              </p>
              <div className="flex flex-wrap gap-2">
                {pains.map((pain) => {
                  const active = selected.includes(pain);
                  return (
                    <button
                      key={pain}
                      type="button"
                      onClick={() => togglePain(pain)}
                      className={`rounded-full border px-3 py-2 text-left text-sm ${
                        active
                          ? "border-forest bg-forest-mist text-forest-deep"
                          : "border-mist text-stone hover:border-ink/30"
                      }`}
                    >
                      {pain}
                    </button>
                  );
                })}
              </div>
              <div className="mt-2 flex gap-3">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-mist px-5 py-3 text-sm font-medium hover:border-ink/40"
                  onClick={() => setStep(2)}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-forest px-5 py-3 text-sm font-medium text-white hover:bg-forest-deep"
                  onClick={() => setStep(4)}
                >
                  Next
                </button>
              </div>
            </div>
          ) : null}

          {step === 4 ? (
            <div className="grid gap-3">
              <label htmlFor="quiz-email" className="text-sm font-medium">
                Where should we send the look?
              </label>
              <input
                id="quiz-email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
                className={fieldClass}
              />
              <div className="mt-2 flex gap-3">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-mist px-5 py-3 text-sm font-medium hover:border-ink/40"
                  onClick={() => setStep(3)}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-forest px-5 py-3 text-sm font-medium text-white hover:bg-forest-deep"
                >
                  Get a Search Assessment
                </button>
              </div>
            </div>
          ) : null}
        </form>
      )}

      <p className="mt-5 text-xs leading-relaxed text-stone">
        No big deal. This first look is just information for you. You can choose
        to do nothing with it.
      </p>
    </div>
  );
}
