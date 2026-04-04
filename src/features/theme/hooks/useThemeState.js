import { useState, useEffect } from "react";
import { getCurrentTheme, changeColor } from "../../../utility/utils";

export function useThemeState() {
  const [theme, setTheme] = useState(getCurrentTheme());

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

  return { theme, toggleTheme };
}
