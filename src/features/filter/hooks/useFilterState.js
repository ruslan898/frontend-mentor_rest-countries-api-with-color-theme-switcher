import { useState } from "react";

export function useFilterState() {
  const [filterVal, setFilterVal] = useState('');

  function filter(arr) {
    if (filterVal) {
      return arr.filter((item) => item.region === filterVal);
    } else {
      return arr;
    }
  }

  function changeFilter(value) {
    setFilterVal(value);
  }

  return {filterVal, filter, changeFilter}
}
