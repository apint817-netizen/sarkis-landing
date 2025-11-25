import React from "react";
import heroPhoto from "../assets/sarkis-hero.jpg";

type HeroTexts = {
  badge: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  photo: {
    name: string;
    role: string;
    online: string;
  };
  badges: string[];
};

type Props = {
  hero: HeroTexts;
  telegramLink: string;
};

export default function Hero({ hero, telegramLink }: Props) {
  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="section-container grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      
      {/* Текст */}
      <div className="space-y-5 md:space-y-6">
        <div className="badge bg-white/10 border-white/20 text-white/80">
          {hero.badge}
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          {hero.title}
        </h1>

        <p className="text-sm md:text-base text-white/70 max-w-xl">
          {hero.subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={telegramLink}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            {hero.ctaPrimary}
          </a>

          <button
            onClick={scrollToServices}
            className="inline-flex items-center text-sm md:text-base text-white/80 hover:text-white"
          >
            {hero.ctaSecondary}
          </button>
        </div>

        {/* локализованные бейджи */}
        <div className="flex flex-wrap gap-3 text-[11px] text-white/60 pt-2">
          {hero.badges.map((b) => (
            <span
              key={b}
              className="badge bg-white/5 border-white/10"
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Фото */}
      <div className="flex justify-center md:justify-end">
        <div className="relative w-full max-w-xs sm:max-w-sm">
          {/* Градиентная рамка */}
          <div className="absolute -inset-0.5 rounded-[32px] bg-gradient-to-b from-accent via-accentSoft to-accent2 opacity-80 blur-md" />

          {/* Карточка */}
          <div className="relative rounded-[28px] bg-darkSoft/90 border border-white/10 overflow-hidden shadow-soft backdrop-blur-sm">
            
            {/* Фото */}
            <div className="aspect-[3/4] w-full">
              <img
                src={heroPhoto}
                alt={`${hero.photo.name} — ${hero.photo.role}`}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Подпись */}
            <div className="px-4 sm:px-5 py-3 sm:py-4 bg-black/35 border-t border-white/10 flex items-center justify-between gap-3">
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-semibold">
                  {hero.photo.name}
                </span>
                <span className="text-[11px] sm:text-xs text-white/70">
                  {hero.photo.role}
                </span>
              </div>

              <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full text-[10px] font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/40">
                {hero.photo.online}
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
