import { Category } from "@/type";

const GetCategory = async (id: string): Promise<Category> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`
  );
  const data = await res.json();
  return data;
};

export default GetCategory;
