type ProjectCardProps = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  highlights: string[];
  github: string;
};

export function ProjectCard({
  title,
  subtitle,
  description,
  tech,
  highlights,
  github,
}: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-7 shadow-lg transition hover:border-cyan-400/40">
      <p className="text-sm font-medium text-cyan-400">
        {subtitle}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-300">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>

      <ul className="mt-6 space-y-3 text-sm text-slate-300">
        {highlights.map((point) => (
          <li key={point} className="flex gap-2">
            <span className="text-cyan-400">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <a
          href={github}
          target="_blank"
          className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
        >
          View Repository →
        </a>
      </div>
    </article>
  );
}

