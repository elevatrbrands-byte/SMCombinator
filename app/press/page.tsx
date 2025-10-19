export const metadata = {
  title: "Press & Media · D Pitch",
  description: "Grab assets and story angles for covering D Pitch.",
};

const stories = [
  "Youth entrepreneurship taking root in Dallas",
  "Finals event spotlighting high-school founders",
  "Mentor network building the next innovation pipeline",
];

export default function PressPage() {
  return (
    <div className="space-y-20">
      <section className="mx-auto max-w-5xl px-4">
        <div className="rounded-[40px] border border-ink/10 bg-white/80 p-10 text-center shadow-xl">
          <h1 className="hero-line text-[60px] font-black text-jet md:text-[68px]">Press kit</h1>
          <p className="mt-4 text-lg text-ink/70">Logo files, founder bios, and sample photos—ready for download.</p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4">
        <div className="rounded-[40px] border border-ink/10 bg-white/85 p-10 shadow-xl">
          <h2 className="section-title">Media contact</h2>
          <p className="mt-3 text-base text-ink/70">press@dpitch.org</p>
          <h3 className="mt-6 text-lg font-semibold text-jet">Story angles</h3>
          <ul className="mt-3 space-y-2 text-base text-ink/70">
            {stories.map((story) => (
              <li key={story}>• {story}</li>
            ))}
          </ul>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-ink/10 bg-white/90 p-4 shadow">
              <p className="text-sm uppercase tracking-widest text-electric/80">Assets</p>
              <p className="mt-2 text-sm text-ink/70">Logo files, color palette, founder bios, sample photos.</p>
              <button className="btn-pill mt-4">Download kit</button>
            </div>
            <div className="rounded-3xl border border-ink/10 bg-white/90 p-4 shadow">
              <p className="text-sm uppercase tracking-widest text-electric/80">Media list</p>
              <p className="mt-2 text-sm text-ink/70">Join embargo updates and finals press briefings.</p>
              <button className="btn-pill mt-4">Join list</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
