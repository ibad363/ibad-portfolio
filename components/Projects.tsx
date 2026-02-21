import { ProjectCard } from "./ProjectCard";
import { RESUME_DATA } from "../app/data/resume-data";

function Projects() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 px-6 md:px-12" id="projects">
      {/* Background orb */}
      <div className="glow-orb w-[300px] h-[300px] bg-indigo-600/6 -top-10 -right-20" />

      {/* Section Header */}
      <div className="relative z-10 flex flex-col items-center gap-3 mb-14 animate-fade-in-up">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400">My Work</p>
        <h2 className="section-heading text-center">Projects I've Built</h2>
        <div className="section-divider w-12" />
        <p className="text-gray-400 text-center max-w-2xl text-sm md:text-base leading-relaxed mt-2">
          Showcasing a collection of projects that highlight my skills in modern web development, user-centric design, and clean, maintainable code. Each project reflects my passion for crafting intuitive and high-performance digital experiences.
        </p>
      </div>

      {/* Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {RESUME_DATA.projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.techStack}
            link={project.link ? project.link : undefined}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;