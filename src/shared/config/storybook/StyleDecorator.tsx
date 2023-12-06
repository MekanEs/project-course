import { type Decorator } from '@storybook/react';
import { ThemeProvider, type Theme } from 'app/providers/themeProvider';
import 'app/styles/index.scss';
import './storybook.scss';
import { classNames } from 'shared/lib';

export const ThemeDecorator: (
    theme: Theme
    // eslint-disable-next-line react/display-name
) => Decorator<Record<string, unknown>> = (theme: Theme) => (Story) => (
    <ThemeProvider defaultT={theme}>
        <div className={classNames('app', {}, [theme, 'container'])}>
            <Story />
        </div>
    </ThemeProvider>
);
