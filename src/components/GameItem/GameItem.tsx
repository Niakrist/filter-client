"use client";
import { IGame } from "@/types/game.interface";
import React from "react";

import { motion } from "framer-motion";

import styles from "./GameItem.module.css";
import { Star } from "lucide-react";
import Image from "next/image";
import { convertPrice } from "@/utils/convert-price";

interface IGameItemProps {
  game: IGame;
}

export const GameItem = ({ game }: IGameItemProps) => {
  if (!game) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}>
      <div>
        <div className={styles.gameItem}>
          <div className={styles.rating}>
            <Star size={18} /> <span>{game.rating}1</span>
          </div>
          <Image
            className={styles.img}
            width={151}
            height={224}
            src={game.image}
            alt={game.title}
            priority
          />
        </div>
        <h3 className={styles.title}>{game.title}</h3>
        <div className={styles.price}>{convertPrice(game.price)}</div>
      </div>
    </motion.div>
  );
};
