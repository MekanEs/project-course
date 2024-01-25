import { useContext } from 'react';
import { LOCAL_STRORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

export type UseThemeType = () => { theme: Theme; toggleTheme: () => void };

export const useTheme: UseThemeType = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = (): void => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STRORAGE_THEME_KEY, newTheme);
        document.body.className = newTheme;
    };

    return {
        theme,
        toggleTheme,
    };
};
