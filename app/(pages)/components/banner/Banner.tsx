"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  autoSlideInterval?: number;
};

export default function Banner({ autoSlideInterval = 10000 }: Props) {
  const bannerData = [
    {
      id: "1",
      image: "/images/banner/banner.jpg",
    },
    {
      id: "2",
      image: "/images/banner/banner-2.jpg",
    },
    {
      id: "3",
      image: "/images/banner/banner-3.webp",
    },
    {
      id: "4",
      image: "/images/banner/banner.jpg",
    },
    {
      id: "5",
      image: "/images/banner/banner-2.jpg",
    },
    {
      id: "6",
      image: "/images/banner/banner-3.webp",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
  }, [bannerData.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? bannerData.length - 1 : prev - 1));
  }, [bannerData.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [nextSlide, autoSlideInterval]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slider container */}
      <div
        className="flex transition-transform duration-500 ease-out h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {bannerData.map((item) => (
          <div key={item.id} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={item.image || "/placeholder.svg"}
              alt="banner"
              fill
              priority={currentSlide === Number.parseInt(item.id) - 1}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {bannerData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
