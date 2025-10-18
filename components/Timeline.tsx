"use client";

import { useState } from "react";

const events = [
  { phase: "Fall 2025", detail: "Chapter onboarding, orientation week" },
  { phase: "Oct–Dec 2025", detail: "Validation sprints, first pitch check" },
  { phase: "Jan–Feb 2026", detail: "Build/MVP sprint, mentor office hours" },
  { phase: "March 2026", detail: "Citywide qualifiers" },
  { phase: "April 2026", detail: "Finals prep workshops" },
  { phase: "May 2026", detail: "D Pitch Finals (live on stage)" },
];

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative">
      <div className="sticky top-28 mx-auto max-w-6xl rounded-3xl border border-ink/10 bg-white/85 px-6 py-12 shadow-xl shadow-ink/5 backdrop-blur">
        <div className="grid gap-8 md:grid-cols-[260px_1fr]">
          <div className="space-y-2">
            <h2 className="section-title">Your year at a glance</h2>
            <p className="text-sm text-ink/70">Scroll to explore each phase. Hover to preview what’s coming.</p>
          </div>
          <div className="space-y-6">
            {events.map((event, index) => (
              <button
                key={event.phase}
                type="button"
                onMouseEnter={() => setActiveIndex(index)}
                className={`flex w-full items-start gap-3 rounded-2xl border px-4 py-4 text-left transition-all duration-200 ${
                  activeIndex === index
                    ? "border-electric/70 bg-electric/5 shadow-glow"
                    : "border-transparent bg-white/80 hover:border-electric/40"
                }`}
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-electric" aria-hidden />
                <div>
                  <p className="text-base font-semibold text-jet">{event.phase}</p>
                  <p className="text-sm text-ink/70">{event.detail}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10 rounded-3xl border border-ink/10 bg-gradient-to-br from-white to-offwhite p-6 shadow-inner">
          <p className="text-sm uppercase tracking-wide text-electric/80">Live timeline</p>
          <p className="mt-3 text-2xl font-semibold text-jet">{events[activeIndex].phase}</p>
          <p className="mt-2 text-base text-ink/70">{events[activeIndex].detail}</p>
        </div>
      </div>
    </section>
  );
}
