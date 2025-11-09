import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const FeatureHighlightSection = () => {
  return (
    <section>
      <div className="max-w-[1290px] mx-auto px-11 pb-15">
        <div className="grid grid-cols-2">
          {/* Left section */}
          <div className="border border-[#999] rounded-s-lg overflow-hidden">
            <div className="flex flex-col items-center gap-2.5 pt-15 pb-17.5 px-5">
              <div className="flex flex-col items-center gap-2.5 text-center">
                <h2 className="text-3xl font-bold uppercase text-[#2b0a00]">
                  Sự vượt trội hàng đầu
                </h2>
                <p className="mb-7.5 text-[#333]">
                  Khám phá yếu tố chất lượng hàng đầu của sản phẩm cà phê tại
                  cửa hàng của chúng tôi, nơi mang đến cho bạn trải nghiệm
                  thưởng thức cà phê nguyên chất tuyệt vời nhất.
                </p>
              </div>

              <div className="w-full max-w-sm">
                {[
                  "Hạt cà phê chất lượng cao",
                  "Rang xay tại chỗ",
                  "Đa dạng sản phẩm",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-5 border-b border-[#2b0a00] py-5 text-xl font-medium text-[#2b0a00]"
                  >
                    <div>{`0${i + 1}`}</div>
                    <div>{text}</div>
                  </div>
                ))}

                <div className="mt-12.5 flex justify-center">
                  <Link
                    href="/lien-he"
                    className="rounded-[5px] border border-[#6f4323] bg-[#6f4323] px-[25px] py-[11px] font-medium capitalize text-white transition-all hover:bg-white hover:text-[#6f4323]"
                  >
                    Khám phá ngay
                  </Link>
                </div>
              </div>
            </div>
            {/* Marquee */}
            <Marquee
              speed={40}
              pauseOnHover
              className="border-t p-5 border-[#999]"
            >
              <div className="flex gap-2 items-center mx-5">
                <Image
                  src="https://cafengon.monamedia.net/wp-content/uploads/2024/12/h28-ico2.png"
                  className="w-8 object-center"
                  width={100}
                  alt="anhr"
                  height={100}
                />
                <p className="font-semibold">
                  Giao hàng miễn phí cho đơn trên 3 triệu
                </p>
              </div>
              <div className="flex gap-2 items-center mx-5">
                <Image
                  src="https://cafengon.monamedia.net/wp-content/uploads/2024/12/h28-ico1.png"
                  className="w-4 object-center"
                  width={100}
                  alt="anhr"
                  height={100}
                />
                <p className="font-semibold">Không chất bảo quản</p>
              </div>
              <div className="flex gap-2 items-center mx-5">
                <Image
                  src="https://cafengon.monamedia.net/wp-content/uploads/2024/12/h28-ico3.png"
                  className="w-8 object-center"
                  width={100}
                  alt="anhr"
                  height={100}
                />
                <p className="font-semibold">Cafe đảm bảo chất lượng</p>
              </div>
              <div className="flex gap-2 items-center mx-5">
                <Image
                  src="https://cafengon.monamedia.net/wp-content/uploads/2024/12/h28-ico4.png"
                  className="w-8 object-center"
                  width={100}
                  alt="anhr"
                  height={100}
                />
                <p className="font-semibold">Đổi trả nhanh chóng</p>
              </div>
            </Marquee>
          </div>

          {/* Right section */}
          <div className="rounded-e-lg bg-[url('https://cafengon.monamedia.net/wp-content/uploads/2025/01/blog4.jpg')] bg-cover bg-center"></div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlightSection;
