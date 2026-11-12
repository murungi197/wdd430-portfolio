export default function ProjectListSkeleton() {
  return (
    <div className="project-grid animate-pulse" aria-hidden="true">
      {[0, 1, 2].map((item) => (
        <div
          key={item}
          className="overflow-hidden rounded-[10px] border border-[#e1e7e1] bg-white"
        >
          <div className="h-[190px] bg-[#e6ece6]" />
          <div className="space-y-3 p-5">
            <div className="h-3 w-24 rounded bg-[#e6ece6]" />
            <div className="h-5 w-3/4 rounded bg-[#e6ece6]" />
            <div className="h-3 w-full rounded bg-[#e6ece6]" />
            <div className="h-3 w-2/3 rounded bg-[#e6ece6]" />
            <div className="flex gap-2 pt-2">
              <div className="h-6 w-16 rounded bg-[#edf1ed]" />
              <div className="h-6 w-20 rounded bg-[#edf1ed]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
