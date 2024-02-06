import { memo } from 'react';
import { classNames } from 'shared/lib';
import styles from './ThemeToggler.module.scss';
import { Theme, useTheme } from 'app/providers/themeProvider';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import ThemeIconLight from 'shared/assets/icons/theme-icon-light.svg';
import ThemeIconDark from 'shared/assets/icons/theme-icon-dark.svg';
interface ThemeTogglerProps {
    className?: string;
}

export const ThemeToggler = memo(({ className }: ThemeTogglerProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button className={classNames(styles.ThemeToggler)} theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <ThemeIconDark width={'40px'} /> : <ThemeIconLight width={'40px'} />}
        </Button>
    );
});
