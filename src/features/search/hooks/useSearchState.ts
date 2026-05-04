import { useState } from "react";

export function useSearchState() {
  const [searchVal, setSearchVal] = useState<string>('');

  function setSearch(value:string):void {
    setSearchVal(value);
  }

  return { searchVal, setSearch };
}
