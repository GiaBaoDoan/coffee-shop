import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const FollowUsSection = () => {
  return (
    <section className="max-w-[1290px] mx-auto px-11 pb-15">
      {/* title */}
      <div className="flex flex-col items-center gap-2.5 text-center">
        <h2 className="text-3xl font-bold uppercase text-[#2b0a00]">
          Theo dõi trên Instagram
        </h2>
        <p className="mb-7.5 text-[#333] max-w-3xl w-full mx-auto">
          Khám phá thế giới đa dạng của cà phê thông qua những hình ảnh tuyệt
          đẹp. Đắm chìm trong hương vị đậm đà và thơm ngon của cà phê, cùng tận
          hưởng sự sáng tạo và cảm nhận sâu lắng từ mỗi giọt cà phê. Hãy để
          chúng tôi dẫn bạn vào cuộc hành trình khám phá vị ngon và thú vị của
          cà phê!
        </p>
      </div>
      {/* ingstagrams */}
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1/5">
            <div className="max-w-[600px] rounded-lg overflow-hidden cursor-pointer">
              <Image
                src="https://cafengon.monamedia.net/wp-content/uploads/2024/12/insta1.jpg"
                alt="anh"
                width={240}
                height={240}
                className="w-full object-cover hover:scale-105 transition-all duration-600"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <div className="max-w-[600px] rounded-lg overflow-hidden cursor-pointer">
              <Image
                src="https://cafengon.monamedia.net/wp-content/uploads/2024/12/insta2.jpg"
                alt="anh"
                width={240}
                height={240}
                className="w-full object-cover hover:scale-105 transition-all duration-600"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <div className="max-w-[600px] rounded-lg overflow-hidden cursor-pointer">
              <Image
                src="https://cafengon.monamedia.net/wp-content/uploads/2024/12/insta3.jpg"
                alt="anh"
                width={240}
                height={240}
                className="w-full object-cover hover:scale-105 transition-all duration-600"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <div className="max-w-[600px] rounded-lg overflow-hidden cursor-pointer">
              <Image
                src="https://cafengon.monamedia.net/wp-content/uploads/2024/12/insta4.jpg"
                alt="anh"
                width={240}
                height={240}
                className="w-full object-cover hover:scale-105 transition-all duration-600"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <div className="max-w-[600px] rounded-lg overflow-hidden cursor-pointer">
              <Image
                src="https://cafengon.monamedia.net/wp-content/uploads/2024/12/insta5.jpg"
                alt="anh"
                width={240}
                height={240}
                className="w-full object-cover hover:scale-105 transition-all duration-600"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default FollowUsSection;
