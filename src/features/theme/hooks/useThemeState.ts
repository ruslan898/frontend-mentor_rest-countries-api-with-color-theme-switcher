import { useState, useEffect } from 'react';
import { getCurrentTheme, changeColor } from '../../../utility/utils';
import type { Theme } from '../../../types';

export function useThemeState() {
  const [theme, setTheme] = useState<Theme>(getCurrentTheme());

  useEffect(() => {
    changeColor(theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  function toggleTheme():void {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  return { theme, toggleTheme };
}
