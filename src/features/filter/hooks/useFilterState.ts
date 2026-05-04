import { useState } from "react";
import type { Filter, Country } from "../../../types";

export function useFilterState() {
  const [filterVal, setFilterVal] = useState<Filter>('');

  function filter(arr: Country[]): Country[] {
    if (filterVal) {
      return arr.filter((item) => item.region === filterVal);
    } else {
      return arr;
    }
  }

  function changeFilter(value: Filter):void {
    setFilterVal(value);
  }

  return {filterVal, filter, changeFilter}
}
