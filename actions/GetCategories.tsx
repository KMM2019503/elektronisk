import { Category } from "@/type";

const GetCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default GetCategories;
