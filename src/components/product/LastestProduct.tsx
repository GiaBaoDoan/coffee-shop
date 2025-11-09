import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn, formatVND } from "@/lib/utils";
import { Product } from "@/types/product";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function chunkArray<T>(array: T[], size: number): T[][] {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

const LastestProduct = ({
  lastestProducts,
}: {
  lastestProducts: Product[];
}) => {
  return (
    <section>
      <h2 className="text-[22px] font-semibold uppercase mb-10 text-[#0f0f0f]">
        Sản phẩm mới nhất
      </h2>
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1,
        }}
      >
        <CarouselContent>
          {chunkArray(lastestProducts, 4).map((groups, slideIndex) => (
            <CarouselItem key={slideIndex}>
              <div className="grid grid-cols-1 gap-4">
                {groups.map((product, idx) => (
                  <Link
                    href={`/product/${product.slug}`}
                    key={idx}
                    className="flex border border-[#D6D6D6] cursor-pointer"
                  >
                    <div className="border-r border-[#D6D6D6] flex flex-col">
                      <div className="w-25 relative flex-1">
                        <Image
                          src={product.images[0].url}
                          alt={product.images[0].alternativeText as string}
                          fill
                          className="object-contain w-full"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col p-4">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        {product.onSale && (
                          <p className="text-[#727272] line-through text-xs font-medium">
                            {formatVND(product.price)}
                          </p>
                        )}
                        <p className="text-[#a80909] text-sm font-bold">
                          {product.onSale
                            ? formatVND(product.salePrice as number)
                            : formatVND(product.price)}
                        </p>
                      </div>

                      {/* Tên */}
                      <h4 className="text-[#0f0f0f] text-sm mb-2.5 hover:text-[#6f4323] transition-all">
                        {product.name}
                      </h4>

                      {/* Rating */}
                      <div className="flex gap-1 mb-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "size-3 fill-gray-300 stroke-gray-300",
                              i < (product.rating ?? 0) &&
                                "fill-yellow-500 stroke-yellow-500"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default LastestProduct;
