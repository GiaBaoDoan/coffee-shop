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
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CoffeeTypesSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const { currentSlide, totalSlides } = useCarousel(api);
  return (
    <section className="max-w-[1290px] mx-auto px-11 mb-30">
      {/* title */}
      <div className="flex flex-col items-center gap-2.5 text-center">
        <h2 className="text-3xl font-bold uppercase text-[#2b0a00]">
          Khám Phá Hương Vị Cà Phê Đa Dạng
        </h2>
        <p className="mb-7.5 text-[#333]">
          Tìm hiểu những kiến ​​thức cơ bản về pha cà phê, bao gồm các phương
          pháp pha cà phê khác nhau
        </p>
      </div>
      {/* slide */}
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          slidesToScroll: 1,
        }}
      >
        <CarouselContent>
          {[
            {
              title: "Cold brew",
              src: "https://cafengon.monamedia.net/wp-content/uploads/2025/01/galaxy-4.png",
            },
            {
              title: "Kalita Wave",
              src: "https://cafengon.monamedia.net/wp-content/uploads/2025/01/galaxy-2.png",
            },
            {
              title: "Chemex",
              src: "https://cafengon.monamedia.net/wp-content/uploads/2025/01/galaxy-5.png",
            },
            {
              title: "Espresso",
              src: "https://cafengon.monamedia.net/wp-content/uploads/2025/01/galaxy-1.png",
            },
            {
              title: "Pour-Over",
              src: "https://cafengon.monamedia.net/wp-content/uploads/2025/01/galaxy-6.png",
            },
            {
              title: "Flash Brew",
              src: "https://cafengon.monamedia.net/wp-content/uploads/2025/01/galaxy-7.png",
            },
            {
              title: "Máy pha tự động",
              src: "https://cafengon.monamedia.net/wp-content/uploads/2025/01/galaxy-4.png",
            },
            {
              title: "Hario V60",
              src: "https://cafengon.monamedia.net/wp-content/uploads/2025/01/galaxy-1.png",
            },
          ].map((method, idx) => (
            <CarouselItem key={idx} className="basis-1/6">
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="bg-[#FFF4E0] rounded-full p-2.5">
                  <Image
                    src={method.src}
                    alt={method.title}
                    className="scale-80 hover:scale-70 duration-500 transition-all"
                    width={170}
                    height={170}
                  />
                </div>
                <Link
                  href="/shop"
                  className="mt-2.5 text-[#0f0f0f] group-hover:text-[#6f4323] transition-all"
                >
                  {method.title}
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex gap-2 items-center">
          <CarouselPrevious />
          <div className="text-[#333]">
            {totalSlides === 0 ? "0 / 0" : `${currentSlide} / ${totalSlides}`}
          </div>
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
};

export default CoffeeTypesSection;
