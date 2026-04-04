import { useThemeState } from '../../../features/theme/hooks/useThemeState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

import './menuBar.scss';

export default function MenuBar() {
  const {theme, toggleTheme} = useThemeState()

  const buttonIcon =
    theme === 'light' ? (
      <FontAwesomeIcon icon={faMoon} className="theme-switch-icon" />
    ) : (
      <FontAwesomeIcon icon={faSun} className="theme-switch-icon" />
    );

  const buttonText = `${theme === 'light' ? 'Dark' : 'Light'} Mode`;

  return (
    <>
      <header className="menubar">
        <div className="container">
          <h1 className="menubar-title">Where in the world?</h1>
          <button type="button" className="theme-switch" onClick={toggleTheme}>
            {buttonIcon}
            <span className="theme-switch-text">{buttonText}</span>
          </button>
        </div>
      </header>
    </>
  );
}
