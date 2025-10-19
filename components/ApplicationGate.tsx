"use client";

import { useMemo, useState } from "react";

type Answer = "yes" | "no";

const questions = [
  {
    prompt: "Are you a current DFW high-school student or educator?",
    eligible: "yes",
  },
  {
    prompt: "Can you commit ~90 minutes per week to chapter sessions?",
    eligible: "yes",
  },
  {
    prompt: "Are you ready to work on a venture idea (even if you don’t have one yet)?",
    eligible: "yes",
  },
];

export function ApplicationGate() {
  const [answers, setAnswers] = useState<Record<number, Answer | null>>({});

  const score = useMemo(() => {
    return questions.reduce((acc, _q, index) => {
      const answer = answers[index];
      if (answer === "yes") return acc + 1;
      return acc;
    }, 0);
  }, [answers]);

  const ready = score === questions.length;

  return (
    <section className="mx-auto max-w-4xl px-4">
      <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-xl">
        <h3 className="text-2xl font-semibold text-jet">Application Gate</h3>
        <p className="mt-2 text-sm text-ink/70">
          Quick check to tailor your next steps. Answer honestly—there are no wrong answers.
        </p>
        <div className="mt-6 space-y-5">
          {questions.map((question, index) => {
            const answer = answers[index];
            return (
              <div key={question.prompt} className="rounded-2xl border border-ink/10 bg-white/90 p-4">
                <p className="text-base font-medium text-jet">{question.prompt}</p>
                <div className="mt-3 flex gap-3">
                  {(["yes", "no"] as Answer[]).map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setAnswers((prev) => ({ ...prev, [index]: option }))}
                      className={`btn-pill ${
                        answer === option
                          ? option === question.eligible
                            ? "bg-success text-white"
                            : "bg-ink text-white"
                          : "btn-secondary"
                      }`}
                    >
                      {option === "yes" ? "Yes" : "No"}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 rounded-2xl bg-gradient-to-r from-electric/20 via-white to-success/10 p-6">
          <p className="text-sm uppercase tracking-widest text-electric/80">Next steps</p>
          {ready ? (
            <div className="mt-3 space-y-2 text-base text-ink/80">
              <p>Looks like you’re ready. Choose your path below.</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="#student-apply" className="btn-pill sm:flex-1 justify-center">
                  Student application
                </a>
                <a href="#chapter-apply" className="btn-pill btn-secondary sm:flex-1 justify-center">
                  Start a chapter
                </a>
              </div>
            </div>
          ) : (
            <p className="mt-3 text-base text-ink/70">
              Finish the quiz to unlock tailored actions. Need flexibility? Email <a href="mailto:hello@dpitch.org">hello@dpitch.org</a> and we’ll help.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
