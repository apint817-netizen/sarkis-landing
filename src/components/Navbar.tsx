import React from "react";
import type { Lang } from "../i18n";

type NavTexts = {
  about: string;
  services: string;
  skills: string;
  process: string;
  faq: string;
  contact: string;
};

type Props = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  nav: NavTexts;
};

const sections = ["about", "services", "skills", "process", "faq", "contact"] as const;

export default function Navbar({ lang, setLang, nav }: Props) {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-20 bg-dark/80 backdrop-blur border-b border-white/5">
      <div className="section-container flex items-center justify-between py-3 md:py-4">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleScroll("hero")}
        >
          <div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-xs font-bold">
            SA
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm md:text-base font-semibold">
              Sarkis
            </span>
            <span className="text-[11px] md:text-xs text-white/60">
              AI expert & dev
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs lg:text-sm">
          <button
            className="text-white/70 hover:text-white transition-colors"
            onClick={() => handleScroll("about")}
          >
            {nav.about}
          </button>
          <button
            className="text-white/70 hover:text-white transition-colors"
            onClick={() => handleScroll("services")}
          >
            {nav.services}
          </button>
          <button
            className="text-white/70 hover:text-white transition-colors"
            onClick={() => handleScroll("skills")}
          >
            {nav.skills}
          </button>
          <button
            className="text-white/70 hover:text-white transition-colors"
            onClick={() => handleScroll("process")}
          >
            {nav.process}
          </button>
          <button
            className="text-white/70 hover:text-white transition-colors"
            onClick={() => handleScroll("faq")}
          >
            {nav.faq}
          </button>
          <button
            className="text-white/90 border border-white/10 rounded-full px-3 py-1 text-xs hover:border-accent/70 hover:text-white transition-colors"
            onClick={() => handleScroll("contact")}
          >
            {nav.contact}
          </button>
        </nav>

        <div className="flex items-center gap-1 md:gap-2">
          <button
            className={`text-xs px-2 py-1 rounded-full ${
              lang === "ru"
                ? "bg-white text-dark font-semibold"
                : "text-white/70 hover:text-white"
            }`}
            onClick={() => setLang("ru")}
          >
            RU
          </button>
          <button
            className={`text-xs px-2 py-1 rounded-full ${
              lang === "en"
                ? "bg-white text-dark font-semibold"
                : "text-white/70 hover:text-white"
            }`}
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
