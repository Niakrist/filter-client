import { GameExplorer } from "@/components";
import { gameService } from "@/services/game.service";
import { TypeGameDataFilters, TypeParamsFilters } from "@/services/game.types";

export const revalidate = 60;

async function getGames(searchParams: TypeGameDataFilters) {
  const data = await gameService.getAll(searchParams);
  return data;
}
export default async function HomePage({ searchParams }: TypeParamsFilters) {
  const waitSearchParams = await searchParams;
  const data = await getGames({
    ...waitSearchParams,
    perPage: waitSearchParams.perPage || 9,
  });

  return (
    <div>
      <GameExplorer initialGames={data} />
    </div>
  );
}
