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
      <button
        type="button"
        className="dropdown-button"
        onClick={toggleDropdown}
      >
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
            <button type="button">All</button>
          </li>
          <li
            className="dropdown-menu-item"
            onClick={() => handleFilterChange('Africa')}
          >
            <button type="button">Africa</button>
          </li>
          <li
            className="dropdown-menu-item"
            onClick={() => handleFilterChange('Americas')}
          >
            <button type="button">Americas</button>
          </li>
          <li
            className="dropdown-menu-item"
            onClick={() => handleFilterChange('Asia')}
          >
            <button type="button">Asia</button>
          </li>
          <li
            className="dropdown-menu-item"
            onClick={() => handleFilterChange('Europe')}
          >
            <button type="button">Europe</button>
          </li>
          <li
            className="dropdown-menu-item"
            onClick={() => handleFilterChange('Oceania')}
          >
            <button type="button">Oceania</button>
          </li>
        </ul>
      )}
    </div>
  );
}
