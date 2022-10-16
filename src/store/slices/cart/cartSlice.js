import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    total: 0,
    amount: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {

            if(state.cart.some((item) => item.id === action.payload.id)) {
                state.cart = state.cart.map((item) => item.id === action.payload.id ? {
                    ...item,
                    amount: item.amount + action.payload.amount,
                } : item);
            }else{

                state.cart.push(action.payload);
            }
            state.amount += action.payload.amount;
            state.total += action.payload.unitPrice * action.payload.amount;
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
            state.amount -= action.payload.amount;
            state.total -= action.payload.unitPrice * action.payload.amount;
        },
        clearCart: (state) => {
            state.cart = [];
        },
        updateCart: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    item.amount = action.payload.amount;
                    item.unitPrice = action.payload.unitPrice;
                }
                return item;
            });
            state.amount = state.cart.reduce((acc, item) => acc + item.amount, 0);
            state.total = state.cart.reduce((acc, item) => acc + item.unitPrice * item.amount, 0);
        },
        getTotals: (state) => {
            state.amount = state.cart.reduce((acc, item) => acc + item.amount, 0);
            state.total = state.cart.reduce((acc, item) => acc + item.price * item.amount, 0);
        },
    },
});

export const { addToCart, removeFromCart, clearCart, updateCart, getTotals } = cartSlice.actions;
