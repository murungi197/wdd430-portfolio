import { Suspense } from "react";
import { connection } from "next/server";
import Pagination from "@/components/Pagination";
import ProjectList from "@/components/ProjectList";
import ProjectListSkeleton from "@/components/ProjectListSkeleton";
import ProjectSearch from "@/components/ProjectSearch";
import {
  fetchFilteredProjects,
  fetchProjectsPages,
} from "@/lib/projects-db";
import { normalizeProjectQuery } from "@/lib/project-search";

type ProjectsPageSearchParams = {
  query?: string | string[];
  page?: string | string[];
};

interface ProjectsPageProps {
  searchParams: Promise<ProjectsPageSearchParams>;
}

function firstSearchParam(value?: string | string[]): string {
  return Array.isArray(value) ? (value[0] ?? "") : (value ?? "");
}

function parsePage(value?: string | string[]): number {
  const page = firstSearchParam(value);
  if (!/^[1-9]\d*$/.test(page)) {
    return 1;
  }

  const parsedPage = Number(page);
  return Number.isSafeInteger(parsedPage) ? parsedPage : 1;
}

async function ProjectsResults({ searchParams }: ProjectsPageProps) {
  await connection();
  const params = await searchParams;
  const query = normalizeProjectQuery(firstSearchParam(params.query));
  const totalPages = await fetchProjectsPages(query);
  const currentPage = Math.min(
    parsePage(params.page),
    Math.max(totalPages, 1),
  );
  const projects = await fetchFilteredProjects(query, currentPage);

  return (
    <>
      <ProjectList
        projects={projects}
        eyebrow={query ? `Search results for "${query}"` : "Selected work"}
        title="All projects"
        description="School projects and open-source contributions."
      />
      <div className="page-width py-8">
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </>
  );
}

function ProjectsResultsFallback() {
  return (
    <>
      <section className="projects-section" aria-busy="true">
        <div className="page-width">
          <div className="section-heading animate-pulse">
            <div>
              <div className="mb-3 h-3 w-28 rounded bg-[#dfe7df]" />
              <div className="h-8 w-48 rounded bg-[#dfe7df]" />
            </div>
            <div className="h-4 w-72 max-w-full rounded bg-[#dfe7df]" />
          </div>
          <ProjectListSkeleton />
        </div>
      </section>
      <div className="page-width py-8">
        <div className="h-10 animate-pulse rounded-md bg-[#e6ece6]" />
      </div>
    </>
  );
}

export default function ProjectsPage({ searchParams }: ProjectsPageProps) {
  return (
    <main>
      <section className="page-width py-20">
        <p className="eyebrow">Portfolio · 2026</p>
        <h1 className="text-5xl font-semibold tracking-[-0.06em]">Projects</h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-[#64736a]">
          Search projects by name, description, or technology.
        </p>
        <Suspense
          fallback={
            <div
              className="mt-8 h-12 max-w-md animate-pulse rounded-md bg-[#e6ece6]"
              aria-hidden="true"
            />
          }
        >
          <ProjectSearch />
        </Suspense>
      </section>
      <Suspense fallback={<ProjectsResultsFallback />}>
        <ProjectsResults searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
