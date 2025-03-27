'use client'
import useFilterStore from "@/store/store";
import { TypePaginationGames } from "@/types/game.interface";
import { Heading } from "@/ui";
import { useQuery } from "@tanstack/react-query";

import styles from "./GameExplorer.module.css";
import { useFilters } from "@/hooks/useFilters";
import { Catalog, Filters, Pagination, SortDropdown } from "@/components";
import { gameService } from "@/services/game.service";

interface IGameExplorerProps {
  initialGames: TypePaginationGames;
}

export function GameExplorer({ initialGames }: IGameExplorerProps) {
  const { queryParams, isFilterUpdated } = useFilterStore();
  const { updateQueryParams } = useFilters();
  const { data, isPending, isFetching, isLoading, isRefetching } = useQuery({
    queryKey: ["game explorer", queryParams],
    queryFn: () => gameService.getAll(queryParams),
    initialData: initialGames,
    enabled: isFilterUpdated,
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Heading>Games</Heading>
        <SortDropdown />
      </div>
      <div className={styles.gameWrapper}>
        <aside className={styles.aside}>
          <Filters />
        </aside>

        <section>
          <Catalog
            games={data.games}
            isLoading={isPending || isFetching || isLoading || isRefetching}
          />
          <Pagination
            changePage={(page) => {
              console.log("page: ", page);
              updateQueryParams("page", page.toString());
            }}
            currentPage={queryParams.page?.toString()}
            numberPages={Math.ceil(data.length / +queryParams.perPage)}
          />
        </section>
      </div>
    </div>
  );
}
