"use client";

import { useMemo, useState } from "react";

const chapters = [
  { name: "Skyline High", city: "Dallas", status: "Active", x: 48, y: 36 },
  { name: "Plano West", city: "Plano", status: "Active", x: 72, y: 20 },
  { name: "Allen STEAM", city: "Allen", status: "Launching", x: 78, y: 16 },
  { name: "Irving Early College", city: "Irving", status: "Active", x: 30, y: 28 },
  { name: "Frisco Founders", city: "Frisco", status: "Request", x: 84, y: 12 },
];

export function DFWMap() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    return chapters.filter((chapter) =>
      `${chapter.name} ${chapter.city}`.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-jet">DFW Chapter Map</h3>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search school or city"
              className="rounded-full border border-ink/20 bg-white/90 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-electric/10 via-offwhite to-electric/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(78,149,255,0.12),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(55,56,60,0.08),transparent_45%)]" />
            {filtered.map((chapter) => (
              <div
                key={chapter.name}
                className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                style={{ left: `${chapter.x}%`, top: `${chapter.y}%` }}
              >
                <span className="mb-2 rounded-full border border-electric/40 bg-white px-3 py-1 text-xs font-semibold text-jet shadow-lg shadow-electric/30">
                  {chapter.name}
                </span>
                <span className="h-3 w-3 rounded-full bg-electric shadow-glow transition-transform group-hover:scale-125" />
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center text-sm text-ink/60">
                No chapters found. Drop a pin by starting one.
              </div>
            )}
          </div>
        </div>
        <div className="space-y-4 rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-md">
          <h3 className="text-xl font-semibold text-jet">Request a chapter</h3>
          <p className="text-sm text-ink/70">
            Spot a gap? Add your school to the list and we’ll reach out with next steps.
          </p>
          <button className="btn-pill w-full justify-center">Request Chapter</button>
          <ul className="space-y-3 text-sm text-ink/70">
            {chapters.map((chapter) => (
              <li key={chapter.name} className="flex items-center justify-between rounded-2xl bg-white/90 px-4 py-3 shadow">
                <span>
                  <span className="font-semibold text-jet">{chapter.name}</span>
                  <span className="text-ink/50"> · {chapter.city}</span>
                </span>
                <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                  {chapter.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
