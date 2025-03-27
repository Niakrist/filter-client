import { Checkbox } from "@/ui";
import { FilterWrapper } from "@/ui/FilterWrapper/FilterWrapper";
import { Star } from "lucide-react";
import React from "react";
import { RATING_VARIANTS } from "./rating-group.data";
import styles from "./RatingGroup.module.css";
import { useFilters } from "@/hooks/useFilters";

export const RatingGroup = () => {
  const { queryParams, updateQueryParams } = useFilters();
  return (
    <FilterWrapper title="Rating">
      {RATING_VARIANTS.map((rating) => (
        <Checkbox
          className={styles.radio}
          type="radio"
          key={rating}
          isChecked={queryParams.rating === String(Math.floor(rating))}
          onChange={() => updateQueryParams("rating", String(rating))}>
          <span className={styles.rating}>
            <Star fontSize={16} /> {" ≥ "} {rating}
          </span>
        </Checkbox>
      ))}
    </FilterWrapper>
  );
};
