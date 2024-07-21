"use client";
import qs from "query-string";

import { Backcolor } from "@/type";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface FilterProps {
  data: Backcolor[];
  name: string;
  valueKey: string;
}

const Filter = ({ data, name, valueKey }: FilterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  console.log(selectedValue);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    console.log(window.location.href);

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    console.log("url :", url);

    router.push(url);
  };
  return (
    <div className="flex  max-w-[300px] md:max-w-[500px] lg:max-w-[700px] overflow-x-auto gap-3 self-center p-3">
      {data.map((item) => (
        <div
          key={item.id}
          onClick={() => onClick(item.id)}
          className={cn(
            "w-10 h-6 md:w-12 md:h-6 lg:w-16 lg:h-6 rounded-md shadow-md cursor-pointer hover:scale-105 transition",
            selectedValue === item.id && "border border-black scale-110"
          )}
          style={{ backgroundColor: item.value }}
        />
      ))}
    </div>
  );
};

export default Filter;
