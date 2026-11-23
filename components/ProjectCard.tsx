import { ExternalLink } from "lucide-react";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  featured?: boolean;
}

export function ProjectCard({ title, description, tags, link, featured }: Props) {
  return (
    <div className={`group relative flex flex-col rounded-2xl overflow-hidden
      bg-[#111318] border transition-all duration-350 hover:-translate-y-1 ${
        featured
          ? "border-white/[0.1] hover:border-indigo-500/40 hover:shadow-glow-sm"
          : "border-white/[0.05] hover:border-white/20 opacity-90 hover:opacity-100"
      }`}
    >
      {/* Top accent gradient line — slides in on hover */}
      <div className="absolute top-0 inset-x-0 h-[2px]
        bg-gradient-to-r from-indigo-500 to-violet-500
        scale-x-0 group-hover:scale-x-100
        transition-transform duration-400 origin-left z-10" />

      {/* Card Content */}
      <div className="flex flex-col gap-3 p-6 flex-1">
        {/* Title */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[15px] font-semibold text-white leading-snug group-hover:text-indigo-300 transition-colors duration-200">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-indigo-300 transition-colors duration-200"
              >
                <span>{title}</span>
                <ExternalLink
                  size={13}
                  className="text-gray-500 group-hover:text-indigo-400 transition-colors duration-200 flex-shrink-0"
                />
              </a>
            ) : (
              title
            )}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed flex-1">
          {description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`inline-flex items-center rounded-full px-2.5 py-0.5
                text-[11px] font-medium tracking-wide border cursor-default ${
                  featured
                    ? "bg-indigo-950/60 text-indigo-300 border-indigo-500/25"
                    : "bg-white/[0.03] text-gray-400 border-white/[0.08]"
                }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
