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
          <li>
            <button
              type="button"
              className="dropdown-menu-item"
              onClick={() => handleFilterChange('')}
            >
              All
            </button>
          </li>
          <li>
            <button
              type="button"
              className="dropdown-menu-item"
              onClick={() => handleFilterChange('')}
            >
              Africa
            </button>
          </li>
          <li>
            <button
              type="button"
              className="dropdown-menu-item"
              onClick={() => handleFilterChange('Americas')}
            >
              Americas
            </button>
          </li>
          <li>
            <button
              type="button"
              className="dropdown-menu-item"
              onClick={() => handleFilterChange('Asia')}
            >
              Asia
            </button>
          </li>
          <li>
            <button
              type="button"
              className="dropdown-menu-item"
              onClick={() => handleFilterChange('Europe')}
            >
              Europe
            </button>
          </li>
          <li>
            <button
              type="button"
              className="dropdown-menu-item"
              onClick={() => handleFilterChange('Oceania')}
            >
              Oceania
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
