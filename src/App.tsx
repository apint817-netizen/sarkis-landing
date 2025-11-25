import React, { useState, useEffect } from "react";
import { Lang, texts } from "./i18n";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Process from "./components/Process";
import CTASection from "./components/CTASection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import AssistantSection from "./components/AssistantSection";

const TELEGRAM_LINK = "https://t.me/sarkis_20032";

export default function App() {
  // читаем язык из localStorage, по умолчанию ru
  const [lang, setLang] = useState<Lang>(() => {
    const stored = (typeof window !== "undefined"
      ? localStorage.getItem("lang")
      : null) as Lang | null;
    return stored || "ru";
  });

  // сохраняем язык при смене
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang);
    }
  }, [lang]);

  const t = texts[lang];

  return (
    <div className="min-h-screen bg-dark text-white hero-gradient">
      <Navbar lang={lang} setLang={setLang} nav={t.nav} />

      <main>
        <section id="hero" className="pt-6 md:pt-10 pb-10 md:pb-16">
          <Hero hero={t.hero} telegramLink={TELEGRAM_LINK} />
        </section>

        <section id="about" className="py-8 md:py-12">
          <About about={t.about} />
        </section>

        <section id="services" className="py-8 md:py-12">
          <Services services={t.services} />
        </section>

        <section id="skills" className="py-8 md:py-12">
          <Skills skills={t.skills} />
        </section>

        <section id="process" className="py-8 md:py-12">
          <Process process={t.process} />
        </section>

        {/* === Блок AI-ассистента === */}
        <AssistantSection lang={lang} />

        <section id="contact" className="py-10 md:py-16">
          <CTASection cta={t.cta} telegramLink={TELEGRAM_LINK} />
        </section>

        <section id="faq" className="py-8 md:py-12">
          <FAQ faq={t.faq} />
        </section>
      </main>

      <Footer footer={t.footer} lang={lang} />
    </div>
  );
}
