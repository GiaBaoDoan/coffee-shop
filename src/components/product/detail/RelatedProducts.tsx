"use client";

import ProductCard from "@/components/product/ProductCard";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useLatestProductsStore } from "@/strore/latest-products-store";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const ProductRelatest = () => {
  const [api, setApi] = useState<CarouselApi>();

  const handlePrev = () => api?.scrollPrev();
  const handleNext = () => api?.scrollNext();

  const { fetchLatestProducts, loading, latestProducts } =
    useLatestProductsStore();

  useEffect(() => {
    fetchLatestProducts();
  }, [fetchLatestProducts]);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-25">
        <div className="w-8 h-8 border-3 border-[#d9d9d9] border-t-[#6f4323] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!latestProducts.length) {
    return (
      <div className="py-10 text-left text-[]">Không có sản phẩm liên quan</div>
    );
  }

  return (
    <div className="mt-25">
      <div className="flex justify-between items-center">
        <h2 className="text-[#2b0a00] font-bold text-[34px] uppercase mb-10">
          Sản phẩm liên quan
        </h2>
        <div className="gap-2.5 flex">
          <button onClick={handlePrev}>
            <ArrowLeft />
          </button>
          <button onClick={handleNext}>
            <ArrowRight />
          </button>
        </div>
      </div>

      <Carousel setApi={setApi} opts={{ align: "start", slidesToScroll: 1 }}>
        <CarouselContent>
          {latestProducts.map((prd) => (
            <CarouselItem key={prd.id || prd.slug} className="basis-1/4">
              <ProductCard product={prd} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProductRelatest;
