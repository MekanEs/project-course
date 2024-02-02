import { type ReactNode, type FC } from 'react';
import { type StateSchema } from '../config/StateSchema';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { type ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema;
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState, asyncReducers }) => {
    const store = createReduxStore(initialState, asyncReducers as ReducersMapObject<StateSchema>);
    return <Provider store={store}>{children}</Provider>;
};
