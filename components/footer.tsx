"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { platformName } from "@/lib/data";

const czechLinks = [
  { href: "/stravovani", label: "Stravování" },
  { href: "/o-mne", label: "O mně" },
];

const englishLinks = [
  { href: "/en#mapa-cloveka", label: "Areas" },
  { href: "/en/stravovani", label: "Food and nutrition" },
  { href: "/en#david-journey", label: "First journey" },
  { href: "/en#how-it-works", label: "How it works" },
  { href: "/en/about-me", label: "About me" },
];

export function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const links = isEnglish ? englishLinks : czechLinks;
  const description = isEnglish
    ? "I'm building this for myself and sharing what I learn along the way."
    : "Tvořím pro sebe. Co se cestou naučím, dávám sem i pro tebe.";

  return (
    <footer className="bg-forest-deep text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-xl font-semibold text-cream">{platformName}</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-cream/65">{description}</p>
          <p className="mt-2 text-xs font-semibold text-sand">{isEnglish ? "#DISCIPLINE" : "#DISCIPLÍNA"}</p>
          <Image unoptimized src="/david-signature.svg" alt="David" width={108} height={44} className="mt-2" />
        </div>

        <nav aria-labelledby="footer-platform">
          <h2 id="footer-platform" className="text-sm font-semibold uppercase text-sand">{isEnglish ? "Platform" : "Platforma"}</h2>
          <ul className="mt-4 grid gap-3 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link className="text-cream/70 transition hover:text-cream" href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
