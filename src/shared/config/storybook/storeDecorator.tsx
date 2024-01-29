import { type Decorator } from '@storybook/react';
import { type StateSchema } from 'app/providers/storeProvider';
import { createReduxStore } from 'app/providers/storeProvider/config/store';
import { Provider } from 'react-redux';

export const StoreDecorator: (initialState?: Partial<StateSchema>) => Decorator<Record<string, unknown>> =
    (initialState?: StateSchema) => (Story) => {
        if (!initialState) {
            initialState = {
                counter: { value: 10 },
                login: { isLoading: false },
                user: { Auth: undefined },
            };
        }
        const store = createReduxStore(initialState);
        return (
            <Provider store={store}>
                <Story />
            </Provider>
        );
    };
