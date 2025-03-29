import React from "react";
import { SearchField, GenreGroup, RatingGroup, Switcher } from "@/components";
import { Platform } from "../PlatformGroup/PlatformGroup";

export const Filters = () => {
  return (
    <div>
      <SearchField />
      <GenreGroup />
      <RatingGroup />
      <Switcher />
      <Platform />
    </div>
  );
};
