import { useFilters } from "@/hooks/useFilters";
import { FilterWrapper, Range } from "@/ui";
import React from "react";

export const PriceGroup = () => {
  const { queryParams, updateQueryParams } = useFilters();

  return (
    <FilterWrapper title="Price from/to">
      <Range
        max={100}
        fromInitialValue={
          queryParams.minPrice ? Number(queryParams.minPrice) : undefined
        }
        toInitialValue={
          queryParams.maxPrice ? Number(queryParams.maxPrice) : undefined
        }
        onChangeFromValue={(value) =>
          updateQueryParams("minPrice", value.toString())
        }
        onChangeToValue={(value) => {
        //   updateQueryParams("maxPrice", value.toString());
        }}></Range>
    </FilterWrapper>
  );
};
