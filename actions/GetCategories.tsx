import { Category } from "@/type";

const URLPiniaz = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const GetCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(URLPiniaz);

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default GetCategories;
