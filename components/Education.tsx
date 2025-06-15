import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { RESUME_DATA } from "../app/data/resume-data";
import { MdSchool } from "react-icons/md";

export function Education() {
  return (
    <section className="p-4 md:pt-14 mb:pb-10 md:px-12" id="education">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground">Education</h2>
        <div className="w-24 h-1 bg-muted-foreground mx-auto mt-3 rounded"></div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {RESUME_DATA.education.map((edu) => (
          <Card
            key={edu.school}
            className="group relative border border-gray-800/50 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm transition hover:border-gray-400/30 hover:shadow-lg px-6 py-4 text-center"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#3a3737] p-3 rounded-full shadow-md">
              <MdSchool className="text-[#eceaea] text-xl" />
            </div>
            <CardHeader className="pt-8 pb-2">
              <h3 className="text-lg font-semibold text-white group-hover:text-gray-200 transition-colors">{edu.school}</h3>
              <span className="text-xs text-gray-400 tabular-nums">{edu.start} – {edu.end}</span>
            </CardHeader>
            <CardContent className="text-sm text-gray-300">{edu.degree}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}