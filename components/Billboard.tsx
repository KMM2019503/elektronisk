import { Billboard as BillboardType } from "@/type";
import React from "react";

interface BillboardProps {
  billboard: BillboardType;
}
const Billboard = ({ billboard }: BillboardProps) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1]  overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${billboard.imgUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center">
          <div className="font-bold text-3xl sm:text-4xl lg:text-5xl max-w-xs md:max-w-[500px] text-purple-600">
            {billboard.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
