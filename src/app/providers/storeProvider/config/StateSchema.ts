import type {
    ReducersMapObject,
    EnhancedStore,
    Reducer,
    Action,
    StateFromReducersMapObject,
    UnknownAction,
    StoreEnhancer,
    Tuple,
    ThunkDispatch,
    PreloadedStateShapeFromReducersMapObject,
} from '@reduxjs/toolkit';
import { type AsyncThunkConfig } from '@reduxjs/toolkit/dist/createAsyncThunk';
import { type AxiosInstance } from 'axios';
import type { CounterSchema } from 'entities/Counter';
import { type ProfileSchema } from 'entities/Profile';
import { type UserSchema } from 'entities/User';
import { type LoginSchema } from 'features/AuthByUserName';
import { type NavigateFunction } from 'react-router-dom';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // async reducers
    login?: LoginSchema;
    profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;
export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: PreloadedStateShapeFromReducersMapObject<ReducersMapObject<StateSchema>>,
        action: Action
    ) => StateFromReducersMapObject<ReducersMapObject<StateSchema>>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}
export type CustomEnhancedStore = EnhancedStore<
    StateSchema,
    UnknownAction,
    Tuple<
        [
            StoreEnhancer<{
                dispatch: ThunkDispatch<StateSchema, ExtraThunkArg, UnknownAction>;
            }>,
            StoreEnhancer,
        ]
    >
>;
export interface ReduxStoreWithManager
    extends EnhancedStore<
        StateSchema,
        UnknownAction,
        Tuple<
            [
                StoreEnhancer<{
                    dispatch: ThunkDispatch<StateSchema, ExtraThunkArg, UnknownAction>;
                }>,
                StoreEnhancer,
            ]
        >
    > {
    reducerManager?: ReducerManager;
}
export interface ExtraThunkArg {
    api: AxiosInstance;
    navigate?: NavigateFunction;
}

export interface ThunkConfig<T> extends AsyncThunkConfig {
    rejectValue: T;
    extra: ExtraThunkArg;
}
