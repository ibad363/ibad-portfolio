import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { RESUME_DATA } from "../app/data/resume-data";
import { MdSchool } from "react-icons/md";

export function Education() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 px-6 md:px-12" id="education">
      {/* Section Header */}
      <div className="text-center mb-14 animate-fade-in-up">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-3">My Background</p>
        <h2 className="section-heading">Education</h2>
        <div className="section-divider w-12 mx-auto mt-3" />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
        {RESUME_DATA.education.map((edu) => (
          <div
            key={edu.school}
            className="group relative glass-card px-6 py-8 pt-10 text-center
              hover:border-indigo-500/30 hover:shadow-glow-sm
              transition-all duration-300 hover:-translate-y-1"
          >
            {/* Icon Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2
              w-10 h-10 flex items-center justify-center rounded-full
              bg-gradient-to-br from-indigo-600 to-violet-600
              shadow-glow-sm border border-indigo-500/30"
            >
              <MdSchool className="text-white text-lg" />
            </div>

            {/* Top accent line on hover */}
            <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-2xl
              bg-gradient-to-r from-indigo-500 to-violet-500
              scale-x-0 group-hover:scale-x-100
              transition-transform duration-400 origin-left" />

            <div className="pt-2">
              <h3 className="text-base font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors duration-200">
                {edu.school}
              </h3>
              <span className="text-xs font-medium text-indigo-400 tabular-nums tracking-wider">
                {edu.start} – {edu.end}
              </span>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}