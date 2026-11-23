import { RESUME_DATA } from "../app/data/resume-data";
import { MdSchool } from "react-icons/md";

export function Education() {
  return (
    <section className="relative overflow-hidden py-[4rem] sm:py-[5rem] px-[1.5rem] lg:px-[3rem] max-w-[76rem] mx-auto" id="education">
      {/* Section Header */}
      <div className="text-center mb-[3rem] animate-fade-in-up">
        <span className="theme-badge px-[0.875rem] py-[0.3rem] rounded-full text-[0.75rem] font-semibold tracking-wider uppercase inline-block mb-[0.75rem]">
          Academic & Certifications
        </span>
        <h2 className="section-heading">Education & Training</h2>
        <div className="w-[3rem] h-[0.1875rem] rounded-full section-divider mx-auto mt-[0.75rem]" />
      </div>

      <div className="grid gap-[1.5rem] sm:grid-cols-2 lg:grid-cols-3 max-w-[56rem] mx-auto">
        {RESUME_DATA.education.map((edu) => (
          <div
            key={edu.school}
            className="group relative glass-card px-[1.5rem] py-[2rem] pt-[2.5rem] rounded-[1rem] text-center transition-all duration-200 hover:-translate-y-0.5"
          >
            {/* Icon Badge */}
            <div className="absolute -top-[1.25rem] left-1/2 -translate-x-1/2
              w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full
              stat-icon-box shadow-xl"
            >
              <MdSchool className="stat-icon-color text-[1.25rem]" />
            </div>

            {/* Top accent line on hover */}
            <div className="absolute top-0 inset-x-0 h-[0.125rem] rounded-t-[1rem]
              section-divider scale-x-0 group-hover:scale-x-100
              transition-transform duration-300 origin-left" />

            <div className="pt-[0.5rem]">
              <h3 className="text-[1rem] font-semibold text-white mb-[0.5rem] group-hover:text-zinc-200 transition-colors duration-150">
                {edu.school}
              </h3>
              <span className="theme-pill text-[0.75rem] font-medium px-[0.625rem] py-[0.125rem] rounded-full tabular-nums tracking-wider inline-block">
                {edu.start} – {edu.end}
              </span>
              <p className="mt-[0.75rem] text-[0.875rem] text-zinc-300 leading-[1.6]">{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
