import { Product } from "@/type";

const GetProduct = async ({ id }: { id: string }): Promise<Product> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
  const data = await res.json();
  return data;
};

export default GetProduct;
