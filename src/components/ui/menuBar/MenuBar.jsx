import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

import './menuBar.scss';

export default function MenuBar() {
  const [theme, setTheme] = useState(getCurrentTheme());

  function getCurrentTheme() {
    const themeFromLocalStorage = localStorage.getItem('theme');
    return themeFromLocalStorage || 'light';
  }

  function changeColor(className) {
    const root = document.documentElement;
    root.classList.remove(...root.classList);
    root.classList.add(className);
  }

  useEffect(() => {
    if (theme === 'light') {
      changeColor('light');
    } else {
      changeColor('dark');
    }
  }, [theme]);

  function toggleTheme() {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  }

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
