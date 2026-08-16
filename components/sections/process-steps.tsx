const processSteps = [
  {
    number: "01",
    title: "Vybereš, co řešíš",
    text: "Nemusíš znát správný obor ani název svého problému. Stačí začít tím, co ti v životě přestalo sedět."
  },
  {
    number: "02",
    title: "Uděláš si jasno",
    text: "Oddělíš vlastní potřeby od očekávání okolí a zjistíš, kde můžeš začít něco skutečně měnit."
  },
  {
    number: "03",
    title: "Zvolíš další krok",
    text: "Můžeš pokračovat sám, projít připravenou cestu nebo navázat na člověka, skupinu či službu, která ti dává smysl."
  }
];

export function ProcessSteps() {
  return (
    <div
      id="jak-platforma-funguje"
      className="overflow-hidden rounded-[6px] border border-sand bg-surface shadow-[0_18px_50px_rgba(37,40,33,0.12)]"
    >
      <ol className="grid md:grid-cols-3">
        {processSteps.map((step, index) => (
          <li
            key={step.number}
            className={[
              "min-w-0 p-5 sm:p-6",
              index > 0 ? "border-t border-sand md:border-l md:border-t-0" : "",
              index === 2 ? "bg-forest text-cream" : ""
            ].join(" ")}
          >
            <div className="flex items-baseline gap-3">
              <span className="font-display text-2xl font-semibold text-terracotta">{step.number}</span>
              <h2 className={index === 2 ? "text-lg font-semibold text-cream" : "text-lg font-semibold text-ink"}>
                {step.title}
              </h2>
            </div>
            <p className={index === 2 ? "mt-3 text-sm leading-6 text-cream/75" : "mt-3 text-sm leading-6 text-muted"}>
              {step.text}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
