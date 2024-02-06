import { type ReducersMapObject } from '@reduxjs/toolkit';
import { type Decorator } from '@storybook/react';
import { StoreProvider, type StateSchema } from 'app/providers/storeProvider';
import { ProfileReducer } from 'entities/Profile';
import { LoginReducer } from 'features/AuthByUserName/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    login: LoginReducer,
    profile: ProfileReducer,
};

export const StoreDecorator: (
    initialState?: DeepPartial<StateSchema>,
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>
) => Decorator<Record<string, unknown>> =
    (initialState?: DeepPartial<StateSchema>, asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>) =>
    (Story) => {
        if (!initialState) {
            initialState = {
                counter: { value: 10 },
                login: { isLoading: false },
                user: { Auth: undefined },
                profile: { isLoading: false },
            };
        }
        return (
            <StoreProvider
                initialState={initialState as StateSchema}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducer }}
            >
                <Story />
            </StoreProvider>
        );
    };
