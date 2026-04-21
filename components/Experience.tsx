import { RESUME_DATA } from "../app/data/resume-data";

export function Experience() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 px-6 md:px-12" id="experience">
      {/* Section Header */}
      <div className="text-center mb-14 animate-fade-in-up">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-3">My Career</p>
        <h2 className="section-heading">Experience</h2>
        <div className="section-divider w-12 mx-auto mt-3" />
      </div>

      <div className="flex flex-col gap-8 max-w-3xl mx-auto">
        {RESUME_DATA.experience.map((exp) => (
          <div
            key={exp.company}
            className="group relative glass-card flex flex-col md:flex-row gap-6 p-6 md:p-8
              hover:border-indigo-500/30 hover:shadow-glow-sm
              transition-all duration-300 hover:-translate-y-1"
          >
            {/* Top accent line on hover */}
            <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-2xl
              bg-gradient-to-r from-indigo-500 to-violet-500
              scale-x-0 group-hover:scale-x-100
              transition-transform duration-400 origin-left" />

            <div className="md:w-1/3 shrink-0">
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors duration-200">
                {exp.role}
              </h3>
              <div className="text-sm font-medium text-indigo-400 mb-2">
                {exp.company}
              </div>
              <div className="text-xs font-medium text-gray-500 tabular-nums uppercase tracking-wider">
                {exp.start} – {exp.end}
              </div>
            </div>

            <div className="md:w-2/3">
              <ul className="space-y-2 text-sm text-gray-400 leading-relaxed list-disc list-outside ml-4">
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
