"use client";

import { useEffect, useRef } from "react";

const items = ["Customer Discovery", "MVP", "Unit Economics", "Go-to-Market", "Pitch"];

export function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationId: number;
    let offset = 0;

    const step = () => {
      offset -= 0.6;
      marquee.style.transform = `translateX(${offset}px)`;
      if (Math.abs(offset) >= marquee.scrollWidth / 2) {
        offset = 0;
      }
      animationId = requestAnimationFrame(step);
    };

    const handleEnter = () => cancelAnimationFrame(animationId);
    const handleLeave = () => (animationId = requestAnimationFrame(step));

    animationId = requestAnimationFrame(step);
    marquee.addEventListener("mouseenter", handleEnter);
    marquee.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(animationId);
      marquee.removeEventListener("mouseenter", handleEnter);
      marquee.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="overflow-hidden border-y border-ink/10 bg-white/60 py-4">
      <div className="relative mx-auto flex max-w-full items-center justify-center">
        <div ref={marqueeRef} className="flex min-w-max gap-12 text-sm font-semibold uppercase tracking-[0.3em] text-ink/60">
          {[...items, ...items].map((item, index) => (
            <span key={`${item}-${index}`} className="whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
