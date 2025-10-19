"use client";

import { useState } from "react";

type Item = {
  question: string;
  answer: string;
};

export function Accordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="overflow-hidden rounded-3xl border border-ink/10 bg-white/80 shadow-sm">
            <button
              className="flex w-full items-center justify-between px-6 py-4 text-left text-lg font-semibold text-jet"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <span className="text-2xl text-electric">{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen && <p className="px-6 pb-6 text-base text-ink/70">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
