import React from "react";

type FAQItem = {
  q: string;
  a: string;
};

type FAQTexts = {
  title: string;
  items: FAQItem[];
};

type Props = {
  faq: FAQTexts;
};

export default function FAQ({ faq }: Props) {
  return (
    <div className="section-container">
      <h2 className="text-xl md:text-2xl font-semibold mb-6">
        {faq.title}
      </h2>
      <div className="space-y-3 md:space-y-4">
        {faq.items.map((item, idx) => (
          <details
            key={idx}
            className="group card cursor-pointer"
          >
            <summary className="flex items-center justify-between text-sm md:text-base font-medium list-none">
              <span>{item.q}</span>
              <span className="ml-4 text-xs text-white/50 group-open:rotate-90 transition-transform">
                &rsaquo;
              </span>
            </summary>
            <p className="mt-2 text-xs md:text-sm text-white/70">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
