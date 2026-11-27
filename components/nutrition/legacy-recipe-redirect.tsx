"use client";

import { useEffect } from "react";

const oldRecipeHashes = {
  cs: ["#recept-kure", "#recept-kruta", "#recept-kachna", "#recept-husa", "#recept-losos"],
  en: ["#chicken-recipe", "#turkey-recipe", "#duck-recipe", "#goose-recipe", "#salmon-recipe"],
};

export function LegacyRecipeRedirect({ language }: { language: "cs" | "en" }) {
  useEffect(() => {
    const redirect = () => {
      const hash = window.location.hash;
      if (oldRecipeHashes[language].includes(hash)) {
        window.location.replace((language === "cs" ? "/stravovani" : "/en/stravovani") + hash);
      }
    };
    redirect();
    window.addEventListener("hashchange", redirect);
    return () => window.removeEventListener("hashchange", redirect);
  }, [language]);
  return null;
}
