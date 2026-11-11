import { sql } from "@vercel/postgres";

export interface Project {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  link?: string;
}

interface ProjectRow extends Omit<Project, "link"> {
  link: string | null;
}

function toProject(row: ProjectRow): Project {
  const { link, ...project } = row;
  return link === null ? project : { ...project, link };
}

export async function getProjects(
  type?: string | null,
): Promise<Project[]> {
  const result = type
    ? await sql<ProjectRow>`
        SELECT id, title, description, type, technologies, link
        FROM projects
        WHERE type = ${type}
        ORDER BY id
      `
    : await sql<ProjectRow>`
        SELECT id, title, description, type, technologies, link
        FROM projects
        ORDER BY id
      `;

  return result.rows.map(toProject);
}

export async function getProjectById(id: number): Promise<Project | null> {
  const { rows } = await sql<ProjectRow>`
    SELECT id, title, description, type, technologies, link
    FROM projects
    WHERE id = ${id}
  `;

  return rows[0] ? toProject(rows[0]) : null;
}
