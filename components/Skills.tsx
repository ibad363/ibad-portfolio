"use client";

import { useState } from "react";
import { RESUME_DATA } from "../app/data/resume-data";

const CATEGORIES = [
  "All",
  "AI & Agentic Systems",
  "RAG & Context",
  "Backend & APIs",
  "Databases",
  "Frontend",
  "Delivery",
  "Soft Skills",
] as const;

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredSkills =
    activeCategory === "All"
      ? RESUME_DATA.skills
      : RESUME_DATA.skills.filter((skill) => skill.category === activeCategory);

  return (
    <section className="relative overflow-hidden py-[4rem] sm:py-[5rem] px-[1.5rem] lg:px-[3rem] max-w-[76rem] mx-auto" id="skills">
      {/* Background accent */}
      <div className="glow-orb w-[22rem] h-[22rem] theme-glow-orb-2 bottom-0 left-1/2 -translate-x-1/2 opacity-20" />

      {/* Section Header */}
      <div className="relative z-10 text-center mb-[2.5rem] animate-fade-in-up">
        <span className="theme-badge px-[0.875rem] py-[0.3rem] rounded-full text-[0.75rem] font-semibold tracking-wider uppercase inline-block mb-[0.75rem]">
          Technical Stack
        </span>
        <h2 className="section-heading">Skills & Tooling</h2>
        <div className="w-[3rem] h-[0.1875rem] rounded-full section-divider mx-auto mt-[0.75rem]" />
        <p className="text-zinc-400 text-center max-w-[36rem] mx-auto text-[0.9375rem] sm:text-[1rem] leading-[1.6] mt-[0.75rem]">
          Technologies and systems I leverage to build scalable backends, autonomous AI agents, and production web apps.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="relative z-10 flex flex-wrap justify-center gap-[0.5rem] mb-[2.5rem] max-w-[48rem] mx-auto">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-[1rem] py-[0.375rem] rounded-full text-[0.75rem] font-medium transition-all duration-200 ${
              activeCategory === cat
                ? "theme-badge shadow-md font-semibold"
                : "bg-white/[0.04] text-zinc-400 hover:text-white border border-white/5 hover:border-white/15"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-[1rem] lg:gap-[1.25rem] place-items-center max-w-[72rem] mx-auto">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="group relative flex flex-col items-center justify-center gap-[0.75rem]
              w-[6.75rem] h-[6.75rem] rounded-[1rem] text-center px-[0.5rem] glass-card
              transition-all duration-200 hover:-translate-y-0.5 cursor-default"
          >
            {/* Icon glow bg */}
            <div className="flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-[0.75rem] stat-icon-box transition-colors duration-200">
              <span className="group-hover:scale-105 transition-transform duration-200 block">
                {skill.icon}
              </span>
            </div>
            <p className="text-[0.6875rem] font-medium text-zinc-300 group-hover:text-white transition-colors duration-150 leading-tight">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
