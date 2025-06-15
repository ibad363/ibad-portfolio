import { ProjectCard } from "./ProjectCard";
import { RESUME_DATA } from "../app/data/resume-data";

function Projects() {
  return (
    <div className="p-4 md:py-14 md:px-12" id="projects">
      {/* Heading & Paragraph */}
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-secondary-foreground text-3xl md:text-4xl font-bold tracking-wider">Projects I’ve Built</h1>
        <div className="w-32 h-1 rounded-lg bg-muted-foreground"></div>
        <p className="text-muted-foreground text-center max-w-2xl text-sm sm:text-base leading-relaxed">
          Showcasing a collection of projects that highlight my skills in modern web development, user-centric design, and clean, maintainable code. Each project reflects my passion for crafting intuitive and high-performance digital experiences.
        </p>
      </div>

      {/* Projects */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
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
    </div>
  )
}

export default Projects