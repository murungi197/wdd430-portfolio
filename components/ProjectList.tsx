import ProjectCard from "@/components/ProjectCard";
import type { ProjectCardProps } from "@/components/ProjectCard";

interface ProjectListProps {
  projects: ProjectCardProps[];
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
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
