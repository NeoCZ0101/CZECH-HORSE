"use client";

import { useMemo, useState } from "react";
import { Calculator, TrendingDown, TrendingUp, WalletCards } from "lucide-react";

function parseAmount(value: string) {
  const normalized = value.replace(/\s/g, "").replace(",", ".").replace(/[^0-9.-]/g, "");
  return Number.parseFloat(normalized) || 0;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(value);
}

export function FinanceCalculator() {
  const [income, setIncome] = useState("");
  const [fixedCosts, setFixedCosts] = useState("");
  const [variableCosts, setVariableCosts] = useState("");

  const summary = useMemo(() => {
    const totalIncome = parseAmount(income);
    const totalCosts = parseAmount(fixedCosts) + parseAmount(variableCosts);
    const balance = totalIncome - totalCosts;
    const balanceShare = totalIncome > 0 ? Math.round((balance / totalIncome) * 100) : 0;
    return { balance, balanceShare, hasValues: totalIncome > 0 || totalCosts > 0 };
  }, [income, fixedCosts, variableCosts]);

  const positiveBalance = summary.balance >= 0;

  return (
    <div className="flex flex-1 flex-col px-5 py-5 sm:px-7 sm:py-6">
      <div className="flex items-center gap-2 text-amber">
        <Calculator aria-hidden size={18} />
        <p className="text-xs font-semibold tracking-[0.12em]">ORIENTAČNÍ MĚSÍČNÍ PŘEHLED</p>
      </div>

      <div className="mt-5 grid gap-3">
        <label className="grid gap-1.5 text-xs font-semibold text-cream/80">
          Čistý měsíční příjem
          <span className="relative">
            <input
              type="text"
              inputMode="decimal"
              value={income}
              onChange={(event) => setIncome(event.target.value)}
              placeholder="např. 38 000"
              aria-label="Čistý měsíční příjem v korunách"
              className="min-h-11 w-full border border-cream/25 bg-cream/10 px-3 pr-10 text-sm font-medium text-cream outline-none transition placeholder:text-cream/45 focus:border-amber focus:bg-cream/15"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-cream/60">Kč</span>
          </span>
        </label>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="grid gap-1.5 text-xs font-semibold text-cream/80">
            Pevné výdaje
            <span className="relative">
              <input
                type="text"
                inputMode="decimal"
                value={fixedCosts}
                onChange={(event) => setFixedCosts(event.target.value)}
                placeholder="bydlení, splátky"
                aria-label="Pevné měsíční výdaje v korunách"
                className="min-h-11 w-full border border-cream/25 bg-cream/10 px-3 pr-10 text-sm font-medium text-cream outline-none transition placeholder:text-cream/45 focus:border-amber focus:bg-cream/15"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-cream/60">Kč</span>
            </span>
          </label>
          <label className="grid gap-1.5 text-xs font-semibold text-cream/80">
            Běžné výdaje
            <span className="relative">
              <input
                type="text"
                inputMode="decimal"
                value={variableCosts}
                onChange={(event) => setVariableCosts(event.target.value)}
                placeholder="jídlo, doprava"
                aria-label="Běžné měsíční výdaje v korunách"
                className="min-h-11 w-full border border-cream/25 bg-cream/10 px-3 pr-10 text-sm font-medium text-cream outline-none transition placeholder:text-cream/45 focus:border-amber focus:bg-cream/15"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-cream/60">Kč</span>
            </span>
          </label>
        </div>
      </div>

      <div className="mt-5 border-y border-cream/20 py-4" aria-live="polite">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.12em] text-amber">ZBÝVÁ PO VÝDAJÍCH</p>
            <p className="mt-2 font-display text-3xl font-semibold text-cream">{formatCurrency(summary.balance)}</p>
          </div>
          <span className={positiveBalance ? "grid h-10 w-10 place-items-center rounded-full bg-olive/30 text-amber" : "grid h-10 w-10 place-items-center rounded-full bg-terracotta/30 text-cream"}>
            {positiveBalance ? <TrendingUp aria-hidden size={20} /> : <TrendingDown aria-hidden size={20} />}
          </span>
        </div>
        <p className="mt-2 text-xs leading-5 text-cream/65">
          {summary.hasValues ? `${summary.balanceShare}% z uvedeného příjmu.` : "Zadej příjem a výdaje pro první orientační přehled."}
        </p>
      </div>

      <div className="mt-4 flex items-start gap-2 text-xs leading-5 text-cream/60">
        <WalletCards className="mt-0.5 shrink-0 text-amber" aria-hidden size={15} />
        <p>Nejde o finanční ani investiční doporučení. Je to jednoduchý přehled, od kterého se dá začít.</p>
      </div>
    </div>
  );
}
