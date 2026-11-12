import { sql } from "@vercel/postgres";
import { normalizeProjectQuery } from "@/lib/project-search";

const PROJECTS_PER_PAGE = 6;

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

export async function fetchFilteredProjects(
  query: string,
  currentPage: number,
): Promise<Project[]> {
  const normalizedQuery = normalizeProjectQuery(query);
  const page =
    Number.isSafeInteger(currentPage) && currentPage > 0 ? currentPage : 1;
  const offset = (page - 1) * PROJECTS_PER_PAGE;

  const result = await sql<ProjectRow>`
    SELECT id, title, description, type, technologies, link
    FROM projects
    WHERE ${normalizedQuery} = ''
      OR POSITION(LOWER(${normalizedQuery}) IN LOWER(title)) > 0
      OR POSITION(LOWER(${normalizedQuery}) IN LOWER(description)) > 0
      OR EXISTS (
        SELECT 1
        FROM unnest(technologies) AS technology
        WHERE POSITION(LOWER(${normalizedQuery}) IN LOWER(technology)) > 0
      )
    ORDER BY id
    LIMIT ${PROJECTS_PER_PAGE}
    OFFSET ${offset}
  `;

  return result.rows.map(toProject);
}

export async function fetchProjectsPages(query: string): Promise<number> {
  const normalizedQuery = normalizeProjectQuery(query);
  const { rows } = await sql<{ count: string }>`
    SELECT COUNT(*) AS count
    FROM projects
    WHERE ${normalizedQuery} = ''
      OR POSITION(LOWER(${normalizedQuery}) IN LOWER(title)) > 0
      OR POSITION(LOWER(${normalizedQuery}) IN LOWER(description)) > 0
      OR EXISTS (
        SELECT 1
        FROM unnest(technologies) AS technology
        WHERE POSITION(LOWER(${normalizedQuery}) IN LOWER(technology)) > 0
      )
  `;

  return Math.ceil(Number(rows[0]?.count ?? 0) / PROJECTS_PER_PAGE);
}

export async function getProjectById(id: number): Promise<Project | null> {
  const { rows } = await sql<ProjectRow>`
    SELECT id, title, description, type, technologies, link
    FROM projects
    WHERE id = ${id}
  `;

  return rows[0] ? toProject(rows[0]) : null;
}
