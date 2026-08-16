import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-cream text-ink">
      <div className="absolute inset-y-0 right-0 hidden w-[26%] lg:block" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1800&q=80"
          alt=""
          fill
          priority
          sizes="26vw"
          className="object-cover object-[50%_38%]"
        />
        <div className="absolute inset-0 bg-forest/25" />
        <div className="absolute inset-y-0 left-0 w-2 bg-terracotta/85" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(86svh-5rem)] max-w-7xl flex-col justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="min-w-0 max-w-4xl pt-2 lg:max-w-[68%]">
          <p className="mb-5 flex items-center gap-3 text-sm font-semibold text-forest">
            <span className="h-px w-10 bg-terracotta" aria-hidden="true" />
            Začni u toho, co ti přestalo sedět
          </p>
          <h1 className="max-w-[15ch] font-display text-5xl font-semibold leading-[1.02] text-forest-deep sm:text-6xl lg:text-7xl">
            Nemusíš se celý život učit, jak lépe zapadnout.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted lg:text-xl">
            Neřekneme ti, jak má správný chlap žít. Pomůžeme ti zjistit, jak chceš žít ty a co k tomu potřebuješ, od směru a vztahů po tělo, zdraví a osobní prezentaci.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/co-resim"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[6px] bg-forest px-5 py-3 text-sm font-semibold text-cream shadow-[0_8px_18px_rgba(23,63,53,0.16)] transition hover:-translate-y-0.5 hover:bg-forest-deep sm:w-auto sm:px-6"
            >
              Vybrat, co právě řeším
              <ArrowRight aria-hidden size={18} />
            </Link>
            <Link
              href="#jak-platforma-funguje"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[6px] border border-forest bg-cream/80 px-5 py-3 text-sm font-semibold text-forest transition hover:-translate-y-0.5 hover:bg-surface sm:w-auto sm:px-6"
            >
              Jak platforma funguje
              <ArrowDownRight aria-hidden size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
