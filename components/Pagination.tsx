"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function createPageURL(pageNumber: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(pageNumber));
    return `${pathname}?${params.toString()}`;
  }

  if (totalPages <= 1) {
    return null;
  }

  const linkClass =
    "rounded-md border border-[#d4ddd5] bg-white px-4 py-2 text-sm font-semibold text-[#28664d] hover:bg-[#f0f3ef]";
  const disabledClass =
    "rounded-md border border-[#e2e8e2] px-4 py-2 text-sm font-semibold text-[#9aa69d]";

  return (
    <nav
      className="flex items-center justify-between gap-4"
      aria-label="Project pages"
    >
      {currentPage > 1 ? (
        <Link
          className={linkClass}
          href={createPageURL(currentPage - 1)}
          aria-label="Go to previous page"
        >
          Previous
        </Link>
      ) : (
        <span className={disabledClass} aria-disabled="true">
          Previous
        </span>
      )}
      <p className="text-sm text-[#64736a]" aria-live="polite">
        Page {currentPage} of {totalPages}
      </p>
      {currentPage < totalPages ? (
        <Link
          className={linkClass}
          href={createPageURL(currentPage + 1)}
          aria-label="Go to next page"
        >
          Next
        </Link>
      ) : (
        <span className={disabledClass} aria-disabled="true">
          Next
        </span>
      )}
    </nav>
  );
}
