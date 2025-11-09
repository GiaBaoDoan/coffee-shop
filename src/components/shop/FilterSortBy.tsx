"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { SortOption, UseFilterStore } from "@/strore/filter-store";
import { cn } from "@/lib/utils";
import { Grid2X2, Grid3x3, LayoutList } from "lucide-react";

const options = [
  { value: "default", label: "Mặc định" },
  { value: "popularity", label: "Phổ biến" },
  { value: "rating", label: "Đánh giá" },
  { value: "date", label: "Mới nhất" },
  { value: "price", label: "Giá tăng dần" },
  { value: "price_desc", label: "Giá giảm dần" },
];

const FilterSortBy = () => {
  const {
    sort,
    setSortBy,
    triggerFilterBar,
    showFilterBar,
    productView,
    setProductView,
  } = UseFilterStore();

  return (
    <div className="rounded flex items-center justify-between border border-[#d9d9d9]">
      <div className="flex items-center">
        <div className="text-[#333] group flex items-center gap-[5px] px-[30px] py-[15px]">
          <button
            onClick={triggerFilterBar}
            className="group-hover:text-[#6f4323]"
          >
            {showFilterBar ? "Ẩn thanh bên" : "Hiện thanh bên"}
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 6H20"
              stroke="#898989"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M4 12H16"
              stroke="#898989"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M4 18H12"
              stroke="#898989"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>

        <HoverCard openDelay={100} closeDelay={100}>
          <HoverCardTrigger asChild>
            <div className="group cursor-pointer flex items-center border-[#d9d9d9] border-r border-l px-[30px] py-[15px] text-[#333] gap-[5px]">
              <span className="group-hover:text-[#6f4323]">
                {options.find((opt) => opt.value === sort)?.label}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 18H20"
                  stroke="#898989"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M6 12H18"
                  stroke="#898989"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M8 6H16"
                  stroke="#898989"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="min-w-[260px] rounded-none">
            <div className="flex flex-col space-y-2">
              {options.map((opt) => (
                <button
                  onClick={() => setSortBy(opt.value as SortOption)}
                  key={opt.value}
                  className={cn(
                    `text-left hover:text-[#6f4323] text-sm`,
                    opt.value === sort ? "text-[#6f4323]" : "text-[#0f0f0f] "
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className="flex gap-[30px] px-[30px]">
        <LayoutList
          onClick={() => setProductView("list")}
          className={cn(
            "stroke-[1.5] cursor-pointer transition-all",
            productView === "list"
              ? "text-[#6f4323]"
              : "text-[#898989] hover:text-[#6f4323]"
          )}
        />
        <Grid2X2
          onClick={() => setProductView("grid-2")}
          className={cn(
            "stroke-[1.5] cursor-pointer transition-all",
            productView === "grid-2"
              ? "text-[#6f4323]"
              : "text-[#898989] hover:text-[#6f4323]"
          )}
        />
        <Grid3x3
          onClick={() => setProductView("grid-3")}
          className={cn(
            "stroke-[1.5] cursor-pointer transition-all",
            productView === "grid-3"
              ? "text-[#6f4323]"
              : "text-[#898989] hover:text-[#6f4323]"
          )}
        />
      </div>
    </div>
  );
};

export default FilterSortBy;
