import { Backcolor } from "@/type";

const GetBackcolors = async (): Promise<Backcolor[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/backcolors`);
  const data = await res.json();
  return data;
};

export default GetBackcolors;
