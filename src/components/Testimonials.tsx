import React from "react";

type TestimonialItem = {
  name: string;
  role: string;
  text: string;
  tag: string;
};

type TestimonialsTexts = {
  title: string;
  subtitle: string;
  items: TestimonialItem[];
};

export default function Testimonials({
  testimonials,
}: {
  testimonials: TestimonialsTexts;
}) {
  return (
    <div className="section-container">
      <div className="max-w-2xl mb-6 md:mb-8">
        <h2 className="section-title">{testimonials.title}</h2>
        <p className="text-sm md:text-base text-white/70">
          {testimonials.subtitle}
        </p>
      </div>

      <div className="grid gap-4 md:gap-6 md:grid-cols-3">
        {testimonials.items.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-white/10 bg-white/5/10 bg-darkSoft/80 backdrop-blur-md shadow-soft p-4 md:p-5 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-[11px] text-white/60">
                <span className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-semibold">
                  {item.name[0]}
                </span>
                <div>
                  <div className="text-xs font-semibold text-white">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-white/60">{item.role}</div>
                </div>
              </div>

            <p className="text-xs md:text-sm text-white/80 leading-relaxed mt-2">
              {item.text}
            </p>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <span className="inline-flex px-2.5 py-1 rounded-full text-[10px] font-medium bg-accent/15 text-accent border border-accent/40">
                {item.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
