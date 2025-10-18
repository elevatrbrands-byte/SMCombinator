import Link from "next/link";

const footerLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Code of Conduct", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white/70 backdrop-blur py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold">D Pitch</p>
          <p className="text-sm text-ink/70">Dallas’ stage for high-school founders.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-ink/70">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-electric">
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-ink/60">© {new Date().getFullYear()} D Pitch. All rights reserved.</p>
      </div>
    </footer>
  );
}
