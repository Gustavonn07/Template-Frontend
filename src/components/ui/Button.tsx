import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Icon } from "@iconify/react";

import { cn } from "../../utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "bg-primary-100 text-primary-900 disabled:text-primary-900 disabled:bg-primary-100 shadow-md hover:bg-primary-200 hover:text-primary-800",
        destructive:
          "bg-destructive text-destructive-foreground disabled:bg-destructive shadow-sm hover:bg-destructive/90",
        success:
          "bg-success disabled:bg-success text-success-foreground shadow-sm hover:bg-success/90",
        outline:
          "border border-primary-800 bg-background shadow-sm hover:bg-background hover:text-primary-800 hover:bg-primary-100/10 hover:text-primary-900 text-primary-800",
        secondary:
          "bg-secondary-400 disabled:bg-secondary-400 text-secondary-900 shadow-sm hover:bg-secondary-400/80",
        ghost:
          "hover:bg-primary-100/20 disabled:bg-primary-100/00 disabled:text-primary-800 hover:text-primary-900 text-primary-800",
        link: "disabled:text-primary-900 text-primary-900 underline-offset-4 underline hover:text-primary-300",
      },
      size: {
        default: "h-9 px-4 py-3",
        icon: "h-9 w-9 truncate line-clamp-1",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "h-12 rounded-md px-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  options?: {
    iconOptions?: {
      icon: string;
      position: "right" | "left";
      className?: string;
    };
  };
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, options, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <>
          {options?.iconOptions?.position === "left" && (
            <span
              data-testid="button-icon-left"
              data-icon={options?.iconOptions?.icon ?? ""}
            >
              <Icon
                className={cn(options?.iconOptions?.className)}
                icon={options?.iconOptions?.icon ?? ""}
              />
            </span>
          )}
          {props.children}
          {options?.iconOptions?.position === "right" && (
            <span
              data-testid="button-icon-right"
              data-icon={options?.iconOptions?.icon ?? ""}
            >
              <Icon
                className={cn(options?.iconOptions?.className)}
                icon={options?.iconOptions?.icon ?? ""}
              />
            </span>
          )}
        </>
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
