import { sql } from "@vercel/postgres";

export interface Project {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  link: string | null;
}

export const db = {
  project: {
    async create({ data }: { data: { title: string; description: string } }) {
      const { rows } = await sql<Project>`
        INSERT INTO projects (title, description, type, technologies)
        VALUES (${data.title}, ${data.description}, 'school', '{}')
        RETURNING id, title, description, type, technologies, link
      `;
      return rows[0];
    },
    async update({
      where,
      data,
    }: {
      where: { id: string };
      data: { title: string; description: string };
    }) {
      const { rows } = await sql<Project>`
        UPDATE projects
        SET title = ${data.title}, description = ${data.description}
        WHERE id = ${Number(where.id)}
        RETURNING id, title, description, type, technologies, link
      `;
      return rows[0];
    },
  },
};
