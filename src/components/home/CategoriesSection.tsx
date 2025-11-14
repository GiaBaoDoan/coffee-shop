"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCarousel } from "@/hook/useCarousel";

import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCategoryStore } from "@/strore/categories-store";

export default function CategoriesSection() {
  const [api, setApi] = useState<CarouselApi>();
  const { currentSlide, totalSlides } = useCarousel(api);

  const { fetchCategories, loading, categories } = useCategoryStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <section className="max-w-[1290px] relative px-11 py-15 mx-auto">
      <div className="grid grid-cols-5 items-start gap-15">
        <div className="col-span-2">
          <div className="flex flex-col gap-2.5 pr-5">
            <h2 className="uppercase text-3xl text-[#2b0a00] font-semibold">
              Cà phê nguyên chất
            </h2>
            <p className="text-[#333333] text-sm mb-6">
              Cà phê nguyên chất được chế biến 100% nguyên chất, không pha trộn
              với bất kỳ loại hạt cà phê nào khác. Đây là loại cà phê được
              trồng, thu hoạch và chế biến một cách cẩn thận để giữ nguyên hương
              vị và chất lượng tốt nhất.
            </p>
            <Link
              href="/shop"
              className="flex items-center self-end text-sm font-semibold pr-10 gap-1 transition-all hover:text-[#6f4323]"
            >
              <span>Khám phá</span>
              <MoveRight className="stroke-1" />
            </Link>
          </div>
          <div>
            <Image
              alt="ảnh"
              width={350}
              height={350}
              src="https://cafengon.monamedia.net/wp-content/uploads/2024/12/Frame-13020.png"
            />
          </div>
        </div>

        {/* Right: Carousel */}
        <div className="col-span-3">
          <div className="flex items-center gap-5">
            <h2 className="uppercase text-3xl text-[#2b0a00] font-semibold max-w-[220px] w-full">
              Thơm ngon chất lượng
            </h2>
            <p className="text-[#333] text-sm">
              Những hạt cà phê này thường được trồng theo phương pháp bền vững,
              không sử dụng hóa chất độc hại, tôn trọng môi trường và người lao
              động.
            </p>
          </div>

          {loading ? (
            "Đang tải dữ liệu..."
          ) : (
            <Carousel
              opts={{
                align: "start",
                duration: 20,
                dragFree: false,
              }}
              setApi={setApi}
              className="mt-8 relative"
            >
              <CarouselContent>
                {categories.map((cat, index) => (
                  <CarouselItem key={index} className="basis-1/3">
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg border group">
                      <div className="overflow-hidden rounded-lg group-hover:scale-105 transition-all duration-500">
                        <Image
                          className="hover:scale-110 transition-all"
                          src="https://cafengon.monamedia.net/wp-content/uploads/2024/12/h28-cate4.png"
                          alt={`Sản phẩm ${index + 1}`}
                          width={200}
                          height={200}
                        />
                      </div>
                      <p className="font-semibold mt-2 transition-all group-hover:text-[#6f4323]">
                        {cat.name}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Arrows + Index */}
              <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex gap-2 items-center">
                <CarouselPrevious />
                <div className=" text-[#333]">
                  {totalSlides === 0
                    ? "0 / 0"
                    : `${currentSlide} / ${totalSlides}`}
                </div>
                <CarouselNext />
              </div>
            </Carousel>
          )}
        </div>
        <div className="absolute bottom-0 right-7.5 opacity-30">
          <Image
            src="https://cafengon.monamedia.net/wp-content/uploads/2025/01/icon-coffee-4-e1736934867109.png"
            alt="anh"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
}
