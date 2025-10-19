"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/chapters", label: "Chapters" },
  { href: "/competition", label: "Competition" },
  { href: "/speakers", label: "Speakers & Mentors" },
  { href: "/schools", label: "Schools & Partners" },
  { href: "/apply", label: "Apply" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/press", label: "Press & Media" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-lg shadow-ink/10 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold text-jet">
          D Pitch
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-electric">
              {link.label}
            </Link>
          ))}
          <Link href="/apply" className="btn-pill text-sm">
            Apply now
          </Link>
        </nav>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="btn-pill md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </div>
      {isOpen && (
        <div id="mobile-menu" className="border-t border-ink/10 bg-white/95 px-4 py-6 md:hidden">
          <div className="flex flex-col gap-4 text-base font-medium text-ink">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/apply" className="btn-pill">
              Apply now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
