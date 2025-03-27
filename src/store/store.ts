import { EnumGameSort } from "@/services/game.types";
import type { IStore } from "./store.types";
import { create } from "zustand";

const initialQueryParams: Pick<IStore, 'queryParams'> = {
    queryParams: {
        sort: EnumGameSort.NEWEST,
        searchTerm: '',
        page: 1,
        perPage: 9,
        isAdultOnly: 'true'
    }
}

  const useFilterStore = create<IStore>((set) => ({
    ...initialQueryParams ,
    isFilterUpdated: false,
    
    updateQueryParam: ({ key, value }) =>
      set((state) => ({
        queryParams: { ...state.queryParams, [key]: value },
        isFilterUpdated: true,
      })),
    reset: () =>
      set(() => ({
        ...initialQueryParams,
        isFilterUpdated: true,
      })),
  }));
  


export default useFilterStore;