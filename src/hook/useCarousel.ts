import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

export function useCarousel(api?: CarouselApi) {
  const [totalSlides, setTotalSlides] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => setCurrentSlide(api.selectedScrollSnap() + 1);

    // set tổng số slide + vị trí hiện tại
    setTotalSlides(api.scrollSnapList().length);
    updateCurrent();

    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent); // cleanup
    };
  }, [api]);

  return { totalSlides, currentSlide };
}
