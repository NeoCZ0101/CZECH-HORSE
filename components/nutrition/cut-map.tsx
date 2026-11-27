import Image from "next/image";
import { ChevronDown } from "lucide-react";

type Point = [number, number, string, string, string, string];
const cuts: Record<string, Point[]> = {
  pork: [
    [44,26,"Pečeně / kotleta","Loin / chop","Podél páteře. Kotleta je plátek pečeně, často s kostí.","Along the back. A chop is a slice of the loin, often bone-in."],
    [29,43,"Kýta","Leg","Horní část zadní nohy; na plátky nebo pečení.","Upper hind leg; slice or roast."],
    [54,48,"Plec","Shoulder","Nad přední nohou; hodí se k dušení.","Above the front leg; suited to braising."],
    [40,54,"Bok","Belly","Pod pečení, na spodní straně trupu.","Underside of the body, below the loin."],
  ],
  beef: [
    [15,35,"Kýta","Round","Svaly zadní nohy. Na štítku se může objevit jako hovězí zadní.","Upper hind leg; one of several cuts sold as Czech “hovězí zadní”."],
    [29,26,"Nízký roštěnec","Striploin","Hřbet před kýtou. Svíčková leží uvnitř pod bederní páteří.","Back just ahead of the rump. The tenderloin lies inside, under the lumbar spine."],
    [39,45,"Plec","Shoulder","Je vpředu, ale v českém členění patří také mezi zadní maso. „Zadní“ tedy není jeden konkrétní sval.","At the front, yet included in the Czech retail category “zadní”: the term does not identify a single muscle."],
  ],
  lamb: [
    [21,47,"Kýta","Leg","Horní část zadní nohy ovce i jehněte.","Upper hind leg of both adult sheep and lamb."],
    [31,29,"Hřbet","Loin and rack","Horní část trupu; odtud se řežou kotletky.","Upper back, where chops are cut."],
    [39,47,"Plec","Shoulder","Nad přední nohou; vhodná k pomalému dušení.","Above the foreleg; good for slow braising."],
  ],
  poultry: [
    [23,54,"Prsa","Breast","Přední strana hrudníku; vyznačeno na kuřeti.","Front of the chest, marked on the chicken."],
    [53,64,"Stehno","Thigh","Horní část nohy pod křídlem; vyznačeno na krocanovi.","Upper leg below the wing, marked on the turkey."],
    [79,60,"Křídlo","Wing","Složené podél boku; vyznačeno na kachně. Stejné části najdeš i u husy.","Folded against the side of the duck. The same cuts apply to goose."],
  ],
  seafood: [
    [27,49,"Filet","Fillet","Podélně oddělená svalovina z boku ryby, ne příčný řez přes páteř.","A lengthwise side of the fish, not a steak cut across the backbone."],
    [12,52,"Ocasní část","Tail end","Užší konec filetu těsně před ocasní ploutví.","The tapered end just before the tail fin."],
    [27,61,"Břišní část","Belly","Dolní okraj filetu směrem k břichu.","Lower edge of the fillet towards the belly."],
  ],
};

export function CutMap({ animal, alt, language }: { animal: string; alt: string; language: "cs" | "en" }) {
  const cs = language === "cs";
  return <details className="group border-b border-sand bg-white">
    <summary className="cursor-pointer list-none px-3 pt-3 text-forest">
      <span className="relative block">
        <Image src={`/animals-${animal}.webp`} alt={alt} width={960} height={350} sizes="(min-width:1280px) 390px, (min-width:768px) 46vw, 92vw" className="block h-auto w-full" />
        {cuts[animal].map(([x,y],i) => <span key={i} aria-hidden style={{left:x+"%",top:y+"%"}} className="pointer-events-none absolute hidden size-4 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-forest-deep text-[10px] font-bold text-white ring-1 ring-white group-open:grid">{i+1}</span>)}
      </span>
      <span className="flex min-h-11 items-center justify-between text-sm font-semibold">{cs ? "Kde najdu který řez?" : "Where is each cut?"}<ChevronDown size={16} aria-hidden className="group-open:rotate-180" /></span>
    </summary>
    <ol className="mx-4 list-decimal space-y-2 border-t border-sand py-3 pl-5 text-sm">{cuts[animal].map((row,i) => <li key={i}><strong>{row[cs?2:3]}</strong>: {row[cs?4:5]}</li>)}</ol>
    {["beef","pork","lamb"].includes(animal) && <a className="mx-4 mb-3 block text-xs text-forest underline" href="https://mze.gov.cz/public/portal/mze/legislativa/vap85945-5433">{cs ? "Názvosloví řezů: MZe" : "Czech cut names: Ministry of Agriculture"}</a>}
  </details>;
}
