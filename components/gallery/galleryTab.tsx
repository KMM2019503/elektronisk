import React from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";

import { Image as ImageType } from "@/type";
import { cn } from "@/lib/utils";

const galleryTab = ({ image }: { image: ImageType }) => {
  return (
    <Tab
      className={
        "relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white"
      }
    >
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              fill
              src={image.url}
              alt="Image"
              className="object-fill object-center"
            />
          </span>
        </div>
      )}
    </Tab>
  );
};

export default galleryTab;
