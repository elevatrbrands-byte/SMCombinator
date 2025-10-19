export const metadata = {
  title: "Contact · D Pitch",
  description: "Reach the D Pitch team for general, chapter, or sponsor questions.",
};

const contacts = [
  {
    heading: "General",
    email: "hello@dpitch.org",
    blurb: "Program questions, partnerships, and press inquiries.",
  },
  {
    heading: "Chapters",
    email: "chapters@dpitch.org",
    blurb: "Launch support, onboarding kits, and training resources.",
  },
  {
    heading: "Sponsors",
    email: "partners@dpitch.org",
    blurb: "Sponsor tiers, finals participation, and custom activations.",
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-20">
      <section className="mx-auto max-w-5xl px-4">
        <div className="rounded-[40px] border border-ink/10 bg-white/80 p-10 text-center shadow-xl">
          <h1 className="hero-line text-[60px] font-black text-jet md:text-[68px]">Contact</h1>
          <p className="mt-4 text-lg text-ink/70">We respond within two business days.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {contacts.map((contact) => (
            <div key={contact.email} className="card h-full text-center">
              <h3 className="text-xl font-semibold text-jet">{contact.heading}</h3>
              <p className="mt-2 text-sm text-ink/60">{contact.blurb}</p>
              <a href={`mailto:${contact.email}`} className="btn-pill mt-6 inline-flex justify-center">
                {contact.email}
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4">
        <div className="rounded-[40px] border border-ink/10 bg-white/85 p-10 shadow-xl">
          <h2 className="section-title">Send a message</h2>
          <form className="mt-6 grid gap-4">
            <label className="flex flex-col text-sm font-medium text-ink/70">
              Name
              <input type="text" required className="mt-1 rounded-2xl border border-ink/20 bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60" />
            </label>
            <label className="flex flex-col text-sm font-medium text-ink/70">
              Email
              <input type="email" required className="mt-1 rounded-2xl border border-ink/20 bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60" />
            </label>
            <label className="flex flex-col text-sm font-medium text-ink/70">
              How can we help?
              <textarea rows={4} className="mt-1 rounded-2xl border border-ink/20 bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric/60" />
            </label>
            <button type="submit" className="btn-pill justify-center">
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
