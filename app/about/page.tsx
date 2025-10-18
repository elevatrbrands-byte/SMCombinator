export const metadata = {
  title: "About · D Pitch",
  description: "Mission, origin, and team behind D Pitch.",
};

const team = [
  {
    name: "Morgan Lee",
    role: "Program Director",
    bio: "Former accelerator lead who built youth entrepreneurship programs across Texas.",
  },
  {
    name: "Andre Patel",
    role: "Curriculum Lead",
    bio: "Product coach and ex-founder translating startup playbooks into weekly modules.",
  },
  {
    name: "Zara Chen",
    role: "Community Lead",
    bio: "Student organizer connecting chapters, alumni, and mentors across DFW.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-20">
      <section className="mx-auto max-w-5xl px-4">
        <div className="rounded-[40px] border border-ink/10 bg-white/80 p-10 text-center shadow-xl">
          <h1 className="hero-line text-[60px] font-black text-jet md:text-[68px]">Mission</h1>
          <p className="mt-4 text-lg text-ink/70">
            Grow Dallas’ next generation of founders by making entrepreneurship hands-on, social, and achievable in high school.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4">
        <div className="rounded-[40px] border border-ink/10 bg-white/85 p-10 shadow-xl">
          <h2 className="section-title">Why “D Pitch”?</h2>
          <p className="mt-3 text-base text-ink/70">
            A tip of the hat to Dallas culture and ambition. D Pitch is an independent student program not affiliated with D Magazine.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="card h-full">
              <div className="h-40 rounded-3xl bg-gradient-to-br from-electric/25 via-white to-electric/10" />
              <h3 className="mt-4 text-xl font-semibold text-jet">{member.name}</h3>
              <p className="text-sm text-ink/60">{member.role}</p>
              <p className="mt-3 text-sm text-ink/70">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
