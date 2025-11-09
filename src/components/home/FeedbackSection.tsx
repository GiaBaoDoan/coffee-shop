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
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Van Long",
    role: "khách hàng",
    title: "Sản phẩm chất lượng",
    content:
      "Tôi rất ấn tượng với chất lượng sản phẩm. Sự tươi mới và tự nhiên của sản phẩm khiến tôi cảm thấy hài lòng và cảm thấy đáng giá với số tiền mình đã bỏ ra",
    rating: 5,
  },
  {
    name: "Ngọc Anh",
    role: "khách hàng",
    title: "Dịch vụ tuyệt vời",
    content:
      "Tôi rất ấn tượng với chất lượng sản phẩm. Sự tươi mới và tự nhiên của sản phẩm khiến tôi cảm thấy hài lòng và cảm thấy đáng giá với số tiền mình đã bỏ ra",
    rating: 5,
  },
  {
    name: "Hoàng Minh",
    role: "khách hàng",
    title: "Rất đáng tin cậy",
    content:
      "Tôi rất ấn tượng với chất lượng sản phẩm. Sự tươi mới và tự nhiên của sản phẩm khiến tôi cảm thấy hài lòng và cảm thấy đáng giá với số tiền mình đã bỏ ra",
    rating: 4,
  },
  {
    name: "Lan Phương",
    role: "khách hàng",
    title: "Sẽ giới thiệu bạn bè",
    content:
      "Tôi rất ấn tượng với chất lượng sản phẩm. Sự tươi mới và tự nhiên của sản phẩm khiến tôi cảm thấy hài lòng và cảm thấy đáng giá với số tiền mình đã bỏ ra",
    rating: 5,
  },
  {
    name: "Thu Hà",
    role: "khách hàng",
    title: "Đóng gói cẩn thận",
    content:
      "Tôi rất ấn tượng với chất lượng sản phẩm. Sự tươi mới và tự nhiên của sản phẩm khiến tôi cảm thấy hài lòng và cảm thấy đáng giá với số tiền mình đã bỏ ra",
    rating: 5,
  },
  {
    name: "Quang Huy",
    role: "khách hàng",
    title: "Giá cả hợp lý",
    content:
      "Tôi rất ấn tượng với chất lượng sản phẩm. Sự tươi mới và tự nhiên của sản phẩm khiến tôi cảm thấy hài lòng và cảm thấy đáng giá với số tiền mình đã bỏ ra",
    rating: 4,
  },
  {
    name: "Bích Trâm",
    role: "khách hàng",
    title: "Tư vấn nhiệt tình",
    content:
      "Tôi rất ấn tượng với chất lượng sản phẩm. Sự tươi mới và tự nhiên của sản phẩm khiến tôi cảm thấy hài lòng và cảm thấy đáng giá với số tiền mình đã bỏ ra",
    rating: 5,
  },
  {
    name: "Minh Tâm",
    role: "khách hàng",
    title: "Mua sắm dễ dàng",
    content:
      "Tôi rất ấn tượng với chất lượng sản phẩm. Sự tươi mới và tự nhiên của sản phẩm khiến tôi cảm thấy hài lòng và cảm thấy đáng giá với số tiền mình đã bỏ ra",
    rating: 5,
  },
  {
    name: "Hải Yến",
    role: "khách hàng",
    title: "Chất lượng ổn định",
    content:
      "Tôi rất ấn tượng với chất lượng sản phẩm. Sự tươi mới và tự nhiên của sản phẩm khiến tôi cảm thấy hài lòng và cảm thấy đáng giá với số tiền mình đã bỏ ra",
    rating: 4,
  },
  {
    name: "Đức Thịnh",
    role: "khách hàng",
    title: "Đáng để quay lại",
    content:
      "Tôi rất ấn tượng với chất lượng sản phẩm. Sự tươi mới và tự nhiên của sản phẩm khiến tôi cảm thấy hài lòng và cảm thấy đáng giá với số tiền mình đã bỏ ra",
    rating: 5,
  },
];

const FeedbackSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const { currentSlide, totalSlides } = useCarousel(api);
  return (
    <section className="max-w-[1290px] mx-auto px-11 pb-15 mb-15">
      <div className="flex flex-col items-center gap-2.5 text-center">
        <h2 className="text-3xl font-bold uppercase text-[#2b0a00]">
          Khách hàng đánh giá
        </h2>
        <p className="mb-7.5 text-[#333]">
          Nhâm nhi mỗi ngày với những loại cà phê đặc biệt như Arabica, Robusta,
          Espresso và nhiều hơn nữa!
        </p>
      </div>
      {/* slides */}
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          {testimonials.map((item, idx) => (
            <CarouselItem key={idx} className="basis-1/3">
              <div className="border border-[#999] rounded-lg py-7.5 px-12.5 gap-2.5">
                <div className="flex flex-col items-center">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={cn(
                          "size-3",
                          index < item.rating
                            ? "fill-yellow-400 stroke-yellow-400"
                            : "fill-gray-200 stroke-gray-200"
                        )}
                      />
                    ))}
                  </div>
                  {/* Title */}
                  <h2 className="my-3 font-semibold text-xl">{item.title}</h2>
                  {/* Content */}
                  <p className="text-center text-sm">{item.content}</p>
                </div>

                {/* Footer */}
                <div className="border-t pt-7.5 mt-7.5 border-[#999] flex flex-col items-center">
                  <div>
                    <span className="font-bold">{item.name}</span> - {item.role}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows + Index */}
        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex gap-2 items-center">
          <CarouselPrevious />
          <div className=" text-[#333]">
            {totalSlides === 0 ? "0 / 0" : `${currentSlide} / ${totalSlides}`}
          </div>
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
};

export default FeedbackSection;
