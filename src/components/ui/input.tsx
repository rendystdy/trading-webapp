import * as React from "react"

import { cn } from "@/lib/utils"
import { EyeOff, EyeIcon, User2, LockKeyhole } from 'lucide-react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'LOGIN' | 'DEFAULT'
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = 'DEFAULT', ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    return (
      <div className="relative">
        {
          variant === 'LOGIN' && (
            <div className={cn("absolute inset-y-0 left-0 flex cursor-pointer items-center pl-3 text-gray-400")}>
              {type === 'email' ? (
                <User2
                  className="h-4 w-4"
                />
              ) : (
                <LockKeyhole
                  className="h-4 w-4"
                />

              )}
            </div>
          )
        }
        <input
          type={type === 'password' ? showPassword ? "text" : "password" : type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            variant === "LOGIN" ? "px-9" : "px-3",
            className
          )}
          ref={ref}
          {...props}
        />
        <div className={cn(type === 'password' ? "absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-gray-400" : "hidden")}>
          {showPassword ? (
            <EyeIcon
              className="h-4 w-4"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <EyeOff
              className="h-4 w-4"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
