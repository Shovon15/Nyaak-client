import { kidsData, mensData, womensData } from "@/constant/sliderData";
import Slider from "./components/Slider";

export default function SliderExample() {
  // Example data - you can replace this with your own data
  

  // You can use the slider multiple times with different data
//   const featuredData = sliderData.slice(0, 8);

  return (
    <div className="w-full flex flex-col mx-auto p-0 border ">
      <div className="p-5">
        <Slider data={mensData} title="Man's Fasion" />
      </div>

      <div className="p-5 ">
        <Slider data={womensData} title="women's Fasion" className="" />
      </div>
      <div className="p-5 ">
        <Slider data={kidsData} title="Kid's Fasion" className="" />
      </div>
    </div>
  );
}
