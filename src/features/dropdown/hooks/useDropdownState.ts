import { useState } from 'react';

export function useDropdownState() {
  const [dropDownShown, setDropdownShown] = useState<boolean>(false);

  function toggleDropdown():void {
    setDropdownShown(!dropDownShown);
  }

  return { dropDownShown, toggleDropdown };
}
