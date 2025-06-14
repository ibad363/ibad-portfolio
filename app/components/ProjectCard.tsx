import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}

export function ProjectCard({ title, description, tags, link }: Props) {
  return (
    <Card className="group relative flex flex-col border border-gray-800/50 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md transition hover:scale-[1.015] hover:shadow-lg hover:border-gray-400/30 hover:border-2 duration-300 overflow-hidden">
      <CardHeader className="pb-2 space-y-1">
        <CardTitle className="text-base font-semibold text-white group-hover:text-gray-100 transition-colors duration-200">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-gray-300 duration-300 transition-colors"
            >
              {title}
              <ExternalLink size={14} className="text-gray-400 hover:text-gray-300 duration-300 transition-colors" />
            </a>
          ) : (
            title
          )}
        </CardTitle>
        <CardDescription className="text-sm text-gray-400">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="mt-auto">
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-gray-800/70 text-gray-300 text-[11px] px-2 py-0.5 rounded-sm cursor-default"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
