import React, { PropsWithChildren } from "react";
import styles from "./Checkbox.module.css";
import cn from "clsx";

interface ICheckboxProps {
  isChecked: boolean;
  onChange: (check: boolean) => void;
  className?: string;
  type: "checkbox" | "radio";
}

export const Checkbox: React.FC<PropsWithChildren<ICheckboxProps>> = ({
  isChecked,
  onChange,
  className,
  children,
  type,
}) => {
  return (
    <label className={cn(styles.checkbox, className)}>
      <span
        className={cn({
          [styles.active]: isChecked,
          [styles.check]: type === "checkbox",
          [styles.rad]: type === "radio",
        })}
      />
      <input
        type={type}
        checked={isChecked}
        onChange={() => onChange(isChecked)}
        className="sr-only" /* скрываем нативный чекбокс */
      />

      <span>{children}</span>
    </label>
  );
};
