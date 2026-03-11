import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-ink)]",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-accent)] px-5 py-3 text-[var(--color-ink)] hover:bg-[var(--color-accent-soft)] focus-visible:ring-[var(--color-accent)]",
        secondary:
          "border border-white/20 bg-white/6 px-5 py-3 text-white hover:bg-white/12 focus-visible:ring-white/50",
        ghost:
          "px-3 py-2 text-[var(--color-muted)] hover:bg-white/8 hover:text-white focus-visible:ring-white/30",
      },
      size: {
        default: "h-11",
        lg: "h-12 px-6 text-base",
        icon: "size-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
