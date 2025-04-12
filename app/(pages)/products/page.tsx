"use client";
import React from "react";
import SliderCard from "../components/Card";
import { mensData, womensData } from "@/app/constant/sliderData";
import Slider from "../components/Slider";

// type Props = {};

export default function ProductsPage({}) {
  return (
    <div>
      <p className="text-2xl py-5 font-medium">Mens collection</p>
      <div className="flex flex-wrap justify-center gap-4">
        {mensData &&
          mensData.map((item) => <SliderCard key={item.id} item={item} />)}
      </div>
      <div className="p-5">
        <Slider data={womensData} title="Man's Fasion" />
      </div>
    </div>
  );
}
