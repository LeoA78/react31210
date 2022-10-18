import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    user: {},
    isLogged: false,
    message: null
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        startLoadingUser: (state) => {
            state.isLoading = true;
        },
        registerUser: (state) => {
            state.isLoading = false;
        },
        loginUser: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isLogged = true;
        },
        logoutUser: (state, action) => {
            state.isLoading = false;
            state.user = {};
            state.isLogged = false;
        },
        setMessage: (state, action) => {
            state.isLoading = false;
            state.message = action.payload;
        },
        clearMessage: (state) => {
            state.message = null;
        }

    },
});

export const { startLoadingUser, registerUser, loginUser, logoutUser, setMessage, clearMessage } = userSlice.actions;





















