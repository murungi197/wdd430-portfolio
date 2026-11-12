import { connection } from "next/server";
import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/lib/projects-db";

export default async function SchoolProjectList() {
  await connection();
  const projects = await getProjects("school");

  return (
    <ProjectList
      projects={projects}
      eyebrow="Coursework · 2026"
      title="School projects"
      description="Projects created while learning and practicing web development."
    />
  );
}
