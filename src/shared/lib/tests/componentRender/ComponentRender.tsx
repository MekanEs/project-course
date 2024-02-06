import { type ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';

import { MemoryRouter } from 'react-router-dom';
import { type StateSchema, StoreProvider } from 'app/providers/storeProvider';
import i18nForTesting from '../../../config/i18n/i18nextForTest';
export interface RenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function ComponentRender(children: ReactNode, options: RenderOptions = {}) {
    const { route = '/', initialState } = options;
    return render(
        <StoreProvider initialState={initialState as StateSchema}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTesting}>{children}</I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    );
}
