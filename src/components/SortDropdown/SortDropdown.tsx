"use client";
import { EnumGameSort } from "@/services/game.types";
import { Select } from "@/ui";
import React from "react";
import { SORT_SELECT_DATA } from "./sort-selectdata";

import styles from "./SortDropdown.module.css";
import { useFilters } from "@/hooks/useFilters";

export const SortDropdown = () => {
  const { queryParams, updateQueryParams } = useFilters();

  return (
    <div className={styles.dropdown}>
      <Select<EnumGameSort>
        data={SORT_SELECT_DATA}
        onChange={(value) => updateQueryParams("sort", value.key.toString())}
        value={SORT_SELECT_DATA.find((value) => value.key === queryParams.sort)}
        title={"Sort by"}
      />
    </div>
  );
};
