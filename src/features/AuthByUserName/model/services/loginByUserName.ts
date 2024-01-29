import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserActions, type User } from 'entities/User';
import axios from 'axios';
import { LOCALSTORAGE_USER_KEY } from 'shared/const/localStorage';

export interface LoginByUserNameProps {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, { rejectValue: string }>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', {
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
            return thunkAPI.rejectWithValue('fetchError');
        }
    }
);
