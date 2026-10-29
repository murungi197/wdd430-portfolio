export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  number?: string;
  artwork?: "portfolio" | "planner" | "weather";
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
  number = "—",
  artwork = "portfolio",
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className={`project-art art-${artwork}`} aria-hidden="true">
        <div className="art-window">
          <div className="art-window-top">
            <span />
            <span />
            <span />
          </div>
          <div className="art-row" />
          <div className="art-row art-row-short" />
          <div className="art-row" />
        </div>
      </div>
      <div className="project-content">
        <p className="project-number">{number} / FEATURED</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="tag-list" aria-label="Technologies used">
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        {link && (
          <p className="mt-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#28664d] hover:underline"
            >
              View project <span aria-hidden="true">↗</span>
            </a>
          </p>
        )}
      </div>
    </article>
  );
}
