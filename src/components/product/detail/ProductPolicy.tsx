import Image from "next/image";

const ProductPolicy = () => {
  return (
    <div className="border-[#D6D6D6] border rounded-[5px] px-[15px] py-[30px] grid grid-cols-3 gap-[5px]">
      {[
        {
          img: "https://cafengon.monamedia.net/wp-content/uploads/2023/05/icon1-product-detail.png.webp",
          text: "THANH TOÁN AN TOÀN",
        },
        {
          img: "https://cafengon.monamedia.net/wp-content/uploads/2023/05/icon2-product-detail.png.webp",
          text: "ƯU ĐÃI GIỚI HẠN",
        },
        {
          img: "https://cafengon.monamedia.net/wp-content/uploads/2023/05/icon3-product-detail.png.webp",
          text: "HOÀN TRẢ NHANH CHÓNG",
        },
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <Image
            src={item.img}
            alt={item.text}
            width={60}
            height={60}
            className="object-cover w-15 h-15"
          />
          <p className="font-bold uppercase text-[#0f0f0f] mt-2 text-xs">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductPolicy;
