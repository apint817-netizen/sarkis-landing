import React from "react";

type AboutTexts = {
  title: string;
  text: string;
  bullets: string[];
};

type Props = {
  about: AboutTexts;
};

export default function About({ about }: Props) {
  return (
    <div className="section-container">
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            {about.title}
          </h2>
          <p className="text-sm md:text-base text-white/70">
            {about.text}
          </p>
        </div>
        <div className="space-y-3">
          {about.bullets.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 text-sm text-white/80"
            >
              <div className="mt-1 h-5 w-5 rounded-full bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-[11px]">
                {idx + 1}
              </div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
