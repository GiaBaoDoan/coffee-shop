"use client";

import { UseFilterStore } from "@/strore/filter-store";
import { formatVND } from "@/lib/utils";
import { X } from "lucide-react";

const FilterActive = () => {
  const {
    categories,
    setPriceRange,
    toggleCategory,
    priceRange,
    resetFilter,
    keyword,
    setKeyword,
  } = UseFilterStore();

  const clearAll = () => {
    resetFilter();
  };

  return (
    <div className="flex justify-between items-center">
      {(categories.length > 0 || priceRange !== null || keyword) && (
        <button
          onClick={() => clearAll()}
          className="mr-3 py-1.5 px-3.5 bg-[#f5f5f5] text-[#454545] text-sm font-medium"
        >
          Xóa lọc
        </button>
      )}

      {
        <div className="flex flex-wrap">
          {categories.length > 0 && (
            <div className="flex flex-wrap">
              <div className="mr-3 py-1.5 px-3.5 bg-[#f5f5f5] text-[#454545] font-medium text-sm flex items-center gap-3">
                <span>Danh mục:</span>
                {categories.map((cat, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-xs font-semibold"
                  >
                    <p>{cat.name}</p>

                    <button onClick={() => toggleCategory(cat)}>
                      <X className="h-4 w-4 cursor-pointer" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          {priceRange && (
            <div className="flex flex-wrap">
              <div className="mr-3 py-1.5 px-3.5 bg-[#f5f5f5] text-[#454545] font-medium text-sm flex items-center gap-3">
                <span>Giá:</span>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <p>
                    {formatVND(priceRange[0])} - {formatVND(priceRange[1])}
                  </p>
                  <button onClick={() => setPriceRange(null)}>
                    <X className="h-4 w-4 cursor-pointer" />
                  </button>
                </div>
              </div>
            </div>
          )}
          {keyword && (
            <div className="flex flex-wrap">
              <div className="mr-3 py-1.5 px-3.5 bg-[#f5f5f5] text-[#454545] font-medium text-sm flex items-center gap-3">
                <span>Từ khóa:</span>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <p>{keyword}</p>
                  <button onClick={() => setKeyword("")}>
                    <X className="h-4 w-4 cursor-pointer" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default FilterActive;
