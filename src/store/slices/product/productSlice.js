import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    page: 1,
    products: [],
    productSelected: {},
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        startLoadingProducts: (state) => {
            state.isLoading = true;
        },
        setProducts: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.products = action.payload;
        },
        setProductSelected: (state, action) => {
            state.isLoading = false;
            state.productSelected = action.payload;
        },

    },
});

export const { startLoadingProducts, setProducts, setProductSelected } = productSlice.actions;