import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const copy = {
  cs: {
    id: "recept-losos", profile: "losos", guide: "/stravovani/maso-a-ryby",
    title: "Pečený losos s bramborami a špenátem", tag: "Recept", time: "45 minut · 1 porce",
    ingredients: ["150 g filetu z lososa bez kůže", "200 g malých brambor", "80 g čerstvého špenátu", "1 malý stroužek česneku", "2 lžičky olivového oleje", "¼ citronu, sůl a pepř"],
    tools: "Plech, pečicí papír, nůž, prkénko, pánev a kuchyňský teploměr.",
    steps: [
      ["Začni bramborami", "Troubu předehřej na 200 °C (horní a dolní ohřev). Brambory omyj, nakrájej na kousky široké asi 2 cm a promíchej se lžičkou oleje a špetkou soli. Rozlož je na plech s pečicím papírem řezem dolů. Peč 20 minut."],
      ["Přidej filet", "Lososa osuš, lehce osol a opepři. Na plechu udělej mezi bramborami místo, polož na něj rybu a přidej plátek citronu. Vrať do trouby; u filetu silného 2 až 3 cm začni kontrolovat střed po 10 minutách."],
      ["Nech zavadnout špenát", "Zatímco se ryba peče, nakrájej česnek na tenké plátky. Na pánvi ho na druhé lžičce oleje krátce rozvoň, přidej omytý špenát a míchej 1 až 2 minuty, dokud listy nezavadnou."],
      ["Zkontroluj a podávej", "Teploměr zasuň z boku do nejsilnější části filetu. Při 63 °C ho vyndej z trouby. Do brambor musí snadno zajet nůž; pokud potřebují ještě chvíli, nech dopéct jen je. Podávej se špenátem a citronovou šťávou."],
    ],
    alt: "Pečený filet z lososa s citronem, opečenými bramborami a špenátem",
  },
  en: {
    id: "salmon-recipe", profile: "salmon", guide: "/en/stravovani/meat-and-fish",
    title: "Roast salmon with potatoes and spinach", tag: "Recipe", time: "45 minutes · 1 serving",
    ingredients: ["150 g skinless salmon fillet", "200 g baby potatoes", "80 g fresh spinach", "1 small garlic clove", "2 tsp olive oil", "¼ lemon, salt and pepper"],
    tools: "Baking tray, baking paper, knife, chopping board, frying pan and food thermometer.",
    steps: [
      ["Start the potatoes", "Heat a conventional oven to 200°C. Wash the potatoes, cut into pieces about 2 cm across and toss with a teaspoon of oil and a pinch of salt. Arrange cut side down on a lined tray and roast for 20 minutes."],
      ["Add the fillet", "Pat the salmon dry and season lightly with salt and pepper. Make space on the tray, add the fillet and top with a lemon slice. Return to the oven. For a fillet 2 to 3 cm thick, start checking the centre after 10 minutes."],
      ["Wilt the spinach", "Meanwhile, thinly slice the garlic. Warm it briefly in the remaining teaspoon of oil in a frying pan until fragrant. Add the washed spinach and stir for 1 to 2 minutes until wilted."],
      ["Check and serve", "Insert a thermometer sideways into the thickest part of the fillet. Remove it from the oven when it reaches 63°C (145°F). A knife should slide easily into the potatoes; leave just the potatoes in the oven if they need longer. Serve with the spinach and a squeeze of lemon."],
    ],
    alt: "Roast salmon fillet topped with lemon, alongside roasted potatoes and spinach",
  },
};

type Props = { language: keyof typeof copy };

export function SalmonRecipeLink({ language }: Props) {
  const t = copy[language];
  return (
    <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
      <Link href={t.guide + "#" + t.id} className="group flex items-center gap-4 border-y border-sand py-4 text-forest">
        <Image src="/food-salmon.png" alt="" width={80} height={80} className="size-20 shrink-0 object-cover" />
        <span><span className="block text-xs font-semibold text-muted">{t.tag} · {t.time}</span>
          <span className="mt-1 block font-display text-xl font-semibold group-hover:underline">{t.title}</span>
        </span>
        <ArrowRight aria-hidden className="ml-auto shrink-0" size={20} />
      </Link>
    </div>
  );
}

export function SalmonRecipe({ language }: Props) {
  const t = copy[language];
  const cs = language === "cs";
  return (
    <section id={t.id} className="scroll-mt-24 border-t border-sand bg-cream py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-olive">{t.tag} · {t.time}</p>
        <h2 className="mt-2 font-display text-3xl font-semibold">{t.title}</h2>
        <div className="mt-6 grid items-start gap-8 lg:grid-cols-[minmax(15rem,0.7fr)_1fr]">
          <div>
            <Image src="/food-salmon.png" alt={t.alt} width={640} height={640} sizes="(min-width: 1024px) 32vw, 95vw" className="h-auto w-full max-w-md" />
            <a href={"#" + t.profile} className="mt-3 inline-block text-sm font-semibold text-forest underline underline-offset-4">{cs ? "Syrový losos: původ a nutriční hodnoty" : "Raw salmon: origin and nutrition facts"}</a>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold">{cs ? "Suroviny" : "Ingredients"}</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">{t.ingredients.map(item => <li key={item}>{item}</li>)}</ul>
            <h3 className="mt-5 font-display text-xl font-semibold">{cs ? "Pomůcky" : "Equipment"}</h3>
            <p className="mt-2 text-muted">{t.tools}</p>
            <h3 className="mt-5 font-display text-xl font-semibold">{cs ? "Postup" : "Method"}</h3>
            <ol className="mt-2 list-decimal space-y-3 pl-5">{t.steps.map(([heading, body]) => <li key={heading}><strong>{heading}.</strong> {body}</li>)}</ol>
          </div>
        </div>
      </div>
    </section>
  );
}
