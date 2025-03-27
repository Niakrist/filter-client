"use client";

import { useDebounce } from "@/hooks/useDebounce";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";

import styles from "./SearchField.module.css";
import { useFilters } from "@/hooks/useFilters";

export const SearchField = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { updateQueryParams } = useFilters();

  useEffect(() => {
    updateQueryParams("searchTerm", debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div className={styles.search}>
      <Search className={styles.searchIcon} />
      <input
        className={styles.input}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};
