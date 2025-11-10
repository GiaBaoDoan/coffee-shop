import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen">
      {/* title */}
      <article className="h-[290px] px-7.5 py-22.5 bg-[url('https://cafengon.monamedia.net/wp-content/uploads/2023/04/bread-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-[1290px] mx-auto">
          <h2 className="text-6xl text-[#2b0200] mb-4 font-semibold">
            Giới thiệu
          </h2>
          <div className="flex items-center gap-3 flex-wrap">
            <Link
              className="text-[#727272] hover:text-[#454545] transition-all uppercase text-sm"
              href="/"
            >
              Trang chủ
            </Link>
            <ChevronRight className="text-[#727272] stroke-1 text-[8px]" />
            <span className="font-bold text-[#454545] uppercase text-sm">
              Giới thiệu
            </span>
          </div>
        </div>
      </article>
      {/*  */}
      <div className="max-w-[1290x] mx-auto pt-17.5 pb-20 px-7.5">
        <div className="flex items-center">
          <div className="px-[15px] basis-1/3">
            <h2 className="text-[34px] text-[#2b0200] mb-5 uppercase font-semibold">
              Sự vượt trội
            </h2>
            <p className="mb-2.5 text-[#333]">
              Chúng tôi là điểm đến lý tưởng cho những người yêu cà phê, văn vở
              và nhiều sản phẩm khác. Với cam kết mang đến sự đa dạng và chất
              lượng, cửa hàng của chúng tôi không chỉ là nơi để thưởng thức
              hương vị đặc biệt của cà phê mà còn là điểm đến lý tưởng cho những
              người đam mê văn chương và sự sáng tạo.
            </p>
            <p className="text-[#333] mb-2.5">
              Chúng tôi tự hào mang đến cho bạn những sản phẩm cà phê chất lượng
              cao, được chăm sóc từ nguồn nguyên liệu tốt nhất trên thế giới. Sự
              kết hợp hoàn hảo giữa truyền thống và sáng tạo để tạo ra những
              trải nghiệm cà phê độc đáo và vượt trội.
            </p>
          </div>
          <div className="px-[15px] basis-2/3">
            <div className="overflow-hidden border rounded-[10px]">
              <Image
                src="https://cafengon.monamedia.net/wp-content/uploads/2025/01/about2.png"
                alt="anh"
                width={830}
                height={553}
                className="hover:scale-105 transition-all duration-500 max-w-[800px] w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div>
        <div className="max-w-[1290px] mx-auto px-[60px] mb-[70px]">
          <h2 className="text-[34px] text-[#2b0200] mb-5 uppercase font-semibold">
            Dịch vụ tận tâm
          </h2>
          <div className="grid grid-cols-4 gap-7.5">
            <div className="flex items-center p-6 gap-6 border rounded-[5px] hover:border-black transition-all">
              <div className="w-12 shrink-0 h-12">
                <Image
                  src="https://cafengon.monamedia.net/wp-content/uploads/2025/01/ship-about.png.webp"
                  alt="anh"
                  width={60}
                  height={60}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="cursor-pointer">
                <h4 className="mb-2 font-semibold text-sm">MIễn phí ship</h4>
                <span className="text-[#333] text-sm">
                  Cho đơn hàng trên 3tr
                </span>
              </div>
            </div>
            <div className="flex items-center p-6 gap-6 border border-[#D9D9D9] rounded-[5px] hover:border-black transition-all">
              <div className="w-12 shrink-0 h-12">
                <Image
                  src="https://cafengon.monamedia.net/wp-content/uploads/2023/05/icon3-product-detail.png.webp"
                  alt="anh"
                  width={60}
                  height={60}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="cursor-pointer">
                <h4 className="mb-2 font-semibold text-sm">
                  Hoàn trả nhanh chóng
                </h4>
                <span className="text-[#333] text-sm">Trong vòng 3 ngày</span>
              </div>
            </div>
            <div className="flex items-center p-6 gap-6 border rounded-[5px] hover:border-black transition-all">
              <div className="w-12 shrink-0 h-12">
                <Image
                  src="https://cafengon.monamedia.net/wp-content/uploads/2023/05/icon1-product-detail.png.webp"
                  alt="anh"
                  width={60}
                  height={60}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="cursor-pointer">
                <h4 className="mb-2 font-semibold text-sm">
                  Thanh toán an toàn
                </h4>
                <span className="text-[#333] text-sm">
                  Nhanh chóng và tiện lợi
                </span>
              </div>
            </div>
            <div className="flex items-center p-6 gap-6 border rounded-[5px] hover:border-black transition-all">
              <div className="w-12 shrink-0 h-12">
                <Image
                  src="https://cafengon.monamedia.net/wp-content/uploads/2023/05/icon2-product-detail.png.webp"
                  alt="anh"
                  width={60}
                  height={60}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="cursor-pointer">
                <h4 className="mb-2 font-semibold text-sm">Ưu đãi lớn</h4>
                <span className="text-[#333] text-sm">
                  Khuyến mãi hàng tuần
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="max-w-[1290x] px-[45px] mb-[70px] mx-auto">
        <div className="flex items-center">
          {/* left section */}
          <div className="px-[15px] basis-1/3">
            <h2 className="text-[34px] text-[#2b0200] mb-5 uppercase font-semibold">
              Liên hệ
            </h2>
            {/* dia chi */}
            <div className="border-b border-[#D9D9D9] pb-[30px] mt-[30px] mb-1 max-w-[230px] w-full">
              <h3 className="text-xl uppercase text-[#2b0a00] font-semibold mb-1">
                Địa chỉ
              </h3>
              <p className="text-sm font-light text-[#2b0a00]">
                1073/23 CMT8, P.7, Q.Tân Bình, TP.HCM
              </p>
            </div>
            {/* hotline */}
            <div className="border-b border-[#D9D9D9] pb-[30px] mt-[30px] mb-1 max-w-[230px] w-full">
              <h3 className="text-xl uppercase text-[#2b0a00] font-semibold mb-1">
                HOTLINE
              </h3>
              <p className="text-sm font-light text-[#2b0a00]">
                (+84) 0313-728-397
              </p>
            </div>
            {/* email */}
            <div className="border-b border-[#D9D9D9] pb-[30px] mt-[30px] mb-1 max-w-[230px] w-full">
              <h3 className="text-xl uppercase text-[#2b0a00] font-semibold mb-1">
                EMAIL
              </h3>
              <p className="text-sm font-light text-[#2b0a00]">
                info@themona.global
              </p>
            </div>
            {/* time */}
            <div className="pb-[30px] mt-[30px] mb-1 max-w-[230px] w-full">
              <h3 className="text-xl uppercase text-[#2b0a00] font-semibold mb-1">
                GIỜ MỞ CỦA
              </h3>
              <p className="text-sm font-light text-[#2b0a00]">
                Thứ 2 - Thứ 7: 08:00 - 21:00
                <br />
                Chủ nhật: 08:00 - 19:00
              </p>
            </div>
          </div>
          {/* right section */}
          <div className="px-[15px] basis-2/3 ">
            <div className="rounded-[10px] overflow-hidden">
              <Image
                src="https://cafengon.monamedia.net/wp-content/uploads/2025/01/blog2.jpg"
                alt="anh"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                width={830}
                height={555}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
