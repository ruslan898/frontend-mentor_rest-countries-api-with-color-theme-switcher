import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './dropDown.scss';

export default function DropDown({ onFilter, filterVal }) {
  const [dropDownShown, setDropdownShown] = useState(false);

  function toggleDropdown() {
    setDropdownShown(!dropDownShown);
  }

  function handleFilterChange(val) {
    toggleDropdown();
    onFilter(val);
  }

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        <span className="dropdown-button-text">
          {filterVal ? filterVal : 'Filter by Region'}
        </span>
        <FontAwesomeIcon icon={faAngleDown} className="dropdown-button-icon" />
      </button>
      {dropDownShown && (
        <ul className="dropdown-menu">
          <li
            className="dropdown-menu-item"
            onClick={() => handleFilterChange('')}
          >
            All
          </li>
          <li
            className="dropdown-menu-item"
            onClick={() => handleFilterChange('Africa')}
          >
            Africa
          </li>
          <li
            className="dropdown-menu-item"
            onClick={() => handleFilterChange('Americas')}
          >
            America
          </li>
          <li
            className="dropdown-menu-item"
            onClick={() => handleFilterChange('Asia')}
          >
            Asia
          </li>
          <li
            className="dropdown-menu-item"
            onClick={() => handleFilterChange('Europe')}
          >
            Europe
          </li>
          <li
            className="dropdown-menu-item"
            onClick={() => handleFilterChange('Oceania')}
          >
            Oceania
          </li>
        </ul>
      )}
    </div>
  );
}
