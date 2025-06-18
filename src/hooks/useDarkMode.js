import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      const localTheme = window.localStorage.getItem('theme');
      if (localTheme) {
        return localTheme;
      }
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return [theme, toggleTheme];
};
