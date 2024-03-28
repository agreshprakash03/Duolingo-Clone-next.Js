import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-white border-slate-200 border-2 border-b-4 active:border-b-0 hover:bg-slate-100 text-slate-500",
        locked: "bg-neutral-200 text-primary-foreground hover:bg-neutral-200/90 border-neutral-400 border-b-4 active:border-b-0",
        primary: "transition ease-in-out delay-150 bg-sky-400 text-primary-foreground hover:bg-sky-400/90 hover:-translate-y-0.5 border-sky-600 border-b-4 active:border-b-2  duration-300",
        primaryOutline: "transition ease-in-out delay-150 bg-white text-sky-500 hover:bg-sky-100 hover:-translate-y-0.5 border-sky-200 border-2 border-b-4 active:border-b-2 duration-300",
        secondary: "transition ease-in-out delay-150 bg-green-500 text-primary-foreground hover:bg-green-500/85 hover:-translate-y-0.5 border-green-700 border-b-4 active:border-b-0 duration-300",
        secondaryOutline: "transition ease-in-out delay-150 bg-white text-green-500 hover:bg-green-100 hover:-translate-y-0.5 border-2 border-green-200 border-b-4 active:border-b-2 duration-300",
        danger: "transition ease-in-out delay-150 bg-red-500 text-primary-foreground hover:bg-rose-500/90 hover:-translate-y-0.5 border-red-700 border-b-4 active:border-b-0 duration-300",
        dangerOutline: "transition ease-in-out delay-150 bg-white text-rose-500 hover:bg-rose-100 hover:-translate-y-0.5 border-2 border-rose-200 border-b-4 active:border-b-2 duration-300",
        super: "transition ease-in-out delay-150 bg-indigo-500 text-primary-foreground hover:bg-indigo-500/90 hover:-translate-y-0.5 border-indigo-600 border-b-4 active:border-b-0 duration-300",
        superOutline: "transition ease-in-out delay-150 bg-white text-indigo-500 hover:bg-indigo-100 hover:-translate-y-0.5 border-2 border-indigo-200 border-b-4 active:border-b-2 duration-300",
        ghost: "bg-transparent text-slate-500 border-transparent border-0 hover:bg-slate-100",
        sidebar: "bg-transparent text-slate-500 border-2 border-transparent hover:bg-slate-100 transition-none",
        sidebarOutline: "bg-sky-500/15 text-sky-500 border-sky-300 border-2 hover:bg-sky-500/20 transition-none",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
