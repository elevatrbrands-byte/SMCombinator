const values = [
  {
    title: "Step-by-Step Playbook",
    description: "Weekly modules guide you from problem to prototype to pitch.",
  },
  {
    title: "Mentors on Call",
    description: "Founders and operators run office hours and review your progress.",
  },
  {
    title: "Stage to Shine",
    description: "Qualify for the Spring 2026 Finals and pitch to real judges.",
  },
];

export function ValueProps() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="section-title">Why teams love D Pitch</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <div key={value.title} className="card h-full">
            <h3 className="text-2xl font-semibold text-jet">{value.title}</h3>
            <p className="mt-4 text-base text-ink/70">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
