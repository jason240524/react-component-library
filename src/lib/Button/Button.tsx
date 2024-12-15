import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";
import { useTheme } from "../ThemeProvider";

import styles from "./button.module.css";

export const button = cva(styles.base, {
  variants: {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
      outlined: styles.outlined,
      animate: styles.animate,
    },
    size: {
      small: styles.small,
      medium: styles.medium,
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  animation_color?: string;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  animation_color,
  ...props
}) => {
  const theme = useTheme();

  return (
    <button
      className={cn(button({ variant, size, className }))}
      style={
        {
          "--animation-color": animation_color || theme.accent,
        } as React.CSSProperties
      }
      {...props}
    />
  );
};
