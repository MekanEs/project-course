import type { ReducersMapObject, EnhancedStore, Reducer, Action, StateFromReducersMapObject } from '@reduxjs/toolkit';
import type { CounterSchema } from 'entities/Counter';
import { type UserSchema } from 'entities/User';
import { type LoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // async reducers
    login?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: Action) => StateFromReducersMapObject<ReducersMapObject<StateSchema>>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager?: ReducerManager;
}
