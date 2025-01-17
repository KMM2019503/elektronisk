"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", onClick }, ref) => {
    return (
      <button
        disabled={disabled}
        ref={ref}
        onClick={onClick}
        type={type}
        className={cn(
          "relative py-1 px-5 rounded-xl hover:bg-gray-100 transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-40",
          className
        )}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
