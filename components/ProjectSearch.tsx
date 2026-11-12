"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { normalizeProjectQuery } from "@/lib/project-search";

function ProjectSearchInput({ query }: { query: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const serializedSearchParams = searchParams.toString();
  const [term, setTerm] = useState(query);

  useEffect(() => {
    const normalizedTerm = normalizeProjectQuery(term);
    if (normalizedTerm === query) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      const params = new URLSearchParams(serializedSearchParams);
      params.set("page", "1");
      if (normalizedTerm) {
        params.set("query", normalizedTerm);
      } else {
        params.delete("query");
      }

      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }, 300);

    return () => window.clearTimeout(timeoutId);
  }, [pathname, query, router, serializedSearchParams, term]);

  return (
    <div className="mt-8 max-w-md">
      <label className="sr-only" htmlFor="project-search">
        Search projects
      </label>
      <input
        id="project-search"
        className="w-full rounded-md border border-[#d4ddd5] bg-white px-4 py-3 text-sm text-[#18251f] outline-none placeholder:text-[#829087] focus:border-[#78a98e] focus:ring-2 focus:ring-[#78a98e]/20"
        type="search"
        placeholder="Search projects..."
        value={term}
        maxLength={100}
        onChange={(event) => setTerm(event.currentTarget.value)}
      />
    </div>
  );
}

export default function ProjectSearch() {
  const searchParams = useSearchParams();
  const query = normalizeProjectQuery(searchParams.get("query") ?? "");

  return <ProjectSearchInput key={query} query={query} />;
}
