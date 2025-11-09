"use client";

import { cn, getDiscountPercent } from "@/lib/utils";
import { Product } from "@/types/product";
import { MoveLeft, MoveRight } from "lucide-react";
import { useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Magnifier from "react-magnifier";
import Image from "next/image";

const ProductGallery = ({
  product,
  zommImage = false,
  typeGrid = "list-4",
}: {
  product: Product;
  zommImage?: boolean;
  typeGrid?: "list-3" | "list-4";
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  const handleClick = (index: number) => {
    setActiveIndex(index);
    api?.scrollTo(index);
  };

  const handlePrev = () => api?.scrollPrev();
  const handleNext = () => api?.scrollNext();

  const MagnifierAny = Magnifier as any;

  return (
    <section>
      <div className="border border-[#d9d9d9] relative">
        <div className="flex justify-center items-center">
          {zommImage ? (
            <MagnifierAny
              src={product.images[activeIndex].url}
              width={575}
              height={575}
              mgWidth={150}
              mgHeight={150}
              style={{
                width: "100%", // ép ảnh bằng container
                height: "100%",
                objectFit: "contain", // hoặc "contain" nếu không muốn crop
              }}
            />
          ) : (
            <Image
              src={product.images[activeIndex].url}
              alt={product.images[activeIndex].alternativeText as string}
              width={575}
              height={575}
              className="w-[575px] h-[575px] object-contain"
            />
          )}
        </div>

        {product.onSale && (
          <div className="absolute top-4 right-4 z-10 min-w-[50px] px-2 py-1 text-xs font-medium text-white bg-[#6f4323] rounded">
            -
            {getDiscountPercent({
              salePrice: product.salePrice,
              price: product.price,
            })}
            %
          </div>
        )}
      </div>
      <Carousel
        opts={{ slidesToScroll: 1, align: "start" }}
        setApi={setApi}
        className="mt-[30px] group"
      >
        <CarouselContent>
          {product.images.map((img, index) => (
            <CarouselItem
              key={index}
              className={cn(typeGrid === "list-3" ? "basis-1/3" : "basis-1/4")}
            >
              <div
                onClick={() => handleClick(index)}
                className={cn(
                  "border cursor-pointer transition-all aspect-square flex flex-col justify-center items-center px-3.5",
                  activeIndex === index
                    ? "border-[#6f4323]"
                    : "border-[#d9d9d9] hover:border-[#6f4323]"
                )}
              >
                <Image
                  src={img.url as string}
                  alt={`Ảnh nhỏ ${index + 1}`}
                  width={150}
                  height={150}
                  className="object-contain h-full w-[150px]"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#d6d6d69e] p-2 opacity-0 group-hover:opacity-300 
                     -translate-x-5 group-hover:translate-x-0  text-[#727272] hover:text-white hover:bg-[#6f4323] transition-all duration-300"
        >
          <MoveLeft className="w-4 h-4" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#d6d6d69e] p-2 opacity-0 group-hover:opacity-300 
                     translate-x-5 group-hover:translate-x-0 text-[#727272] hover:text-white hover:bg-[#6f4323] group transition-all duration-300"
        >
          <MoveRight className="w-4 h-4" />
        </button>
      </Carousel>
    </section>
  );
};

export default ProductGallery;
