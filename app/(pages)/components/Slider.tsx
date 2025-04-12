"use client";

import type React from "react";
import { useRef, useState, useEffect } from "react";
import SliderCard from "./Card";
import "./slider-card.css";
import Sliderheader from "./Sliderheader";
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { cn } from "@/lib/utils"

type SliderProps = {
  data: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
  }>;
  title?: string;
  className?: string;
};

export default function Slider({ data, title, className }: SliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeft] = useState(0);

  // Check if we need to show navigation buttons
  const checkButtonVisibility = () => {
    if (!sliderRef.current) return;

    setShowLeftButton(sliderRef.current.scrollLeft > 0);
    setShowRightButton(
      sliderRef.current.scrollLeft <
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth - 10,
    );
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", checkButtonVisibility);
      // Initial check
      checkButtonVisibility();
    }

    return () => {
      if (slider) {
        slider.removeEventListener("scroll", checkButtonVisibility);
      }
    };
  }, []);

  // Scroll functions for buttons
  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: -sliderRef.current.clientWidth / 3.5,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: sliderRef.current.clientWidth / 3.5,
      behavior: "smooth",
    });
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Scroll speed multiplier
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeftState - walk;
    }
  };

  return (
    <div className={`relative w-full", ${className}`}>
      <Sliderheader
        title={title}
        scrollLeft={scrollLeft}
        scrollRight={scrollRight}
        showLeftButton={showLeftButton}
        showRightButton={showRightButton}
      />
      {/* ${isDragging ? "cursor-grabbing" : "cursor-grab lg:cursor-grab"} */}
      <div
        ref={sliderRef}
        className={`flex flex-row gap-4 w-full overflow-x-auto pb-4 scrollbar-hide select-none
      
         `}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-1 w-[250px] sm:w-[250px] md:w-[300px] h-full min-h-[400px]"
          >
            <SliderCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
