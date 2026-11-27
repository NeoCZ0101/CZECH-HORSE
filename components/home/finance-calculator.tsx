"use client";

import { useState } from "react";

export function FinanceCalculator({ language = "cs" }: { language?: "cs" | "en" }) {
  const cs = language === "cs";
  const [amounts, setAmounts] = useState(["", "", ""]);
  const numbers = amounts.map(value => {
    const compact = value.replace(/\s/g, "");
    const normalized = cs ? compact.replace(",", ".") : compact.replace(/,/g, "");
    return /^\d*(\.\d*)?$/.test(normalized) && Number.isFinite(Number(normalized)) ? Number(normalized) : NaN;
  });
  const [income, fixed, variable] = numbers;
  const valid = numbers.every(Number.isFinite);
  const entered = amounts.some(v => v.trim() !== "");
  const balance = income - fixed - variable;
  const share = income > 0 ? Math.round(100 * balance / income) : null;
  const currency = new Intl.NumberFormat(cs ? "cs-CZ" : "en-GB", { style: "currency", currency: "CZK", maximumFractionDigits: 0 });
  const labels = cs ? ["Čistý měsíční příjem", "Pevné výdaje", "Běžné výdaje"] : ["Monthly net income", "Fixed costs", "Everyday spending"];
  return (
    <div className="flex flex-1 flex-col px-5 pb-4 sm:px-6">
      <div className="grid grid-cols-2 gap-x-3 gap-y-2">
        {labels.map((label, i) => (
          <label key={i} className={`min-w-0 text-xs font-semibold ${i === 0 ? "col-span-2" : ""}`}>
            {label}
            <span className="relative mt-1 block text-base">
              <input type="text" inputMode="decimal" maxLength={15} value={amounts[i]}
                onChange={event => { const next = event.target.value; setAmounts(current => current.map((v, k) => k === i ? next : v)); }}
                aria-invalid={!Number.isFinite(numbers[i])}
                placeholder={i === 0 ? (cs ? "např. 38 000" : "e.g. 38,000") : "0"}
                className="min-h-11 w-full rounded-sm border border-sand bg-surface px-3 pr-11 text-base font-medium text-ink tabular-nums placeholder:text-muted focus-visible:outline-amber" />
              <span aria-hidden className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted">{cs ? "Kč" : "CZK"}</span>
            </span>
          </label>
        ))}
      </div>
      <div aria-live="polite" aria-atomic="true" className="mt-4 border-t border-white/30 pt-3">
        <p className="text-xs font-semibold">{cs ? "Zbývá po výdajích" : "Remaining after costs"}</p>
        <p className="mt-1 break-words font-display text-3xl font-semibold tabular-nums [overflow-wrap:anywhere]">{valid ? currency.format(balance) : "–"}</p>
        <p className="mt-1 min-h-5 text-xs leading-5 text-cream/90">{!valid ? (cs ? "Zadej nezápornou částku." : "Enter a non-negative amount.") : entered && share !== null ? (cs ? `${share} % z příjmu` : `${share}% of income`) : (cs ? "Orientační měsíční přehled." : "Estimated monthly balance.")}</p>
      </div>
      <p className="mt-2 text-xs leading-4 text-cream/80">{cs ? "Nejde o finanční ani investiční doporučení." : "Not financial or investment advice."}</p>
    </div>
  );
}
