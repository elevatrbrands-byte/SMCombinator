const steps = [
  {
    title: "Join a Chapter",
    description: "Start one at your school or join an existing chapter across DFW.",
  },
  {
    title: "Follow the Track",
    description: "Weekly modules + checkpoints → real customer discovery.",
  },
  {
    title: "Level Up",
    description: "Speaker days with industry vets; feedback rounds; practice pitches.",
  },
  {
    title: "Compete",
    description: "Winter qualifiers → Spring 2026 finals. Scholarships, mentorship, and prizes.",
  },
];

export function Stepper() {
  return (
    <section className="bg-white/80 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 max-w-3xl">
          <h2 className="section-title">How it works</h2>
          <p className="mt-3 text-lg text-ink/70">
            One playbook. Four moves. Everything you need to go from idea to finals-ready pitch.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="card h-full bg-white">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-electric text-lg font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-jet">{step.title}</h3>
                <p className="mt-3 text-base text-ink/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
