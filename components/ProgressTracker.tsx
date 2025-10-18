"use client";

import { useState } from "react";

const metrics = [
  { key: "interviews", label: "Customer interviews" },
  { key: "lois", label: "LOIs" },
  { key: "waitlist", label: "Waitlist signups" },
  { key: "prototypes", label: "Prototypes shipped" },
  { key: "revenue", label: "Revenue ($)" },
];

type TrackerState = Record<string, number>;

export function ProgressTracker() {
  const [state, setState] = useState<TrackerState>(() =>
    metrics.reduce((acc, metric) => ({ ...acc, [metric.key]: 0 }), {})
  );
  const [streak, setStreak] = useState(0);

  const updateMetric = (key: string, delta: number) => {
    setState((prev) => {
      const nextValue = Math.max(0, (prev[key] ?? 0) + delta);
      return { ...prev, [key]: nextValue };
    });
    setStreak((prev) => prev + (delta > 0 ? 1 : 0));
  };

  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="rounded-3xl border border-ink/10 bg-white/85 p-6 shadow-xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-jet">Progress Tracker</h3>
            <p className="text-sm text-ink/70">
              Log every win. Keep the streak alive. All data stays on your device.
            </p>
          </div>
          <div className="rounded-full bg-success/10 px-4 py-2 text-sm font-semibold text-success">
            Streak: {streak} updates
          </div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.key} className="rounded-2xl bg-white/90 p-5 shadow">
              <p className="text-sm uppercase tracking-wider text-ink/50">{metric.label}</p>
              <p className="mt-2 text-3xl font-bold text-jet">{state[metric.key]}</p>
              <div className="mt-4 flex gap-3">
                <button
                  type="button"
                  className="btn-pill btn-secondary"
                  onClick={() => updateMetric(metric.key, 1)}
                >
                  +1
                </button>
                <button
                  type="button"
                  className="btn-pill btn-secondary"
                  onClick={() => updateMetric(metric.key, -1)}
                >
                  -1
                </button>
              </div>
            </div>
          ))}
          <div className="rounded-2xl bg-gradient-to-br from-electric/10 via-white to-electric/5 p-5 shadow">
            <p className="text-sm uppercase tracking-wider text-electric/80">Share your wins</p>
            <p className="mt-3 text-base text-ink/70">
              Screenshot and drop in your chapter chat. Accountability drives momentum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
