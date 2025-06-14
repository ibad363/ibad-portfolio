import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface Education {
  school: string;
  degree: string;
  start: string;
  end: string;
}

interface Props {
  education: Education[];
}

export function EducationSection({ education }: Props) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-white tracking-tight">Education</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((edu) => (
          <Card
            key={edu.school}
            className="group relative border border-gray-800/50 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm transition hover:border-gray-400/30 hover:shadow-lg"
          >
            <CardHeader className="pb-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white group-hover:text-gray-100 transition-colors">
                  {edu.school}
                </h3>
                <span className="text-xs text-gray-400 tabular-nums">
                  {edu.start} – {edu.end}
                </span>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-gray-300">
              {edu.degree}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}