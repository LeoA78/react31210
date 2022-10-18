import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    order: null,
    message: null
}


export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        startLoadingOrder: (state) => {
            state.isLoading = true;
        },
        createOrder: (state, action) => {
            state.isLoading = false;
            state.order = action.payload;
        },
        setMessage: (state, action) => {
            state.isLoading = false;
            state.message = action.payload;
        },
        clearMessage: (state) => {
            state.message = null;
        },
        clearOrder: (state) => {
            state.order = null;
        },
    },
});

export const { startLoadingOrder, createOrder, setMessage, clearMessage, clearOrder } = orderSlice.actions;


