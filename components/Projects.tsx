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
    <section className="relative overflow-hidden py-[4rem] sm:py-[5rem] px-[1.5rem] lg:px-[3rem] max-w-[76rem] mx-auto" id="projects">
      {/* Background orb */}
      <div className="glow-orb w-[20rem] h-[20rem] theme-glow-orb-1 -top-[3rem] -right-[5rem] opacity-20" />

      {/* Section Header */}
      <div className="relative z-10 flex flex-col items-center gap-[0.75rem] mb-[3rem] text-center">
        <span className="theme-badge px-[0.875rem] py-[0.3rem] rounded-full text-[0.75rem] font-semibold tracking-wider uppercase">
          Featured Work
        </span>
        <h2 className="section-heading text-center">Projects & Systems Built</h2>
        <div className="w-[3rem] h-[0.1875rem] rounded-full section-divider" />
        <p className="text-zinc-400 text-center max-w-[38rem] text-[0.9375rem] sm:text-[1rem] leading-[1.6] mt-[0.5rem]">
          Production systems, client deliverables, and autonomous AI agentic workflows designed to solve practical business problems and automate operations.
        </p>
      </div>

      {/* Featured Projects Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
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
        <div className="relative z-10 mt-[3rem]">
          <div className="flex items-center gap-[1rem] mb-[1.5rem]">
            <div className="h-[0.0625rem] bg-white/10 flex-1" />
            <span className="text-[0.75rem] font-semibold tracking-wider uppercase text-zinc-400">
              Additional Projects & Utilities
            </span>
            <div className="h-[0.0625rem] bg-white/10 flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
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
        <div className="relative z-10 flex justify-center mt-[3rem]">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-[0.5rem] px-[1.5rem] py-[0.75rem] rounded-[0.75rem] border border-white/10 glass-card text-zinc-300 text-[0.875rem] font-medium hover:text-white transition-all duration-200 active:scale-95"
          >
            {showAll ? (
              <>
                <span>Show Less</span>
                <ChevronUp className="w-[1rem] h-[1rem] stat-icon-color" />
              </>
            ) : (
              <>
                <span>View More Projects ({otherProjects.length})</span>
                <ChevronDown className="w-[1rem] h-[1rem] stat-icon-color" />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}

export default Projects;
