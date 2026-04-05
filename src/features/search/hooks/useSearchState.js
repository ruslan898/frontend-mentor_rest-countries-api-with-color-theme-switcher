import { useState } from "react";

export function useSearchState() {
  const [searchVal, setSearchVal] = useState('');

  function setSearch(value) {
    setSearchVal(value);
  }

  return { searchVal, setSearch };
}
