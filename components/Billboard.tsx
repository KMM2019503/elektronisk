import { Billboard as BillboardType } from "@/type";
import React from "react";

interface BillboardProps {
  billboard: BillboardType;
}
const Billboard = ({ billboard }: BillboardProps) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.7/1] lg:aspect-[4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${billboard.imgUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center">
          <div className="font-bold text-3xl sm:text-3xl lg:text-4xl max-w-xs md:max-w-[500px] md:shadow-xl md:p-4 md:rounded-2xl md:bg-gray-400  md:bg-clip-padding md:backdrop-filter md:backdrop-blur-sm md:bg-opacity-5">
            {billboard.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
