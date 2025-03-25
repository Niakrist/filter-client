import React from "react";
import cn from "clsx";
import styles from "./Heading.module.css";

interface IHeding {
  className?: string;
  children: React.ReactNode;
}

export const Heading: React.FC<IHeding> = ({ className, children }) => {
  return <h1 className={cn(styles.title, className)}>{children}</h1>;
};
