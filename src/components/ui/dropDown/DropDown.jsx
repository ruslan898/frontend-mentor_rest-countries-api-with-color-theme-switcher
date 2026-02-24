import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './dropDown.scss';

export default function DropDown() {
  return (
    <div className="dropdown">
      <button className="dropdown-button">
        <span className="dropdown-button-text">Filter by Region</span>
        <FontAwesomeIcon icon={faAngleDown} className="dropdown-button-icon" />
      </button>
      {/* <div className="dropdown-menu">
        <ul className="dropdown-menu-list">
          <li className="dropdown-menu-item">Africa</li>
          <li className="dropdown-menu-item">America</li>
          <li className="dropdown-menu-item">Asia</li>
          <li className="dropdown-menu-item">Europe</li>
          <li className="dropdown-menu-item">Oceania</li>
        </ul>
      </div> */}
    </div>
  );
}
