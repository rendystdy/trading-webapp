import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({title, className, children, ...props}) =>  {
  return (
    <button {...props} className={cn("py-2 px-4 bg-yellow-400 rounded-3xl font-poppins text-base text-darkBlue font-semibold", className)}>
      {title || children}
    </button>
  );
}

export default Button;
