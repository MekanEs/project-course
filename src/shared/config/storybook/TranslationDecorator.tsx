import { type Decorator } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18nProject from '../i18n/i18n';

export const TranslationDecorator: () => Decorator<Record<string, unknown>> = () => (Story) => (
    <I18nextProvider i18n={i18nProject}>
        <Story />
    </I18nextProvider>
);
