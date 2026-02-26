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

  const varsLight = [
    { varName: '--text-color', varValue: '#111517' },
    { varName: '--bg-color', varValue: '#FCFCFC' },
    { varName: '--elem-color', varValue: '#FFFFFF' },
    { varName: '--input-color', varValue: '#808080' },
  ];

  const varsDark = [
    { varName: '--text-color', varValue: '#FFFFFF' },
    { varName: '--bg-color', varValue: '#202C37' },
    { varName: '--elem-color', varValue: '#2B3945' },
    { varName: '--input-color', varValue: '#FFFFFF' },
  ];

  function changeColor(varsArr) {
    const root = document.documentElement;
    varsArr.forEach((varObj) => {
      const { varName, varValue } = varObj;
      root.style.setProperty(varName, varValue);
    });
  }

  useEffect(() => {
    if (theme === 'light') {
      changeColor(varsLight);
    } else {
      changeColor(varsDark);
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
