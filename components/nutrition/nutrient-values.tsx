const entries = [
  { ids: ["sardine"], ref: 755, state: ["syrová sardinka, jedlá část", "raw sardine, edible flesh"], kcal: 158, protein: 19.5, fibre: 0, fat: 8.9, carbs: 0 },
  { ids: ["shrimp"], ref: 806, state: ["krevety, jedlá část", "shrimp, edible flesh"], kcal: 84, protein: 18.2, fibre: 0, fat: 0.5, carbs: 1.7 },
  { ids: ["mackerel"], ref: "mackerel-august-december-raw", state: ["syrová, srpen až prosinec", "raw, August to December"], kcal: 286, protein: 17.5, fibre: 0, fat: 24, carbs: 0 },
  { ids: ["mussel"], ref: "mussel-blue-raw", state: ["syrové maso bez lastur", "raw meat, shells excluded"], kcal: 73, protein: 13.8, fibre: 0, fat: 2, carbs: 0 },
  { ids: ["pork"], ref: 280, state: ["syrová vepřová pečeně bez kosti, 5 % oddělitelného tuku", "raw boneless pork loin, 5% separable fat"], kcal: 151, protein: 22, fibre: 0, fat: 6.9, carbs: 0 },
  { ids: ["beef"], ref: 404, state: ["syrová hovězí kýta, 2 % oddělitelného tuku", "raw beef round, 2% separable fat"], kcal: 115, protein: 21.9, fibre: 0, fat: 3.1, carbs: 0 },
  { ids: ["veal"], ref: 223, state: ["syrová telecí kýta", "raw veal leg"], kcal: 95, protein: 21.1, fibre: 0, fat: 1.2, carbs: 0 },
  { ids: ["lamb"], ref: 224, state: ["syrová jehněčí kýta", "raw lamb leg"], kcal: 130, protein: 20.3, fibre: 0, fat: 5.4, carbs: 0 },
  { ids: ["mutton"], ref: 876, state: ["syrová skopová kýta", "raw mutton leg"], kcal: 153, protein: 18.1, fibre: 0, fat: 9, carbs: 0 },
  { ids: ["chicken", "kure"], ref: 230, state: ["syrová prsa bez kůže", "raw skinless breast"], kcal: 102, protein: 22.8, fibre: 0, fat: 1.2, carbs: 0 },
  { ids: ["turkey", "kruta"], ref: 452, state: ["syrová prsa bez kosti a kůže", "raw boneless skinless breast"], kcal: 107, protein: 24.2, fibre: 0, fat: 1.1, carbs: 0 },
  { ids: ["duck", "kachna"], ref: 588, state: ["syrové stehno s kůží, jedlá část bez kosti", "raw leg with skin, edible portion excluding bone"], kcal: 233, protein: 15.6, fibre: 0, fat: 19, carbs: 0 },
  { ids: ["goose", "husa"], ref: 703, state: ["syrové stehno s kůží, jedlá část bez kosti", "raw thigh with skin, edible portion excluding bone"], kcal: 354, protein: 13.2, fibre: 0, fat: 33.5, carbs: 0 },
  { ids: ["ovesne-vlocky", "oats"], ref: 188, state: ["suché vločky", "dry flakes"], kcal: 353, protein: 13.1, fibre: 12.7, fat: 5.8, carbs: 55.8 },
  { ids: ["vejce", "eggs"], ref: 78, state: ["syrové, bez skořápky", "raw, without shell"], kcal: 138, protein: 12.5, fibre: 0, fat: 9.2, carbs: 1.3 },
  { ids: ["cocka", "lentils"], ref: 647, state: ["červená, suchá", "red, dry"], kcal: 313, protein: 24.7, fibre: 22.6, fat: 1.3, carbs: 39.2 },
  { ids: ["losos", "salmon"], ref: 596, state: ["atlantský, syrový filet bez kůže", "Atlantic, raw skinless fillet"], kcal: 158, protein: 22.1, fibre: 0, fat: 7.8, carbs: 0 },
  { ids: ["avokado", "avocado"], ref: 486, state: ["syrová dužina", "raw flesh"], kcal: 166, protein: 1.5, fibre: 4.9, fat: 16.5, carbs: 1.4 },
];

const microLabels = {
  VITD: ["Vitamin D", "Vitamin D", "µg"],
  THIA: ["Vitamin B1","Vitamin B1","mg"],
  RIBF: ["Vitamin B2","Vitamin B2","mg"],
  NIA: ["Niacin","Niacin","mg"],
  PYRXN: ["Vitamin B6","Vitamin B6","mg"],
  VITC: ["Vitamin C","Vitamin C","mg"],
  NA: ["Sodík","Sodium","mg"],
  MG: ["Hořčík","Magnesium","mg"],
  P: ["Fosfor","Phosphorus","mg"],
  K: ["Draslík","Potassium","mg"],
  CA: ["Vápník","Calcium","mg"],
  FE: ["Železo","Iron","mg"],
  ZN: ["Zinek","Zinc","mg"],
  RETOL: ["Retinol (vitamin A)","Retinol (vitamin A)","µg"],
} as const;

type Micro = keyof typeof microLabels;
// Reported positive amounts per 100 g; a missing source value is not zero.
const micros: Record<string, [Micro, number][]> = {
  755: [["NA", 112]], 806: [["NA", 94]],
  "mackerel-august-december-raw": [["VITD", 5.7]], "mussel-blue-raw": [["RIBF", 0.3], ["VITD", 0.5], ["FE", 2]],
  78: [["THIA", 0.08], ["RIBF", 0.42], ["RETOL", 160], ["NA", 119], ["MG", 23], ["P", 220], ["K", 132], ["CA", 54], ["FE", 1.7]],
  188: [["THIA", 0.54], ["RIBF", 0.54], ["NA", 1], ["MG", 128], ["P", 389], ["K", 346], ["CA", 57], ["FE", 4.4]],
  223: [["THIA", 0.18], ["RIBF", 0.28], ["VITC", 0.5], ["NA", 54], ["MG", 25], ["P", 137], ["K", 101], ["CA", 25], ["FE", 4.8]],
  224: [["THIA", 0.16], ["RIBF", 0.25], ["RETOL", 18], ["NA", 74], ["MG", 23], ["P", 190], ["K", 320], ["CA", 7], ["FE", 1.9]],
  230: [["THIA", 0.11], ["RIBF", 0.12], ["RETOL", 6], ["NA", 52], ["MG", 158], ["P", 229], ["K", 380], ["CA", 20], ["FE", 3]],
  280: [["THIA", 0.99], ["RIBF", 0.09], ["NIA", 8.4], ["PYRXN", 0.52], ["RETOL", 3], ["NA", 45], ["MG", 26], ["P", 222], ["K", 350], ["CA", 5], ["FE", 0.4], ["ZN", 1.43]],
  404: [["THIA", 0.04], ["RIBF", 0.16], ["NIA", 5.6], ["PYRXN", 0.37], ["RETOL", 2], ["NA", 46], ["MG", 25], ["P", 205], ["K", 299], ["CA", 4], ["FE", 1.7], ["ZN", 4.2]],
  452: [["NA", 45]],
  486: [["NA", 8]],
  588: [["NA", 71]],
  596: [["NA", 53]],
  647: [["NA", 1]],
  703: [["NA", 45]],
  876: [["NA", 61]],
};

const additionalVitamins: Record<number, { slug: string; d: number; b12: number; cs: string; en: string }> = {
  78: { slug: "egg-raw", d: 2.5, b12: 1.3, cs: "syrové slepičí vejce", en: "raw hen’s egg" },
  596: { slug: "salmon-farmed-raw", d: 7, b12: 5.3, cs: "syrový filet z chovaného lososa", en: "raw farmed Atlantic salmon fillet" },
};

export function NutrientValues({ id, language }: { id: string; language: "cs" | "en" }) {
  const food = entries.find(entry => entry.ids.includes(id));
  if (!food) return null;
  const en = language === "en";
  const extra = typeof food.ref === "number" ? additionalVitamins[food.ref] : undefined;
  const n = new Intl.NumberFormat(en ? "en" : "cs");
  const labels = en ? ["Protein", "Fibre", "Fat", "Available carbs"] : ["Bílkoviny", "Vláknina", "Tuky", "Využitelné sacharidy"];
  const amounts = [food.protein, food.fibre, food.fat, food.carbs];
  return (
    <div className="border-t border-sand px-4 py-3 text-sm">
      <p className="text-muted">100 g · {food.state[en ? 1 : 0]} · <strong className="text-ink">{food.kcal} kcal</strong></p>
      <dl className="my-3 grid grid-cols-2 gap-2">
        {labels.map((label, i) => <div key={label}><dt className="text-xs text-muted">{label}</dt><dd className="font-semibold tabular-nums">{n.format(amounts[i])} g</dd></div>)}
        {micros[food.ref]?.map(([key, value]) => <div key={key}><dt className="text-xs text-muted">{microLabels[key][en ? 1 : 0]}</dt><dd className="font-semibold tabular-nums">{n.format(value)} {microLabels[key][2]}</dd></div>)}
        {extra && ([["Vitamin D", extra.d], ["Vitamin B12", extra.b12]] as const).map(([label, value]) => <div key={label}><dt className="text-xs text-muted">{label} *</dt><dd className="font-semibold tabular-nums">{n.format(value)} µg</dd></div>)}
      </dl>
      <a className="text-xs text-forest underline underline-offset-2" href={typeof food.ref === "string" ? `https://www.matvaretabellen.no/en/${food.ref}/` : `https://www.nutridatabaze.cz/${en ? "en/food" : "potraviny"}/?id=${food.ref}`}>{typeof food.ref === "string" ? (en ? "Source: Norwegian Food Composition Table" : "Zdroj: norská databáze Matvaretabellen") : en ? "Source: Czech Food Composition Database" : "Zdroj: NutriDatabáze"}</a>
      {extra && <p className="mt-1 text-xs text-muted">* D, B12 ({extra[language]}): <a className="text-forest underline" href={`https://www.matvaretabellen.no/en/${extra.slug}/`}>Matvaretabellen</a></p>}
    </div>
  );
}
