import React from "react";

type SkillGroup = {
  title: string;
  skills: string[];
};

type SkillsTexts = {
  title: string;
  subtitle: string;
  groups: SkillGroup[];
};

type Props = {
  skills: SkillsTexts;
};

export default function Skills({ skills }: Props) {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold">
            {skills.title}
          </h2>
          <p className="text-xs md:text-sm text-white/60 mt-1">
            {skills.subtitle}
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {skills.groups.map((group, idx) => (
          <div key={idx} className="card card-hover">
            <h3 className="text-sm font-semibold mb-3">
              {group.title}
            </h3>
            <ul className="space-y-1.5 text-xs text-white/70">
              {group.skills.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-accent to-accent2" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
