import { connection } from "next/server";
import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/lib/projects-db";

export default async function OpenSourcePage() {
  await connection();
  const projects = await getProjects("opensource");

  return (
    <main>
      <section className="page-width py-20">
        <p className="eyebrow">Community contributions</p>
        <h1 className="text-5xl font-semibold tracking-[-0.06em]">
          Open-source projects
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-[#64736a]">
          Projects and contributions built in the open.
        </p>
      </section>
      <ProjectList
        projects={projects}
        eyebrow="Open source"
        title="Community work"
        description="A selection of open-source projects and contributions."
      />
    </main>
  );
}
