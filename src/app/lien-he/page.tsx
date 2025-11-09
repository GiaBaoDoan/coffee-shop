import ContactForm from "@/components/contact/contact-form";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen">
      {/* tieu de trang lien he */}
      <article className="h-[290px] px-[30px] py-[90px] bg-[url('https://cafengon.monamedia.net/wp-content/uploads/2023/04/bread-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-[1290px] mx-auto">
          <h2 className="text-6xl text-[#2b0200] mb-4 font-semibold">
            Liên hệ
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
              Liên hệ
            </span>
          </div>
        </div>
      </article>

      <div className="max-[1290px] mx-auto flex my-[50px] px-[45px]">
        {/* left section */}
        <div className="pr-[15px] basis-1/4">
          {/* dia chi */}
          <div className="border-b border-[#D9D9D9] pb-[30px] mb-1 max-w-[230px] w-full">
            <h3 className="text-xl uppercase text-[#2b0a00] font-semibold mb-1">
              Địa chỉ
            </h3>
            <p className="text-sm font-light text-[#2b0a00]">
              1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM
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
              08:00 - 22:00 (Thứ 2 - chủ nhật)
            </p>
          </div>
        </div>
        {/* contact form */}
        <div className="basis-3/4">
          <h2 className="text-[34px] text-[#2b0200] mb-5 uppercase font-semibold">
            Liên hệ
          </h2>
          <ContactForm />
        </div>
        {/* map */}
      </div>
      <div className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.213299982167!2d106.66003637508204!3d10.794391089354465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed7b2ff8b3d%3A0x46c15db25a454abf!2zMTA3My8yMyDEkOG6oWNoIEPhuqdjIE3huqFuaCBUaMOgbmcgOCwgUGjGsOG7nW5nIDcsIFRow6FuIELDrG5oLCBUcC4gSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1727693400000!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
