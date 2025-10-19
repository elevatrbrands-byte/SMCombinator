"use client";

import { useMemo, useState } from "react";

type Mentor = {
  name: string;
  focus: "Product" | "Growth" | "Finance" | "Hardware" | "Legal";
  role: string;
  company: string;
};

const mentors: Mentor[] = [
  { name: "Avery Lin", focus: "Product", role: "Director of Product", company: "Northstar" },
  { name: "Chris Howard", focus: "Growth", role: "Growth Lead", company: "Fleetly" },
  { name: "Grace Patel", focus: "Finance", role: "FP&A Manager", company: "Brightline" },
  { name: "Luis Moreno", focus: "Hardware", role: "CTO", company: "Forge Robotics" },
  { name: "Emily Rios", focus: "Legal", role: "Startup Counsel", company: "Rios Law" },
  { name: "Noah Kim", focus: "Product", role: "Product Mentor", company: "Beta Collective" },
];

const filters: Mentor["focus"][] = ["Product", "Growth", "Finance", "Hardware", "Legal"];

export function MentorDirectory() {
  const [focus, setFocus] = useState<Mentor["focus"] | "All">("All");

  const filtered = useMemo(() => {
    if (focus === "All") return mentors;
    return mentors.filter((mentor) => mentor.focus === focus);
  }, [focus]);

  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="rounded-[40px] border border-ink/10 bg-white/85 p-8 shadow-xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="section-title">Mentor directory</h3>
            <p className="text-sm text-ink/70">Filter by focus to find the right pro for your team.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFocus("All")}
              className={`btn-pill text-sm ${focus === "All" ? "" : "btn-secondary"}`}
            >
              All
            </button>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setFocus(filter)}
                className={`btn-pill text-sm ${focus === filter ? "" : "btn-secondary"}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {filtered.map((mentor) => (
            <div key={mentor.name} className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow">
              <p className="text-lg font-semibold text-jet">{mentor.name}</p>
              <p className="text-sm text-ink/60">{mentor.role}</p>
              <p className="text-xs uppercase tracking-wider text-ink/40">{mentor.company}</p>
              <span className="mt-4 inline-flex rounded-full bg-electric/10 px-3 py-1 text-xs font-semibold text-electric">
                {mentor.focus}
              </span>
              <button className="btn-pill mt-4 w-full justify-center">Book office hours</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
