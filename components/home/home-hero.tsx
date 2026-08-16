import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Brain, Scissors, Sparkles, WalletCards } from "lucide-react";
import { FinanceCalculator } from "@/components/home/finance-calculator";

export function HomeHero() {
  return (
    <section className="border-b border-sand bg-surface text-ink">
      <h1 className="sr-only">Vlastní směr: tělo, psychika a finance</h1>
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
        <div className="mb-5 flex items-center justify-between gap-4 border-b border-sand pb-4 text-xs font-semibold tracking-[0.14em] text-forest sm:mb-7 sm:pb-5">
          <span>TŘI PILÍŘE</span>
          <span className="text-muted">Vyber, kde chceš začít.</span>
        </div>

        <div className="grid overflow-hidden border border-sand lg:grid-cols-[1.16fr_0.84fr] xl:grid-cols-[1.1fr_0.8fr_0.9fr]">
          <section className="bg-cream" aria-labelledby="hero-body-title">
            <div className="flex flex-col gap-4 border-b border-sand px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-7 sm:py-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] text-olive">TĚLO</p>
                <h2 id="hero-body-title" className="mt-2 font-display text-3xl font-semibold leading-tight text-forest-deep sm:text-4xl">Pohyb. Pleť. Vlasy. Vousy.</h2>
              </div>
              <Link href="#mapa-cloveka" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-forest transition hover:text-terracotta">
                Prozkoumat tělo
                <ArrowRight aria-hidden size={17} />
              </Link>
            </div>

            <div className="grid min-h-[31rem] grid-cols-[1.06fr_0.94fr] sm:min-h-[35rem]">
              <figure className="relative min-h-[31rem] border-r border-sand sm:min-h-[35rem]">
                <Image
                  src="/hero-body-movement.png"
                  alt="Muž při klidném ranním pohybu a protažení v domácím prostředí."
                  fill
                  priority
                  sizes="(min-width: 1280px) 35vw, (min-width: 1024px) 58vw, 58vw"
                  className="object-cover"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-cream/95 px-4 py-3 text-sm font-medium text-ink">
                  Zdravě fungovat v běžném dni.
                </figcaption>
              </figure>

              <div className="grid min-h-[31rem] grid-rows-[1.1fr_0.9fr] sm:min-h-[35rem]">
                <figure className="relative min-h-[18rem] border-b border-sand sm:min-h-[21rem]">
                  <Image
                    src="/hero-grooming.png"
                    alt="Muž s přirozeně upravenými vlasy, vousy a zdravě vypadající pletí."
                    fill
                    sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 28vw, 42vw"
                    className="object-cover"
                  />
                </figure>
                <div className="flex min-h-[13rem] flex-col justify-between bg-mist px-4 py-4 sm:min-h-[14rem] sm:px-5 sm:py-5">
                  <div className="flex items-center gap-2 text-olive">
                    <Scissors aria-hidden size={17} />
                    <Sparkles aria-hidden size={17} />
                  </div>
                  <p className="mt-5 text-sm leading-6 text-ink">Péče, která sedí tvému obličeji, vlasům a rytmu života.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="flex min-h-[39rem] flex-col bg-forest-deep text-cream sm:min-h-[44rem]" aria-labelledby="hero-mind-title">
            <div className="flex flex-col gap-4 border-b border-cream/20 px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-7 sm:py-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] text-sage">PSYCHIKA</p>
                <h2 id="hero-mind-title" className="mt-2 font-display text-3xl font-semibold leading-tight sm:text-4xl">Pohoda. Kontakt. Jistota.</h2>
              </div>
              <Link href="#mapa-cloveka" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-cream transition hover:text-amber">
                Prozkoumat psychiku
                <ArrowRight aria-hidden size={17} />
              </Link>
            </div>

            <figure className="relative min-h-[25rem] flex-1 border-b border-cream/20 sm:min-h-[29rem]">
              <Image
                src="/hero-psychology.png"
                alt="Muž v klidném otevřeném rozhovoru v příjemném interiéru."
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 42vw, 92vw"
                className="object-cover"
              />
            </figure>

            <div className="grid gap-4 px-5 py-5 sm:grid-cols-[auto_1fr] sm:px-7 sm:py-6">
              <Brain className="text-amber" aria-hidden size={22} />
              <p className="text-sm leading-6 text-cream/75">Klidnější fungování mezi lidmi, ve vztazích i ve chvílích, kdy je toho moc.</p>
            </div>
          </section>

          <section id="finance-kalkulacka" className="flex min-h-[39rem] flex-col border-t border-sand bg-petrol text-cream sm:min-h-[44rem] lg:col-span-2 xl:col-span-1 xl:border-l xl:border-t-0" aria-labelledby="hero-finance-title">
            <div className="flex flex-col gap-4 border-b border-cream/20 px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-7 sm:py-6">
              <div>
                <div className="flex items-center gap-2 text-amber">
                  <WalletCards aria-hidden size={17} />
                  <p className="text-xs font-semibold tracking-[0.14em]">FINANCE</p>
                </div>
                <h2 id="hero-finance-title" className="mt-2 font-display text-3xl font-semibold leading-tight sm:text-4xl">Přehled. Rezerva. Klid.</h2>
              </div>
              <Link href="#mapa-cloveka" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-cream transition hover:text-amber">
                Prozkoumat finance
                <ArrowRight aria-hidden size={17} />
              </Link>
            </div>

            <FinanceCalculator />
          </section>
        </div>

        <Link href="#mapa-cloveka" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest transition hover:text-terracotta sm:mt-7">
          Zobrazit celou mapu
          <ArrowDownRight aria-hidden size={18} />
        </Link>
      </div>
    </section>
  );
}
