import { useState } from "react";

export function useSearchState() {
  const [searchVal, setSearchVal] = useState('');

  function handleInputChange(e) {
    const inputValue = e.currentTarget.value;
    setSearchVal(inputValue);
  }

  return {searchVal, handleInputChange}
}
