import React from "react";
import type { Lang } from "../i18n";
import avatar from "../assets/avatar.jpg";

type NavTexts = {
  about: string;
  services: string;
  skills: string;
  process: string;
  faq: string;
  contact: string;
  assistant: string;
};

type Props = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  nav: NavTexts;
};

// Если где-то будешь использовать список секций — ассистент уже учтён
const sections = [
  "about",
  "services",
  "skills",
  "process",
  "faq",
  "assistant",
  "contact",
] as const;

export default function Navbar({ lang, setLang, nav }: Props) {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Локализованное имя
  const displayName = lang === "ru" ? "Саркис" : "Sarkis";

  // Локализованная подпись под именем
  const roleText =
    lang === "ru" ? "AI-эксперт и разработчик" : "AI expert & dev";

  return (
    <header className="sticky top-0 z-20 bg-dark/80 backdrop-blur border-b border-white/5">
      <div className="section-container flex items-center justify-between py-3 md:py-4">
        {/* Аватар + имя */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleScroll("hero")}
        >
          {/* Glow аватарка */}
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-accent via-accentSoft to-accent2 opacity-80 blur-sm" />

            <div className="relative h-8 w-8 rounded-full overflow-hidden border border-white/20 shadow-soft bg-darkSoft">
              <img
                src={avatar}
                alt="Sarkis avatar"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-sm md:text-base font-semibold">
              {displayName}
            </span>
            <span className="text-[11px] md:text-xs text-white/60">
              {roleText}
            </span>
          </div>
        </div>

        {/* Десктоп-меню */}
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
            className="text-white/70 hover:text-white transition-colors"
            onClick={() => handleScroll("assistant")}
          >
            {nav.assistant}
          </button>

          <button
            className="text-white/90 border border-white/10 rounded-full px-3 py-1 text-xs hover:border-accent/70 hover:text-white transition-colors"
            onClick={() => handleScroll("contact")}
          >
            {nav.contact}
          </button>
        </nav>

        {/* Переключатель языка */}
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
