import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/lib/projects-db";

interface ProjectListProps {
  projects: Project[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

export default function ProjectList({
  projects,
  eyebrow = "Selected work · 2026",
  title = "Projects in progress",
  description = "A selection of projects built while learning modern web development.",
}: ProjectListProps) {
  return (
    <section
      className="projects-section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="page-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 id="projects-title">{title}</h2>
          </div>
          <p className="section-description">{description}</p>
        </div>
        {projects.length > 0 ? (
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
                number={String(index + 1).padStart(2, "0")}
                artwork={index === 0 ? "planner" : "portfolio"}
              />
            ))}
          </div>
        ) : (
          <p className="rounded-lg border border-dashed border-[#d4ddd5] bg-white p-8 text-sm text-[#64736a]">
            No projects to display yet.
          </p>
        )}
      </div>
    </section>
  );
}
