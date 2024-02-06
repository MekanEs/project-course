import { type ReactNode, type FC } from 'react';
import { type StateSchema } from '../config/StateSchema';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { type ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState, asyncReducers }) => {
    const navigate = useNavigate();
    const store = createReduxStore(initialState, navigate, asyncReducers as ReducersMapObject<StateSchema>);
    return <Provider store={store}>{children}</Provider>;
};
