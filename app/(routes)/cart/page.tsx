"use client";

import Container from "@/components/Container";
import useCartItemsStore from "@/hooks/useCartItems";
import CartItem from "./components/CartItem";
import Summary from "./components/Summary";
import { useEffect, useState } from "react";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCartItemsStore();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div>
      <Container>
        <div className="px-3 md:px-5 mt-5">
          <h1 className="text-2xl font-bold font-mono">Shopping Cart</h1>
          <div className="mt-3 mb-10 lg:grid lg:grid-cols-12 lg:items-start gap-3">
            <div className="lg:col-span-3 mt-6">
              <Summary items={cart.items} />
            </div>
            <div className="lg:col-span-9">
              {cart.items.length < 1 && (
                <p className="text-center mt-10 font-bold text-lg">
                  No items added to cart
                </p>
              )}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
