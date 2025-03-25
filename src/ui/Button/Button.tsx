import React, { PropsWithChildren } from "react";
import cn from "clsx";
import styles from "./Button.module.css";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<PropsWithChildren<IButtonProps>> = ({
  children,
  className,
  variant,
  size = "md",
  disabled,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cn(styles.btn, {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
        [styles.outline]: variant === "outline",
        [styles.btnSm]: size === "sm",
        [styles.btnMd]: size === "md",
        [styles.btnLg]: size === "lg",
        [styles.disabled]: disabled,
      })}
      disabled={disabled}>
      {children}
    </button>
  );
};
