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
    <section className="relative overflow-hidden bg-[#111318] py-16 md:py-20 px-6 md:px-12" id="skills">
      {/* Background accent */}
      <div className="glow-orb w-[300px] h-[300px] bg-violet-600/5 bottom-0 left-1/2 -translate-x-1/2" />

      {/* Section Header */}
      <div className="relative z-10 text-center mb-10 animate-fade-in-up">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-3">Technical Stack</p>
        <h2 className="section-heading">Skills & Tooling</h2>
        <div className="section-divider w-12 mx-auto mt-3" />
        <p className="text-gray-400 text-center max-w-xl mx-auto text-sm md:text-base leading-relaxed mt-3">
          Technologies and systems I leverage to build scalable backends, autonomous AI agents, and production web apps.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="relative z-10 flex flex-wrap justify-center gap-2 mb-10 max-w-3xl mx-auto">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              activeCategory === cat
                ? "bg-indigo-600 text-white shadow-glow-sm border border-indigo-400/40"
                : "bg-[#0d0f14] text-gray-400 hover:text-white border border-white/5 hover:border-white/15"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 lg:gap-5 place-items-center max-w-6xl mx-auto">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="group relative flex flex-col items-center justify-center gap-3
              w-28 h-28 rounded-2xl text-center px-2
              bg-[#0d0f14] border border-white/[0.07]
              hover:border-indigo-500/40 hover:bg-indigo-500/5
              hover:shadow-glow-sm
              transition-all duration-300 hover:-translate-y-1 cursor-default"
          >
            {/* Icon glow bg */}
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 group-hover:bg-indigo-500/10 transition-colors duration-300">
              <span className="group-hover:scale-110 transition-transform duration-300 block">
                {skill.icon}
              </span>
            </div>
            <p className="text-[11px] font-medium text-gray-400 group-hover:text-gray-200 transition-colors duration-300 leading-tight">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
