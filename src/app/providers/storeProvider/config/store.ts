import { type ReducersMapObject, configureStore, type Reducer, type Action } from '@reduxjs/toolkit';
import { type ExtraThunkArg, type ReduxStoreWithManager, type StateSchema } from './StateSchema';
import { CounterReducer } from 'entities/Counter';
import { UserReducer } from 'entities/User';
import { createReducerManager } from './createReducerManager';
import { $api } from 'shared/api/api';
import { type NavigateFunction } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createReduxStore(
    initialState: StateSchema,
    navigate?: NavigateFunction,
    asyncReducers?: ReducersMapObject<StateSchema>
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: CounterReducer,
        user: UserReducer,
    };
    const reducerManager = createReducerManager(rootReducer);
    const extraArg: ExtraThunkArg = {
        api: $api,
        navigate,
    };
    const store: ReduxStoreWithManager = configureStore({
        reducer: reducerManager.reduce as Reducer<ReturnType<typeof reducerManager.reduce>, Action, StateSchema>,
        devTools: _IS_DEV_,
        preloadedState: initialState,
        middleware: (getDefaultMiddleWare) =>
            getDefaultMiddleWare({
                thunk: {
                    extraArgument: extraArg,
                },
            }),
    });
    store.reducerManager = reducerManager;
    return store;
}

export type RootState = ReducersMapObject<StateSchema>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
