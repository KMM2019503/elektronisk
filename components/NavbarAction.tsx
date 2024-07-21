"use client";
import React, { useEffect, useState } from "react";
import Button from "./ui/Button";
import { TiShoppingCart } from "react-icons/ti";
import useCartItemsStore from "@/hooks/useCartItems";
import { useRouter } from "next/navigation";

const NavbarAction = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCartItemsStore();

  if (!isMounted) {
    return null;
  }

  const onClick = () => {
    router.push("/cart");
  };

  return (
    <div className="flex items-center gap-x-4">
      <Button onClick={onClick}>
        <TiShoppingCart className="size-6 text-gray-500" />
        <span className="text-xs absolute top-0 right-2 font-bold text-gray-500">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarAction;
