import { Product } from "@/type";
import React from "react";
import ProductCard from "./ui/ProductCard";

interface ProductListProps {
  products: Product[];
}

const ProductLists = ({ products }: ProductListProps) => {
  if (products.length < 1) {
    return (
      <div className="w-full text-center">
        <p className="font-semibold text-sm md:text-base lg:text-lg">
          no result found...
        </p>
      </div>
    );
  }
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-x-3 gap-y-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductLists;
