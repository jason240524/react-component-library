import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";
import styles from "./staplebutton.module.css";

export const staplebutton = cva(styles.base, {
  variants: {
    variant: {},
    size: {
      small: styles.small,
      large: styles.large,
    },
  },
  compoundVariants: [{}],
  defaultVariants: {},
});

export interface StapleButtonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof staplebutton> {
  bg?: string;
}

export const StapleButton = React.forwardRef<HTMLDivElement, StapleButtonProps>(
  ({ className, variant, size, bg, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(staplebutton({ variant, size, className }))}
        style={{ "--bg-color": bg } as React.CSSProperties}
        {...props}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {children}
      </div>
    );
  }
);
