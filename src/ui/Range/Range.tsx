"use client";
import { useDebounce } from "@/hooks/useDebounce";
import Slider from "rc-slider";
import React, { useEffect, useState } from "react";
import styles from "./Range.module.css";

interface IRangeProps {
  min?: number;
  max: number;
  formInitialValue?: number;
  toInitialValue?: number;
  onChangeFromValue: (value: number) => void;
  onChangeToValue: (value: number) => void;
}

export const Range: React.FC<IRangeProps> = ({
  min = 0,
  max,
  onChangeFromValue,
  onChangeToValue,
  formInitialValue = 0,
  toInitialValue = max,
}) => {
  const [fromValue, setFormValue] = useState(formInitialValue);
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

  return (
    <div className={styles.container}>
      <Slider
        className={styles.slider}
        range
        min={min}
        max={max}
        defaultValue={[formInitialValue, toInitialValue]}
        onChange={(value) => {
          if (typeof value === "object") {
            setFormValue(value[0]);
            setToValue(value[1]);
          }
        }}
      />
      <div className={styles.range}>
        <span>От: ${formInitialValue}</span>
        <span>До: ${toInitialValue}</span>
      </div>
    </div>
  );
};
