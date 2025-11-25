import React from "react";

type CTA = {
  title: string;
  subtitle: string;
  button: string;
};

type Props = {
  cta: CTA;
  telegramLink: string;
};

export default function CTASection({ cta, telegramLink }: Props) {
  return (
    <div className="section-container">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-accent to-accent2 py-8 md:py-10 px-6 md:px-10 shadow-soft">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-white/30 opacity-20" />
        <div className="absolute -right-6 top-10 h-20 w-20 rounded-full border border-white/30 opacity-20" />

        <div className="relative space-y-4 md:space-y-5 max-w-2xl">
          <h2 className="text-xl md:text-2xl font-semibold text-dark">
            {cta.title}
          </h2>
          <p className="text-sm md:text-base text-dark/80">
            {cta.subtitle}
          </p>
          <a
            href={telegramLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-dark px-6 py-3 text-sm md:text-base font-semibold text-white hover:bg-darkSoft transition-colors"
          >
            {cta.button}
          </a>
        </div>
      </div>
    </div>
  );
}
