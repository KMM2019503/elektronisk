import React, { MouseEventHandler } from "react";
import { IconType } from "react-icons";

interface IconButtonProps {
  Icon: IconType;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const IconButton = ({ Icon, onClick }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-white p-2 rounded-3xl hover:scale-110 shadow-lg transition"
    >
      <Icon className="size-6" />
    </button>
  );
};

export default IconButton;
