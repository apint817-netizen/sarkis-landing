import React, { useEffect, useState } from "react";
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
import Testimonials from "./components/Testimonials";

const TELEGRAM_LINK = "https://t.me/sarkis_20032";

export default function App() {
  const [lang, setLang] = useState<Lang>("ru");
  const t = texts[lang];

  // Флаг готовности для анимации
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // через кадр после маунта включаем анимацию
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white hero-gradient">
      <Navbar lang={lang} setLang={setLang} nav={t.nav} />

      {/* ВЕСЬ контент страницы плавно выезжает */}
      <main
        className={
          "transition-all duration-600 ease-out transform " +
          (ready ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4")
        }
      >
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

        <section id="testimonials" className="py-8 md:py-12">
          <Testimonials testimonials={t.testimonials} />
        </section>

        <section id="assistant" className="py-8 md:py-12">
          <AssistantSection lang={lang} />
        </section>

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
