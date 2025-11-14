"use client";

import React from "react";

import { CircleAlert } from "lucide-react";
import { UseFilterStore } from "@/strore/filter-store";
import { cn } from "@/lib/utils";
import { Product } from "@/types/product";
import FilterSortBy from "@/components/shop/FilterSortBy";
import FilterActive from "@/components/shop/FilterActive";
import FilterCategoryProduct from "@/components/shop/FilterByCategory";
import FilterPriceProduct from "@/components/shop/FilterByPrice";
import LastestProduct from "@/components/product/LastestProduct";
import ProductsGrid from "@/components/product/listing/ProductGrids";
import Pagination from "@/components/shop/Pagination";
import { useSyncFilters } from "@/hook/use-asysn-filter";

interface ShopProps {
  products: Product[];
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const Shop = ({ meta, products }: ShopProps) => {
  const { showFilterBar } = UseFilterStore();

  const { pagination } = meta;

  useSyncFilters();

  return (
    <div className="py-20 max-w-[1290px] mx-auto px-[30px]">
      <div className="mb-[30px] px-[15px]">
        <FilterSortBy />
        <div className="flex justify-between items-center mt-[30px]">
          <FilterActive />
          {pagination &&
            (() => {
              const { page, pageSize, total } = pagination;

              if (total === 0) {
                return (
                  <p className="text-sm text-[#333]">
                    Không tìm thấy kết quả nào.
                  </p>
                );
              }

              const start = (page - 1) * pageSize + 1;
              const end = Math.min(page * pageSize, total);

              return (
                <p className="text-sm text-[#333]">
                  Hiển thị {start}–{end} của {total} kết quả
                </p>
              );
            })()}
        </div>
      </div>

      <div className="grid grid-cols-12 items-start">
        {showFilterBar && (
          <div className="col-span-3 px-[15px] space-y-15">
            <FilterCategoryProduct />
            <FilterPriceProduct />
            <LastestProduct />
          </div>
        )}

        {/* right section with proudct list */}
        {pagination?.total === 0 ? (
          <div
            className={cn("px-5", showFilterBar ? "col-span-9" : "col-span-12")}
          >
            <div className="border border-[#d9d9d9] bg-[#f6f5f8] pr-15 pl-7.5 py-7.5 mb-7.5">
              <div className="flex items-center gap-[15px]">
                <CircleAlert className="text-[#6f4323]" />
                <p className="text-[#515151] text-sm">
                  Không tìm thấy sản phẩm nào khớp với lựa chọn của bạn.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={cn(
              "px-[15px]",
              showFilterBar ? "col-span-9" : "col-span-12"
            )}
          >
            <ProductsGrid products={products} />
            <div className="mt-15">
              {pagination && <Pagination pagination={pagination} />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
