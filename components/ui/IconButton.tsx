"use client";

import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";
import { IconType } from "react-icons";

interface IconButtonProps {
  Icon: IconType;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  iconClassName?: string;
}

const IconButton = ({ Icon, onClick, iconClassName }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-white border p-2 rounded-3xl hover:scale-110 shadow-lg transition"
      )}
    >
      <Icon className={cn("size-6", iconClassName)} />
    </button>
  );
};

export default IconButton;
