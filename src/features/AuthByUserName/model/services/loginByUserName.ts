import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/storeProvider';
import { AxiosError } from 'axios';
import { UserActions, type User } from 'entities/User';
import { LOCALSTORAGE_USER_KEY } from 'shared/const/localStorage';

export interface LoginByUserNameProps {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, ThunkConfig<string>>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.post<User>('/login', {
                username: authData.username,
                password: authData.password,
            });

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(response.data));
            const { id, username } = response.data;
            thunkAPI.dispatch(UserActions.setUserData({ id, username }));
            return response.data;
        } catch (e) {
            if (e instanceof AxiosError) {
                return thunkAPI.rejectWithValue(e.response?.data.message || 'fetchError');
            }

            return thunkAPI.rejectWithValue('fetchError');
        }
    }
);
