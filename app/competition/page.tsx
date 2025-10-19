const structure = [
  {
    title: "Eligibility",
    detail: "DFW-area high school students (grades 9–12) forming 2–5 person teams.",
  },
  {
    title: "Tracks",
    detail: "Consumer, B2B/SaaS, Deep Tech/Hardware, Social Impact.",
  },
  {
    title: "Advancement",
    detail: "Chapter showcase → city qualifiers (March) → finals (May).",
  },
];

const rubric = [
  { name: "Problem clarity & insight", weight: "25%" },
  { name: "Validation & traction signals", weight: "25%" },
  { name: "Solution quality & feasibility", weight: "20%" },
  { name: "Business model & go-to-market", weight: "15%" },
  { name: "Story & Q&A", weight: "15%" },
];

const faqItems = [
  { question: "Who owns the IP?", answer: "Teams retain full ownership of what they build." },
  { question: "How big can teams be?", answer: "Two to five students per team. Solo founders can match up before qualifiers." },
  { question: "Do projects need revenue?", answer: "No. Show validated learning: interviews, tests, waitlists, prototypes." },
  { question: "Are hardware builds allowed?", answer: "Yes. Follow safety protocols and budget guidelines shared during onboarding." },
  { question: "What’s the code of conduct?", answer: "Respect, integrity, and safety. Full policy ships with acceptance packet." },
];

export const metadata = {
  title: "Competition · D Pitch",
  description: "Everything you need to know about the D Pitch Finals — Spring 2026.",
};

export default function CompetitionPage() {
  return (
    <div className="space-y-20">
      <section className="mx-auto max-w-5xl px-4">
        <div className="rounded-[40px] border border-ink/10 bg-white/85 p-10 text-center shadow-xl">
          <h1 className="hero-line text-[60px] font-black text-jet md:text-[68px]">The D Pitch Finals — Spring 2026</h1>
          <p className="mt-4 text-lg text-ink/70">Dallas’ stage for high-school founders.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {structure.map((item) => (
            <div key={item.title} className="card h-full">
              <h3 className="text-xl font-semibold text-jet">{item.title}</h3>
              <p className="mt-3 text-base text-ink/70">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4">
        <div className="rounded-[40px] border border-ink/10 bg-white/85 p-10 shadow-xl">
          <h2 className="section-title">Judging rubric</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {rubric.map((item) => (
              <div key={item.name} className="rounded-3xl border border-ink/10 bg-white/90 p-4 shadow">
                <p className="text-base font-semibold text-jet">{item.name}</p>
                <p className="text-sm text-ink/60">Weight: {item.weight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 rounded-[40px] border border-electric/30 bg-white/90 p-10 shadow-xl md:grid-cols-2">
          <div>
            <h2 className="section-title">Prizes & support</h2>
            <ul className="mt-4 space-y-3 text-base text-ink/70">
              <li>• Seed Grants (top teams)</li>
              <li>• Mentorship sprint with operators and investors</li>
              <li>• Workspace credits / tools (cloud, design, dev)</li>
              <li>• Press features via local media partners</li>
            </ul>
          </div>
          <div>
            <h2 className="section-title">Venue & agenda</h2>
            <p className="mt-3 text-base text-ink/70">Dallas venue: TBA (central, transit-accessible).</p>
            <p className="mt-2 text-base text-ink/70">Agenda: Expo hall → Top 10 pitches → Judges’ deliberation → Awards.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4">
        <div className="rounded-[40px] border border-ink/10 bg-white/85 p-10 shadow-xl">
          <h2 className="section-title">Competition FAQ</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="overflow-hidden rounded-3xl border border-ink/10 bg-white/90 p-4 shadow">
                <summary className="cursor-pointer text-lg font-semibold text-jet">
                  {item.question}
                </summary>
                <p className="mt-3 text-base text-ink/70">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
