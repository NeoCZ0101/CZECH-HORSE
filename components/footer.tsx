"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { platformName } from "@/lib/data";

const czechColumns = [
  {
    title: "Platforma",
    links: [
      { href: "/co-resim", label: "Co právě řeším" },
      { href: "/stravovani", label: "Stravování" },
      { href: "/cesty", label: "Životní cesty" },
      { href: "/o-platforme", label: "O platformě" },
    ],
  },
  {
    title: "Podpora",
    links: [
      { href: "/odbornici", label: "Odborníci a služby" },
      { href: "/pro-odborniky", label: "Pro odborníky" },
    ],
  },
];

const englishColumns = [
  {
    title: "Platform",
    links: [
      { href: "#mapa-cloveka", label: "Areas" },
      { href: "/en/stravovani", label: "Food and nutrition" },
      { href: "#david-journey", label: "First journey" },
      { href: "#how-it-works", label: "How it works" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "#start-here", label: "Start with your situation" },
      { href: "#for-experts", label: "For experts" },
      { href: "#platform-boundaries", label: "Platform boundaries" },
    ],
  },
];

export function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const columns = isEnglish ? englishColumns : czechColumns;
  const description = isEnglish
    ? "A practical platform that starts with a real-life situation, then offers context, useful steps, trusted experts and community."
    : "Prototyp platformy, která začíná konkrétní životní situací a až potom nabízí obsah, praktické kroky, odborníky a komunitu.";
  const note = isEnglish
    ? "It does not replace medical, psychological or therapeutic care."
    : "Nenahrazuje psychologickou, psychoterapeutickou ani zdravotní péči.";

  return (
    <footer className="bg-forest-deep text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-xl font-semibold text-cream">{platformName}</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-cream/65">{description}</p>
          <p className="mt-4 text-sm text-cream/45">{note}</p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h2 className="text-sm font-semibold uppercase text-sand">{column.title}</h2>
            <ul className="mt-4 grid gap-3 text-sm">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link className="text-cream/70 transition hover:text-cream" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
