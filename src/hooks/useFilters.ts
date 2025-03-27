'use client'
import { TypeGameDataFilters } from "@/services/game.types";
import useFilterStore from "@/store/store";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function useFilters() {
  const pathname = usePathname(); // текущий путь
  const searchParams = useSearchParams(); // для получения query param из адресной строки
  const { replace } = useRouter(); // для переадресации и замены query param

  const { queryParams, isFilterUpdated, updateQueryParam } = useFilterStore();

  // При загрузки страницы проверяем наличие query params и синхронизируем со store

  useEffect(() => {
    if (!searchParams) return; // Защита от null
    const params = Array.from(searchParams.entries());
    params.forEach(([key, value]) => {
      updateQueryParam({
        key: key as keyof TypeGameDataFilters,
        value,
      });
    });
  }, []);

  const updateQueryParams = (key: keyof TypeGameDataFilters, value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (value) {
      newParams.set(key, String(value));
    } else {
      newParams.delete(key);
    }
    replace(pathname + `?${newParams.toString()}`);
    updateQueryParam({ key, value });
  };

  return {
    updateQueryParams,
    queryParams,
    isFilterUpdated,
  };
}
