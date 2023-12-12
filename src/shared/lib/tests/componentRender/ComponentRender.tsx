import { type ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';

import { MemoryRouter } from 'react-router-dom';
import i18nForTesting from 'shared/config/i18n/i18nextForTest';
export interface RenderOptions {
    route?: string;
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function ComponentRender(children: ReactNode, options?: RenderOptions) {
    const { route = '/' } = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTesting}>{children}</I18nextProvider>
        </MemoryRouter>
    );
}
