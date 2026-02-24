import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

import './menuBar.scss';

export default function MenuBar() {
  return (
    <header className="menubar">
      <div className="container">
        <h1 className="menubar-title">Where in the world?</h1>
        <button type="button" className="theme-switch">
          <FontAwesomeIcon icon={faMoon} className="theme-switch-icon" />
          <span className="theme-switch-text">Dark Mode</span>
        </button>
      </div>
    </header>
  );
}
