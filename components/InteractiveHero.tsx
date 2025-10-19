"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function InteractiveHero() {
  const [mounted, setMounted] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  return (
    <section
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 rounded-[40px] border border-white/40 bg-white/70 px-6 py-16 text-jet shadow-[0_25px_60px_rgba(15,23,42,0.08)] backdrop-blur-lg md:px-12">
        <div className="max-w-3xl space-y-6">
          <p className="hero-line text-[64px] font-black leading-[0.9] md:text-[72px]">
            <span className="block">Launch a startup.</span>
            <span className="block">Learn by doing.</span>
            <span className="block">Pitch Dallas in Spring 2026.</span>
          </p>
          <p className="max-w-xl text-lg text-ink/80">
            D Pitch is a citywide program that turns DFW high-schoolers into founders—step by step, from zero to investible.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/apply" className="btn-pill text-base">
              Apply now
            </Link>
            <Link href="/chapters" className="btn-pill btn-secondary text-base">
              Start a chapter at your school
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-wide text-ink/60">
          <span>Partner schools</span>
          <span className="h-px w-12 bg-ink/20" aria-hidden="true" />
          <span>Sponsors</span>
          <span className="h-px w-12 bg-ink/20" aria-hidden="true" />
          <span>Mentor network</span>
        </div>
      </div>
      {mounted && (
        <motion.span
          className="pointer-events-none absolute -inset-24 z-[-1] rounded-full bg-[radial-gradient(circle_at_center,_rgba(78,149,255,0.35),_transparent_60%)] blur-3xl"
          style={{
            left: springX,
            top: springY,
          }}
          aria-hidden
        />
      )}
    </section>
  );
}
