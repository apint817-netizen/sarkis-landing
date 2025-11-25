import React from "react";

type Step = {
  title: string;
  desc: string;
};

type ProcessTexts = {
  title: string;
  steps: Step[];
};

type Props = {
  process: ProcessTexts;
};

export default function Process({ process }: Props) {
  return (
    <div className="section-container">
      <h2 className="text-xl md:text-2xl font-semibold mb-6">
        {process.title}
      </h2>
      <div className="grid md:grid-cols-4 gap-4 md:gap-5">
        {process.steps.map((step, idx) => (
          <div key={idx} className="card card-hover">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-xs font-semibold">
                {idx + 1}
              </div>
              <h3 className="text-sm font-semibold">{step.title}</h3>
            </div>
            <p className="text-xs md:text-sm text-white/70">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
