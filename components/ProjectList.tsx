import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/lib/projects-db";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <section
      className="projects-section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="page-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work · 2026</p>
            <h2 id="projects-title">Projects in progress</h2>
          </div>
          <p className="section-description">
            A selection of projects built while learning modern web
            development.
          </p>
        </div>
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
      </div>
    </section>
  );
}
