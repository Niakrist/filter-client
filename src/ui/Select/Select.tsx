"use client";
import { ISelect } from "./Select.interface";

import styles from "./Select.module.css";
import { useOutside } from "@/hooks/useOutside";
import { ChevronDown } from "lucide-react";
import cn from "clsx";

export const Select = <K,>({ data, onChange, value, title }: ISelect<K>) => {
  const { ref, isShow, setIsShow } = useOutside(false);

  return (
    <div className={styles.wrapper} ref={ref}>
      <button className={styles.button} onClick={() => setIsShow(!isShow)}>
        {title && <b className={styles.title}>{title}</b>}
        {value?.label || "Select"}
        <ChevronDown className={styles.chevronDown} />
      </button>
      {isShow && (
        <ul className={styles.list} role="listbox">
          {data.map((item) => (
            <li
              onClick={() => {
                onChange(item);
                setIsShow(false);
              }}
              key={item.key?.toString()}
              className={cn(styles.item, {
                [styles.select]: value?.label == item.key,
              })}
            >
              <span
                className={cn(styles.label, {
                  [styles.labelActive]: item.key === value?.key,
                })}
              >{item.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
