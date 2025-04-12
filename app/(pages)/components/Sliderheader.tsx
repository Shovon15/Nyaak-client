import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

type Props = {
  title: string | undefined;
  scrollLeft: () => void;
  scrollRight: () => void;
  showLeftButton: boolean;
  showRightButton: boolean;
};

export default function Sliderheader({
  title,
  scrollLeft,
  scrollRight,
  showLeftButton,
  showRightButton,
}: Props) {
  return (
    <div className="flex justify-between items-center pb-3 px-4 md:px-6">
      {title && <h2 className="text-2xl font-bold ">{title}</h2>}
      <div className="flex gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollLeft}
          className="z-10 bg-white/80 rounded-full p-2 shadow-md hidden lg:flex items-center justify-center cursor-pointer"
          aria-label="Previous items"
          disabled={!showLeftButton}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={scrollRight}
          className={`z-10 bg-white/80 rounded-full p-2 shadow-md hidden lg:flex items-center justify-center cursor-pointer`}
          aria-label="Next items"
          disabled={!showRightButton}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
