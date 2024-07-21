"use client";

import React from "react";

import { Product } from "@/type";
import Image from "next/image";
import IconButton from "@/components/ui/IconButton";
import { CgClose } from "react-icons/cg";
import useCartItemsStore from "@/hooks/useCartItems";

interface CartItemProps {
  item: Product;
}

const CartItem = ({ item }: CartItemProps) => {
  const cart = useCartItemsStore();
  return (
    <li className="flex py-6 border-b relative">
      <div className="relative size-24 rounded-md overflow-hidden sm:size-48">
        <Image
          src={item.images[0].url}
          alt={item.id}
          fill
          className="object-fill object-center"
        />
      </div>
      <div className="absolute top-3 right-5">
        <IconButton
          Icon={CgClose}
          iconClassName="size-4"
          onClick={() => cart.reomveItem(item.id)}
        />
      </div>
      <div className="flex mx-5 ">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-base md:text-lg">{item.name}</p>
          <p className="font-semibold text-sm text-gray-500">$ {item.price}</p>
          <p className="font-semibold text-sm text-gray-500">{item.memory}</p>
          <div className="flex items-center gap-3">
            <p className="font-semibold text-sm text-gray-500">Color</p>
            <div
              className="size-6 rounded-full"
              style={{ backgroundColor: item.backcolor.value }}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
