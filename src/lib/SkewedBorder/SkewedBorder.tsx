import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";
import styles from "./skewedborder.module.css";

export const skewedborder = cva(styles.base, {
  variants: {
    variant: {
      red: styles.red,
      blue: styles.blue,
      green: styles.green,
      yellow: styles.yellow,
      purple: styles.purple,
    },
    size: {
      small: styles.small,
      medium: styles.medium,
      large: styles.large,
    },
  },
  compoundVariants: [{}],
  defaultVariants: {},
});

export interface SkewedBorderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skewedborder> {
  bg?: string;
}

export const SkewedBorder = React.forwardRef<HTMLDivElement, SkewedBorderProps>(
  ({ className, variant, size, bg, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(skewedborder({ variant, size, className }))}
        style={{ "--skewed-bg": bg } as React.CSSProperties}
        {...props}
      >
        {children}
      </div>
    );
  }
);
