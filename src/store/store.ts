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

// const useFiltersStore = create<IStore>((set) => ({
//     ...initialQueryParams,
//     isFilterUpdated: true,
//     updateQueryParams: ({ key, value }) =>
//       set((state) => ({
//         queryParams: { ...state.queryParams, [key]: value },
//         isFilterUpdate: true,
//       })),
//     resetFilterUpdate: () =>
//       set(() => ({
//         isFilterUpdate: false,
//       })),
//     reset: () => set(() => ({ ...initialQueryParams, isFilterUpdate: true })),
//   }));

  const useFiltersStore1 = create<IStore>((set) => ({
    queryParams: { ...initialQueryParams.queryParams }, // Инициализируем queryParams
    isFilterUpdated: false, // Инициализируем isFilterUpdated
    updateQueryParam: ({ key, value }) =>
      set((state) => ({
        queryParams: { ...state.queryParams, [key]: value },
        isFilterUpdated: true,
      })),
    resetFilterUpdate: () =>
      set(() => ({
        isFilterUpdated: false,
      })),
    reset: () =>
      set(() => ({
        ...initialQueryParams,
        isFilterUpdated: true,
      })),
  }));
  


export default useFiltersStore;