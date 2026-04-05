import { useState } from 'react';

export function useDropdownState() {
  const [dropDownShown, setDropdownShown] = useState(false);

  function toggleDropdown() {
    setDropdownShown(!dropDownShown);
  }

  return { dropDownShown, toggleDropdown };
}
