import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";
import styles from "./shinycard.module.css";

export const shinycard = cva(styles.base, {
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

export interface ShinyCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof shinycard> {
  bg?: string;
  headline?: string;
  main?: string;
  link?: string;
  colorOne?: string;
  colorTwo?: string;
  className?: string;
  variant?: never;
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
}

export class ShinyCard extends React.Component<ShinyCardProps> {
  constructor(props: ShinyCardProps) {
    super(props);
  }

  render() {
    const {
      className,
      headline,
      main,
      link,
      colorOne,
      colorTwo,
      variant,
      size,
      bg,
      children,
      ...props
    } = this.props;
    return (
      <div
        className={cn(shinycard({ variant, size, className }))}
        // style={{ "--bg-color": bg } as React.CSSProperties}
        {...props}
      >
        <div
          style={
            {
              "--color-one": colorOne,
              "--colorTwo": colorTwo,
            } as React.CSSProperties
          }
        >
          <span></span>
          <section>
            <h2>{headline}</h2>
            <p>{main}</p>
            <a href="#">{link}</a>
          </section>
        </div>
      </div>
    );
  }
}

// export const ShinyCard = React.forwardRef<HTMLDivElement, ShinyCardProps>(
//   ({ className, variant, size, bg, children, ...props }, ref) => {
//     return (
//       <div
//         ref={ref}
//         className={cn(shinycard({ variant, size, className }))}
//         style={{ "--bg-color": bg } as React.CSSProperties}
//         {...props}
//       >
//         {children}
//       </div>
//     );
//   }
// );
