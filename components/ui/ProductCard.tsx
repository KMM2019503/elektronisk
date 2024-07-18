"use client";

import { Product } from "@/type";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border group cursor-pointer rounded-md flex flex-row justify-center items-center p-2 space-y-2">
      <div className="aspect-square rounded-xl relative bg-zinc-100">
        <Image
          src={product?.images?.[0]?.url}
          alt={product.name}
          fill
          className="aspect-square object-cover"
        />
      </div>
      <div className="">
        <p>{product.name}</p>
        <p>{product.category.name}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
