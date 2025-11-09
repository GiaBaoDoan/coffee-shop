"use client";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { UseFilterStore } from "@/strore/filter-store";
import { formatVND } from "@/lib/utils";
import { useEffect, useState } from "react";

const FilterByPrice = () => {
  const [sliderRange, setSliderRange] = useState<number[]>([1280000, 2679000]);
  const { setPriceRange, priceRange } = UseFilterStore();

  useEffect(() => {
    if (priceRange) {
      setSliderRange(priceRange);
    } else {
      setSliderRange([1280000, 2679000]);
    }
  }, [priceRange]);

  return (
    <section>
      <h2 className="text-[22px] font-semibold uppercase mb-10 text-[#0f0f0f]">
        Giá
      </h2>
      <Slider
        value={sliderRange}
        onValueChange={setSliderRange}
        min={1280000}
        max={2679000}
        defaultValue={[1280000, 2679000]}
        className="mb-4"
        step={1000}
      />
      <div className="flex justify-between items-center">
        <span className="text-[#0f0f0f]">Range:</span>
        <p className="text-[#727272] text-sm font-semibold">
          {sliderRange && (
            <span>
              {formatVND(sliderRange[0])} - {formatVND(sliderRange[1])}
            </span>
          )}
        </p>
      </div>

      <Button
        onClick={() => setPriceRange(sliderRange)}
        className="rounded-none mt-5 border border-[#6f4323] bg-[#6f4323] px-[25px] py-[11px] font-medium capitalize text-white transition-all hover:bg-white hover:text-[#6f4323]"
      >
        Lọc
      </Button>
    </section>
  );
};

export default FilterByPrice;
