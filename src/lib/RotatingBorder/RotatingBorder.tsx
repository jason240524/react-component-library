import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";
import styles from "./rotatingborder.module.css";

export const rotatingborder = cva(styles.base, {
  variants: {
    variant: {},
    size: {
      small: styles.small,
      medium: styles.medium,
      large: styles.large,
    },
  },
  compoundVariants: [{}],
  defaultVariants: {},
});

export interface RotatingBorderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof rotatingborder> {
  bg?: string;
  rotate_color?: string;
}

export const RotatingBorder = React.forwardRef<
  HTMLDivElement,
  RotatingBorderProps
>(({ className, variant, size, bg, rotate_color, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(rotatingborder({ variant, size, className }))}
      style={
        {
          "--rotate-background": bg,
          "--rotate-color": rotate_color,
        } as React.CSSProperties
      }
      {...props}
    >
      <div>{children}</div>
    </div>
  );
});
