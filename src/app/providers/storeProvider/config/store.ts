import { type ReducersMapObject, configureStore, type ThunkDispatch, type UnknownAction } from '@reduxjs/toolkit';
import { type StateSchema } from './StateSchema';
import { CounterReducer } from 'entities/Counter';
import { UserReducer } from 'entities/User';
import { LoginReducer } from 'features/AuthByUserName';
import { useDispatch } from 'react-redux';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createReduxStore(initialState: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: CounterReducer,
        user: UserReducer,
        login: LoginReducer,
    };
    const store = configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: _IS_DEV_,
        preloadedState: initialState,
    });
    return store;
}
export type RootState = ReducersMapObject<StateSchema>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppThunkDispatch = ThunkDispatch<RootState, any, UnknownAction>;
export const useAppDispatch = (): AppThunkDispatch => useDispatch<AppThunkDispatch>();
