import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type ProfileSchema } from '../types/ProfileSchema';
import { fetchProfile } from '../services/fetchProfile';
import { type Profile } from '../types/types';

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProfile.pending, (state) => {
            state.fetchError = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchProfile.rejected, (state, action) => {
            console.log(action)
            state.fetchError = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false;
            state.data = action.payload;
            state.fetchError = undefined;
        });
    },
});

export const { actions: ProfileActions, reducer: ProfileReducer } = profileSlice;
