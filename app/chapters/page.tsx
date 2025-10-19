export const metadata = {
  title: "Chapters · D Pitch",
  description: "Launch a D Pitch chapter and turn your school into a startup studio.",
};

const benefits = [
  "Licensed D Pitch Curriculum (slides, worksheets, timers)",
  "Mentor matching + monthly office hours",
  "Speaker Day access (priority Q&A)",
  "Checkpoints with rubric & feedback",
  "School-friendly club ops kit (constitution, roles, promo)",
];

const modules = [
  "Week 1–2: Problem & User – Choose a problem that matters; define user and JTBD.",
  "Week 3–4: Validation – Interview scripts, bias traps, insight logs.",
  "Week 5–6: Solution & Prototype – Lo-fi prototype, smoke tests, concierge MVP.",
  "Week 7: Business Model – Unit economics, basic pricing, key assumptions.",
  "Week 8: GTM & Story – ICP, channels, early funnel math; narrative arc.",
  "Week 9: Pitch Craft – Deck structure, demo, Q&A drills.",
  "Week 10: Submit – Chapter showcase; pick teams for city qualifiers.",
];

export default function ChaptersPage() {
  return (
    <div className="space-y-20">
      <section className="mx-auto max-w-5xl px-4">
        <div className="rounded-[40px] border border-ink/10 bg-white/80 p-10 text-center shadow-xl">
          <h1 className="hero-line text-[60px] font-black text-jet md:text-[68px]">
            Chapters = your startup studio at school.
          </h1>
          <p className="mt-4 text-lg text-ink/70">Build with friends, learn the fundamentals, get coached by pros.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 rounded-[40px] border border-ink/10 bg-white/85 p-10 shadow-xl md:grid-cols-2">
          <div>
            <h2 className="section-title">What you get</h2>
            <ul className="mt-4 space-y-3 text-base text-ink/70">
              {benefits.map((benefit) => (
                <li key={benefit}>• {benefit}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="section-title">From nothing to investible</h2>
            <ul className="mt-4 space-y-3 text-base text-ink/70">
              {modules.map((module) => (
                <li key={module}>• {module}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section id="chapter-apply" className="mx-auto max-w-4xl px-4">
        <div className="rounded-[40px] border border-electric/30 bg-white/90 p-10 shadow-xl">
          <h2 className="section-title text-center">Start a chapter</h2>
          <p className="mt-2 text-center text-sm text-ink/70">
            Fill this in and we’ll send your onboarding kit within 48 hours.
          </p>
          <form className="mt-8 grid gap-4 md:grid-cols-2">
            <label className="flex flex-col text-sm font-medium text-ink/70">
              School
              <input type="text" required className="mt-1 rounded-2xl border border-ink/20 bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60" />
            </label>
            <label className="flex flex-col text-sm font-medium text-ink/70">
              City
              <input type="text" required className="mt-1 rounded-2xl border border-ink/20 bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60" />
            </label>
            <label className="flex flex-col text-sm font-medium text-ink/70">
              Advisor (teacher/staff)
              <input type="text" className="mt-1 rounded-2xl border border-ink/20 bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60" />
            </label>
            <label className="flex flex-col text-sm font-medium text-ink/70">
              Student lead
              <input type="text" className="mt-1 rounded-2xl border border-ink/20 bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60" />
            </label>
            <label className="md:col-span-2 flex flex-col text-sm font-medium text-ink/70">
              Email
              <input type="email" required className="mt-1 rounded-2xl border border-ink/20 bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60" />
            </label>
            <label className="flex flex-col text-sm font-medium text-ink/70">
              Expected members
              <input type="number" min={1} className="mt-1 rounded-2xl border border-ink/20 bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60" />
            </label>
            <label className="md:col-span-2 flex flex-col text-sm font-medium text-ink/70">
              Why your school?
              <textarea rows={4} className="mt-1 rounded-2xl border border-ink/20 bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60" />
            </label>
            <button type="submit" className="btn-pill md:col-span-2 justify-center">
              Submit
            </button>
          </form>
          <p className="mt-4 text-center text-xs text-ink/60">You’re on the list! We’ll send your onboarding kit in 48 hours.</p>
        </div>
      </section>
    </div>
  );
}
