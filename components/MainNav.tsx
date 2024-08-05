"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { Category } from "@/type";
interface MainNavProps {
  data: Category[];
}
const MainNav = ({ data }: MainNavProps) => {
  const pathname = usePathname();

  if (!data || data.length === 0) {
    return null;
  }

  const routes = data.map((item) => ({
    href: `/category/${item.id}`,
    lable: item.name,
    isActive: pathname === `/category/${item.id}`,
  }));
  return (
    <nav>
      <div className="hidden md:flex items-center gap-x-5">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-center text-sm lg:text-base font-medium transition-all hover:text-orange-500",
              route.isActive ? "text-purple-700" : "text-black"
            )}
          >
            {route.lable}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MainNav;
