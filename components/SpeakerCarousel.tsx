"use client";

import { useEffect, useState } from "react";

type Speaker = {
  name: string;
  title: string;
  company: string;
  topics: string[];
};

const speakers: Speaker[] = [
  {
    name: "Jordan Price",
    title: "Founder",
    company: "Launchline Labs",
    topics: ["Customer Discovery", "Zero-to-One"],
  },
  {
    name: "Sasha Ramirez",
    title: "VP Growth",
    company: "Bluebird",
    topics: ["Growth Systems", "Retention"],
  },
  {
    name: "Priya Desai",
    title: "Partner",
    company: "Metro Capital",
    topics: ["Fundraising", "Pitch Craft"],
  },
  {
    name: "Malik Thompson",
    title: "Head of Product",
    company: "Vector Robotics",
    topics: ["Hardware MVP", "Ops"],
  },
];

export function SpeakerCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % speakers.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="rounded-3xl border border-ink/10 bg-white/85 p-6 shadow-lg">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h3 className="text-2xl font-semibold text-jet">Speaker Carousel</h3>
            <p className="mt-2 text-sm text-ink/70">
              Monthly Speaker Days feature rotating builders. Hover to pause. Click to jump ahead.
            </p>
          </div>
          <div className="flex gap-2">
            {speakers.map((speaker, speakerIndex) => (
              <button
                key={speaker.name}
                onClick={() => setIndex(speakerIndex)}
                className={`h-2 w-12 rounded-full transition-all ${
                  index === speakerIndex ? "bg-electric" : "bg-ink/20"
                }`}
                aria-label={`Show ${speaker.name}`}
              />
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-gradient-to-br from-electric/20 via-white to-electric/10 p-6 shadow-inner">
            <p className="text-sm uppercase tracking-widest text-electric/80">Now featuring</p>
            <p className="mt-3 text-3xl font-bold text-jet">{speakers[index].name}</p>
            <p className="text-lg text-ink/70">
              {speakers[index].title} · {speakers[index].company}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {speakers[index].topics.map((topic) => (
                <span key={topic} className="rounded-full bg-electric/10 px-3 py-1 text-xs font-semibold text-electric">
                  {topic}
                </span>
              ))}
            </div>
            <button className="btn-pill mt-6">Add to calendar</button>
          </div>
          <div className="grid gap-4">
            {speakers.map((speaker) => (
              <div key={speaker.name} className="rounded-2xl border border-ink/10 bg-white/90 p-4 shadow">
                <p className="text-base font-semibold text-jet">{speaker.name}</p>
                <p className="text-sm text-ink/60">
                  {speaker.title} · {speaker.company}
                </p>
                <p className="mt-2 text-xs uppercase tracking-wider text-ink/50">
                  {speaker.topics.join(" • ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
