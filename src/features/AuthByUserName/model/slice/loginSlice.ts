import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type LoginSchema } from '../types/loginSchema';
import { loginByUserName } from '../services/loginByUserName';

const initialState: LoginSchema = {
    isLoading: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setError(state, action: PayloadAction<string | undefined>) {
            state.fetchError = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUserName.pending, (state, action) => {
            state.fetchError = undefined;
            state.isLoading = true;
        });
        builder.addCase(loginByUserName.rejected, (state, action) => {
            state.fetchError = action.payload;
            state.isLoading = false;
        });
        builder.addCase(loginByUserName.fulfilled, (state, action) => {
            state.isLoading = false;
        });
    },
});

export const { actions: LoginActions, reducer: LoginReducer } = loginSlice;
