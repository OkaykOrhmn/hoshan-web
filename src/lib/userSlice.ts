// src/store/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../data/userInfo';

interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        clearUserData: (state) => {
            state.user = null;
        },
    },
});

export const { setUserData, clearUserData } = userSlice.actions;

export default userSlice.reducer;
