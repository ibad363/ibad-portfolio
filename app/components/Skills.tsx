import { RESUME_DATA } from "../data/resume-data";

export default function Skills() {
  return (
    <section className="py-14 px-4 md:px-12" id="skills">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground">Skills</h2>
        <div className="w-16 h-1 bg-muted-foreground mx-auto mt-3 rounded"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-5 lg:gap-6 place-items-center">
        {RESUME_DATA.skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-[#2A2A2A] hover:bg-[#333] text-primary-foreground w-32 h-32 flex flex-col items-center justify-center gap-2 rounded-xl shadow-md transition-all duration-300 hover:scale-105 text-center px-2"
          >
            {skill.icon}
            <p className="text-xs font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
