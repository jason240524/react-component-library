import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";
import styles from "./glassycard.module.css";

export const glassycard = cva(styles.base, {
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

export interface GlassyCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassycard> {
  bg?: string;
}

export const GlassyCard = React.forwardRef<HTMLDivElement, GlassyCardProps>(
  ({ className, variant, size, bg, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(glassycard({ variant, size, className }))}
        style={{ "--bg-color": bg } as React.CSSProperties}
        {...props}
      >
        {children}
      </div>
    );
  }
);
