import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Ảnh nền */}
      <Image
        src="https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg"
        alt="Nền hạt cà phê"
        fill
        priority
        className="object-cover opacity-70"
      />

      {/* Overlay mờ để làm nổi chữ */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/40 to-transparent" />

      {/* Nội dung chính */}
      <div className="absolute left-10 z-10 max-w-xl text-left md:w-1/2 space-y-6">
        <h1 className="text-2xl md:text-5xl font-semibold leading-snug">
          <span className="text-left tracking-[0.25em] text-white/90 uppercase text-xs font-medium">
            COFFEE BREWING RECIPES
          </span>
          <p>
            Khởi đầu tinh tế <br /> cùng hương vị cà phê đậm đà
          </p>
        </h1>

        <p className="text-sm md:text-base text-white/90 leading-relaxed">
          Trải nghiệm những tầng hương thuần khiết từ hạt cà phê được chọn lọc
          kỹ lưỡng, rang xay theo tiêu chuẩn quốc tế và pha chế bằng sự tận tâm
          của những barista chuyên nghiệp.
        </p>

        <div className="flex items-center gap-4">
          <Link
            href="/shop"
            className="rounded-full border border-[#6f4323] bg-[#6f4323] px-[25px] py-2.5 font-medium text-white transition-all hover:bg-white hover:text-[#6f4323]"
          >
            <span>Khám phá ngay</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
