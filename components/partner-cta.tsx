import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function PartnerCTA() {
  return (
    <section className="bg-forest-deep text-cream">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.75fr] lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sage/25 px-4 py-2 text-sm text-sand">
            <ShieldCheck aria-hidden size={17} />
            Pro odborníky a partnery
          </div>
          <h2 className="mt-5 font-display text-3xl font-semibold md:text-4xl">
            Ne další katalog. Kontext pro lepší spolupráci.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-cream/70">
            Partner získává prostor vysvětlit svůj přístup a být doporučen ve chvíli, kdy už člověk lépe chápe svou situaci, ne jen podle zaplacené viditelnosti.
          </p>
        </div>
        <div className="flex items-end lg:justify-end">
          <Link
            href="/pro-odborniky"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-cream px-6 py-3 text-sm font-semibold text-forest-deep transition hover:-translate-y-0.5 hover:bg-sand"
          >
            Podívat se na partnerství
            <ArrowRight aria-hidden size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
