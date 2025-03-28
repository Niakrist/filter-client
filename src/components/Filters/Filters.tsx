import React from "react";
import { SearchField, GenreGroup, RatingGroup, Switcher } from "@/components";

export const Filters = () => {
  return (
    <div>
      <SearchField />
      <GenreGroup />
      <RatingGroup />
      <Switcher />
    </div>
  );
};
