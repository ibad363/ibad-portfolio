import { RESUME_DATA } from "../app/data/resume-data";

export function Experience() {
  return (
    <section className="relative overflow-hidden py-[4rem] sm:py-[5rem] px-[1.5rem] lg:px-[3rem] max-w-[76rem] mx-auto" id="experience">
      {/* Section Header */}
      <div className="text-center mb-[3rem] animate-fade-in-up">
        <span className="theme-badge px-[0.875rem] py-[0.3rem] rounded-full text-[0.75rem] font-semibold tracking-wider uppercase inline-block mb-[0.75rem]">
          Track Record
        </span>
        <h2 className="section-heading">Professional Experience</h2>
        <div className="w-[3rem] h-[0.1875rem] rounded-full section-divider mx-auto mt-[0.75rem]" />
      </div>

      <div className="flex flex-col gap-[1.5rem] max-w-[48rem] mx-auto">
        {RESUME_DATA.experience.map((exp) => (
          <div
            key={exp.company}
            className="group relative glass-card flex flex-col md:flex-row gap-[1.25rem] p-[1.5rem] md:p-[2rem] rounded-[1rem]
              transition-all duration-200 hover:-translate-y-0.5"
          >
            {/* Top accent line on hover */}
            <div className="absolute top-0 inset-x-0 h-[0.125rem] rounded-t-[1rem]
              section-divider scale-x-0 group-hover:scale-x-100
              transition-transform duration-300 origin-left" />

            <div className="md:w-1/3 shrink-0">
              <h3 className="text-[1.125rem] font-bold text-white mb-[0.25rem] group-hover:text-zinc-200 transition-colors duration-150">
                {exp.role}
              </h3>
              <div className="text-[0.75rem] font-semibold theme-pill px-[0.625rem] py-[0.25rem] rounded-[0.375rem] inline-block mb-[0.5rem] w-fit">
                {exp.company}
              </div>
              <div className="text-[0.75rem] font-medium text-zinc-400 tabular-nums uppercase tracking-wider block">
                {exp.start} – {exp.end}
              </div>
            </div>

            <div className="md:w-2/3">
              <ul className="space-y-[0.5rem] text-[0.875rem] text-zinc-300 leading-[1.6] list-disc list-outside ml-[1rem]">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
