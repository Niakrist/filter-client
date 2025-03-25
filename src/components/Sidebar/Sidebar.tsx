"use client";
import { Checkbox, Range } from "@/ui";
import React, { useState } from "react";

const Sidebar = () => {
  const [isCheced, setIsCheced] = useState(true);

  const [formInitialValue, setFormInitialValue] = useState(10);
  const [toInitialValue, setToInitialValue] = useState(90);

  const onChangeFromValue = (value: number) => {
    setFormInitialValue(value);
  };

  const onChangeToValue = (value: number) => {
    setToInitialValue(value);
  };

  const onChange = (check: boolean): void => {
    console.log("check: ", check);
    setIsCheced(!check);
  };

  return (
    <div>
      <Checkbox isChecked={isCheced} onChange={onChange}>
        Checkbox
      </Checkbox>
      <Checkbox isChecked={isCheced} onChange={onChange}>
        Checkbox
      </Checkbox>

      <Range
        min={0}
        max={100}
        formInitialValue={formInitialValue}
        toInitialValue={toInitialValue}
        onChangeFromValue={onChangeFromValue}
        onChangeToValue={onChangeToValue}
      />
    </div>
  );
};

export default Sidebar;
