import type { Preview } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from '../../src/app/providers/themeProvider';
const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export default preview;
