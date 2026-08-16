"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState, type FormEvent } from "react";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  Brain,
  BriefcaseBusiness,
  Calculator,
  ChevronDown,
  Circle,
  CircleDollarSign,
  CircleDot,
  CloudLightning,
  HeartHandshake,
  Landmark,
  MapPin,
  MessageCircle,
  MessageSquareText,
  ReceiptText,
  Route,
  Scissors,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Smile,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  UserRoundCheck,
  UsersRound,
  Utensils,
  WalletCards,
  Waypoints,
} from "lucide-react";
import { ScrollReveal } from "@/components/home/scroll-reveal";
import { SectionHeading } from "@/components/sections/section-heading";

type Pillar = "body" | "mind" | "finance" | "bridge";

type Area = {
  id: string;
  pillar: Pillar;
  title: string;
  shortTitle: string;
  description: string;
  topics: string[];
};

const bodyAreas: Area[] = [
  {
    id: "hair-and-beard",
    pillar: "body",
    title: "Hair and beard",
    shortTitle: "Hair and beard",
    description: "Find a cut and routine that suit your face, hair, age and everyday life.",
    topics: ["haircut", "hair condition", "beard", "routine", "barber or stylist"],
  },
  {
    id: "skin-and-care",
    pillar: "body",
    title: "Skin and care",
    shortTitle: "Skin and care",
    description: "Understand what your skin actually needs without building an unnecessarily complicated routine.",
    topics: ["basic routine", "acne", "irritation", "shaving", "services and products"],
  },
  {
    id: "movement-and-fitness",
    pillar: "body",
    title: "Body, movement and fitness",
    shortTitle: "Movement and fitness",
    description: "Improve how your body functions from your real starting point, with sleep and recovery supporting the work.",
    topics: ["strength", "fitness", "muscle", "mobility", "posture", "sleep and recovery", "pain"],
  },
  {
    id: "food-and-nutrition",
    pillar: "body",
    title: "Food and nutrition",
    shortTitle: "Food and nutrition",
    description: "Build an approach to food that matches your goal, budget and ordinary life.",
    topics: ["daily eating", "fat loss", "gaining", "energy", "nutrition support"],
  },
  {
    id: "teeth-and-smile",
    pillar: "body",
    title: "Teeth and smile",
    shortTitle: "Teeth and smile",
    description: "Address the health and appearance of your teeth before a small problem turns into an expensive complication.",
    topics: ["dental care", "hygiene", "appearance", "prevention", "finding a dentist"],
  },
];

const mindAreas: Area[] = [
  {
    id: "mental-wellbeing",
    pillar: "mind",
    title: "Mental wellbeing",
    shortTitle: "Mental wellbeing",
    description: "Understand what is happening, what you can start changing yourself and when professional support makes sense.",
    topics: ["low mood", "stress", "overload", "anxiety", "inner pressure"],
  },
  {
    id: "communication",
    pillar: "mind",
    title: "Communication",
    shortTitle: "Communication",
    description: "Say what you think and need without performing a role you do not believe in.",
    topics: ["speaking up", "listening", "conversation nerves", "difficult talks"],
  },
  {
    id: "confidence-and-presence",
    pillar: "mind",
    title: "Confidence and presence",
    shortTitle: "Confidence",
    description: "This is not about being the loudest person in the room. It is about showing up with more calm and certainty.",
    topics: ["presence", "voice", "body language", "self-doubt", "standing your ground"],
  },
  {
    id: "relationships-and-boundaries",
    pillar: "mind",
    title: "Relationships and boundaries",
    shortTitle: "Relationships and boundaries",
    description: "Tell a healthy compromise from the places where you repeatedly give up too much of yourself.",
    topics: ["boundaries", "conflict", "rejection", "relationships", "saying no"],
  },
  {
    id: "connection-and-loneliness",
    pillar: "mind",
    title: "Connection and loneliness",
    shortTitle: "Connection and loneliness",
    description: "Find your way towards people without manipulation or pretending to be someone else.",
    topics: ["withdrawing", "meeting people", "building connection", "loneliness"],
  },
  {
    id: "emotion-and-pressure",
    pillar: "mind",
    title: "Emotions and pressure",
    shortTitle: "Emotions and pressure",
    description: "Recognise your responses earlier and learn to work with them before they start directing your behaviour.",
    topics: ["anger", "frustration", "fear", "overwhelm", "pressure responses"],
  },
];

const financeAreas: Area[] = [
  {
    id: "budget-and-calculator",
    pillar: "finance",
    title: "Budget and calculator",
    shortTitle: "Budget and calculator",
    description: "Make a simple picture of what comes in, what goes out and what remains each month.",
    topics: ["income", "spending", "monthly view", "calculator"],
  },
  {
    id: "home-and-mortgage",
    pillar: "finance",
    title: "Home and mortgage",
    shortTitle: "Home and mortgage",
    description: "Get clear on housing costs, mortgages, rent and the recurring commitments around them.",
    topics: ["rent", "mortgage", "utilities", "housing reserve"],
  },
  {
    id: "insurance-and-protection",
    pillar: "finance",
    title: "Insurance and protection",
    shortTitle: "Insurance and protection",
    description: "Decide what is worth protecting and which risks are worth addressing without collecting unnecessary products.",
    topics: ["insurance", "risk", "family", "property"],
  },
  {
    id: "work-and-income",
    pillar: "finance",
    title: "Work and income",
    shortTitle: "Work and income",
    description: "Connect your work direction, the value of your work and income stability with the life you want to build.",
    topics: ["employment", "income", "career change", "negotiation"],
  },
  {
    id: "learning-and-growth",
    pillar: "finance",
    title: "Learning and growth",
    shortTitle: "Learning and growth",
    description: "Choose courses, skills and next steps for their real value, not because they promise a fast result.",
    topics: ["courses", "skills", "career", "long-term growth"],
  },
];

const firstJourney = [
  { title: "Starting point", text: "Describe what is limiting David today and what he wants to change first." },
  { title: "What is being worked on", text: "Choose one area and separate assumptions from a concrete problem." },
  { title: "Services visited", text: "Record the process, cost, communication and who the service could suit." },
  { title: "Experience", text: "Compare expectation with reality and say what was useful and what was not." },
  { title: "Results", text: "Observe change over time without promising a universal or instant result." },
  { title: "Next step", text: "Move to the next area based on what turns out to matter." },
];

const processSteps = [
  { number: "01", title: "Describe what you are dealing with.", text: "Start with your real situation, not a professional label." },
  { number: "02", title: "Understand the options.", text: "Separate what you can explore yourself from where support makes sense." },
  { number: "03", title: "Find an appropriate service or expert.", text: "Once you know what you are looking for, you can compare real options." },
  { number: "04", title: "Learn from experience and track the result.", text: "Real context matters more than advertising promises." },
];

const currentFocus = [
  { title: "A practical haircut and hair routine", pillar: "Body", status: "In progress" },
  { title: "A basic skin-care routine", pillar: "Body", status: "Preparing" },
  { title: "Starting point for movement and fitness", pillar: "Body", status: "In progress" },
  { title: "A workable food routine", pillar: "Body", status: "Preparing" },
  { title: "Teeth and dental care", pillar: "Body", status: "Looking for an expert" },
  { title: "Mental wellbeing", pillar: "Mind", status: "Preparing" },
  { title: "Communication and presence", pillar: "Mind", status: "In progress" },
  { title: "A monthly budget overview", pillar: "Finance", status: "In progress" },
];

const processIcons = [Search, SlidersHorizontal, UserRoundCheck, Waypoints];

function AreaIcon({ area, size }: { area: Area; size: number }) {
  const props = { "aria-hidden": true, size };

  if (area.id === "hair-and-beard") return <Scissors {...props} />;
  if (area.id === "skin-and-care") return <Sparkles {...props} />;
  if (area.id === "movement-and-fitness") return <Activity {...props} />;
  if (area.id === "food-and-nutrition") return <Utensils {...props} />;
  if (area.id === "teeth-and-smile") return <Smile {...props} />;
  if (area.id === "mental-wellbeing" || area.id === "relationships-and-boundaries") return <HeartHandshake {...props} />;
  if (area.id === "communication") return <MessageCircle {...props} />;
  if (area.id === "connection-and-loneliness") return <UsersRound {...props} />;
  if (area.id === "emotion-and-pressure") return <CloudLightning {...props} />;
  if (area.id === "budget-and-calculator") return <ReceiptText {...props} />;
  if (area.id === "home-and-mortgage") return <Landmark {...props} />;
  if (area.id === "insurance-and-protection") return <ShieldCheck {...props} />;
  if (area.id === "work-and-income") return <CircleDollarSign {...props} />;
  if (area.id === "learning-and-growth") return <Target {...props} />;
  return <CircleDot {...props} />;
}

function parseAmount(value: string) {
  const normalised = value.replace(/\s/g, "").replace(",", ".").replace(/[^0-9.-]/g, "");
  return Number.parseFloat(normalised) || 0;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(value);
}

function FinanceCalculatorEn() {
  const [income, setIncome] = useState("");
  const [fixedCosts, setFixedCosts] = useState("");
  const [variableCosts, setVariableCosts] = useState("");
  const summary = useMemo(() => {
    const totalIncome = parseAmount(income);
    const totalCosts = parseAmount(fixedCosts) + parseAmount(variableCosts);
    const balance = totalIncome - totalCosts;
    return {
      balance,
      balanceShare: totalIncome > 0 ? Math.round((balance / totalIncome) * 100) : 0,
      hasValues: totalIncome > 0 || totalCosts > 0,
    };
  }, [income, fixedCosts, variableCosts]);
  const positiveBalance = summary.balance >= 0;

  return (
    <div className="flex flex-1 flex-col px-5 py-5 sm:px-7 sm:py-6">
      <div className="flex items-center gap-2 text-amber">
        <Calculator aria-hidden size={18} />
        <p className="text-xs font-semibold tracking-[0.12em]">MONTHLY OVERVIEW</p>
      </div>
      <div className="mt-5 grid gap-3">
        <label className="grid gap-1.5 text-xs font-semibold text-cream/80">
          Monthly net income
          <span className="relative">
            <input value={income} onChange={(event) => setIncome(event.target.value)} type="text" inputMode="decimal" placeholder="e.g. 38,000" aria-label="Monthly net income in Czech crowns" className="min-h-11 w-full border border-cream/25 bg-cream/10 px-3 pr-12 text-sm font-medium text-cream outline-none transition placeholder:text-cream/45 focus:border-amber focus:bg-cream/15" />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-cream/60">CZK</span>
          </span>
        </label>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="grid gap-1.5 text-xs font-semibold text-cream/80">
            Fixed costs
            <span className="relative">
              <input value={fixedCosts} onChange={(event) => setFixedCosts(event.target.value)} type="text" inputMode="decimal" placeholder="housing, repayments" aria-label="Fixed monthly costs in Czech crowns" className="min-h-11 w-full border border-cream/25 bg-cream/10 px-3 pr-12 text-sm font-medium text-cream outline-none transition placeholder:text-cream/45 focus:border-amber focus:bg-cream/15" />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-cream/60">CZK</span>
            </span>
          </label>
          <label className="grid gap-1.5 text-xs font-semibold text-cream/80">
            Everyday spending
            <span className="relative">
              <input value={variableCosts} onChange={(event) => setVariableCosts(event.target.value)} type="text" inputMode="decimal" placeholder="food, travel" aria-label="Everyday monthly spending in Czech crowns" className="min-h-11 w-full border border-cream/25 bg-cream/10 px-3 pr-12 text-sm font-medium text-cream outline-none transition placeholder:text-cream/45 focus:border-amber focus:bg-cream/15" />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-cream/60">CZK</span>
            </span>
          </label>
        </div>
      </div>
      <div className="mt-5 border-y border-cream/20 py-4" aria-live="polite">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.12em] text-amber">REMAINING AFTER COSTS</p>
            <p className="mt-2 font-display text-3xl font-semibold text-cream">{formatCurrency(summary.balance)}</p>
          </div>
          <span className={positiveBalance ? "grid h-10 w-10 place-items-center rounded-full bg-olive/30 text-amber" : "grid h-10 w-10 place-items-center rounded-full bg-terracotta/30 text-cream"}>
            {positiveBalance ? <TrendingUp aria-hidden size={20} /> : <TrendingDown aria-hidden size={20} />}
          </span>
        </div>
        <p className="mt-2 text-xs leading-5 text-cream/65">{summary.hasValues ? `${summary.balanceShare}% of the income you entered.` : "Enter income and costs for a first, simple overview."}</p>
      </div>
      <div className="mt-4 flex items-start gap-2 text-xs leading-5 text-cream/60">
        <WalletCards className="mt-0.5 shrink-0 text-amber" aria-hidden size={15} />
        <p>This is not financial or investment advice. It is simply a useful place to begin.</p>
      </div>
    </div>
  );
}

function AreaNode({ area, active, onSelect }: { area: Area; active: boolean; onSelect: (area: Area) => void }) {
  const router = useRouter();
  const tone = area.pillar === "mind"
    ? active ? "border-petrol bg-petrol text-cream" : "border-petrol/25 bg-surface text-ink hover:border-petrol hover:bg-petrol/10"
    : area.pillar === "finance"
      ? active ? "border-terracotta bg-terracotta text-cream" : "border-terracotta/40 bg-surface text-ink hover:border-terracotta hover:bg-terracotta/10"
      : active ? "border-olive bg-olive text-cream" : "border-olive/35 bg-surface text-ink hover:border-olive hover:bg-olive/10";
  const iconTone = active ? "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cream/15" : area.pillar === "mind" ? "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-petrol/10 text-petrol" : area.pillar === "finance" ? "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-terracotta/10 text-terracotta" : "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-olive/15 text-olive";

  return (
    <button type="button" aria-pressed={active} onClick={() => area.id === "food-and-nutrition" ? router.push("/en/stravovani") : onSelect(area)} onFocus={() => onSelect(area)} onMouseEnter={() => onSelect(area)} className={`flex min-h-[5.4rem] w-full items-center gap-3 rounded-[6px] border p-3 text-left transition duration-200 ${tone}`}>
      <span className={iconTone}><AreaIcon area={area} size={18} /></span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold leading-5">{area.shortTitle}</span>
        <span className={active ? "mt-1 block text-xs leading-4 text-cream/75" : "mt-1 block text-xs leading-4 text-muted"}>{area.topics.slice(0, 2).join(" · ")}</span>
      </span>
    </button>
  );
}

function EnglishMap() {
  const [activeArea, setActiveArea] = useState<Area>(bodyAreas[0]);
  const isMind = activeArea.pillar === "mind";
  const isFinance = activeArea.pillar === "finance";
  const isBridge = activeArea.pillar === "bridge";
  const label = isFinance ? "Finance" : isBridge ? "Between body and mind" : isMind ? "Mind" : "Body";
  const iconTone = isFinance || isBridge ? "grid h-12 w-12 place-items-center rounded-full bg-terracotta/10 text-terracotta" : isMind ? "grid h-12 w-12 place-items-center rounded-full bg-petrol/10 text-petrol" : "grid h-12 w-12 place-items-center rounded-full bg-olive/15 text-olive";
  const labelTone = isFinance || isBridge ? "text-sm font-semibold text-terracotta" : isMind ? "text-sm font-semibold text-petrol" : "text-sm font-semibold text-olive";

  return (
    <section id="mapa-cloveka" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col gap-6 border-b border-sand pb-10 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow="The whole-person map" title="Start with the area you recognise in yourself." description="Body, mind and money all shape how a person functions each day. Every area offers a starting point and a clearer view of what may be connected." />
            <p className="max-w-xs text-sm leading-6 text-muted">On desktop, choose an area from one of the three columns. On mobile, the map becomes a clear, expandable list.</p>
          </div>
        </ScrollReveal>

        <div className="mt-10 hidden lg:block">
          <div className="grid items-start gap-5 lg:grid-cols-3 xl:gap-6">
            <div>
              <div className="min-h-[4.75rem] border-l-2 border-olive pl-4"><p className="text-lg font-semibold text-forest-deep">BODY</p><p className="mt-1 text-sm leading-5 text-muted">How I look and how I physically function.</p></div>
              <div className="mt-5 grid gap-3">{bodyAreas.map((area) => <AreaNode key={area.id} area={area} active={activeArea.id === area.id} onSelect={setActiveArea} />)}</div>
            </div>
            <div>
              <div className="min-h-[4.75rem] border-l-2 border-petrol pl-4"><p className="text-lg font-semibold text-forest-deep">MIND</p><p className="mt-1 text-sm leading-5 text-muted">How I feel, think and show up around other people.</p></div>
              <div className="mt-5 grid gap-3">{mindAreas.map((area) => <AreaNode key={area.id} area={area} active={activeArea.id === area.id} onSelect={setActiveArea} />)}</div>
            </div>
            <div>
              <div className="min-h-[4.75rem] border-l-2 border-terracotta pl-4"><p className="text-lg font-semibold text-forest-deep">FINANCE</p><p className="mt-1 text-sm leading-5 text-muted">How I stay clear, earn and choose what to build towards.</p></div>
              <div className="mt-5 grid gap-3">{financeAreas.map((area) => <AreaNode key={area.id} area={area} active={activeArea.id === area.id} onSelect={setActiveArea} />)}</div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 rounded-[8px] border border-sand bg-surface p-6 md:grid-cols-[auto_1fr] md:items-start">
            <span className={iconTone}><AreaIcon area={activeArea} size={22} /></span>
            <div aria-live="polite">
              <p className={labelTone}>{label}</p>
              <h3 className="mt-1 font-display text-2xl font-semibold text-ink">{activeArea.title}</h3>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{activeArea.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">{activeArea.topics.map((topic) => <span key={topic} className="border border-sand bg-cream px-2.5 py-1 text-xs text-ink">{topic}</span>)}</div>
              <Link href={activeArea.id === "food-and-nutrition" ? "/en/stravovani" : isFinance ? "#finance-kalkulacka" : "#start-here"} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest transition hover:text-terracotta">
                {activeArea.id === "food-and-nutrition" ? "Open the food planner" : isFinance ? "Open the financial overview" : "Describe your situation"}<ArrowRight aria-hidden size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:hidden">
          {[{ title: "BODY", description: "How I look and how I physically function.", areas: bodyAreas, tone: "olive" }, { title: "MIND", description: "How I feel, think and show up around other people.", areas: mindAreas, tone: "petrol" }, { title: "FINANCE", description: "How I stay clear, earn and choose what to build towards.", areas: financeAreas, tone: "terracotta" }].map((group) => (
            <div key={group.title}>
              <p className={`text-sm font-semibold text-${group.tone}`}>{group.title}</p>
              <p className="mt-1 text-sm leading-6 text-muted">{group.description}</p>
              <div className="mt-4 border-y border-sand">
                {group.areas.map((area) => (
                  <details key={area.id} className="group border-b border-sand last:border-b-0">
                    <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-3 py-3 text-left marker:content-none">
                      <span className="flex min-w-0 items-center gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-surface text-forest"><AreaIcon area={area} size={18} /></span><span className="text-sm font-semibold text-ink">{area.title}</span></span>
                      <ChevronDown className="shrink-0 text-muted transition duration-200 group-open:rotate-180" aria-hidden size={18} />
                    </summary>
                    <div className="pb-5 pl-12"><p className="text-sm leading-6 text-muted">{area.description}</p><p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-muted">Topics</p><p className="mt-1 text-sm leading-6 text-ink">{area.topics.join(" · ")}</p></div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CurrentFocusEn() {
  function statusClass(status: string) {
    if (status === "In progress") return "border-olive/40 bg-olive/10 text-forest-deep";
    if (status === "Looking for an expert") return "border-terracotta/40 bg-terracotta/10 text-terracotta";
    return "border-sand bg-surface text-muted";
  }

  return (
    <section id="current-focus" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal><div className="flex flex-col gap-6 border-b border-sand pb-9 md:flex-row md:items-end md:justify-between"><SectionHeading eyebrow="Areas in progress" title="The content starts with concrete work." description="This is a working overview of what will gradually be expanded with experience, service comparisons and verified context." /><p className="max-w-xs text-sm leading-6 text-muted">These statuses are a structure for future content. They do not promise results or partner availability.</p></div></ScrollReveal>
        <ScrollReveal className="mt-8"><ul className="grid border-t border-sand md:grid-cols-2 md:divide-x md:divide-sand">{currentFocus.map((area, index) => <li key={area.title} className={`flex min-w-0 items-center justify-between gap-4 border-b border-sand py-5 ${index % 2 === 0 ? "md:pr-6" : "md:pl-6"}`}><div className="min-w-0"><p className={area.pillar === "Mind" ? "text-xs font-semibold uppercase tracking-[0.1em] text-petrol" : area.pillar === "Finance" ? "text-xs font-semibold uppercase tracking-[0.1em] text-terracotta" : "text-xs font-semibold uppercase tracking-[0.1em] text-olive"}>{area.pillar}</p><h3 className="mt-1 text-base font-semibold text-ink">{area.title}</h3></div><span className={`inline-flex shrink-0 items-center gap-1.5 border px-2.5 py-1.5 text-xs font-semibold ${statusClass(area.status)}`}><Circle aria-hidden size={7} fill="currentColor" />{area.status}</span></li>)}</ul></ScrollReveal>
      </div>
    </section>
  );
}

function StartHereEn() {
  type Choice = "body" | "mind" | "finance" | "unknown";
  const [pillar, setPillar] = useState<Choice>("unknown");
  const [area, setArea] = useState("");
  const [intent, setIntent] = useState("Information");
  const [submitted, setSubmitted] = useState(false);
  const allAreas = [...bodyAreas, ...mindAreas, ...financeAreas];
  const availableAreas = allAreas.filter((item) => pillar === "unknown" || item.pillar === pillar || item.pillar === "bridge");
  const selectedArea = allAreas.find((item) => item.id === area)?.title;
  const pillarOptions: Array<{ value: Choice; label: string; description: string }> = [
    { value: "body", label: "Body", description: "Appearance, care, movement, food or health." },
    { value: "mind", label: "Mind", description: "Wellbeing, relationships, communication or pressure." },
    { value: "finance", label: "Finance", description: "Budget, work, housing or financial decisions." },
    { value: "unknown", label: "Not sure", description: "More than one area may be involved." },
  ];

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="start-here" className="bg-mist py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(24rem,1fr)] lg:items-start lg:px-8">
        <ScrollReveal><p className="text-sm font-semibold text-terracotta">First orientation</p><h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">What are you working on?</h2><p className="mt-5 max-w-xl text-base leading-7 text-muted">Describe the situation in your own words. Later, the platform will use a similar starting point to help orient people towards useful options, experience and the right kind of support.</p><div className="mt-8 flex items-start gap-3 border-t border-forest/15 pt-6 text-sm leading-6 text-muted"><MessageSquareText className="mt-0.5 shrink-0 text-forest" aria-hidden size={19} /><p>This form is not a medical or psychological diagnosis. For acute or serious concerns, contact an appropriate professional or health service directly.</p></div></ScrollReveal>
        <ScrollReveal>
          <form onSubmit={submit} className="border border-sand bg-surface p-5 shadow-[0_18px_42px_rgba(37,40,33,0.08)] sm:p-7">
            <fieldset><legend className="text-sm font-semibold text-ink">Where do you feel it most right now?</legend><div className="mt-3 grid gap-2 sm:grid-cols-2">{pillarOptions.map((option) => { const selected = pillar === option.value; return <label key={option.value} className={`cursor-pointer border p-3 transition duration-200 ${selected ? "border-forest bg-forest text-cream" : "border-sand bg-cream text-ink hover:border-forest/60"}`}><input className="sr-only" type="radio" name="pillar" value={option.value} checked={selected} onChange={() => { setPillar(option.value); setArea(""); setSubmitted(false); }} /><span className="block text-sm font-semibold">{option.label}</span><span className={selected ? "mt-1 block text-xs leading-4 text-cream/75" : "mt-1 block text-xs leading-4 text-muted"}>{option.description}</span></label>; })}</div></fieldset>
            <div className="mt-6 grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-semibold text-ink">Specific area<select required value={area} onChange={(event) => { setArea(event.target.value); setSubmitted(false); }} className="min-h-11 border border-sand bg-cream px-3 text-sm font-normal text-ink outline-none transition focus:border-forest"><option value="">Choose an area</option>{availableAreas.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}</select></label><label className="grid gap-2 text-sm font-semibold text-ink">Location<span className="relative"><MapPin className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" aria-hidden size={17} /><input required name="location" placeholder="City or online" className="min-h-11 w-full border border-sand bg-cream py-2 pl-9 pr-3 text-sm font-normal text-ink outline-none transition placeholder:text-muted focus:border-forest" /></span></label></div>
            <label className="mt-5 grid gap-2 text-sm font-semibold text-ink">Describe the situation briefly<textarea required name="description" rows={5} placeholder="What is making ordinary life harder at the moment?" className="resize-y border border-sand bg-cream px-3 py-2.5 text-sm font-normal leading-6 text-ink outline-none transition placeholder:text-muted focus:border-forest" /></label>
            <fieldset className="mt-5"><legend className="text-sm font-semibold text-ink">What are you looking for?</legend><div className="mt-3 flex flex-wrap gap-2">{["Information", "Experience", "An expert"].map((option) => { const selected = intent === option; return <label key={option} className={`cursor-pointer border px-3 py-2 text-sm font-medium transition duration-200 ${selected ? "border-petrol bg-petrol text-cream" : "border-sand bg-cream text-ink hover:border-petrol/60"}`}><input className="sr-only" type="radio" name="intent" value={option} checked={selected} onChange={() => { setIntent(option); setSubmitted(false); }} />{option}</label>; })}</div></fieldset>
            <label className="mt-5 grid gap-2 text-sm font-semibold text-ink">Email <span className="font-normal text-muted">(optional)</span><input type="email" name="email" autoComplete="email" placeholder="you@email.com" className="min-h-11 border border-sand bg-cream px-3 text-sm font-normal text-ink outline-none transition placeholder:text-muted focus:border-forest" /></label>
            <button type="submit" className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[6px] bg-forest px-5 py-3 text-sm font-semibold text-cream transition duration-200 hover:-translate-y-0.5 hover:bg-forest-deep">Describe your situation<ArrowRight aria-hidden size={18} /></button>
            {submitted ? <p role="status" className="mt-4 border-l-2 border-petrol bg-petrol/10 px-3 py-3 text-sm leading-6 text-ink">Your draft is ready: {selectedArea ?? "the selected area"}; you are looking for {intent.toLowerCase()}. In this prototype, nothing is sent anywhere. The form is ready for a future connection.</p> : null}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function EnglishHome() {
  return (
    <main>
      <section className="border-b border-sand bg-surface text-ink">
        <h1 className="sr-only">Vlastní směr: body, mind and finance</h1>
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
          <div className="mb-5 flex items-center justify-between gap-4 border-b border-sand pb-4 text-xs font-semibold tracking-[0.14em] text-forest sm:mb-7 sm:pb-5"><span>THREE FOUNDATIONS</span><span className="text-muted">Choose where to begin.</span></div>
          <div className="grid overflow-hidden border border-sand lg:grid-cols-[1.16fr_0.84fr] xl:grid-cols-[1.1fr_0.8fr_0.9fr]">
            <section className="bg-cream" aria-labelledby="english-body-title"><div className="flex flex-col gap-4 border-b border-sand px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-7 sm:py-6"><div><p className="text-xs font-semibold tracking-[0.14em] text-olive">BODY</p><h2 id="english-body-title" className="mt-2 font-display text-3xl font-semibold leading-tight text-forest-deep sm:text-4xl">Movement. Skin. Hair. Beard.</h2></div><Link href="#mapa-cloveka" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-forest transition hover:text-terracotta">Explore the body<ArrowRight aria-hidden size={17} /></Link></div><div className="grid min-h-[31rem] grid-cols-[1.06fr_0.94fr] sm:min-h-[35rem]"><figure className="relative min-h-[31rem] border-r border-sand sm:min-h-[35rem]"><Image src="/hero-body-movement.png" alt="A man doing calm morning movement and stretching at home." fill priority sizes="(min-width: 1280px) 35vw, (min-width: 1024px) 58vw, 58vw" className="object-cover" /><figcaption className="absolute bottom-0 left-0 right-0 bg-cream/95 px-4 py-3 text-sm font-medium text-ink">Function well in ordinary life.</figcaption></figure><div className="grid min-h-[31rem] grid-rows-[1.1fr_0.9fr] sm:min-h-[35rem]"><figure className="relative min-h-[18rem] border-b border-sand sm:min-h-[21rem]"><Image src="/hero-grooming.png" alt="A man with naturally groomed hair, beard and healthy-looking skin." fill sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 28vw, 42vw" className="object-cover" /></figure><div className="flex min-h-[13rem] flex-col justify-between bg-mist px-4 py-4 sm:min-h-[14rem] sm:px-5 sm:py-5"><div className="flex items-center gap-2 text-olive"><Scissors aria-hidden size={17} /><Sparkles aria-hidden size={17} /></div><p className="mt-5 text-sm leading-6 text-ink">Care that fits your face, hair and the rhythm of your life.</p></div></div></div></section>
            <section className="flex min-h-[39rem] flex-col bg-forest-deep text-cream sm:min-h-[44rem]" aria-labelledby="english-mind-title"><div className="flex flex-col gap-4 border-b border-cream/20 px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-7 sm:py-6"><div><p className="text-xs font-semibold tracking-[0.14em] text-sage">MIND</p><h2 id="english-mind-title" className="mt-2 font-display text-3xl font-semibold leading-tight sm:text-4xl">Calm. Connection. Confidence.</h2></div><Link href="#mapa-cloveka" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-cream transition hover:text-amber">Explore the mind<ArrowRight aria-hidden size={17} /></Link></div><figure className="relative min-h-[25rem] flex-1 border-b border-cream/20 sm:min-h-[29rem]"><Image src="/hero-psychology.png" alt="A man in a calm, open conversation." fill sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 42vw, 92vw" className="object-cover" /></figure><div className="grid gap-4 px-5 py-5 sm:grid-cols-[auto_1fr] sm:px-7 sm:py-6"><Brain className="text-amber" aria-hidden size={22} /><p className="text-sm leading-6 text-cream/75">Function with more calm around people, in relationships and when life gets too heavy.</p></div></section>
            <section id="finance-kalkulacka" className="flex min-h-[39rem] flex-col border-t border-sand bg-petrol text-cream sm:min-h-[44rem] lg:col-span-2 xl:col-span-1 xl:border-l xl:border-t-0" aria-labelledby="english-finance-title"><div className="flex flex-col gap-4 border-b border-cream/20 px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-7 sm:py-6"><div><div className="flex items-center gap-2 text-amber"><WalletCards aria-hidden size={17} /><p className="text-xs font-semibold tracking-[0.14em]">FINANCE</p></div><h2 id="english-finance-title" className="mt-2 font-display text-3xl font-semibold leading-tight sm:text-4xl">Clarity. Reserve. Calm.</h2></div><Link href="#mapa-cloveka" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-cream transition hover:text-amber">Explore finance<ArrowRight aria-hidden size={17} /></Link></div><FinanceCalculatorEn /></section>
          </div>
          <Link href="#mapa-cloveka" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest transition hover:text-terracotta sm:mt-7">View the whole map<ArrowDownRight aria-hidden size={18} /></Link>
        </div>
      </section>

      <EnglishMap />

      <section id="david-journey" className="bg-mist py-20 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><ScrollReveal><div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,0.62fr)] lg:items-end"><SectionHeading eyebrow="The first field journey" title="We do not start with theory. We start with real work." description="David is building the first journey. He is working through appearance, physical condition, mental wellbeing and communication. He tries services, speaks to experts and records what genuinely helps, what it costs and who it may be useful for." /><div className="border-l-2 border-terracotta pl-4 text-sm leading-6 text-muted">This is not a universal manual or a claim that one experience is right for everyone. It is the first case from which a useful way to assess services and experts can grow.</div></div></ScrollReveal><ScrollReveal className="mt-12"><div className="flex items-center gap-2 text-sm font-semibold text-forest"><Route aria-hidden size={18} />A working record in progress, not a personal influencer profile.</div><ol className="relative mt-6 grid gap-x-6 gap-y-8 border-t border-forest/20 pt-6 sm:grid-cols-2 xl:grid-cols-6">{firstJourney.map((milestone, index) => <li key={milestone.title} className="relative min-w-0"><span className="absolute -top-[31px] left-0 h-3 w-3 rounded-full border-2 border-mist bg-terracotta" aria-hidden="true" /><p className="text-xs font-semibold tracking-[0.12em] text-terracotta">0{index + 1}</p><h3 className="mt-2 text-base font-semibold text-ink">{milestone.title}</h3><p className="mt-2 text-sm leading-6 text-muted">{milestone.text}</p></li>)}</ol><Link href="#current-focus" className="mt-10 inline-flex min-h-11 items-center gap-2 rounded-[6px] bg-forest px-5 py-3 text-sm font-semibold text-cream transition duration-200 hover:-translate-y-0.5 hover:bg-forest-deep">Follow the first journey<ArrowRight aria-hidden size={17} /></Link></ScrollReveal></div></section>

      <section id="how-it-works" className="bg-surface py-20 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><ScrollReveal><SectionHeading eyebrow="How the platform works" title="First, we need to understand the problem." description="Only then does it make sense to look for a specific service or person." /></ScrollReveal><ScrollReveal className="mt-12"><ol className="relative grid gap-8 md:grid-cols-4 md:gap-6"><span className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-sand md:block" aria-hidden="true" />{processSteps.map((step, index) => { const Icon = processIcons[index]; return <li key={step.number} className="relative min-w-0"><span className="relative grid h-12 w-12 place-items-center rounded-full border border-sand bg-cream text-forest shadow-[0_6px_18px_rgba(23,63,53,0.08)]"><Icon aria-hidden size={20} /></span><p className="mt-5 text-xs font-semibold tracking-[0.12em] text-terracotta">{step.number}</p><h3 className="mt-2 text-lg font-semibold leading-6 text-ink">{step.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{step.text}</p></li>; })}</ol></ScrollReveal></div></section>

      <CurrentFocusEn />
      <StartHereEn />

      <section id="for-experts" className="bg-forest-deep py-16 text-cream sm:py-20"><div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:px-8"><ScrollReveal><div className="inline-flex items-center gap-2 text-sm font-semibold text-sand"><BriefcaseBusiness aria-hidden size={18} />For future partners</div><h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl">Do you work with men in one of these areas?</h2><p className="mt-4 max-w-3xl text-base leading-7 text-cream/70">We are looking for experts who know their work, communicate openly and want to help build a platform based on real experience rather than advertising claims.</p></ScrollReveal><ScrollReveal><Link href="#start-here" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-cream px-6 py-3 text-sm font-semibold text-forest-deep transition duration-200 hover:-translate-y-0.5 hover:bg-sand">Introduce your work<ArrowRight aria-hidden size={18} /></Link></ScrollReveal></div></section>

      <section id="platform-boundaries" className="bg-surface py-12 sm:py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><ScrollReveal><div className="grid gap-6 border-l-4 border-terracotta bg-cream px-5 py-6 sm:px-7 md:grid-cols-[auto_1fr] md:items-start"><span className="grid h-11 w-11 place-items-center rounded-full bg-terracotta/10 text-terracotta"><ShieldCheck aria-hidden size={21} /></span><div><h2 className="text-lg font-semibold text-ink">Platform boundaries</h2><ul className="mt-3 grid gap-2 text-sm leading-6 text-muted sm:grid-cols-2 sm:gap-x-8"><li>The platform does not provide medical diagnoses.</li><li>It does not replace a doctor, psychologist or another qualified professional.</li><li>Individual experience is not a universal instruction.</li><li>The aim is orientation, transparency and a connection to suitable support.</li></ul></div></div></ScrollReveal></div></section>
    </main>
  );
}
