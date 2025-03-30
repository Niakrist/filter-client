"use client";
import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useDebounce } from "@/hooks/useDebounce";
import styles from "./Range.module.css";

interface IRangeProps {
  min?: number;
  max: number;
  fromInitialValue?: number;
  toInitialValue?: number;
  onChangeFromValue: (value: number) => void;
  onChangeToValue: (value: number) => void;
}

export const Range: React.FC<IRangeProps> = ({
  min = 0,
  max,
  onChangeFromValue,
  onChangeToValue,
  fromInitialValue = 0,
  toInitialValue = max,
}) => {
  const [fromValue, setFormValue] = useState(fromInitialValue);
  const [toValue, setToValue] = useState(toInitialValue);

  const debouncedFromValue = useDebounce(fromValue, 500);
  const debouncedTovalue = useDebounce(toValue, 500);

  //Обновляем значения с дебаунсом
  useEffect(() => {
    onChangeFromValue(debouncedFromValue);
  }, [debouncedFromValue]);

  useEffect(() => {
    onChangeToValue(debouncedTovalue);
  }, [debouncedTovalue]);

  useEffect(() => {
    setToValue(toInitialValue);
    setFormValue(fromInitialValue);
  }, [toInitialValue, fromInitialValue]);

  return (
    <div className={styles.container}>
      <Slider
        range
        min={min}
        max={max}
        value={[fromValue, toValue]}
        onChange={(value) => {
          if (typeof value === "object") {
            setFormValue(value[0]);
            setToValue(value[1]);
          }
        }}
      />
      <div className={styles.range}>
        <span>От: ${fromValue}</span>
        <span>До: ${toValue}</span>
      </div>
    </div>
  );
};
