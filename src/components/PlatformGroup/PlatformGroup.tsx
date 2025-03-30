import {  FilterWrapper, Select } from "@/ui";
import { PLARFORM_VARIATNS } from "./platform-group.data";
import { useFilters } from "@/hooks/useFilters";

export const Platform = () => {
  const { queryParams, updateQueryParams } = useFilters();

  const selestPlatform = PLARFORM_VARIATNS.map((platform) => {
    return {
      key: platform,
      label: platform,
    };
  });

  const handleChangePlatform = (item: {label: string, key: string}) => {
    updateQueryParams('platform', item.key  )
  };

  return (
    <FilterWrapper title="Platform">
      <Select
        value={selestPlatform.find(p => p.key === queryParams.platform)}
        data={selestPlatform}
        title="Platform"
        onChange={handleChangePlatform}
      />
    </FilterWrapper>
  );
};
