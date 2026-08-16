"use client";

import Image from "next/image";
import { ArrowRight, Bot, Check, ChevronRight, CircleAlert, Clock3, Globe2, Heart, Plus, ShoppingBag, Sparkles, Utensils, X } from "lucide-react";
import { useMemo, useState } from "react";
import { nutritionFoods, nutritionPlans, nutritionRecipes, type NutritionCategory, type NutritionFood } from "@/lib/nutrition-data";

type PlannerItem = { foodId: string; meal: "Snídaně" | "Oběd" | "Večeře" };
const categories: Array<"Vše" | NutritionCategory> = ["Vše", "Bílkoviny", "Vláknina", "Tuky", "Sacharidy", "Maso a ryby"];
const meals: PlannerItem["meal"][] = ["Snídaně", "Oběd", "Večeře"];

function FoodCard({ food, selected, onAdd, onOpen }: { food: NutritionFood; selected: boolean; onAdd: () => void; onOpen: () => void }) {
  return (
    <article className="group overflow-hidden border border-sand bg-surface transition duration-200 hover:-translate-y-0.5 hover:border-forest/50 hover:shadow-[0_14px_34px_rgba(37,40,33,0.08)]">
      <button type="button" onClick={onOpen} className="block w-full text-left">
        <div className="relative aspect-[1.35] overflow-hidden bg-mist">
          <Image src={food.image} alt={food.name} fill sizes="(min-width: 1280px) 22vw, (min-width: 768px) 31vw, 92vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
          <span className="absolute left-3 top-3 border border-cream/70 bg-forest-deep/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-cream">{food.category}</span>
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div><h3 className="font-display text-xl font-semibold text-ink">{food.name}</h3><p className="mt-1 text-sm leading-6 text-muted">{food.summary}</p></div>
            <ChevronRight className="mt-1 shrink-0 text-forest" aria-hidden size={19} />
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5">{food.tags.map((tag) => <span key={tag} className="border border-sand px-2 py-1 text-[11px] text-muted">{tag}</span>)}</div>
        </div>
      </button>
      <div className="flex items-center justify-between border-t border-sand px-4 py-3">
        <span className="text-xs text-muted">Porce: {food.portions}</span>
        <button type="button" onClick={onAdd} className={`inline-flex min-h-9 items-center gap-1.5 px-3 text-xs font-semibold transition ${selected ? "bg-forest text-cream" : "border border-forest/25 text-forest hover:bg-mist"}`}>
          {selected ? <Check aria-hidden size={15} /> : <Plus aria-hidden size={15} />}{selected ? "V plánu" : "Přidat do dne"}
        </button>
      </div>
    </article>
  );
}

function DetailPanel({ food, onClose, onAdd, selected }: { food: NutritionFood; onClose: () => void; onAdd: () => void; selected: boolean }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-forest-deep/55 p-0 sm:items-center sm:p-6">
      <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto bg-cream shadow-[0_24px_70px_rgba(16,20,19,0.28)]">
        <div className="grid md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-64 bg-mist md:min-h-[34rem]"><Image src={food.image} alt={food.name} fill sizes="(min-width: 768px) 35vw, 100vw" className="object-cover" /></div>
          <div className="p-5 sm:p-7">
            <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-olive">{food.category}</p><h2 className="mt-2 font-display text-3xl font-semibold text-ink">{food.name}</h2></div><button type="button" onClick={onClose} aria-label="Zavřít detail" className="grid h-10 w-10 place-items-center border border-sand text-muted transition hover:border-forest hover:text-forest"><X aria-hidden size={18} /></button></div>
            <p className="mt-4 text-sm leading-6 text-muted">{food.summary}</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div><p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-olive"><Heart aria-hidden size={15} /> Co může přinést</p><ul className="mt-3 grid gap-2 text-sm leading-5 text-ink">{food.benefits.map((item) => <li key={item} className="flex gap-2"><Check className="mt-0.5 shrink-0 text-olive" aria-hidden size={15} />{item}</li>)}</ul></div>
              <div><p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-terracotta"><CircleAlert aria-hidden size={15} /> Na co dát pozor</p><ul className="mt-3 grid gap-2 text-sm leading-5 text-ink">{food.cautions.map((item) => <li key={item} className="flex gap-2"><CircleAlert className="mt-0.5 shrink-0 text-terracotta" aria-hidden size={15} />{item}</li>)}</ul></div>
            </div>
            <div className="mt-6 grid gap-3 border-y border-sand py-4 text-sm sm:grid-cols-2"><p className="flex gap-2"><Globe2 className="mt-0.5 shrink-0 text-petrol" aria-hidden size={16} /><span><strong className="font-semibold text-ink">Původ a pěstování:</strong> {food.origin}</span></p><p className="flex gap-2"><Clock3 className="mt-0.5 shrink-0 text-petrol" aria-hidden size={16} /><span><strong className="font-semibold text-ink">Dostupnost:</strong> {food.season}</span></p></div>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-muted">Orientační porce: <span className="font-semibold text-ink">{food.portions}</span></p><button type="button" onClick={onAdd} className="inline-flex min-h-11 items-center gap-2 bg-forest px-4 py-3 text-sm font-semibold text-cream transition hover:bg-forest-deep">{selected ? <Check aria-hidden size={17} /> : <Plus aria-hidden size={17} />}{selected ? "V plánu" : "Přidat do mého dne"}</button></div>
            <p className="mt-5 text-xs leading-5 text-muted">Informace jsou orientační a vzdělávací. Nenahrazují individuální doporučení lékaře nebo nutričního terapeuta.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NutritionPlanner() {
  const [category, setCategory] = useState<(typeof categories)[number]>("Vše");
  const [selectedFoodId, setSelectedFoodId] = useState<string | null>(null);
  const [planner, setPlanner] = useState<PlannerItem[]>([{ foodId: nutritionFoods[0].id, meal: "Snídaně" }]);
  const [activePath, setActivePath] = useState<"self" | "inspiration" | "partner">("self");
  const [notice, setNotice] = useState("Přidej potraviny, které chceš během dne vyzkoušet.");
  const selectedFood = nutritionFoods.find((food) => food.id === selectedFoodId);
  const filteredFoods = useMemo(() => category === "Vše" ? nutritionFoods : nutritionFoods.filter((food) => food.category === category), [category]);

  function toggleFood(foodId: string) {
    setPlanner((current) => current.some((item) => item.foodId === foodId) ? current.filter((item) => item.foodId !== foodId) : [...current, { foodId, meal: "Oběd" }]);
    setNotice("Tvůj den se průběžně skládá. U každé položky můžeš změnit jídlo.");
  }

  function applyPlan(items: string[], message: string) {
    setPlanner(items.map((name, index) => ({ foodId: nutritionFoods.find((food) => food.name === name)?.id ?? nutritionFoods[0].id, meal: meals[index % meals.length] })));
    setActivePath("inspiration");
    setNotice(message);
  }

  function updateMeal(foodId: string, meal: PlannerItem["meal"]) {
    setPlanner((current) => current.map((item) => item.foodId === foodId ? { ...item, meal } : item));
  }

  function applyRecipe(items: string[], message: string) {
    applyPlan(items, message);
  }

  return (
    <main className="bg-surface">
      <section className="border-b border-forest-deep/10 bg-mist py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(20rem,0.72fr)] lg:items-end lg:px-8">
          <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-olive">TĚLO · STRAVOVÁNÍ</p><h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.04] text-forest-deep sm:text-6xl">Jídlo jako systém, ne jako zákaz.</h1><p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">Sestav si vlastní den, inspiruj se hotovým směrem nebo později využij jídelníček od partnera. U každé potraviny se podíváš na přínosy, omezení, cenu i to, odkud přichází.</p></div>
          <div className="border-l-2 border-terracotta pl-5 text-sm leading-6 text-muted"><p className="font-semibold text-ink">Začínáme prakticky.</p><p className="mt-2">Neřešíme dokonalý jídelníček. Hledáme kombinace, které se dají opakovat v běžném týdnu a dávají smysl tvému cíli, času i rozpočtu.</p></div>
        </div>
      </section>

      <section className="border-b border-sand bg-cream py-10 sm:py-12"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-3 md:grid-cols-3">
        <button type="button" onClick={() => { setActivePath("self"); setNotice("Vyber potraviny a postav si den podle sebe."); }} className={`border p-5 text-left transition ${activePath === "self" ? "border-forest bg-forest text-cream" : "border-sand bg-surface hover:border-forest/50"}`}><Utensils className={activePath === "self" ? "text-amber" : "text-olive"} aria-hidden size={21} /><h2 className="mt-4 text-lg font-semibold">Sestavit si sám</h2><p className={`mt-2 text-sm leading-6 ${activePath === "self" ? "text-cream/75" : "text-muted"}`}>Vybereš si potraviny, porce a místo v průběhu dne.</p></button>
        <button type="button" onClick={() => applyPlan(nutritionPlans[0].items, "Načetli jsme jednoduchou inspiraci. Uprav si ji podle sebe.")} className={`border p-5 text-left transition ${activePath === "inspiration" ? "border-petrol bg-petrol text-cream" : "border-sand bg-surface hover:border-petrol/50"}`}><Sparkles className={activePath === "inspiration" ? "text-amber" : "text-petrol"} aria-hidden size={21} /><h2 className="mt-4 text-lg font-semibold">Nechat se inspirovat</h2><p className={`mt-2 text-sm leading-6 ${activePath === "inspiration" ? "text-cream/75" : "text-muted"}`}>Hotový jednoduchý směr, který můžeš rozebrat a poskládat jinak.</p></button>
        <button type="button" onClick={() => { setActivePath("partner"); setNotice("Partnerské jídelníčky připravujeme. Tady bude možné porovnat autora, přístup, cenu a rozsah podpory."); }} className={`border p-5 text-left transition ${activePath === "partner" ? "border-terracotta bg-terracotta text-cream" : "border-sand bg-surface hover:border-terracotta/50"}`}><ShoppingBag className={activePath === "partner" ? "text-cream" : "text-terracotta"} aria-hidden size={21} /><h2 className="mt-4 text-lg font-semibold">Jídelníček od partnera</h2><p className={`mt-2 text-sm leading-6 ${activePath === "partner" ? "text-cream/75" : "text-muted"}`}>Kurátorované nabídky od lidí, kteří za svou metodou stojí.</p></button>
      </div></div></section>

      <section className="py-16 sm:py-20"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:px-8">
        <div><div className="flex flex-col gap-5 border-b border-sand pb-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-olive">KATALOG JÍDEL A SUROVIN</p><h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">Začni u jednoho jídla.</h2></div><p className="max-w-xs text-sm leading-6 text-muted">Prohlédni si hotový talíř, otevři si informace a potom ho uprav podle sebe.</p></div>
          <div className="mt-6 flex flex-wrap gap-2">{categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`min-h-10 border px-3 py-2 text-sm font-medium transition ${category === item ? "border-forest bg-forest text-cream" : "border-sand bg-cream text-muted hover:border-forest/50 hover:text-ink"}`}>{item}</button>)}</div>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{filteredFoods.map((food) => <FoodCard key={food.id} food={food} selected={planner.some((item) => item.foodId === food.id)} onAdd={() => toggleFood(food.id)} onOpen={() => setSelectedFoodId(food.id)} />)}</div>
          <div className="mt-14 border-t border-sand pt-8"><div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-olive">RECEPTY</p><h3 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">Hotové talíře pro inspiraci.</h3></div><p className="max-w-sm text-sm leading-6 text-muted">Recept načteš do svého dne a pak ho můžeš dál přestavět.</p></div><div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{nutritionRecipes.map((recipe) => <article key={recipe.id} className="overflow-hidden border border-sand bg-cream"><div className="relative aspect-[1.5] overflow-hidden bg-mist"><Image src={recipe.image} alt={recipe.name} fill sizes="(min-width: 1280px) 22vw, (min-width: 768px) 31vw, 92vw" className="object-cover" /><span className="absolute left-3 top-3 border border-cream/70 bg-forest-deep/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-cream">{recipe.tag}</span></div><div className="p-4"><div className="flex items-start justify-between gap-3"><div><h4 className="font-display text-xl font-semibold text-ink">{recipe.name}</h4><p className="mt-1 text-sm leading-6 text-muted">{recipe.description}</p></div><span className="shrink-0 text-xs font-semibold text-olive">{recipe.time}</span></div><p className="mt-4 text-xs text-muted">{recipe.items.join(" · ")}</p><button type="button" onClick={() => applyRecipe(recipe.items, `Recept ${recipe.name} je v tvém dni. Uprav si ho podle sebe.`)} className="mt-4 inline-flex min-h-10 items-center gap-2 border border-forest px-3 py-2 text-sm font-semibold text-forest transition hover:bg-mist"><Utensils aria-hidden size={15} />Přidat recept do dne</button></div></article>)}</div></div>
          {activePath === "partner" && <div className="mt-8 border-l-4 border-terracotta bg-cream px-5 py-5 sm:px-6"><p className="text-sm font-semibold text-terracotta">PARTNERSKÁ NABÍDKA PŘIPRAVUJEME</p><p className="mt-2 max-w-2xl text-sm leading-6 text-muted">Až budou nabídky připravené, u každé bude jasné, kdo ji vytvořil, pro koho je, co obsahuje a co stojí. Bez skrytých slibů a bez vydávání obecného jídelníčku za zdravotní péči.</p></div>}
          {activePath !== "partner" && <div className="mt-8 border border-sand bg-mist px-5 py-5 sm:px-6"><div className="flex gap-3"><Bot className="mt-0.5 shrink-0 text-petrol" aria-hidden size={21} /><div><p className="text-sm font-semibold text-ink">AI návrh jako první koncept</p><p className="mt-1 text-sm leading-6 text-muted">V další verzi zadáš cíl, rozpočet, čas, preference a omezení. AI navrhne variantu, kterou si projdeš a upravíš. Nenahrazuje odborné posouzení.</p><button type="button" onClick={() => applyPlan(["Ovesné vločky", "Vejce", "Čočka"], "AI koncept je připravený lokálně jako ukázka budoucí funkce.")} className="mt-4 inline-flex min-h-10 items-center gap-2 bg-petrol px-3.5 py-2.5 text-sm font-semibold text-cream transition hover:bg-forest"><Bot aria-hidden size={16} />Vygenerovat AI koncept<ArrowRight aria-hidden size={16} /></button></div></div></div>}
        </div>

        <aside className="h-fit border border-forest bg-forest-deep text-cream lg:sticky lg:top-28"><div className="border-b border-cream/15 px-5 py-5"><div className="flex items-center justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber">MŮJ DEN</p><h2 className="mt-2 font-display text-2xl font-semibold">Jídelníček v procesu</h2></div><span className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 text-amber"><Utensils aria-hidden size={18} /></span></div><p className="mt-3 text-sm leading-6 text-cream/65">{notice}</p></div><div className="px-5 py-5">{planner.length === 0 ? <div className="border border-dashed border-cream/25 px-4 py-6 text-sm leading-6 text-cream/65">Zatím tu nic není. Přidej potravinu z katalogu.</div> : <div className="grid gap-3">{planner.map((item) => { const food = nutritionFoods.find((entry) => entry.id === item.foodId); if (!food) return null; return <div key={item.foodId} className="border border-cream/15 bg-cream/5 p-3"><div className="flex items-start justify-between gap-3"><div><p className="text-sm font-semibold text-cream">{food.name}</p><p className="mt-1 text-xs text-cream/55">{food.category} · {food.price} rozpočet</p></div><button type="button" onClick={() => toggleFood(food.id)} aria-label={`Odebrat ${food.name}`} className="text-cream/50 transition hover:text-amber"><X aria-hidden size={16} /></button></div><select value={item.meal} onChange={(event) => updateMeal(food.id, event.target.value as PlannerItem["meal"])} className="mt-3 min-h-9 w-full border border-cream/15 bg-forest px-2 text-xs text-cream outline-none focus:border-amber">{meals.map((meal) => <option key={meal}>{meal}</option>)}</select></div>; })}</div>}<div className="mt-5 border-t border-cream/15 pt-4 text-xs leading-5 text-cream/55">{planner.length} položek · {new Set(planner.map((item) => item.meal)).size} části dne</div></div><div className="border-t border-cream/15 px-5 py-5"><button type="button" onClick={() => applyPlan(nutritionPlans[1].items, "Vygenerovali jsme druhou inspiraci s větším důrazem na bílkoviny.")} className="inline-flex min-h-11 w-full items-center justify-center gap-2 bg-amber px-4 py-3 text-sm font-semibold text-forest-deep transition hover:bg-cream"><Sparkles aria-hidden size={17} />Vytvořit návrh dne</button><p className="mt-3 text-center text-xs leading-5 text-cream/45">Koncept pro orientaci. Nezohledňuje individuální diagnózy ani léčbu.</p></div></aside>
      </div></section>

      {selectedFood && <DetailPanel food={selectedFood} selected={planner.some((item) => item.foodId === selectedFood.id)} onClose={() => setSelectedFoodId(null)} onAdd={() => toggleFood(selectedFood.id)} />}
    </main>
  );
}
