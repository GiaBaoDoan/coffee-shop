"use client";

import { cn, formatVND, getDiscountPercent, getFinalPrice } from "@/lib/utils";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import Link from "next/link";
import { useSearchStore } from "@/strore/search-store";
import { useRouter } from "next/navigation";
import { UseFilterStore } from "@/strore/filter-store";

type Props = {
  isTransform: boolean;
};

const SearchInput = ({ isTransform }: Props) => {
  const { query, results, loading, setQuery, fetchResults } = useSearchStore();
  const { setKeyword } = UseFilterStore();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.trimStart());
  };

  const handleSearch = (query: string) => {
    if (!query) return;
    router.push(`/shop?search=${encodeURIComponent(query)}`);
    setOpen(false);
    setKeyword(query);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchResults(query);
    }, 500);

    return () => clearTimeout(handler);
  }, [query, fetchResults]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div
        className={cn(
          "flex items-center gap-3 text-sm transition-colors duration-300",
          isTransform ? "text-black" : "text-white"
        )}
      >
        <PopoverTrigger asChild>
          <div>
            <input
              value={query}
              onChange={handleInputChange}
              type="text"
              className={cn(
                " placeholder:transition-colors duration-300 border-b outline-none pb-2 pl-2",
                isTransform
                  ? "border-black placeholder:text-black"
                  : "border-white placeholder:text-white"
              )}
              placeholder="Tìm kiếm"
            />
          </div>
        </PopoverTrigger>
        <button onClick={() => handleSearch(query)}>
          <Search className="size-5.5 stroke-1" />
        </button>
      </div>
      <PopoverContent onOpenAutoFocus={(e) => e.preventDefault()}>
        <div
          onWheel={(e) => e.stopPropagation()}
          className="max-h-[470px] overflow-y-auto [&::-webkit-scrollbar]:hidden"
        >
          <div className="mb-5">
            <h3 className="pb-2.5 mb-[15px] border-b border-[#e5e5e5] uppercase font-bold">
              Sản phẩm bán chạy
            </h3>
            <div className="flex flex-wrap items-center gap-1.5 text-sm">
              <button
                onClick={() => handleSearch("Cà phê")}
                className="flex items-center justify-center gap-[5px] bg-[#f7f7f7] hover:bg-[#6f4323] hover:text-white transition-all py-1 px-2.5 text-[#0f0f0f]"
              >
                <Search className="size-3 stroke-2" />
                <span>Cà phê</span>
              </button>
              <button
                onClick={() => handleSearch("Nguyên chất")}
                className="bg-[#f7f7f7] hover:bg-[#6f4323] hover:text-white transition-all py-1 px-2.5 text-[#0f0f0f] flex items-center justify-center gap-[5px]"
              >
                <Search className="size-3 stroke-2" />
                <span>Nguyên chất</span>
              </button>
              <button
                onClick={() => handleSearch("Rang xay")}
                className="flex items-center justify-center gap-[5px] bg-[#f7f7f7] hover:bg-[#6f4323] hover:text-white transition-all py-1 px-2.5 text-[#0f0f0f]"
              >
                <Search className="size-3 stroke-2" />
                <span>Rang say</span>
              </button>
            </div>
          </div>

          <div>
            <h3 className="pb-2.5 mb-[15px] border-b border-[#e5e5e5] uppercase font-bold">
              Sản phẩm bán chạy
            </h3>

            {loading ? (
              <div className="flex items-center justify-center py-10">
                <div className="w-6 h-6 border-2 border-[#d9d9d9] border-t-[#6f4323] rounded-full animate-spin"></div>
                <span className="ml-2 text-[#333] text-sm">
                  Đang tìm kiếm...
                </span>
              </div>
            ) : results.length === 0 && query ? (
              <div className="flex items-center justify-center py-10 text-[#333] text-sm">
                Không tìm thấy sản phẩm nào
              </div>
            ) : (
              results.map((prd, index) => {
                return (
                  <Link
                    href={`/product/${prd.slug}`}
                    key={index}
                    className="flex items-center justify-start py-2.5 border-[#f5f5f5] border-b"
                  >
                    <div>
                      <Image
                        src={prd.images[0].url as string}
                        alt={prd.images[0].alternativeText as string}
                        width={70}
                        height={70}
                        className="object-contain w-[70px] h-[70px]"
                      />
                    </div>
                    <div className="px-2.5">
                      <h4 className="text-sm font-medium text-[#0f0f0f] hover:text-[#6f4323]">
                        {prd.name}
                      </h4>
                      <div className="flex items-center mt-2 gap-1.5">
                        {prd.onSale && (
                          <p className="text-sm text-[#727272] line-through">
                            {formatVND(prd.price)}
                          </p>
                        )}
                        <p className="font-semibold text-[#a80909]">
                          {formatVND(
                            prd.onSale ? (prd.salePrice as number) : prd.price
                          )}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SearchInput;
