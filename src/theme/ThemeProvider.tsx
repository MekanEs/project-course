import { FC, useMemo, useState, ReactElement } from 'react';

import { LOCAL_STRORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';
const defaultTheme = localStorage.getItem(LOCAL_STRORAGE_THEME_KEY) as Theme;
const ThemeProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const defaultValue = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme],
  );
  return <ThemeContext.Provider value={defaultValue}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
