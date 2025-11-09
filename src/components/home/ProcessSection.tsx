"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useCarousel } from "@/hook/useCarousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProcessSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const { currentSlide, totalSlides } = useCarousel(api);
  return (
    <section className="bg-[#F8F8F8] mb-15 relative">
      {/* wave top */}
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

      <div className="mx-auto max-w-[1290px] px-11 pb-10">
        {/* title */}
        <div className="mb-7.5 flex flex-col items-center gap-2.5 text-center">
          <h2 className="text-3xl font-bold uppercase text-[#2b0a00]">
            Hành trình sản xuất cà phê
          </h2>
          <p className="mb-7.5 text-[#333]">
            Khám phá quy trình chất lượng hàng đầu của sản phẩm cà phê tại cửa
            hàng của chúng tôi.
          </p>
        </div>

        {/* slides */}
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
                src: "https://cafengon.monamedia.net/wp-content/uploads/2024/12/h28-step1.png",
                title: "Trồng và thu hoạch",
                desc: "Quy trình bắt đầu với việc chọn lựa những quả cà phê chín màu đỏ đậm, sau đó tiến hành thu hoạch. Quá trình thu hoạch cần sự kỹ lưỡng để đảm bảo chất lượng cao.",
              },
              {
                src: "https://cafengon.monamedia.net/wp-content/uploads/2024/12/h28-step2.png",
                title: "Xử lý hạt cà phê",
                desc: "Sau khi thu hoạch, hạt cà phê được tách chất bã và vỏ thông qua quá trình xử lý.",
              },
              {
                src: "https://cafengon.monamedia.net/wp-content/uploads/2024/12/h28-step3.png",
                title: "Rang hạt cà phê",
                desc: "Hạt cà phê sau khi được xử lý sẽ được rang để tạo ra hương vị đặc trưng.",
              },
              {
                src: "https://cafengon.monamedia.net/wp-content/uploads/2024/12/h28-step4.png",
                title: "Pha chế và thưởng thức",
                desc: "Cuối cùng, sau khi hạt cà phê đã được rang, chúng được xay nhuyễn và sử dụng để pha chế cà phê.",
              },
            ].map((item, i) => (
              <CarouselItem key={i} className="basis-1/2">
                <div className="flex items-center gap-5">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="max-w-[496px] w-full hover:scale-105 transition-all object-cover"
                  />
                  <div className="basis-[80%]">
                    <h2 className="text-2xl capitalize font-semibold text-[#0f0f0f]">
                      {item.title}
                    </h2>
                    <p className="mt-2.5 mb-4 text-[#333] text-sm">
                      {item.desc}
                    </p>
                    <Link
                      href="/gioi-thieu"
                      className="mt-[13px] inline-block rounded-[5px] border border-[#6f4323] bg-[#6f4323] px-7.5 py-2.5 font-medium text-white transition-all hover:bg-white hover:text-[#6f4323]"
                    >
                      Khám phá
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center gap-2.5 mt-5">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 w-2 rounded-full transition-all hover:bg-[#6f4323] hover:scale-105",
                currentSlide === index + 1
                  ? "bg-[#6f4323] scale-110"
                  : "bg-gray-300"
              )}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>

        <div className="absolute z-10 opacity-50 bottom-10 right-0">
          <Image
            src="https://cafengon.monamedia.net/wp-content/uploads/2025/01/icon-animation-e1736914526886.png"
            alt="anhr"
            className="max-w-[395px] w-full object-cover"
            width={100}
            height={200}
          />
        </div>
      </div>

      {/* wave top */}
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

export default ProcessSection;
