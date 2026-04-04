import { useState } from 'react';

export function useDropdownState(onFilter) {
  const [dropDownShown, setDropdownShown] = useState(false);

  function toggleDropdown() {
    setDropdownShown(!dropDownShown);
  }

  function handleFilterChange(val) {
    toggleDropdown();
    onFilter(val);
  }

  return { dropDownShown, toggleDropdown, handleFilterChange };
}
