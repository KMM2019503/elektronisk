"use client";
import React, { MouseEventHandler } from "react";
import Image from "next/image";

import { LuExpand } from "react-icons/lu";
import { TiShoppingCart } from "react-icons/ti";

import { Product } from "@/type";
import IconButton from "./IconButton";
import { useRouter } from "next/navigation";
import usePreviewModalStore from "@/hooks/usePreviewModal";
import useCartItemsStore from "@/hooks/useCartItems";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();

  const previewModalStore = usePreviewModalStore();
  const cart = useCartItemsStore();
  const handleClick = () => {
    router.push(`/product/${product.id}`);
  };

  const onPreview: MouseEventHandler = (event) => {
    event.stopPropagation();

    previewModalStore.onOpen(product);
  };

  const onAddToCart: MouseEventHandler = (event) => {
    event.stopPropagation();

    cart.addItem(product);
  };
  return (
    <div
      onClick={handleClick}
      className="border group cursor-pointer rounded-md flex flex-col  p-2 space-y-2 shadow-lg"
    >
      <div className="w-full flex items-center justify-around">
        <p className="font-bold text-base text-gray-900">{product.name}</p>

        <p className="font-medium text-sm text-gray-500"> ${product.price}</p>
        <div
          className="size-6 rounded-full"
          style={{ backgroundColor: product.backcolor.value }}
        />
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="aspect-square size-full rounded-xl relative bg-zinc-100">
          <Image
            src={product?.images?.[0]?.url}
            alt={product.name}
            fill
            className="object-fill object-center"
          />
          <div className="lg:opacity-0 group-hover:opacity-100 absolute transition-all duration-300 ease-in-out w-full bottom-5 px-6">
            <div className="flex items-center justify-center gap-x-3 ">
              <IconButton Icon={LuExpand} onClick={onPreview} />
              <IconButton Icon={TiShoppingCart} onClick={onAddToCart} />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="ml-3 md:self-start ">
        <p className="font-bold text-xl">{product.name}</p>
        <p className="font-medium text-sm text-gray-500">
          Category - {product.category.name}
        </p>
        <p className="font-bold text-lg">Price - ${product.price}</p>
      </div> */}
    </div>
  );
};

export default ProductCard;
