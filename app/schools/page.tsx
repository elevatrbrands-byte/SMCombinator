import { DFWMap } from "@/components/DFWMap";

export const metadata = {
  title: "Schools & Partners · D Pitch",
  description: "Bring D Pitch to your campus or sponsor the experience.",
};

export default function SchoolsPage() {
  return (
    <div className="space-y-20">
      <section className="mx-auto max-w-5xl px-4">
        <div className="rounded-[40px] border border-ink/10 bg-white/80 p-10 text-center shadow-xl">
          <h1 className="hero-line text-[60px] font-black text-jet md:text-[68px]">Bring D Pitch to your campus.</h1>
          <p className="mt-4 text-lg text-ink/70">DFW network of private-school chapters launching Fall 2025.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 rounded-[40px] border border-ink/10 bg-white/85 p-10 shadow-xl md:grid-cols-2">
          <div>
            <h2 className="section-title">For schools</h2>
            <ul className="mt-4 space-y-3 text-base text-ink/70">
              <li>• Advisor guide, club charter, semester plan, student-leader playbook.</li>
              <li>• Safety & safeguards: parental permissions, media release, chaperones.</li>
            </ul>
          </div>
          <div>
            <h2 className="section-title">For sponsors</h2>
            <p className="mt-3 text-base text-ink/70">Why sponsor: cultivate future founders, recruit interns, support Dallas innovation.</p>
            <p className="mt-2 text-base text-ink/70">Tiers: Community, Chapter, Citywide (benefits: booth, stage mention, judging seat).</p>
          </div>
        </div>
      </section>
      <DFWMap />
    </div>
  );
}
