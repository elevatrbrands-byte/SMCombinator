"use client";

import { useState } from "react";

const slides = [
  "Cold open hook",
  "Problem insight",
  "Audience & JTBD",
  "Solution demo",
  "Validation signals",
  "Business model",
  "Go-to-market",
  "Team",
  "Ask & next milestones",
];

export function PitchDeckBuilder() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  const toggleSlide = (slide: string) => {
    setCompleted((prev) => ({ ...prev, [slide]: !prev[slide] }));
  };

  const allDone = slides.every((slide) => completed[slide]);

  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="grid gap-8 rounded-3xl border border-ink/10 bg-white/85 p-6 shadow-lg md:grid-cols-[1.2fr_1fr]">
        <div>
          <h3 className="text-2xl font-semibold text-jet">Pitch Deck Builder</h3>
          <p className="mt-2 text-sm text-ink/70">
            Check each slide as you script it. Export to your favorite tool when you’re ready to polish.
          </p>
          <ul className="mt-6 space-y-3">
            {slides.map((slide) => (
              <li key={slide}>
                <button
                  type="button"
                  onClick={() => toggleSlide(slide)}
                  className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-base font-medium transition-all ${
                    completed[slide]
                      ? "border-success/50 bg-success/10 text-success"
                      : "border-ink/10 bg-white/90 text-ink/80 hover:border-electric/40"
                  }`}
                >
                  <span>{slide}</span>
                  <span className="text-sm">{completed[slide] ? "Ready" : "Add notes"}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-electric/15 via-white to-electric/10 p-6 shadow-inner">
          <div>
            <p className="text-sm uppercase tracking-widest text-electric/80">Export options</p>
            <ul className="mt-4 space-y-3 text-sm text-ink/70">
              <li>• Google Slides template</li>
              <li>• Canva deck with brand colors</li>
              <li>• Keynote outline download</li>
            </ul>
          </div>
          <button className="btn-pill w-full justify-center" disabled={!allDone}>
            {allDone ? "Generate export" : "Complete slides to export"}
          </button>
        </div>
      </div>
    </section>
  );
}
