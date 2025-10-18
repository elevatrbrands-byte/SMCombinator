import { InteractiveHero } from "@/components/InteractiveHero";
import { Marquee } from "@/components/Marquee";
import { Stepper } from "@/components/Stepper";
import { Timeline } from "@/components/Timeline";
import { ValueProps } from "@/components/ValueProps";
import { ProgressTracker } from "@/components/ProgressTracker";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-24">
      <InteractiveHero />
      <ValueProps />
      <Stepper />
      <Marquee />
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 rounded-[40px] border border-ink/10 bg-white/80 p-10 shadow-xl md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="section-title">Learn from the pros.</h2>
            <p className="text-lg text-ink/70">
              Monthly Speaker Days bring seasoned operators and well-known founders to Dallas to share playbooks and roast your
              slides—in the best way.
            </p>
            <Link href="/speakers" className="btn-pill w-fit">
              See upcoming speakers
            </Link>
          </div>
          <div className="grid gap-4 text-sm text-ink/70">
            <div className="rounded-3xl bg-white/90 p-5 shadow">
              <p className="text-xs uppercase tracking-widest text-electric/70">This month</p>
              <p className="mt-2 text-lg font-semibold text-jet">Pitch teardown with Metro Capital</p>
              <p className="mt-1">Submit your deck for live feedback from venture investors.</p>
            </div>
            <div className="rounded-3xl bg-white/90 p-5 shadow">
              <p className="text-xs uppercase tracking-widest text-electric/70">Next month</p>
              <p className="mt-2 text-lg font-semibold text-jet">Hardware MVP lab with Vector Robotics</p>
              <p className="mt-1">Bring your prototypes for stress testing and critique.</p>
            </div>
          </div>
        </div>
      </section>
      <Timeline />
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 rounded-[40px] border border-ink/10 bg-white/85 p-10 shadow-xl md:grid-cols-2">
          <div>
            <h2 className="section-title">Outcomes you’ll track</h2>
            <ul className="mt-4 space-y-3 text-base text-ink/70">
              <li>• Customer interviews completed</li>
              <li>• Letters of intent and signups</li>
              <li>• Prototypes shipped and demo-ready</li>
              <li>• Waitlist and revenue (if any)</li>
            </ul>
          </div>
          <blockquote className="rounded-3xl bg-gradient-to-br from-electric/15 via-white to-electric/10 p-6 text-lg text-ink/80 shadow-inner">
            “D Pitch made ‘startup’ real. We shipped, talked to customers, and learned more in 12 weeks than any class.”
          </blockquote>
        </div>
      </section>
      <ProgressTracker />
      <section className="mx-auto max-w-4xl px-4">
        <div className="rounded-[40px] border border-electric/40 bg-electric text-white p-10 text-center shadow-glow">
          <h2 className="text-4xl font-bold">Ready to build?</h2>
          <p className="mt-2 text-lg text-white/80">Apply now and we’ll walk you from zero to investible.</p>
          <Link href="/apply" className="btn-pill mt-6 inline-flex items-center justify-center">
            Apply now
          </Link>
        </div>
      </section>
    </div>
  );
}
