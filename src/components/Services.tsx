import React from "react";

type ServiceItem = {
  title: string;
  desc: string;
  tag: string;
};

type ServicesTexts = {
  title: string;
  servicesNote: string;
  items: ServiceItem[];
};

type Props = {
  services: ServicesTexts;
};

export default function Services({ services }: Props) {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
        <h2 className="text-xl md:text-2xl font-semibold">
          {services.title}
        </h2>
        <p className="text-xs md:text-sm text-white/60 max-w-md">
          {services.servicesNote}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        {services.items.map((item, idx) => (
          <div key={idx} className="card card-hover">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                {item.tag}
              </span>
            </div>
            <h3 className="text-sm md:text-base font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-xs md:text-sm text-white/70">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
