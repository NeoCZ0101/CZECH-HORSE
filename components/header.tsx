"use client";

import Link from "next/link";
import { Compass, Globe2 } from "lucide-react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { platformName } from "@/lib/data";
import { MobileNavigation } from "@/components/mobile-navigation";

const czechNavItems = [
  { href: "/co-resim", label: "Co řeším" },
  { href: "/stravovani", label: "Stravování" },
  { href: "/cesty", label: "Životní cesty" },
  { href: "/odbornici", label: "Odborníci" },
  { href: "/pro-odborniky", label: "Pro odborníky" },
  { href: "/o-platforme", label: "O platformě" },
];

const englishNavItems = [
  { href: "#mapa-cloveka", label: "Areas" },
  { href: "/en/stravovani", label: "Food" },
  { href: "#david-journey", label: "First journey" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#current-focus", label: "Current focus" },
  { href: "#for-experts", label: "For experts" },
  { href: "#platform-boundaries", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const isNutritionPage = pathname === "/stravovani" || pathname === "/en/stravovani";
  const navItems = isEnglish ? englishNavItems : czechNavItems;
  const nutritionSubnav = isEnglish
    ? [{ href: "#build", label: "Build your day" }, { href: "#catalogue", label: "Food catalogue" }, { href: "#recipes", label: "Recipes" }]
    : [{ href: "#sestavit", label: "Sestavit den" }, { href: "#katalog", label: "Katalog jídel" }, { href: "#recepty", label: "Recepty" }, { href: "#progres", label: "Deník progresu" }];
  const languageHref =
    pathname === "/stravovani"
      ? "/en/stravovani"
      : pathname === "/en/stravovani"
        ? "/stravovani"
        : isEnglish
          ? "/"
          : "/en";
  const languageLabel = isEnglish ? "CZ" : "EN";

  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "cs";
  }, [isEnglish]);

  return (
    <header className="sticky top-0 z-40 border-b border-sand/90 bg-cream/95 text-forest-deep shadow-[0_4px_18px_rgba(23,28,29,0.05)] backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href={isEnglish ? "/en" : "/"}
          className="flex min-w-0 items-center gap-3"
          aria-label={isEnglish ? "Home" : "Domů"}
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest/15 bg-mist text-forest">
            <Compass aria-hidden size={23} />
          </span>
          <span className="truncate text-lg font-semibold">{platformName}</span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label={isEnglish ? "Main navigation" : "Hlavní navigace"}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.href === (isEnglish ? "/en/stravovani" : "/stravovani") && isNutritionPage ? "page" : undefined}
              className={`rounded-full px-3 py-2 text-sm font-medium transition hover:bg-mist hover:text-forest ${item.href === (isEnglish ? "/en/stravovani" : "/stravovani") && isNutritionPage ? "bg-forest text-cream hover:bg-forest-deep hover:text-cream" : "text-muted"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={languageHref}
            className="inline-flex h-10 min-w-10 items-center justify-center gap-1 border border-sand px-2 text-xs font-semibold tracking-[0.08em] text-muted transition hover:border-forest hover:text-forest"
            aria-label={isEnglish ? "Switch to Czech" : "Switch to English"}
          >
            <Globe2 aria-hidden size={15} />
            {languageLabel}
          </Link>
          <MobileNavigation items={navItems} />
        </div>
      </div>
      {isNutritionPage && (
        <nav className="border-t border-sand/70 bg-mist/70" aria-label={isEnglish ? "Food page sections" : "Části stránky stravování"}>
          <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 sm:px-6 lg:px-8">
            {nutritionSubnav.map((item) => (
              <Link key={item.href} href={item.href} className="shrink-0 px-3 py-1.5 text-xs font-semibold text-muted transition hover:bg-cream hover:text-forest">
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
