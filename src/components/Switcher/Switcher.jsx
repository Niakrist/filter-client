import { useFilters } from "@/hooks/useFilters";
import { FilterWrapper } from "@/ui";
import styles from './Switcher.module.css'
import cn from 'clsx'

export const Switcher = () => {
    const { queryParams, updateQueryParams } = useFilters();
    const isAdultOnly = queryParams.isAdultOnly === "true";
  
    const handleSwitchClick = () => {
      updateQueryParams("isAdultOnly", !isAdultOnly + "");
    };
  
  return (
    <FilterWrapper title="Adult only">
      <button
        className={cn(styles.button, { [styles.active]: isAdultOnly === true })}
        onClick={handleSwitchClick}
      >
        <span
          className={cn(styles.round, {
            [styles.roundActive]: isAdultOnly === true,
          })}
        />
      </button>
    </FilterWrapper>
  );
}
