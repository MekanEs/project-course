import type { Preview } from '@storybook/react';

import { Theme } from '../../src/app/providers/themeProvider';

import { RouterDecorator, StoreDecorator, ThemeDecorator, TranslationDecorator } from 'shared/config/storybook';
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
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator(), RouterDecorator(), TranslationDecorator()],
};

export default preview;
