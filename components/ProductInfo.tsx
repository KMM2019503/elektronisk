"use client";

import React, { MouseEventHandler } from "react";

import { Product } from "@/type";

import Button from "./ui/Button";

import { FaCartPlus } from "react-icons/fa";
import { GoCpu } from "react-icons/go";
import { MdCloseFullscreen, MdOutlineCamera } from "react-icons/md";
import { IoBatteryChargingOutline } from "react-icons/io5";
import useCartItemsStore from "@/hooks/useCartItems";

const ProductInfo = ({ product }: { product: Product }) => {
  const cart = useCartItemsStore();

  const handleAddProduct: MouseEventHandler = (event) => {
    event.stopPropagation();

    cart.addItem(product);
  };
  return (
    <div className="w-full mt-5 lg:mt-0">
      {/* information */}

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div
            className="size-7 rounded-full"
            style={{ backgroundColor: product.backcolor.value }}
          />
        </div>

        <p className="text-base text-gray-600 font-semibold">
          ${product.price} - ({product.memory})
        </p>
        <div className="bg-gray-800 w-full h-[1px] opacity-20" />
        <div className="flex flex-col gap-3 font-medium">
          <p>Category : {product.category.name}</p>
          {/* CPU */}
          <div className="flex items-center gap-2">
            <GoCpu className="size-6 text-gray-800" />
            <p className="text-sm text-gray-700 font-semibold">CPU</p>

            <p className="text-sm text-gray-700 font-medium">{product.cpu}</p>
          </div>
          {/* Display */}
          <div className="flex flex-col gap-3 ">
            <div className="flex items-center gap-2">
              <MdCloseFullscreen className="size-6 text-gray-800" />
              <p className="text-base text-gray-700 font-semibold">Display</p>
              <div className="w-full h-[1px] bg-black mr-10" />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-700 font-semibold">Type</p>

              <p className="text-xs text-gray-700 font-medium">
                {product.displayType}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-700 font-semibold">Size</p>

              <p className="text-xs text-gray-700 font-medium">
                {product.displaySize}
              </p>
            </div>
          </div>
          {/* Battery */}
          <div className="flex flex-col gap-3 ">
            <div className="flex items-center gap-2">
              <IoBatteryChargingOutline className="size-6 text-gray-800" />
              <p className="text-base text-gray-700 font-semibold">Battery</p>
              <div className="w-full h-[1px] bg-black mr-10" />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-700 font-semibold">Type</p>

              <p className="text-xs text-gray-700 font-medium">
                {product.batteryType}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-700 font-semibold">Charging</p>

              <p className="text-xs text-gray-700 font-medium">
                {product.chargingSpeed}
              </p>
            </div>
          </div>
          {/* Camera */}
          <div className="flex flex-col gap-3 ">
            <div className="flex items-center gap-2">
              <MdOutlineCamera className="size-6 text-gray-800" />
              <p className="text-base text-gray-700 font-semibold">Camera</p>
              <div className="w-full h-[1px] bg-black mr-10" />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-700 font-semibold">Main</p>

              <p className="text-xs text-gray-700 font-medium">
                {product.mainCamera}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-700 font-semibold">Selfie</p>

              <p className="text-xs text-gray-700 font-medium">
                {product.selfieCamera}
              </p>
            </div>
          </div>
        </div>
        <div className="self-end">
          <Button
            className="bg-gray-800 hover:bg-gray-700 py-2 text-white flex items-center gap-3 font-serif"
            onClick={handleAddProduct}
          >
            Add To Cart
            <FaCartPlus className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
