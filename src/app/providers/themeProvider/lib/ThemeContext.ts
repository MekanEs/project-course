import { createContext } from 'react';

export const LOCAL_STRORAGE_THEME_KEY = 'theme_key';

export enum Theme {
    LIGHT = 'light_theme',
    DARK = 'dark_theme',
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextProps>({});
