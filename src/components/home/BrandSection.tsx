import Image from "next/image";
import Marquee from "react-fast-marquee"; // ví dụ dùng react-fast-marquee

const brandLogos = [
  "https://cafengon.monamedia.net/wp-content/uploads/2024/12/h28-brand1.png",
  "https://cafengon.monamedia.net/wp-content/uploads/2024/12/h28-brand2.png",
  "https://cafengon.monamedia.net/wp-content/uploads/2024/12/h28-brand3.png",
  "https://cafengon.monamedia.net/wp-content/uploads/2024/12/h28-brand4.png",
  "https://cafengon.monamedia.net/wp-content/uploads/2024/12/h28-brand5.png",
  "https://cafengon.monamedia.net/wp-content/uploads/2024/12/h28-brand6.png",
  "https://cafengon.monamedia.net/wp-content/uploads/2024/12/h28-brand7.png",
];

export default function BrandSection() {
  return (
    <Marquee
      className="bg-[url('https://cafengon.monamedia.net/wp-content/uploads/2024/12/h28-bg-brand.png')] 
                 bg-no-repeat bg-center bg-cover h-40 w-full space-x-24"
      gradient={false}
      speed={40}
    >
      <div className="flex items-center gap-12">
        {brandLogos.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`brand-${i + 1}`}
            width={220}
            height={120}
            className="h-12 w-auto object-cover"
          />
        ))}
      </div>
    </Marquee>
  );
}
