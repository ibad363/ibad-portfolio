import { ExternalLink, ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  featured?: boolean;
}

export function ProjectCard({ title, description, tags, link, featured }: Props) {
  const getActionLabel = (url?: string) => {
    if (!url) return null;
    if (url.includes("releases")) return "Download Release";
    if (url.includes("github.com")) return "Inspect Repository";
    return "Open Live System";
  };

  const actionLabel = getActionLabel(link);

  return (
    <div className={`group relative flex flex-col rounded-2xl overflow-hidden glass-card transition-all duration-200 hover:-translate-y-0.5 ${
      featured
        ? "border-white/[0.1] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
        : "border-white/[0.05] opacity-90 hover:opacity-100"
    }`}
    >
      {/* Top accent line — slides in on hover */}
      <div className="absolute top-0 inset-x-0 h-[2px] section-divider scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10" />

      {/* Card Content */}
      <div className="flex flex-col gap-3.5 p-6 flex-1 text-left">
        {/* Title */}
        <h3 className="text-base font-semibold text-white leading-snug group-hover:text-zinc-200 transition-colors duration-150">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:underline"
            >
              <span>{title}</span>
              <ArrowUpRight
                size={14}
                className="text-zinc-400 group-hover:text-white transition-colors duration-150 flex-shrink-0"
              />
            </a>
          ) : (
            title
          )}
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-300 leading-relaxed flex-1">
          {description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide cursor-default ${
                featured
                  ? "theme-pill font-semibold"
                  : "bg-white/[0.04] text-zinc-400 border border-white/[0.08]"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Explicit Action Verb at bottom (Taste-skill Rule 4) */}
        {link && actionLabel && (
          <div className="pt-2 border-t border-white/[0.06] mt-auto">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
            >
              <span>{actionLabel}</span>
              <ArrowUpRight size={13} className="text-zinc-400" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
