import { type FC, useEffect, type ReactNode } from 'react';
import { type ReduxStoreWithManager, type StateSchemaKey } from 'app/providers/storeProvider/config/StateSchema';
import { type Reducer } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';
import { useAppDispatch } from 'app/providers/storeProvider';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

export type ReducerEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    children: ReactNode;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { reducers, children, removeAfterUnmount = false } = props;
    const dispatch = useAppDispatch();
    const store: ReduxStoreWithManager = useStore();
    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducerEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: '@init' });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]: ReducerEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: '@destroy' });
                });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <>{children}</>;
};
