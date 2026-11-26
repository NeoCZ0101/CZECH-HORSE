const entries = [
  { ids: ["ovesne-vlocky", "oats"], ref: 188, state: ["suché vločky", "dry flakes"], kcal: 353, protein: 13.1, fibre: 12.7, fat: 5.8, carbs: 55.8 },
  { ids: ["vejce", "eggs"], ref: 78, state: ["syrové, bez skořápky", "raw, without shell"], kcal: 138, protein: 12.5, fibre: 0, fat: 9.2, carbs: 1.3 },
  { ids: ["cocka", "lentils"], ref: 647, state: ["červená, suchá", "red, dry"], kcal: 313, protein: 24.7, fibre: 22.6, fat: 1.3, carbs: 39.2 },
  { ids: ["losos", "salmon"], ref: 596, state: ["atlantský, syrový filet bez kůže", "Atlantic, raw skinless fillet"], kcal: 158, protein: 22.1, fibre: 0, fat: 7.8, carbs: 0 },
  { ids: ["avokado", "avocado"], ref: 486, state: ["syrová dužina", "raw flesh"], kcal: 166, protein: 1.5, fibre: 4.9, fat: 16.5, carbs: 1.4 },
];

export function NutrientValues({ id, language }: { id: string; language: "cs" | "en" }) {
  const food = entries.find(entry => entry.ids.includes(id));
  if (!food) return null;
  const en = language === "en";
  const n = new Intl.NumberFormat(en ? "en" : "cs");
  const labels = en ? ["Protein", "Fibre", "Fat", "Available carbs"] : ["Bílkoviny", "Vláknina", "Tuky", "Využitelné sacharidy"];
  const amounts = [food.protein, food.fibre, food.fat, food.carbs];
  return (
    <div className="border-t border-sand px-4 py-3 text-sm">
      <p className="text-muted">100 g · {food.state[en ? 1 : 0]} · <strong className="text-ink">{food.kcal} kcal</strong></p>
      <dl className="my-3 grid grid-cols-2 gap-2">
        {labels.map((label, i) => <div key={label}><dt className="text-xs text-muted">{label}</dt><dd className="font-semibold tabular-nums">{n.format(amounts[i])} g</dd></div>)}
      </dl>
      <a className="text-xs text-forest underline underline-offset-2" href={`https://www.nutridatabaze.cz/${en ? "en/food" : "potraviny"}/?id=${food.ref}`}>{en ? "Source: Czech Food Composition Database" : "Zdroj: NutriDatabáze"}</a>
    </div>
  );
}
