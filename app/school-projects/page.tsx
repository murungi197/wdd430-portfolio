import { Suspense } from "react";
import Link from "next/link";
import ProjectListSkeleton from "@/components/ProjectListSkeleton";
import SchoolProjectList from "@/components/SchoolProjectList";

export default function SchoolProjectsPage() {
  return (
    <main>
      <section className="page-width py-20">
        <p className="eyebrow">Learning by building</p>
        <h1 className="text-5xl font-semibold tracking-[-0.06em]">
          School projects
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-[#64736a]">
          A collection of work from my web development coursework.
        </p>
      </section>
      <Suspense
        fallback={
          <section className="projects-section" aria-busy="true">
            <div className="page-width">
              <div className="section-heading animate-pulse">
                <div>
                  <div className="mb-3 h-3 w-32 rounded bg-[#dfe7df]" />
                  <div className="h-8 w-48 rounded bg-[#dfe7df]" />
                </div>
                <div className="h-4 w-72 max-w-full rounded bg-[#dfe7df]" />
              </div>
              <ProjectListSkeleton />
            </div>
          </section>
        }
      >
        <SchoolProjectList />
      </Suspense>
      <section className="contact-band page-width" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">What&apos;s next</p>
          <h2 id="contact-title">Let&apos;s make something meaningful.</h2>
        </div>
        <Link className="text-link" href="/about">
          Get to know me <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
