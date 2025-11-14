"use client";

import Image from "next/image";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCarousel } from "@/hook/useCarousel";

import { useEffect, useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import { useLatestProductsStore } from "@/strore/latest-products-store";

const ProductShowcaseSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const { currentSlide, totalSlides } = useCarousel(api);

  const { fetchLatestProducts, loading, latestProducts } =
    useLatestProductsStore();

  useEffect(() => {
    fetchLatestProducts();
  }, [fetchLatestProducts]);

  return (
    <section className="relative bg-[#F8F8F8] mb-15">
      {/* wave bg top */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        className="-z-1"
        preserveAspectRatio="none"
      >
        <path
          className="scale-y-50"
          fill="white"
          d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
        	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        ></path>
      </svg>
      {/* main content */}
      <div className="max-w-[1290px] mx-auto px-11 pb-10 relative z-10">
        <div className="flex flex-col justify-center items-center gap-2.5 mb-10">
          <h2 className="text-3xl font-bold uppercase text-[#2b0a00]">
            Sản phẩm đóng gói
          </h2>
          <p className="text-[#333333] text-sm mb-6">
            Nhâm nhi mỗi ngày với những loại cà phê đặc biệt như Arabica,
            Robusta, Espresso và nhiều hơn nữa!
          </p>
        </div>
        {/* products list */}

        {loading ? (
          "Đang tải dữ liệu"
        ) : (
          <Carousel
            opts={{ align: "start", slidesToScroll: 1 }}
            setApi={setApi}
          >
            <CarouselContent>
              {latestProducts.map((prd) => {
                return (
                  <CarouselItem key={prd.id || prd.slug} className="basis-1/4">
                    <ProductCard product={prd} />
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {/* Arrows + Index */}
            <div className="absolute -bottom-14 left-1/2 flex items-center gap-2 -translate-x-1/2">
              <CarouselPrevious />
              <div className="text-[#333]">
                {totalSlides === 0
                  ? "0 / 0"
                  : `${currentSlide} / ${totalSlides}`}
              </div>
              <CarouselNext />
            </div>
          </Carousel>
        )}

        <div className="absolute -bottom-20 -left-5 opacity-30">
          <Image
            src="https://cafengon.monamedia.net/wp-content/uploads/2025/01/icon-coffee.png"
            alt="logo"
            width={130}
            height={130}
          />
        </div>
      </div>
      {/* wave bg bottom */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        className="scale-y-[-1] -z-1"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          className="scale-y-50"
          d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        ></path>
      </svg>
    </section>
  );
};

export default ProductShowcaseSection;
