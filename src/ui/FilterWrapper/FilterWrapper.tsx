import React, { PropsWithChildren } from "react";

import styles from "./FilterWrapper.module.css";

interface FilterWrapperProps {
  title: string;
  children: React.ReactNode;
}

export const FilterWrapper: React.FC<PropsWithChildren<FilterWrapperProps>> = ({
  title,
  children,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div>{children}</div>
    </div>
  );
};
