"use client";
import React from "react";
import Image from "next/image";

import { LuExpand } from "react-icons/lu";
import { TiShoppingCart } from "react-icons/ti";

import { Product } from "@/type";
import IconButton from "./IconButton";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border group cursor-pointer rounded-md flex flex-col justify-center items-center p-2 space-y-2">
      <div className="aspect-square rounded-xl relative bg-zinc-100">
        <Image
          src={product?.images?.[0]?.url}
          alt={product.name}
          width={300}
          height={300}
          className="aspect-square object-fill"
        />
        <div className="opacity-0 group-hover:opacity-100 absolute transition-all duration-300 ease-in-out w-full bottom-5 px-6">
          <div className="flex items-center justify-center gap-x-3 ">
            <IconButton Icon={LuExpand} onClick={() => {}} />
            <IconButton Icon={TiShoppingCart} onClick={() => {}} />
          </div>
        </div>
      </div>
      <div className="ml-3 md:self-start ">
        <p className="font-bold text-xl">{product.name}</p>
        <p className="font-medium text-sm text-gray-500">
          Category - {product.category.name}
        </p>
        <p className="font-bold text-lg">Price - ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
