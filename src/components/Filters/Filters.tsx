import React from "react";
import { SearchField, GenreGroup, RatingGroup, Switcher, PriceGroup } from "@/components";
import { Platform } from "../PlatformGroup/PlatformGroup";

export const Filters = () => {
  return (
    <div>
      <SearchField />
      <PriceGroup />
      <GenreGroup />
      <RatingGroup />
      <Switcher />
      <Platform />
    </div>
  );
};
