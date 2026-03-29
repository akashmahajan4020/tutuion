import * as React from "react";

import { cn } from "@/lib/utils";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40 disabled:pointer-events-none disabled:opacity-60";

const variantStyles = {
  primary:
    "bg-primary px-6 py-3 text-white shadow-lg shadow-primary/15 hover:-translate-y-0.5 hover:bg-secondary",
  secondary:
    "bg-white px-6 py-3 text-slate ring-1 ring-slate-200 hover:-translate-y-0.5 hover:ring-secondary/40",
  outline:
    "bg-transparent px-6 py-3 text-primary ring-1 ring-primary/20 hover:-translate-y-0.5 hover:bg-primary hover:text-white",
  ghost: "bg-transparent px-4 py-2 text-slate hover:bg-muted",
} as const;

const sizeStyles = {
  default: "",
  sm: "px-4 py-2 text-xs",
  lg: "px-7 py-3.5 text-base",
} as const;

type ButtonVariant = keyof typeof variantStyles;
type ButtonSize = keyof typeof sizeStyles;

export function buttonVariants({
  variant = "primary",
  size = "default",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => (
    <button
      className={buttonVariants({ variant, size, className })}
      ref={ref}
      {...props}
    />
  ),
);

Button.displayName = "Button";
