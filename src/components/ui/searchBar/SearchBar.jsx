import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './searchBar.scss';

export default function SearchBar({ value, onInputChange }) {
  return (
    <div className="input-wrapper">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="searchbar-icon" />
      <input
        type="text"
        placeholder="Search for a country…"
        aria-label="Search for a country"
        name="search"
        className="searchbar"
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
}
