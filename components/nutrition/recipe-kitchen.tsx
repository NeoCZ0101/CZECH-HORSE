import Image from "next/image";
import { ChefHat, Clock3, CookingPot } from "lucide-react";

const recipes = [
  {
    image: "/food-oats.png",
    time: "10 min",
    cs: {
      title: "Ovesná miska s ovocem",
      tag: "Snídaně",
      ingredients: "50 g vloček, 200 ml mléka, půl jablka, 2 lžíce bílého jogurtu",
      tools: "Rendlík, lžíce, nůž a prkénko.",
      steps: [
        "V rendlíku promíchej vločky s mlékem a přiveď k mírnému varu.",
        "Za občasného míchání vař 5 až 7 minut. Když kaše příliš zhoustne, přilij trochu mléka.",
        "Jablko nakrájej na kostičky. Kaši přendej do misky a přidej jogurt a ovoce."
      ],
      plan: "Ovesné vločky"
    },
    en: {
      title: "Oat bowl with fruit",
      tag: "Breakfast",
      ingredients: "50 g oat flakes, 200 ml milk, half an apple, 2 tbsp plain yoghurt",
      tools: "Small saucepan, spoon, knife and chopping board.",
      steps: [
        "Stir the oats and milk together in a saucepan and bring to a gentle simmer.",
        "Cook for 5 to 7 minutes, stirring occasionally. Add a splash of milk if it gets too thick.",
        "Dice the apple. Spoon the porridge into a bowl and top with the yoghurt and fruit."
      ],
      plan: "oats"
    }
  },
  {
    image: "/food-lentils.png",
    time: "30 min",
    cs: {
      title: "Čočková miska se zeleninou",
      tag: "Oběd",
      ingredients: "70 g suché zelené čočky, 1 mrkev, hrst špenátu, 1 lžička oleje, citron",
      tools: "Síto, hrnec, nůž a prkénko.",
      steps: [
        "V sítu propláchni čočku, nasyp ji do hrnce a zalij vodou podle obalu.",
        "Vař doměkka podle pokynů na obalu. Mrkev nakrájej na drobné kostičky a přidej ji na posledních 8 minut.",
        "Slij přebytečnou vodu. Do horké čočky vmíchej špenát, olej a pár kapek citronu."
      ],
      plan: "Čočka"
    },
    en: {
      title: "Lentil bowl with vegetables",
      tag: "Lunch",
      ingredients: "70 g dry green lentils, 1 carrot, a handful of spinach, 1 tsp oil, lemon",
      tools: "Sieve, saucepan, knife and chopping board.",
      steps: [
        "Rinse the lentils in a sieve. Tip them into a saucepan and add water according to the packet.",
        "Simmer until tender following the packet instructions. Dice the carrot finely and add it for the last 8 minutes.",
        "Drain any excess water. Fold the spinach, oil and a squeeze of lemon into the hot lentils."
      ],
      plan: "lentils"
    }
  },
  {
    image: "/food-salmon.png",
    time: "30 min",
    cs: {
      title: "Pečený losos s bramborami",
      tag: "Večeře",
      ingredients: "150 g filetu z lososa, 180 g brambor, 100 g brokolice, 1 lžička oleje, citron",
      tools: "Plech, hrnec s poklicí, nůž a prkénko.",
      steps: [
        "Troubu předehřej na 200 °C. Brambory nakrájej na malé kousky a vař v hrnci asi 15 minut doměkka.",
        "Lososa polož na plech, potři olejem a peč zhruba 12 až 18 minut podle tloušťky, až bude maso i uprostřed neprůsvitné a bude se snadno oddělovat na lupínky.",
        "Na posledních 5 minut přidej k bramborám růžičky brokolice. Slij a podávej s rybou a citronem."
      ],
      plan: "Losos"
    },
    en: {
      title: "Roast salmon with potatoes",
      tag: "Dinner",
      ingredients: "150 g salmon fillet, 180 g potatoes, 100 g broccoli, 1 tsp oil, lemon",
      tools: "Baking tray, lidded saucepan, knife and chopping board.",
      steps: [
        "Heat the oven to 200°C. Cut the potatoes into small chunks and boil for about 15 minutes until tender.",
        "Place the salmon on a baking tray, brush with oil and bake for about 12 to 18 minutes, depending on thickness, until opaque in the centre and easily flaked.",
        "Add the broccoli florets to the potatoes for the last 5 minutes. Drain and serve with the fish and lemon."
      ],
      plan: "salmon"
    }
  }
];

export function RecipeKitchen({ language, isAdded, onAdd }: { language: "cs" | "en"; isAdded: (item: string) => boolean; onAdd: (item: string) => void }) {
  const en = language === "en";
  return (
    <section id={en ? "recipes" : "recepty"} className="mx-auto max-w-7xl scroll-mt-24 px-4 pt-12 sm:px-6 lg:px-8">
      <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{en ? "Recipes and cooking guides" : "Recepty a návody"}</h2>
      <div className="mt-6 grid items-start gap-5 md:grid-cols-3">
        {recipes.map(recipe => {
          const dish = recipe[language];
          return (
            <article key={recipe.image} className="overflow-hidden border border-sand bg-cream">
              <div className="relative aspect-[1.8]">
                <Image src={recipe.image} alt="" fill sizes="(min-width: 768px) 32vw, 95vw" className="object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between text-xs font-semibold text-olive">
                  <span>{dish.tag}</span><span className="flex items-center gap-1"><Clock3 aria-hidden size={14} />{recipe.time}</span>
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{dish.title}</h3>
                <details className="mt-4 border-t border-sand pt-3">
                  <summary className="cursor-pointer text-sm font-semibold text-forest">{en ? "Ingredients and method" : "Suroviny a postup"}</summary>
                  <div className="mt-4 space-y-4 text-sm leading-6">
                    <div><h4 className="font-semibold">{en ? "For one serving" : "Na jednu porci"}</h4><p>{dish.ingredients}</p></div>
                    <div><h4 className="flex items-center gap-2 font-semibold"><CookingPot size={16} aria-hidden />{en ? "Kitchen tools" : "Kuchyňské pomůcky"}</h4><p>{dish.tools}</p></div>
                    <ol className="list-decimal space-y-2 pl-5">{dish.steps.map(step => <li key={step}>{step}</li>)}</ol>
                    <button type="button" disabled={isAdded(dish.plan)} onClick={() => onAdd(dish.plan)} className="flex items-center gap-2 border border-forest px-3 py-2 font-semibold text-forest hover:bg-mist"><ChefHat size={16} aria-hidden />{isAdded(dish.plan) ? (en ? "Main ingredient in plan" : "Hlavní surovina je v plánu") : (en ? "Add main ingredient to day" : "Přidat hlavní surovinu do dne")}</button>
                  </div>
                </details>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
