import { type ReducersMapObject, configureStore, type ThunkDispatch, type UnknownAction } from '@reduxjs/toolkit';
import { type ReduxStoreWithManager, type StateSchema } from './StateSchema';
import { CounterReducer } from 'entities/Counter';
import { UserReducer } from 'entities/User';
import { useDispatch } from 'react-redux';
import { createReducerManager } from './createReducerManager';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createReduxStore(initialState: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: CounterReducer,
        user: UserReducer,
    };
    const reducerManager = createReducerManager(rootReducer);
    const store: ReduxStoreWithManager = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: _IS_DEV_,
        preloadedState: initialState,
    });

    store.reducerManager = reducerManager;
    return store;
}

export type RootState = ReducersMapObject<StateSchema>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppThunkDispatch = ThunkDispatch<RootState, any, UnknownAction>;
export const useAppDispatch = (): AppThunkDispatch => useDispatch<AppThunkDispatch>();
