"use client";

import { UseFilterStore } from "@/strore/filter-store";
import { Category } from "@/types/product";

const FilterByCategory = ({ categories }: { categories: Category[] }) => {
  const { toggleCategory, categories: data } = UseFilterStore();

  return (
    <section>
      <h2 className="text-[22px] font-semibold uppercase mb-10 text-[#0f0f0f]">
        Danh mục
      </h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat.id}>
            <label className="flex items-center justify-between cursor-pointer text-[#0f0f0f] pb-[15px] group">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={!!data.find((item) => item.id === cat.id)}
                  onChange={() => toggleCategory(cat)}
                  className="appearance-none  checked:bg-[#6f4323] group-hover:bg-[#6f4323] [box-shadow:inset_0_0_0_3px_white] w-4 h-4 accent-[#6f4323] cursor-pointer border border-[#d9d9d9]!"
                />
                <span className="group-hover:text-[#6f4323]">{cat.name}</span>
              </div>
              <span className="text-[#727272] text-sm">
                ({cat?.products?.length})
              </span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FilterByCategory;
