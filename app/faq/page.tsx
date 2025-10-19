import { Accordion } from "@/components/Accordion";

const faqs = [
  { question: "Who can join?", answer: "Any DFW high-school student (grades 9–12)." },
  { question: "Do I need an idea?", answer: "Nope—come with curiosity." },
  { question: "Is there a cost?", answer: "We’re sponsor-funded; student participation is free or scholarship-supported." },
  { question: "Time commitment?", answer: "90 minutes/week in-chapter + checkpoints + optional office hours." },
  { question: "Can homeschoolers apply?", answer: "Yes—join the city chapter cohort." },
  { question: "What if my school doesn’t have a chapter?", answer: "Start one! We’ll equip you." },
];

export const metadata = {
  title: "FAQ · D Pitch",
  description: "Everything students and advisors ask before joining D Pitch.",
};

export default function FAQPage() {
  return (
    <div className="space-y-16">
      <section className="mx-auto max-w-4xl px-4">
        <div className="rounded-[40px] border border-ink/10 bg-white/85 p-10 text-center shadow-xl">
          <h1 className="hero-line text-[60px] font-black text-jet md:text-[68px]">FAQ</h1>
          <p className="mt-3 text-lg text-ink/70">Straight answers. No fluff.</p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4">
        <Accordion items={faqs} />
      </section>
    </div>
  );
}
