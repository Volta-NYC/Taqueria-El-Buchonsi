import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[color:var(--color-red)] px-6 py-3 text-[color:var(--color-cream)] shadow-[0_10px_28px_rgba(198,40,40,0.18)] hover:-translate-y-0.5 hover:bg-[color:var(--color-red-dark)] hover:shadow-[0_16px_36px_rgba(198,40,40,0.22)]",
        secondary:
          "border border-white/25 bg-white/10 px-6 py-3 text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/20",
        outline:
          "border border-[color:var(--color-sand-line)] bg-transparent px-6 py-3 text-[color:var(--color-ink)] hover:-translate-y-0.5 hover:border-[color:var(--color-red)] hover:text-[color:var(--color-red)]",
        gold: "bg-[color:var(--color-gold)] px-6 py-3 text-[color:var(--color-charcoal)] shadow-[0_12px_30px_rgba(234,179,8,0.18)] hover:-translate-y-0.5 hover:bg-[#f2c53d] hover:shadow-[0_18px_38px_rgba(234,179,8,0.24)]",
        ghost:
          "px-4 py-2 text-[color:var(--color-ink)] hover:bg-[color:var(--color-surface)]",
      },
      size: {
        default: "",
        sm: "px-4 py-2 text-xs",
        lg: "px-7 py-4 text-base",
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
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
)
Button.displayName = "Button"

export { Button, buttonVariants }
