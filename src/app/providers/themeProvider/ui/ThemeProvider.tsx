import { type FC, useMemo, useState, type ReactElement } from 'react';
import { LOCAL_STRORAGE_THEME_KEY, type Theme, ThemeContext } from '../lib/ThemeContext';
const defaultTheme = localStorage.getItem(LOCAL_STRORAGE_THEME_KEY) as Theme;
const ThemeProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const defaultValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );
  return <ThemeContext.Provider value={defaultValue}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
