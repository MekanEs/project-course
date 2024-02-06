import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/storeProvider';

import { type Profile } from '../types/types';
import { AxiosError } from 'axios';

export const fetchProfile = createAsyncThunk<Profile, undefined, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.get<Profile>('/profile');
            console.log('response', response);
            if (!response.data || response.status !== 200) {
                console.log('error fetch error');
                throw new Error();
            }

            return response.data;
        } catch (e) {
            if (e instanceof AxiosError) {
                return rejectWithValue(e.response?.data.message || 'error');
            }

            return rejectWithValue('error');
        }
    }
);
