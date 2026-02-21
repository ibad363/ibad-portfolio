import { RESUME_DATA } from "../app/data/resume-data";

export default function Skills() {
  return (
    <section className="relative overflow-hidden bg-[#111318] py-16 md:py-20 px-6 md:px-12" id="skills">
      {/* Background accent */}
      <div className="glow-orb w-[300px] h-[300px] bg-violet-600/5 bottom-0 left-1/2 -translate-x-1/2" />

      {/* Section Header */}
      <div className="relative z-10 text-center mb-14 animate-fade-in-up">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-3">What I Work With</p>
        <h2 className="section-heading">Skills</h2>
        <div className="section-divider w-12 mx-auto mt-3" />
      </div>

      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 lg:gap-5 place-items-center">
        {RESUME_DATA.skills.map((skill) => (
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
