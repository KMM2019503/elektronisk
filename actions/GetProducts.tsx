import { Product } from "@/type";

import qs from "query-string";

interface Query {
  categoryId?: string;
  backcolorId?: string;
  isFeatured?: boolean;
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const GetProducts = async (query: Query): Promise<Product[]> => {
  try {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        categoryId: query.categoryId,
        backcolorId: query.backcolorId,
        isFeatured: query.isFeatured,
      },
    });
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default GetProducts;
