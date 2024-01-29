import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type UserSchema } from '../types/UserSchema';
import { type User } from '../types/user';
import { LOCALSTORAGE_USER_KEY } from 'shared/const/localStorage';

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData(state, action: PayloadAction<User>) {
            state.Auth = action.payload;
        },
        logout(state) {
            localStorage.removeItem(LOCALSTORAGE_USER_KEY);
            state.Auth = undefined;
        },
    },
});

export const { actions: UserActions, reducer: UserReducer } = userSlice;
