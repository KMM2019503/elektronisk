import { Billboard } from "@/type";

const URLPiniaz = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const GetBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URLPiniaz}/${id}`);

  return res.json();
};

export default GetBillboard;
