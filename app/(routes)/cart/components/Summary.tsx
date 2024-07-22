"use client";

import Button from "@/components/ui/Button";
import useCartItemsStore from "@/hooks/useCartItems";
import { Product } from "@/type";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const Summary = ({ items }: { items: Product[] }) => {
  const searchParams = useSearchParams();
  const removeAll = useCartItemsStore((state) => state.removeAll);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment Success");
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.success("Something went wrong");
    }
  }, [searchParams, removeAll]);

  const OnCheckOut = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          productsIds: items.map((item) => item.id),
        }
      );

      window.location = res.data.url;
    } catch (error) {
      console.error("There was a problem with the checkout request:", error);
    }
  };

  return (
    <>
      <div className="rounded-lg shadow-md p-3 md:p-6 flex flex-col border gap-5">
        <div className="grid grid-cols-8 items-center">
          <h1 className="text-base font-semibold col-span-4">Order Summary</h1>
          <div className="h-[1px] w-full bg-gray-600 bg-opacity-50 col-span-4" />
        </div>
        <div className="flex items-center gap-4">
          <p className="text-sm font-medium">Product Count</p>
          <p className="text-sm font-medium">-</p>

          <p className="text-sm font-medium">{items.length}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-sm font-medium">Total</p>
          <p className="text-sm font-medium">-</p>

          <p className="text-sm font-medium">${totalPrice}</p>
        </div>
        <Button
          className="bg-gray-700 hover:bg-gray-900 text-white"
          onClick={OnCheckOut}
          disabled={items.length === 0}
        >
          Checkout
        </Button>
      </div>
    </>
  );
};

export default Summary;
