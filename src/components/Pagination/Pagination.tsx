import { Button } from "@/ui";
import React from "react";
import styles from "./Pagination.module.css";

interface IPaginationProps {
  numberPages: number;
  changePage: (page: string) => void;
  currentPage?: string;
}

export const Pagination = ({
  numberPages,
  changePage,
  currentPage = "1",
}: IPaginationProps): React.JSX.Element => {
  return (
    <div className={styles.pagination}>
      {Array.from({ length: numberPages > 1 ? numberPages : 1 }).map(
        (_, index) => {
          const pageNumber = (index + 1).toString();
          return (
            <Button
              key={pageNumber}
              size="sm"
              variant={currentPage === pageNumber ? "outline" : "primary"}
              onClick={() => changePage(pageNumber)}
              className={styles.button}
              disabled={currentPage === pageNumber}>
              {pageNumber}
            </Button>
          );
        }
      )}
    </div>
  );
};
