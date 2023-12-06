import { type ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nextForTest';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function renderWithTranslation(children: ReactNode) {
    return render(<I18nextProvider i18n={i18n}>{children}</I18nextProvider>);
}
