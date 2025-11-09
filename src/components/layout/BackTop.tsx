"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [show, setShow] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;

      setScrollPercent(scrolled);
      setShow(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 24; // radius vòng tròn
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollPercent / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-white  rounded-full z-1000 flex items-center justify-center transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      title="Back to Top"
      style={{ width: 50, height: 50 }}
    >
      {/* Progress Circle */}
      <svg
        className="absolute inset-0"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        style={{ transform: "rotate(-90deg)" }}
      >
        {/* Background circle */}
        <circle
          cx="25"
          cy="25"
          r={radius}
          stroke="rgba(111, 67, 35, 0.3)" // màu nền nhẹ
          strokeWidth="2"
          fill="transparent"
        />
        {/* Progress circle */}
        <circle
          cx="25"
          cy="25"
          r={radius}
          stroke="#6f4323" // màu progress bar yêu cầu
          strokeWidth="2"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      {/* Icon */}
      <div className="bg-white">
        <ArrowUp className="w-5 h-5 relative z-10 text-[#6f4323]" />
      </div>
    </button>
  );
};

export default BackToTop;
