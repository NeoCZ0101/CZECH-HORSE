"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

export function MobileNavigation({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="shrink-0 md:hidden">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sage/30 bg-cream/10 text-cream transition hover:bg-cream/15"
        aria-label={open ? "Zavřít navigaci" : "Otevřít navigaci"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
      </button>

      {open ? (
        <div className="absolute left-4 right-4 top-20 z-50 rounded-[6px] border border-sand bg-surface p-3 shadow-2xl">
          <nav className="grid gap-1" aria-label="Mobilní navigace">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[4px] px-3 py-3 text-sm font-medium text-ink transition hover:bg-mist"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
