import React from "react";
import { SearchField, GenreGroup, RatingGroup } from "@/components";

export const Filters = () => {
  return (
    <div>
      <SearchField />
      <GenreGroup />
      <RatingGroup />
    </div>
  );
};
