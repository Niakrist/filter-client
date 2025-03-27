import { Checkbox } from "@/ui";
import { FilterWrapper } from "@/ui/FilterWrapper/FilterWrapper";
import React from "react";
import { useFilters } from "@/hooks/useFilters";
import { GENRE_VARIANTS } from "./genre-variant.data";

export const GenreGroup = (): React.JSX.Element => {
  const { queryParams, updateQueryParams } = useFilters();
  return (
    <FilterWrapper title="Genre">
      {GENRE_VARIANTS.map((genre) => (
        <Checkbox
          type="checkbox"
          isChecked={queryParams.genres?.includes(genre) || false}
          onChange={() => {
            const currentGenres = queryParams.genres
              ? queryParams.genres.split("|")
              : [];

            if (currentGenres.includes(genre)) {
              // Удаляем жанр из списка
              const newArray = currentGenres.filter((g) => g !== genre);
              updateQueryParams("genres", newArray.join("|"));
            } else {
              updateQueryParams("genres", [...currentGenres, genre].join("|"));
            }
          }}>
          {genre}
        </Checkbox>
      ))}
    </FilterWrapper>
  );
};
