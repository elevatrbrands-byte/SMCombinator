import { ApplicationGate } from "@/components/ApplicationGate";
import { PitchDeckBuilder } from "@/components/PitchDeckBuilder";

export const metadata = {
  title: "Apply · D Pitch",
  description: "Apply as a student or launch a chapter at your school.",
};

export default function ApplyPage() {
  return (
    <div className="space-y-20">
      <section className="mx-auto max-w-5xl px-4">
        <div className="rounded-[40px] border border-ink/10 bg-white/80 p-10 text-center shadow-xl">
          <h1 className="hero-line text-[60px] font-black text-jet md:text-[68px]">Apply to D Pitch</h1>
          <p className="mt-4 text-lg text-ink/70">No idea yet? Perfect—we’ll help you find one.</p>
        </div>
      </section>
      <ApplicationGate />
      <section id="student-apply" className="mx-auto max-w-5xl px-4">
        <div className="rounded-[40px] border border-electric/30 bg-white/90 p-10 shadow-xl">
          <h2 className="section-title text-center">Student application</h2>
          <p className="mt-2 text-center text-sm text-ink/70">Solo today, team tomorrow—chapters help you meet cofounders.</p>
          <form className="mt-8 grid gap-4 md:grid-cols-2">
            <label className="flex flex-col text-sm font-medium text-ink/70">
              Name
              <input type="text" required className="mt-1 rounded-2xl border border-ink/20 bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60" />
            </label>
            <label className="flex flex-col text-sm font-medium text-ink/70">
              School
              <input type="text" required className="mt-1 rounded-2xl border border-ink/20 bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60" />
            </label>
            <label className="flex flex-col text-sm font-medium text-ink/70">
              Grade
              <select className="mt-1 rounded-2xl border border-ink/20 bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60">
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </label>
            <label className="flex flex-col text-sm font-medium text-ink/70">
              Team or solo
              <select className="mt-1 rounded-2xl border border-ink/20 bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60">
                <option>Solo</option>
                <option>Team (list names below)</option>
              </select>
            </label>
            <label className="md:col-span-2 flex flex-col text-sm font-medium text-ink/70">
              Idea area (optional)
              <input type="text" className="mt-1 rounded-2xl border border-ink/20 bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60" />
            </label>
            <label className="md:col-span-2 flex flex-col text-sm font-medium text-ink/70">
              Guardian email (for minors)
              <input type="email" required className="mt-1 rounded-2xl border border-ink/20 bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60" />
            </label>
            <label className="md:col-span-2 flex items-center gap-2 text-xs text-ink/60">
              <input type="checkbox" required className="h-4 w-4 rounded border-ink/30" />
              I have parental consent to participate.
            </label>
            <label className="md:col-span-2 flex items-center gap-2 text-xs text-ink/60">
              <input type="checkbox" required className="h-4 w-4 rounded border-ink/30" />
              I agree to the code of conduct and media release options provided after acceptance.
            </label>
            <button type="submit" className="btn-pill md:col-span-2 justify-center">
              Submit application
            </button>
          </form>
        </div>
      </section>
      <section id="chapter-apply" className="mx-auto max-w-5xl px-4">
        <div className="rounded-[40px] border border-ink/10 bg-white/90 p-10 shadow-xl">
          <h2 className="section-title text-center">Chapter lead application</h2>
          <p className="mt-2 text-center text-sm text-ink/70">Parental consent is required for minors.</p>
          <form className="mt-8 grid gap-4 md:grid-cols-2">
            <label className="flex flex-col text-sm font-medium text-ink/70">
              School name
              <input type="text" required className="mt-1 rounded-2xl border border-ink/20 bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60" />
            </label>
            <label className="flex flex-col text-sm font-medium text-ink/70">
              Advisor contact
              <input type="email" required className="mt-1 rounded-2xl border border-ink/20 bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60" />
            </label>
            <label className="flex flex-col text-sm font-medium text-ink/70">
              Expected size
              <input type="number" min={5} className="mt-1 rounded-2xl border border-ink/20 bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60" />
            </label>
            <label className="flex flex-col text-sm font-medium text-ink/70">
              Kickoff date
              <input type="date" className="mt-1 rounded-2xl border border-ink/20 bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60" />
            </label>
            <label className="md:col-span-2 flex flex-col text-sm font-medium text-ink/70">
              Goals for your chapter
              <textarea rows={4} className="mt-1 rounded-2xl border border-ink/20 bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60" />
            </label>
            <button type="submit" className="btn-pill md:col-span-2 justify-center">
              Submit application
            </button>
          </form>
          <p className="mt-4 text-center text-xs text-ink/60">After submit: dashboard link + onboarding email.</p>
        </div>
      </section>
      <PitchDeckBuilder />
    </div>
  );
}
