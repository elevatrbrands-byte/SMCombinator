import { MentorDirectory } from "@/components/MentorDirectory";
import { SpeakerCarousel } from "@/components/SpeakerCarousel";

const speakers = [
  { name: "Jordan Price", title: "Founder", company: "Launchline Labs", topics: "Customer Discovery" },
  { name: "Sasha Ramirez", title: "VP Growth", company: "Bluebird", topics: "Growth Systems" },
  { name: "Priya Desai", title: "Partner", company: "Metro Capital", topics: "Fundraising" },
];

export const metadata = {
  title: "Speakers & Mentors · D Pitch",
  description: "Meet the builders guiding D Pitch teams.",
};

export default function SpeakersPage() {
  return (
    <div className="space-y-20">
      <section className="mx-auto max-w-5xl px-4">
        <div className="rounded-[40px] border border-ink/10 bg-white/80 p-10 text-center shadow-xl">
          <h1 className="hero-line text-[60px] font-black text-jet md:text-[68px]">Learn from people who’ve actually built things.</h1>
          <p className="mt-4 text-lg text-ink/70">Tactical talks, live teardown of decks, AMAs, and workshops.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {speakers.map((speaker) => (
            <div key={speaker.name} className="card h-full">
              <div className="h-40 rounded-3xl bg-gradient-to-br from-electric/30 via-white to-electric/10" />
              <h3 className="mt-4 text-xl font-semibold text-jet">{speaker.name}</h3>
              <p className="text-sm text-ink/60">{speaker.title}</p>
              <p className="text-sm text-ink/60">Last: {speaker.company}</p>
              <p className="mt-3 text-xs uppercase tracking-widest text-electric/80">{speaker.topics}</p>
            </div>
          ))}
        </div>
      </section>
      <SpeakerCarousel />
      <MentorDirectory />
      <section className="mx-auto max-w-4xl px-4">
        <div className="rounded-[40px] border border-ink/10 bg-white/85 p-10 shadow-xl text-center">
          <h2 className="section-title">What to expect</h2>
          <p className="mt-4 text-base text-ink/70">
            Tactical talks, live teardown of decks, AMAs, and small-room workshops. Every session ends with action items tailored to your team.
          </p>
          <button className="btn-pill mt-6">Book office hours</button>
        </div>
      </section>
    </div>
  );
}
