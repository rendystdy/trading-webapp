import { cn } from "@/lib/utils";
import React from "react";
import { Loader } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  className?: string;
  status?: 'idle' | 'loading' | 'failed';
}

const Button: React.FC<ButtonProps> = ({title, className, children, status, ...props}) =>  {
  return (
    <button {...props} className={cn("flex items-center justify-center py-2 px-4 bg-yellow-400 rounded-3xl font-poppins text-base text-darkBlue font-semibold", className, props.disabled && "bg-slate-500")}>
      {status === 'loading' && <Loader className="animate-spin mr-2" />} {title || children}
    </button>
  );
}

export default Button;
