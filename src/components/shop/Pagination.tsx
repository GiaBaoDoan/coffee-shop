"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export default function Pagination({ pagination }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`, { scroll: true });
  };

  const { page, pageCount } = pagination;

  return (
    <div className="flex justify-center items-center">
      <div className="mr-2.5">
        {page === pageCount && page !== 1 && (
          <button
            className="hover:text-[#6f4323] transition-all font-medium"
            onClick={() => handlePageChange(page - 1)}
          >
            ←
          </button>
        )}
      </div>
      {[...Array(pageCount)].map((_, i) => {
        const pageNumber = i + 1;
        const isActive = pageNumber === page;
        return (
          <button
            key={i}
            onClick={() => handlePageChange(pageNumber)}
            className={`text-sm w-[30px] h-[30px] mr-2.5 border flex items-center justify-center font-medium
              ${
                isActive
                  ? "bg-[#6f4323] text-white border-[#6f4323]"
                  : "border-[#d9d9d9] text-[#0f0f0f] hover:border-[#6f4323] transition-all"
              }`}
          >
            {pageNumber}
          </button>
        );
      })}
      {/* Nút Next */}
      {page < pageCount && (
        <button
          className="hover:text-[#6f4323] transition-all font-medium"
          onClick={() => handlePageChange(page + 1)}
        >
          →
        </button>
      )}
    </div>
  );
}
