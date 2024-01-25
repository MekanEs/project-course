import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { type StateSchema } from './StateSchema';
import { CounterReducer } from 'entities/Counter';
import { UserReducer } from 'entities/User';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createReduxStore(initialState: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: CounterReducer,
        user: UserReducer,
    };
    const store = configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: _IS_DEV_,
        preloadedState: initialState,
    });
    return store;
}
