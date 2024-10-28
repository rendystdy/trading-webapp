import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, checked, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-8 w-16 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      className,
      checked ? "transition-colors bg-black" : "transition-colors bg-white"
    )}
    {...props}
    ref={ref}
  >
    {checked && <img src="/assets/images/sun-icon.png" className="h-[18px] w-[18px] transition-transform translate-x-3" alt="sun-icon" />}
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-[18px] w-[18px] rounded-full bg-gradient-to-b from-[#D9D9D9] to-[#858585] shadow-lg ring-0 transition-transform",
        checked ? "transition-transform translate-x-4" : "transition-transform translate-x-3"
      )}
    />
    {!checked && <img src="/assets/images/moon-icon.png" className="h-[18px] w-[18px] transition-transform translate-x-4" alt="moon-icon" />}
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
