import { type FC, useMemo, useState, type ReactElement } from 'react';
import {
    LOCAL_STRORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from '../lib/ThemeContext';
const defaultTheme =
    (localStorage.getItem(LOCAL_STRORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export interface ThemeProviderProps {
    children: ReactElement;
    defaultT?: Theme;
}
const ThemeProvider: FC<ThemeProviderProps> = ({
    children,
    defaultT = defaultTheme,
}) => {
    const [theme, setTheme] = useState<Theme>(defaultT);
    document.body.className = theme;

    const defaultValue = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    );
    return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
