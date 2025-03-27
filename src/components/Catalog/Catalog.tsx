import { IGame } from "@/types/game.interface";
import React from "react";

import styles from "./Catalog.module.css";
import { GameItem, SkeletonLoader } from "@/components";

interface ICatalogProps {
  games: IGame[];
  isLoading?: boolean;
}

export const Catalog = ({ games, isLoading }: ICatalogProps) => {
  if (isLoading) return <SkeletonLoader />;
  return (
    <section>
      {games.length ? (
        <div className={styles.gameList}>
          {games.map((game) => (
            <GameItem key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div>There are no games</div>
      )}
    </section>
  );
};
