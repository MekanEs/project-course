import { configureStore } from '@reduxjs/toolkit';
import { type StateSchema } from './StateSchema';
import { CounterReducer } from 'entities/Counter';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createReduxStore(initialState: StateSchema) {
    const store = configureStore<StateSchema>({
        reducer: {
            counter: CounterReducer,
        },
        devTools: _IS_DEV_,
        preloadedState: initialState,
    });
    return store;
}
