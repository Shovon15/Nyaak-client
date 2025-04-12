"use client";
import { kidsData, mensData, womensData } from "@/app/constant/sliderData";
import Slider from "./components/Slider";
import Banner from "./components/banner/Banner";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function SliderExample() {
  const router = useRouter();
  const handleViewAll = () => {
    router.push("/products");
  };

  return (
    <div className="w-full flex flex-col mx-auto p-0">
      <Banner />
      <div className="p-5">
        <Slider data={mensData} title="Man's Fasion" />
        <div className="text-center">
          <Button
            onClick={handleViewAll}
            variant={"outline"}
            className="px-5 rounded-full text-lg mt-5"
          >
            View all
          </Button>
        </div>
      </div>

      <div className="p-5 ">
        <Slider data={womensData} title="women's Fasion" className="" />
        <div className="text-center">
          <Button
            onClick={handleViewAll}
            variant={"outline"}
            className="px-5 rounded-full text-lg mt-5"
          >
            View all
          </Button>
        </div>
      </div>
      <div className="p-5 ">
        <Slider data={kidsData} title="Kid's Fasion" className="" />
        <div className="text-center">
          <Button
            onClick={handleViewAll}
            variant={"outline"}
            className="px-5 rounded-full text-lg mt-5"
          >
            View all
          </Button>
        </div>
      </div>
    </div>
  );
}
