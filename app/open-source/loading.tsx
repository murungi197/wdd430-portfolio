import ProjectListSkeleton from "@/components/ProjectListSkeleton";

export default function Loading() {
  return (
    <main aria-busy="true">
      <section className="page-width animate-pulse py-20">
        <div className="h-3 w-40 rounded bg-[#e6ece6]" />
        <div className="mt-6 h-12 w-3/4 max-w-xl rounded bg-[#e6ece6]" />
        <div className="mt-5 h-4 w-full max-w-xl rounded bg-[#e6ece6]" />
        <div className="mt-2 h-4 w-2/3 max-w-lg rounded bg-[#e6ece6]" />
      </section>
      <section className="projects-section">
        <div className="page-width">
          <div className="section-heading animate-pulse">
            <div>
              <div className="mb-3 h-3 w-28 rounded bg-[#dfe7df]" />
              <div className="h-8 w-56 rounded bg-[#dfe7df]" />
            </div>
            <div className="h-4 w-72 max-w-full rounded bg-[#dfe7df]" />
          </div>
          <ProjectListSkeleton />
        </div>
      </section>
    </main>
  );
}
