import { type ReducersMapObject } from '@reduxjs/toolkit';
import { type Decorator } from '@storybook/react';
import { StoreProvider, type StateSchema } from 'app/providers/storeProvider';
import { LoginReducer } from 'features/AuthByUserName/model/slice/loginSlice';

const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
    login: LoginReducer,
};

export const StoreDecorator: (
    initialState?: Partial<StateSchema>,
    asyncReducer?: Partial<ReducersMapObject<StateSchema>>
) => Decorator<Record<string, unknown>> =
    (initialState?: StateSchema, asyncReducer?: Partial<ReducersMapObject<StateSchema>>) => (Story) => {
        if (!initialState) {
            initialState = {
                counter: { value: 10 },
                login: { isLoading: false },
                user: { Auth: undefined },
            };
        }
        return (
            <StoreProvider initialState={initialState} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducer }}>
                <Story />
            </StoreProvider>
        );
    };
