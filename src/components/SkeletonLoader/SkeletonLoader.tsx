import React from "react";

import styles from "./SkeletonLoader.module.css";

export const SkeletonLoader = (): React.JSX.Element => {
  return (
    <div className={styles.skeleton}>
      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.block}></div>
        </div>
      ))}
    </div>
  );
};
