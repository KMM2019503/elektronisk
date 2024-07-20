"use client";
import React, { useEffect, useState } from "react";
import Button from "./ui/Button";
import { TiShoppingCart } from "react-icons/ti";

const NavbarAction = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-4">
      <Button>
        <TiShoppingCart className="size-6 text-gray-500" />
        <span className="text-xs absolute top-0 right-2 font-bold text-gray-500">
          0
        </span>
      </Button>
    </div>
  );
};

export default NavbarAction;
