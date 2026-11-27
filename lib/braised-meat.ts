const csTools = "Těžší hrnec s poklicí, nůž a prkénko.";
const enTools = "Heavy lidded pan, knife and chopping board.";

export const braises = {
  cs: [
    { id: "recept-kyta-na-cibuli", title: "Dušená kýta na cibuli", time: "Asi 1½–2½ hodiny · 2 porce", ingredient: "Hovězí kýta", href: "/stravovani/maso-a-ryby#hovezi-kyta", image: "/guide-raw-beef.webp", alt: "Syrové hovězí maso před přípravou", tools: csTools,
      ingredients: ["350 g hovězí nebo telecí kýty bez kosti", "2 cibule", "1 lžíce oleje", "250 ml vody nebo vývaru, sůl a pepř"],
      steps: ["Kýtu nakrájej napříč vlákny na plátky silné asi 1,5 cm. Osuš, osol a opepři. Na rozpáleném oleji plátky postupně opeč z obou stran a odlož.", "Ztlum ohřev. Cibuli nakrájenou na půlměsíčky opékej v hrnci asi 8 minut dozlatova. Přilij trochu vody, uvolni přípečky a vrať maso.", "Dolij tekutinu asi do poloviny výšky plátků. Přiklop a zvolna dus. Telecí začni kontrolovat po 45 minutách, hovězí po hodině. Podle potřeby dolévej vodu. Až jde maso snadno rozdělit vidličkou, odkryj a nech šťávu krátce zhoustnout."] },
    { id: "recept-kyta-na-cesneku", title: "Jehněčí nebo skopová kýta na česneku", time: "Asi 1½–3 hodiny · 2 porce", ingredient: "Jehněčí kýta", href: "/stravovani/maso-a-ryby#jehneci-kyta", image: "/guide-raw-lamb.webp", alt: "Syrové jehněčí maso před přípravou", tools: csTools,
      ingredients: ["350 g vykostěné jehněčí nebo skopové kýty", "3 stroužky česneku", "1 cibule", "1 lžíce oleje", "250 ml vody nebo vývaru, půl lžičky tymiánu, sůl a pepř"],
      steps: ["Maso nakrájej na kostky široké 3 cm, osušené je osol a opepři. V hrnci je po dávkách opeč na oleji a odlož.", "Na mírném ohni opeč nakrájenou cibuli doměkka. Přidej drcený česnek a tymián, krátce promíchej a podlij. Seškrábni přípečky a vrať maso.", "Pod poklicí zvolna dus, tekutinu průběžně doplňuj. Jehněčí zkus vidličkou po hodině, skopové může potřebovat i přes dvě hodiny. Podávej až jsou kostky měkké, se šťávou a chlebem."] },
  ],
  en: [
    { id: "braised-round-recipe", title: "Round braised with onions", time: "About 1½–2½ hours · 2 servings", ingredient: "Beef round", href: "/en/stravovani/meat-and-fish#beef-round", image: "/guide-raw-beef.webp", alt: "Raw beef before cooking", tools: enTools,
      ingredients: ["350 g boneless beef round or veal leg", "2 onions", "1 tbsp oil", "250 ml water or stock, salt and pepper"],
      steps: ["Slice the meat across the grain about 1.5 cm thick. Pat dry, season and brown on both sides in batches. Set aside.", "Lower the heat. Slice the onions into half-moons and cook for about 8 minutes until golden. Loosen the browned bits with a splash of water, then return the meat.", "Add enough liquid to reach halfway up the slices. Cover and simmer gently, topping up as needed. Start testing veal after 45 minutes and beef after an hour. When fork-tender, uncover and briefly reduce the gravy."] },
    { id: "garlic-leg-recipe", title: "Lamb or mutton leg braised with garlic", time: "About 1½–3 hours · 2 servings", ingredient: "Leg of lamb", href: "/en/stravovani/meat-and-fish#lamb-leg", image: "/guide-raw-lamb.webp", alt: "Raw lamb before cooking", tools: enTools,
      ingredients: ["350 g boneless lamb or mutton leg", "3 garlic cloves", "1 onion", "1 tbsp oil", "250 ml water or stock, half a teaspoon of thyme, salt and pepper"],
      steps: ["Cut the meat into 3 cm cubes. Pat dry, season and brown in batches in the oil. Set aside.", "Soften the chopped onion over low heat. Stir in crushed garlic and thyme, then add a splash of stock. Scrape up the browned bits and return the meat.", "Add the remaining stock, cover and simmer gently, adding water as needed. Start testing lamb after an hour; mutton can take over two hours. Serve when fork-tender, with the pan juices and bread."] },
  ],
};
