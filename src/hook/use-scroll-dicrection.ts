import { useState, useEffect } from "react";

export function useScrollInfo(threshold: number = 200) {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScroll = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";

      // Chỉ cập nhật khi thay đổi rõ rệt (tránh giật)
      if (
        direction !== scrollDirection &&
        Math.abs(scrollY - lastScrollY) > 10
      ) {
        setScrollDirection(direction);
      }

      // Kiểm tra xem đã cuộn qua threshold chưa
      setIsScrolled(scrollY > threshold);

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, [scrollDirection, threshold]);

  return { scrollDirection, isScrolled };
}
