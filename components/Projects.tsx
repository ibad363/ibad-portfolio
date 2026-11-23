"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { RESUME_DATA } from "../app/data/resume-data";

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = RESUME_DATA.projects.filter((p) => p.featured);
  const otherProjects = RESUME_DATA.projects.filter((p) => !p.featured);

  return (
    <section className="relative overflow-hidden py-16 md:py-20 px-6 md:px-12" id="projects">
      {/* Background orb */}
      <div className="glow-orb w-[300px] h-[300px] bg-indigo-600/6 -top-10 -right-20" />

      {/* Section Header */}
      <div className="relative z-10 flex flex-col items-center gap-3 mb-14 animate-fade-in-up">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400">Featured Work</p>
        <h2 className="section-heading text-center">Projects & Systems Built</h2>
        <div className="section-divider w-12" />
        <p className="text-gray-400 text-center max-w-2xl text-sm md:text-base leading-relaxed mt-2">
          Production systems, client deliverables, and autonomous AI agentic workflows designed to solve practical business problems and automate operations.
        </p>
      </div>

      {/* Featured Projects Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.techStack}
            link={project.link ? project.link : undefined}
            featured={true}
          />
        ))}
      </div>

      {/* Additional / Archive Projects */}
      {showAll && (
        <div className="relative z-10 mt-12 animate-fade-in-up">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-white/10 flex-1" />
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-500">
              Additional Projects & Utilities
            </span>
            <div className="h-px bg-white/10 flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.techStack}
                link={project.link ? project.link : undefined}
                featured={false}
              />
            ))}
          </div>
        </div>
      )}

      {/* Toggle Button */}
      {otherProjects.length > 0 && (
        <div className="relative z-10 flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-gray-300 text-sm font-medium hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300 transition-all duration-300 active:scale-95"
          >
            {showAll ? (
              <>
                <span>Show Less</span>
                <ChevronUp className="w-4 h-4 text-indigo-400" />
              </>
            ) : (
              <>
                <span>View More Projects ({otherProjects.length})</span>
                <ChevronDown className="w-4 h-4 text-indigo-400" />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}

export default Projects;
