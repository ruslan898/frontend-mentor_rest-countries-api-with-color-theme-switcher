import { useState, useEffect } from 'react';
import { getCurrentTheme, changeColor } from '../../../utility/utils';

export function useThemeState() {
  const [theme, setTheme] = useState(getCurrentTheme());

  useEffect(() => {
    changeColor(theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  return { theme, toggleTheme };
}
