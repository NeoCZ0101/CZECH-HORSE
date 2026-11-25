import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

const sauces = {
  cs: [
    { name: "Rajčatová", preparation: "Na olivovém oleji nech zesklovatět cibuli, přidej drcená rajčata a pomalu je svař do husté omáčky. Bazalku přidej až na konci.", plate: "Masové kuličky s rajčatovou omáčkou a kolínky." },
    { name: "Koprová", preparation: "Světlou máslovou jíšku postupně rozmíchej s vývarem a provař. Zjemni smetanou a po odstavení přidej čerstvý kopr. Ocet přidávej po kapkách.", plate: "Vařené hovězí s koprovkou a houskovým knedlíkem nebo vejce s koprovkou a bramborami." },
    { name: "Houbová", preparation: "Plátky žampionů opeč na másle dozlatova. Přilij vývar, uvolni přípečky ze dna pánve a nech šťávu zhoustnout. Pro jemnější chuť přidej trochu smetany.", plate: "Vepřová panenka s houbovou omáčkou a bramborovou kaší." },
    { name: "Bazalkové pesto", preparation: "Bazalku utři s česnekem a piniovými oříšky. Vmíchej olivový olej a nastrouhaný parmazán. K těstovinám pesto zřeď lžící vody z vaření.", plate: "Pečená treska s novými bramborami a lžící pesta." },
  ],
  en: [
    { name: "Tomato sauce", preparation: "Soften an onion in olive oil, add crushed tomatoes and simmer until thick. Tear in fresh basil just before serving.", plate: "Meatballs with tomato sauce and elbow pasta." },
    { name: "Creamy dill sauce", preparation: "Whisk stock gradually into a pale butter and flour roux and simmer. Stir in cream, take the pan off the heat and add fresh dill. Season with vinegar a few drops at a time.", plate: "Poached beef with dill sauce and Czech bread dumplings, or boiled eggs with dill sauce and potatoes." },
    { name: "Mushroom gravy", preparation: "Brown sliced mushrooms in butter. Pour in stock, scrape the browned bits from the pan and simmer to reduce. Stir in a little cream for a milder sauce.", plate: "Pork tenderloin with mushroom gravy and mashed potatoes." },
    { name: "Basil pesto", preparation: "Pound basil with garlic and pine nuts. Stir in olive oil and grated Parmesan. For pasta, loosen the pesto with a spoonful of the cooking water.", plate: "Roasted cod with new potatoes and a spoonful of pesto." },
  ],
};

export function SauceGuide({ language }: { language: "cs" | "en" }) {
  const english = language === "en";
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Link href={english ? "/en/stravovani" : "/stravovani"} className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:underline">
        <ArrowLeft aria-hidden size={17} />
        {english ? "Back to food and nutrition" : "Zpět na stravování"}
      </Link>
      <header className="grid items-center gap-6 border-b border-sand py-8 sm:grid-cols-2">
        <h1 className="font-display text-4xl font-semibold text-ink">{english ? "Sauces" : "Omáčky"}</h1>
        <Image src="/sauces.webp" width={1200} height={500} sizes="(min-width: 640px) 45vw, 95vw" alt="" className="h-auto w-full" />
      </header>
      <div className="grid gap-x-10 sm:grid-cols-2">
        {sauces[language].map(sauce => (
          <section key={sauce.name} className="border-b border-sand py-6">
            <h2 className="font-display text-2xl font-semibold text-ink">{sauce.name}</h2>
            <p className="mt-3 leading-6 text-muted">{sauce.preparation}</p>
            <p className="mt-3 border-l-2 border-olive pl-3 text-sm leading-6 text-forest">{sauce.plate}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
