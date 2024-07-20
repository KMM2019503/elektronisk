"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";

import { Image as ImgaeType } from "@/type";
import React from "react";
import GalleryTab from "./galleryTab";

const Gallery = ({ images }: { images: ImgaeType[] }) => {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className={"grid grid-cols-4 gap-6"}>
          {images.map((image) => (
            <GalleryTab key={image.url} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanels className={"aspect-square md:aspect-auto w-full"}>
        {images.map((image) => (
          <TabPanel key={image.id}>
            <div className="aspect-square relative size-full  sm:rounded-md overflow-hidden">
              <Image
                src={image.url}
                alt={image.id}
                fill
                className="object-fill object-center"
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Gallery;
