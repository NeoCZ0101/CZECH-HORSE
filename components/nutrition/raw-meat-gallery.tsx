"use client";

import Image from "next/image";
import { ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  { file: "poultry", cs: "Kuřecí prsa", en: "Chicken breast" },
  { file: "pork", cs: "Vepřová pečeně", en: "Pork loin" },
  { file: "beef", cs: "Hovězí steak", en: "Beef steak" },
  { file: "lamb", cs: "Jehněčí kotlety", en: "Lamb chops" },
  { file: "fish", cs: "Rybí filet", en: "Fish fillet" },
];

export function RawMeatGallery({ language }: { language: "cs" | "en" }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const cs = language === "cs";
  const toggleLabel = playing
    ? (cs ? "Pozastavit střídání" : "Pause slideshow")
    : (cs ? "Spustit střídání" : "Play slideshow");

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    function syncPreference() {
      setPlaying(!preference.matches);
    }
    syncPreference();
    preference.addEventListener("change", syncPreference);
    return () => preference.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setIndex(current => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [playing]);

  const controlClass = "grid size-11 place-items-center text-forest hover:bg-mist focus-visible:outline-2";
  const nextLabel = cs ? "Další snímek" : "Next slide";

  return (
    <figure className="overflow-hidden border border-sand bg-white">
      <div className="relative aspect-[1.5]">
        {slides.map((slide, position) => (
          <Image
            key={slide.file}
            src={`/guide-raw-${slide.file}.webp`}
            alt=""
            fill
            sizes="(min-width: 1024px) 35vw, 100vw"
            className={`object-contain transition-opacity duration-700 motion-reduce:transition-none ${position === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
      <figcaption className="flex items-center justify-between border-t border-sand px-3 text-sm font-semibold text-ink">
        <span>{slides[index][language]}</span>
        <span className="flex">
          <button type="button" className={controlClass} title={toggleLabel} aria-label={toggleLabel} onClick={() => setPlaying(value => !value)}>
            {playing ? <Pause size={17} /> : <Play size={17} />}
          </button>
          <button type="button" className={controlClass} title={nextLabel} aria-label={nextLabel} onClick={() => {
            setPlaying(false);
            setIndex(current => (current + 1) % slides.length);
          }}>
            <ChevronRight size={19} />
          </button>
        </span>
      </figcaption>
    </figure>
  );
}
