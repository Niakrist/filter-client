import { EnumGameSort } from "@/services/game.types";
import type { ISelectItem } from "@/ui/Select/Select.interface";

export const SORT_SELECT_DATA: ISelectItem<EnumGameSort>[] = [
  {
    key: EnumGameSort.HIGH_PRICE,
    label: "Hight price",
  },
  {
    key: EnumGameSort.LOW_PRICE,
    label: "Low price",
  },
  {
    key: EnumGameSort.NEWEST,
    label: "Newest",
  },
  {
    key: EnumGameSort.OLDEST,
    label: "Oldest",
  },
];
