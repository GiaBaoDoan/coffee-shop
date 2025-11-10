"use client";

import { getLastestProducts } from "@/apis/product";
import ProductCard from "@/components/product/ProductCard";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Product } from "@/types/product";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

const ProductRelatest = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const [api, setApi] = useState<CarouselApi>();

  const handlePrev = () => api?.scrollPrev();
  const handleNext = () => api?.scrollNext();

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        setLoading(true);
        const data = await getLastestProducts();
        setProducts(data);
      } catch {
        setLoading(false);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-25">
        <div className="w-8 h-8 border-3 border-[#d9d9d9] border-t-[#6f4323] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!products.length) {
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
          {products.map((prd) => (
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
